import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Search,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Users,
  Calendar,
} from 'lucide-react';
import tradesData from '@/data/data_congress_trades.json';

interface Trade {
  Date: string;
  Member: string;
  Party: string;
  State: string;
  Ticker: string;
  Company: string;
  Type: 'Purchase' | 'Sale';
  Amount: string;
  Source: string;
}

type SortField = 'Date' | 'Member' | 'Party' | 'State' | 'Ticker' | 'Company' | 'Type' | 'Amount';

const ROWS_PER_PAGE = 50;

export function CongressTradesContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partyFilter, setPartyFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortField, setSortField] = useState<SortField>('Date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const CT_DEFAULT_WIDTHS = [48, 110, 160, 80, 70, 90, 200, 100, 150, 80];
  const { columnWidths: ctWidths, handleMouseDown: ctMouseDown, resetColumnWidth: ctReset } = useResizableColumns(CT_DEFAULT_WIDTHS);

  const toggleCard = (key: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const trades: Trade[] = tradesData as Trade[];

  const uniqueStates = useMemo(() => {
    const states = [...new Set(trades.map((t) => t.State))].sort();
    return states;
  }, [trades]);

  const filteredTrades = useMemo(() => {
    let filtered = trades.filter((trade) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        trade.Member.toLowerCase().includes(searchLower) ||
        trade.Ticker.toLowerCase().includes(searchLower) ||
        trade.Company.toLowerCase().includes(searchLower) ||
        trade.State.toLowerCase().includes(searchLower);

      const matchesParty = partyFilter === 'all' || trade.Party === partyFilter;
      const matchesType = typeFilter === 'all' || trade.Type === typeFilter;
      const matchesState = stateFilter === 'all' || trade.State === stateFilter;

      const tradeDate = new Date(trade.Date);
      const matchesStartDate = !startDate || tradeDate >= new Date(startDate);
      const matchesEndDate = !endDate || tradeDate <= new Date(endDate);

      return matchesSearch && matchesParty && matchesType && matchesState && matchesStartDate && matchesEndDate;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const direction = sortDirection === 'asc' ? 1 : -1;
      if (aVal < bVal) return -direction;
      if (aVal > bVal) return direction;
      return 0;
    });

    return filtered;
  }, [trades, searchTerm, partyFilter, typeFilter, stateFilter, startDate, endDate, sortField, sortDirection]);

  const stats = useMemo(() => {
    const demTrades = filteredTrades.filter((t) => t.Party === 'D').length;
    const repTrades = filteredTrades.filter((t) => t.Party === 'R').length;
    const purchases = filteredTrades.filter((t) => t.Type === 'Purchase').length;
    const sales = filteredTrades.filter((t) => t.Type === 'Sale').length;

    const memberCounts: Record<string, number> = {};
    filteredTrades.forEach((t) => {
      memberCounts[t.Member] = (memberCounts[t.Member] || 0) + 1;
    });
    const mostActive = Object.entries(memberCounts).sort((a, b) => b[1] - a[1])[0];

    const dates = filteredTrades.map((t) => t.Date).sort();
    const dateRange = dates.length > 0 ? `${dates[0]} to ${dates[dates.length - 1]}` : 'N/A';

    return {
      total: filteredTrades.length,
      demTrades,
      repTrades,
      purchases,
      sales,
      mostActive: mostActive ? `${mostActive[0]} (${mostActive[1]})` : 'N/A',
      dateRange,
    };
  }, [filteredTrades]);

  const totalPages = Math.ceil(filteredTrades.length / ROWS_PER_PAGE);
  const paginatedTrades = useMemo(() => {
    const start = (currentPage - 1) * ROWS_PER_PAGE;
    return filteredTrades.slice(start, start + ROWS_PER_PAGE);
  }, [filteredTrades, currentPage]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setPartyFilter('all');
    setTypeFilter('all');
    setStateFilter('all');
    setStartDate('');
    setEndDate('');
    setCurrentPage(1);
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-3 h-3 opacity-50" />;
    return sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />;
  };

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Real-time tracking of stock trades by members of Congress. Data sourced from official House and Senate
          financial disclosures.
        </p>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          <div className="bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-4">
            <div className="text-[#00ff41] font-mono text-2xl font-bold">{stats.total}</div>
            <div className="text-[#666] text-xs font-mono uppercase">Total Trades</div>
          </div>
          <div className="bg-[#0a0a0a] border border-blue-500/30 rounded-lg p-4">
            <div className="text-blue-400 font-mono text-2xl font-bold">{stats.demTrades}</div>
            <div className="text-[#666] text-xs font-mono uppercase">Democrat [D]</div>
          </div>
          <div className="bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4">
            <div className="text-red-400 font-mono text-2xl font-bold">{stats.repTrades}</div>
            <div className="text-[#666] text-xs font-mono uppercase">Republican [R]</div>
          </div>
          <div className="bg-[#0a0a0a] border border-green-500/30 rounded-lg p-4">
            <div className="text-green-400 font-mono text-2xl font-bold">{stats.purchases}</div>
            <div className="text-[#666] text-xs font-mono uppercase">Purchases</div>
          </div>
          <div className="bg-[#0a0a0a] border border-orange-500/30 rounded-lg p-4">
            <div className="text-orange-400 font-mono text-2xl font-bold">{stats.sales}</div>
            <div className="text-[#666] text-xs font-mono uppercase">Sales</div>
          </div>
          <div className="bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-4 col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00ff41]" />
              <div className="text-[#e5e5e5] font-mono text-sm truncate">{stats.mostActive}</div>
            </div>
            <div className="text-[#666] text-xs font-mono uppercase">Most Active</div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-4 mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-black border border-[#00ff41]/30 rounded px-3" style={{ minHeight: '44px' }}>
              <Search className="w-4 h-4 text-[#00ff41] shrink-0" />
              <Input
                type="text"
                placeholder="Search member, ticker, company..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border-0 bg-transparent text-[#e5e5e5] placeholder:text-[#666] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-stretch sm:items-center">
              <select
                value={partyFilter}
                onChange={(e) => { setPartyFilter(e.target.value); setCurrentPage(1); }}
                className="bg-black border border-[#00ff41]/30 rounded px-3 text-[#e5e5e5] text-sm font-mono focus:outline-none focus:border-[#00ff41] w-full sm:w-auto"
                style={{ minHeight: '44px' }}
              >
                <option value="all">All Parties</option>
                <option value="D">Democrat [D]</option>
                <option value="R">Republican [R]</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
                className="bg-black border border-[#00ff41]/30 rounded px-3 text-[#e5e5e5] text-sm font-mono focus:outline-none focus:border-[#00ff41] w-full sm:w-auto"
                style={{ minHeight: '44px' }}
              >
                <option value="all">All Types</option>
                <option value="Purchase">Purchase</option>
                <option value="Sale">Sale</option>
              </select>

              <select
                value={stateFilter}
                onChange={(e) => { setStateFilter(e.target.value); setCurrentPage(1); }}
                className="bg-black border border-[#00ff41]/30 rounded px-3 text-[#e5e5e5] text-sm font-mono focus:outline-none focus:border-[#00ff41] w-full sm:w-auto"
                style={{ minHeight: '44px' }}
              >
                <option value="all">All States</option>
                {uniqueStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Calendar className="w-4 h-4 text-[#00ff41] shrink-0" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => { setStartDate(e.target.value); setCurrentPage(1); }}
                  className="bg-black border border-[#00ff41]/30 rounded px-2 text-[#e5e5e5] text-sm font-mono focus:outline-none focus:border-[#00ff41] flex-1 sm:flex-none"
                  style={{ minHeight: '44px' }}
                />
                <span className="text-[#666]">to</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => { setEndDate(e.target.value); setCurrentPage(1); }}
                  className="bg-black border border-[#00ff41]/30 rounded px-2 text-[#e5e5e5] text-sm font-mono focus:outline-none focus:border-[#00ff41] flex-1 sm:flex-none"
                  style={{ minHeight: '44px' }}
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:text-[#00ff41] font-mono w-full sm:w-auto"
                style={{ minHeight: '44px' }}
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden space-y-3 mb-4">
          {paginatedTrades.map((trade, index) => {
            const rowNumber = (currentPage - 1) * ROWS_PER_PAGE + index + 1;
            const cardKey = `${trade.Date}-${trade.Member}-${trade.Ticker}-${index}`;
            const isExpanded = expandedCards.has(cardKey);
            return (
              <div key={cardKey} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[#00ff41] font-mono text-xs">#{rowNumber}</span>
                      <div className="text-[#e5e5e5] font-semibold text-base leading-tight">{trade.Member}</div>
                      <div className="text-[#666] font-mono text-xs mt-0.5">{trade.Date}</div>
                    </div>
                    <Badge className={`font-mono text-xs shrink-0 ${trade.Type === 'Purchase' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}`}>
                      {trade.Type === 'Purchase' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {trade.Type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#00ff41] font-mono font-bold text-sm">{trade.Ticker}</span>
                    <span className="text-[#e5e5e5] text-sm truncate max-w-[160px]">{trade.Company}</span>
                  </div>
                  <div className="text-[#e5e5e5] text-sm font-mono mt-1">{trade.Amount}</div>
                </div>
                <button
                  onClick={() => toggleCard(cardKey)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#00ff41] border-t border-[#333] hover:bg-[#00ff41]/5 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2 border-t border-[#222]">
                    <div className="grid grid-cols-2 gap-2 pt-3">
                      <div>
                        <div className="text-[#666] text-xs font-mono">PARTY</div>
                        <Badge className={`font-mono text-xs mt-1 ${trade.Party === 'D' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}`}>[{trade.Party}]</Badge>
                      </div>
                      <div>
                        <div className="text-[#666] text-xs font-mono">STATE</div>
                        <div className="text-[#a0a0a0] text-sm font-mono mt-1">{trade.State}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">COMPANY</div>
                      <div className="text-[#e5e5e5] text-sm mt-1">{trade.Company}</div>
                    </div>
                    <div>
                      <a href={trade.Source} target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:text-[#00ff41]/80 flex items-center gap-1 text-xs">
                        View Source <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {paginatedTrades.length === 0 && (
            <div className="p-8 text-center text-[#666] font-mono text-sm">No trades found matching your filters.</div>
          )}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg overflow-hidden">
          <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
            <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#00ff41]/10 lg:hidden">Swipe for more columns →</div>
            <table style={{ tableLayout: 'fixed', width: `${ctWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
              <colgroup>
                {ctWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
              </colgroup>
              <thead>
                <tr className="bg-black border-b border-[#00ff41]/30">
                  <th style={{ width: `${ctWidths[0]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none' }}>
                    #
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); ctMouseDown(0, e.clientX); }} onDoubleClick={() => ctReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[1]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Date')}>
                    <div className="flex items-center gap-1">Date <SortIcon field="Date" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(1, e.clientX); }} onDoubleClick={() => ctReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[2]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Member')}>
                    <div className="flex items-center gap-1">Member <SortIcon field="Member" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(2, e.clientX); }} onDoubleClick={() => ctReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[3]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Party')}>
                    <div className="flex items-center gap-1">Party <SortIcon field="Party" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(3, e.clientX); }} onDoubleClick={() => ctReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[4]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('State')}>
                    <div className="flex items-center gap-1">State <SortIcon field="State" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(4, e.clientX); }} onDoubleClick={() => ctReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[5]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Ticker')}>
                    <div className="flex items-center gap-1">Ticker <SortIcon field="Ticker" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(5, e.clientX); }} onDoubleClick={() => ctReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[6]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Company')}>
                    <div className="flex items-center gap-1">Company <SortIcon field="Company" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(6, e.clientX); }} onDoubleClick={() => ctReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[7]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Type')}>
                    <div className="flex items-center gap-1">Type <SortIcon field="Type" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(7, e.clientX); }} onDoubleClick={() => ctReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[8]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('Amount')}>
                    <div className="flex items-center gap-1">Amount <SortIcon field="Amount" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); ctMouseDown(8, e.clientX); }} onDoubleClick={() => ctReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${ctWidths[9]}px`, position: 'relative', padding: '0.75rem', textAlign: 'left', color: '#00ff41', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', userSelect: 'none' }}>
                    Source
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); ctMouseDown(9, e.clientX); }} onDoubleClick={() => ctReset(9)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00ff4166'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedTrades.map((trade, index) => {
                  const rowNumber = (currentPage - 1) * ROWS_PER_PAGE + index + 1;
                  return (
                    <tr
                      key={`${trade.Date}-${trade.Member}-${trade.Ticker}-${index}`}
                      className="border-b border-[#00ff41]/10 hover:border-l-4 hover:border-l-[#00ff41] transition-all"
                      style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                    >
                      <td className="p-3 text-[#666] text-xs font-mono">{rowNumber}</td>
                      <td className="p-3 text-[#e5e5e5] text-sm font-mono whitespace-nowrap">{trade.Date}</td>
                      <td className="p-3 text-[#e5e5e5] text-sm font-semibold whitespace-nowrap">{trade.Member}</td>
                      <td className="p-3">
                        <Badge
                          className={`font-mono text-xs ${
                            trade.Party === 'D'
                              ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                              : 'bg-red-500/20 text-red-400 border-red-500/50'
                          }`}
                        >
                          [{trade.Party}]
                        </Badge>
                      </td>
                      <td className="p-3 text-[#a0a0a0] text-sm font-mono">{trade.State}</td>
                      <td className="p-3 text-[#00ff41] text-sm font-mono font-bold">{trade.Ticker}</td>
                      <td className="p-3 text-[#e5e5e5] text-sm max-w-[300px] truncate" title={trade.Company}>
                        {trade.Company}
                      </td>
                      <td className="p-3">
                        <Badge
                          className={`font-mono text-xs flex items-center gap-1 w-fit ${
                            trade.Type === 'Purchase'
                              ? 'bg-green-500/20 text-green-400 border-green-500/50'
                              : 'bg-red-500/20 text-red-400 border-red-500/50'
                          }`}
                        >
                          {trade.Type === 'Purchase' ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {trade.Type}
                        </Badge>
                      </td>
                      <td className="p-3 text-[#e5e5e5] text-sm whitespace-nowrap">{trade.Amount}</td>
                      <td className="p-3">
                        <a
                          href={trade.Source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ff41] hover:text-[#00ff41]/80 flex items-center gap-1 text-sm"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-3">
            <div className="text-[#666] text-sm font-mono">
              Showing {(currentPage - 1) * ROWS_PER_PAGE + 1} -{' '}
              {Math.min(currentPage * ROWS_PER_PAGE, filteredTrades.length)} of {filteredTrades.length} trades
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:text-[#00ff41] disabled:opacity-30 font-mono"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={
                        currentPage === pageNum
                          ? 'bg-[#00ff41] text-black hover:bg-[#00ff41]/80 font-mono'
                          : 'border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:text-[#00ff41] font-mono'
                      }
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:text-[#00ff41] disabled:opacity-30 font-mono"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="mt-6 bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-400/80 text-sm">
            <strong className="font-mono">NOTE:</strong> Trades are reported with a 45-day delay per the STOCK Act.
            Amount ranges are as disclosed; exact figures are not required to be reported.
          </p>
        </div>
    </div>
  );
}

export default function CongressTrades() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Congressional Stock Trades Tracker | 990 Records"
        description="Track 990 congressional stock trades with real-time filtering and sorting. Data sourced from official House and Senate financial disclosures."
        url={`${window.location.origin}/congress-trades`}
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 py-8 pt-24 pb-24 max-w-[1800px] overflow-x-hidden">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-8 h-8 text-[#00ff41]" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] font-mono">&gt; CONGRESSIONAL_TRADES.db</h1>
          </div>
        </div>
        <CongressTradesContent />
      </main>
      <Footer />
    </div>
  );
}
