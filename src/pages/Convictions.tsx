import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, ExternalLink, ArrowUpDown, CircleAlert as AlertCircle, Scale, ChevronDown } from 'lucide-react';
import entertainmentData from '../data/entertainment_convictions.json';
import corporateData from '../data/corporate_convictions.json';
import governmentData from '../data/government_convictions.json';
import lawEnforcementData from '../data/law_enforcement_convictions.json';
import militaryIntelligenceData from '../data/military_intelligence_convictions.json';
import medicalPharmaData from '../data/medical_pharma_convictions.json';
import religiousClergyData from '../data/religious_clergy_convictions.json';
import entertainmentChargedNotConvicted from '../data/entertainment_charged_not_convicted.json';
import corporateChargedNotConvicted from '../data/corporate_charged_not_convicted.json';
import governmentChargedNotConvicted from '../data/government_charged_not_convicted.json';

interface Conviction {
  name: string;
  role_title: string;
  charges?: string;
  charges_filed?: string;
  jurisdiction: string;
  case_number: string;
  outcome?: string;
  conviction_date?: string;
  resolution?: string;
  resolution_date?: string;
  resolution_details?: string;
  source1_description: string;
  source1_url: string;
  source2_description: string;
  source2_url: string;
  notes?: string;
  status?: string;
  category?: string;
  company?: string;
  government_body?: string;
  disclaimer?: string;
  isChargedNotConvicted?: boolean;
}

const getStatusBadge = (status: string, isChargedNotConvicted?: boolean) => {
  if (isChargedNotConvicted) {
    if (status.includes('ACQUITTED')) {
      return <Badge style={{ background: '#33ff6633', color: '#33ff66', border: '1px solid #33ff6655' }} className="font-mono text-xs whitespace-nowrap">Acquitted</Badge>;
    }
    if (status.includes('DISMISSED') || status.includes('DROPPED')) {
      return <Badge style={{ background: '#ffcc0033', color: '#ffcc00', border: '1px solid #ffcc0055' }} className="font-mono text-xs whitespace-nowrap">Dismissed</Badge>;
    }
    return <Badge style={{ background: '#ffcc0033', color: '#ffcc00', border: '1px solid #ffcc0055' }} className="font-mono text-xs whitespace-nowrap">Charged / Not Convicted</Badge>;
  }

  if (status.includes('CONVICTED') && !status.includes('OVERTURNED') && !status.includes('PARDONED') && !status.includes('COMMUTED')) {
    return <Badge style={{ background: '#ff444433', color: '#ff4444', border: '1px solid #ff444455' }} className="font-mono text-xs whitespace-nowrap">Convicted</Badge>;
  }
  if (status.includes('OVERTURNED')) {
    return <Badge style={{ background: '#ffcc0033', color: '#ffcc00', border: '1px solid #ffcc0055' }} className="font-mono text-xs whitespace-nowrap">Overturned</Badge>;
  }
  if (status.includes('PARDONED')) {
    return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 font-mono text-xs whitespace-nowrap">Pardoned</Badge>;
  }
  if (status.includes('COMMUTED')) {
    return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 font-mono text-xs whitespace-nowrap">Commuted</Badge>;
  }
  if (status.includes('NOT CONVICTED') || status.includes('ACQUITTED')) {
    return <Badge style={{ background: '#33ff6633', color: '#33ff66', border: '1px solid #33ff6655' }} className="font-mono text-xs whitespace-nowrap">Acquitted</Badge>;
  }
  return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30 font-mono text-xs whitespace-nowrap">{status}</Badge>;
};

type SortKey = 'name' | 'role_title' | 'charges' | 'jurisdiction' | 'case_number' | 'conviction_date' | 'status';
type SortDirection = 'asc' | 'desc';

export function Convictions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(40);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(40);
  }, [searchTerm, sortKey, sortDirection, activeTab]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 40);
  }, []);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) handleLoadMore();
    }, { rootMargin: '200px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleLoadMore, activeTab]);

  const toggleCard = (key: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const extractEarliestDate = (dateStr: string | undefined): number => {
    if (!dateStr || dateStr === 'N/A' || dateStr.includes('NOT CONVICTED') || dateStr.trim() === '') {
      return Infinity;
    }

    const months: Record<string, number> = {
      'jan': 0, 'january': 0,
      'feb': 1, 'february': 1,
      'mar': 2, 'march': 2,
      'apr': 3, 'april': 3,
      'may': 4,
      'jun': 5, 'june': 5,
      'jul': 6, 'july': 6,
      'aug': 7, 'august': 7,
      'sep': 8, 'sept': 8, 'september': 8,
      'oct': 9, 'october': 9,
      'nov': 10, 'november': 10,
      'dec': 11, 'december': 11
    };

    const timestamps: number[] = [];

    const monthDayYear = /\b(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)\.?\s+(\d{1,2}),?\s+(\d{4})\b/gi;
    let match;
    while ((match = monthDayYear.exec(dateStr)) !== null) {
      const m = months[match[1].toLowerCase().replace('.', '')];
      const d = parseInt(match[2]);
      const y = parseInt(match[3]);
      if (m !== undefined && y >= 1900 && y <= 2100) {
        timestamps.push(new Date(y, m, d).getTime());
      }
    }

    const monthYear = /\b(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)\.?\s+(\d{4})\b/gi;
    while ((match = monthYear.exec(dateStr)) !== null) {
      const m = months[match[1].toLowerCase().replace('.', '')];
      const y = parseInt(match[2]);
      if (m !== undefined && y >= 1900 && y <= 2100) {
        const yearStart = new Date(y, m, 1).getTime();
        const alreadyHasPrecise = timestamps.some(t => {
          const tDate = new Date(t);
          return tDate.getFullYear() === y && tDate.getMonth() === m;
        });
        if (!alreadyHasPrecise) {
          timestamps.push(yearStart);
        }
      }
    }

    const iso = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
    while ((match = iso.exec(dateStr)) !== null) {
      const y = parseInt(match[1]);
      if (y >= 1900 && y <= 2100) {
        timestamps.push(new Date(y, parseInt(match[2]) - 1, parseInt(match[3])).getTime());
      }
    }

    const str = dateStr.toLowerCase();
    const standaloneYear = /\b(19\d{2}|20\d{2})\b/g;
    while ((match = standaloneYear.exec(str)) !== null) {
      const y = parseInt(match[1]);
      if (y >= 1900 && y <= 2100) {
        const yearStart = new Date(y, 0, 1).getTime();
        const yearEnd = new Date(y, 11, 31).getTime();
        const alreadyHasPrecise = timestamps.some(t => t >= yearStart && t <= yearEnd);
        if (!alreadyHasPrecise) {
          timestamps.push(yearStart);
        }
      }
    }

    if (timestamps.length === 0) {
      return Infinity;
    }

    return Math.min(...timestamps);
  };

  const sortData = (data: Conviction[]) => {
    return [...data].sort((a, b) => {
      if (sortKey === 'conviction_date') {
        const aValue = extractEarliestDate(a.conviction_date);
        const bValue = extractEarliestDate(b.conviction_date);

        if (aValue === Infinity && bValue === Infinity) return 0;
        if (aValue === Infinity) return 1;
        if (bValue === Infinity) return -1;

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      }

      const aValue: string = (a[sortKey] || '').toString().toLowerCase();
      const bValue: string = (b[sortKey] || '').toString().toLowerCase();

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const filterData = (data: Conviction[]) => {
    if (!searchTerm) return data;
    const term = searchTerm.toLowerCase();
    return data.filter(item => {
      const charges = item.charges || item.charges_filed || '';
      const status = item.status || item.resolution || '';
      return (
        item.name.toLowerCase().includes(term) ||
        item.role_title.toLowerCase().includes(term) ||
        charges.toLowerCase().includes(term) ||
        status.toLowerCase().includes(term)
      );
    });
  };

  const combineData = (convictions: any[], chargedNotConvicted: any[]) => {
    const convictionsWithFlag = convictions.map(c => ({ ...c, isChargedNotConvicted: false }));
    const chargedWithFlag = chargedNotConvicted.map(c => ({
      ...c,
      isChargedNotConvicted: true,
      charges: c.charges_filed,
      conviction_date: c.resolution_date,
      status: c.resolution,
      outcome: c.resolution_details
    }));
    return [...convictionsWithFlag, ...chargedWithFlag];
  };

  const allData = useMemo(() => {
    return combineData(
      [...entertainmentData, ...corporateData, ...governmentData, ...lawEnforcementData, ...militaryIntelligenceData, ...medicalPharmaData, ...religiousClergyData],
      [...entertainmentChargedNotConvicted, ...corporateChargedNotConvicted, ...governmentChargedNotConvicted]
    );
  }, []);

  const filteredAll = useMemo(() => sortData(filterData(allData)), [searchTerm, sortKey, sortDirection, allData]);
  const filteredEntertainment = useMemo(() => sortData(filterData(combineData(entertainmentData, entertainmentChargedNotConvicted))), [searchTerm, sortKey, sortDirection]);
  const filteredCorporate = useMemo(() => sortData(filterData(combineData(corporateData, corporateChargedNotConvicted))), [searchTerm, sortKey, sortDirection]);
  const filteredGovernment = useMemo(() => sortData(filterData(combineData(governmentData, governmentChargedNotConvicted))), [searchTerm, sortKey, sortDirection]);
  const filteredLawEnforcement = useMemo(() => sortData(filterData(combineData(lawEnforcementData, []))), [searchTerm, sortKey, sortDirection]);
  const filteredMilitaryIntelligence = useMemo(() => sortData(filterData(combineData(militaryIntelligenceData, []))), [searchTerm, sortKey, sortDirection]);
  const filteredMedicalPharma = useMemo(() => sortData(filterData(combineData(medicalPharmaData, []))), [searchTerm, sortKey, sortDirection]);
  const filteredReligiousClergy = useMemo(() => sortData(filterData(combineData(religiousClergyData, []))), [searchTerm, sortKey, sortDirection]);

  const renderTable = (data: Conviction[], tabKey: string) => {
    const visibleData = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;
    return (
    <>
      {/* Mobile card layout */}
      <div className="md:hidden divide-y divide-green-500/10">
        {visibleData.map((conviction, index) => {
          const cardKey = `${tabKey}-${index}-${conviction.name}`;
          const isExpanded = expandedCards.has(cardKey);
          const status = conviction.status || conviction.resolution || '';
          const charges = conviction.charges || conviction.charges_filed || '';
          const date = conviction.conviction_date || conviction.resolution_date || '';
          return (
            <div key={cardKey} className={`${conviction.isChargedNotConvicted ? 'bg-yellow-500/5' : 'bg-black'}`}>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {conviction.isChargedNotConvicted && (
                        <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" aria-label="Charged but Not Convicted" />
                      )}
                      <span className="text-green-300 font-semibold text-base leading-tight">{conviction.name}</span>
                    </div>
                    {date && <div className="text-green-500/50 font-mono text-xs mt-1">{date}</div>}
                  </div>
                  <div className="shrink-0">
                    {getStatusBadge(status, conviction.isChargedNotConvicted)}
                  </div>
                </div>
                {charges && (
                  <div className="text-green-300/70 text-sm leading-relaxed">{charges}</div>
                )}
              </div>
              <button
                onClick={() => toggleCard(cardKey)}
                className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-green-400 border-t border-green-500/20 hover:bg-green-500/5 transition-colors"
                style={{ minHeight: '44px' }}
              >
                <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-3 space-y-3 border-t border-green-500/10 bg-green-500/5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-green-500/50 text-xs font-mono uppercase mb-1">Role</div>
                      <div className="text-green-300/80 text-sm">{conviction.role_title}</div>
                    </div>
                    <div>
                      <div className="text-green-500/50 text-xs font-mono uppercase mb-1">Jurisdiction</div>
                      <div className="text-green-300/80 text-sm">{conviction.jurisdiction}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-green-500/50 text-xs font-mono uppercase mb-1">Case Number</div>
                    <div className="text-green-300/80 text-sm font-mono">{conviction.case_number}</div>
                  </div>
                  {(conviction.outcome || conviction.resolution_details) && (
                    <div>
                      <div className="text-green-500/50 text-xs font-mono uppercase mb-1">Sentence / Outcome</div>
                      <div className="text-green-300/80 text-sm">{conviction.outcome || conviction.resolution_details}</div>
                    </div>
                  )}
                  <div className="space-y-2 pt-1">
                    <div className="text-green-500/50 text-xs font-mono uppercase mb-1">Sources</div>
                    {conviction.source1_url && (
                      <a
                        href={conviction.source1_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors rounded border border-green-500/20 px-3 bg-black"
                        style={{ minHeight: '44px' }}
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{conviction.source1_description}</span>
                      </a>
                    )}
                    {conviction.source2_url && (
                      <a
                        href={conviction.source2_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors rounded border border-green-500/20 px-3 bg-black"
                        style={{ minHeight: '44px' }}
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{conviction.source2_description}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {data.length === 0 && (
          <div className="text-center py-12 text-green-500/50 font-mono">No results found</div>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-green-500/30">
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[15%]" onClick={() => handleSort('name')}>
                <div className="flex items-center gap-2">Name <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[15%]" onClick={() => handleSort('role_title')}>
                <div className="flex items-center gap-2">Role <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[20%]" onClick={() => handleSort('charges')}>
                <div className="flex items-center gap-2">Charges <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[12%]" onClick={() => handleSort('jurisdiction')}>
                <div className="flex items-center gap-2">Jurisdiction <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[10%]" onClick={() => handleSort('case_number')}>
                <div className="flex items-center gap-2">Case # <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[8%]" onClick={() => handleSort('conviction_date')}>
                <div className="flex items-center gap-2">Date <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm cursor-pointer hover:text-green-300 transition-colors w-[8%]" onClick={() => handleSort('status')}>
                <div className="flex items-center gap-2">Status <ArrowUpDown className="w-3 h-3 flex-shrink-0" /></div>
              </th>
              <th className="text-left p-4 text-green-400 font-mono text-sm w-[12%]">Sources</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((conviction, index) => (
              <tr
                key={index}
                className={`border-b ${conviction.isChargedNotConvicted ? 'border-yellow-500/10 hover:bg-yellow-500/5' : 'border-green-500/10 hover:bg-green-500/5'} transition-colors`}
              >
                <td className="p-4 text-green-300 font-medium overflow-hidden" title={conviction.name}>
                  <div className="flex items-center gap-2">
                    {conviction.isChargedNotConvicted && (
                      <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" aria-label="Charged but Not Convicted" />
                    )}
                    <span className="truncate">{conviction.name}</span>
                  </div>
                </td>
                <td className="p-4 text-green-300/80 text-sm overflow-hidden">
                  <span className="truncate block" title={conviction.role_title}>{conviction.role_title}</span>
                </td>
                <td className="p-4 text-green-300/80 text-sm overflow-hidden" title={conviction.charges || conviction.charges_filed}>
                  <div className="line-clamp-2">{conviction.charges || conviction.charges_filed}</div>
                </td>
                <td className="p-4 text-green-300/80 text-sm overflow-hidden">
                  <span className="truncate block" title={conviction.jurisdiction}>{conviction.jurisdiction}</span>
                </td>
                <td className="p-4 text-green-300/80 text-sm font-mono overflow-hidden">
                  <span className="truncate block" title={conviction.case_number}>{conviction.case_number}</span>
                </td>
                <td className="p-4 text-green-300/80 text-sm overflow-hidden">
                  <span className="truncate block" title={conviction.conviction_date || conviction.resolution_date}>{conviction.conviction_date || conviction.resolution_date}</span>
                </td>
                <td className="p-4 overflow-hidden">{getStatusBadge(conviction.status || conviction.resolution || '', conviction.isChargedNotConvicted)}</td>
                <td className="p-4 overflow-hidden">
                  <div className="flex flex-col gap-1">
                    <a
                      href={conviction.source1_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-xs flex items-center gap-1.5 transition-colors py-1 min-h-[24px]"
                      title={conviction.source1_description}
                    >
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{conviction.source1_description}</span>
                    </a>
                    <a
                      href={conviction.source2_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-xs flex items-center gap-1.5 transition-colors py-1 min-h-[24px]"
                      title={conviction.source2_description}
                    >
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{conviction.source2_description}</span>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="text-center py-12 text-green-500/50 font-mono">No results found</div>
        )}
      </div>
      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center py-6">
          <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-500">
      <SEOHead
        title="Conviction Records"
        description="Searchable database of criminal convictions and charges across entertainment, corporate, government, law enforcement, military, medical, and religious sectors."
        url="https://redpillbiblio.wtf/convictions"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'Conviction Records Database',
          description: 'Searchable database of criminal convictions and charges across entertainment, corporate, government, law enforcement, military, medical, and religious sectors.',
          url: 'https://redpillbiblio.wtf/convictions',
          creator: { '@type': 'Organization', name: 'The Red Pill Bibliography' },
        }}
      />
      <Navigation />

      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 py-8 pt-20 pb-24 max-w-[1600px]">
        <PageHeader
          title="&gt; CONVICTION_RECORDS.db"
          description="Searchable database of documented criminal convictions and charges across entertainment, corporate, government, law enforcement, military & intelligence, medical & pharma, and religious sectors"
          icon={<Scale className="w-8 h-8" />}
          alert={{
            icon: <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />,
            message: (
              <>
                This database includes both convicted individuals and those who were charged but not convicted (acquitted, dismissed, or charges dropped).
                <span className="text-yellow-300 font-semibold"> CHARGED NOT CONVICTED</span> entries are clearly marked.
              </>
            ),
          }}
        />

        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500/50 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search by name, role, charges, or status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black border-green-500/30 text-green-400 placeholder:text-green-500/30 focus:border-green-500 font-mono"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-black border border-green-500/30 mb-6 p-2 h-auto">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Show All ({filteredAll.length})
            </TabsTrigger>
            <TabsTrigger
              value="entertainment"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Entertainment ({filteredEntertainment.length})
            </TabsTrigger>
            <TabsTrigger
              value="corporate"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Corporate ({filteredCorporate.length})
            </TabsTrigger>
            <TabsTrigger
              value="government"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Government ({filteredGovernment.length})
            </TabsTrigger>
            <TabsTrigger
              value="lawenforcement"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Law Enforcement ({filteredLawEnforcement.length})
            </TabsTrigger>
            <TabsTrigger
              value="military"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Military & Intelligence ({filteredMilitaryIntelligence.length})
            </TabsTrigger>
            <TabsTrigger
              value="medical"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Medical & Pharma ({filteredMedicalPharma.length})
            </TabsTrigger>
            <TabsTrigger
              value="religious"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-green-500/50 font-mono text-sm md:text-base py-3 px-4 whitespace-normal min-h-[60px] flex items-center justify-center"
            >
              Religious & Clergy ({filteredReligiousClergy.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredAll, 'all')}
            </div>
          </TabsContent>

          <TabsContent value="entertainment" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredEntertainment, 'entertainment')}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredCorporate, 'corporate')}
            </div>
          </TabsContent>

          <TabsContent value="government" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredGovernment, 'government')}
            </div>
          </TabsContent>

          <TabsContent value="lawenforcement" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredLawEnforcement, 'lawenforcement')}
            </div>
          </TabsContent>

          <TabsContent value="military" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredMilitaryIntelligence, 'military')}
            </div>
          </TabsContent>

          <TabsContent value="medical" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredMedicalPharma, 'medical')}
            </div>
          </TabsContent>

          <TabsContent value="religious" className="mt-0">
            <div className="bg-black border border-green-500/30 rounded-lg overflow-hidden">
              {renderTable(filteredReligiousClergy, 'religious')}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-green-500/5 border border-green-500/30 rounded-lg">
          <h3 className="text-green-400 font-mono text-lg mb-3">Status Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Convicted</Badge>
              <span className="text-green-500/70">Active conviction with sentence</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Overturned</Badge>
              <span className="text-green-500/70">Conviction vacated on appeal</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Pardoned</Badge>
              <span className="text-green-500/70">Presidential pardon granted</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Commuted</Badge>
              <span className="text-green-500/70">Sentence reduced or commuted</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">CHARGED NOT CONVICTED</Badge>
              <span className="text-green-500/70">Charged but acquitted or dismissed</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
