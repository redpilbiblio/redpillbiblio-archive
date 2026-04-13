import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Event, Document } from '@/lib/supabase';
import { Calendar, Filter, Search, X, ExternalLink, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { RecentUpdates } from '@/components/RecentUpdates';
import { normalizePillarName } from '@/lib/pillarUtils';
import { useLastVisit } from '@/hooks/useLastVisit';
import { EraNavBar } from '@/components/EraNavBar';
import { TimelineEventCard } from '@/components/TimelineEventCard';
import {
  ERAS,
  PILLAR_COLORS,
  getSortableYear,
  getSortableKey,
  getEraForYear,
  deduplicateEvents,
} from '@/lib/timelineUtils';
import { useEvents, useDocuments } from '@/hooks/useSupabaseQuery';

export function Timeline() {
  const { lastVisit } = useLastVisit();
  const [isRecentCollapsed, setIsRecentCollapsed] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return true;
    const saved = localStorage.getItem('timelineRecentCollapsed');
    return saved === 'true';
  });

  const handleToggleRecent = () => {
    const newState = !isRecentCollapsed;
    setIsRecentCollapsed(newState);
    localStorage.setItem('timelineRecentCollapsed', String(newState));
  };

  const { data: events = [], isLoading: eventsLoading } = useEvents();
  const { data: documents = [], isLoading: docsLoading } = useDocuments();
  const loading = eventsLoading || docsLoading;

  const [selectedPillars, setSelectedPillars] = useState<Set<string>>(new Set());
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [searchText, setSearchText] = useState('');
  const [activeEra, setActiveEra] = useState<string | null>('Modern');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const parentRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const deduped = useMemo(() => deduplicateEvents(events), [events]);

  const allPillars = useMemo(() => {
    const pillarSet = new Set<string>();
    deduped.forEach(e => pillarSet.add(normalizePillarName(e.pillar)));
    return Array.from(pillarSet).sort();
  }, [deduped]);

  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ERAS.forEach(era => { counts[era.label] = 0; });
    deduped.forEach(event => {
      const year = getSortableYear(event);
      const era = getEraForYear(year);
      if (era) counts[era.label]++;
    });
    return counts;
  }, [deduped]);

  const filteredEvents = useMemo(() => {
    let filtered = deduped.filter((event) => {
      const normalizedPillar = normalizePillarName(event.pillar);
      if (selectedPillars.size > 0 && !selectedPillars.has(normalizedPillar)) {
        return false;
      }

      if (activeEra) {
        const year = getSortableYear(event);
        const era = getEraForYear(year);
        if (!era || era.label !== activeEra) return false;
      }

      if (searchText.trim()) {
        const searchLower = searchText.toLowerCase();
        const pillarName = normalizePillarName(event.pillar);
        const meta = event.metadata as Record<string, unknown> | null;
        const tags = Array.isArray(meta?.tags) ? (meta.tags as string[]).join(' ') : '';
        const matchesSearch =
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          pillarName.toLowerCase().includes(searchLower) ||
          tags.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      const keyA = getSortableKey(a);
      const keyB = getSortableKey(b);
      return sortDirection === 'asc' ? keyA - keyB : keyB - keyA;
    });

    return filtered;
  }, [deduped, selectedPillars, activeEra, searchText, sortDirection]);

  const rowVirtualizer = useVirtualizer({
    count: filteredEvents.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280,
    overscan: 5,
  });

  const handleScroll = useCallback(() => {
    if (parentRef.current) {
      setShowBackToTop(parentRef.current.scrollTop > 600);
    }
  }, []);

  useEffect(() => {
    const el = parentRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const scrollToTop = () => {
    parentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePillar = (pillar: string) => {
    setSelectedPillars((prev) => {
      const next = new Set(prev);
      if (next.has(pillar)) {
        next.delete(pillar);
      } else {
        next.add(pillar);
      }
      return next;
    });
  };

  const openDocument = (docId: string) => {
    const doc = documents.find((d) => d.id === docId);
    if (doc) setSelectedDoc(doc);
  };

  const handleEraClick = (era: typeof ERAS[number] | null) => {
    setActiveEra(era ? era.label : null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#00ff41] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#a0a0a0] font-mono">Loading timeline...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col">
      <SEOHead
        title="Timeline of Human History"
        description="Chronological timeline from ancient civilizations to the modern era, documenting patterns of institutional power, corruption, and accountability across history."
        url="https://redpillbiblio.wtf/timeline"
      />

      <Navigation />

      <div className={`hidden md:flex flex-col fixed right-0 top-16 bottom-0 bg-[#0a0a0a] border-l border-green-500/20 transition-all duration-300 z-20 ${isRecentCollapsed ? 'w-8' : 'w-56'}`}>
        <RecentUpdates
          lastVisit={lastVisit}
          isCollapsed={isRecentCollapsed}
          onToggle={handleToggleRecent}
        />
      </div>

      <main id="main-content" tabIndex={-1} className={`pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col transition-all duration-300 ${isRecentCollapsed ? '' : 'md:pr-56'}`}>
        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
          <div className="mb-8 border-b border-[#00ff41]/30 pb-4">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-8 h-8 text-[#00ff41]" aria-hidden="true" />
              <h1 className="text-[1.75rem] font-bold text-[#00ff41] font-mono">
                &gt; Timeline of Human History
              </h1>
            </div>
            <p className="text-[#a0a0a0] text-base">
              {deduped.length.toLocaleString()} documented events spanning from ancient civilizations to the present day.
              A chronological record of institutional power, corruption, and accountability.
            </p>
          </div>

          <EraNavBar
            activeEra={activeEra}
            eraCounts={eraCounts}
            onEraClick={handleEraClick}
          />

          <div className="mb-6 bg-[#0f0f0f] border border-white/10 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#00ff41]" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-[#e5e5e5]">Filters</h2>
            </div>

            <div className="mb-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                <Input
                  type="text"
                  placeholder="Search events by title, description, pillar, or tag..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="pl-10 pr-10 bg-[#0a0a0a] border-white/20 text-[#e5e5e5] placeholder:text-[#666]"
                />
                {searchText && (
                  <button
                    onClick={() => setSearchText('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a0a0a0] hover:text-[#e5e5e5]"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                Filter by Pillar
              </label>
              <div className="flex flex-wrap gap-2">
                {allPillars.map((pillar) => (
                  <Button
                    key={pillar}
                    variant="outline"
                    size="sm"
                    onClick={() => togglePillar(pillar)}
                    className={`transition-all text-xs ${
                      selectedPillars.has(pillar)
                        ? 'border-2 bg-opacity-10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    style={{
                      borderColor: selectedPillars.has(pillar)
                        ? PILLAR_COLORS[pillar] || '#00ff41'
                        : undefined,
                      color: selectedPillars.has(pillar)
                        ? PILLAR_COLORS[pillar] || '#00ff41'
                        : '#a0a0a0',
                    }}
                    aria-pressed={selectedPillars.has(pillar)}
                  >
                    {pillar}
                  </Button>
                ))}
                {selectedPillars.size > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPillars(new Set())}
                    className="text-[#a0a0a0] hover:text-[#e5e5e5] text-xs"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-[#a0a0a0] font-mono">
              Showing {filteredEvents.length.toLocaleString()} of {deduped.length.toLocaleString()} events
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortDirection(d => d === 'asc' ? 'desc' : 'asc')}
              className="border-white/20 text-[#a0a0a0] hover:text-[#e5e5e5] text-xs"
            >
              {sortDirection === 'asc' ? 'Oldest First' : 'Newest First'}
            </Button>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-[#a0a0a0] mx-auto mb-4" aria-hidden="true" />
              <p className="text-[#a0a0a0] text-lg">
                No events match the selected filters.
              </p>
            </div>
          ) : (
            <div
              ref={parentRef}
              className="flex-1 overflow-auto relative"
              style={{ height: 'calc(100vh - 200px)' }}
            >
              <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[#00ff41] via-[#ffbf00] to-transparent" style={{ height: `${rowVirtualizer.getTotalSize()}px` }} />

              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: '100%',
                  position: 'relative',
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const event = filteredEvents[virtualRow.index];
                  return (
                    <div
                      key={event.id}
                      data-index={virtualRow.index}
                      ref={rowVirtualizer.measureElement}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div className="pb-6">
                        <TimelineEventCard
                          event={event}
                          documents={documents}
                          onOpenDocument={openDocument}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#00ff41] text-[#0a0a0a] flex items-center justify-center shadow-lg hover:bg-[#00ff41]/90 transition-all"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="bg-[#0f0f0f] border border-white/20 text-[#e5e5e5] max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedDoc && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <DialogTitle className="text-2xl font-bold text-[#e5e5e5]">
                    {selectedDoc.title}
                  </DialogTitle>
                  <Badge
                    variant="outline"
                    className={`border-2 ${
                      selectedDoc.verification_tier === 'verified'
                        ? 'border-[#00ff41] text-[#00ff41]'
                        : selectedDoc.verification_tier === 'corroborated'
                        ? 'border-[#ffbf00] text-[#ffbf00]'
                        : 'border-[#a0a0a0] text-[#a0a0a0]'
                    }`}
                  >
                    {selectedDoc.verification_tier === 'corroborated' ? 'VALID' : selectedDoc.verification_tier.toUpperCase()}
                  </Badge>
                </div>
                <DialogDescription className="text-[#a0a0a0] text-base">
                  {selectedDoc.description}
                </DialogDescription>
              </DialogHeader>

              <div className="bg-[#0a0a0a] p-4 rounded border border-white/10 mt-4">
                <div className="text-sm text-[#a0a0a0] whitespace-pre-wrap font-mono leading-relaxed max-h-96 overflow-y-auto">
                  {selectedDoc.content}
                </div>
              </div>

              {selectedDoc.source_url && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={selectedDoc.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Original Source
                  </a>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
