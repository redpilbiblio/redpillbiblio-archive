import { useEffect, useRef } from 'react';

const STATS = {
  archiveItems: 644,
  trackerItems: 1378,
  timelineEvents: 1222,
  convictionRecords: 345,
  watchlistEntries: 88,
  sourcedLinks: 616,
  primarySourceLinks: 588,
  openPendingItems: 38,
  govLinks: 183,
  pctPrimaryVerified: 91.3,
  pctValid: 7.6,
  pctPreliminary: 1.7,
  pctOpen: 4.6,
  lastUpdated: '2026-04-09 03:00 ET',
  donations: '$333',
};

export function LiveStatsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalCatalog =
      STATS.archiveItems +
      STATS.trackerItems +
      STATS.timelineEvents +
      STATS.convictionRecords +
      STATS.watchlistEntries;

    const pctGov = STATS.sourcedLinks > 0
      ? ((STATS.govLinks / STATS.sourcedLinks) * 100).toFixed(1)
      : '0.0';

    const items = [
      { label: 'ARCHIVE ITEMS', value: STATS.archiveItems.toLocaleString(), type: 'value' },
      { label: 'TRACKER ITEMS', value: STATS.trackerItems.toLocaleString(), type: 'value' },
      { label: 'TIMELINE EVENTS', value: STATS.timelineEvents.toLocaleString(), type: 'value' },
      { label: 'CONVICTION RECORDS', value: STATS.convictionRecords.toLocaleString(), type: 'value' },
      { label: 'WATCHLIST ENTRIES', value: STATS.watchlistEntries.toLocaleString(), type: 'value' },
      { label: 'DYNASTY INDEX', value: '5', type: 'value' },
      { label: 'TOTAL CATALOG ITEMS', value: totalCatalog.toLocaleString(), type: 'value' },
      { label: 'SOURCED LINKS', value: STATS.sourcedLinks.toLocaleString(), type: 'value' },
      { label: 'PRIMARY SOURCE VERIFIED', value: STATS.primarySourceLinks.toLocaleString(), type: 'value' },
      { label: 'OPEN / PENDING REVIEW', value: STATS.openPendingItems.toLocaleString(), type: 'pending' },
      { label: '.GOV SOURCE LINKS', value: STATS.govLinks.toLocaleString(), type: 'gov' },
      { label: '.GOV % OF ALL SOURCES', value: `${pctGov}%`, type: 'pct' },
      { label: 'PRIMARY SOURCE VERIFIED', value: `${STATS.pctPrimaryVerified.toFixed(1)}%`, type: 'pct' },
      { label: 'VALID & CONFIRMED', value: `${STATS.pctValid.toFixed(1)}%`, type: 'pct' },
      { label: 'PRELIMINARY / PENDING', value: `${STATS.pctPreliminary.toFixed(1)}%`, type: 'pending' },
      { label: 'OPEN / UNDER REVIEW', value: `${STATS.pctOpen.toFixed(1)}%`, type: 'pending' },
      { label: 'LAST UPDATED', value: STATS.lastUpdated, type: 'value' },
      { label: 'TOTAL DONATIONS', value: STATS.donations, type: 'donation' },
    ];

    const getValueClass = (type: string) => {
      switch (type) {
        case 'value': return 'text-[#f0c040] font-bold';
        case 'pct': return 'text-[#4fc3a1] font-bold';
        case 'pending': return 'text-[#e07040] font-bold';
        case 'gov': return 'text-[#6ab0f5] font-bold';
        case 'donation': return 'text-[#a8e06a] font-bold';
        default: return 'text-[#f0c040] font-bold';
      }
    };

    const separator = '<span class="text-[#cc0000] mx-3.5 opacity-70">◆</span>';
    const inner = items
      .map(item => `<span class="inline-flex items-center px-1">${item.label} <span class="${getValueClass(item.type)} ml-1.5">${item.value}</span></span>`)
      .join(separator);

    trackRef.current.innerHTML = inner + separator + inner;
  }, []);

  return (
    <div
      id="rpb-ticker"
      role="marquee"
      aria-label="RedPillBiblio Live Site Statistics"
      aria-live="off"
      className="fixed top-16 left-0 right-0 z-[40] h-9 md:h-10 flex items-center overflow-hidden bg-[#0a0a0a] border-b border-[#1a1a1a] text-[#e8e8e8] font-mono text-[10px] md:text-xs font-medium tracking-wide uppercase"
    >
      <div className="bg-[#cc0000] text-white text-[9px] md:text-[10px] font-bold tracking-widest px-2 md:px-2.5 h-full flex items-center flex-shrink-0 whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
          LIVE
        </span>
      </div>
      <div className="flex-1 overflow-hidden h-full flex items-center">
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap animate-ticker hover:[animation-play-state:paused] will-change-transform"
        />
      </div>
    </div>
  );
}
