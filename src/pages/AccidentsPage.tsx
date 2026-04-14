import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, TriangleAlert as AlertTriangle, ArrowUpDown, ArrowLeft, ChevronDown } from 'lucide-react';
import { INCIDENTS_DATA, type Incident } from '@/data/incidentsData';

export function AccidentsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Incident>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showPatternsOnly, setShowPatternsOnly] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const AC_DEFAULT_WIDTHS = [80, 110, 120, 150, 160, 220, 100, 220, 100];
  const { columnWidths: acWidths, handleMouseDown: acMouseDown, resetColumnWidth: acReset } = useResizableColumns(AC_DEFAULT_WIDTHS);

  const toggleCard = (i: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const incidents: Incident[] = INCIDENTS_DATA;


  const filteredIncidents = useMemo(() => {
    let filtered = incidents.filter((incident) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        incident.location.toLowerCase().includes(searchLower) ||
        incident.company.toLowerCase().includes(searchLower) ||
        incident.description.toLowerCase().includes(searchLower) ||
        incident.type.toLowerCase().includes(searchLower);

      const matchesPattern = !showPatternsOnly || incident.pattern;

      return matchesSearch && matchesPattern;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      const direction = sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? direction : -direction;
    });

    return filtered;
  }, [incidents, searchTerm, sortField, sortDirection, showPatternsOnly]);

  const handleSort = (field: keyof Incident) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const patternCount = incidents.filter((i) => i.pattern).length;

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Tracking workplace accidents, transportation crashes, and industrial incidents revealing systemic safety failures and regulatory gaps.
        </p>
      </div>

      <div className="mb-6 space-y-3">
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#ff8800]/30 rounded-lg p-3" style={{ minHeight: '52px' }}>
            <Search className="w-5 h-5 text-[#ff8800] shrink-0" />
            <Input
              type="text"
              placeholder="Search by location, company, type, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-black border-[#ff8800]/30 text-[#e5e5e5] placeholder:text-[#666] focus:border-[#ff8800] h-11"
            />
          </div>

          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4" style={{ minHeight: '44px' }}>
            <input
              type="checkbox"
              id="patterns-only"
              checked={showPatternsOnly}
              onChange={(e) => setShowPatternsOnly(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="patterns-only" className="text-[#e5e5e5] text-sm flex items-center gap-2 cursor-pointer">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Systemic patterns only ({patternCount} flagged)
            </label>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden space-y-3 mb-4">
          {filteredIncidents.map((incident, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <div key={index} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex-1 min-w-0">
                      <div className="text-[#e5e5e5] font-semibold text-base leading-tight">{incident.company}</div>
                      <div className="text-[#666] font-mono text-xs mt-0.5">{incident.date}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {incident.pattern && <AlertTriangle className="w-4 h-4 text-red-400" />}
                      <Badge className="bg-[#ff8800]/20 text-[#ff8800] border-[#ff8800]/50 font-mono text-xs">{incident.type}</Badge>
                    </div>
                  </div>
                  <div className="text-[#a0a0a0] text-sm mt-1 leading-snug">{incident.description}</div>
                  <div className="text-[#ff8800] font-mono text-sm font-semibold mt-1">{incident.casualties}</div>
                </div>
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#ff8800] border-t border-[#333] hover:bg-[#ff8800]/5 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 space-y-2 border-t border-[#222]">
                    <div>
                      <div className="text-[#666] text-xs font-mono">LOCATION</div>
                      <div className="text-[#e5e5e5] text-sm mt-0.5">{incident.location}</div>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">FINDINGS</div>
                      <div className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">{incident.findings}</div>
                    </div>
                    {incident.patternNote && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                        <div className="text-red-400 text-xs leading-relaxed">{incident.patternNote}</div>
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      {incident.sources.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="text-[#ff8800] hover:text-[#ff8800]/80 flex items-center gap-1 text-xs">
                          Source {i + 1} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {filteredIncidents.length === 0 && (
            <div className="p-8 text-center text-[#666] font-mono text-sm">No incidents match the current filter.</div>
          )}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block bg-[#0a0a0a] border border-[#ff8800]/30 rounded-lg overflow-hidden">
          <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
            <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#ff8800]/10 lg:hidden">Swipe for more columns →</div>
            <table style={{ tableLayout: 'fixed', width: `${acWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
              <colgroup>
                {acWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
              </colgroup>
              <thead>
                <tr className="bg-black border-b border-[#ff8800]/30">
                  <th style={{ width: `${acWidths[0]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Pattern
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(0, e.clientX); }} onDoubleClick={() => acReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[1]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-2">Date <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); acMouseDown(1, e.clientX); }} onDoubleClick={() => acReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[2]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Type
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(2, e.clientX); }} onDoubleClick={() => acReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[3]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Location
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(3, e.clientX); }} onDoubleClick={() => acReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[4]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('company')}>
                    <div className="flex items-center gap-2">Company <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); acMouseDown(4, e.clientX); }} onDoubleClick={() => acReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[5]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Description
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(5, e.clientX); }} onDoubleClick={() => acReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[6]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Casualties
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(6, e.clientX); }} onDoubleClick={() => acReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[7]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Findings
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(7, e.clientX); }} onDoubleClick={() => acReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[8]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Sources
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(8, e.clientX); }} onDoubleClick={() => acReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredIncidents.map((incident, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#ff8800]/10 hover:border-l-4 hover:border-l-[#ff8800] transition-all"
                    style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                  >
                    <td className="p-4">
                      {incident.pattern && (
                        <div className="flex flex-col gap-1">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          {incident.patternNote && (
                            <span className="text-xs text-red-400/70">{incident.patternNote}</span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-[#e5e5e5] text-sm font-mono">{incident.date}</td>
                    <td className="p-4">
                      <Badge className="bg-[#ff8800]/20 text-[#ff8800] border-[#ff8800]/50 font-mono text-xs">
                        {incident.type}
                      </Badge>
                    </td>
                    <td className="p-4 text-[#e5e5e5] text-sm">{incident.location}</td>
                    <td className="p-4 text-[#e5e5e5] text-sm font-semibold">{incident.company}</td>
                    <td className="p-4 text-[#a0a0a0] text-sm max-w-sm">{incident.description}</td>
                    <td className="p-4 text-[#e5e5e5] text-sm">{incident.casualties}</td>
                    <td className="p-4 text-[#a0a0a0] text-sm max-w-md">{incident.findings}</td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        {incident.sources.map((source, i) => (
                          <a
                            key={i}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8800] hover:text-[#ff8800]/80 flex items-center gap-1 text-xs"
                          >
                            Source {i + 1} <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-400/80 text-sm leading-relaxed">
            <strong className="font-mono">METHODOLOGY:</strong> Incidents are flagged as patterns when they reflect systemic
            safety failures, regulatory gaps, or documented histories of similar incidents at the same company or industry.
            Data sourced from NTSB, OSHA, CSB, and verified news reports.
          </p>
        </div>
    </div>
  );
}

export default function AccidentsPage() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Accidents & Incidents Tracker"
        description="Tracking patterns in workplace accidents, transportation crashes, and industrial incidents with regulatory and safety implications."
        url={`${window.location.origin}/trackers/accidents`}
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
            <AlertTriangle className="w-8 h-8 text-[#ff8800]" />
            <h1 className="text-3xl font-bold text-[#e5e5e5] font-mono">&gt; ACCIDENTS_INCIDENTS.db</h1>
          </div>
        </div>
        <AccidentsContent />
      </main>
      <Footer />
    </div>
  );
}
