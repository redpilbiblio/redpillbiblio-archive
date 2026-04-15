import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ExternalLink, Archive, Globe } from 'lucide-react';

interface ArchiveCard {
  title: string;
  description: string;
  url: string;
  badge: string;
}

type RegionalStatus = 'DEBUNKED' | 'UNRESOLVED' | 'DOCUMENTED';

interface RegionalEntry {
  id: string;
  region: string;
  title: string;
  summary: string;
  status: RegionalStatus;
  citations: string[];
}

const REGIONAL_STATUS_COLORS: Record<RegionalStatus, string> = {
  'DEBUNKED':    '#ff4444',
  'UNRESOLVED':  '#ffbf00',
  'DOCUMENTED':  '#00ff41',
};

const REGIONAL_ENTRIES: RegionalEntry[] = [
  {
    id: 'pre-maori-settlement',
    region: 'New Zealand',
    title: 'Pre-Māori Settlement Theories',
    summary: 'Colonial pseudohistory claiming Celts, Egyptians, or "red-haired giants" preceded Māori in Aotearoa. Used politically to undermine Treaty of Waitangi settlements. Debunked by archaeologists — Polynesian settlement dated 1250–1300 CE via Pacific rat DNA analysis (Wilmshurst et al., PNAS, 2008). Key artifacts: Martin Doutré, Ancient Celtic New Zealand (1999); Kaimanawa Wall — confirmed natural ignimbrite formation by NZ Skeptics Journal (Ritchie, 1996); TVNZ pulled documentary Skeletons in the Cupboard (2018) after RNZ Mediawatch called it pseudo-science. Moriori sub-myth — debunked: Moriori are distinct Polynesian settlers of Rēkohu (Chathams), not mainland victims of Māori (Te Ara Encyclopedia of NZ, 2004). Status: DEBUNKED — academic consensus, no credible physical evidence.',
    status: 'DEBUNKED',
    citations: [
      'Wilmshurst, Janet M., et al. "Dating the Late Prehistoric Dispersal of Polynesians to New Zealand." PNAS, vol. 105, no. 22, 2008.',
      'Mills, Keri. "The Moriori Myth." The Spinoff, 3 Aug. 2018.',
      'Rose, Jeremy. "TVNZ Pulls Doco Peddling Pre-Māori Pseudo-Science." The Spinoff, 18 Aug. 2018.',
    ],
  },
  {
    id: 'all-blacks-1995-poisoning',
    region: 'New Zealand / South Africa',
    title: 'All Blacks 1995 Rugby World Cup Poisoning',
    summary: '27 of 35 All Blacks touring party fell severely ill before the 1995 RWC Final (NZ lost 15–12 to South Africa). Coach Laurie Mains alleged deliberate poisoning by "Suzie the waitress" — hotel exec Tony Rubin (2003) said no such person existed and players had secretly eaten off-site. Nelson Mandela\'s chief bodyguard Rory Steyn (2016) publicly stated he was "certain" of deliberate sabotage via the water supply, citing betting syndicates. Manager Colin Meads attributed illness to contaminated milk. Captain Sean Fitzpatrick said the loss was not solely due to illness. Zinzan Brooke (2024) confirmed poisoning was real but outcome undetermined. Status: UNRESOLVED — food poisoning confirmed; deliberate sabotage unproven, no charges filed.',
    status: 'UNRESOLVED',
    citations: [
      'ESPN. "Meads Lifts Lid on Suzie Myth." ESPN Rugby, 10 June 2008.',
      'NDTV Sports. "Nelson Mandela Guard Says NZ Rugby Team Were Poisoned." 4 May 2016.',
      'Planet Rugby. "Zinzan Brooke on 1995 Final." 7 Nov. 2024.',
    ],
  },
  {
    id: 'kaikoura-lights-1978',
    region: 'New Zealand',
    title: 'Kaikōura Lights (1978 UFO Sightings)',
    summary: 'Series of UFO sightings over Kaikōura, South Island NZ. First incident: 21 Dec 1978 — Safe Air cargo pilots Vern Powell and Ian Pirie reported lights surrounding their aircraft; simultaneously tracked on Wellington Airport radar with corroborating ground witnesses. Second incident: 30 Dec 1978 — Australian TV crew (reporter Quentin Fogarty, cameraman David Crockett) filmed luminous objects on an Argosy freighter flight; objects simultaneously tracked on aircraft and ground radar. Footage broadcast internationally. RNZAF, NZ Police, and Carter Observatory investigated; results lodged in National Archives, Wellington (1979). Ministry of Defence proposed squid boats, Venus, trains, meteors as explanations. DSIR scientist Bill Ireland (1982 BBC documentary) concluded squid boat lights most likely. No consensus explanation reached. Status: UNRESOLVED — multi-radar corroboration documented; official explanation disputed.',
    status: 'UNRESOLVED',
    citations: [
      '"Kaikōura Lights." Wikipedia, en.wikipedia.org/wiki/Kaikoura_lights.',
      'RNZAF. Report on Kaikōura UFOs. National Archives Wellington, 1979.',
      'Fogarty, Quentin. Let\'s Hope They\'re Friendly. Amazon, 2014.',
    ],
  },
  {
    id: 'wellington-parliament-occupation-2022',
    region: 'New Zealand',
    title: '2022 Wellington Parliament Occupation',
    summary: '24-day anti-mandate occupation of NZ Parliament grounds, Wellington. Inspired by Canada\'s Freedom Convoy. Triggered by PM Jacinda Ardern\'s vaccine mandates for health workers, teachers, police, and military (late 2021). Convoys departed Cape Reinga and Bluff on Waitangi Day (6 Feb 2022), converging in Wellington ~8–9 Feb. Peak encampment: ~1,000 participants. Groups: Freedoms & Rights Coalition, Voices for Freedom, NZDSOS. Ended 2 Mar 2022 with large police operation; protesters set fires to tents, playground, and structures; police used riot gear, pepper spray, sponge bullets. Total arrests: ~250 (220 charged). Police injuries: ~40 officers. No protester demands met. Most mandates phased out by Sept 2022 (pre-planned, not a concession). IPCA review (20 Apr 2023) found police "served the public well overall" with noted improvement areas. Status: DOCUMENTED — IPCA reviewed, Royal Commission on COVID response referenced.',
    status: 'DOCUMENTED',
    citations: [
      'Independent Police Conduct Authority. Review of Policing of Parliament Protest. IPCA, 20 Apr. 2023. ipca.govt.nz.',
      'Rennie, Sian and Sina Matagi. "Vaccine Passports Equal Apartheid." Social Movement Studies, 11 Sept. 2022. doi:10.1080/14742837.2022.2123316.',
      'NPR. "New Zealand Convoy Clogs Streets Near Parliament." 8 Feb. 2022. npr.org.',
    ],
  },
];

const ARCHIVES: ArchiveCard[] = [
  {
    title: 'Wayback Machine (Internet Archive)',
    description: 'Freeze the internet before they delete pages — historical snapshots of government sites and news.',
    url: 'https://web.archive.org/',
    badge: 'archive.org',
  },
  {
    title: 'ProPublica Source Documents',
    description: 'Pulitzer-winning investigative journalism with the full raw primary documents attached to every story.',
    url: 'https://www.propublica.org/',
    badge: 'propublica.org',
  },
  {
    title: 'National Security Archive',
    description: '1M+ pages of declassified U.S. government documents obtained through FOIA.',
    url: 'https://nsarchive.gwu.edu/',
    badge: 'gwu.edu',
  },
  {
    title: 'DocumentCloud',
    description: 'Searchable global archive of court filings, leaks, and primary government records used by journalists worldwide.',
    url: 'https://www.documentcloud.org/',
    badge: 'documentcloud.org',
  },
  {
    title: 'ICIJ Offshore Leaks Database',
    description: 'Panama Papers, Pandora Papers — massive cross-border elite financial documents.',
    url: 'https://offshoreleaks.icij.org/',
    badge: 'icij.org',
  },
  {
    title: 'Transparency International',
    description: 'Global corruption data, indices, and primary research from 180+ countries.',
    url: 'https://www.transparency.org/',
    badge: 'transparency.org',
  },
  {
    title: 'World Bank Open Data',
    description: 'Official global development statistics, economy, health, and environment datasets from every country.',
    url: 'https://data.worldbank.org/',
    badge: 'worldbank.org',
  },
  {
    title: 'UN Data',
    description: '60+ million official statistics from every United Nations agency worldwide.',
    url: 'https://data.un.org/',
    badge: 'data.un.org',
  },
  {
    title: 'EU Open Data Portal',
    description: 'Official laws, budgets, research, and transparency data from the European Union and 27 member states.',
    url: 'https://data.europa.eu/',
    badge: 'europa.eu',
  },
  {
    title: 'Digital Public Library of America',
    description: 'Millions of digitized cultural artifacts, historical newspapers, photos, and oral histories.',
    url: 'https://dp.la/',
    badge: 'dp.la',
  },
  {
    title: 'U.S. National Archives Catalog',
    description: 'Millions of official U.S. government records, declassified files, and presidential library documents.',
    url: 'https://catalog.archives.gov/',
    badge: 'archives.gov',
  },
  {
    title: 'Archive.today',
    description: 'Lightweight on-demand web archiving tool — perfect companion to the Wayback Machine.',
    url: 'https://archive.ph/',
    badge: 'archive.ph',
  },
];

function RegionalEntryCard({ entry }: { entry: RegionalEntry }) {
  const statusColor = REGIONAL_STATUS_COLORS[entry.status];
  return (
    <div
      className="group flex flex-col bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm p-4 transition-all duration-200"
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = statusColor + '33';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 18px ${statusColor}0a`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm border"
          style={{ color: '#888', borderColor: '#2a2a2a', backgroundColor: '#111' }}
        >
          {entry.region}
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

      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors">
        {entry.title}
      </h3>

      <p className="font-mono text-[11px] text-[#444] group-hover:text-[#555] leading-relaxed mb-3 transition-colors flex-1">
        {entry.summary}
      </p>

      <div className="mt-auto pt-2 border-t border-[#1a1a1a] space-y-1">
        {entry.citations.map((cite, i) => (
          <p key={i} className="font-mono text-[9px] text-[#333] leading-relaxed">
            <span className="text-[#ff4444]/30 mr-1">[{i + 1}]</span>
            {cite}
          </p>
        ))}
      </div>
    </div>
  );
}

function ArchiveEntryCard({ card }: { card: ArchiveCard }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm p-4 transition-all duration-200 no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4444]/40"
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,68,68,0.28)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 18px rgba(255,68,68,0.06)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e1e1e';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border border-[#ff4444]/20 bg-[#ff4444]/[0.04] text-[#ff4444]/70">
          {card.badge}
        </span>
        <ExternalLink
          size={11}
          className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-50 transition-opacity text-[#ff4444]"
        />
      </div>

      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors flex-1">
        {card.title}
      </h3>

      <p className="font-mono text-[11px] text-[#444] group-hover:text-[#555] leading-relaxed mb-4 transition-colors flex-1">
        {card.description}
      </p>

      <div className="mt-auto pt-3 border-t border-[#1a1a1a]">
        <span className="font-mono text-[10px] text-[#ff4444]/50 group-hover:text-[#ff4444]/80 transition-colors tracking-wider">
          View &rarr;
        </span>
      </div>
    </a>
  );
}

export function GlobalArchives() {
  return (
    <>
      <SEOHead
        title="Free Global Archives"
        description="Twelve essential free archives — declassified government documents, FOIA releases, offshore leaks, global open data, and web snapshots. Primary sources only."
        url="https://redpillbiblio.wtf/global-archives"
      />
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[#0a0a0a] pt-20 pb-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 pt-4">
            <div className="flex items-center gap-2.5 mb-2">
              <Archive size={13} className="text-[#ff4444]" />
              <span className="font-mono text-[11px] text-[#ff4444]/50 uppercase tracking-[0.3em]">Primary Sources</span>
            </div>
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4444] tracking-tight mb-3">
              {'> FREE_GLOBAL_ARCHIVES'}
            </h1>
            <p className="font-mono text-sm text-[#555] max-w-2xl mb-1">
              Declassified. Leaked. Filed. Indexed.
            </p>
            <p className="font-mono text-xs text-[#444] max-w-2xl">
              12 essential free archives — FOIA releases, offshore leaks, global open data, and disappearing web pages. No gatekeepers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Archives', value: '12', color: '#ff4444' },
              { label: 'Cost', value: 'Free', color: '#00ff41' },
              { label: 'Gatekeepers', value: 'Zero', color: '#ffbf00' },
              { label: 'Primary Sources', value: 'Only', color: '#ff4444' },
            ].map(stat => (
              <div
                key={stat.label}
                className="border rounded-sm p-3 text-center"
                style={{ background: '#0d0d0d', borderColor: `${stat.color}18` }}
              >
                <div className="font-mono text-lg font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-[#555] tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="mb-8 border rounded-sm px-4 py-3 flex items-start gap-3"
            style={{ borderColor: 'rgba(255,68,68,0.1)', background: 'rgba(255,68,68,0.02)' }}
          >
            <span className="font-mono text-[10px] text-[#ff4444]/40 mt-0.5 flex-shrink-0">▸</span>
            <p className="font-mono text-[11px] text-[#444] leading-relaxed">
              Every link below is a free, publicly accessible primary-source repository. No affiliate links. No ads.
              {' '}<span className="text-[#555]">Click any card to open in a new tab.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ARCHIVES.map(card => (
              <ArchiveEntryCard key={card.url} card={card} />
            ))}
          </div>

          <div
            className="mt-12 border rounded-sm px-4 py-3"
            style={{ borderColor: '#1a1a1a', background: '#0a0a0a' }}
          >
            <p className="font-mono text-xs text-[#444] leading-relaxed">
              <span className="text-[#ff4444]/50">NOTICE:</span> External links open in a new tab. We do not control or endorse the content of third-party sites.
              All resources are publicly accessible and widely used by journalists, academics, and independent researchers.
            </p>
          </div>

          <div className="mt-14 border-t border-[#1a1a1a] pt-10">
            <div className="flex items-center gap-2.5 mb-2">
              <Globe size={13} className="text-[#ffbf00]" />
              <span className="font-mono text-[11px] text-[#ffbf00]/50 uppercase tracking-[0.3em]">Regional Cases</span>
            </div>
            <h2 className="font-mono text-xl font-bold text-[#ffbf00] tracking-tight mb-2">
              {'> COUNTRY_SPECIFIC_CASES'}
            </h2>
            <p className="font-mono text-xs text-[#444] max-w-2xl mb-6">
              Documented, debunked, and unresolved cases specific to countries and regions — with MLA-cited primary sources.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REGIONAL_ENTRIES.map(entry => (
                <RegionalEntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GlobalArchives;
