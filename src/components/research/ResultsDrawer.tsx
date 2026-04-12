import { useState, useMemo } from 'react';
import {
  LayoutPanelLeft,
  List,
  Search,
  X,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '../ui/skeleton';
import { ActiveFilterChips } from './ActiveFilterChips';
import { ResearchFilterSidebar } from './ResearchFilterSidebar';
import { ResultCard } from './ResultCard';
import { CorkboardPanel } from './CorkboardPanel';
import { useResearchFilters } from '../../hooks/useResearchFilters';
import type { CorkboardPinsHandle } from '../../hooks/useCorkboardPins';
import { supabase } from '../../lib/supabase';
import type { ResearchFilters, ResearchItem, SourceLink } from '../../lib/researchItems';
import { extractDomain } from '../../lib/researchItems';
import { normalizePillarSlug, normalizePillar, CANONICAL_PILLARS } from '../../lib/pillarUtils';
import { dynastiesIndex } from '../../data/dynasties_index';
import governmentConvictions from '../../data/government_convictions.json';
import corporateConvictions from '../../data/corporate_convictions.json';
import entertainmentConvictions from '../../data/entertainment_convictions.json';
import lawEnforcementConvictions from '../../data/law_enforcement_convictions.json';
import militaryConvictions from '../../data/military_intelligence_convictions.json';
import medicalConvictions from '../../data/medical_pharma_convictions.json';
import religiousConvictions from '../../data/religious_clergy_convictions.json';
import congressTrades from '../../data/data_congress_trades.json';
import suspiciousDeathsCsv from '../../data/suspicious_deaths_new.csv?raw';

function parseCsvDeaths(raw: string): Array<{ name: string; date: string; occupation: string; connection: string; sources: string }> {
  const lines = raw.trim().split('\n');
  const results: Array<{ name: string; date: string; occupation: string; connection: string; sources: string }> = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols: string[] = [];
    let inQuote = false;
    let cur = '';
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '"') {
        if (inQuote && line[j + 1] === '"') { cur += '"'; j++; }
        else { inQuote = !inQuote; }
      } else if (ch === ',' && !inQuote) {
        cols.push(cur); cur = '';
      } else {
        cur += ch;
      }
    }
    cols.push(cur);
    if (cols.length >= 4) {
      results.push({
        date: cols[0],
        name: cols[1],
        occupation: cols[3],
        connection: cols[4] ?? '',
        sources: cols[8] ?? '',
      });
    }
  }
  return results;
}

function safeUrl(s: unknown): string | null {
  if (typeof s !== 'string' || !s) return null;
  try { new URL(s); return s; } catch { return null; }
}

function buildSourceLinks(...urls: (string | null | undefined)[]): SourceLink[] {
  const links: SourceLink[] = [];
  const seen = new Set<string>();
  for (const u of urls) {
    const valid = safeUrl(u);
    if (valid && !seen.has(valid)) {
      seen.add(valid);
      links.push({ label: extractDomain(valid), url: valid });
    }
  }
  return links;
}

export interface ResultsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  corkboard: CorkboardPinsHandle;
}

type ViewMode = 'list' | 'corkboard';

type DocRow = Record<string, unknown>;
type EventRow = Record<string, unknown>;
type EnemyRow = Record<string, unknown>;

function docSources(d: DocRow): SourceLink[] {
  const links: SourceLink[] = [];
  const seen = new Set<string>();
  const primary = safeUrl(d.source_url);
  if (primary && !seen.has(primary)) { seen.add(primary); links.push({ label: extractDomain(primary), url: primary }); }
  const meta = d.metadata as Record<string, unknown> | null;
  if (meta) {
    const addl = meta.additional_sources;
    if (Array.isArray(addl)) {
      for (const s of addl) {
        if (s && typeof s === 'object') {
          const obj = s as Record<string, unknown>;
          const u = safeUrl(obj.url);
          if (u && !seen.has(u)) {
            seen.add(u);
            links.push({ label: typeof obj.name === 'string' ? obj.name : extractDomain(u), url: u });
          }
        }
      }
    }
  }
  return links;
}

function eventSources(e: EventRow): SourceLink[] {
  const links: SourceLink[] = [];
  const seen = new Set<string>();
  const meta = e.metadata as Record<string, unknown> | null;
  if (meta) {
    const src = meta.source_url;
    if (typeof src === 'string') {
      const u = safeUrl(src);
      if (u && !seen.has(u)) { seen.add(u); links.push({ label: extractDomain(u), url: u }); }
    }
    const sources = meta.sources;
    if (Array.isArray(sources)) {
      for (const s of sources) {
        if (typeof s === 'string') {
          const u = safeUrl(s);
          if (u && !seen.has(u)) { seen.add(u); links.push({ label: extractDomain(u), url: u }); }
        }
        if (s && typeof s === 'object') {
          const obj = s as Record<string, unknown>;
          const u = safeUrl(obj.url ?? obj.href);
          if (u && !seen.has(u)) {
            seen.add(u);
            links.push({ label: typeof obj.name === 'string' ? obj.name : extractDomain(u), url: u });
          }
        }
      }
    }
  }
  return links;
}

function enemySources(e: EnemyRow): SourceLink[] {
  const links: SourceLink[] = [];
  const seen = new Set<string>();
  const raw = e.sources;
  if (Array.isArray(raw)) {
    for (const s of raw) {
      if (s && typeof s === 'object') {
        const obj = s as Record<string, unknown>;
        const u = safeUrl(obj.url);
        if (u && !seen.has(u)) {
          seen.add(u);
          links.push({ label: typeof obj.name === 'string' ? obj.name : extractDomain(u), url: u });
        }
      }
    }
  }
  return links;
}

type ConvictionEntry = Record<string, unknown>;

function convictionSources(c: ConvictionEntry): SourceLink[] {
  const links: SourceLink[] = [];
  const seen = new Set<string>();
  for (let i = 1; i <= 5; i++) {
    const u = safeUrl(c[`source${i}_url`]);
    const desc = c[`source${i}_description`];
    if (u && !seen.has(u)) {
      seen.add(u);
      links.push({ label: typeof desc === 'string' && desc ? desc : extractDomain(u), url: u });
    }
  }
  return links;
}

function useResearchResults(filters: ResearchFilters) {
  return useQuery({
    queryKey: ['research-results', filters.sort],
    queryFn: async (): Promise<ResearchItem[]> => {
      const ascending = filters.sort === 'oldest';

      const [docsRes, eventsRes, enemiesRes] = await Promise.all([
        supabase
          .from('documents')
          .select('id, title, description, date_published, document_type, verification_tier, source_url, metadata')
          .order('date_published', { ascending })
          .limit(600),
        supabase
          .from('events')
          .select('id, title, description, event_date, pillar, metadata')
          .order('event_date', { ascending })
          .limit(400),
        supabase
          .from('enemies_of_truth')
          .select('id, name, date_added, severity, summary, sources')
          .order('date_added', { ascending })
          .limit(300),
      ]);

      const items: ResearchItem[] = [];

      for (const d of (docsRes.data ?? []) as DocRow[]) {
        const meta = d.metadata as Record<string, unknown> | null;
        const rawPillar = (meta?.pillar as string) ?? (d.pillar_slug as string) ?? (d.document_type as string) ?? null;
        const pillarSlug = normalizePillarSlug(rawPillar);
        const pillar = normalizePillar(rawPillar);
        items.push({
          id: d.id as string,
          itemType: 'Document',
          title: d.title as string,
          date: (d.date_published as string) ?? null,
          pillarSlug,
          pillar,
          sources: docSources(d),
          verificationTier: (d.verification_tier as ResearchItem['verificationTier']) ?? null,
          tags: undefined,
          snippet: (d.description as string) ?? null,
        });
      }

      for (const e of (eventsRes.data ?? []) as EventRow[]) {
        const rawPillar = (e.pillar as string) ?? null;
        const pillarSlug = normalizePillarSlug(rawPillar);
        const pillar = normalizePillar(rawPillar);
        items.push({
          id: e.id as string,
          itemType: 'Event',
          title: e.title as string,
          date: (e.event_date as string) ?? null,
          pillarSlug,
          pillar,
          sources: eventSources(e),
          snippet: (e.description as string) ?? null,
        });
      }

      for (const en of (enemiesRes.data ?? []) as EnemyRow[]) {
        items.push({
          id: en.id as string,
          itemType: 'Watchlist',
          title: en.name as string,
          date: (en.date_added as string) ?? null,
          pillarSlug: null,
          pillar: null,
          sources: enemySources(en),
          severity: (en.severity as string) ?? null,
          snippet: (en.summary as string) ?? null,
        });
      }

      const allConvictions = [
        ...governmentConvictions,
        ...corporateConvictions,
        ...entertainmentConvictions,
        ...lawEnforcementConvictions,
        ...militaryConvictions,
        ...medicalConvictions,
        ...religiousConvictions,
      ] as ConvictionEntry[];

      allConvictions.forEach((c, idx) => {
        const rawPillar = (c.category as string) ?? (c.subcategory as string) ?? null;
        items.push({
          id: `conviction-${idx}`,
          itemType: 'Conviction',
          title: c.name as string,
          date: (c.conviction_date as string) ?? null,
          pillarSlug: normalizePillarSlug(rawPillar),
          pillar: normalizePillar(rawPillar),
          sources: convictionSources(c),
          snippet: (c.charges as string) ?? (c.status as string) ?? null,
        });
      });

      const deaths = parseCsvDeaths(suspiciousDeathsCsv);
      deaths.forEach((d, idx) => {
        items.push({
          id: `death-${idx}`,
          itemType: 'Death',
          title: d.name,
          date: d.date || null,
          pillarSlug: null,
          pillar: null,
          sources: buildSourceLinks(d.sources),
          snippet: d.occupation ? `${d.occupation}${d.connection ? ` — ${d.connection}` : ''}` : d.connection || null,
        });
      });

      (congressTrades as Array<Record<string, string>>).forEach((t, idx) => {
        items.push({
          id: `trade-${idx}`,
          itemType: 'Trade',
          title: `${t.Member} — ${t.Ticker}`,
          date: t.Date || null,
          pillarSlug: 'financial-systems',
          pillar: 'Financial Systems',
          sources: buildSourceLinks(t.Source),
          snippet: `${t.Type} · ${t.Company} · ${t.Amount}`,
        });
      });

      dynastiesIndex.forEach(dynasty => {
        items.push({
          id: `dynasty-${dynasty.id}`,
          itemType: 'Family',
          title: dynasty.title,
          date: null,
          pillarSlug: null,
          pillar: null,
          sources: [],
          dynastyName: dynasty.id,
          snippet: dynasty.tagline,
        });
      });

      const sorted = items.sort((a, b) => {
        const da = a.date ?? '';
        const db = b.date ?? '';
        return ascending ? da.localeCompare(db) : db.localeCompare(da);
      });

      return sorted;
    },
    staleTime: 120_000,
  });
}

const CANONICAL_SET = new Set<string>(CANONICAL_PILLARS);

function applyFilters(items: ResearchItem[], filters: ResearchFilters): ResearchItem[] {
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
  if (filters.pillars?.length) {
    const selected = filters.pillars.filter(p => CANONICAL_SET.has(p));
    if (selected.length) {
      out = [
        ...out.filter(i => i.pillar != null && selected.includes(i.pillar)),
        ...out.filter(i => i.pillar == null || !selected.includes(i.pillar)),
      ];
    }
  } else if (filters.pillarSlugs?.length) {
    const selected = filters.pillarSlugs;
    if (selected.length) {
      out = [
        ...out.filter(i => i.pillarSlug != null && selected.includes(i.pillarSlug)),
        ...out.filter(i => i.pillarSlug == null || !selected.includes(i.pillarSlug)),
      ];
    }
  }
  if (filters.verificationTiers?.length) {
    out = out.filter(i => i.verificationTier && filters.verificationTiers!.includes(i.verificationTier));
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

function countActiveFilters(filters: ResearchFilters): number {
  let n = 0;
  if (filters.query) n++;
  if (filters.pillars?.length) n += filters.pillars.length;
  else if (filters.pillarSlugs?.length) n += filters.pillarSlugs.length;
  if (filters.types?.length) n += filters.types.length;
  if (filters.verificationTiers?.length) n += filters.verificationTiers.length;
  if (filters.dateFrom) n++;
  if (filters.dateTo) n++;
  if (filters.tags?.length) n += filters.tags.length;
  if (filters.sort) n++;
  return n;
}

function DetailContent({ item }: { item: ResearchItem }) {
  return (
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
        {item.pillar && (
          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground uppercase tracking-wide">
            {item.pillar}
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

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Sources</p>
        {item.sources.length > 0 ? (
          <ul className="space-y-1.5">
            {item.sources.map((src, idx) => (
              <li key={idx}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all"
                >
                  <ExternalLink size={11} className="shrink-0" />
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-muted-foreground italic">No primary source linked yet.</p>
        )}
      </div>

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
  );
}

function DesktopDetailPanel({ item, onClose }: { item: ResearchItem; onClose: () => void }) {
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
        <DetailContent item={item} />
      </ScrollArea>
    </div>
  );
}

function MobileDetailBottomSheet({ item, onClose }: { item: ResearchItem; onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        onClick={onClose}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-[70] flex flex-col bg-background rounded-t-2xl shadow-2xl"
        style={{ height: '65vh' }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Details</span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <X size={15} />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <DetailContent item={item} />
        </div>
      </div>
    </>
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

export function ResultsDrawer({ open, onOpenChange, corkboard }: ResultsDrawerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedItem, setSelectedItem] = useState<ResearchItem | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    filters,
    setQuery,
    setPillars,
    setTypes,
    setVerificationTiers,
    setDateRange,
    setTags,
    setSort,
    clearAll,
  } = useResearchFilters();

  const { data: rawItems = [], isLoading, error } = useResearchResults(filters);
  const { pins, pinItem, unpinItem, isItemPinned } = corkboard;

  const results = useMemo(() => applyFilters(rawItems, filters), [rawItems, filters]);

  const activeFilterCount = useMemo(() => countActiveFilters(filters), [filters]);
  const hasActiveFilters = activeFilterCount > 0;

  async function handlePinToggle(item: ResearchItem) {
    if (isItemPinned(item.itemType, item.id)) {
      const pin = pins.find(p => p.item_type === item.itemType && p.item_id === item.id);
      if (pin) await unpinItem(pin.id);
    } else {
      await pinItem(item);
    }
  }

  function handleSwitchMode(mode: ViewMode) {
    setViewMode(mode);
    setSelectedItem(null);
    setMobileFiltersOpen(false);
  }

  const filterChips = hasActiveFilters && viewMode === 'list' ? (
    <div className="px-4 py-1.5 border-b border-border shrink-0">
      <ActiveFilterChips
        filters={filters}
        onClearQuery={() => setQuery(undefined)}
        onClearPillar={s => setPillars((filters.pillars ?? []).filter(p => p !== s))}
        onClearType={t => setTypes((filters.types ?? []).filter(x => x !== t) as ResearchItem['itemType'][])}
        onClearVerificationTier={tier => setVerificationTiers((filters.verificationTiers ?? []).filter(x => x !== tier) as ResearchFilters['verificationTiers'])}
        onClearDateRange={() => setDateRange(null, null)}
        onClearTag={tag => setTags((filters.tags ?? []).filter(x => x !== tag))}
        onClearSort={() => setSort(undefined)}
        onClearAll={clearAll}
      />
    </div>
  ) : null;

  const resultCountBar = (
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
  );

  const resultsList = (
    <>
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
    </>
  );

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="p-0 flex flex-col w-full sm:max-w-none lg:w-[1000px] xl:w-[1160px]"
        >
          <SheetHeader className="px-4 py-3 border-b border-border shrink-0">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-base font-semibold">Research results</SheetTitle>
              <div className="flex items-center gap-1 mr-6">
                <button
                  onClick={() => handleSwitchMode('list')}
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
                  onClick={() => handleSwitchMode('corkboard')}
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

          {filterChips}

          <div className="flex-1 min-h-0 overflow-hidden">
            {viewMode === 'corkboard' ? (
              <CorkboardPanel corkboard={corkboard} />
            ) : (
              <>
                {/* ── Desktop layout (lg+) ─────────────────────────────────── */}
                <div className="hidden lg:flex h-full min-h-0">
                  <div className="w-[200px] shrink-0 border-r border-border overflow-hidden">
                    <ResearchFilterSidebar />
                  </div>

                  <div className="flex-1 min-w-0 flex min-h-0">
                    <div className="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col">
                      {resultCountBar}
                      <ScrollArea className="flex-1 min-h-0">
                        {resultsList}
                      </ScrollArea>
                    </div>

                    {selectedItem && (
                      <div className="w-[280px] xl:w-[320px] shrink-0">
                        <DesktopDetailPanel
                          item={selectedItem}
                          onClose={() => setSelectedItem(null)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Mobile layout (< lg) ─────────────────────────────────── */}
                <div className="flex lg:hidden flex-col h-full min-h-0">
                  {/* Sticky filter toggle bar */}
                  <div className="sticky top-0 z-10 bg-background border-b border-border shrink-0">
                    <div className="flex items-center justify-between px-4 py-2">
                      <button
                        onClick={() => setMobileFiltersOpen(v => !v)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-medium text-foreground hover:bg-accent transition-colors"
                      >
                        <SlidersHorizontal size={13} />
                        {activeFilterCount > 0 ? `Filters (${activeFilterCount})` : 'Filters'}
                        {mobileFiltersOpen
                          ? <ChevronUp size={12} className="ml-0.5" />
                          : <ChevronDown size={12} className="ml-0.5" />}
                      </button>
                      <span className="text-xs text-muted-foreground">
                        {isLoading ? 'Loading…' : `${results.length.toLocaleString()} result${results.length !== 1 ? 's' : ''}`}
                      </span>
                    </div>

                    {mobileFiltersOpen && (
                      <div className="border-t border-border max-h-[45vh] overflow-y-auto">
                        <ResearchFilterSidebar />
                      </div>
                    )}
                  </div>

                  <ScrollArea className="flex-1 min-h-0">
                    {resultsList}
                  </ScrollArea>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile bottom-sheet detail panel (rendered outside Sheet to avoid z-index nesting) */}
      {selectedItem && (
        <div className="lg:hidden">
          <MobileDetailBottomSheet
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        </div>
      )}
    </>
  );
}
