import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, Database, ArrowUpDown, TriangleAlert as AlertTriangle, ArrowLeft, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import insiderTradesData from '@/data/data_insider_trades.json';

interface InsiderTrade {
  Flag: string;
  Date: string;
  Company: string;
  Insider: string;
  Position: string;
  Type: string;
  Shares: string;
  Value: string;
  Notes?: string;
  Source: string;
}

const trades: InsiderTrade[] = insiderTradesData as InsiderTrade[];

const PAGE_SIZE = 25;

type SortField = keyof InsiderTrade;

export function InsiderTradesContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('Date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showSuspiciousOnly, setShowSuspiciousOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const IT_DEFAULT_WIDTHS = [60, 110, 180, 150, 140, 90, 100, 120, 180, 80];
  const { columnWidths: itWidths, handleMouseDown: itMouseDown, resetColumnWidth: itReset } = useResizableColumns(IT_DEFAULT_WIDTHS);

  const toggleCard = (i: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const suspiciousCount = useMemo(
    () => trades.filter((t) => t.Flag !== '—').length,
    []
  );

  const filteredTrades = useMemo(() => {
    let filtered = trades.filter((trade) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        trade.Company.toLowerCase().includes(searchLower) ||
        trade.Insider.toLowerCase().includes(searchLower) ||
        trade.Position.toLowerCase().includes(searchLower) ||
        trade.Type.toLowerCase().includes(searchLower);

      const matchesSuspicious = !showSuspiciousOnly || trade.Flag !== '—';

      return matchesSearch && matchesSuspicious;
    });

    filtered = [...filtered].sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      const direction = sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? direction : -direction;
    });

    return filtered;
  }, [searchTerm, sortField, sortDirection, showSuspiciousOnly]);

  const totalPages = Math.max(1, Math.ceil(filteredTrades.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const pageEnd = Math.min(pageStart + PAGE_SIZE, filteredTrades.length);
  const pageTrades = filteredTrades.slice(pageStart, pageEnd);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSuspiciousToggle = (checked: boolean) => {
    setShowSuspiciousOnly(checked);
    setCurrentPage(1);
  };

  const pageNumbers = useMemo(() => {
    const range: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      if (safePage > 3) range.push('...');
      const lo = Math.max(2, safePage - 1);
      const hi = Math.min(totalPages - 1, safePage + 1);
      for (let i = lo; i <= hi; i++) range.push(i);
      if (safePage < totalPages - 2) range.push('...');
      range.push(totalPages);
    }
    return range;
  }, [totalPages, safePage]);

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Tracking corporate insider trading activity and suspicious patterns. Data sourced from SEC Form 4 filings.
        </p>
      </div>

      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#ffbf00]/30 rounded-lg p-3" style={{ minHeight: '52px' }}>
          <Search className="w-5 h-5 text-[#ffbf00] shrink-0" />
          <Input
            type="text"
            placeholder="Search by company, insider, position, or type..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-black border-[#ffbf00]/30 text-[#e5e5e5] placeholder:text-[#666] focus:border-[#ffbf00] h-11"
          />
          <span className="text-[#ffbf00] text-xs font-mono whitespace-nowrap hidden sm:block">
            {filteredTrades.length}/{trades.length}
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4" style={{ minHeight: '44px' }}>
          <input
            type="checkbox"
            id="suspicious-only"
            checked={showSuspiciousOnly}
            onChange={(e) => handleSuspiciousToggle(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="suspicious-only" className="text-[#e5e5e5] text-sm flex items-center gap-2 cursor-pointer">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            Suspicious patterns only ({suspiciousCount} flagged)
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#666]">
        <span>
          Showing <span className="text-[#ffbf00]">{filteredTrades.length > 0 ? pageStart + 1 : 0}–{pageEnd}</span> of <span className="text-[#ffbf00]">{filteredTrades.length}</span> records
        </span>
        <span>Page <span className="text-[#ffbf00]">{safePage}</span> of <span className="text-[#ffbf00]">{totalPages}</span></span>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden space-y-3 mb-4">
        {pageTrades.map((trade, index) => {
          const absIndex = pageStart + index;
          const isExpanded = expandedCards.has(absIndex);
          return (
            <div key={absIndex} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex-1 min-w-0">
                    <div className="text-[#e5e5e5] font-semibold text-base leading-tight truncate">{trade.Company}</div>
                    <div className="text-[#a0a0a0] text-sm">{trade.Insider}</div>
                    <div className="text-[#666] font-mono text-xs mt-0.5">{trade.Date}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {trade.Flag !== '—' && <AlertTriangle className="w-4 h-4 text-red-400" />}
                    <Badge className={`font-mono text-xs ${trade.Type === 'Purchase' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}`}>{trade.Type}</Badge>
                  </div>
                </div>
                <div className="text-[#ffbf00] font-mono font-bold text-sm mt-2">{trade.Value}</div>
              </div>
              <button
                onClick={() => toggleCard(absIndex)}
                className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#ffbf00] border-t border-[#333] hover:bg-[#ffbf00]/5 transition-colors"
                style={{ minHeight: '44px' }}
              >
                <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-3 space-y-2 border-t border-[#222]">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-[#666] text-xs font-mono">POSITION</div>
                      <div className="text-[#a0a0a0] text-sm mt-0.5">{trade.Position}</div>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">SHARES</div>
                      <div className="text-[#e5e5e5] text-sm font-mono mt-0.5">{trade.Shares}</div>
                    </div>
                  </div>
                  {trade.Notes && trade.Notes !== '—' && (
                    <div>
                      <div className="text-[#666] text-xs font-mono">NOTES</div>
                      <div className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">{trade.Notes}</div>
                    </div>
                  )}
                  <a href={trade.Source} target="_blank" rel="noopener noreferrer" className="text-[#ffbf00] hover:text-[#ffbf00]/80 flex items-center gap-1 text-xs">
                    SEC Filing <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
        {pageTrades.length === 0 && (
          <div className="p-8 text-center text-[#666] font-mono text-sm">No records match the current filter.</div>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block bg-[#0a0a0a] border border-[#ffbf00]/30 rounded-lg overflow-hidden">
        <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
          <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#ffbf00]/10 lg:hidden">Swipe for more columns →</div>
          <table style={{ tableLayout: 'fixed', width: `${itWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <colgroup>
              {itWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
            </colgroup>
            <thead>
              <tr className="bg-black border-b border-[#ffbf00]/30">
                <th style={{ width: `${itWidths[0]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Flag
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(0, e.clientX); }} onDoubleClick={() => itReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[1]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Date')}>
                  <div className="flex items-center gap-2">Date <ArrowUpDown className="w-4 h-4" /></div>
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); itMouseDown(1, e.clientX); }} onDoubleClick={() => itReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[2]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Company')}>
                  <div className="flex items-center gap-2">Company <ArrowUpDown className="w-4 h-4" /></div>
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); itMouseDown(2, e.clientX); }} onDoubleClick={() => itReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[3]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Insider
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(3, e.clientX); }} onDoubleClick={() => itReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[4]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Position
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(4, e.clientX); }} onDoubleClick={() => itReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[5]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Type
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(5, e.clientX); }} onDoubleClick={() => itReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[6]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Shares
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(6, e.clientX); }} onDoubleClick={() => itReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[7]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Value
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(7, e.clientX); }} onDoubleClick={() => itReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[8]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Notes
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(8, e.clientX); }} onDoubleClick={() => itReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${itWidths[9]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ffbf00', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Source
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); itMouseDown(9, e.clientX); }} onDoubleClick={() => itReset(9)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffbf0066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
              </tr>
            </thead>
            <tbody>
              {pageTrades.map((trade, index) => (
                <tr
                  key={pageStart + index}
                  className="border-b border-[#ffbf00]/10 hover:border-l-4 hover:border-l-[#ffbf00] transition-all"
                  style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                >
                  <td className="p-4">
                    {trade.Flag !== '—' && (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </td>
                  <td className="p-4 text-[#e5e5e5] text-sm font-mono">{trade.Date}</td>
                  <td className="p-4">
                    <div className="text-[#e5e5e5] text-sm font-semibold">{trade.Company}</div>
                  </td>
                  <td className="p-4 text-[#e5e5e5] text-sm">{trade.Insider}</td>
                  <td className="p-4 text-[#a0a0a0] text-sm">{trade.Position}</td>
                  <td className="p-4">
                    <Badge
                      className={`font-mono text-xs ${
                        trade.Type === 'Purchase'
                          ? 'bg-green-500/20 text-green-400 border-green-500/50'
                          : 'bg-red-500/20 text-red-400 border-red-500/50'
                      }`}
                    >
                      {trade.Type}
                    </Badge>
                  </td>
                  <td className="p-4 text-[#e5e5e5] text-sm font-mono">{trade.Shares}</td>
                  <td className="p-4 text-[#e5e5e5] text-sm font-mono">{trade.Value}</td>
                  <td className="p-4 text-[#a0a0a0] text-xs max-w-xs">{trade.Notes || '—'}</td>
                  <td className="p-4">
                    <a
                      href={trade.Source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffbf00] hover:text-[#ffbf00]/80 flex items-center gap-1 text-sm"
                    >
                      SEC <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
              {pageTrades.length === 0 && (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-[#666] font-mono text-sm">
                    No records match the current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[#ffbf00]/50 hover:text-[#ffbf00] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-3 h-3" /> Prev
          </button>

          {pageNumbers.map((p, i) =>
            p === '...' ? (
              <span key={`ellipsis-${i}`} className="px-2 py-1.5 text-xs font-mono text-[#666]">…</span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p as number)}
                className={`px-3 py-1.5 text-xs font-mono border rounded-sm transition-all ${
                  safePage === p
                    ? 'border-[#ffbf00]/60 bg-[#ffbf00]/10 text-[#ffbf00]'
                    : 'border-[#333] bg-[#111] text-[#a0a0a0] hover:border-[#ffbf00]/50 hover:text-[#ffbf00]'
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[#ffbf00]/50 hover:text-[#ffbf00] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Next <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="mt-6 bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-400/80 text-sm">
          <strong className="font-mono">METHODOLOGY:</strong> Trades are flagged as suspicious based on timing relative to material news,
          unusual volume, or proximity to regulatory events. This is for research purposes only and does not constitute legal or financial advice.
        </p>
      </div>
    </div>
  );
}

export default function InsiderTrades() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Corporate Insider Trades Tracker"
        description="Monitor suspicious insider trading patterns and SEC filings from corporate executives."
        url={`${window.location.origin}/trackers/insider-trades`}
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 py-8 pt-24 pb-24 max-w-[1600px] overflow-x-hidden">
        <Link
          to="/trackers"
          className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 font-mono text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trackers
        </Link>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-8 h-8 text-[#ffbf00]" />
            <h1 className="text-3xl font-bold text-[#e5e5e5] font-mono">&gt; INSIDER_TRADES.db</h1>
          </div>
        </div>
        <InsiderTradesContent />
      </main>
      <Footer />
    </div>
  );
}
