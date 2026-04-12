import {
  FileText,
  Calendar,
  ShieldAlert,
  Gavel,
  TriangleAlert as AlertTriangle,
  Skull,
  TrendingDown,
  Users,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
} from 'lucide-react';
import type { ResearchItem, ResearchItemType } from '../../lib/researchItems';

export interface ResultCardProps {
  item: ResearchItem;
  pinned: boolean;
  onPinToggle: (item: ResearchItem) => void;
  onOpenDetails?: (item: ResearchItem) => void;
}

const TYPE_CONFIG: Record<
  ResearchItemType,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string; bg: string }
> = {
  Document:   { label: 'Document',   icon: FileText,      color: 'text-teal-700',   bg: 'bg-teal-100' },
  Event:      { label: 'Event',      icon: Calendar,      color: 'text-blue-700',   bg: 'bg-blue-100' },
  Watchlist:  { label: 'Watchlist',  icon: ShieldAlert,   color: 'text-red-700',    bg: 'bg-red-100' },
  Conviction: { label: 'Conviction', icon: Gavel,         color: 'text-orange-700', bg: 'bg-orange-100' },
  Incident:   { label: 'Incident',   icon: AlertTriangle, color: 'text-amber-700',  bg: 'bg-amber-100' },
  Death:      { label: 'Death',      icon: Skull,         color: 'text-slate-700',  bg: 'bg-slate-100' },
  Trade:      { label: 'Trade',      icon: TrendingDown,  color: 'text-green-700',  bg: 'bg-green-100' },
  Family:     { label: 'Family',     icon: Users,         color: 'text-purple-700', bg: 'bg-purple-100' },
};

const TIER_COLOR: Record<string, string> = {
  verified:     'bg-green-500',
  corroborated: 'bg-amber-400',
  preliminary:  'bg-slate-400',
};

const SEVERITY_STYLE: Record<string, string> = {
  critical: 'bg-red-100 text-red-800',
  high:     'bg-orange-100 text-orange-800',
  medium:   'bg-amber-100 text-amber-800',
  low:      'bg-slate-100 text-slate-700',
};

function formatDate(date: string | null): string {
  if (!date) return 'Unknown date';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Unknown date';
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ResultCard({ item, pinned, onPinToggle, onOpenDetails }: ResultCardProps) {
  const typeConfig = TYPE_CONFIG[item.itemType] ?? TYPE_CONFIG.Document;
  const TypeIcon = typeConfig.icon;

  const tierDotClass = item.verificationTier ? TIER_COLOR[item.verificationTier] : null;
  const severityClass = item.severity
    ? SEVERITY_STYLE[item.severity.toLowerCase()] ?? 'bg-slate-100 text-slate-700'
    : null;

  function handleCardClick() {
    onOpenDetails?.(item);
  }

  function handlePinClick(e: React.MouseEvent) {
    e.stopPropagation();
    onPinToggle(item);
  }

  function handleDetailsClick(e: React.MouseEvent) {
    e.stopPropagation();
    onOpenDetails?.(item);
  }

  return (
    <div
      onClick={handleCardClick}
      className={`
        group flex items-start gap-3 w-full px-4 py-3
        bg-card border border-border rounded-lg
        hover:bg-accent/40 hover:border-accent
        transition-colors duration-150
        ${onOpenDetails ? 'cursor-pointer' : ''}
      `}
    >
      <div className="flex flex-col items-center gap-2 pt-0.5 shrink-0">
        <span
          className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap ${typeConfig.bg} ${typeConfig.color}`}
        >
          <TypeIcon size={10} />
          {typeConfig.label}
        </span>

        {item.pillar && (
          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium bg-muted text-muted-foreground uppercase tracking-wide max-w-[72px] truncate text-center" title={item.pillar}>
            {item.pillar}
          </span>
        )}

        {!item.pillar && item.dynastyName && (
          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium bg-amber-100 text-amber-800 max-w-[72px] truncate text-center">
            {item.dynastyName}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-semibold text-foreground leading-snug mb-1"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.title}
        </p>

        {item.snippet && (
          <p
            className="text-xs text-muted-foreground leading-relaxed mb-1.5"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.snippet}
          </p>
        )}

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-muted-foreground">{formatDate(item.date)}</span>

          {tierDotClass && (
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span className={`inline-block w-2 h-2 rounded-full ${tierDotClass}`} />
              {item.verificationTier}
            </span>
          )}

          {severityClass && (
            <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium uppercase tracking-wide ${severityClass}`}>
              {item.severity}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
        <button
          onClick={handlePinClick}
          title={pinned ? 'Unpin from corkboard' : 'Pin to corkboard'}
          className={`
            p-1.5 rounded-md transition-colors duration-150
            ${pinned
              ? 'text-amber-500 hover:text-amber-600 hover:bg-amber-50'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'}
          `}
        >
          {pinned ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
        </button>

        {onOpenDetails && (
          <button
            onClick={handleDetailsClick}
            title="View details"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
