import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { normalizePillarName, getPillarSlugByName } from '@/lib/pillarUtils';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, History, ArrowUpRight } from 'lucide-react';
import { useLastVisit } from '@/hooks/useLastVisit';

interface ChangelogEntry {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
  verification_tier: string;
  pillar?: string;
  action: 'added' | 'updated';
}

const PAGE_SIZE = 25;

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

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}

function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

export function Changelog() {
  const { lastVisit } = useLastVisit();
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [filter, setFilter] = useState<'all' | 'added' | 'updated'>('all');

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const loadPage = useCallback(async (pageNum: number, filterType: 'all' | 'added' | 'updated') => {
    setLoading(true);
    try {
      const from = pageNum * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, count, error } = await supabase
        .from('documents')
        .select('id, title, slug, created_at, updated_at, verification_tier, metadata', { count: 'exact' })
        .order('updated_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      const mapped: ChangelogEntry[] = (data || []).map(doc => {
        const createdAt = new Date(doc.created_at);
        const updatedAt = new Date(doc.updated_at);
        const diffMs = updatedAt.getTime() - createdAt.getTime();
        const action: 'added' | 'updated' = diffMs < 60000 ? 'added' : 'updated';

        return {
          id: doc.id,
          title: doc.title,
          slug: doc.slug,
          created_at: doc.created_at,
          updated_at: doc.updated_at,
          verification_tier: doc.verification_tier,
          pillar: doc.metadata?.pillar,
          action,
        };
      });

      const filtered = filterType === 'all'
        ? mapped
        : mapped.filter(e => e.action === filterType);

      setEntries(filtered);
      setTotalCount(count || 0);
    } catch (err) {
      console.error('Changelog load error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage(page, filter);
  }, [page, filter, loadPage]);

  const handleFilterChange = (f: 'all' | 'added' | 'updated') => {
    setFilter(f);
    setPage(0);
  };

  return (
    <div className="min-h-screen bg-black text-green-500">
      <SEOHead
        title="Changelog"
        description="Full paginated log of all content additions and updates to The Red Pill Bibliography evidence archive."
        url="https://redpillbiblio.wtf/changelog"
      />

      <Navigation />

      <main id="main-content" className="container mx-auto px-4 md:px-6 py-8 pt-20 pb-24 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <History className="w-7 h-7 text-green-400" />
            <h1 className="text-green-400 font-mono text-2xl font-bold">&gt; CHANGELOG.log</h1>
          </div>
          <p className="text-green-500/60 font-mono text-sm">
            Paginated log of all content additions and updates to the archive
          </p>
          <div className="mt-3 text-green-500/40 font-mono text-xs">
            {totalCount.toLocaleString()} total entries
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {(['all', 'added', 'updated'] as const).map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                filter === f
                  ? 'bg-green-500/20 text-green-400 border-green-500/50'
                  : 'bg-transparent text-green-500/40 border-green-500/20 hover:border-green-500/40 hover:text-green-400'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="bg-black border border-green-500/20 rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-[140px_80px_1fr_130px_90px] gap-2 px-4 py-2 bg-green-500/5 border-b border-green-500/20">
            <span className="text-green-500/40 font-mono text-[10px] tracking-wider">DATE</span>
            <span className="text-green-500/40 font-mono text-[10px] tracking-wider">ACTION</span>
            <span className="text-green-500/40 font-mono text-[10px] tracking-wider">TITLE</span>
            <span className="text-green-500/40 font-mono text-[10px] tracking-wider">PILLAR</span>
            <span className="text-green-500/40 font-mono text-[10px] tracking-wider">TIER</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-12 text-green-500/40 font-mono text-sm">
              No entries found
            </div>
          ) : (
            <div className="divide-y divide-green-500/10">
              {entries.map(entry => {
                const isNew = lastVisit ? new Date(entry.updated_at) > lastVisit : false;
                const tierColor = TIER_COLORS[entry.verification_tier] || TIER_COLORS.preliminary;
                const tierLabel = TIER_LABELS[entry.verification_tier] || 'PRELIM';
                const pillarName = entry.pillar ? normalizePillarName(entry.pillar) : null;
                const pillarSlug = entry.pillar ? getPillarSlugByName(entry.pillar) : null;

                return (
                  <div
                    key={entry.id}
                    className={`px-4 py-3 hover:bg-green-500/5 transition-colors ${isNew ? 'border-l-2 border-l-green-400' : 'border-l-2 border-l-transparent'}`}
                  >
                    <div className="hidden md:grid grid-cols-[140px_80px_1fr_130px_90px] gap-2 items-center">
                      <span className="text-green-500/40 font-mono text-[10px]">
                        {formatDateShort(entry.updated_at)}
                      </span>
                      <span>
                        <Badge className={`font-mono text-[9px] px-1 py-0 ${
                          entry.action === 'added'
                            ? 'bg-green-500/20 text-green-400 border-green-500/40'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        }`}>
                          {entry.action.toUpperCase()}
                        </Badge>
                      </span>
                      <div className="flex items-center gap-2 min-w-0">
                        {isNew && (
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        )}
                        <Link
                          to={`/evidence/${entry.slug}`}
                          className="text-green-300/80 font-mono text-xs hover:text-green-200 transition-colors truncate flex items-center gap-1 group"
                        >
                          <span className="truncate">{entry.title}</span>
                          <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </div>
                      <div>
                        {pillarSlug && pillarName ? (
                          <Link to={`/pillars/${pillarSlug}`}>
                            <Badge className="bg-green-500/10 text-green-500/50 border-green-500/20 text-[9px] px-1 py-0 hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-pointer truncate block max-w-full">
                              {pillarName.length > 18 ? pillarName.substring(0, 16) + '…' : pillarName}
                            </Badge>
                          </Link>
                        ) : (
                          <span className="text-green-500/20 font-mono text-[9px]">—</span>
                        )}
                      </div>
                      <div>
                        <Badge className={`${tierColor} font-mono text-[9px] px-1 py-0`}>
                          {tierLabel}
                        </Badge>
                      </div>
                    </div>

                    <div className="md:hidden">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-500/40 font-mono text-[10px]">
                          {formatDateShort(entry.updated_at)}
                        </span>
                        <Badge className={`font-mono text-[9px] px-1 py-0 ${
                          entry.action === 'added'
                            ? 'bg-green-500/20 text-green-400 border-green-500/40'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        }`}>
                          {entry.action.toUpperCase()}
                        </Badge>
                        {isNew && (
                          <span className="text-[9px] font-bold font-mono text-green-400 bg-green-500/20 px-1 py-0.5 rounded border border-green-500/40 animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/evidence/${entry.slug}`}
                        className="text-green-300/80 font-mono text-xs hover:text-green-200 transition-colors block mb-1.5"
                      >
                        {entry.title}
                      </Link>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {pillarSlug && pillarName && (
                          <Link to={`/pillars/${pillarSlug}`}>
                            <Badge className="bg-green-500/10 text-green-500/50 border-green-500/20 text-[9px] px-1 py-0 hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-pointer">
                              {pillarName.length > 20 ? pillarName.substring(0, 18) + '…' : pillarName}
                            </Badge>
                          </Link>
                        )}
                        <Badge className={`${tierColor} font-mono text-[9px] px-1 py-0`}>
                          {tierLabel}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0 || loading}
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono text-xs disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <span className="text-green-500/40 font-mono text-xs">
              Page {page + 1} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1 || loading}
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono text-xs disabled:opacity-30"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        <div className="mt-8 text-center text-green-500/30 font-mono text-[10px]">
          ALL TIMESTAMPS IN UTC • ORDERED BY LAST UPDATED
        </div>
      </main>

      <Footer />
    </div>
  );
}
