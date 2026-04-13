import { ExternalLink, Radio } from 'lucide-react';

type TrackerCard = {
  title: string;
  description: string;
  url: string;
  badge: string;
  accent: string;
};

const TRACKERS: TrackerCard[] = [
  {
    title: 'Congress Stock Trades (STOCK Act Filings)',
    description: 'Every trade filed by members of Congress — updated in real time.',
    url: 'https://www.capitoltrades.com/trades',
    badge: 'Capitol Trades',
    accent: '#00ff41',
  },
  {
    title: 'Quiver Congress Trading Dashboard',
    description: 'Live leaderboards, performance tracking, and unusual activity alerts.',
    url: 'https://www.quiverquant.com/congresstrading/',
    badge: 'Quiver Quant',
    accent: '#00ff41',
  },
  {
    title: 'Unusual Whales Politics',
    description: 'Real-time political trading alerts, lobbying overlaps, and dark pool activity.',
    url: 'https://unusualwhales.com/politics',
    badge: 'Unusual Whales',
    accent: '#ffbf00',
  },
  {
    title: 'OpenSecrets — Follow the Money',
    description: 'Lobbying database, campaign finance, donor maps, and politician personal finances.',
    url: 'https://www.opensecrets.org/',
    badge: 'OpenSecrets',
    accent: '#ffbf00',
  },
  {
    title: 'USAspending.gov — Where Your Tax Dollars Go',
    description: 'Official federal spending, contracts, grants, and loans — searchable in real time.',
    url: 'https://www.usaspending.gov/',
    badge: 'USAspending',
    accent: '#00ff41',
  },
  {
    title: 'GovTrack — Legislation Tracker',
    description: 'Live status of every bill in Congress, voting records, and probability of passage.',
    url: 'https://www.govtrack.us/',
    badge: 'GovTrack',
    accent: '#00ff41',
  },
  {
    title: 'LittleSis — Power Network Mapping',
    description: 'Crowdsourced map of relationships between politicians, corporations, billionaires, and think tanks.',
    url: 'https://littlesis.org/',
    badge: 'LittleSis',
    accent: '#ffbf00',
  },
  {
    title: 'MuckRock — Active FOIA Releases',
    description: 'Crowdsourced FOIA requests and newly released government documents.',
    url: 'https://www.muckrock.com/',
    badge: 'MuckRock',
    accent: '#ffbf00',
  },
];

export function LiveTransparencyHub() {
  return (
    <section
      id="transparency-hub"
      className="py-16 px-6 bg-[#080808] border-y border-[#00ff41]/10"
      aria-labelledby="hub-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-2">
          <div className="flex items-center gap-2.5 mb-1">
            <Radio size={14} className="text-[#00ff41]" aria-hidden="true" />
            <span className="font-mono text-[11px] text-[#00ff41]/50 uppercase tracking-[0.3em]">
              Live Data
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse flex-shrink-0" />
          </div>
          <h2
            id="hub-heading"
            className="font-mono text-xl sm:text-2xl font-bold text-[#00ff41] mb-2"
          >
            {'>'} LIVE_TRANSPARENCY_HUB
          </h2>
          <p className="font-mono text-sm text-[#555] mb-1">
            Real-Time Power Trackers — Watch the machine operate live.
          </p>
          <p className="font-mono text-xs text-[#555] mb-1">
            Primary government and congressional data. No spin. You decide.
          </p>
        </div>

        {/* Pinned note */}
        <div className="mb-8 mt-5 border border-[#00ff41]/15 bg-[#00ff41]/[0.03] rounded px-4 py-3 flex items-start gap-3">
          <span className="font-mono text-[10px] text-[#00ff41]/50 mt-0.5 flex-shrink-0 select-none">▸</span>
          <p className="font-mono text-[11px] text-[#4a4a4a] leading-relaxed">
            These are official, primary-source dashboards. Historical evidence from the rest of the site is linked below each card where relevant.{' '}
            <span className="text-[#666]">Connect the dots yourself — live.</span>
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRACKERS.map((tracker) => (
            <TrackerCard key={tracker.url} tracker={tracker} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackerCard({ tracker }: { tracker: TrackerCard }) {
  const isGreen = tracker.accent === '#00ff41';

  return (
    <a
      href={tracker.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#00ff41]/25
                 rounded-lg p-5 transition-all duration-200 no-underline
                 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/20
                 hover:bg-[#0f0f0f]"
      aria-label={`${tracker.title} — opens in new tab`}
    >
      {/* Badge */}
      <div className="mb-3">
        <span
          className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border"
          style={{
            color: isGreen ? '#00ff41' : '#ffbf00',
            borderColor: isGreen ? 'rgba(0,255,65,0.2)' : 'rgba(255,191,0,0.2)',
            backgroundColor: isGreen ? 'rgba(0,255,65,0.04)' : 'rgba(255,191,0,0.04)',
          }}
        >
          {tracker.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-mono text-sm font-semibold text-[#c5c5c5] group-hover:text-[#e5e5e5] leading-snug mb-2 transition-colors flex-1">
        {tracker.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-[11px] text-[#3d3d3d] group-hover:text-[#4a4a4a] leading-relaxed mb-4 transition-colors">
        {tracker.description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-1.5 mt-auto">
        <span
          className="font-mono text-xs transition-colors"
          style={{ color: isGreen ? 'rgba(0,255,65,0.5)' : 'rgba(255,191,0,0.5)' }}
        >
          View Live
        </span>
        <ExternalLink
          size={10}
          style={{ color: isGreen ? 'rgba(0,255,65,0.5)' : 'rgba(255,191,0,0.5)' }}
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
