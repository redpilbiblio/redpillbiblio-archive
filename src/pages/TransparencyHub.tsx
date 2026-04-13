import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ExternalLink, Radio, ChevronDown, ChevronRight, Monitor, Plus } from 'lucide-react';
import { addMonitor, DOCKING_MAX } from '@/lib/dockingStation';

interface TrackerEntry {
  title: string;
  description: string;
  url: string;
  badge: string;
  accent: string;
  tags?: string[];
}

interface TrackerCategory {
  id: string;
  label: string;
  description: string;
  accent: string;
  entries: TrackerEntry[];
}

const CATEGORIES: TrackerCategory[] = [
  {
    id: 'congressional',
    label: 'Congressional & Political Finance',
    description: 'Track what Congress buys, sells, and who funds their campaigns.',
    accent: '#00ff41',
    entries: [
      {
        title: 'Capitol Trades — Congress Stock Trades',
        description: 'Every STOCK Act trade filed by members of Congress in real time. Filter by politician, sector, or ticker.',
        url: 'https://www.capitoltrades.com/trades',
        badge: 'Capitol Trades',
        accent: '#00ff41',
        tags: ['Congress', 'Stocks', 'STOCK Act'],
      },
      {
        title: 'Quiver Quant — Congress Trading Dashboard',
        description: 'Live leaderboards, P&L performance tracking, and unusual activity alerts for congressional trades.',
        url: 'https://www.quiverquant.com/congresstrading/',
        badge: 'Quiver Quant',
        accent: '#00ff41',
        tags: ['Congress', 'Stocks', 'Analytics'],
      },
      {
        title: 'Unusual Whales — Politics',
        description: 'Real-time political trading alerts, lobbying overlaps, and dark pool cross-reference.',
        url: 'https://unusualwhales.com/politics',
        badge: 'Unusual Whales',
        accent: '#ffbf00',
        tags: ['Congress', 'Alerts', 'Dark Pool'],
      },
      {
        title: 'OpenSecrets — Follow the Money',
        description: 'Comprehensive lobbying database, campaign finance, PAC donor maps, and politician net worth disclosures.',
        url: 'https://www.opensecrets.org/',
        badge: 'OpenSecrets',
        accent: '#ffbf00',
        tags: ['Lobbying', 'Campaign Finance', 'PACs'],
      },
      {
        title: 'FEC — Campaign Finance Disclosures',
        description: 'Official Federal Election Commission database. Every dollar donated to every federal candidate and PAC.',
        url: 'https://www.fec.gov/data/',
        badge: 'FEC.gov',
        accent: '#00ff41',
        tags: ['Official', 'Donations', 'PACs'],
      },
      {
        title: 'GovTrack — Live Legislation Tracker',
        description: 'Real-time status of every bill in Congress, full voting records, and probability-of-passage scoring.',
        url: 'https://www.govtrack.us/',
        badge: 'GovTrack',
        accent: '#00ff41',
        tags: ['Bills', 'Voting Records'],
      },
    ],
  },
  {
    id: 'federal-spending',
    label: 'Federal Spending & Contracts',
    description: 'Where your tax dollars go — contracts, grants, and government vendor relationships.',
    accent: '#00d9ff',
    entries: [
      {
        title: 'USAspending.gov — Federal Expenditures',
        description: 'Official federal spending database. Every contract, grant, and loan. Search by agency, contractor, or location.',
        url: 'https://www.usaspending.gov/',
        badge: 'USAspending',
        accent: '#00d9ff',
        tags: ['Official', 'Contracts', 'Grants'],
      },
      {
        title: 'SAM.gov — Federal Contract Awards',
        description: 'System for Award Management. Who wins government contracts and for how much.',
        url: 'https://sam.gov/content/contract-data',
        badge: 'SAM.gov',
        accent: '#00d9ff',
        tags: ['Official', 'Contracts'],
      },
      {
        title: 'POGO — Project on Government Oversight',
        description: 'Independent watchdog tracking waste, fraud, and abuse in federal contracting and defense spending.',
        url: 'https://www.pogo.org/',
        badge: 'POGO',
        accent: '#ffbf00',
        tags: ['Watchdog', 'Defense', 'Fraud'],
      },
      {
        title: 'GovTribe — Defense Contract Intelligence',
        description: 'Real-time federal contract awards, agency budgets, and contractor market share analytics.',
        url: 'https://govtribe.com/',
        badge: 'GovTribe',
        accent: '#00d9ff',
        tags: ['Defense', 'Contracts', 'Analytics'],
      },
    ],
  },
  {
    id: 'corporate-power',
    label: 'Corporate Power & Revolving Door',
    description: 'Map the networks that connect government, corporations, and billionaires.',
    accent: '#ff8800',
    entries: [
      {
        title: 'LittleSis — Power Network Mapping',
        description: 'Crowdsourced relationship map of politicians, corporations, billionaires, and think tanks. Follow the money trails.',
        url: 'https://littlesis.org/',
        badge: 'LittleSis',
        accent: '#ff8800',
        tags: ['Networks', 'Corporations', 'Billionaires'],
      },
      {
        title: 'ProPublica Nonprofit Explorer',
        description: 'Search IRS 990 filings for every nonprofit in America. See executive salaries, donor relationships, and revenue.',
        url: 'https://projects.propublica.org/nonprofits/',
        badge: 'ProPublica',
        accent: '#ff8800',
        tags: ['Nonprofits', 'IRS', '990 Filings'],
      },
      {
        title: 'SEC EDGAR — Corporate Filings',
        description: 'Official SEC database. Every 10-K, proxy statement, insider trade (Form 4), and corporate disclosure.',
        url: 'https://www.sec.gov/cgi-bin/browse-edgar',
        badge: 'SEC EDGAR',
        accent: '#ffbf00',
        tags: ['Official', 'Insider Trades', 'SEC'],
      },
      {
        title: 'InfluenceMap — Corporate Climate Lobbying',
        description: 'Track corporate lobbying against climate legislation. Who funds denial and who benefits.',
        url: 'https://influencemap.org/',
        badge: 'InfluenceMap',
        accent: '#ff8800',
        tags: ['Lobbying', 'Climate', 'Corporations'],
      },
      {
        title: 'Corporate Europe Observatory',
        description: 'Investigative watchdog tracking corporate lobbying of EU institutions and the revolving door in Brussels.',
        url: 'https://corporateeurope.org/',
        badge: 'CEO',
        accent: '#ff8800',
        tags: ['EU', 'Lobbying', 'Revolving Door'],
      },
    ],
  },
  {
    id: 'foia-documents',
    label: 'FOIA & Declassified Documents',
    description: 'Government documents forced into the open — FOIA requests, court releases, and declassified files.',
    accent: '#ff4444',
    entries: [
      {
        title: 'MuckRock — Active FOIA Releases',
        description: 'Crowdsourced FOIA request platform. Browse thousands of newly released government documents.',
        url: 'https://www.muckrock.com/',
        badge: 'MuckRock',
        accent: '#ff4444',
        tags: ['FOIA', 'Documents', 'Government'],
      },
      {
        title: 'DocumentCloud — Primary Source Archive',
        description: 'Hosted primary source documents used by investigative journalists. Search across millions of pages.',
        url: 'https://www.documentcloud.org/app',
        badge: 'DocumentCloud',
        accent: '#ff4444',
        tags: ['Documents', 'Journalism', 'Archive'],
      },
      {
        title: 'The Black Vault — Government Secrets',
        description: 'One of the largest collections of FOIA-released government documents. UFO files, CIA, NSA, and more.',
        url: 'https://www.theblackvault.com/',
        badge: 'Black Vault',
        accent: '#ff4444',
        tags: ['FOIA', 'CIA', 'NSA', 'Declassified'],
      },
      {
        title: 'CIA FOIA Reading Room',
        description: 'Official CIA declassified document database. Millions of pages released under FOIA.',
        url: 'https://www.cia.gov/readingroom/',
        badge: 'CIA.gov',
        accent: '#ff4444',
        tags: ['Official', 'CIA', 'Declassified'],
      },
      {
        title: 'FBI Records Vault',
        description: 'Official FBI FOIA releases. Historical and ongoing investigations, organized crime, surveillance programs.',
        url: 'https://vault.fbi.gov/',
        badge: 'FBI Vault',
        accent: '#ff4444',
        tags: ['Official', 'FBI', 'FOIA'],
      },
    ],
  },
  {
    id: 'financial-surveillance',
    label: 'Financial Crimes & Surveillance',
    description: 'Follow dark money, sanctions evasion, and financial crimes through official databases.',
    accent: '#ffbf00',
    entries: [
      {
        title: 'FinCEN — Financial Crimes Database',
        description: 'Treasury Department\'s Financial Crimes Enforcement Network. Suspicious Activity Reports and Bank Secrecy Act data.',
        url: 'https://www.fincen.gov/reports',
        badge: 'FinCEN',
        accent: '#ffbf00',
        tags: ['Official', 'Money Laundering', 'Treasury'],
      },
      {
        title: 'OFAC Sanctions List',
        description: 'Treasury Department\'s list of sanctioned individuals, entities, and countries. Updated in real time.',
        url: 'https://sanctionssearch.ofac.treas.gov/',
        badge: 'OFAC',
        accent: '#ffbf00',
        tags: ['Official', 'Sanctions', 'Treasury'],
      },
      {
        title: 'ICIJ Offshore Leaks Database',
        description: 'Search the Panama Papers, Pandora Papers, and Paradise Papers. Offshore accounts and shell company networks.',
        url: 'https://offshoreleaks.icij.org/',
        badge: 'ICIJ',
        accent: '#ff4444',
        tags: ['Panama Papers', 'Pandora Papers', 'Offshore'],
      },
      {
        title: 'Global Financial Integrity',
        description: 'Research on illicit financial flows, trade misinvoicing, and cross-border money laundering.',
        url: 'https://gfintegrity.org/',
        badge: 'GFI',
        accent: '#ffbf00',
        tags: ['Dark Money', 'Trade Fraud', 'Research'],
      },
    ],
  },
  {
    id: 'court-records',
    label: 'Court Records & Legal Proceedings',
    description: 'Active cases, federal court dockets, and legal proceedings against powerful actors.',
    accent: '#a855f7',
    entries: [
      {
        title: 'PACER — Federal Court Records',
        description: 'Official federal court case management system. Access to all federal civil, criminal, and appellate dockets.',
        url: 'https://pacer.uscourts.gov/',
        badge: 'PACER',
        accent: '#a855f7',
        tags: ['Official', 'Federal Courts', 'Dockets'],
      },
      {
        title: 'CourtListener — Free Legal Research',
        description: 'Free access to millions of court opinions, oral arguments, and federal dockets. Alerts for case updates.',
        url: 'https://www.courtlistener.com/',
        badge: 'CourtListener',
        accent: '#a855f7',
        tags: ['Court Opinions', 'RECAP', 'Free'],
      },
      {
        title: 'DOJ Press Releases — Active Cases',
        description: 'Official Department of Justice press releases for every indictment, conviction, and sentencing.',
        url: 'https://www.justice.gov/news',
        badge: 'DOJ.gov',
        accent: '#a855f7',
        tags: ['Official', 'Indictments', 'Convictions'],
      },
      {
        title: 'Law360 — Federal Case Tracker',
        description: 'Track major federal cases in real time — white collar crime, antitrust, securities fraud.',
        url: 'https://www.law360.com/',
        badge: 'Law360',
        accent: '#a855f7',
        tags: ['White Collar', 'Antitrust', 'Cases'],
      },
    ],
  },
  {
    id: 'investigative-journalism',
    label: 'Investigative Journalism',
    description: 'The outlets doing the work that matters. Funded by readers, not billionaires.',
    accent: '#00d9ff',
    entries: [
      {
        title: 'ProPublica — Independent Newsroom',
        description: 'Pulitzer Prize-winning nonprofit investigative journalism. Health, finance, government, and accountability.',
        url: 'https://www.propublica.org/',
        badge: 'ProPublica',
        accent: '#00d9ff',
        tags: ['Journalism', 'Nonprofit', 'Investigations'],
      },
      {
        title: 'The Intercept',
        description: 'Adversarial journalism covering national security, surveillance, government corruption, and corporate power.',
        url: 'https://theintercept.com/',
        badge: 'The Intercept',
        accent: '#00d9ff',
        tags: ['NSA', 'Surveillance', 'Investigations'],
      },
      {
        title: 'ICIJ — International Consortium of Investigative Journalists',
        description: 'The global network behind Panama Papers, Pandora Papers, and FinCEN Files investigations.',
        url: 'https://www.icij.org/',
        badge: 'ICIJ',
        accent: '#00d9ff',
        tags: ['Global', 'Finance', 'Corruption'],
      },
      {
        title: 'Bellingcat — Open Source Investigation',
        description: 'Open source intelligence investigations into war crimes, disinformation, and state-sponsored activity.',
        url: 'https://www.bellingcat.com/',
        badge: 'Bellingcat',
        accent: '#ffbf00',
        tags: ['OSINT', 'War Crimes', 'Disinfo'],
      },
      {
        title: 'The Marshall Project — Criminal Justice',
        description: 'Nonpartisan, nonprofit journalism about criminal justice, policing, mass incarceration, and legal accountability.',
        url: 'https://www.themarshallproject.org/',
        badge: 'Marshall Project',
        accent: '#00d9ff',
        tags: ['Criminal Justice', 'Prisons', 'Police'],
      },
    ],
  },
];

type DockToast = { msg: string; kind: 'success' | 'warn' | 'info' } | null;

function ExternalTrackerCard({ entry, onDockToast }: { entry: TrackerEntry; onDockToast: (t: DockToast) => void }) {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const isGreen = entry.accent === '#00ff41';
  const isCyan = entry.accent === '#00d9ff';
  const isAmber = entry.accent === '#ffbf00';
  const isRed = entry.accent === '#ff4444';
  const isOrange = entry.accent === '#ff8800';
  const isPurple = entry.accent === '#a855f7';

  const borderActive = isGreen ? 'rgba(0,255,65,0.25)' : isCyan ? 'rgba(0,217,255,0.25)' : isAmber ? 'rgba(255,191,0,0.25)' : isRed ? 'rgba(255,68,68,0.25)' : isOrange ? 'rgba(255,136,0,0.25)' : isPurple ? 'rgba(168,85,247,0.25)' : 'rgba(255,255,255,0.15)';
  const bgBadge = isGreen ? 'rgba(0,255,65,0.05)' : isCyan ? 'rgba(0,217,255,0.05)' : isAmber ? 'rgba(255,191,0,0.05)' : isRed ? 'rgba(255,68,68,0.05)' : isOrange ? 'rgba(255,136,0,0.05)' : isPurple ? 'rgba(168,85,247,0.05)' : 'rgba(255,255,255,0.05)';

  const handleAddToDock = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const result = addMonitor(entry.url, entry.title);
    if (result === 'full') {
      onDockToast({ msg: `Docking Station is full (max ${DOCKING_MAX})`, kind: 'warn' });
    } else if (result === 'duplicate') {
      onDockToast({ msg: `${entry.title} is already in your Docking Station`, kind: 'info' });
    } else {
      setAdded(true);
      onDockToast({ msg: `${entry.title} added to Docking Station`, kind: 'success' });
      setTimeout(() => setAdded(false), 3000);
    }
  };

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm p-4 transition-all duration-200 no-underline focus:outline-none"
      style={{ '--hover-border': borderActive } as React.CSSProperties}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = borderActive;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${entry.accent}0d`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e1e1e';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border"
          style={{
            color: entry.accent,
            borderColor: bgBadge.replace('0.05', '0.2'),
            backgroundColor: bgBadge,
          }}
        >
          {entry.badge}
        </span>
        <ExternalLink
          size={11}
          className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity"
          style={{ color: entry.accent }}
        />
      </div>

      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors flex-1">
        {entry.title}
      </h3>

      <p className="font-mono text-[11px] text-[#444] group-hover:text-[#555] leading-relaxed mb-3 transition-colors">
        {entry.description}
      </p>

      <div className="mt-auto pt-2 border-t border-[#1a1a1a] flex items-center justify-between gap-2">
        {entry.tags ? (
          <div className="flex flex-wrap gap-1">
            {entry.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm text-[#555] bg-[#111] border border-[#222]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : <span />}

        <button
          onClick={handleAddToDock}
          title="Add to Docking Station"
          className="flex items-center gap-1 px-2 py-1 rounded-sm font-mono text-[9px] uppercase tracking-wider transition-all shrink-0 border"
          style={added ? {
            background: 'rgba(0,255,159,0.12)',
            borderColor: 'rgba(0,255,159,0.35)',
            color: '#00ff9f',
          } : {
            background: 'transparent',
            borderColor: 'rgba(0,255,159,0.15)',
            color: 'rgba(0,255,159,0.5)',
          }}
          onMouseEnter={e => {
            if (!added) {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,255,159,0.08)';
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,255,159,0.8)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,255,159,0.3)';
            }
          }}
          onMouseLeave={e => {
            if (!added) {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,255,159,0.5)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,255,159,0.15)';
            }
          }}
        >
          {added ? (
            <Monitor size={9} />
          ) : (
            <Plus size={9} />
          )}
          {added ? 'Added' : 'Dock'}
        </button>
      </div>
    </a>
  );
}

function CategorySection({
  category,
  defaultOpen,
  onDockToast,
}: {
  category: TrackerCategory;
  defaultOpen?: boolean;
  onDockToast: (t: DockToast) => void;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <section>
      <button
        onClick={() => setIsOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-sm border transition-all duration-200 text-left group"
        style={{
          background: '#0d0d0d',
          borderColor: isOpen ? `${category.accent}40` : '#1e1e1e',
          borderTopColor: category.accent,
          borderTopWidth: '2px',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="font-mono text-[10px] font-bold tracking-widest flex-shrink-0"
            style={{ color: category.accent }}
          >
            {isOpen ? '▼' : '▶'}
          </span>
          <div className="min-w-0">
            <h2
              className="font-mono text-sm sm:text-base font-bold tracking-wide"
              style={{ color: category.accent }}
            >
              {category.label.toUpperCase()}
            </h2>
            <p className="font-mono text-[11px] text-[#555] mt-0.5 truncate">{category.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-sm border"
            style={{
              color: `${category.accent}99`,
              borderColor: `${category.accent}30`,
              background: `${category.accent}0a`,
            }}
          >
            {category.entries.length} trackers
          </span>
          {isOpen ? (
            <ChevronDown size={16} style={{ color: category.accent }} />
          ) : (
            <ChevronRight size={16} style={{ color: `${category.accent}66` }} />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          className="border border-t-0 rounded-b-sm p-4"
          style={{ borderColor: `${category.accent}30`, background: '#080808' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.entries.map(entry => (
              <ExternalTrackerCard key={entry.url} entry={entry} onDockToast={onDockToast} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const POWER_TOOLS: Array<{ title: string; description: string; url: string; badge: string }> = [
  {
    title: 'The Black Vault',
    description: 'FOIA-obtained declassified files on secretive programs and government documents spanning decades.',
    url: 'https://www.theblackvault.com/',
    badge: 'theblackvault.com',
  },
  {
    title: 'GovernmentAttic',
    description: 'Thousands of actual released FOIA responses archived straight from federal agencies.',
    url: 'https://www.governmentattic.org/',
    badge: 'governmentattic.org',
  },
  {
    title: 'Violation Tracker',
    description: 'Every corporate fine and penalty ever issued by federal and state regulators.',
    url: 'https://violationtracker.goodjobsfirst.org/',
    badge: 'goodjobsfirst.org',
  },
  {
    title: 'TRAC',
    description: 'Federal prosecution statistics broken down by agency — raw enforcement data.',
    url: 'https://trac.syr.edu/',
    badge: 'trac.syr.edu',
  },
  {
    title: 'CorpWatch',
    description: 'Multinational corporations held to human rights account through investigative reporting.',
    url: 'https://www.corpwatch.org/',
    badge: 'corpwatch.org',
  },
  {
    title: 'Subsidy Tracker',
    description: 'Every government subsidy paid to US corporations — searchable and transparent.',
    url: 'https://subsidytracker.goodjobsfirst.org/',
    badge: 'goodjobsfirst.org',
  },
  {
    title: 'MapLight',
    description: 'Donor money connected directly to legislative votes and political influence.',
    url: 'https://maplight.org/',
    badge: 'maplight.org',
  },
  {
    title: 'POGO',
    description: 'Waste, fraud, and abuse inside the US government exposed through independent investigations.',
    url: 'https://pogo.org/',
    badge: 'pogo.org',
  },
  {
    title: 'American Oversight',
    description: 'Litigation enforcing public access to government records and documents.',
    url: 'https://www.americanoversight.org/',
    badge: 'americanoversight.org',
  },
  {
    title: 'CourtListener',
    description: 'Free archive of every US court opinion and millions of legal filings.',
    url: 'https://www.courtlistener.com/',
    badge: 'courtlistener.com',
  },
  {
    title: 'JudyRecords',
    description: 'Over one billion searchable US court records from federal and state courts.',
    url: 'https://judyrecords.com/',
    badge: 'judyrecords.com',
  },
  {
    title: 'Justia',
    description: 'Free US federal and state case law access with primary legal documents.',
    url: 'https://www.justia.com/',
    badge: 'justia.com',
  },
  {
    title: 'OpenSanctions',
    description: 'Global database of sanctioned and politically exposed persons and companies.',
    url: 'https://www.opensanctions.org/',
    badge: 'opensanctions.org',
  },
  {
    title: 'OCCRP',
    description: 'Organized crime and corruption investigations globally with raw source data.',
    url: 'https://www.occrp.org/',
    badge: 'occrp.org',
  },
  {
    title: 'GIJN',
    description: 'Investigative journalists sharing tools and findings worldwide.',
    url: 'https://gijn.org/',
    badge: 'gijn.org',
  },
  {
    title: 'Forbidden Stories',
    description: 'Continues the work of journalists who were silenced or threatened.',
    url: 'https://forbiddenstories.org/',
    badge: 'forbiddenstories.org',
  },
  {
    title: 'Bellingcat',
    description: 'Open-source investigations exposing war crimes and global power abuses.',
    url: 'https://www.bellingcat.com/',
    badge: 'bellingcat.com',
  },
  {
    title: 'InfluenceMap',
    description: 'Real corporate climate lobbying positions scored transparently.',
    url: 'https://influencemap.org/',
    badge: 'influencemap.org',
  },
  {
    title: 'BankTrack',
    description: 'Banks financing harmful projects tracked and exposed.',
    url: 'https://www.banktrack.org/',
    badge: 'banktrack.org',
  },
  {
    title: 'Global Witness',
    description: 'Corruption connecting natural resources to political power worldwide.',
    url: 'https://www.globalwitness.org/',
    badge: 'globalwitness.org',
  },
  {
    title: 'EarthRights',
    description: 'Corporations complicit in human rights abuses investigated and documented.',
    url: 'https://earthrights.org/',
    badge: 'earthrights.org',
  },
  {
    title: 'Revenue Watch (now NRGI)',
    description: 'Government revenues from oil, gas, and mining tracked and exposed.',
    url: 'https://resourcegovernance.org/',
    badge: 'resourcegovernance.org',
  },
  {
    title: 'Land Matrix',
    description: 'Global large-scale land acquisitions database mapped publicly.',
    url: 'https://landmatrix.org/',
    badge: 'landmatrix.org',
  },
  {
    title: 'Declassified UK',
    description: 'Secret UK government activities investigated and published.',
    url: 'https://www.declassifieduk.org/',
    badge: 'declassifieduk.org',
  },
  {
    title: 'Corporate Europe Observatory',
    description: 'EU corporate lobbying influence tracked and exposed.',
    url: 'https://corporateeurope.org/',
    badge: 'corporateeurope.org',
  },
  {
    title: 'Center for Public Integrity',
    description: 'Behind-closed-doors government abuses investigated deeply.',
    url: 'https://publicintegrity.org/',
    badge: 'publicintegrity.org',
  },
  {
    title: 'Who Owns What',
    description: 'Find who really owns any building or property (NYC-focused but expandable).',
    url: 'https://whoownswhat.org/',
    badge: 'whoownswhat.org',
  },
  {
    title: 'Open Syllabus',
    description: 'What universities actually teach revealed through syllabi data.',
    url: 'https://opensyllabus.org/',
    badge: 'opensyllabus.org',
  },
  {
    title: 'Sqoop',
    description: 'Search millions of government documents and filings at scale.',
    url: 'https://sqoop.com/',
    badge: 'sqoop.com',
  },
];

function PowerToolCard({ card }: { card: typeof POWER_TOOLS[0] }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm p-4 transition-all duration-200 no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ffbf00]/40"
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,191,0,0.25)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 18px rgba(255,191,0,0.05)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e1e1e';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border border-[#ffbf00]/20 bg-[#ffbf00]/[0.04] text-[#ffbf00]/70">
          {card.badge}
        </span>
        <ExternalLink
          size={11}
          className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-50 transition-opacity text-[#ffbf00]"
        />
      </div>

      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors flex-1">
        {card.title}
      </h3>

      <p className="font-mono text-[11px] text-[#444] group-hover:text-[#555] leading-relaxed mb-4 transition-colors flex-1">
        {card.description}
      </p>

      <div className="mt-auto pt-3 border-t border-[#1a1a1a]">
        <span className="font-mono text-[10px] text-[#ffbf00]/50 group-hover:text-[#ffbf00]/80 transition-colors tracking-wider">
          View &rarr;
        </span>
      </div>
    </a>
  );
}

export function TransparencyHub() {
  const navigate = useNavigate();
  const totalTrackers = CATEGORIES.reduce((sum, c) => sum + c.entries.length, 0);
  const [dockToast, setDockToast] = useState<DockToast>(null);

  const handleDockToast = useCallback((t: DockToast) => {
    setDockToast(t);
    setTimeout(() => setDockToast(null), 3000);
  }, []);

  return (
    <>
      <SEOHead
        title="Live Transparency Hub — Power Tools, FOIA, Courts &amp; Global Corruption Trackers"
        description="Real-time power trackers — congressional trades, federal spending, FOIA releases, court records, financial crimes, investigative journalism, and 29 additional transparency power tools. Watch the machine operate live."
        url="https://redpillbiblio.wtf/trackers/transparency-hub"
      />
      <Navigation />

      {/* Dock toast */}
      {dockToast && (
        <div
          className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 rounded-sm border font-mono text-[11px] shadow-2xl transition-all"
          style={
            dockToast.kind === 'success'
              ? { background: '#071a0f', borderColor: 'rgba(0,255,159,0.4)', color: '#00ff9f' }
              : dockToast.kind === 'warn'
              ? { background: '#1a1200', borderColor: 'rgba(255,191,0,0.4)', color: '#ffbf00' }
              : { background: '#0a0a0a', borderColor: 'rgba(100,100,100,0.3)', color: '#888' }
          }
        >
          <Monitor size={12} className="shrink-0" />
          <span>{dockToast.msg}</span>
          {dockToast.kind === 'success' && (
            <button
              onClick={() => navigate('/trackers/docking-station')}
              className="ml-2 px-2 py-0.5 rounded-sm border border-[#00ff9f]/30 text-[#00ff9f]/70 hover:text-[#00ff9f] hover:bg-[#00ff9f]/10 transition-colors text-[10px]"
            >
              View
            </button>
          )}
        </div>
      )}

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[#0a0a0a] pt-20 pb-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 pt-4">
            <div className="flex items-center gap-2.5 mb-2">
              <Radio size={14} className="text-[#00ff41]" />
              <span className="font-mono text-[11px] text-[#00ff41]/50 uppercase tracking-[0.3em]">Live Data</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse flex-shrink-0" />
            </div>
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff41] tracking-tight mb-3">
              {'> LIVE_TRANSPARENCY_HUB'}
            </h1>
            <p className="font-mono text-sm text-[#555] max-w-2xl mb-1">
              Real-Time Power Trackers — Watch the machine operate live.
            </p>
            <p className="font-mono text-xs text-[#444] max-w-2xl">
              Primary government and official data sources. No spin. You decide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Categories', value: String(CATEGORIES.length), color: '#00ff41' },
              { label: 'Trackers', value: String(totalTrackers), color: '#00d9ff' },
              { label: 'Primary Sources', value: 'Only', color: '#ffbf00' },
              { label: 'Status', value: 'LIVE', color: '#00ff41', pulse: true },
            ].map(stat => (
              <div
                key={stat.label}
                className="border rounded-sm p-3 text-center"
                style={{ background: '#0d0d0d', borderColor: `${stat.color}20` }}
              >
                <div
                  className="font-mono text-lg font-bold flex items-center justify-center gap-1.5"
                  style={{ color: stat.color }}
                >
                  {stat.pulse && <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />}
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-[#555] tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="mb-8 border rounded-sm px-4 py-3 flex items-start gap-3"
            style={{ borderColor: 'rgba(0,255,65,0.12)', background: 'rgba(0,255,65,0.02)' }}
          >
            <span className="font-mono text-[10px] text-[#00ff41]/40 mt-0.5 flex-shrink-0">▸</span>
            <p className="font-mono text-[11px] text-[#444] leading-relaxed">
              All linked resources are official government databases, primary-source repositories, or established watchdog organizations.
              No affiliate links. No ads. Connect the dots yourself — live.{' '}
              <span className="text-[#555]">Click any category to expand its trackers.</span>
            </p>
          </div>

          <div className="space-y-3">
            {CATEGORIES.map((cat, i) => (
              <CategorySection key={cat.id} category={cat} defaultOpen={i === 0} onDockToast={handleDockToast} />
            ))}
          </div>

          <section className="mt-14" aria-labelledby="power-tools-heading">
            <div className="mb-2">
              <h2
                id="power-tools-heading"
                className="font-mono text-xl sm:text-2xl font-bold text-[#ffbf00] tracking-tight mb-3"
              >
                {'> ADDITIONAL TRANSPARENCY POWER TOOLS'}
              </h2>
              <p className="font-mono text-sm text-[#555] max-w-2xl mb-1">
                More raw FOIA, court, corporate accountability, and global corruption trackers the machine hopes you never find.
              </p>
            </div>

            <div
              className="mb-8 mt-5 border rounded-sm px-4 py-3 flex items-start gap-3"
              style={{ borderColor: 'rgba(255,191,0,0.12)', background: 'rgba(255,191,0,0.02)' }}
            >
              <span className="font-mono text-[10px] text-[#ffbf00]/40 mt-0.5 flex-shrink-0 select-none">▸</span>
              <p className="font-mono text-[11px] text-[#4a4a4a] leading-relaxed">
                These are additional primary-source tools from trusted investigative and data organizations. All links open in new tab.{' '}
                <span className="text-[#555]">Connect the dots yourself.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {POWER_TOOLS.map(card => (
                <PowerToolCard key={card.url} card={card} />
              ))}
            </div>
          </section>

          <div
            className="mt-12 border rounded-sm px-4 py-3"
            style={{ borderColor: '#1a1a1a', background: '#0a0a0a' }}
          >
            <p className="font-mono text-xs text-[#444] leading-relaxed">
              <span className="text-[#ff4444]/60">NOTICE:</span> External links open in a new tab. We do not control or endorse the content of third-party sites.
              All resources listed are publicly accessible and regularly used by journalists, researchers, and accountability organizations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TransparencyHub;
