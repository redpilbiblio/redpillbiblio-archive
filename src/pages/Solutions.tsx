import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ExternalLink, Zap } from 'lucide-react';

export type SolutionStatus = 'Proposed' | 'In Progress' | 'Active' | 'Passed';

export type SolutionCategory =
  | 'Legislative'
  | 'Legal / Judicial'
  | 'Civic / Grassroots'
  | 'Transparency / FOIA'
  | 'Media Literacy'
  | 'Tech / Open Source';

export interface SolutionEntry {
  id: string;
  title: string;
  description: string;
  status: SolutionStatus;
  category: SolutionCategory;
  externalUrl?: string;
  tags?: string[];
}

export interface SolutionCategoryMeta {
  id: SolutionCategory;
  label: string;
  description: string;
  accent: string;
}

const SOLUTION_CATEGORY_META: SolutionCategoryMeta[] = [
  { id: 'Legislative', label: 'Legislative', description: 'Bills, acts, and policy reform at the federal and state level.', accent: '#00ff41' },
  { id: 'Legal / Judicial', label: 'Legal / Judicial', description: 'Court-based accountability, litigation, and judicial reform efforts.', accent: '#a855f7' },
  { id: 'Civic / Grassroots', label: 'Civic / Grassroots', description: 'Community-led organizing, local oversight, and citizen action.', accent: '#00d9ff' },
  { id: 'Transparency / FOIA', label: 'Transparency / FOIA', description: 'Open records, sunshine laws, and FOIA reform pathways.', accent: '#ff4444' },
  { id: 'Media Literacy', label: 'Media Literacy', description: 'Source verification, critical thinking, and public education tools.', accent: '#ffbf00' },
  { id: 'Tech / Open Source', label: 'Tech / Open Source', description: 'Open-source civic tools, data infrastructure, and decentralized platforms.', accent: '#ff8800' },
];

const STATUS_COLORS: Record<SolutionStatus, string> = {
  'Proposed': '#555555',
  'In Progress': '#ffbf00',
  'Active': '#00ff41',
  'Passed': '#00d9ff',
};

const SOLUTIONS: SolutionEntry[] = [
  {
    id: 'stock-act-enforcement',
    title: 'STOCK Act Enforcement Act',
    description: 'Mandates automated compliance audits and real financial penalties for members of Congress who fail to disclose stock trades within the 45-day window.',
    status: 'Proposed',
    category: 'Legislative',
    tags: ['Congress', 'Trading', 'Enforcement'],
  },
  {
    id: 'revolving-door-ban',
    title: 'Revolving Door Cooling-Off Act',
    description: 'Extends the lobbying ban for senior executive branch and congressional officials from 1\u20132 years to a mandatory 5-year cooling-off period after leaving office.',
    status: 'Proposed',
    category: 'Legislative',
    tags: ['Lobbying', 'Ethics', 'Federal'],
  },
  {
    id: 'ban-congressional-trading',
    title: 'ETHICS Act (Ban Congressional Stock Trading)',
    description: 'Prohibits members of Congress and their immediate families from owning or trading individual stocks while in office. Multiple bills introduced in the 118th and 119th Congress.',
    status: 'In Progress',
    category: 'Legislative',
    externalUrl: 'https://www.govtrack.us/congress/bills/browse#terms=congressional+stock',
    tags: ['Congress', 'Stocks', 'Bipartisan'],
  },
  {
    id: 'truth-in-testimony',
    title: 'Truth in Testimony Disclosure Expansion',
    description: 'Requires all witnesses testifying before Congress to publicly disclose organizational funding sources \u2014 closing the dark-money loophole in expert testimony.',
    status: 'Proposed',
    category: 'Legislative',
    tags: ['Disclosure', 'Dark Money', 'Congress'],
  },
  {
    id: 'federal-anti-slapp',
    title: 'SPEAK FREE Act (Federal Anti-SLAPP)',
    description: 'Creates a federal anti-SLAPP statute protecting journalists, whistleblowers, and citizens from strategic lawsuits designed to silence accountability reporting.',
    status: 'In Progress',
    category: 'Legislative',
    externalUrl: 'https://www.rcfp.org/federal-anti-slapp-legislation/',
    tags: ['Press Freedom', 'Whistleblowers', 'Federal'],
  },
  {
    id: 'pacer-free-access',
    title: 'Open Courts Act (Free PACER Access)',
    description: 'Eliminates the per-page fee for accessing federal court records on PACER, making all federal dockets freely searchable by the public.',
    status: 'In Progress',
    category: 'Legal / Judicial',
    externalUrl: 'https://www.courtlistener.com/',
    tags: ['PACER', 'Courts', 'Open Data'],
  },
  {
    id: 'qualified-immunity-reform',
    title: 'Qualified Immunity Reform Legislation',
    description: 'Rolls back the judicially-created qualified immunity doctrine that shields government officers from civil rights lawsuits even when their conduct is clearly unlawful.',
    status: 'Proposed',
    category: 'Legal / Judicial',
    tags: ['Policing', 'Civil Rights', 'Accountability'],
  },
  {
    id: 'whistleblower-protection-expansion',
    title: 'Whistleblower Protection Expansion Act',
    description: 'Extends robust federal whistleblower protections to national security, intelligence community, and contractor employees who disclose fraud, waste, or abuse.',
    status: 'Proposed',
    category: 'Legal / Judicial',
    externalUrl: 'https://www.whistleblowers.org/',
    tags: ['Whistleblowers', 'National Security', 'Intel'],
  },
  {
    id: 'ranked-choice-voting',
    title: 'Ranked Choice Voting Expansion',
    description: 'State and municipal ballot initiatives replacing plurality voting with ranked-choice systems, reducing spoiler effects and incentivizing coalition-based governance. Active in ME, AK, NYC.',
    status: 'Active',
    category: 'Civic / Grassroots',
    externalUrl: 'https://www.fairvote.org/rcv',
    tags: ['Voting', 'Electoral Reform', 'State'],
  },
  {
    id: 'public-records-audits',
    title: 'State Public Records Compliance Audits',
    description: 'Citizen-coalition programs systematically submitting public records requests to state and local agencies, then publishing response rates to shame non-compliant offices into compliance.',
    status: 'Active',
    category: 'Civic / Grassroots',
    tags: ['FOIA', 'State', 'Citizen Action'],
  },
  {
    id: 'municipal-contract-watch',
    title: 'Corruption Watch \u2014 Local Contract Monitoring',
    description: 'Neighborhood-level watchdog networks monitoring municipal procurement, no-bid contracts, and vendor relationships between local officials and city contractors.',
    status: 'Proposed',
    category: 'Civic / Grassroots',
    tags: ['Municipal', 'Contracts', 'Community'],
  },
  {
    id: 'citizen-assembly-model',
    title: 'Citizens Assembly Anti-Corruption Model',
    description: 'Randomly selected citizen panels \u2014 used successfully in Ireland and France \u2014 empowered to propose and vote on institutional reform packages outside the captured legislative process.',
    status: 'Proposed',
    category: 'Civic / Grassroots',
    externalUrl: 'https://www.citizensassemblies.org/',
    tags: ['Democratic Reform', 'Ireland Model', 'Deliberative'],
  },
  {
    id: 'foia-improvement-reauth',
    title: 'FOIA Improvement Act Reauthorization',
    description: 'Reauthorizes and strengthens the 2016 FOIA Improvement Act \u2014 mandating 20-day agency response compliance, limiting exemption abuse, and creating an independent FOIA ombudsman with enforcement authority.',
    status: 'In Progress',
    category: 'Transparency / FOIA',
    externalUrl: 'https://www.muckrock.com/',
    tags: ['FOIA', 'Federal', 'Oversight'],
  },
  {
    id: 'beneficial-ownership-disclosure',
    title: 'Corporate Transparency Act \u2014 FinCEN Enforcement',
    description: 'Full enforcement of the Beneficial Ownership Information rule requiring LLCs and shell companies to disclose their real human owners to FinCEN \u2014 closing the anonymous shell company loophole.',
    status: 'Active',
    category: 'Transparency / FOIA',
    externalUrl: 'https://www.fincen.gov/boi',
    tags: ['Shell Companies', 'FinCEN', 'Dark Money'],
  },
  {
    id: 'contractor-disclosure',
    title: 'Federal Contractor Performance Transparency',
    description: 'Expands public access to contractor past-performance records in SAM.gov \u2014 including contract terminations, fraud findings, and debarment proceedings currently shielded from public view.',
    status: 'Proposed',
    category: 'Transparency / FOIA',
    externalUrl: 'https://sam.gov/',
    tags: ['Contracts', 'SAM.gov', 'Federal Spending'],
  },
  {
    id: 'machine-readable-lobbying',
    title: 'Machine-Readable Lobbying Disclosure Mandate',
    description: 'Requires all lobbying registrations and disclosure reports filed with the Senate and House to be published as structured, machine-readable open data \u2014 not scanned PDFs.',
    status: 'Proposed',
    category: 'Transparency / FOIA',
    tags: ['Lobbying', 'Open Data', 'Congress'],
  },
  {
    id: 'sift-method-k12',
    title: 'SIFT Method K-12 Curriculum Integration',
    description: 'Integrates the four-move SIFT framework (Stop, Investigate the source, Find better coverage, Trace claims) into mandatory K-12 civic and social studies curricula nationwide.',
    status: 'Active',
    category: 'Media Literacy',
    externalUrl: 'https://checkplease.cc/',
    tags: ['Education', 'K-12', 'Source Verification'],
  },
  {
    id: 'newsguard-browser',
    title: 'NewsGuard Credibility Rating Integration',
    description: 'Browser extension and API providing transparent, human-reviewed credibility ratings for thousands of news and information websites \u2014 surfacing ownership, funding, and accuracy records.',
    status: 'Active',
    category: 'Media Literacy',
    externalUrl: 'https://www.newsguardtech.com/',
    tags: ['Browser Tool', 'Credibility', 'News'],
  },
  {
    id: 'primary-source-literacy',
    title: 'Public Library Primary Source Literacy Initiative',
    description: 'A nationwide library program teaching citizens to access .gov documents, court filings, FOIA portals, and official databases directly \u2014 bypassing interpreted media coverage.',
    status: 'Proposed',
    category: 'Media Literacy',
    tags: ['Libraries', 'FOIA', 'Civic Education'],
  },
  {
    id: 'opensecrets-api',
    title: 'OpenSecrets Bulk Data API',
    description: 'Machine-readable, free API for all campaign finance, lobbying, and revolving door data \u2014 enabling civic developers to build accountability tools without manual data scraping.',
    status: 'Active',
    category: 'Tech / Open Source',
    externalUrl: 'https://www.opensecrets.org/open-data',
    tags: ['API', 'Campaign Finance', 'Open Data'],
  },
  {
    id: 'recap-courtlistener',
    title: 'RECAP / CourtListener Browser Extension',
    description: 'Open-source browser extension that automatically mirrors PACER documents to the free CourtListener archive the moment any user downloads them \u2014 building a freely accessible federal court record commons.',
    status: 'Active',
    category: 'Tech / Open Source',
    externalUrl: 'https://free.law/recap/',
    tags: ['PACER', 'Courts', 'Browser Extension'],
  },
  {
    id: 'open-states',
    title: 'Open States \u2014 State Legislature Tracker',
    description: 'Open-source platform tracking every bill in all 50 state legislatures in real time, with a public API. Exposes what happens at the state level that federal media ignores.',
    status: 'Active',
    category: 'Tech / Open Source',
    externalUrl: 'https://openstates.org/',
    tags: ['State Legislation', 'API', 'Open Source'],
  },
  {
    id: 'decentralized-evidence-archive',
    title: 'Decentralized Immutable Evidence Archive',
    description: 'IPFS-based distributed document storage for sensitive disclosures and government records \u2014 making evidence censorship-resistant by distributing it across thousands of nodes with no single point of failure.',
    status: 'Proposed',
    category: 'Tech / Open Source',
    tags: ['IPFS', 'Censorship-Resistant', 'Whistleblowers'],
  },
  {
    id: 'open-sanctions-db',
    title: 'OpenSanctions Global Database',
    description: 'Open-source, continuously updated database of sanctioned individuals, politically exposed persons, and known criminals \u2014 free for journalists and researchers to use without licensing fees.',
    status: 'Active',
    category: 'Tech / Open Source',
    externalUrl: 'https://www.opensanctions.org/',
    tags: ['Sanctions', 'PEPs', 'Global'],
  },
];

const CATEGORY_META_MAP = new Map(
  SOLUTION_CATEGORY_META.map(c => [c.id, c])
);

function SolutionCard({ entry, categoryMeta }: { entry: SolutionEntry; categoryMeta: SolutionCategoryMeta }) {
  const accent = categoryMeta.accent;
  const statusColor = STATUS_COLORS[entry.status];
  const borderHover = accent + '40';
  const glowColor = accent + '0d';

  return (
    <div
      className="group flex flex-col bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm p-4 transition-all duration-200"
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = borderHover;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${glowColor}`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm border flex-shrink-0"
          style={{
            color: accent,
            borderColor: accent + '33',
            backgroundColor: accent + '0d',
          }}
        >
          {entry.category}
        </span>
        <span
          className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm border flex-shrink-0"
          style={{
            color: statusColor,
            borderColor: statusColor + '33',
            backgroundColor: statusColor + '0d',
          }}
        >
          {entry.status}
        </span>
      </div>

      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors flex-1">
        {entry.title}
      </h3>

      <p className="font-mono text-[11px] text-[#666] group-hover:text-[#888] leading-relaxed mb-3 transition-colors">
        {entry.description}
      </p>

      <div className="mt-auto pt-2 border-t border-[#1a1a1a] flex items-center justify-between gap-2">
        {entry.tags && entry.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {entry.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm text-[#555] bg-[#111] border border-[#1e1e1e]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : <span />}

        {entry.externalUrl && (
          <a
            href={entry.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 font-mono text-[10px] tracking-wider transition-colors flex-shrink-0"
            style={{ color: accent + '60' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = accent}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = accent + '60'}
          >
            <ExternalLink size={9} />
            View &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

export function Solutions() {
  const [activeCategory, setActiveCategory] = useState<SolutionCategory | 'All'>('All');
  const [activeStatus, setActiveStatus] = useState<SolutionStatus | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<'alpha-asc' | 'alpha-desc' | 'status' | 'category'>('status');

  const STATUS_ORDER: Record<SolutionStatus, number> = {
    'Active': 0,
    'In Progress': 1,
    'Proposed': 2,
    'Passed': 3,
  };

  const filtered = useMemo(() => {
    return SOLUTIONS
      .filter(s => activeCategory === 'All' || s.category === activeCategory)
      .filter(s => activeStatus === 'All' || s.status === activeStatus)
      .sort((a, b) => {
        if (sortOrder === 'alpha-asc') return a.title.localeCompare(b.title);
        if (sortOrder === 'alpha-desc') return b.title.localeCompare(a.title);
        if (sortOrder === 'status') return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
        if (sortOrder === 'category') return a.category.localeCompare(b.category);
        return 0;
      });
  }, [activeCategory, activeStatus, sortOrder]);

  const activeCount = SOLUTIONS.filter(s => s.status === 'Active').length;
  const inProgressCount = SOLUTIONS.filter(s => s.status === 'In Progress').length;

  const stats = [
    { label: 'Total Solutions', value: SOLUTIONS.length, color: '#00ff41', pulse: false },
    { label: 'Active Now', value: activeCount, color: '#00ff41', pulse: true },
    { label: 'In Progress', value: inProgressCount, color: '#ffbf00', pulse: false },
    { label: 'Categories', value: SOLUTION_CATEGORY_META.length, color: '#00d9ff', pulse: false },
  ];

  const allCategories: (SolutionCategory | 'All')[] = ['All', ...SOLUTION_CATEGORY_META.map(c => c.id)];
  const allStatuses: (SolutionStatus | 'All')[] = ['All', 'Active', 'In Progress', 'Proposed', 'Passed'];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <SEOHead
        title="Solutions — Actionable Reform & Accountability Pathways"
        description="Legislative bills, legal reform efforts, FOIA tools, civic initiatives, media literacy programs, and open-source projects addressing the systemic failures documented in the archive."
        url="https://redpillbiblio.wtf/solutions"
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#0a0a0a] pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 pt-4">
            <div className="flex items-center gap-2.5 mb-2">
              <Zap size={14} className="text-[#00ff41]" />
              <span className="font-mono text-[11px] text-[#00ff41]/50 uppercase tracking-[0.3em]">Actionable</span>
            </div>
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff41] tracking-tight mb-3">
              {'> SOLUTIONS.db'}
            </h1>
            <p className="font-mono text-sm text-[#a0a0a0] max-w-2xl mb-1">
              The counterpart to the evidence. Not what's broken &mdash; what can be done.
            </p>
            <p className="font-mono text-xs text-[#666] max-w-2xl">
              Legislative pathways, legal strategies, civic tools, and open-source infrastructure for accountability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="bg-[#0d0d0d] border rounded-sm p-3 text-center"
                style={{ borderColor: stat.color + '20' }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  {stat.pulse && (
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: stat.color }}
                    />
                  )}
                  <span
                    className="font-mono text-lg font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#555] tracking-wider mt-0.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mb-8 border rounded-sm px-4 py-3 flex items-start gap-3"
            style={{ borderColor: 'rgba(0,255,65,0.12)', background: 'rgba(0,255,65,0.02)' }}
          >
            <span className="font-mono text-[10px] text-[#00ff41]/40 mt-0.5 flex-shrink-0">&blacktriangleright;</span>
            <p className="font-mono text-[11px] text-[#888] leading-relaxed">
              All solutions listed represent real legislative efforts, legal strategies, and civic tools &mdash; not opinion.
              Status reflects publicly available information as of the archive's last update.
              {' '}<span className="text-[#666]">Primary sources linked where available.</span>
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap gap-1.5">
              {allCategories.map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#00ff41]/10 border-[#00ff41]/40 text-[#00ff41]'
                        : 'bg-transparent border-[#1e1e1e] text-[#555] hover:border-[#333] hover:text-[#888]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {allStatuses.map(status => {
                const isActive = activeStatus === status;
                const statusAccent = status === 'All' ? '#00ff41' : STATUS_COLORS[status];
                return (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? ''
                        : 'bg-transparent border-[#1e1e1e] text-[#555] hover:border-[#333] hover:text-[#888]'
                    }`}
                    style={isActive ? {
                      backgroundColor: statusAccent + '1a',
                      borderColor: statusAccent + '66',
                      color: statusAccent,
                    } : undefined}
                  >
                    {status}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#444]">Sort:</span>
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value as typeof sortOrder)}
                className="font-mono text-[10px] uppercase bg-[#0d0d0d] border border-[#1e1e1e] text-[#888] px-2 py-1 rounded-sm cursor-pointer focus:outline-none focus:border-[#00ff41]/30"
              >
                <option value="status">Sort: Status</option>
                <option value="alpha-asc">Sort: A &rarr; Z</option>
                <option value="alpha-desc">Sort: Z &rarr; A</option>
                <option value="category">Sort: Category</option>
              </select>
            </div>
          </div>

          <p className="font-mono text-[10px] text-[#666] mb-4">
            Showing <span className="text-[#00ff41]">{filtered.length}</span> of{' '}
            <span className="text-[#888]">{SOLUTIONS.length}</span> solutions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.length > 0 ? (
              filtered.map(entry => (
                <SolutionCard
                  key={entry.id}
                  entry={entry}
                  categoryMeta={CATEGORY_META_MAP.get(entry.category)!}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <span className="font-mono text-[#1e1e1e] text-4xl mb-4">&empty;</span>
                <p className="font-mono text-[11px] text-[#666]">No solutions match the current filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActiveStatus('All'); }}
                  className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#00ff41]/50 border border-[#00ff41]/20 px-3 py-1.5 rounded-sm hover:bg-[#00ff41]/5 hover:text-[#00ff41]/80 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          <section className="mt-14 border-t border-[#1a1a1a] pt-10">
            <div className="border border-[#00ff41]/15 rounded-sm p-6 bg-[#00ff41]/[0.02]">
              <h2 className="font-mono text-xl font-bold text-[#00ff41] tracking-tight mb-3">
                {'> SUBMIT_A_SOLUTION'}
              </h2>
              <p className="font-mono text-[11px] text-[#888] max-w-xl leading-relaxed mb-5">
                Know of a legislative effort, legal strategy, or civic tool not listed here?
                Submit it for review. Primary sources required &mdash; opinion pieces and petitions are not accepted.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/submit"
                  className="font-mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-sm border border-[#00ff41]/30 text-[#00ff41]/70 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-150"
                >
                  Submit a Solution &rarr;
                </a>
                <a
                  href="mailto:submit@redpillbiblio.wtf?subject=Solution Submission"
                  className="font-mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-sm border border-[#1e1e1e] text-[#666] hover:border-[#444] hover:text-[#888] transition-all duration-150"
                >
                  Email Submission
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Solutions;
