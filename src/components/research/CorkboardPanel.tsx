import { useState, useRef, useCallback } from 'react';
import { PanelRightOpen, PanelRightClose, ExternalLink, Pin, CircleHelp as HelpCircle, Trash2, Scissors, Square as XSquare, ZoomIn, ZoomOut } from 'lucide-react';
import type { CorkboardPinsHandle } from '../../hooks/useCorkboardPins';
import { StickyNoteCard } from './StickyNoteCard';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '../ui/skeleton';
import { useBoardState, CONNECTION_COLORS, getConnectionHex, MIN_ZOOM, MAX_ZOOM } from '../../hooks/useBoardState';
import type { BoardConnection } from '../../hooks/useBoardState';
import { BoardLegendModal, useLegendModal } from './BoardLegendModal';

const NOTE_W = 220;
const NOTE_H = 155;

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}

function isValidUrl(s: unknown): s is string {
  if (typeof s !== 'string') return false;
  try { new URL(s); return true; } catch { return false; }
}

function extractLinks(snapshot: Record<string, unknown>): { url: string; label: string }[] {
  const links: { url: string; label: string }[] = [];
  const seen = new Set<string>();
  for (const key of ['url', 'source_url', 'links', 'sources']) {
    const val = snapshot[key];
    if (typeof val === 'string' && isValidUrl(val) && !seen.has(val)) {
      seen.add(val); links.push({ url: val, label: extractDomain(val) });
    } else if (Array.isArray(val)) {
      for (const item of val) {
        if (typeof item === 'string' && isValidUrl(item) && !seen.has(item)) {
          seen.add(item); links.push({ url: item, label: extractDomain(item) });
        } else if (item && typeof item === 'object') {
          const obj = item as Record<string, unknown>;
          const u = obj.url ?? obj.href ?? obj.link;
          if (typeof u === 'string' && isValidUrl(u) && !seen.has(u)) {
            seen.add(u);
            links.push({ url: u, label: typeof obj.label === 'string' ? obj.label : extractDomain(u) });
          }
        }
      }
    }
  }
  return links;
}

function formatDate(date: unknown): string {
  if (!date || typeof date !== 'string') return 'Unknown date';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Unknown date';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function SkeletonGrid() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-[130px] rounded-lg"
          style={{ width: 220, backgroundColor: '#fef9c3aa' }}
        />
      ))}
    </div>
  );
}

function getNoteCenterX(x: number): number { return x + NOTE_W / 2; }
function getNoteCenterY(y: number): number { return y + NOTE_H / 2; }

function getTouchDistance(touches: React.TouchList): number {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

interface ConnectionLineProps {
  conn: BoardConnection;
  x1: number; y1: number;
  x2: number; y2: number;
  selected: boolean;
  onSelect: (e: React.MouseEvent) => void;
}

function ConnectionLine({ conn, x1, y1, x2, y2, selected, onSelect }: ConnectionLineProps) {
  const hex = getConnectionHex(conn.color);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const slack = Math.min(60, Math.sqrt(dx * dx + dy * dy) * 0.15);
  const cpx = mx;
  const cpy = my + slack;
  const pathD = `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;

  return (
    <g>
      {selected && (
        <path
          d={pathD}
          stroke={hex}
          strokeWidth={12}
          strokeLinecap="round"
          fill="none"
          opacity={0.18}
          style={{ pointerEvents: 'none' }}
        />
      )}
      <path
        d={pathD}
        stroke="transparent"
        strokeWidth={18}
        fill="none"
        className="cursor-pointer"
        onClick={onSelect}
        title="Click to select — then delete with the toolbar"
      />
      <path
        d={pathD}
        stroke={hex}
        strokeWidth={selected ? 3.5 : 2}
        strokeLinecap="round"
        fill="none"
        opacity={selected ? 1 : 0.75}
        style={{
          filter: selected ? `drop-shadow(0 0 6px ${hex}cc)` : undefined,
          pointerEvents: 'none',
        }}
      />
      {selected && (
        <circle cx={cpx} cy={cpy} r={5} fill={hex} opacity={0.95} style={{ pointerEvents: 'none' }} />
      )}
    </g>
  );
}

interface ConnectionToolbarProps {
  conn: BoardConnection;
  x: number;
  y: number;
  onColorChange: (color: string) => void;
  onDelete: () => void;
  onDismiss: () => void;
}

function ConnectionToolbar({ conn, x, y, onColorChange, onDelete, onDismiss }: ConnectionToolbarProps) {
  return (
    <div
      data-conn-toolbar="true"
      className="absolute z-50 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl shadow-xl border border-border bg-background"
      style={{ left: x - 100, top: y - 48, pointerEvents: 'auto' }}
      onMouseDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
    >
      {CONNECTION_COLORS.map(c => (
        <button
          key={c.value}
          onClick={() => onColorChange(c.value)}
          className="w-5 h-5 rounded-full border-2 transition-transform hover:scale-110"
          style={{
            backgroundColor: c.hex,
            borderColor: conn.color === c.value ? '#fff' : 'transparent',
            boxShadow: conn.color === c.value ? `0 0 0 2px ${c.hex}` : 'none',
          }}
          title={`Change color to ${c.value}`}
        />
      ))}
      <div className="w-px h-4 bg-border mx-0.5" />
      <button
        onClick={onDelete}
        className="flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
        title="Delete this connection"
      >
        <Trash2 size={11} />
        <span>Delete</span>
      </button>
      <button
        onClick={onDismiss}
        className="p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
        title="Close"
      >
        <span className="text-xs leading-none">✕</span>
      </button>
    </div>
  );
}

export interface CorkboardPanelProps {
  corkboard: CorkboardPinsHandle;
}

export function CorkboardPanel({ corkboard }: CorkboardPanelProps) {
  const { pins, loading, error, unpinItem, unpinAll } = corkboard;
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const board = useBoardState();
  const boardRef = useRef<HTMLDivElement | null>(null);
  const { open: legendOpen, openLegend, closeLegend } = useLegendModal();

  const pinchRef = useRef<{ initialDistance: number; initialZoom: number } | null>(null);

  const selectedPin = pins.find(p => p.id === selectedPinId) ?? null;
  const snap = selectedPin?.item_snapshot ?? null;
  const title      = snap && typeof snap.title       === 'string' ? snap.title       : null;
  const snippet    = snap && typeof snap.snippet     === 'string' ? snap.snippet     : null;
  const pillarSlug = snap && typeof snap.pillarSlug  === 'string' ? snap.pillarSlug  : null;
  const dynasty    = snap && typeof snap.dynastyName === 'string' ? snap.dynastyName : null;
  const severity   = snap && typeof snap.severity    === 'string' ? snap.severity    : null;
  const itemType   = selectedPin ? (selectedPin.item_type ?? '') : '';
  const date       = snap ? snap.date : null;
  const links      = snap ? extractLinks(snap) : [];

  const handleBoardWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      board.setZoom(board.zoom * factor);
    }
  }, [board]);

  const handleBoardMouseMove = useCallback((e: React.MouseEvent) => {
    const el = boardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (board.draggingId) {
      board.dragMove(
        (e.clientX - rect.left + el.scrollLeft) / board.zoom,
        (e.clientY - rect.top + el.scrollTop) / board.zoom,
      );
    }
    if (board.rubberBand) {
      board.rubberBandMove(e.clientX, e.clientY, boardRef);
    }
  }, [board]);

  const handleBoardMouseUp = useCallback((e: React.MouseEvent) => {
    if (board.draggingId) {
      board.dragEnd();
    }
    if (board.rubberBand && board.connectingFrom) {
      const target = (e.target as HTMLElement).closest('[data-note-id]');
      const toId = target?.getAttribute('data-note-id') ?? null;
      board.rubberBandEnd(toId);
    }
  }, [board]);

  const handleBoardTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = {
        initialDistance: getTouchDistance(e.touches),
        initialZoom: board.zoom,
      };
    }
  }, [board.zoom]);

  const handleBoardTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const scaleFactor = currentDistance / pinchRef.current.initialDistance;
      board.setZoom(pinchRef.current.initialZoom * scaleFactor);
      return;
    }

    if (!board.rubberBand && !board.draggingId) return;
    const touch = e.touches[0];
    const el = boardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (board.draggingId) {
      board.dragMove(
        (touch.clientX - rect.left + el.scrollLeft) / board.zoom,
        (touch.clientY - rect.top + el.scrollTop) / board.zoom,
      );
    }
    if (board.rubberBand) {
      board.rubberBandMove(touch.clientX, touch.clientY, boardRef);
    }
  }, [board]);

  const handleBoardTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      pinchRef.current = null;
    }
    if (board.draggingId) {
      board.dragEnd();
    }
    if (board.rubberBand && board.connectingFrom) {
      const touch = e.changedTouches[0];
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      const noteEl = el?.closest('[data-note-id]');
      const toId = noteEl?.getAttribute('data-note-id') ?? null;
      board.rubberBandEnd(toId);
    }
  }, [board]);

  function handleBoardClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest('[data-note-id]') && !target.closest('[data-conn-toolbar]')) {
      board.setSelectedConnectionId(null);
    }
    if (board.connectingFrom && !target.closest('[data-note-id]')) {
      board.rubberBandEnd(null);
    }
  }

  const selectedConn = board.connections.find(c => c.id === board.selectedConnectionId) ?? null;
  const connToolbarPos = selectedConn
    ? (() => {
        const fromPin = pins.find(p => p.id === selectedConn.fromId);
        const toPin   = pins.find(p => p.id === selectedConn.toId);
        if (!fromPin || !toPin) return null;
        const fromPos = board.getPosition(fromPin.id, pins.indexOf(fromPin));
        const toPos   = board.getPosition(toPin.id,   pins.indexOf(toPin));
        const dx = getNoteCenterX(toPos.x) - getNoteCenterX(fromPos.x);
        const dy = getNoteCenterY(toPos.y) - getNoteCenterY(fromPos.y);
        const slack = Math.min(60, Math.sqrt(dx * dx + dy * dy) * 0.15);
        return {
          x: (getNoteCenterX(fromPos.x) + getNoteCenterX(toPos.x)) / 2,
          y: (getNoteCenterY(fromPos.y) + getNoteCenterY(toPos.y)) / 2 + slack,
        };
      })()
    : null;

  const zoomPct = Math.round(board.zoom * 100);

  return (
    <>
      <BoardLegendModal forceOpen={legendOpen} onClose={closeLegend} />

      <div className="flex flex-col lg:flex-row h-full min-h-0 overflow-hidden">
        <div className="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col">

          <div className="flex items-center gap-2 px-4 py-2 bg-amber-900/10 border-b border-amber-900/15 shrink-0 flex-wrap">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-900/60 mr-0.5">
              String
            </span>
            <div className="flex items-center gap-1.5">
              {CONNECTION_COLORS.map(c => (
                <button
                  key={c.value}
                  onClick={() => board.setCurrentColor(c.value)}
                  className="rounded-full border-2 transition-transform hover:scale-125 active:scale-95"
                  style={{
                    width: 17,
                    height: 17,
                    backgroundColor: c.hex,
                    borderColor: board.currentColor === c.value ? '#fff' : 'transparent',
                    boxShadow: board.currentColor === c.value ? `0 0 0 2px ${c.hex}` : 'none',
                  }}
                  title={`String color: ${c.value}`}
                />
              ))}
            </div>

            <div className="w-px h-4 bg-amber-900/20 mx-0.5" />

            <button
              onClick={() => {
                if (board.connections.length === 0) return;
                if (window.confirm('Remove all strings from this board?')) {
                  board.clearConnections();
                }
              }}
              disabled={board.connections.length === 0}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-amber-900/70 hover:text-amber-900 hover:bg-amber-200/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Remove all string connections from the board"
            >
              <Scissors size={11} />
              <span>Clear strings</span>
            </button>

            <button
              onClick={() => {
                if (pins.length === 0 && board.connections.length === 0) return;
                if (window.confirm('Clear all pins, positions, and connections from this board?\n\nThis cannot be undone.')) {
                  board.clearConnections();
                  board.clearLayout();
                  unpinAll();
                  setSelectedPinId(null);
                }
              }}
              disabled={pins.length === 0 && board.connections.length === 0}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-red-700/70 hover:text-red-700 hover:bg-red-100/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Remove all pins and connections from the board"
            >
              <XSquare size={11} />
              <span>Clear board</span>
            </button>

            <div className="flex-1" />

            {board.connectingFrom && (
              <span className="text-[10px] text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full animate-pulse select-none">
                Click a note to connect — Esc to cancel
              </span>
            )}

            <div className="flex items-center gap-1">
              <button
                onClick={() => board.setZoom(board.zoom * 0.9)}
                disabled={board.zoom <= MIN_ZOOM}
                className="p-1 rounded text-amber-900/50 hover:text-amber-900 hover:bg-amber-200/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Zoom out"
              >
                <ZoomOut size={13} />
              </button>
              <span className="text-[10px] font-mono text-amber-900/60 w-9 text-center select-none">
                {zoomPct}%
              </span>
              <button
                onClick={() => board.setZoom(board.zoom * 1.1)}
                disabled={board.zoom >= MAX_ZOOM}
                className="p-1 rounded text-amber-900/50 hover:text-amber-900 hover:bg-amber-200/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Zoom in"
              >
                <ZoomIn size={13} />
              </button>
            </div>

            <button
              onClick={openLegend}
              className="p-1.5 rounded-lg text-amber-900/50 hover:text-amber-900 hover:bg-amber-200/50 transition-colors"
              title="Show board help"
            >
              <HelpCircle size={15} />
            </button>
          </div>

          <div
            ref={boardRef}
            className="flex-1 overflow-auto relative"
            style={{
              backgroundImage: `radial-gradient(circle, #d1a97a 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
              backgroundColor: '#c8a06a',
              backgroundPosition: '14px 14px',
              cursor: board.draggingId ? 'grabbing' : board.connectingFrom ? 'crosshair' : 'default',
              userSelect: 'none',
            }}
            onWheel={handleBoardWheel}
            onMouseMove={handleBoardMouseMove}
            onMouseUp={handleBoardMouseUp}
            onMouseLeave={() => { if (board.draggingId) board.dragEnd(); }}
            onTouchStart={handleBoardTouchStart}
            onTouchMove={handleBoardTouchMove}
            onTouchEnd={handleBoardTouchEnd}
            onClick={handleBoardClick}
          >
            {error && (
              <div className="m-4 p-3 rounded-md bg-red-100 text-red-700 text-sm z-10 relative">
                Failed to load pins: {error}
              </div>
            )}

            {loading ? (
              <SkeletonGrid />
            ) : pins.length === 0 && !error ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[240px] gap-2 text-amber-900/50 select-none">
                <Pin size={32} strokeWidth={1.5} />
                <p className="text-sm font-medium">No notes pinned yet</p>
                <p className="text-xs">Pin items from the research results to see them here.</p>
              </div>
            ) : (
              <div
                style={{
                  transform: `scale(${board.zoom})`,
                  transformOrigin: '0 0',
                  minWidth: 900,
                  minHeight: 620,
                  position: 'relative',
                }}
              >
                <svg
                  className="absolute inset-0 pointer-events-none"
                  style={{ width: '100%', height: '100%', overflow: 'visible' }}
                >
                  {board.connections.map(conn => {
                    const fromPin = pins.find(p => p.id === conn.fromId);
                    const toPin   = pins.find(p => p.id === conn.toId);
                    if (!fromPin || !toPin) return null;
                    const fromPos = board.getPosition(fromPin.id, pins.indexOf(fromPin));
                    const toPos   = board.getPosition(toPin.id,   pins.indexOf(toPin));
                    return (
                      <ConnectionLine
                        key={conn.id}
                        conn={conn}
                        x1={getNoteCenterX(fromPos.x)}
                        y1={getNoteCenterY(fromPos.y)}
                        x2={getNoteCenterX(toPos.x)}
                        y2={getNoteCenterY(toPos.y)}
                        selected={board.selectedConnectionId === conn.id}
                        onSelect={e => {
                          e.stopPropagation();
                          board.setSelectedConnectionId(
                            board.selectedConnectionId === conn.id ? null : conn.id
                          );
                        }}
                      />
                    );
                  })}

                  {board.rubberBand && (
                    <line
                      x1={board.rubberBand.x1 / board.zoom}
                      y1={board.rubberBand.y1 / board.zoom}
                      x2={board.rubberBand.x2 / board.zoom}
                      y2={board.rubberBand.y2 / board.zoom}
                      stroke={getConnectionHex(board.currentColor)}
                      strokeWidth={2}
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      opacity={0.8}
                    />
                  )}
                </svg>

                {pins.map((pin, index) => (
                  <StickyNoteCard
                    key={pin.id}
                    pin={pin}
                    position={board.getPosition(pin.id, index)}
                    index={index}
                    onUnpin={id => {
                      if (selectedPinId === id) setSelectedPinId(null);
                      unpinItem(id);
                    }}
                    onSelect={() => setSelectedPinId(prev => prev === pin.id ? null : pin.id)}
                    selected={pin.id === selectedPinId}
                    board={board}
                    boardRef={boardRef}
                  />
                ))}

                {selectedConn && connToolbarPos && (
                  <ConnectionToolbar
                    conn={selectedConn}
                    x={connToolbarPos.x}
                    y={connToolbarPos.y}
                    onColorChange={color => board.updateConnectionColor(selectedConn.id, color)}
                    onDelete={() => board.removeConnection(selectedConn.id)}
                    onDismiss={() => board.setSelectedConnectionId(null)}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {!detailsOpen ? (
          <div className="flex lg:flex-col items-center justify-start gap-2 p-2 border-t lg:border-t-0 lg:border-l border-border bg-muted/40 shrink-0">
            <button
              onClick={() => setDetailsOpen(true)}
              className="p-1.5 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              title="Open details panel"
            >
              <PanelRightOpen size={16} />
            </button>
            <span className="text-[10px] text-muted-foreground hidden lg:block [writing-mode:vertical-rl] rotate-180 tracking-wider uppercase mt-1">
              Details
            </span>
          </div>
        ) : (
          <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 border-t lg:border-t-0 lg:border-l border-border flex flex-col bg-background max-h-[50vh] lg:max-h-none">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Details</span>
              <button
                onClick={() => setDetailsOpen(false)}
                className="p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                title="Collapse details panel"
              >
                <PanelRightClose size={15} />
              </button>
            </div>

            <ScrollArea className="flex-1 min-h-0">
              <div className="p-4">
                {!selectedPin ? (
                  <div className="flex flex-col items-center justify-center min-h-[160px] gap-2 text-center text-muted-foreground select-none">
                    <PanelRightOpen size={28} strokeWidth={1.5} className="opacity-40" />
                    <p className="text-sm font-medium">Select a note on the corkboard to see full details.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-foreground">{title ?? 'Untitled'}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{formatDate(date)}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {itemType && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary text-secondary-foreground uppercase tracking-wide">
                          {itemType}
                        </span>
                      )}
                      {pillarSlug && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground uppercase tracking-wide">
                          {pillarSlug.replace(/-/g, ' ')}
                        </span>
                      )}
                      {dynasty && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800">
                          {dynasty}
                        </span>
                      )}
                      {severity && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-100 text-red-700 uppercase tracking-wide">
                          {severity}
                        </span>
                      )}
                    </div>

                    {snippet && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Summary</p>
                        <p className="text-sm text-foreground leading-relaxed">{snippet}</p>
                      </div>
                    )}

                    {links.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Sources</p>
                        <div className="space-y-1.5">
                          {links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline group"
                            >
                              <ExternalLink size={11} className="mt-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                              <span className="break-all leading-tight">{link.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedPin.user_note && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Your Note</p>
                        <p className="text-sm text-foreground italic leading-relaxed">{selectedPin.user_note}</p>
                      </div>
                    )}

                    {board.connections.filter(c => c.fromId === selectedPin.id || c.toId === selectedPin.id).length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Connections</p>
                        <div className="space-y-1">
                          {board.connections
                            .filter(c => c.fromId === selectedPin.id || c.toId === selectedPin.id)
                            .map(conn => {
                              const otherId = conn.fromId === selectedPin.id ? conn.toId : conn.fromId;
                              const otherPin = pins.find(p => p.id === otherId);
                              const otherTitle = otherPin?.item_snapshot?.title;
                              return (
                                <div key={conn.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <span
                                    className="inline-block w-3 h-1.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: getConnectionHex(conn.color) }}
                                  />
                                  <span className="truncate">
                                    {typeof otherTitle === 'string' ? otherTitle : 'Unknown'}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </>
  );
}
