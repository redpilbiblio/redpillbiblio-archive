export type ResearchItemType =
  | 'Document'
  | 'Event'
  | 'Watchlist'
  | 'Conviction'
  | 'Incident'
  | 'Death'
  | 'Trade'
  | 'Family';

export interface ResearchItem {
  id: string;
  itemType: ResearchItemType;
  title: string;
  date: string | null;
  pillarSlug: string | null;
  dynastyName?: string | null;
  severity?: string | null;
  verificationTier?: 'verified' | 'corroborated' | 'preliminary' | null;
  tags?: string[];
  snippet?: string | null;
}

export interface ResearchFilters {
  query?: string;
  pillarSlugs?: string[];
  types?: ResearchItemType[];
  verificationTiers?: ('verified' | 'corroborated' | 'preliminary')[];
  dateFrom?: string | null;
  dateTo?: string | null;
  tags?: string[];
  sort?: 'newest' | 'oldest';
}

export function normalizeDocuments(docs: Array<{
  id: string;
  title: string;
  date_published: string | null;
  document_type: string | null;
  verification_tier: 'verified' | 'corroborated' | 'preliminary' | null;
  tags?: string[] | null;
  snippet?: string | null;
}>): ResearchItem[] {
  return docs.map(doc => ({
    id: doc.id,
    itemType: 'Document' as const,
    title: doc.title,
    date: doc.date_published ?? null,
    pillarSlug: doc.document_type ?? null,
    verificationTier: doc.verification_tier ?? null,
    tags: doc.tags ?? undefined,
    snippet: doc.snippet ?? null,
  }));
}

export function normalizeEvents(events: Array<{
  id: string;
  title: string;
  event_date: string | null;
  pillar: string | null;
  snippet?: string | null;
}>): ResearchItem[] {
  return events.map(ev => ({
    id: ev.id,
    itemType: 'Event' as const,
    title: ev.title,
    date: ev.event_date ?? null,
    pillarSlug: ev.pillar ?? null,
    snippet: ev.snippet ?? null,
  }));
}

export function normalizeEnemies(enemies: Array<{
  id: string;
  name: string;
  date_added: string | null;
  severity: string | null;
  snippet?: string | null;
}>): ResearchItem[] {
  return enemies.map(e => ({
    id: e.id,
    itemType: 'Watchlist' as const,
    title: e.name,
    date: e.date_added ?? null,
    pillarSlug: null,
    severity: e.severity ?? null,
    snippet: e.snippet ?? null,
  }));
}

export function normalizeConvictions(raw: Array<{
  id: string;
  name: string;
  charges: string;
  conviction_date: string | null;
  sector: string | null;
}>): ResearchItem[] {
  return raw.map(r => ({
    id: r.id,
    itemType: 'Conviction' as const,
    title: r.name,
    date: r.conviction_date ?? null,
    pillarSlug: null,
    snippet: r.charges ?? null,
  }));
}

export function normalizeIncidents(raw: Array<{
  id: string;
  title: string;
  date: string | null;
}>): ResearchItem[] {
  return raw.map(r => ({
    id: r.id,
    itemType: 'Incident' as const,
    title: r.title,
    date: r.date ?? null,
    pillarSlug: 'environmental-corporate-accountability',
  }));
}

export function normalizeDeaths(raw: Array<{
  id: string;
  name: string;
  date: string | null;
}>): ResearchItem[] {
  return raw.map(r => ({
    id: r.id,
    itemType: 'Death' as const,
    title: r.name,
    date: r.date ?? null,
    pillarSlug: null,
  }));
}

export function normalizeTrades(raw: Array<{
  id: string;
  member: string;
  ticker: string;
  date: string | null;
}>): ResearchItem[] {
  return raw.map(r => ({
    id: r.id,
    itemType: 'Trade' as const,
    title: `${r.member} — ${r.ticker}`,
    date: r.date ?? null,
    pillarSlug: 'financial-systems',
  }));
}

export function normalizeFamilies(raw: Array<{
  id: string;
  name: string;
  dynastyName: string;
  activeYear?: string | null;
}>): ResearchItem[] {
  return raw.map(r => ({
    id: r.id,
    itemType: 'Family' as const,
    title: r.name,
    date: r.activeYear ?? null,
    pillarSlug: null,
    dynastyName: r.dynastyName,
  }));
}

export function useAllResearchItems(_filters: ResearchFilters): ResearchItem[] {
  return [];
}
