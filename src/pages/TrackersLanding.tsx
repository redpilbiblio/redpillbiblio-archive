import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CongressTradesContent = lazy(() =>
  import('./CongressTrades').then(m => ({ default: m.CongressTradesContent }))
);
const InsiderTradesContent = lazy(() =>
  import('./InsiderTrades').then(m => ({ default: m.InsiderTradesContent }))
);
const SuspiciousDeathsContent = lazy(() =>
  import('./SuspiciousDeaths').then(m => ({ default: m.SuspiciousDeathsContent }))
);
const AccidentsContent = lazy(() =>
  import('./AccidentsPage').then(m => ({ default: m.AccidentsContent }))
);
const RevolvingDoorContent = lazy(() =>
  import('./RevolvingDoor').then(m => ({ default: m.RevolvingDoorContent }))
);

interface TrackerCard {
  id: string;
  title: string;
  entries: number;
  lastUpdated: string;
  description: string;
  icon: string;
  dbName: string;
  accentColor: string;
}

function getLatestDate(data: { Date?: string; date?: string }[]): string {
  let latest = '';
  for (const item of data) {
    const d = item.Date || item.date || '';
    if (d > latest) latest = d;
  }
  return latest || 'Unknown';
}

function parseCsvDates(csv: string): { count: number; latestDate: string } {
  const lines = csv.trim().split('\n');
  let latest = '';
  let count = 0;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    count++;
    const match = line.match(/^"(\d{4}-\d{2}-\d{2})"/);
    if (match && match[1] > latest) latest = match[1];
  }
  return { count, latestDate: latest || 'Unknown' };
}

const STALE_THRESHOLD_MS = 6 * 30 * 24 * 60 * 60 * 1000;

function isStale(dateStr: string): boolean {
  const d = new Date(dateStr + 'T00:00:00');
  return Date.now() - d.getTime() > STALE_THRESHOLD_MS;
}

const STATIC_CARDS: TrackerCard[] = [
  {
    id: 'congress-trades',
    title: 'Congress Trades',
    entries: 0,
    lastUpdated: '',
    description: 'STOCK Act disclosures. What your elected representatives are trading — and when.',
    icon: '\u{1F4CA}',
    dbName: 'CONGRESS_TRADES.db',
    accentColor: '#00ff41',
  },
  {
    id: 'insider-trades',
    title: 'Insider Trades',
    entries: 0,
    lastUpdated: '',
    description: 'SEC Form 4 filings. Executive and director stock transactions at publicly traded companies.',
    icon: '\u{1F4BC}',
    dbName: 'INSIDER_TRADES.db',
    accentColor: '#ffbf00',
  },
  {
    id: 'suspicious-deaths',
    title: 'Suspicious Deaths',
    entries: 0,
    lastUpdated: '',
    description: 'Unexplained, convenient, and officially closed. Whistleblowers, journalists, witnesses.',
    icon: '\u{2620}',
    dbName: 'SUSPICIOUS_DEATHS.db',
    accentColor: '#ff4444',
  },
  {
    id: 'accidents',
    title: 'Accidents & Crashes',
    entries: 44,
    lastUpdated: '2024-01-05',
    description: 'Planes, trains, ships — when things go wrong and why. Official causes vs. notable factors.',
    icon: '\u{2708}',
    dbName: 'ACCIDENT_RECORDS.db',
    accentColor: '#ff8800',
  },
  {
    id: 'revolving-door',
    title: 'Revolving Door',
    entries: 70,
    lastUpdated: '2024-02-15',
    description: 'The government-corporate pipeline. Who moves where, and who benefits.',
    icon: '\u{1F504}',
    dbName: 'REVOLVING_DOOR.db',
    accentColor: '#8888ff',
  },
];

const contentMap: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'congress-trades': CongressTradesContent,
  'insider-trades': InsiderTradesContent,
  'suspicious-deaths': SuspiciousDeathsContent,
  'accidents': AccidentsContent,
  'revolving-door': RevolvingDoorContent,
};

function ContentLoader({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div
        className="w-8 h-8 border-3 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: color, borderTopColor: 'transparent' }}
      />
      <span className="ml-3 text-[#a0a0a0] font-mono text-sm">Loading module...</span>
    </div>
  );
}

export default function TrackersLanding() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [trackerCards, setTrackerCards] = useState<TrackerCard[]>(STATIC_CARDS);
  const [dataLoaded, setDataLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      import('@/data/data_congress_trades.json').then(m => m.default),
      import('@/data/data_insider_trades.json').then(m => m.default),
      import('@/data/suspicious_deaths_new.csv?raw').then(m => m.default),
    ]).then(([congress, insider, csv]) => {
      if (cancelled) return;
      const congressLatest = getLatestDate(congress as { Date: string }[]);
      const insiderLatest = getLatestDate(insider as { Date: string }[]);
      const deathsStats = parseCsvDates(csv as string);
      setTrackerCards(prev => prev.map(card => {
        if (card.id === 'congress-trades') return { ...card, entries: (congress as unknown[]).length, lastUpdated: congressLatest };
        if (card.id === 'insider-trades') return { ...card, entries: (insider as unknown[]).length, lastUpdated: insiderLatest };
        if (card.id === 'suspicious-deaths') return { ...card, entries: deathsStats.count, lastUpdated: deathsStats.latestDate };
        return card;
      }));
      setDataLoaded(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && trackerCards.some(c => c.id === hash)) {
      setExpandedId(hash);
      setTimeout(() => {
        document.getElementById(`tracker-${hash}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash, trackerCards]);

  const toggleCard = (id: string) => {
    const next = expandedId === id ? null : id;
    setExpandedId(next);
    if (next) {
      setTimeout(() => {
        document.getElementById(`tracker-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const totalRecords = trackerCards.reduce((sum, c) => sum + c.entries, 0);

  const lastSync = useMemo(() => {
    let latest = '';
    for (const card of trackerCards) {
      if (card.lastUpdated > latest) latest = card.lastUpdated;
    }
    return latest;
  }, [trackerCards]);

  return (
    <>
      <SEOHead
        title="Active Trackers"
        description="Live tracking systems monitoring congressional trades, insider trading, suspicious deaths, incidents, and the revolving door between government and corporations."
        url="https://redpillbiblio.wtf/trackers"
      />

      <Navigation />

      <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '2rem', paddingTop: '6rem', paddingBottom: '6rem', fontFamily: 'monospace' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ borderBottom: '1px solid #00ff41', paddingBottom: '1rem', marginBottom: '2rem' }}>
            <h1 style={{ color: '#00ff41', fontSize: '1.75rem', fontFamily: 'monospace', margin: 0 }}>
              &gt; TRACKERS.sys
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Data tracking modules — financial, political, and investigative records. Click any module to expand.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Active Trackers', value: String(trackerCards.length) },
              { label: 'Total Records', value: String(totalRecords) },
              { label: 'Last Sync', value: lastSync },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: '#111',
                border: '1px solid #1a1a1a',
                borderLeft: '3px solid #00ff41',
                padding: '0.75rem 1.25rem',
                flex: '1',
                minWidth: '120px',
              }}>
                <div style={{ color: '#00ff41', fontSize: '1.2rem', fontWeight: 'bold' }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {trackerCards.map((card) => {
              const isExpanded = expandedId === card.id;
              const ContentComponent = contentMap[card.id];

              return (
                <div
                  key={card.id}
                  id={`tracker-${card.id}`}
                  style={{ scrollMarginTop: '5rem' }}
                >
                  <button
                    onClick={() => toggleCard(card.id)}
                    style={{
                      width: '100%',
                      background: '#111',
                      border: `1px solid ${isExpanded ? card.accentColor : '#1a1a1a'}`,
                      borderTop: `2px solid ${card.accentColor}`,
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      textAlign: 'left',
                      display: 'block',
                      borderRadius: isExpanded ? '0.5rem 0.5rem 0 0' : '0.5rem',
                    }}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.borderColor = card.accentColor;
                        e.currentTarget.style.boxShadow = `0 0 15px ${card.accentColor}1a`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.borderColor = '#1a1a1a';
                        e.currentTarget.style.borderTopColor = card.accentColor;
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                          <span style={{ color: card.accentColor, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                            &gt; {card.dbName}
                          </span>
                          <span style={{ fontSize: '1.2rem' }}>{card.icon}</span>
                        </div>
                        <h3 style={{ color: '#fff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{card.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.75rem 0', lineHeight: '1.5' }}>
                          {card.description}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', alignItems: 'flex-end' }}>
                          <span style={{ color: 'rgba(255,255,255,0.4)' }}>{card.entries} entries</span>
                          <div style={{ textAlign: 'right' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated: {card.lastUpdated}</span>
                            {isStale(card.lastUpdated) && (
                              <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', marginTop: '2px', fontStyle: 'italic' }}>
                                Data pending update
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: '1.5rem', flexShrink: 0 }}>
                        {isExpanded ? (
                          <ChevronUp style={{ width: '1.25rem', height: '1.25rem', color: card.accentColor }} />
                        ) : (
                          <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: card.accentColor }} />
                        )}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div
                      style={{
                        background: '#0a0a0a',
                        border: `1px solid ${card.accentColor}`,
                        borderTop: 'none',
                        borderRadius: '0 0 0.5rem 0.5rem',
                        padding: '1.5rem',
                      }}
                    >
                      <Suspense fallback={<ContentLoader color={card.accentColor} />}>
                        <ContentComponent />
                      </Suspense>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
