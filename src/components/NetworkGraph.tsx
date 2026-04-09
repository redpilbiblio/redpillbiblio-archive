import { useEffect, useRef, useState, useCallback } from 'react';
import { zoom, zoomIdentity } from 'd3-zoom';
import type { ZoomBehavior } from 'd3-zoom';
import { select } from 'd3-selection';
import { supabase, Document } from '@/lib/supabase';
import { PILLAR_SUBCATEGORIES, pillarToPath } from '@/lib/subcategories';

interface GraphNode {
  id: string;
  name: string;
  shortName?: string;
  fullPath?: string;
  type: 'grandparent' | 'parent' | 'grandchild';
  parentId?: string;
  grandparentId?: string;
  tier?: string;
  description?: string;
  sourceUrl?: string | null;
  docCount?: number;
  expanded: boolean;
  visible: boolean;
  minimized: boolean;
  children: string[];
  x: number;
  y: number;
  fx: number | null;
  fy: number | null;
  opacity: number;
  originalDoc?: Document;
  earliestDate?: string | null;
}

interface GraphLink {
  source: string;
  target: string;
  type: 'gp-parent' | 'parent-child';
}

interface NetworkGraphProps {
  onDocumentSelect: (doc: Document) => void;
}

const VERTICAL_GAP = 90;
const HORIZONTAL_OFFSET = 180;
const CHILD_HORIZONTAL_OFFSET = 140;
const PILLAR_Y = 60;
const PILLAR_Y_ROW2 = 130;
const STAIR_START_GAP = 80;
const MIN_NODE_GAP = 40;
const MOBILE_BREAKPOINT = 768;

export function NetworkGraph({ onDocumentSelect }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesContainerRef = useRef<HTMLDivElement>(null);
  const graphAreaRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadTimeout, setLoadTimeout] = useState<'slow' | 'failed' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({ docs: 0, pillars: 0, subcats: 0, visible: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const transformRef = useRef(zoomIdentity);
  const nodeMapRef = useRef<Record<string, GraphNode>>({});
  const nodeElementsRef = useRef<Record<string, HTMLDivElement>>({});
  const rafRef = useRef<number | null>(null);
  const zoomRef = useRef<ZoomBehavior<HTMLCanvasElement, unknown> | null>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const nodesRef = useRef<GraphNode[]>([]);
  const linksRef = useRef<GraphLink[]>([]);
  const activeGpRef = useRef<string | null>(null);
  const activeParentRef = useRef<string | null>(null);
  const animFramesRef = useRef<Map<string, { startX: number; startY: number; endX: number; endY: number; startTime: number; duration: number }>>(new Map());
  const minimizedNodesRef = useRef<Set<string>>(new Set());

  const buildGraphData = useCallback((docs: Document[]) => {
    const graphNodes: GraphNode[] = [];
    const graphLinks: GraphLink[] = [];
    let nodeId = 0;

    const validPillars = new Set(Object.keys(PILLAR_SUBCATEGORIES));

    const pillarGroups: Record<string, Document[]> = {};
    for (const doc of docs) {
      const pillar = doc.document_type || '';
      if (!validPillars.has(pillar)) continue;
      if (!pillarGroups[pillar]) pillarGroups[pillar] = [];
      pillarGroups[pillar].push(doc);
    }

    for (const [pillar, pillarDocs] of Object.entries(pillarGroups)) {
      const gpId = `gp_${nodeId++}`;
      const gpPath = pillarToPath(pillar);

      const subcatGroups: Record<string, Document[]> = {};
      for (const doc of pillarDocs) {
        const subcat = doc.subcategory || 'general';
        if (!subcatGroups[subcat]) subcatGroups[subcat] = [];
        subcatGroups[subcat].push(doc);
      }

      const gpNode: GraphNode = {
        id: gpId,
        name: pillar,
        shortName: gpPath,
        fullPath: pillar,
        type: 'grandparent',
        docCount: pillarDocs.length,
        expanded: false,
        visible: true,
        minimized: false,
        children: [],
        x: 0, y: PILLAR_Y,
        fx: null, fy: null,
        opacity: 1,
      };
      graphNodes.push(gpNode);

      for (const [subcat, subcatDocs] of Object.entries(subcatGroups)) {
        const pId = `p_${nodeId++}`;

        const sortedDocs = [...subcatDocs].sort((a, b) => {
          if (!a.date_published && !b.date_published) return 0;
          if (!a.date_published) return 1;
          if (!b.date_published) return -1;
          return new Date(a.date_published).getTime() - new Date(b.date_published).getTime();
        });

        const earliestDate = sortedDocs[0]?.date_published || null;

        const pNode: GraphNode = {
          id: pId,
          name: `${gpPath}/${subcat}`,
          shortName: subcat,
          type: 'parent',
          parentId: gpId,
          docCount: subcatDocs.length,
          expanded: false,
          visible: false,
          minimized: false,
          children: [],
          x: 0, y: 0,
          fx: null, fy: null,
          opacity: 1,
          earliestDate,
        };
        graphNodes.push(pNode);
        graphLinks.push({ source: gpId, target: pId, type: 'gp-parent' });
        gpNode.children.push(pId);

        for (const doc of sortedDocs) {
          const gcId = `gc_${nodeId++}`;
          const slug = doc.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '')
            .substring(0, 30);

          const gcNode: GraphNode = {
            id: gcId,
            name: slug,
            fullPath: `${gpPath}/${subcat}/${slug}`,
            type: 'grandchild',
            parentId: pId,
            grandparentId: gpId,
            tier: doc.verification_tier,
            description: doc.description,
            sourceUrl: doc.source_url,
            expanded: false,
            visible: false,
            minimized: false,
            children: [],
            originalDoc: doc,
            x: 0, y: 0,
            fx: null, fy: null,
            opacity: 1,
            earliestDate: doc.date_published || null,
          };
          graphNodes.push(gcNode);
          graphLinks.push({ source: pId, target: gcId, type: 'parent-child' });
          pNode.children.push(gcId);
        }
      }
    }

    return { nodes: graphNodes, links: graphLinks };
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    setLoadTimeout(null);
    try {
      const { data: docs } = await supabase
        .from('documents')
        .select('*')
        .order('date_published', { ascending: false });

      if (docs && docs.length > 0) {
        const { nodes: gNodes, links: gLinks } = buildGraphData(docs);

        const map: Record<string, GraphNode> = {};
        gNodes.forEach(n => { map[n.id] = n; });
        nodeMapRef.current = map;
        nodesRef.current = gNodes;
        linksRef.current = gLinks;

        updateStats(gNodes);
        setLoading(false);
      }
    } catch (err) {
      console.error('Error loading documents:', err);
    } finally {
      setLoading(false);
    }
  }, [buildGraphData]);

  useEffect(() => {
    loadData();
    const slowTimer = setTimeout(() => setLoadTimeout('slow'), 10000);
    const failTimer = setTimeout(() => setLoadTimeout('failed'), 30000);
    return () => {
      clearTimeout(slowTimer);
      clearTimeout(failTimer);
    };
  }, [loadData]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
      if (nodesRef.current.length > 0) {
        layoutPillarRow();
        if (activeGpRef.current) {
          const gp = nodeMapRef.current[activeGpRef.current];
          if (gp) {
            if (activeParentRef.current) {
              const p = nodeMapRef.current[activeParentRef.current];
              if (p) layoutWitchesStairs(p, p.children.filter(id => nodeMapRef.current[id]?.visible));
            } else {
              const visibleChildren = gp.children.filter(id => nodeMapRef.current[id]?.visible);
              layoutWitchesStairs(gp, visibleChildren);
            }
          }
        }
        scheduleRender();
        fitToView(200);
      }
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (nodesRef.current.length === 0 || !canvasRef.current || !graphAreaRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const area = graphAreaRef.current;

    function updateDimensions() {
      const w = area.clientWidth;
      const h = area.clientHeight;
      dimensionsRef.current = { width: w, height: h };
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }
    updateDimensions();

    layoutPillarRow();

    const zoomBehavior = zoom<HTMLCanvasElement, unknown>()
      .scaleExtent(isMobile ? [1, 1] : [0.15, 3])
      .on('zoom', (event) => {
        transformRef.current = event.transform;
        scheduleRender();
      });

    zoomRef.current = zoomBehavior;
    const selection = select(canvas).call(zoomBehavior).on('dblclick.zoom', null);

    if (isMobile) {
      selection.on('wheel.zoom', null);
    }

    const forwardWheelToCanvas = (e: WheelEvent) => {
      e.preventDefault();
      canvas.dispatchEvent(new WheelEvent('wheel', {
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaMode: e.deltaMode,
        clientX: e.clientX,
        clientY: e.clientY,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        bubbles: false,
      }));
    };

    const graphArea = graphAreaRef.current;
    if (graphArea) {
      graphArea.addEventListener('wheel', forwardWheelToCanvas, { passive: false });
    }

    scheduleRender();
    fitToView(200);

    const onResize = () => {
      updateDimensions();
      layoutPillarRow();
      if (activeGpRef.current) {
        const gp = nodeMapRef.current[activeGpRef.current];
        if (gp) {
          if (activeParentRef.current) {
            const p = nodeMapRef.current[activeParentRef.current];
            if (p) layoutWitchesStairs(p, p.children.filter(id => nodeMapRef.current[id]?.visible));
          } else {
            const visibleChildren = gp.children.filter(id => nodeMapRef.current[id]?.visible);
            layoutWitchesStairs(gp, visibleChildren);
          }
        }
      }
      scheduleRender();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (graphArea) graphArea.removeEventListener('wheel', forwardWheelToCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function scheduleRender() {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;

      if (animFramesRef.current.size > 0) {
        const now = Date.now();
        let hasActive = false;
        animFramesRef.current.forEach((anim, nodeId) => {
          const progress = Math.min((now - anim.startTime) / anim.duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const node = nodeMapRef.current[nodeId];
          if (node) {
            node.x = anim.startX + (anim.endX - anim.startX) * eased;
            node.y = anim.startY + (anim.endY - anim.startY) * eased;
            node.fx = node.x;
            node.fy = node.y;
          }
          if (progress >= 1) {
            animFramesRef.current.delete(nodeId);
          } else {
            hasActive = true;
          }
        });
        if (hasActive) {
          rafRef.current = null;
          scheduleRender();
        }
      }

      renderEdges(ctx);
      renderNodes();
    });
  }

  function layoutPillarRow() {
    const { width } = dimensionsRef.current;
    const currentNodes = nodesRef.current;
    const gpNodes = currentNodes.filter(n => n.type === 'grandparent');

    if (isMobile) {
      const centerX = width / 2;
      let currentY = 40;

      gpNodes.forEach((node) => {
        node.x = centerX;
        node.y = currentY;
        node.fx = node.x;
        node.fy = node.y;
        node.visible = true;

        if (!node.expanded) {
          currentY += 60;
        } else {
          currentY += 60;
          const visibleChildren = node.children.filter(id => {
            const child = nodeMapRef.current[id];
            return child && child.visible && !child.minimized;
          });
          visibleChildren.forEach(childId => {
            const child = nodeMapRef.current[childId];
            if (child && child.expanded) {
              const grandchildren = child.children.filter(gcId => {
                const gc = nodeMapRef.current[gcId];
                return gc && gc.visible && !gc.minimized;
              });
              currentY += (grandchildren.length * 45) + 50;
            } else {
              currentY += 50;
            }
          });
        }
      });
    } else {
      const nodesPerRow = 5;
      const gap = 20;
      const pillarWidth = Math.min(280, (width - (gap * (nodesPerRow - 1)) - 40) / nodesPerRow);
      const horizontalSpacing = pillarWidth + gap;
      const totalRowWidth = nodesPerRow * pillarWidth + (nodesPerRow - 1) * gap;
      const startX = Math.max(20, (width - totalRowWidth) / 2) + pillarWidth / 2;

      gpNodes.forEach((node, i) => {
        const rowIndex = Math.floor(i / nodesPerRow);
        const colIndex = i % nodesPerRow;

        const offsetX = rowIndex === 1 ? horizontalSpacing / 2 : 0;

        node.x = startX + (colIndex * horizontalSpacing) + offsetX;
        node.y = rowIndex === 0 ? PILLAR_Y : PILLAR_Y_ROW2;
        node.fx = node.x;
        node.fy = node.y;
        node.visible = true;
      });
    }
  }

  function layoutWitchesStairs(parentNode: GraphNode, childIds: string[]) {
    const sortedIds = [...childIds].sort((a, b) => {
      const nodeA = nodeMapRef.current[a];
      const nodeB = nodeMapRef.current[b];
      const dateA = nodeA?.earliestDate;
      const dateB = nodeB?.earliestDate;
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });

    const startX = parentNode.fx ?? parentNode.x;
    const startY = (parentNode.fy ?? parentNode.y) + STAIR_START_GAP;

    if (isMobile) {
      const indent = parentNode.type === 'grandparent' ? 30 : 60;
      const verticalGap = parentNode.type === 'grandparent' ? 50 : 45;

      sortedIds.forEach((childId, index) => {
        const child = nodeMapRef.current[childId];
        if (!child) return;

        const targetX = startX + indent;
        const targetY = startY + index * verticalGap;

        animateNodeTo(child, targetX, targetY, 300);
      });
    } else {
      const firstChild = childIds.length > 0 ? nodeMapRef.current[childIds[0]] : null;
      const isGrandchildLevel = firstChild?.type === 'grandchild';
      const horizontalOffset = isGrandchildLevel ? CHILD_HORIZONTAL_OFFSET : HORIZONTAL_OFFSET;

      sortedIds.forEach((childId, index) => {
        const child = nodeMapRef.current[childId];
        if (!child) return;

        const direction = index % 2 === 0 ? 1 : -1;
        const targetX = startX + direction * horizontalOffset;
        const targetY = startY + index * VERTICAL_GAP;

        animateNodeTo(child, targetX, targetY, 300);
      });
    }
  }

  function animateNodeTo(node: GraphNode, targetX: number, targetY: number, duration: number) {
    animFramesRef.current.set(node.id, {
      startX: node.x,
      startY: node.y,
      endX: targetX,
      endY: targetY,
      startTime: Date.now(),
      duration,
    });
    node.fx = targetX;
    node.fy = targetY;
    scheduleRender();
  }

  function renderEdges(ctx: CanvasRenderingContext2D) {
    const { width, height } = dimensionsRef.current;
    const t = transformRef.current;
    const currentLinks = linksRef.current;

    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(t.x, t.y);
    ctx.scale(t.k, t.k);

    ctx.lineWidth = 1;

    currentLinks.forEach(l => {
      const s = nodeMapRef.current[l.source];
      const tt = nodeMapRef.current[l.target];
      if (!s?.visible || !tt?.visible) return;
      if (s.minimized || tt.minimized) return;

      const isGpLink = l.type === 'gp-parent';
      ctx.strokeStyle = isGpLink ? 'rgba(0, 255, 65, 0.3)' : 'rgba(51, 51, 51, 0.8)';
      ctx.beginPath();
      ctx.moveTo(s.x, s.y + (s.type === 'grandparent' ? 18 : s.type === 'parent' ? 14 : 26));
      ctx.lineTo(tt.x, tt.y - (tt.type === 'grandparent' ? 18 : tt.type === 'parent' ? 14 : 26));
      ctx.stroke();
    });

    ctx.restore();
  }

  function renderNodes() {
    const container = nodesContainerRef.current;
    if (!container) return;

    const t = transformRef.current;
    const { width: W, height: H } = dimensionsRef.current;
    const invScale = 1 / t.k;
    const padding = 400;
    const viewMinX = -t.x * invScale - padding;
    const viewMinY = -t.y * invScale - padding;
    const viewMaxX = viewMinX + W * invScale + padding * 2;
    const viewMaxY = viewMinY + H * invScale + padding * 2;

    const currentNodes = nodesRef.current;
    currentNodes.forEach(node => {
      let el = nodeElementsRef.current[node.id];

      if (!node.visible || node.minimized) {
        if (el) el.style.display = 'none';
        return;
      }

      const inView = node.x >= viewMinX && node.x <= viewMaxX &&
                     node.y >= viewMinY && node.y <= viewMaxY;
      if (!inView) {
        if (el) el.style.display = 'none';
        return;
      }

      if (!el) {
        el = createNodeElement(node);
        container.appendChild(el);
        nodeElementsRef.current[node.id] = el;
      }

      el.style.display = '';
      let nw, nh;
      if (node.type === 'grandparent') {
        const w = dimensionsRef.current.width;
        nw = isMobile ? Math.min(w - 40, 280) : Math.max(160, Math.min(280, (w - (20 * 4) - 40) / 5));
        nh = 44;
      } else if (node.type === 'parent') {
        nw = isMobile ? Math.min(dimensionsRef.current.width - 70, 280) : 150;
        nh = 34;
      } else {
        nw = isMobile ? Math.min(dimensionsRef.current.width - 100, 250) : 220;
        nh = 28;
      }
      const sx = t.applyX(node.x) - nw / 2;
      const sy = t.applyY(node.y) - nh / 2;
      el.style.transform = `translate(${sx}px, ${sy}px)`;
      el.style.width = nw + 'px';
      el.style.height = nh + 'px';
      el.style.opacity = String(node.opacity);
    });
  }

  function createNodeElement(node: GraphNode): HTMLDivElement {
    const el = document.createElement('div');
    el.className = `network-node network-node-${node.type}`;
    if (node.type === 'grandchild' && node.tier) {
      el.classList.add(`tier-${node.tier}`);
    }
    el.dataset.nodeId = node.id;
    el.style.pointerEvents = 'auto';
    el.style.cursor = 'pointer';

    if (node.type === 'grandparent' || node.type === 'parent') {
      const label = node.type === 'grandparent' ? node.name : (node.shortName || node.name);
      el.innerHTML = `
        <span class="network-node-label">${label}</span>
        <span class="network-count-badge" style="display:${node.expanded ? 'none' : ''}">[${countDescendants(node)}]</span>
        <button class="network-collapse-btn">${node.expanded ? '\u2212' : '+'}</button>
      `;
    } else {
      const displayTitle = node.originalDoc?.title || node.name;
      const truncatedTitle = displayTitle.substring(0, 50) + (displayTitle.length > 50 ? '...' : '');

      let dateStr = 'No date';
      if (node.originalDoc?.date_published) {
        try {
          const date = new Date(node.originalDoc.date_published);
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          dateStr = `${months[date.getMonth()]} ${date.getFullYear()}`;
        } catch {
          dateStr = 'No date';
        }
      }

      let sourceCount = 0;
      if (node.originalDoc?.source_url) {
        const urls = node.originalDoc.source_url.split(',');
        sourceCount = urls.filter(u => u.trim()).length;
      }
      const sourceStr = sourceCount === 1 ? '1 source' : `${sourceCount} sources`;

      el.innerHTML = `
        <div class="network-node-content" style="display:flex;flex-direction:column;gap:2px;padding:4px;height:100%;justify-content:center;">
          <span class="network-node-label" style="line-height:1.1;" title="${displayTitle}">${truncatedTitle}</span>
          <span class="network-node-date" style="font-size:10px;color:#00ff41;opacity:0.6;line-height:1;">${dateStr}</span>
          <span class="network-node-sources" style="font-size:10px;color:#e5e5e5;opacity:0.5;line-height:1;">${sourceStr}</span>
        </div>
      `;
      el.title = displayTitle;
    }

    el.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('network-collapse-btn')) {
        e.stopPropagation();
        toggleNode(node);
        return;
      }

      if (node.type === 'grandparent') {
        toggleNode(node);
        return;
      }

      if (node.type === 'grandchild' && node.originalDoc) {
        onDocumentSelect(node.originalDoc);
      } else {
        toggleNode(node);
      }
    });

    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      minimizeNode(node);
    });

    return el;
  }

  function minimizeNode(node: GraphNode) {
    if (node.minimized) return;

    node.minimized = true;
    minimizedNodesRef.current.add(node.id);

    if (node.type === 'grandparent' && node.expanded) {
      collapseGrandparent(node);
    } else if (node.type === 'parent' && node.expanded) {
      collapseParent(node);
    }

    const el = nodeElementsRef.current[node.id];
    if (el) el.style.display = 'none';

    updateStats(nodesRef.current);
    scheduleRender();
  }

  function restoreAllMinimized() {
    minimizedNodesRef.current.forEach(nodeId => {
      const node = nodeMapRef.current[nodeId];
      if (node) {
        node.minimized = false;
        if (node.type === 'grandparent') node.visible = true;
      }
    });
    minimizedNodesRef.current.clear();
    layoutPillarRow();
    updateStats(nodesRef.current);
    scheduleRender();
  }

  function countDescendants(node: GraphNode): number {
    if (node.type === 'grandparent') {
      let count = 0;
      node.children.forEach(pId => {
        const parent = nodeMapRef.current[pId];
        if (parent) count += parent.children.length;
      });
      return count;
    }
    return node.children.length;
  }

  function fitToView(delay = 100) {
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas || !zoomRef.current) return;

      const { width, height } = dimensionsRef.current;
      const currentNodes = nodesRef.current;
      const visibleNodes = currentNodes.filter(n => n.visible && !n.minimized);
      if (visibleNodes.length === 0) return;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      visibleNodes.forEach(n => {
        const hw = n.type === 'grandparent' ? 170 : n.type === 'parent' ? 75 : 90;
        const hh = n.type === 'grandparent' ? 18 : n.type === 'parent' ? 14 : 26;
        if (n.x - hw < minX) minX = n.x - hw;
        if (n.y - hh < minY) minY = n.y - hh;
        if (n.x + hw > maxX) maxX = n.x + hw;
        if (n.y + hh > maxY) maxY = n.y + hh;
      });

      const boundsW = maxX - minX;
      const boundsH = maxY - minY;
      const pad = 80;
      const scaleX = (width - pad * 2) / boundsW;
      const scaleY = (height - pad * 2) / boundsH;
      let scale = Math.min(scaleX, scaleY);
      scale = Math.max(0.15, Math.min(scale, 1.5));

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      const tx = width / 2 - centerX * scale;
      const ty = height / 2 - centerY * scale;

      const newTransform = zoomIdentity.translate(tx, ty).scale(scale);

      select(canvas)
        .transition()
        .duration(400)
        .call(zoomRef.current.transform, newTransform);
    }, delay);
  }

  function toggleNode(node: GraphNode) {
    if (node.type === 'grandparent') {
      if (node.expanded) {
        collapseGrandparent(node);
      } else {
        expandGrandparent(node);
      }
    } else if (node.type === 'parent') {
      if (node.expanded) {
        collapseParent(node);
      } else {
        expandParent(node);
      }
    }
    updateStats(nodesRef.current);
  }

  function expandGrandparent(node: GraphNode) {
    if (activeGpRef.current && activeGpRef.current !== node.id) {
      const prevGp = nodeMapRef.current[activeGpRef.current];
      if (prevGp) collapseGrandparent(prevGp);
    }

    node.expanded = true;
    activeGpRef.current = node.id;
    activeParentRef.current = null;

    const currentNodes = nodesRef.current;
    currentNodes.forEach(n => {
      if (n.type === 'grandparent' && n.id !== node.id) {
        n.opacity = 0.4;
        const el = nodeElementsRef.current[n.id];
        if (el) el.style.opacity = '0.4';
      }
    });

    const sortedChildren = [...node.children].sort((a, b) => {
      const nodeA = nodeMapRef.current[a];
      const nodeB = nodeMapRef.current[b];
      const dateA = nodeA?.earliestDate;
      const dateB = nodeB?.earliestDate;
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });

    sortedChildren.forEach(pId => {
      const parent = nodeMapRef.current[pId];
      if (!parent || parent.minimized) return;
      parent.visible = true;
      parent.x = node.x;
      parent.y = node.y;
    });

    const visibleChildren = sortedChildren.filter(id => {
      const n = nodeMapRef.current[id];
      return n && !n.minimized;
    });
    layoutWitchesStairs(node, visibleChildren);

    updateNodeUI(node);
    fitToView(350);
  }

  function collapseGrandparent(node: GraphNode) {
    node.expanded = false;
    activeGpRef.current = null;
    activeParentRef.current = null;

    node.children.forEach(pId => {
      const parent = nodeMapRef.current[pId];
      if (!parent) return;
      parent.visible = false;
      parent.expanded = false;
      parent.children.forEach(gcId => {
        const gc = nodeMapRef.current[gcId];
        if (gc) gc.visible = false;
      });
      updateNodeUI(parent);
    });

    const currentNodes = nodesRef.current;
    currentNodes.forEach(n => {
      if (n.type === 'grandparent') {
        n.opacity = 1;
        const el = nodeElementsRef.current[n.id];
        if (el) el.style.opacity = '1';
      }
    });

    updateNodeUI(node);
    fitToView(250);
  }

  function expandParent(parentNode: GraphNode) {
    if (activeParentRef.current && activeParentRef.current !== parentNode.id) {
      const prevParent = nodeMapRef.current[activeParentRef.current];
      if (prevParent) collapseParent(prevParent);
    }

    parentNode.expanded = true;
    activeParentRef.current = parentNode.id;

    const gpNode = nodeMapRef.current[parentNode.parentId!];
    if (gpNode) {
      gpNode.children.forEach(pId => {
        const sibling = nodeMapRef.current[pId];
        if (!sibling || sibling.id === parentNode.id) return;
        sibling.visible = false;
        const el = nodeElementsRef.current[pId];
        if (el) el.style.display = 'none';
      });
    }

    parentNode.children.forEach(gcId => {
      const gc = nodeMapRef.current[gcId];
      if (!gc || gc.minimized) return;
      gc.visible = true;
      gc.x = parentNode.x;
      gc.y = parentNode.y;
    });

    const visibleChildren = parentNode.children.filter(id => {
      const n = nodeMapRef.current[id];
      return n && !n.minimized;
    });
    layoutWitchesStairs(parentNode, visibleChildren);

    updateNodeUI(parentNode);
    fitToView(350);
  }

  function collapseParent(parentNode: GraphNode) {
    parentNode.expanded = false;
    activeParentRef.current = null;

    parentNode.children.forEach(gcId => {
      const gc = nodeMapRef.current[gcId];
      if (gc) gc.visible = false;
    });

    const gpNode = nodeMapRef.current[parentNode.parentId!];
    if (gpNode) {
      const sortedChildren = [...gpNode.children].sort((a, b) => {
        const nodeA = nodeMapRef.current[a];
        const nodeB = nodeMapRef.current[b];
        const dateA = nodeA?.earliestDate;
        const dateB = nodeB?.earliestDate;
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        return new Date(dateA).getTime() - new Date(dateB).getTime();
      });

      sortedChildren.forEach(pId => {
        const sibling = nodeMapRef.current[pId];
        if (!sibling || sibling.minimized) return;
        sibling.visible = true;
      });

      const visibleChildren = sortedChildren.filter(id => {
        const n = nodeMapRef.current[id];
        return n && !n.minimized;
      });
      layoutWitchesStairs(gpNode, visibleChildren);
    }

    updateNodeUI(parentNode);
    fitToView(300);
  }

  function updateNodeUI(node: GraphNode) {
    const el = nodeElementsRef.current[node.id];
    if (!el) return;
    const btn = el.querySelector('.network-collapse-btn');
    const badge = el.querySelector('.network-count-badge');
    if (btn) {
      btn.textContent = node.expanded ? '\u2212' : '+';
    }
    if (badge) {
      (badge as HTMLElement).style.display = node.expanded ? 'none' : '';
      (badge as HTMLElement).textContent = `[${countDescendants(node)}]`;
    }
  }

  function expandAll() {
    const currentNodes = nodesRef.current;

    activeGpRef.current = null;
    activeParentRef.current = null;

    currentNodes.forEach(n => {
      if (n.type === 'grandparent') {
        n.opacity = 1;
        const el = nodeElementsRef.current[n.id];
        if (el) el.style.opacity = '1';
      }
    });

    currentNodes.filter(n => n.type === 'grandparent' && !n.minimized).forEach(gp => {
      gp.expanded = true;

      const visibleChildren = gp.children.filter(id => {
        const n = nodeMapRef.current[id];
        return n && !n.minimized;
      });

      visibleChildren.forEach(pId => {
        const p = nodeMapRef.current[pId];
        if (!p) return;
        p.visible = true;
        p.expanded = false;
        p.x = gp.x;
        p.y = gp.y;
        updateNodeUI(p);
      });

      updateNodeUI(gp);
      layoutWitchesStairs(gp, visibleChildren);
    });

    updateStats(currentNodes);
    fitToView(400);
  }

  function collapseAll() {
    activeGpRef.current = null;
    activeParentRef.current = null;

    const currentNodes = nodesRef.current;
    currentNodes.forEach(n => {
      n.fx = null;
      n.fy = null;
      n.opacity = 1;

      if (n.type === 'grandparent') {
        n.expanded = false;
        n.visible = !n.minimized;
      } else {
        n.visible = false;
        n.expanded = false;
      }

      const el = nodeElementsRef.current[n.id];
      if (el) el.style.opacity = '1';
      updateNodeUI(n);
    });

    layoutPillarRow();
    scheduleRender();
    fitToView(200);
    updateStats(currentNodes);
  }

  function updateStats(allNodes: GraphNode[]) {
    setStats({
      docs: allNodes.filter(n => n.type === 'grandchild').length,
      pillars: allNodes.filter(n => n.type === 'grandparent').length,
      subcats: allNodes.filter(n => n.type === 'parent').length,
      visible: allNodes.filter(n => n.visible && !n.minimized).length,
    });
  }

  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center bg-[#0a0a0a]"
        style={{ height: 'calc(100vh - 4rem)', zIndex: 10, position: 'relative' }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00ff41] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#a0a0a0] font-mono mb-6">Loading evidence network...</p>
          {loadTimeout === 'failed' && (
            <div className="space-y-3">
              <p className="text-red-400 font-mono text-sm">Failed to load. Please try again.</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={loadData}
                  className="px-4 py-2 bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/50 hover:bg-[#00ff41]/30 font-mono text-xs rounded"
                >
                  Retry
                </button>
                <a href="/" className="px-4 py-2 text-[#a0a0a0] border border-[#333] hover:bg-white/5 font-mono text-xs rounded">
                  Go Home
                </a>
              </div>
            </div>
          )}
          {loadTimeout === 'slow' && (
            <div className="space-y-3">
              <p className="text-yellow-400/80 font-mono text-xs">Loading is taking longer than expected.</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={loadData}
                  className="px-4 py-2 bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/50 hover:bg-[#00ff41]/30 font-mono text-xs rounded"
                >
                  Retry
                </button>
                <a href="/" className="px-4 py-2 text-[#a0a0a0] border border-[#333] hover:bg-white/5 font-mono text-xs rounded">
                  Go Home
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full bg-[#0a0a0a]">
      <button
        className="fixed top-20 left-3 z-[300] w-9 h-9 bg-[#111] border border-[#222] rounded text-[#00ff41] font-mono text-sm flex items-center justify-center md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        &#8801;
      </button>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-[200] md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`w-[280px] min-w-[280px] bg-[#0a0a0a] border-r border-[#222] flex flex-col z-[250] overflow-y-auto overflow-x-hidden font-mono
        md:relative md:translate-x-0 transition-transform duration-200
        ${sidebarOpen ? 'fixed top-16 left-0 h-[calc(100vh-4rem)] translate-x-0' : 'fixed -translate-x-full md:relative md:translate-x-0'}`}>

        <div className="p-4 border-b border-[#222]">
          <div className="text-[11px] text-[#00ff41] opacity-70 tracking-wider mb-2">&gt; NETWORK_VIEW.graph</div>
          <h1 className="text-[14px] font-semibold text-[#e5e5e5] flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff41] shadow-[0_0_6px_rgba(0,255,65,0.3)]" />
            Evidence Hierarchy
          </h1>
        </div>

        <div className="p-3 border-b border-[#222]">
          <div className="text-[9px] uppercase tracking-[1.5px] text-[#666] mb-2">Controls</div>
          <div className="flex gap-1.5 mb-2 flex-wrap">
            <button onClick={expandAll} title="Expand active pillar subcategories" className="text-[10px] px-2.5 py-1 border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[rgba(0,255,65,0.4)] hover:text-[#00ff41] transition-all font-mono">Expand</button>
            <button onClick={collapseAll} className="text-[10px] px-2.5 py-1 border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[rgba(0,255,65,0.4)] hover:text-[#00ff41] transition-all font-mono">Collapse All</button>
            {minimizedNodesRef.current.size > 0 && (
              <button onClick={restoreAllMinimized} className="text-[10px] px-2.5 py-1 border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[rgba(0,255,65,0.4)] hover:text-[#00ff41] transition-all font-mono">Restore Hidden</button>
            )}
          </div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-[#666] pointer-events-none">&#8981;</span>
            <input
              type="text"
              placeholder="filter nodes..."
              spellCheck={false}
              className="w-full text-[10px] py-1.5 pl-6 pr-2 bg-[#111] border border-[#222] text-[#e5e5e5] rounded-sm font-mono placeholder:text-[#666] focus:outline-none focus:border-[rgba(0,255,65,0.4)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="p-3 border-b border-[#222]">
          <div className="text-[9px] uppercase tracking-[1.5px] text-[#666] mb-2">Verification Tier</div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] text-[#a0a0a0]">
              <span className="w-2.5 h-2.5 rounded-sm border border-[#00ff41] bg-[rgba(0,255,65,0.15)]" /> VERIFIED
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#a0a0a0]">
              <span className="w-2.5 h-2.5 rounded-sm border border-[#ffbf00] bg-[rgba(255,191,0,0.15)]" /> VALID
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#a0a0a0]">
              <span className="w-2.5 h-2.5 rounded-sm border border-[#a0a0a0] bg-[rgba(160,160,160,0.15)]" /> PRELIMINARY
            </div>
          </div>
        </div>

        <div className="p-3 border-b border-[#222]">
          <div className="text-[9px] uppercase tracking-[1.5px] text-[#666] mb-2">Network Stats</div>
          <div className="text-[10px] text-[#666] leading-[1.8]">
            <span className="text-[#00ff41] font-semibold">{stats.docs}</span> documents<br/>
            <span className="text-[#00ff41] font-semibold">{stats.pillars}</span> pillars<br/>
            <span className="text-[#00ff41] font-semibold">{stats.subcats}</span> subcategories<br/>
            <span className="text-[#00ff41] font-semibold">{stats.visible}</span> nodes visible
          </div>
        </div>

        <div className="p-3">
          <div className="text-[9px] uppercase tracking-[1.5px] text-[#666] mb-2">Navigation</div>
          <div className="text-[9px] text-[#666] leading-[1.8] opacity-60">
            <kbd className="inline-block px-1 border border-[#333] rounded-sm text-[#a0a0a0] bg-[#111]">scroll</kbd> zoom &middot; <kbd className="inline-block px-1 border border-[#333] rounded-sm text-[#a0a0a0] bg-[#111]">drag</kbd> pan<br/>
            <kbd className="inline-block px-1 border border-[#333] rounded-sm text-[#a0a0a0] bg-[#111]">click</kbd> expand/collapse<br/>
            <kbd className="inline-block px-1 border border-[#333] rounded-sm text-[#a0a0a0] bg-[#111]">right-click</kbd> minimize node
          </div>
        </div>
      </aside>

      <main ref={graphAreaRef} className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
        <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />
        <div ref={nodesContainerRef} className="absolute inset-0 z-[2] pointer-events-none" />
      </main>
    </div>
  );
}
