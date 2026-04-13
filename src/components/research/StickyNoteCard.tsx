import { useRef, useCallback } from 'react';
import {
  FileText, Calendar, ShieldAlert, Gavel,
  TriangleAlert as AlertTriangle, Skull, TrendingDown,
  Users, X, Link2, ExternalLink,
} from 'lucide-react';
import type { NotePosition, BoardStateHandle } from '../../hooks/useBoardState';
import { getConnectionHex } from '../../hooks/useBoardState';

export type PinRow = {
  id: string;
  session_id: string;
  user_id: string | null;
  board_name: string;
  item_type: string;
  item_id: string;
  item_snapshot: Record<string, unknown>;
  sort_order: number;
  user_note: string | null;
  pinned_at: string;
};

export interface StickyNoteCardProps {
  pin: PinRow;
  position: NotePosition;
  index: number;
  onUnpin: (pinId: string) => void;
  readOnly?: boolean;
  onSelect?: () => void;
  selected?: boolean;
  board: BoardStateHandle;
  boardRef: React.RefObject<HTMLDivElement | null>;
}

const TYPE_CONFIG: Record<
  string,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string; bg: string }
> = {
  document:   { label: 'Document',   icon: FileText,      color: 'text-teal-700',   bg: 'bg-teal-100' },
  Document:   { label: 'Document',   icon: FileText,      color: 'text-teal-700',   bg: 'bg-teal-100' },
  event:      { label: 'Event',      icon: Calendar,      color: 'text-blue-700',   bg: 'bg-blue-100' },
  Event:      { label: 'Event',      icon: Calendar,      color: 'text-blue-700',   bg: 'bg-blue-100' },
  watchlist:  { label: 'Watchlist',  icon: ShieldAlert,   color: 'text-red-700',    bg: 'bg-red-100' },
  Watchlist:  { label: 'Watchlist',  icon: ShieldAlert,   color: 'text-red-700',    bg: 'bg-red-100' },
  conviction: { label: 'Conviction', icon: Gavel,         color: 'text-orange-700', bg: 'bg-orange-100' },
  Conviction: { label: 'Conviction', icon: Gavel,         color: 'text-orange-700', bg: 'bg-orange-100' },
  incident:   { label: 'Incident',   icon: AlertTriangle, color: 'text-amber-700',  bg: 'bg-amber-100' },
  Incident:   { label: 'Incident',   icon: AlertTriangle, color: 'text-amber-700',  bg: 'bg-amber-100' },
  death:      { label: 'Death',      icon: Skull,         color: 'text-slate-700',  bg: 'bg-slate-100' },
  Death:      { label: 'Death',      icon: Skull,         color: 'text-slate-700',  bg: 'bg-slate-100' },
  trade:      { label: 'Trade',      icon: TrendingDown,  color: 'text-green-700',  bg: 'bg-green-100' },
  Trade:      { label: 'Trade',      icon: TrendingDown,  color: 'text-green-700',  bg: 'bg-green-100' },
  family:     { label: 'Family',     icon: Users,         color: 'text-violet-700', bg: 'bg-violet-100' },
  Family:     { label: 'Family',     icon: Users,         color: 'text-violet-700', bg: 'bg-violet-100' },
};

const TIER_COLOR: Record<string, string> = {
  verified:     'bg-green-500',
  corroborated: 'bg-amber-400',
  preliminary:  'bg-slate-400',
};

const PILLAR_PIN_COLOR: Record<string, string> = {
  'elections-governance':             '#3b82f6',
  'elections-government':             '#3b82f6',
  'financial-systems':                '#10b981',
  'media-manipulation':               '#f59e0b',
  'health-transparency':              '#06b6d4',
  'child-safety-trafficking':         '#ef4444',
  'trafficking-networks':             '#ef4444',
  'ai-surveillance':                  '#8b5cf6',
  'surveillance-state':               '#8b5cf6',
  'war-intelligence':                 '#64748b',
  'military-covert-ops':              '#64748b',
  'energy-suppressed-technology':     '#f97316',
  'suppressed-technology':            '#f97316',
  'environmental-corporate-accountability': '#22c55e',
  'environmental-crimes':             '#22c55e',
  'space-black-budget':               '#a16207',
  'black-budget':                     '#a16207',
};

function formatDate(date: unknown): string {
  if (!date || typeof date !== 'string') return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}

function isValidUrl(s: unknown): s is string {
  if (typeof s !== 'string') return false;
  try { new URL(s); return true; } catch { return false; }
}

function extractFirstLink(snapshot: Record<string, unknown>): { url: string; label: string } | null {
  for (const key of ['url', 'source_url', 'links', 'sources']) {
    const val = snapshot[key];
    if (typeof val === 'string' && isValidUrl(val)) return { url: val, label: extractDomain(val) };
    if (Array.isArray(val) && val.length > 0) {
      const first = val[0];
      if (typeof first === 'string' && isValidUrl(first)) return { url: first, label: extractDomain(first) };
      if (first && typeof first === 'object') {
        const obj = first as Record<string, unknown>;
        const u = obj.url ?? obj.href ?? obj.link;
        if (typeof u === 'string' && isValidUrl(u)) return { url: u, label: extractDomain(u) };
      }
    }
  }
  return null;
}

const LONG_PRESS_MS = 600;

export function StickyNoteCard({
  pin,
  position,
  onUnpin,
  readOnly = false,
  onSelect,
  selected = false,
  board,
  boardRef,
}: StickyNoteCardProps) {
  const snap = pin.item_snapshot;
  const rawType = (snap.itemType as string) ?? (pin.item_type as string) ?? 'document';
  const typeConfig = TYPE_CONFIG[rawType] ?? TYPE_CONFIG.document;
  const TypeIcon = typeConfig.icon;

  const title = typeof snap.title === 'string' ? snap.title : 'Untitled';
  const pillarSlug = typeof snap.pillarSlug === 'string' ? snap.pillarSlug : null;
  const verificationTier = typeof snap.verificationTier === 'string' ? snap.verificationTier : null;
  const primaryLink = extractFirstLink(snap);
  const pinColor = (pillarSlug && PILLAR_PIN_COLOR[pillarSlug]) ?? '#ef4444';
  const tierDot = verificationTier ? TIER_COLOR[verificationTier] ?? 'bg-slate-400' : null;

  const userNote = board.pinNotes[pin.id] ?? '';

  const isDragging = board.draggingId === pin.id;
  const isConnecting = board.connectingFrom === pin.id;

  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didLongPress = useRef(false);

  function handleHeaderMouseDown(e: React.MouseEvent) {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) return;
    e.preventDefault();
    const el = boardRef.current;
    const rect = el?.getBoundingClientRect();
    const zoom = board.zoom;
    const boardX = rect && el ? (e.clientX - rect.left + el.scrollLeft) / zoom : e.clientX;
    const boardY = rect && el ? (e.clientY - rect.top + el.scrollTop) / zoom : e.clientY;
    board.dragStart(pin.id, boardX, boardY, position.x, position.y);
  }

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    if (board.connectingFrom === pin.id) {
      board.rubberBandEnd(null);
    } else {
      board.rubberBandStart(pin.id, e.clientX, e.clientY, boardRef);
    }
  }

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    didLongPress.current = false;
    const touch = e.touches[0];
    longPressTimer.current = setTimeout(() => {
      didLongPress.current = true;
      board.rubberBandStart(pin.id, touch.clientX, touch.clientY, boardRef);
    }, LONG_PRESS_MS);
  }, [pin.id, board, boardRef]);

  const handleTouchEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    if (!didLongPress.current && !board.connectingFrom) {
      if (onSelect) onSelect();
    }
  }, [board, onSelect]);

  function handleCardClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('textarea')) return;
    if (board.connectingFrom && board.connectingFrom !== pin.id) {
      board.rubberBandEnd(pin.id);
      return;
    }
    if (!isDragging && onSelect) onSelect();
  }

  function handleUnpin(e: React.MouseEvent) {
    e.stopPropagation();
    onUnpin(pin.id);
  }

  function handleConnectClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (isConnecting) {
      board.rubberBandEnd(null);
    } else {
      board.rubberBandStart(pin.id, e.clientX, e.clientY, boardRef);
    }
  }

  const connectionHex = getConnectionHex(board.currentColor);

  return (
    <div
      data-note-id={pin.id}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: 220,
        zIndex: isDragging ? 100 : selected ? 10 : 1,
        pointerEvents: 'auto',
        transition: 'none',
      }}
      onClick={handleCardClick}
      onContextMenu={handleContextMenu}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative rounded-lg overflow-hidden select-none"
        style={{
          backgroundColor: '#fef9c3',
          boxShadow: selected
            ? '0 0 0 2.5px #2563eb, 0 8px 24px rgba(0,0,0,0.28)'
            : isDragging
            ? '0 16px 40px rgba(0,0,0,0.32), 0 4px 12px rgba(0,0,0,0.16)'
            : isConnecting
            ? `0 0 0 2px ${connectionHex}, 0 6px 18px rgba(0,0,0,0.18)`
            : '0 4px 12px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.10)',
          transform: isDragging ? 'rotate(1.5deg) scale(1.02)' : 'none',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)' }}
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white z-10"
          style={{ width: 14, height: 14, backgroundColor: pinColor, boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        />

        <div
          className="flex items-center justify-between px-3 pt-5 pb-1.5"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
          onMouseDown={handleHeaderMouseDown}
        >
          <span
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${typeConfig.bg} ${typeConfig.color}`}
          >
            <TypeIcon size={10} />
            {typeConfig.label}
          </span>

          <div className="flex items-center gap-1">
            {tierDot && (
              <span className={`inline-block w-2 h-2 rounded-full ${tierDot}`} title={verificationTier ?? ''} />
            )}

            {!readOnly && (
              <button
                onClick={handleConnectClick}
                title={isConnecting ? 'Cancel connection' : 'Connect to another note'}
                className="p-0.5 rounded transition-colors"
                style={{ color: isConnecting ? connectionHex : '#a16207', opacity: isConnecting ? 1 : 0.5 }}
              >
                <Link2 size={11} />
              </button>
            )}

            {!readOnly && (
              <button
                onClick={handleUnpin}
                className="p-0.5 rounded text-yellow-800/40 hover:text-red-600 transition-colors"
                title="Unpin"
              >
                <X size={11} />
              </button>
            )}
          </div>
        </div>

        <div className="px-3 pb-2">
          <p
            className="text-xs font-bold text-yellow-950 leading-tight mb-0.5"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </p>

          {snap.date && (
            <p className="text-[10px] text-yellow-800/60 mb-1.5">{formatDate(snap.date)}</p>
          )}

          {!readOnly && (
            <textarea
              value={userNote}
              onChange={e => board.updatePinNote(pin.id, e.target.value)}
              maxLength={100}
              rows={3}
              placeholder="Add a note..."
              className="w-full resize-none bg-yellow-50/60 text-[11px] text-yellow-900 placeholder-yellow-700/40 leading-snug outline-none rounded px-1.5 py-1 border border-yellow-200/60 focus:border-yellow-400/80 focus:bg-yellow-50 transition-colors"
              style={{ fontFamily: 'inherit' }}
              onMouseDown={e => e.stopPropagation()}
              onClick={e => e.stopPropagation()}
            />
          )}

          {primaryLink && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 text-[10px] text-blue-600 hover:underline truncate mt-1"
            >
              <ExternalLink size={9} className="flex-shrink-0" />
              <span className="truncate">{primaryLink.label}</span>
            </a>
          )}
        </div>

        {isConnecting && (
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{ boxShadow: `inset 0 0 0 2px ${connectionHex}`, opacity: 0.6 }}
          />
        )}
      </div>
    </div>
  );
}
