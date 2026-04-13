import { useEffect, useRef } from 'react';
import { useSiteStats, formatLastUpdated } from '@/hooks/useSiteStats';

const STATIC_STATS = {
  sourcedLinks: 616,
  primarySourceLinks: 588,
  openPendingItems: 38,
  govLinks: 183,
  pctPrimaryVerified: 91.3,
  pctValid: 7.6,
  pctPreliminary: 1.7,
  pctOpen: 4.6,
  donations: '$333',
};

export function LiveStatsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { stats, isLoading } = useSiteStats();

  useEffect(() => {
    if (!trackRef.current) return;
    if (isLoading) return;

    const watchlistEntries = stats?.total_watchlist ?? 0;
    const timelineEvents = stats?.total_events ?? 0;
    const archiveItems = stats?.total_documents ?? 0;
    const lastUpdated = formatLastUpdated(stats?.last_updated ?? null);

    const pctGov = STATIC_STATS.sourcedLinks > 0
      ? ((STATIC_STATS.govLinks / STATIC_STATS.sourcedLinks) * 100).toFixed(1)
      : '0.0';

    const items = [
      { label: 'ARCHIVE ITEMS', value: archiveItems.toLocaleString(), type: 'value' },
      { label: 'TIMELINE EVENTS', value: timelineEvents.toLocaleString(), type: 'value' },
      { label: 'WATCHLIST ENTRIES', value: watchlistEntries.toLocaleString(), type: 'value' },
      { label: 'SOURCED LINKS', value: STATIC_STATS.sourcedLinks.toLocaleString(), type: 'value' },
      { label: 'PRIMARY SOURCE VERIFIED', value: STATIC_STATS.primarySourceLinks.toLocaleString(), type: 'value' },
      { label: 'OPEN / PENDING REVIEW', value: STATIC_STATS.openPendingItems.toLocaleString(), type: 'pending' },
      { label: '.GOV SOURCE LINKS', value: STATIC_STATS.govLinks.toLocaleString(), type: 'gov' },
      { label: '.GOV % OF ALL SOURCES', value: `${pctGov}%`, type: 'pct' },
      { label: 'PRIMARY SOURCE VERIFIED', value: `${STATIC_STATS.pctPrimaryVerified.toFixed(1)}%`, type: 'pct' },
      { label: 'VALID & CONFIRMED', value: `${STATIC_STATS.pctValid.toFixed(1)}%`, type: 'pct' },
      { label: 'PRELIMINARY / PENDING', value: `${STATIC_STATS.pctPreliminary.toFixed(1)}%`, type: 'pending' },
      { label: 'OPEN / UNDER REVIEW', value: `${STATIC_STATS.pctOpen.toFixed(1)}%`, type: 'pending' },
      { label: 'LAST UPDATED', value: lastUpdated, type: 'value' },
      { label: 'TOTAL DONATIONS', value: STATIC_STATS.donations, type: 'donation' },
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
  }, [stats, isLoading]);

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
