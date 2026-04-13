import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ArrowRight, ExternalLink, Shuffle, BookOpen, Tag, FlaskConical } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/lib/supabase';
import { PILLAR_CONFIGS } from '@/lib/pillarUtils';
import { useSiteStats, formatLastUpdated } from '@/hooks/useSiteStats';

const PILLAR_DESCRIPTIONS: Record<string, string> = {
  'Child Safety & Trafficking': 'Epstein network, institutional abuse, trafficking operations',
  'AI & Surveillance': 'Mass surveillance, facial recognition, data harvesting',
  'Energy & Suppressed Technology': 'UAP disclosure, suppressed inventions, energy monopolies',
  'Financial Systems': 'Money laundering, insider trading, regulatory capture',
  'War & Intelligence': 'CIA operations, false flags, foreign interventions',
  'Health Transparency': 'Vaccine safety, pharma fraud, historical experiments',
  'Media Manipulation': 'Propaganda, narrative control, corporate media influence',
  'Elections & Governance': 'Voting systems, campaign finance, election integrity',
  'Space & Black Budget Programs': 'Classified programs, unaccounted spending, secret projects',
  'Environmental & Corporate Accountability': 'PFAS, corporate poisoning, greenwashing cover-ups',
};

const SEARCH_SUGGESTIONS = [
  'Epstein', 'PFAS', 'Congress trades', 'MKUltra', 'Vaccine', 'FOIA', 'CIA', 'Insider trading', 'Surveillance', 'Blackwater',
];

const TRUST_SIGNALS = [
  'Court filings', 'FOIA releases', 'Declassified records', 'Financial disclosures', 'Gov. records', 'Peer-reviewed research',
];

type PillarStat = {
  name: string;
  canonicalName: string;
  slug: string;
  description: string;
  count: number;
};

type RecentDoc = {
  id: string;
  title: string;
  document_type: string | null;
  created_at: string;
  verification_tier: string | null;
};

type FeaturedDoc = {
  id: string;
  title: string;
  description: string;
  document_type: string;
  date_published: string | null;
  verification_tier: string;
};

export function Landing() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { stats: siteStats, isLoading: statsLoading } = useSiteStats();
  const [pillars, setPillars] = useState<PillarStat[]>([]);
  const [featuredDocs, setFeaturedDocs] = useState<FeaturedDoc[]>([]);
  const [recentDocs, setRecentDocs] = useState<RecentDoc[]>([]);
  const [allDocIds, setAllDocIds] = useState<string[]>([]);

  useEffect(() => {
    supabase
      .from('documents')
      .select('metadata')
      .then(({ data }) => {
        if (!data) return;
        const counts: Record<string, number> = {};
        data.forEach((doc) => {
          const pillar = doc.metadata?.pillar as string | undefined;
          if (pillar) {
            counts[pillar] = (counts[pillar] || 0) + 1;
          }
        });

        const pillarStats: PillarStat[] = PILLAR_CONFIGS.map((cfg) => {
          const count = Object.entries(counts).reduce((sum, [key, val]) => {
            if (
              key === cfg.canonicalName ||
              key === cfg.name ||
              key.toLowerCase().includes(cfg.slug.replace(/-/g, ' '))
            ) {
              return sum + val;
            }
            return sum;
          }, 0);
          return {
            name: cfg.name,
            canonicalName: cfg.canonicalName,
            slug: cfg.slug,
            description: PILLAR_DESCRIPTIONS[cfg.canonicalName] ?? cfg.description,
            count,
          };
        });

        pillarStats.sort((a, b) => b.count - a.count);
        setPillars(pillarStats);
      });
  }, []);

  useEffect(() => {
    supabase
      .from('documents')
      .select('id, title, description, document_type, date_published, verification_tier')
      .eq('verification_tier', 'verified')
      .order('date_published', { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data) setFeaturedDocs(data as FeaturedDoc[]);
      });
  }, []);

  useEffect(() => {
    supabase
      .from('documents')
      .select('id, title, document_type, created_at, verification_tier')
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (data) setRecentDocs(data as RecentDoc[]);
      });
  }, []);

  useEffect(() => {
    supabase
      .from('documents')
      .select('id')
      .limit(500)
      .then(({ data }) => {
        if (data) setAllDocIds(data.map((d) => d.id as string));
      });
  }, []);

  const handleSearch = (query: string) => {
    const q = query.trim();
    if (q) navigate(`/evidence-list?search=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch(searchQuery);
  };

  const handleRandomDoc = useCallback(() => {
    if (allDocIds.length > 0) {
      const id = allDocIds[Math.floor(Math.random() * allDocIds.length)];
      navigate(`/evidence/${id}`);
    } else {
      navigate('/evidence-list');
    }
  }, [allDocIds, navigate]);

  const statTiles = [
    {
      label: 'Evidence Items',
      sublabel: 'Documents in archive',
      display: statsLoading ? '…' : (siteStats?.total_documents ?? 0).toLocaleString(),
      small: false,
      to: '/evidence-list',
    },
    {
      label: 'Officials & Executives Tracked',
      sublabel: 'On the watchlist',
      display: statsLoading ? '…' : (siteStats?.total_watchlist ?? 0).toLocaleString(),
      small: false,
      to: '/watchlist',
    },
    {
      label: 'Events Documented',
      sublabel: 'In the timeline',
      display: statsLoading ? '…' : (siteStats?.total_events ?? 0).toLocaleString(),
      small: false,
      to: '/timeline',
    },
    {
      label: 'Last Updated',
      sublabel: 'Most recent change',
      display: statsLoading ? '…' : formatLastUpdated(siteStats?.last_updated ?? null),
      small: true,
      to: null,
    },
    { label: 'Elite Family Trees', sublabel: 'Power dynasties profiled', display: '9', small: false, to: '/families' },
    { label: 'Insider Trades', sublabel: 'Financial disclosures', display: (1106).toLocaleString(), small: false, to: '/trackers/insider-trades' },
    { label: 'Crashes & Incidents', sublabel: 'Accident records', display: (389).toLocaleString(), small: false, to: '/trackers/accidents' },
    { label: 'Source Links Archived', sublabel: 'Primary references', display: (2773).toLocaleString(), small: false, to: null },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex flex-col">
      <SEOHead
        title="The Red Pill Bibliography — Primary Sources. Full Documents. You Decide."
        description="An open-source evidence library of declassified documents, court records, and verified primary sources documenting institutional corruption and accountability."
        url="https://redpillbiblio.wtf"
        noTitleSuffix
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'The Red Pill Bibliography',
          url: 'https://redpillbiblio.wtf',
          description: 'An open-source evidence library of declassified documents, court records, and verified primary sources documenting institutional corruption and accountability.',
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: 'https://redpillbiblio.wtf/evidence-list?search={search_term_string}' },
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      <Navigation />

      <main id="main-content" className="flex-1">
        {/* HERO */}
        <section className="min-h-[78vh] flex flex-col items-center justify-center px-6 py-20 bg-[#0b0b0b]">
          <div className="w-full max-w-3xl mx-auto text-center">
            <div className="font-mono text-xs text-[#00ff41]/40 uppercase tracking-[0.3em] mb-5">
              {'>'} OPEN SOURCE EVIDENCE LIBRARY
            </div>

            <h1 className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#00ff41] text-center mb-4 leading-tight">
              Primary Sources.<br />You Decide.
            </h1>

            <p className="font-mono text-sm text-[#777] mb-7 max-w-xl mx-auto leading-relaxed">
              A searchable archive of court filings, declassified records, government documents, financial disclosures, and other primary-source evidence.
            </p>

            {/* Search */}
            <div className="w-full max-w-2xl mx-auto relative mb-4">
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search ALL site items..."
                className="w-full bg-[#111] border-2 border-[#00ff41]/35 rounded-lg px-5 py-4
                           font-mono text-[#e5e5e5] text-base placeholder-[#3a3a3a]
                           focus:border-[#00ff41] focus:outline-none focus:ring-2 focus:ring-[#00ff41]/15
                           transition-colors pr-14"
                style={{ minHeight: '56px' }}
              />
              <button
                onClick={() => handleSearch(searchQuery)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00ff41]/50 hover:text-[#00ff41] transition-colors p-2"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Chips */}
            <div className="mb-6">
              <div className="font-mono text-[11px] text-[#3a3a3a] mb-2.5 uppercase tracking-widest">Popular searches</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {SEARCH_SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="font-mono text-xs text-[#00ff41]/55 hover:text-[#00ff41]
                               border border-[#00ff41]/18 hover:border-[#00ff41]/55
                               rounded px-3 py-1.5 transition-all hover:bg-[#00ff41]/5 min-h-[36px]
                               focus:outline-none focus:ring-1 focus:ring-[#00ff41]/35"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRandomDoc}
                className="inline-flex items-center gap-2 font-mono text-xs text-[#666] hover:text-[#bbb]
                           border border-[#222] hover:border-[#3a3a3a] bg-[#111] hover:bg-[#161616]
                           rounded px-4 py-2.5 transition-all min-h-[38px]
                           focus:outline-none focus:ring-1 focus:ring-[#444]"
              >
                <Shuffle size={13} />
                Surprise me — random document
              </button>
              <Link
                to="/evidence-list"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#666] hover:text-[#bbb]
                           border border-[#222] hover:border-[#3a3a3a] bg-[#111] hover:bg-[#161616]
                           rounded px-4 py-2.5 transition-all min-h-[38px]
                           focus:outline-none focus:ring-1 focus:ring-[#444]"
              >
                <BookOpen size={13} />
                Browse all evidence
              </Link>
            </div>
          </div>
        </section>

        {/* ONBOARDING STRIP */}
        <div className="bg-[#0d0d0d] border-y border-[#161616] py-3 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="font-mono text-xs text-[#333] tracking-widest uppercase">New here?</span>
            <Link to="/methodology" className="font-mono text-xs text-[#4a4a4a] hover:text-[#00ff41]/60 transition-colors inline-flex items-center gap-1">
              <FlaskConical size={11} /> How we verify sources
            </Link>
            <Link to="/evidence-list" className="font-mono text-xs text-[#4a4a4a] hover:text-[#00ff41]/60 transition-colors inline-flex items-center gap-1">
              <Tag size={11} /> Browse by topic
            </Link>
            <Link to="/transparency" className="font-mono text-xs text-[#4a4a4a] hover:text-[#00ff41]/60 transition-colors inline-flex items-center gap-1">
              <BookOpen size={11} /> Transparency policy
            </Link>
          </div>
        </div>

        {/* DISCOVERY: RECENT + START HERE */}
        <section className="py-14 px-6 bg-[#0b0b0b]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

              {/* Recently Added */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-mono text-base text-[#00ff41]">{'>'} RECENTLY_ADDED</h2>
                  <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse flex-shrink-0" />
                </div>
                <p className="font-mono text-xs text-[#3a3a3a] mb-5">Latest items added to the archive.</p>

                <div className="space-y-2">
                  {recentDocs.length > 0 ? recentDocs.map((doc) => (
                    <Link
                      key={doc.id}
                      to={`/evidence/${doc.id}`}
                      className="group flex items-start gap-3 p-3.5 bg-[#0f0f0f] border border-[#181818]
                                 hover:border-[#00ff41]/25 hover:bg-[#111] rounded transition-all no-underline
                                 focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25"
                    >
                      <span className="font-mono text-[10px] text-[#2a2a2a] mt-0.5 flex-shrink-0 group-hover:text-[#00ff41]/50 transition-colors">▸</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-sm text-[#c0c0c0] group-hover:text-[#e0e0e0] transition-colors leading-snug line-clamp-2 mb-1">
                          {doc.title}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {doc.document_type && (
                            <span className="font-mono text-[11px] text-[#333] uppercase tracking-wide">{doc.document_type}</span>
                          )}
                          <span className="font-mono text-[11px] text-[#2a2a2a]">
                            {new Date(doc.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          {doc.verification_tier === 'verified' && (
                            <span className="font-mono text-[11px] text-[#00ff41]/35">verified</span>
                          )}
                        </div>
                      </div>
                      <ArrowRight size={12} className="flex-shrink-0 text-[#222] group-hover:text-[#00ff41]/35 transition-colors mt-1" />
                    </Link>
                  )) : Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="p-3.5 bg-[#0f0f0f] border border-[#181818] rounded animate-pulse">
                      <div className="h-3 bg-[#191919] rounded mb-2 w-3/4" />
                      <div className="h-2 bg-[#141414] rounded w-1/3" />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to="/evidence-list"
                    className="font-mono text-xs text-[#3a3a3a] hover:text-[#00ff41]/55 transition-colors inline-flex items-center gap-1"
                  >
                    View all evidence <ArrowRight size={10} />
                  </Link>
                </div>
              </div>

              {/* Start Here */}
              <div className="lg:col-span-2">
                <h2 className="font-mono text-base text-[#00ff41] mb-1">{'>'} START_HERE</h2>
                <p className="font-mono text-xs text-[#3a3a3a] mb-5">Recommended entry points for new visitors.</p>

                <div className="space-y-2.5">
                  {[
                    {
                      label: 'The Epstein Network',
                      desc: 'Court filings, flight logs, victim depositions, and named associates.',
                      to: '/evidence-list?search=Epstein',
                      tag: 'Child Safety',
                    },
                    {
                      label: 'Congress & Insider Trading',
                      desc: 'Documented trades and financial disclosures from elected officials.',
                      to: '/trackers/congress-trades',
                      tag: 'Financial',
                    },
                    {
                      label: 'PFAS Contamination',
                      desc: 'Corporate cover-up of "forever chemicals" in water supplies.',
                      to: '/evidence-list?search=PFAS',
                      tag: 'Environment',
                    },
                    {
                      label: 'CIA & MKUltra',
                      desc: 'Declassified documents on covert mind-control experiments.',
                      to: '/evidence-list?search=MKUltra',
                      tag: 'Intelligence',
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="group block bg-[#0f0f0f] border border-[#181818] hover:border-[#00ff41]/25
                                 hover:bg-[#111] rounded p-4 transition-all no-underline
                                 focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-mono text-sm text-[#bfbfbf] group-hover:text-[#e0e0e0] transition-colors leading-snug font-medium">
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] text-[#00ff41]/25 border border-[#00ff41]/12 rounded px-1.5 py-0.5 flex-shrink-0 whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#4a4a4a] leading-relaxed">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE STATS */}
        <section className="border-y border-[#00ff41]/10 bg-[#080808] py-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 px-6">
            {statTiles.map((stat) => {
              const inner = (
                <div className={`text-center ${stat.to ? 'group' : ''}`}>
                  <div className={`font-mono font-bold text-[#00ff41] tabular-nums leading-tight transition-colors ${stat.small ? 'text-sm md:text-base' : 'text-2xl md:text-3xl'} ${stat.to ? 'group-hover:text-[#00ff41]/75' : ''}`}>
                    {stat.display}
                  </div>
                  <div className="font-mono text-xs text-[#444] mt-1.5 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[11px] text-[#2a2a2a] mt-0.5">
                    {stat.sublabel}
                  </div>
                  {stat.to && (
                    <div className="font-mono text-[10px] text-transparent group-hover:text-[#00ff41]/35 transition-colors mt-1 flex items-center justify-center gap-0.5">
                      View <ArrowRight size={9} />
                    </div>
                  )}
                </div>
              );

              return stat.to ? (
                <Link key={stat.label} to={stat.to} className="no-underline focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25 rounded">
                  {inner}
                </Link>
              ) : (
                <div key={stat.label}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* INVESTIGATION PILLARS */}
        <section className="py-16 px-6 bg-[#0b0b0b]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-lg md:text-xl text-[#00ff41] mb-1">
              {'>'} ACTIVE_INVESTIGATIONS
            </h2>
            <p className="font-mono text-xs text-[#4a4a4a] mb-8">
              10 pillars of documented institutional failure. Click to explore.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {(pillars.length > 0 ? pillars : PILLAR_CONFIGS.map(p => ({
                name: p.name,
                canonicalName: p.canonicalName,
                slug: p.slug,
                description: PILLAR_DESCRIPTIONS[p.canonicalName] ?? p.description,
                count: 0,
              }))).slice(0, 6).map((pillar) => (
                <Link
                  key={pillar.slug}
                  to={`/pillars/${pillar.slug}`}
                  className="group block bg-[#111] border border-[#1a1a1a] hover:border-[#00ff41]/38
                             rounded-lg p-5 transition-all hover:bg-[#0d0d0d] no-underline
                             focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25"
                >
                  <div className="font-mono text-sm text-[#00ff41] font-semibold mb-1.5 leading-snug">
                    {pillar.canonicalName}
                  </div>
                  <div className="font-mono text-xs text-[#4a4a4a] mb-4 leading-relaxed">
                    {pillar.description}
                  </div>
                  <div className="flex items-center justify-between">
                    {pillar.count > 0 ? (
                      <span className="font-mono text-[11px] text-[#00ff41]/45">
                        {pillar.count} documents
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] text-[#333]">loading...</span>
                    )}
                    <span className="font-mono text-[11px] text-[#333] group-hover:text-[#00ff41] transition-colors flex items-center gap-1">
                      Explore <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/evidence-list"
                className="font-mono text-sm text-[#00ff41]/45 hover:text-[#00ff41] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25 rounded px-1"
              >
                View all 10 investigations →
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED EVIDENCE */}
        <section className="py-16 px-6 bg-[#080808] border-y border-[#00ff41]/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-lg md:text-xl text-[#00ff41] mb-1">
              {'>'} RECENTLY_VERIFIED
            </h2>
            <p className="font-mono text-xs text-[#4a4a4a] mb-8">
              High-confidence items confirmed against primary sources.
            </p>

            {featuredDocs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredDocs.map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/evidence/${doc.id}`}
                    className="block bg-[#0b0b0b] border border-[#1a1a1a] hover:border-[#00ff41]/38
                               rounded-lg p-5 transition-all group no-underline
                               focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#00ff41] flex-shrink-0" />
                      <span className="font-mono text-[11px] text-[#00ff41] uppercase tracking-widest">
                        Verified
                      </span>
                    </div>
                    <h3 className="font-mono text-sm text-[#d0d0d0] font-medium mb-2 leading-snug
                                   group-hover:text-[#00ff41] transition-colors line-clamp-3">
                      {doc.title}
                    </h3>
                    <p className="font-mono text-xs text-[#4a4a4a] line-clamp-3 mb-4 leading-relaxed">
                      {doc.description}
                    </p>
                    <div className="font-mono text-[11px] text-[#3a3a3a]">
                      {doc.document_type}
                      {doc.date_published && (
                        <> · {new Date(doc.date_published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-lg p-5 animate-pulse">
                    <div className="h-2 w-16 bg-[#1a1a1a] rounded mb-3" />
                    <div className="h-3 bg-[#1a1a1a] rounded mb-2" />
                    <div className="h-3 w-3/4 bg-[#1a1a1a] rounded mb-4" />
                    <div className="h-2 w-1/2 bg-[#1a1a1a] rounded" />
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <Link
                to="/evidence-list"
                className="font-mono text-sm text-[#00ff41]/45 hover:text-[#00ff41] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25 rounded px-1"
              >
                Browse all verified evidence →
              </Link>
            </div>
          </div>
        </section>

        {/* VERIFICATION PROTOCOL */}
        <section className="py-16 px-6 bg-[#0b0b0b]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-lg md:text-xl text-[#00ff41] mb-2">
              {'>'} VERIFICATION_PROTOCOL
            </h2>
            <p className="font-mono text-xs text-[#4a4a4a] mb-12">
              How we evaluate and classify every item in this archive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
              {[
                {
                  step: '01',
                  label: 'Source',
                  body: 'Every item traced to primary documents — court filings, FOIA releases, government records, or peer-reviewed research.',
                },
                {
                  step: '02',
                  label: 'Verify',
                  body: 'Three-tier classification: Verified (primary source confirmed), Corroborated (multiple independent sources), Preliminary (single source, under review).',
                },
                {
                  step: '03',
                  label: 'Publish',
                  body: 'Full chain of custody documented. Original source linked. You verify independently — we provide the evidence.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-6">
                  <div className="font-mono text-3xl font-bold text-[#00ff41] mb-3">{item.step}</div>
                  <div className="font-mono text-sm text-[#d0d0d0] font-semibold mb-2">{item.label}</div>
                  <div className="font-mono text-xs text-[#555] leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>

            <Link
              to="/methodology"
              className="font-mono text-sm text-[#00ff41]/45 hover:text-[#00ff41] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25 rounded px-1"
            >
              Read our full methodology →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-[#080808] border-t border-[#00ff41]/10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-mono text-xs text-[#00ff41]/35 uppercase tracking-widest mb-3">
              The archive is open
            </div>
            <h2 className="font-mono text-xl md:text-2xl text-[#00ff41] mb-8">
              {'>'} ready_to_investigate_
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/evidence-list"
                className="font-mono text-sm bg-[#00ff41] text-[#0a0a0a] px-6 py-3.5 rounded
                           hover:bg-[#00e63c] transition-colors font-bold text-center min-h-[48px] flex items-center justify-center
                           focus:outline-none focus:ring-2 focus:ring-[#00ff41]/40"
              >
                Browse All Evidence
              </Link>
              <Link
                to="/evidence"
                className="font-mono text-sm border border-[#00ff41]/38 text-[#00ff41] px-6 py-3.5 rounded
                           hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-colors text-center min-h-[48px] flex items-center justify-center
                           focus:outline-none focus:ring-2 focus:ring-[#00ff41]/20"
              >
                Network View
              </Link>
              <Link
                to="/watchlist"
                className="font-mono text-sm border border-[#00ff41]/38 text-[#00ff41] px-6 py-3.5 rounded
                           hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-colors text-center min-h-[48px] flex items-center justify-center
                           focus:outline-none focus:ring-2 focus:ring-[#00ff41]/20"
              >
                Enemies of Truth
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-[#0f0f0f]">
              <p className="font-mono text-xs text-[#333] mb-4">
                Have a tip or document to submit?
              </p>
              <Link
                to="/submit"
                className="font-mono text-xs text-[#00ff41]/38 hover:text-[#00ff41]/65 transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#00ff41]/25 rounded"
              >
                Submit evidence securely <ExternalLink size={11} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
