import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, Crosshair, Clock, ChevronRight } from 'lucide-react';
import { globalSearch, SearchResult, GroupedSearchResults } from '@/lib/searchService';

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

const TYPE_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  evidence: FileText,
  dossier: Crosshair,
  timeline: Clock,
};

const TYPE_LABEL: Record<string, string> = {
  evidence: 'Evidence',
  dossier: 'Dossier',
  timeline: 'Timeline',
};

const TIER_COLOR: Record<string, string> = {
  verified: 'text-[#00ff41] border-[#00ff41]',
  corroborated: 'text-[#ffbf00] border-[#ffbf00]',
  preliminary: 'text-[#a0a0a0] border-[#a0a0a0]',
};

const TIER_LABEL: Record<string, string> = {
  verified: 'VERIFIED',
  corroborated: 'VALID',
  preliminary: 'PRELIM',
};

function resultLink(r: SearchResult): string {
  if (r.type === 'evidence') return r.slug ? `/evidence/${r.slug}` : `/evidence/${r.id}`;
  if (r.type === 'dossier') return '/watchlist';
  if (r.type === 'timeline') return '/timeline';
  return '/';
}

function flattenResults(grouped: GroupedSearchResults): SearchResult[] {
  return [...grouped.evidence, ...grouped.dossier, ...grouped.timeline];
}

interface GlobalSearchProps {
  onClose?: () => void;
  compact?: boolean;
}

export function GlobalSearch({ onClose, compact = false }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GroupedSearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const debouncedQuery = useDebounce(query, 300);

  const runSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults(null);
      setOpen(false);
      setActiveIdx(-1);
      return;
    }
    setLoading(true);
    try {
      const data = await globalSearch(q);
      setResults(data);
      setOpen(true);
      setActiveIdx(-1);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    runSearch(debouncedQuery);
  }, [debouncedQuery, runSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const flat = results ? flattenResults(results) : [];
  const MAX_DROPDOWN = 8;
  const displayFlat = flat.slice(0, MAX_DROPDOWN);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, displayFlat.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, -1));
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIdx(-1);
      inputRef.current?.blur();
      onClose?.();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx === displayFlat.length) {
        goToSearchPage();
      } else if (activeIdx >= 0 && displayFlat[activeIdx]) {
        navigate(resultLink(displayFlat[activeIdx]));
        closeDropdown();
      } else if (query.trim()) {
        goToSearchPage();
      }
    }
  }

  function goToSearchPage() {
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    closeDropdown();
    onClose?.();
  }

  function closeDropdown() {
    setOpen(false);
    setActiveIdx(-1);
    setQuery('');
    setResults(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) goToSearchPage();
  }

  function handleResultClick(r: SearchResult) {
    navigate(resultLink(r));
    closeDropdown();
    onClose?.();
  }

  const hasResults = results && results.total > 0;
  const showViewAll = results && results.total > MAX_DROPDOWN;

  return (
    <div ref={containerRef} className={`relative ${compact ? 'w-full' : 'w-[220px] xl:w-[280px]'}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#00ff41]/50 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results && results.total > 0 && setOpen(true)}
          placeholder="Search all data..."
          spellCheck={false}
          autoComplete="off"
          className="w-full h-8 pl-8 pr-7 bg-black/60 border border-[#00ff41]/40 rounded text-[11px] font-mono text-[#e5e5e5] placeholder:text-[#555] focus:outline-none focus:border-[#00ff41]/70 focus:bg-black/80 transition-all"
          aria-label="Global search"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-autocomplete="list"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setResults(null); setOpen(false); inputRef.current?.focus(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#a0a0a0] transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </form>

      {open && (
        <div
          role="listbox"
          aria-label="Search results"
          className="absolute top-full mt-1.5 left-0 right-0 min-w-[320px] bg-[#0a0a0a] border border-[#00ff41]/30 rounded-md shadow-2xl shadow-black/80 z-[9999] overflow-hidden"
        >
          {loading && (
            <div className="px-4 py-3 text-[10px] text-[#555] font-mono flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-[#00ff41]/40 border-t-[#00ff41] rounded-full animate-spin" />
              Searching...
            </div>
          )}

          {!loading && !hasResults && query.trim() && (
            <div className="px-4 py-3 text-[10px] text-[#555] font-mono">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {!loading && hasResults && (
            <>
              {(['evidence', 'dossier', 'timeline'] as const).map(type => {
                const group = results![type];
                if (group.length === 0) return null;
                const Icon = TYPE_ICON[type];
                const startIdx = type === 'evidence' ? 0 : type === 'dossier' ? results!.evidence.length : results!.evidence.length + results!.dossier.length;

                return (
                  <div key={type}>
                    <div className="px-3 pt-2 pb-1 flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-[#00ff41]/60" />
                      <span className="text-[9px] uppercase tracking-[1.5px] text-[#555] font-mono">{TYPE_LABEL[type]}</span>
                    </div>
                    {group.map((r, localIdx) => {
                      const globalIdx = startIdx + localIdx;
                      if (globalIdx >= MAX_DROPDOWN) return null;
                      const isActive = activeIdx === globalIdx;
                      return (
                        <button
                          key={r.id}
                          role="option"
                          aria-selected={isActive}
                          onClick={() => handleResultClick(r)}
                          className={`w-full text-left px-3 py-2 flex items-start gap-2.5 transition-colors ${
                            isActive ? 'bg-[#00ff41]/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex-1 min-w-0 mt-0.5">
                            <div className="text-[11px] text-[#e5e5e5] font-mono truncate leading-tight">{r.title}</div>
                            {r.description && (
                              <div className="text-[9px] text-[#666] font-mono truncate mt-0.5">{r.description}</div>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            {r.tier && (
                              <span className={`text-[8px] font-mono border px-1 py-0.5 rounded-sm ${TIER_COLOR[r.tier]}`}>
                                {TIER_LABEL[r.tier]}
                              </span>
                            )}
                            {r.pillar && (
                              <span className="text-[8px] font-mono text-[#444] truncate max-w-[80px]">
                                {r.pillar.replace(/^\//, '').replace(/_/g, ' ')}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}

              {showViewAll && (
                <button
                  role="option"
                  aria-selected={activeIdx === displayFlat.length}
                  onClick={goToSearchPage}
                  className={`w-full text-left px-3 py-2.5 border-t border-[#00ff41]/10 flex items-center justify-between transition-colors ${
                    activeIdx === displayFlat.length ? 'bg-[#00ff41]/10' : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] text-[#00ff41]/70 font-mono">
                    View all {results!.total}+ results for &ldquo;{query}&rdquo;
                  </span>
                  <ChevronRight className="w-3 h-3 text-[#00ff41]/50" />
                </button>
              )}

              {!showViewAll && (
                <button
                  onClick={goToSearchPage}
                  className="w-full text-left px-3 py-2 border-t border-[#00ff41]/10 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-[10px] text-[#00ff41]/50 font-mono">Full results page</span>
                  <ChevronRight className="w-3 h-3 text-[#00ff41]/40" />
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
