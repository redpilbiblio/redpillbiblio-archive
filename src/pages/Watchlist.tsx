import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, ExternalLink, User, TriangleAlert as AlertTriangle, Crown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEnemiesOfTruth, EnemyEntry } from '@/hooks/useSupabaseQuery';
import { SocialHandlePills } from '@/components/SocialHandlePill';
import { SOCIAL_HANDLES } from '@/data/socialHandles';

type SortKey = 'name' | 'severity';

const SEVERITY_ORDER: Record<string, number> = { CRITICAL: 3, HIGH: 2, MEDIUM: 1, LOW: 0, DECEASED: 0 };

function SeverityBar({ severity }: { severity: string }) {
  const isDeceased = severity === 'DECEASED';
  const isMedium = severity === 'MEDIUM';
  const isLow = severity === 'LOW';
  const level = SEVERITY_ORDER[severity] || 1;
  const widthPercent = isDeceased ? 100 : (level / 3) * 100;

  if (isDeceased) {
    return (
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[#888] tracking-wider whitespace-nowrap">
          DECEASED
        </span>
        <div className="flex-1 h-2 bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#444]">
          <div
            className="h-full rounded-sm"
            style={{ width: '100%', background: 'linear-gradient(90deg, #444 0%, #666 100%)' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span
        className="font-mono text-xs tracking-wider whitespace-nowrap"
        style={{ color: isLow ? '#6B7280' : isMedium ? '#4a9eff' : '#ff4444' }}
      >
        SEVERITY: {severity}
      </span>
      <div className="flex-1 h-2 bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#333]">
        <div
          className="h-full rounded-sm"
          style={{
            width: `${widthPercent}%`,
            background: level >= 3
              ? 'linear-gradient(90deg, #ffbf00 0%, #ff4444 100%)'
              : level >= 2
                ? 'linear-gradient(90deg, #ffbf00 0%, #ff8844 100%)'
                : isLow
                  ? 'linear-gradient(90deg, #6B7280 0%, #4b5563 100%)'
                  : 'linear-gradient(90deg, #3388cc 0%, #4a9eff 100%)',
            boxShadow: isLow
              ? '0 0 8px rgba(107, 114, 128, 0.4)'
              : isMedium
                ? '0 0 8px rgba(74, 158, 255, 0.4)'
                : '0 0 8px rgba(255, 68, 68, 0.4)',
          }}
        />
      </div>
    </div>
  );
}

function StatusTag({ tag }: { tag: string }) {
  const isNoCharges = tag.includes('NO CRIMINAL');
  const isFBI = tag.includes('FBI');
  const isActive = tag.includes('ACTIVE') || tag.includes('ONGOING');
  const isSettled = tag.includes('SETTLED') || tag.includes('SETTLEMENT');
  const isClosed = tag.includes('CLOSED') || tag.includes('CONFIRMED') || tag.includes('CASE CLOSED');
  const isConviction = tag.includes('CONVICTION');
  const isPending = tag.includes('PENDING');

  let dotColor = '#a0a0a0';
  if (isConviction) dotColor = '#ff4444';
  if (isNoCharges) dotColor = '#ff4444';
  if (isFBI) dotColor = '#ff4444';
  if (isActive) dotColor = '#ffbf00';
  if (isPending) dotColor = '#ffbf00';
  if (isSettled) dotColor = '#ff8844';
  if (isClosed) dotColor = '#00ff41';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded-sm font-mono text-xs text-[#a0a0a0]">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: dotColor, boxShadow: `0 0 4px ${dotColor}` }}
      />
      {tag}
    </span>
  );
}

function SourcePill({ source }: { source: { name: string; url: string; date: string } }) {
  const formattedDate = source.date
    ? new Date(source.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : '';

  if (!source.url) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-sm text-[#a0a0a0] font-mono text-xs">
        <span className="truncate max-w-[240px]">{source.name}</span>
        {formattedDate && <span className="text-[#666]">({formattedDate})</span>}
      </span>
    );
  }

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-sm text-[#00d9ff] font-mono text-xs hover:bg-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all group"
    >
      <span className="truncate max-w-[240px]">{source.name}</span>
      {formattedDate && <span className="text-[#00d9ff]/60">({formattedDate})</span>}
      <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-60 group-hover:opacity-100" />
    </a>
  );
}

function SilhouetteIcon({ deceased = false, medium = false, low = false }: { deceased?: boolean; medium?: boolean; low?: boolean }) {
  if (deceased) {
    return (
      <div className="w-16 h-16 flex items-center justify-center rounded-sm border border-[#555]/40 bg-[#333]/10 opacity-60">
        <User className="w-10 h-10 text-[#888]" />
      </div>
    );
  }
  if (low) {
    return (
      <div className="w-16 h-16 flex items-center justify-center rounded-sm border border-[#6B7280]/40 bg-[#6B7280]/5">
        <User className="w-10 h-10 text-[#6B7280]/70" style={{ filter: 'drop-shadow(0 0 6px rgba(107, 114, 128, 0.3))' }} />
      </div>
    );
  }
  if (medium) {
    return (
      <div className="w-16 h-16 flex items-center justify-center rounded-sm border border-[#4a9eff]/40 bg-[#4a9eff]/5">
        <User className="w-10 h-10 text-[#4a9eff]/70" style={{ filter: 'drop-shadow(0 0 6px rgba(74, 158, 255, 0.3))' }} />
      </div>
    );
  }
  return (
    <div className="w-16 h-16 flex items-center justify-center rounded-sm border border-[#ff4444]/40 bg-[#ff4444]/5">
      <User className="w-10 h-10 text-[#ff4444]/70" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 68, 68, 0.3))' }} />
    </div>
  );
}

function DossierCard({ entry }: { entry: EnemyEntry }) {
  const isDeceased = entry.severity === 'DECEASED';
  const isMedium = entry.severity === 'MEDIUM';
  const isLow = entry.severity === 'LOW';
  const accent = isDeceased ? '#555' : isLow ? '#6B7280' : isMedium ? '#4a9eff' : '#ff4444';
  const borderColor = isDeceased ? 'border-[#555]/30' : isLow ? 'border-[#6B7280]/30' : isMedium ? 'border-[#4a9eff]/30' : 'border-[#ff4444]/30';
  const hoverBorderColor = isDeceased ? 'hover:border-[#666]/50' : isLow ? 'hover:border-[#6B7280]/50' : isMedium ? 'hover:border-[#4a9eff]/60' : 'hover:border-[#ff4444]/60';
  const topBorderColor = accent;
  const bgColor = isDeceased ? '#0a0a0a' : '#0f0f0f';
  const accentColor = accent;

  const summaryParts = isDeceased ? entry.summary.split('▸ SURVIVING FAMILY:') : null;

  return (
    <div
      className={`border ${borderColor} rounded-sm ${hoverBorderColor} transition-all duration-300 group`}
      style={{
        backgroundColor: bgColor,
        borderTopColor: topBorderColor,
        borderTopWidth: '2px',
        opacity: isDeceased ? 0.85 : 1,
      }}
    >
      <div className="p-5 sm:p-6" style={{ borderBottom: `1px solid ${accentColor}33` }}>
        <div className="flex items-start gap-4 mb-4">
          <SilhouetteIcon deceased={isDeceased} medium={isMedium} low={isLow} />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="min-w-0">
                <h2 className="font-mono font-bold text-xl sm:text-2xl text-[#e5e5e5] tracking-wide flex flex-wrap items-center gap-1">
                  <span>{entry.name}</span>
                  <SocialHandlePills handles={SOCIAL_HANDLES[entry.name] || []} />
                </h2>
                <p className="font-mono text-sm text-[#a0a0a0] mt-0.5">{entry.title}</p>
                {entry.subtitle && (
                  <p className="font-mono text-xs mt-0.5" style={{ color: isDeceased ? '#888' : isLow ? '#6B728080' : isMedium ? '#4a9eff80' : '#ff444480' }}>
                    {entry.subtitle}
                  </p>
                )}
              </div>
              <div className="w-full sm:w-48 flex-shrink-0">
                <SeverityBar severity={entry.severity} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="font-mono text-xs tracking-widest mb-2 flex items-center gap-2" style={{ color: `${accentColor}99` }}>
            <span className="w-8 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
            SUMMARY
            <span className="flex-1 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
          </div>
          {isDeceased && summaryParts && summaryParts.length > 1 ? (
            <div>
              <p className="font-serif text-sm sm:text-base text-[#d0d0d0] leading-relaxed">
                {summaryParts[0]}
              </p>
              <p className="font-serif text-sm sm:text-base leading-relaxed mt-3" style={{ color: '#aaa' }}>
                ▸ SURVIVING FAMILY:{summaryParts[1]}
              </p>
            </div>
          ) : (
            <p className="font-serif text-sm sm:text-base text-[#d0d0d0] leading-relaxed">
              {entry.summary}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="font-mono text-xs tracking-widest mb-2 flex items-center gap-2" style={{ color: `${accentColor}99` }}>
            <span className="w-8 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
            KEY FACTS
            <span className="flex-1 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
          </div>
          <ul className="space-y-2">
            {entry.key_facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#c0c0c0]">
                <span className="mt-1 flex-shrink-0 font-mono text-xs" style={{ color: accentColor }}>&#9656;</span>
                <span className="font-serif leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-mono text-xs tracking-widest mb-2 flex items-center gap-2" style={{ color: `${accentColor}99` }}>
            <span className="w-8 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
            STATUS
            <span className="flex-1 h-px" style={{ backgroundColor: `${accentColor}4d` }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {entry.status_tags.map((tag, i) => (
              <StatusTag key={i} tag={tag} />
            ))}
          </div>
        </div>

        {entry.name.toUpperCase() === 'BILL CLINTON' && (
          <Link
            to="/families/clinton"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 mt-4 rounded-sm font-mono text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(200, 16, 46, 0.15) 0%, rgba(212, 168, 83, 0.1) 100%)',
              border: '1px solid rgba(200, 16, 46, 0.4)',
              color: '#c8102e',
            }}
          >
            <Crown className="w-4 h-4" />
            VIEW CLINTON DYNASTY DOSSIER
            <span style={{ color: '#d4a853' }}>→</span>
          </Link>
        )}
        {entry.name.toUpperCase() === 'DONALD TRUMP' && (
          <Link
            to="/families/trump"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 mt-4 rounded-sm font-mono text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(192, 57, 43, 0.15) 0%, rgba(212, 168, 67, 0.1) 100%)',
              border: '1px solid rgba(192, 57, 43, 0.4)',
              color: '#c0392b',
            }}
          >
            <Crown className="w-4 h-4" />
            VIEW TRUMP DYNASTY DOSSIER
            <span style={{ color: '#d4a843' }}>→</span>
          </Link>
        )}
        {(entry.name.toUpperCase() === 'GEORGE H.W. BUSH' || entry.name.toUpperCase() === 'GEORGE W. BUSH') && (
          <Link
            to="/families/bush"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 mt-4 rounded-sm font-mono text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(100, 60, 30, 0.2) 0%, rgba(180, 140, 60, 0.1) 100%)',
              border: '1px solid rgba(180, 140, 60, 0.4)',
              color: '#b48c3c',
            }}
          >
            <Crown className="w-4 h-4" />
            VIEW BUSH DYNASTY DOSSIER
            <span style={{ color: '#d4a843' }}>→</span>
          </Link>
        )}
      </div>

      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="evidence">
          <Accordion.Trigger className="w-full flex items-center justify-between px-5 sm:px-6 py-3 font-mono text-sm text-[#00ff41] hover:text-[#00ff41]/80 hover:bg-[#00ff41]/5 transition-all group/trigger cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="text-[#00ff41]">&#9654;</span>
              VIEW EVIDENCE DOSSIER
            </span>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/trigger:hidden" />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-5 sm:px-6 pb-5 border-t border-[#333]">
              <div className="pt-4">
                <div className="font-mono text-xs text-[#00ff41]/60 tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#00ff41]/30" />
                  DOCUMENTED EVIDENCE
                  <span className="flex-1 h-px bg-[#00ff41]/30" />
                </div>
                <div className="font-serif text-sm text-[#c0c0c0] leading-relaxed whitespace-pre-line mb-5">
                  {entry.evidence_documented}
                </div>

                <div className="font-mono text-xs text-[#00d9ff]/60 tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#00d9ff]/30" />
                  PRIMARY SOURCES
                  <span className="flex-1 h-px bg-[#00d9ff]/30" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.sources.map((source, i) => (
                    <SourcePill key={i} source={source} />
                  ))}
                </div>

                {entry.footer_note && (
                  <div className="mt-6 pt-4 border-t border-[#333]">
                    <div style={{
                      fontFamily: 'monospace',
                      color: '#888',
                      fontSize: '0.85rem',
                    }}>
                      {entry.footer_note}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="px-5 sm:px-6 py-3 border-t border-[#222] bg-[#0a0a0a]">
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-xs text-[#555]">SOURCES:</span>
          {entry.sources.map((source, i) => (
            source.url ? (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#00d9ff]/70 hover:text-[#00d9ff] transition-colors"
              >
                [{source.name.split(' — ')[0]}]
              </a>
            ) : (
              <span key={i} className="font-mono text-xs text-[#555]">
                [{source.name.split(' — ')[0]}]
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

function LoadingSequence() {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const sequence = [
      'ACCESSING DOSSIER DATABASE...',
      'DECLASSIFYING... [LOADING SUBJECTS]',
      'EVIDENCE_STATUS: VERIFIED',
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        setLines(prev => [...prev, sequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center">
      <div className="max-w-lg w-full px-6">
        {lines.map((line, i) => (
          <p key={i} className="font-mono text-sm text-[#00ff41] mb-2 animate-pulse">
            {line}
          </p>
        ))}
        {lines.length < 3 && (
          <span className="inline-block w-2 h-4 bg-[#00ff41] animate-pulse" />
        )}
      </div>
    </div>
  );
}

export function Watchlist() {
  const { data: entries = [], isLoading: loading } = useEnemiesOfTruth();
  const [showLoading, setShowLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('severity');
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoading(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    setVisibleCount(20);
  }, [searchTerm, sortKey, severityFilter]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 20);
  }, []);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) handleLoadMore();
    }, { rootMargin: '200px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleLoadMore, loading, showLoading]);

  const totalSources = useMemo(() => {
    return entries.reduce((sum, e) => sum + (e.sources?.length || 0), 0);
  }, [entries]);

  const filtered = useMemo(() => {
    let result = [...entries];

    if (severityFilter !== 'ALL') {
      result = result.filter(e => e.severity === severityFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        e =>
          e.name.toLowerCase().includes(term) ||
          e.title.toLowerCase().includes(term) ||
          (e.subtitle && e.subtitle.toLowerCase().includes(term)) ||
          e.summary.toLowerCase().includes(term) ||
          e.key_facts.some(f => f.toLowerCase().includes(term))
      );
    }

    result.sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name);
      if (sortKey === 'severity') {
        const diff = (SEVERITY_ORDER[b.severity] || 0) - (SEVERITY_ORDER[a.severity] || 0);
        if (diff !== 0) return diff;
        const aOrder = a.sort_order ?? Infinity;
        const bOrder = b.sort_order ?? Infinity;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [entries, searchTerm, sortKey, severityFilter]);

  return (
    <>
      <SEOHead
        title="The Watchlist"
        description="Documented corruption dossiers backed by primary sources. Evidence-only profiles of individuals whose actions are established by government records and court filings."
        url="https://redpillbiblio.wtf/watchlist"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'The Watchlist',
          description: 'Documented corruption dossiers backed by primary sources.',
          numberOfItems: entries.length,
          itemListElement: entries.slice(0, 20).map((entry, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Person',
              name: entry.name,
              description: entry.summary?.substring(0, 200),
              ...(entry.sources?.length > 0 ? {
                sameAs: entry.sources.filter(s => s.url).map(s => s.url),
              } : {}),
            },
          })),
        }}
      />
      {showLoading && <LoadingSequence />}
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[#0a0a0a] pt-20 pb-16"
        style={{ opacity: showLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-5 h-5 text-[#ff4444]" />
              <span className="font-mono text-xs text-[#ff4444]/60 tracking-widest">CLASSIFICATION: PUBLIC RECORD</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff41] font-mono tracking-tight mb-2">
              {'> THE_WATCHLIST.db'}
            </h1>
            <p className="text-[#00ff41]/50 font-mono text-sm">
              Exposed by the record. Documented by primary sources. Judged by the evidence.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-[#111] border border-[#ff4444]/20 rounded-sm p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-bold text-[#ff4444]">{entries.length}</div>
              <div className="font-mono text-xs text-[#666] tracking-wider">SUBJECTS INDEXED</div>
            </div>
            <div className="bg-[#111] border border-[#ff4444]/20 rounded-sm p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-bold text-[#00d9ff]">{totalSources}</div>
              <div className="font-mono text-xs text-[#666] tracking-wider">SOURCE DOCUMENTS</div>
            </div>
            <div className="bg-[#111] border border-[#ff4444]/20 rounded-sm p-3 text-center">
              <div className="font-mono text-lg sm:text-xl font-bold text-[#00ff41] flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                LIVE
              </div>
              <div className="font-mono text-xs text-[#666] tracking-wider">EVIDENCE ONLY</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {([
              { label: 'ALL', color: '#666', activeColor: '#999', activeBg: '#333' },
              { label: 'CRITICAL', color: '#ff4444', activeColor: '#ff4444', activeBg: 'rgba(255,68,68,0.1)' },
              { label: 'HIGH', color: '#ffbf00', activeColor: '#ffbf00', activeBg: 'rgba(255,191,0,0.1)' },
              { label: 'MEDIUM', color: '#4a9eff', activeColor: '#4a9eff', activeBg: 'rgba(74,158,255,0.1)' },
              { label: 'LOW', color: '#6B7280', activeColor: '#6B7280', activeBg: 'rgba(107,114,128,0.1)' },
              { label: 'DECEASED', color: '#888', activeColor: '#aaa', activeBg: 'rgba(100,100,100,0.15)' },
            ]).map(({ label, color, activeColor, activeBg }) => {
              const isActive = severityFilter === label;
              return (
                <button
                  key={label}
                  onClick={() => setSeverityFilter(label)}
                  className="font-mono text-xs px-3 py-1.5 rounded-sm border transition-all flex items-center gap-1.5"
                  style={{
                    borderColor: isActive ? color : '#333',
                    color: isActive ? activeColor : '#666',
                    backgroundColor: isActive ? activeBg : '#111',
                  }}
                >
                  {label !== 'ALL' && (
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: isActive ? color : '#444' }}
                    />
                  )}
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
              <Input
                placeholder="Search subjects..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#111] border-[#333] text-[#e5e5e5] font-mono text-sm placeholder:text-[#444] focus:border-[#ff4444]/50 focus:ring-[#ff4444]/20 rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#555]">SORT:</span>
              {(['severity', 'name'] as SortKey[]).map(key => (
                <button
                  key={key}
                  onClick={() => setSortKey(key)}
                  className={`font-mono text-xs px-3 py-2 rounded-sm border transition-all ${
                    sortKey === key
                      ? 'bg-[#ff4444]/10 border-[#ff4444]/40 text-[#ff4444]'
                      : 'bg-[#111] border-[#333] text-[#666] hover:text-[#999] hover:border-[#555]'
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {loading && !showLoading ? (
            <div className="text-center py-20">
              <div className="w-8 h-8 border-2 border-[#ff4444] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-mono text-sm text-[#555]">LOADING DOSSIERS...</p>
            </div>
          ) : filtered.length === 0 && !loading ? (
            <div className="text-center py-20 border border-[#333] rounded-sm bg-[#0f0f0f]">
              <p className="font-mono text-sm text-[#555]">NO MATCHING SUBJECTS FOUND</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.slice(0, visibleCount).map(entry => (
                <DossierCard key={entry.id} entry={entry} />
              ))}
              {visibleCount < filtered.length && (
                <div ref={loadMoreRef} className="flex justify-center py-8">
                  <div className="w-6 h-6 border-2 border-[#ff4444] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          )}

          <div className="mt-12 p-4 border border-[#333] rounded-sm bg-[#0a0a0a]">
            <p className="font-mono text-xs text-[#555] leading-relaxed">
              <span className="text-[#ff4444]/60">NOTICE:</span> All information on this page is sourced exclusively from
              official government records, court filings, congressional proceedings, and verified journalism. No claims are
              made beyond what is documented in the cited sources. Legal status is stated for every subject. This page does
              not allege criminal guilt where none has been established by a court of law.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
