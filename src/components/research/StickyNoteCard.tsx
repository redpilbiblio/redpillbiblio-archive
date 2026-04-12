import { useState } from 'react';
import { FileText, Calendar, ShieldAlert, Gavel, TriangleAlert as AlertTriangle, Skull, TrendingDown, Users, X, GripVertical, ExternalLink } from 'lucide-react';

type PinRow = {
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

interface StickyNoteCardProps {
  pin: PinRow;
  onUnpin: (pinId: string) => void;
  readOnly?: boolean;
  onSelect?: () => void;
  selected?: boolean;
}

type ItemType =
  | 'document'
  | 'event'
  | 'watchlist'
  | 'conviction'
  | 'incident'
  | 'death'
  | 'trade'
  | 'family';

const TYPE_CONFIG: Record<
  ItemType,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string; bg: string }
> = {
  document:   { label: 'Document',   icon: FileText,      color: 'text-teal-700',   bg: 'bg-teal-100' },
  event:      { label: 'Event',      icon: Calendar,      color: 'text-blue-700',   bg: 'bg-blue-100' },
  watchlist:  { label: 'Watchlist',  icon: ShieldAlert,   color: 'text-red-700',    bg: 'bg-red-100' },
  conviction: { label: 'Conviction', icon: Gavel,         color: 'text-orange-700', bg: 'bg-orange-100' },
  incident:   { label: 'Incident',   icon: AlertTriangle, color: 'text-amber-700',  bg: 'bg-amber-100' },
  death:      { label: 'Death',      icon: Skull,         color: 'text-slate-700',  bg: 'bg-slate-100' },
  trade:      { label: 'Trade',      icon: TrendingDown,  color: 'text-green-700',  bg: 'bg-green-100' },
  family:     { label: 'Family',     icon: Users,         color: 'text-purple-700', bg: 'bg-purple-100' },
};

const TIER_COLOR: Record<string, string> = {
  verified:     'bg-green-500',
  corroborated: 'bg-amber-400',
  preliminary:  'bg-slate-400',
};

const PILLAR_PIN_COLOR: Record<string, string> = {
  'elections-government':  '#3b82f6',
  'financial-systems':     '#10b981',
  'media-manipulation':    '#f59e0b',
  'health-transparency':   '#06b6d4',
  'trafficking-networks':  '#ef4444',
  'surveillance-state':    '#8b5cf6',
  'military-covert-ops':   '#64748b',
  'suppressed-technology': '#f97316',
  'environmental-crimes':  '#22c55e',
  'black-budget':          '#a16207',
};

function formatDate(date: unknown): string {
  if (!date || typeof date !== 'string') return 'Unknown date';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Unknown date';
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function isValidUrl(s: unknown): s is string {
  if (typeof s !== 'string') return false;
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

function extractLinks(snapshot: Record<string, unknown>): { url: string; label: string }[] {
  const links: { url: string; label: string }[] = [];
  const seen = new Set<string>();

  const candidateKeys = ['url', 'source_url', 'links', 'sources'];

  for (const key of candidateKeys) {
    const val = snapshot[key];
    if (typeof val === 'string' && isValidUrl(val) && !seen.has(val)) {
      seen.add(val);
      links.push({ url: val, label: extractDomain(val) });
    } else if (Array.isArray(val)) {
      for (const item of val) {
        if (typeof item === 'string' && isValidUrl(item) && !seen.has(item)) {
          seen.add(item);
          links.push({ url: item, label: extractDomain(item) });
        } else if (item && typeof item === 'object') {
          const obj = item as Record<string, unknown>;
          const u = obj.url ?? obj.href ?? obj.link;
          if (typeof u === 'string' && isValidUrl(u) && !seen.has(u)) {
            seen.add(u);
            const lbl = typeof obj.label === 'string' ? obj.label : extractDomain(u);
            links.push({ url: u, label: lbl });
          }
        }
      }
    }
  }

  return links;
}

export function StickyNoteCard({ pin, onUnpin, readOnly = false, onSelect, selected = false }: StickyNoteCardProps) {
  const [expanded, setExpanded] = useState(false);

  const snap = pin.item_snapshot;
  const itemType = (snap.itemType as ItemType) ?? (pin.item_type as ItemType) ?? 'document';
  const typeConfig = TYPE_CONFIG[itemType] ?? TYPE_CONFIG.document;
  const TypeIcon = typeConfig.icon;

  const title = typeof snap.title === 'string' ? snap.title : 'Untitled';
  const snippet = typeof snap.snippet === 'string' ? snap.snippet : null;
  const pillarSlug = typeof snap.pillarSlug === 'string' ? snap.pillarSlug : null;
  const dynastyName = typeof snap.dynastyName === 'string' ? snap.dynastyName : null;
  const severity = typeof snap.severity === 'string' ? snap.severity : null;
  const verificationTier = typeof snap.verificationTier === 'string' ? snap.verificationTier : null;

  const allLinks = extractLinks(snap);
  const primaryLink = allLinks[0] ?? null;
  const pinColor = (pillarSlug && PILLAR_PIN_COLOR[pillarSlug]) ?? '#ef4444';

  const tierDot = verificationTier ? TIER_COLOR[verificationTier] ?? 'bg-slate-400' : null;

  function handleCardClick() {
    if (onSelect) {
      onSelect();
    } else {
      setExpanded(prev => !prev);
    }
  }

  function handleUnpin(e: React.MouseEvent) {
    e.stopPropagation();
    onUnpin(pin.id);
  }

  function handleLinkClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function handleGripClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={handleCardClick}
      className="relative cursor-pointer select-none"
      style={{ width: '220px' }}
    >
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#fef9c3',
          boxShadow: selected
            ? '0 0 0 2.5px #2563eb, 0 8px 24px rgba(0,0,0,0.22)'
            : expanded
            ? '0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.12)'
            : '0 4px 12px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.10)',
          transform: expanded ? 'translateY(-2px) scale(1.01)' : 'translateY(0) scale(1)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          borderRadius: '8px',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)',
          }}
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white z-10 shadow-md"
          style={{
            width: '14px',
            height: '14px',
            backgroundColor: pinColor,
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        />

        {!readOnly && (
          <button
            onClick={handleUnpin}
            className="absolute top-2 right-2 z-10 rounded-full p-0.5 text-yellow-800/50 hover:text-red-600 hover:bg-red-100/60 transition-colors"
            title="Unpin"
          >
            <X size={13} />
          </button>
        )}

        <div className="px-3 pt-5 pb-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${typeConfig.bg} ${typeConfig.color}`}
            >
              <TypeIcon size={10} />
              {typeConfig.label}
            </span>
            {tierDot && (
              <span
                className={`inline-block w-2 h-2 rounded-full ${tierDot}`}
                title={verificationTier ?? ''}
              />
            )}
          </div>

          <p
            className="text-xs font-bold text-yellow-950 leading-tight mb-1.5"
            style={
              expanded
                ? {}
                : {
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }
            }
          >
            {title}
          </p>

          <p className="text-[10px] text-yellow-800/70 mb-1.5">
            {formatDate(snap.date)}
          </p>

          {primaryLink && !expanded && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-[10px] text-blue-600 hover:underline truncate block max-w-full"
            >
              {primaryLink.label}
            </a>
          )}

          <div
            style={{
              maxHeight: expanded ? '600px' : '0px',
              opacity: expanded ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease, opacity 0.25s ease',
            }}
          >
            <div className="pt-2 border-t border-yellow-300/60 mt-2 space-y-2">
              {snippet && (
                <p className="text-[11px] text-yellow-950/80 leading-relaxed">{snippet}</p>
              )}

              {allLinks.length > 0 && (
                <div className="space-y-1">
                  {allLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="flex items-center gap-1 text-[10px] text-blue-600 hover:underline"
                    >
                      <ExternalLink size={9} />
                      <span className="truncate">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1 pt-0.5">
                {pillarSlug && (
                  <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium bg-yellow-200/70 text-yellow-900 uppercase tracking-wide">
                    {pillarSlug.replace(/-/g, ' ')}
                  </span>
                )}
                {dynastyName && (
                  <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium bg-amber-200/70 text-amber-900">
                    {dynastyName}
                  </span>
                )}
                {severity && (
                  <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium bg-red-100/80 text-red-800 uppercase tracking-wide">
                    {severity}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {!readOnly && (
          <div
            className="absolute bottom-2 right-2 text-yellow-700/30 cursor-grab"
            onClick={handleGripClick}
          >
            <GripVertical size={14} />
          </div>
        )}
      </div>
    </div>
  );
}
