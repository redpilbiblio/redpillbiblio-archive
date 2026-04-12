import { useState, useMemo } from 'react';
import { LayoutPanelLeft, List, Search, ExternalLink, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '../ui/skeleton';
import { ActiveFilterChips } from './ActiveFilterChips';
import { ResearchFilterSidebar } from './ResearchFilterSidebar';
import { ResultCard } from './ResultCard';
import { CorkboardPanel } from './CorkboardPanel';
import { useResearchFilters } from '../../hooks/useResearchFilters';
import { useCorkboardPins } from '../../hooks/useCorkboardPins';
import { supabase } from '../../lib/supabase';
import type { ResearchItem } from '../../lib/researchItems';

export interface ResultsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type ViewMode = 'list' | 'corkboard';

function useResearchResults(filters: ReturnType<typeof useResearchFilters>['filters']) {
  return useQuery({
    queryKey: ['research-results', filters],
    queryFn: async (): Promise<ResearchItem[]> => {
      const [docsRes, eventsRes, enemiesRes] = await Promise.all([
        supabase
          .from('documents')
          .select('id, title, date_published, document_type, verification_tier, tags, snippet, pillar_slug')
          .order('date_published', { ascending: filters.sort === 'oldest' })
          .limit(200),
        supabase
          .from('events')
          .select('id, title, event_date, pillar, snippet')
          .order('event_date', { ascending: filters.sort === 'oldest' })
          .limit(100),
        supabase
          .from('enemies_of_truth')
          .select('id, name, date_added, severity, summary')
          .order('date_added', { ascending: filters.sort === 'oldest' })
          .limit(100),
      ]);

      const items: ResearchItem[] = [];

      for (const d of docsRes.data ?? []) {
        items.push({
          id: d.id,
          itemType: 'document',
          title: d.title,
          date: d.date_published ?? null,
          pillarSlug: (d as Record<string, unknown>).pillar_slug as string ?? d.document_type ?? null,
          verificationTier: d.verification_tier as ResearchItem['verificationTier'] ?? null,
          tags: (d.tags as string[] | null) ?? undefined,
          snippet: d.snippet ?? null,
        });
      }

      for (const e of eventsRes.data ?? []) {
        items.push({
          id: e.id,
          itemType: 'event',
          title: e.title,
          date: e.event_date ?? null,
          pillarSlug: e.pillar ?? null,
          snippet: e.snippet ?? null,
        });
      }

      for (const en of enemiesRes.data ?? []) {
        items.push({
          id: en.id,
          itemType: 'watchlist',
          title: en.name,
          date: en.date_added ?? null,
          pillarSlug: null,
          severity: en.severity ?? null,
          snippet: en.summary ?? null,
        });
      }

      return items;
    },
    staleTime: 60_000,
  });
}

function applyFilters(items: ResearchItem[], filters: ReturnType<typeof useResearchFilters>['filters']): ResearchItem[] {
  let out = items;

  if (filters.query) {
    const q = filters.query.toLowerCase();
    out = out.filter(i =>
      i.title.toLowerCase().includes(q) ||
      (i.snippet ?? '').toLowerCase().includes(q)
    );
  }

  if (filters.types?.length) {
    out = out.filter(i => filters.types!.includes(i.itemType));
  }

  if (filters.pillarSlugs?.length) {
    out = out.filter(i => i.pillarSlug && filters.pillarSlugs!.includes(i.pillarSlug));
  }

  if (filters.verificationTiers?.length) {
    out = out.filter(i => i.verificationTier && filters.verificationTiers!.includes(i.verificationTier));
  }

  if (filters.severities?.length) {
    out = out.filter(i => i.severity && filters.severities!.includes(i.severity.toUpperCase()));
  }

  if (filters.dynastyNames?.length) {
    out = out.filter(i => i.dynastyName && filters.dynastyNames!.includes(i.dynastyName));
  }

  if (filters.dateFrom) {
    out = out.filter(i => i.date && i.date >= filters.dateFrom!);
  }

  if (filters.dateTo) {
    out = out.filter(i => i.date && i.date <= filters.dateTo!);
  }

  if (filters.tags?.length) {
    out = out.filter(i => filters.tags!.some(t => i.tags?.includes(t)));
  }

  return out;
}

function ItemDetailPanel({
  item,
  onClose,
}: {
  item: ResearchItem;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col h-full border-l border-border bg-background">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Details</span>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
        >
          <X size={15} />
        </button>
      </div>
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-bold leading-snug text-foreground">{item.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {item.date
                ? new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                : 'Unknown date'}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary text-secondary-foreground uppercase tracking-wide">
              {item.itemType}
            </span>
            {item.pillarSlug && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground uppercase tracking-wide">
                {item.pillarSlug.replace(/-/g, ' ')}
              </span>
            )}
            {item.dynastyName && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800">
                {item.dynastyName}
              </span>
            )}
            {item.severity && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-100 text-red-700 uppercase tracking-wide">
                {item.severity}
              </span>
            )}
            {item.verificationTier && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700 uppercase tracking-wide">
                {item.verificationTier}
              </span>
            )}
          </div>

          {item.snippet && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Summary</p>
              <p className="text-sm text-foreground leading-relaxed">{item.snippet}</p>
            </div>
          )}

          {item.tags && item.tags.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Tags</p>
              <div className="flex flex-wrap gap-1">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 rounded-full text-[10px] bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

function ResultSkeletons() {
  return (
    <div className="space-y-2 p-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-[88px] w-full rounded-lg" />
      ))}
    </div>
  );
}

export function ResultsDrawer({ open, onOpenChange }: ResultsDrawerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedItem, setSelectedItem] = useState<ResearchItem | null>(null);

  const { filters, setQuery, setPillars, setTypes, setVerificationTiers, setSeverities, setDynastyNames, setDateRange, setTags, setSort, clearAll } = useResearchFilters();
  const { data: rawItems = [], isLoading, error } = useResearchResults(filters);
  const { pins, pinItem, unpinItem, isItemPinned } = useCorkboardPins();

  const results = useMemo(() => applyFilters(rawItems, filters), [rawItems, filters]);

  const hasActiveFilters =
    !!(filters.query || filters.pillarSlugs?.length || filters.types?.length ||
      filters.verificationTiers?.length || filters.severities?.length ||
      filters.dynastyNames?.length || filters.dateFrom || filters.dateTo ||
      filters.tags?.length || filters.sort);

  async function handlePinToggle(item: ResearchItem) {
    if (isItemPinned(item.itemType, item.id)) {
      const pin = pins.find(p => p.item_type === item.itemType && p.item_id === item.id);
      if (pin) await unpinItem(pin.id);
    } else {
      await pinItem(item);
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="p-0 flex flex-col w-full sm:max-w-none md:w-[780px] lg:w-[1000px] xl:w-[1160px]"
      >
        <SheetHeader className="px-4 py-3 border-b border-border shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-base font-semibold">Research results</SheetTitle>
            <div className="flex items-center gap-1 mr-6">
              <button
                onClick={() => { setViewMode('list'); setSelectedItem(null); }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <List size={13} />
                List
              </button>
              <button
                onClick={() => { setViewMode('corkboard'); setSelectedItem(null); }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'corkboard'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <LayoutPanelLeft size={13} />
                Corkboard
              </button>
            </div>
          </div>
        </SheetHeader>

        {hasActiveFilters && viewMode === 'list' && (
          <div className="px-4 py-1.5 border-b border-border shrink-0">
            <ActiveFilterChips
              filters={filters}
              onClearQuery={() => setQuery(undefined)}
              onClearPillar={s => setPillars((filters.pillarSlugs ?? []).filter(p => p !== s))}
              onClearType={t => setTypes((filters.types ?? []).filter(x => x !== t) as ResearchItem['itemType'][])}
              onClearVerificationTier={tier => setVerificationTiers((filters.verificationTiers ?? []).filter(x => x !== tier) as ResearchFilters['verificationTiers'])}
              onClearSeverity={sev => setSeverities((filters.severities ?? []).filter(x => x !== sev))}
              onClearDynastyName={name => setDynastyNames((filters.dynastyNames ?? []).filter(x => x !== name))}
              onClearDateRange={() => setDateRange(null, null)}
              onClearTag={tag => setTags((filters.tags ?? []).filter(x => x !== tag))}
              onClearSort={() => setSort(undefined)}
              onClearAll={clearAll}
            />
          </div>
        )}

        <div className="flex-1 min-h-0 overflow-hidden">
          {viewMode === 'corkboard' ? (
            <CorkboardPanel />
          ) : (
            <div className="flex h-full min-h-0">
              <div className="w-[200px] shrink-0 border-r border-border overflow-hidden">
                <ResearchFilterSidebar />
              </div>

              <div className="flex-1 min-w-0 flex min-h-0">
                <div className="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col">
                  <div className="px-4 py-2 border-b border-border shrink-0 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {isLoading ? 'Loading…' : `${results.length.toLocaleString()} result${results.length !== 1 ? 's' : ''}`}
                    </span>
                    {filters.query && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Search size={11} />
                        {filters.query}
                      </span>
                    )}
                  </div>

                  <ScrollArea className="flex-1 min-h-0">
                    {error ? (
                      <div className="m-4 p-3 rounded-md bg-red-100 text-red-700 text-sm">
                        Failed to load results. Please try again.
                      </div>
                    ) : isLoading ? (
                      <ResultSkeletons />
                    ) : results.length === 0 ? (
                      <div className="flex flex-col items-center justify-center min-h-[240px] gap-2 text-center text-muted-foreground select-none p-8">
                        <Search size={28} strokeWidth={1.5} className="opacity-40" />
                        <p className="text-sm font-medium">No results match your filters yet.</p>
                        {hasActiveFilters && (
                          <button
                            onClick={clearAll}
                            className="text-xs underline underline-offset-2 hover:text-foreground transition-colors"
                          >
                            Clear all filters
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="p-2 space-y-1.5">
                        {results.map(item => (
                          <ResultCard
                            key={`${item.itemType}-${item.id}`}
                            item={item}
                            pinned={isItemPinned(item.itemType, item.id)}
                            onPinToggle={handlePinToggle}
                            onOpenDetails={setSelectedItem}
                          />
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </div>

                {selectedItem && (
                  <div className="w-[280px] xl:w-[320px] shrink-0">
                    <ItemDetailPanel
                      item={selectedItem}
                      onClose={() => setSelectedItem(null)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

import type { ResearchFilters } from '../../lib/researchItems';
