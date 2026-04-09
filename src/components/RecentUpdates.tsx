import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { normalizePillarName, getPillarSlugByName } from '@/lib/pillarUtils';
import { ChevronRight, ChevronLeft, Clock, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useQueryClient } from '@tanstack/react-query';
import { useRecentDocuments } from '@/hooks/useSupabaseQuery';

interface RecentItem {
  id: string;
  title: string;
  slug?: string;
  updated_at: string;
  created_at: string;
  verification_tier?: string;
  pillar?: string;
  type: 'evidence';
}

interface RecentUpdatesProps {
  lastVisit: Date | null;
  isCollapsed: boolean;
  onToggle: () => void;
}

const TIER_COLORS: Record<string, string> = {
  verified: 'bg-green-500/20 text-green-400 border-green-500/40',
  corroborated: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  open: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
  preliminary: 'bg-gray-500/20 text-gray-400 border-gray-500/40',
};

const TIER_LABELS: Record<string, string> = {
  verified: 'VERIFIED',
  corroborated: 'VALID',
  open: 'OPEN',
  preliminary: 'PRELIM',
};

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHrs < 24) return `${diffHrs}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isNew(item: RecentItem, lastVisit: Date | null): boolean {
  if (!lastVisit) return false;
  const updated = new Date(item.updated_at);
  const created = new Date(item.created_at);
  return updated > lastVisit || created > lastVisit;
}

export function RecentUpdates({ lastVisit, isCollapsed, onToggle }: RecentUpdatesProps) {
  const queryClient = useQueryClient();
  const { data: recentDocs = [], isLoading: loading } = useRecentDocuments(10);

  const items: RecentItem[] = useMemo(() => {
    return recentDocs.map(doc => ({
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      updated_at: doc.updated_at,
      created_at: doc.created_at,
      verification_tier: doc.verification_tier,
      pillar: doc.metadata?.pillar,
      type: 'evidence' as const,
    }));
  }, [recentDocs]);

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['documents', 'recent'] });
  };

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center py-4 px-2 gap-3">
        <button
          onClick={onToggle}
          className="text-green-400 hover:text-green-300 transition-colors p-1"
          title="Expand recent updates"
          aria-label="Expand recent updates"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div
          className="text-green-500/40 font-mono text-[9px] tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          RECENT UPDATES
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 py-3 border-b border-green-500/20 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-green-400" />
          <span className="text-green-400 font-mono text-xs font-bold tracking-wider">
            RECENT UPDATES
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleRefresh}
            className="text-green-500/40 hover:text-green-400 transition-colors p-1"
            title="Refresh"
            aria-label="Refresh recent updates"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
          <button
            onClick={onToggle}
            className="text-green-500/40 hover:text-green-400 transition-colors p-1"
            title="Collapse"
            aria-label="Collapse recent updates"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-green-500/40 font-mono text-xs text-center py-8 px-3">
            No recent updates
          </div>
        ) : (
          <div className="divide-y divide-green-500/10">
            {items.map(item => {
              const itemIsNew = isNew(item, lastVisit);
              const tierColor = TIER_COLORS[item.verification_tier || ''] || TIER_COLORS.preliminary;
              const tierLabel = TIER_LABELS[item.verification_tier || ''] || 'PRELIM';
              const pillarName = item.pillar ? normalizePillarName(item.pillar) : null;
              const pillarSlug = item.pillar ? getPillarSlugByName(item.pillar) : null;
              const href = item.slug ? `/evidence/${item.slug}` : '#';

              return (
                <div key={item.id} className="px-3 py-2.5 hover:bg-green-500/5 transition-colors group">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5 relative">
                      {itemIsNew && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                      <div className="w-1.5 h-1.5 bg-green-500/30 rounded-full mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-green-500/40 font-mono text-[10px]">
                          {formatRelativeTime(item.updated_at)}
                        </span>
                        {itemIsNew && (
                          <span className="text-[9px] font-bold font-mono text-green-400 bg-green-500/20 px-1 py-0.5 rounded border border-green-500/40 animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <Link
                        to={href}
                        className="text-green-300/80 text-[11px] font-mono leading-tight hover:text-green-200 transition-colors block line-clamp-2 group-hover:text-green-300"
                      >
                        {item.title}
                      </Link>
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        {pillarSlug && pillarName && (
                          <Link to={`/pillars/${pillarSlug}`}>
                            <Badge className="bg-green-500/10 text-green-500/50 border-green-500/20 text-[9px] px-1 py-0 leading-tight hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-pointer">
                              {pillarName.length > 20 ? pillarName.substring(0, 18) + '…' : pillarName}
                            </Badge>
                          </Link>
                        )}
                        <Badge className={`${tierColor} text-[9px] px-1 py-0 leading-tight`}>
                          {tierLabel}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-3 py-2 border-t border-green-500/10 flex-shrink-0">
        <Link
          to="/changelog"
          className="text-green-500/40 font-mono text-[10px] hover:text-green-400 transition-colors flex items-center gap-1"
        >
          View full changelog
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
