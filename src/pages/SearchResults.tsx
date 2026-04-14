import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Search, FileText, Crosshair, Clock, TriangleAlert, X, ChevronRight, Filter } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { fullSearch, SearchResult, SearchResultType } from '@/lib/searchService';

const PAGE_SIZE = 20;

const TYPE_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  evidence: FileText,
  dossier: Crosshair,
  timeline: Clock,
  incident: TriangleAlert,
};

const TYPE_LABEL: Record<string, string> = {
  evidence: 'Evidence',
  dossier: 'Dossier',
  timeline: 'Timeline',
  incident: 'Incident',
};

const TIER_COLOR: Record<string, string> = {
  verified: 'text-[#00ff41] border-[#00ff41] bg-[#00ff41]/10',
  corroborated: 'text-[#ffbf00] border-[#ffbf00] bg-[#ffbf00]/10',
  preliminary: 'text-[#a0a0a0] border-[#a0a0a0] bg-[#a0a0a0]/10',
};

const TIER_LABEL: Record<string, string> = {
  verified: 'VERIFIED',
  corroborated: 'VALID',
  preliminary: 'PRELIMINARY',
};

function resultLink(r: SearchResult): string {
  if (r.type === 'evidence') return r.slug ? `/evidence/${r.slug}` : `/evidence/${r.id}`;
  if (r.type === 'dossier') return '/watchlist';
  if (r.type === 'incident') return '/trackers/accidents';
  return '/timeline';
}

export function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [activeTypes, setActiveTypes] = useState<SearchResultType[]>(['evidence', 'dossier', 'timeline', 'incident']);
  const [activeTiers, setActiveTiers] = useState<string[]>([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const runSearch = useCallback(async (q: string, pg: number) => {
    if (!q.trim()) { setResults([]); setTotal(0); return; }
    setLoading(true);
    try {
      const data = await fullSearch(
        q,
        { types: activeTypes, tiers: activeTiers.length > 0 ? activeTiers : undefined, dateFrom: dateFrom || undefined, dateTo: dateTo || undefined },
        pg,
        PAGE_SIZE
      );
      setResults(data.results);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  }, [activeTypes, activeTiers, dateFrom, dateTo]);

  useEffect(() => {
    if (query.trim()) runSearch(query, page);
  }, [query, page, runSearch]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = inputValue.trim();
    if (!q) return;
    setPage(1);
    setQuery(q);
    setSearchParams({ q });
  }

  function toggleType(t: SearchResultType) {
    setPage(1);
    setActiveTypes(prev =>
      prev.includes(t)
        ? prev.length > 1 ? prev.filter(x => x !== t) : prev
        : [...prev, t]
    );
  }

  function toggleTier(tier: string) {
    setPage(1);
    setActiveTiers(prev =>
      prev.includes(tier) ? prev.filter(x => x !== tier) : [...prev, tier]
    );
  }

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16">
      <Navigation />
      <SEOHead
        title={query ? `Search: ${query}` : 'Search'}
        description="Search across all evidence, dossiers, and timeline events."
        url="https://redpillbiblio.wtf/search"
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-[10px] text-[#00ff41]/60 font-mono tracking-widest mb-2">&gt; GLOBAL_SEARCH.query</div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00ff41]/50 pointer-events-none" />
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Search evidence, dossiers, timeline events..."
                spellCheck={false}
                autoComplete="off"
                className="w-full h-10 pl-10 pr-4 bg-black/60 border border-[#00ff41]/40 rounded text-sm font-mono text-[#e5e5e5] placeholder:text-[#444] focus:outline-none focus:border-[#00ff41]/70 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-5 h-10 bg-[#00ff41]/10 border border-[#00ff41]/40 text-[#00ff41] font-mono text-sm rounded hover:bg-[#00ff41]/20 hover:border-[#00ff41]/70 transition-all"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex gap-6 items-start">
          {/* Filters sidebar */}
          <aside className="w-52 shrink-0 hidden md:block">
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4 space-y-5">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#00ff41]/60" />
                <span className="text-[9px] uppercase tracking-[1.5px] text-[#555] font-mono">Filters</span>
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-[1.5px] text-[#555] font-mono mb-2">Type</div>
                <div className="flex flex-col gap-1.5">
                  {(['evidence', 'dossier', 'timeline', 'incident'] as SearchResultType[]).map(t => {
                    const Icon = TYPE_ICON[t];
                    const active = activeTypes.includes(t);
                    return (
                      <button
                        key={t}
                        onClick={() => toggleType(t)}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] font-mono transition-all ${
                          active
                            ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30'
                            : 'text-[#666] border border-[#1a1a1a] hover:border-[#333] hover:text-[#a0a0a0]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {TYPE_LABEL[t]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-[1.5px] text-[#555] font-mono mb-2">Credibility</div>
                <div className="flex flex-col gap-1.5">
                  {['verified', 'corroborated', 'preliminary'].map(tier => {
                    const active = activeTiers.includes(tier);
                    return (
                      <button
                        key={tier}
                        onClick={() => toggleTier(tier)}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-[10px] font-mono border transition-all ${
                          active
                            ? TIER_COLOR[tier] + ' border-current'
                            : 'text-[#666] border-[#1a1a1a] hover:border-[#333] hover:text-[#a0a0a0]'
                        }`}
                      >
                        {TIER_LABEL[tier]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-[1.5px] text-[#555] font-mono mb-2">Date Range</div>
                <div className="space-y-2">
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={e => { setDateFrom(e.target.value); setPage(1); }}
                    className="w-full h-7 px-2 bg-black/40 border border-[#1a1a1a] rounded text-[10px] font-mono text-[#a0a0a0] focus:outline-none focus:border-[#00ff41]/40"
                    placeholder="From"
                  />
                  <input
                    type="date"
                    value={dateTo}
                    onChange={e => { setDateTo(e.target.value); setPage(1); }}
                    className="w-full h-7 px-2 bg-black/40 border border-[#1a1a1a] rounded text-[10px] font-mono text-[#a0a0a0] focus:outline-none focus:border-[#00ff41]/40"
                    placeholder="To"
                  />
                </div>
              </div>

              {(activeTiers.length > 0 || dateFrom || dateTo) && (
                <button
                  onClick={() => { setActiveTiers([]); setDateFrom(''); setDateTo(''); setPage(1); }}
                  className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 border border-[#333] text-[#666] hover:text-[#a0a0a0] hover:border-[#555] rounded text-[10px] font-mono transition-all"
                >
                  <X className="w-3 h-3" /> Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {query && (
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] text-[#555] font-mono">
                  {loading ? 'Searching...' : `${total} result${total !== 1 ? 's' : ''} for `}
                  {!loading && <span className="text-[#a0a0a0]">&ldquo;{query}&rdquo;</span>}
                </div>
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-3 py-12 justify-center">
                <div className="w-5 h-5 border-2 border-[#00ff41]/40 border-t-[#00ff41] rounded-full animate-spin" />
                <span className="text-[#555] font-mono text-sm">Searching all tables...</span>
              </div>
            )}

            {!loading && results.length === 0 && query && (
              <div className="text-center py-16">
                <Search className="w-10 h-10 text-[#222] mx-auto mb-4" />
                <div className="text-[#555] font-mono text-sm">No results found for &ldquo;{query}&rdquo;</div>
                <div className="text-[#333] font-mono text-xs mt-2">Try different keywords or broaden your filters</div>
              </div>
            )}

            {!loading && results.length === 0 && !query && (
              <div className="text-center py-16">
                <Search className="w-10 h-10 text-[#222] mx-auto mb-4" />
                <div className="text-[#555] font-mono text-sm">Enter a search query to begin</div>
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="space-y-2">
                {results.map(r => {
                  const Icon = TYPE_ICON[r.type];
                  const link = resultLink(r);
                  return (
                    <Link
                      key={`${r.type}-${r.id}`}
                      to={link}
                      className="block bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#00ff41]/30 hover:bg-[#0d0d0d]/80 rounded-lg p-4 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          <Icon className="w-4 h-4 text-[#00ff41]/50 group-hover:text-[#00ff41]/70 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 flex-wrap mb-1">
                            <span className="text-[11px] font-mono text-[#555] uppercase tracking-wider">{TYPE_LABEL[r.type]}</span>
                            {r.tier && (
                              <span className={`text-[9px] font-mono border px-1.5 py-0.5 rounded-sm ${TIER_COLOR[r.tier]}`}>
                                {TIER_LABEL[r.tier]}
                              </span>
                            )}
                            {r.pillar && (
                              <span className="text-[9px] font-mono text-[#444] bg-[#111] border border-[#1a1a1a] px-1.5 py-0.5 rounded-sm">
                                {r.pillar.replace(/^\//, '').replace(/_/g, ' ')}
                              </span>
                            )}
                            {r.severity && (
                              <span className={`text-[9px] font-mono border px-1.5 py-0.5 rounded-sm ${
                                r.severity === 'HIGH' ? 'text-red-400 border-red-400/40 bg-red-400/10' :
                                r.severity === 'MEDIUM' ? 'text-[#ffbf00] border-[#ffbf00]/40 bg-[#ffbf00]/10' :
                                'text-[#a0a0a0] border-[#a0a0a0]/40 bg-[#a0a0a0]/10'
                              }`}>
                                {r.severity}
                              </span>
                            )}
                          </div>
                          <div className="text-[13px] text-[#e5e5e5] font-mono leading-snug mb-1 group-hover:text-white transition-colors">
                            {r.title}
                          </div>
                          {r.description && (
                            <div className="text-[11px] text-[#555] font-mono leading-relaxed line-clamp-2">
                              {r.description}
                            </div>
                          )}
                          {r.date && (
                            <div className="text-[9px] text-[#444] font-mono mt-1.5">
                              {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#333] group-hover:text-[#00ff41]/50 transition-colors shrink-0 mt-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {totalPages > 1 && !loading && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 border border-[#222] text-[#666] font-mono text-xs rounded hover:border-[#00ff41]/30 hover:text-[#a0a0a0] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Prev
                </button>
                <span className="text-[11px] text-[#555] font-mono">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 border border-[#222] text-[#666] font-mono text-xs rounded hover:border-[#00ff41]/30 hover:text-[#a0a0a0] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
