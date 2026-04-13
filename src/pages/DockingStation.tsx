import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GridLayout, { Layout } from 'react-grid-layout';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Monitor, X, RefreshCw, ZoomIn, ZoomOut, ExternalLink,
  LayoutGrid, Maximize2, Trash2, Radio, ChevronRight,
} from 'lucide-react';
import {
  DockingMonitor, getMonitors, saveMonitors, removeMonitor, clearMonitors,
} from '@/lib/dockingStation';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const COLS = 12;
const ROW_HEIGHT = 180;

function defaultLayout(monitors: DockingMonitor[]): Layout[] {
  return monitors.map((m, i) => ({
    i: String(m.id),
    x: (i % 2) * 6,
    y: Math.floor(i / 2) * 3,
    w: 6,
    h: 3,
    minW: 3,
    minH: 2,
  }));
}

function bigFirstLayout(monitors: DockingMonitor[]): Layout[] {
  return monitors.map((m, i) => {
    if (i === 0) return { i: String(m.id), x: 0, y: 0, w: 8, h: 4, minW: 3, minH: 2 };
    const idx = i - 1;
    return {
      i: String(m.id),
      x: (idx % 2) * 4 + 8,
      y: Math.floor(idx / 2) * 2,
      w: 4,
      h: 2,
      minW: 3,
      minH: 2,
    };
  });
}

interface MonitorPanelProps {
  monitor: DockingMonitor;
  onClose: (id: number) => void;
}

function MonitorPanel({ monitor, onClose }: MonitorPanelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [blocked, setBlocked] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [key, setKey] = useState(0);

  const handleRefresh = () => setKey(k => k + 1);
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.15, 2));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.15, 0.4));

  return (
    <div
      className="flex flex-col h-full rounded-lg overflow-hidden"
      style={{
        background: '#080810',
        border: '2px solid #1a1a2e',
        boxShadow: '0 0 24px rgba(0, 255, 100, 0.12), inset 0 0 30px rgba(0,0,0,0.6)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 shrink-0"
        style={{
          background: '#0d0d1a',
          borderBottom: '1px solid #1a1a2e',
        }}
      >
        <Monitor size={12} className="text-[#00ff9f]/60 shrink-0" />
        <span className="font-mono text-[11px] text-[#a0ffa0]/70 truncate flex-1 select-none">
          {monitor.title}
        </span>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleZoomOut}
            title="Zoom out"
            className="w-5 h-5 flex items-center justify-center rounded text-[#555] hover:text-[#00ff9f]/70 hover:bg-[#00ff9f]/10 transition-colors"
          >
            <ZoomOut size={10} />
          </button>
          <button
            onClick={handleZoomIn}
            title="Zoom in"
            className="w-5 h-5 flex items-center justify-center rounded text-[#555] hover:text-[#00ff9f]/70 hover:bg-[#00ff9f]/10 transition-colors"
          >
            <ZoomIn size={10} />
          </button>
          <button
            onClick={handleRefresh}
            title="Refresh"
            className="w-5 h-5 flex items-center justify-center rounded text-[#555] hover:text-[#00d9ff]/70 hover:bg-[#00d9ff]/10 transition-colors"
          >
            <RefreshCw size={10} />
          </button>
          <a
            href={monitor.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
            className="w-5 h-5 flex items-center justify-center rounded text-[#555] hover:text-[#ffbf00]/70 hover:bg-[#ffbf00]/10 transition-colors"
          >
            <ExternalLink size={10} />
          </a>
          <button
            onClick={() => onClose(monitor.id)}
            title="Remove"
            className="w-5 h-5 flex items-center justify-center rounded text-[#555] hover:text-[#ff4444]/80 hover:bg-[#ff4444]/10 transition-colors"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 relative overflow-hidden">
        {blocked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center"
            style={{ background: '#080810' }}>
            <Monitor size={28} className="text-[#333]" />
            <p className="font-mono text-[11px] text-[#555] leading-relaxed">
              This tracker cannot be embedded due to security restrictions.
            </p>
            <a
              href={monitor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-[#00ff9f]/70 hover:text-[#00ff9f] flex items-center gap-1.5 transition-colors"
            >
              Open in New Tab <ExternalLink size={10} />
            </a>
          </div>
        ) : (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ transformOrigin: 'top left' }}
          >
            <iframe
              key={key}
              ref={iframeRef}
              src={monitor.url}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              title={monitor.title}
              onError={() => setBlocked(true)}
              style={{
                width: `${100 / zoom}%`,
                height: `${100 / zoom}%`,
                border: 'none',
                transform: `scale(${zoom})`,
                transformOrigin: 'top left',
                display: 'block',
                background: '#fff',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function DockingStation() {
  const navigate = useNavigate();
  const [monitors, setMonitors] = useState<DockingMonitor[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);
  const [gridWidth, setGridWidth] = useState(window.innerWidth - 48);

  useEffect(() => {
    const loaded = getMonitors();
    setMonitors(loaded);
    setLayout(defaultLayout(loaded));
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setGridWidth(window.innerWidth - 48);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  const handleRemove = useCallback((id: number) => {
    removeMonitor(id);
    setMonitors(prev => {
      const next = prev.filter(m => m.id !== id);
      setLayout(defaultLayout(next));
      return next;
    });
  }, []);

  const handleClearAll = () => {
    clearMonitors();
    setMonitors([]);
    setLayout([]);
  };

  const applyLayout2x3 = () => {
    const next = defaultLayout(monitors);
    setLayout(next);
  };

  const applyLayoutBigFirst = () => {
    const next = bigFirstLayout(monitors);
    setLayout(next);
  };

  const onLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  return (
    <div className="min-h-screen" style={{ background: '#07070f' }}>
      <SEOHead
        title="Docking Station — Multi-Monitor Tracker Workspace"
        description="Build your own live multi-panel tracker workspace. Add transparency trackers, arrange panels, and monitor multiple data feeds simultaneously."
        url="https://redpillbiblio.wtf/trackers/docking-station"
      />
      <Navigation />

      <main id="main-content" tabIndex={-1} className="pt-20 pb-12 px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-full mx-auto mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Radio size={13} className="text-[#00ff9f]" />
            <span className="font-mono text-[10px] text-[#00ff9f]/50 uppercase tracking-[0.35em]">Live Workspace</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1
                className="font-mono text-2xl sm:text-3xl font-bold tracking-tight"
                style={{
                  color: '#00ff9f',
                  textShadow: '0 0 20px rgba(0,255,159,0.35)',
                }}
              >
                {'> DOCKING_STATION'}
              </h1>
              <p className="font-mono text-[11px] text-[#444] mt-1">
                Drag & resize panels. Add trackers from the{' '}
                <button
                  onClick={() => navigate('/trackers/transparency-hub')}
                  className="text-[#00ff9f]/60 hover:text-[#00ff9f] transition-colors underline underline-offset-2 decoration-dotted"
                >
                  Transparency Hub
                </button>
                .
              </p>
            </div>

            {monitors.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[10px] text-[#555] px-2 py-1 border border-[#1a1a1a] rounded-sm">
                  {monitors.length} / 6 panels
                </span>

                <button
                  onClick={applyLayout2x3}
                  className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] rounded-sm transition-all border"
                  style={{
                    background: 'rgba(0,255,159,0.05)',
                    borderColor: 'rgba(0,255,159,0.2)',
                    color: 'rgba(0,255,159,0.7)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,255,159,0.12)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#00ff9f';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,255,159,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,255,159,0.7)';
                  }}
                >
                  <LayoutGrid size={12} />
                  2×3 Grid
                </button>

                <button
                  onClick={applyLayoutBigFirst}
                  className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] rounded-sm transition-all border"
                  style={{
                    background: 'rgba(0,217,255,0.05)',
                    borderColor: 'rgba(0,217,255,0.2)',
                    color: 'rgba(0,217,255,0.7)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,217,255,0.12)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#00d9ff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,217,255,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,217,255,0.7)';
                  }}
                >
                  <Maximize2 size={12} />
                  1 Big + 5 Small
                </button>

                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] rounded-sm transition-all border"
                  style={{
                    background: 'rgba(255,68,68,0.05)',
                    borderColor: 'rgba(255,68,68,0.2)',
                    color: 'rgba(255,68,68,0.6)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,68,68,0.12)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#ff4444';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,68,68,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,68,68,0.6)';
                  }}
                >
                  <Trash2 size={12} />
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Empty state */}
        {monitors.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 gap-6">
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center"
              style={{
                background: '#0d0d1a',
                border: '1px solid #1a1a2e',
                boxShadow: '0 0 30px rgba(0,255,159,0.06)',
              }}
            >
              <Monitor size={36} className="text-[#1a2a1a]" />
            </div>
            <div className="text-center">
              <h2 className="font-mono text-[#333] text-lg font-semibold mb-2">No monitors added yet.</h2>
              <p className="font-mono text-[11px] text-[#2a2a2a] max-w-sm">
                Visit the Transparency Hub and click "Add to Docking Station" on any tracker to begin building your workspace.
              </p>
            </div>
            <Button
              onClick={() => navigate('/trackers/transparency-hub')}
              className="flex items-center gap-2 font-mono text-xs"
              style={{
                background: 'rgba(0,255,159,0.1)',
                border: '1px solid rgba(0,255,159,0.3)',
                color: '#00ff9f',
              }}
            >
              <ChevronRight size={14} />
              Go to Transparency Hub
            </Button>
          </div>
        )}

        {/* Grid */}
        {monitors.length > 0 && (
          <div style={{ width: '100%' }}>
            <GridLayout
              className="layout"
              layout={layout}
              cols={COLS}
              rowHeight={ROW_HEIGHT}
              width={gridWidth}
              onLayoutChange={onLayoutChange}
              draggableHandle=".drag-handle"
              margin={[10, 10]}
              containerPadding={[0, 0]}
              useCSSTransforms
            >
              {monitors.map(monitor => (
                <div key={String(monitor.id)} className="drag-handle" style={{ cursor: 'move' }}>
                  <MonitorPanel monitor={monitor} onClose={handleRemove} />
                </div>
              ))}
            </GridLayout>
          </div>
        )}

        {/* Hint bar */}
        {monitors.length > 0 && (
          <div
            className="mt-6 px-4 py-2.5 rounded-sm flex items-center gap-3 border"
            style={{ background: '#0a0a0f', borderColor: '#1a1a1a' }}
          >
            <span className="font-mono text-[10px] text-[#2a2a2a] shrink-0">▸</span>
            <p className="font-mono text-[10px] text-[#2a2a2a] leading-relaxed">
              Drag panels by their title bar to rearrange. Resize from the bottom-right corner. Some trackers block embedding — use Open in New Tab for those.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default DockingStation;
