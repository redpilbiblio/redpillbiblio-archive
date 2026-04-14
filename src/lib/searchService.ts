import { supabase } from './supabase';
import { parseQuery, extractSearchTerms } from './queryParser';
import { INCIDENTS_DATA } from '@/data/incidentsData';

export type SearchResultType = 'evidence' | 'dossier' | 'timeline' | 'incident';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description?: string;
  pillar?: string;
  tier?: 'verified' | 'corroborated' | 'preliminary';
  date?: string | null;
  slug?: string;
  severity?: string;
}

export interface GroupedSearchResults {
  evidence: SearchResult[];
  dossier: SearchResult[];
  timeline: SearchResult[];
  incident: SearchResult[];
  total: number;
}

function buildIlikeOr(terms: string[], columns: string[]): string {
  const clauses: string[] = [];
  for (const term of terms) {
    for (const col of columns) {
      clauses.push(`${col}.ilike.%${term}%`);
    }
  }
  return clauses.join(',');
}

async function searchDocuments(query: string, limit = 25): Promise<SearchResult[]> {
  const pq = parseQuery(query);
  const terms = extractSearchTerms(pq);
  if (terms.length === 0) return [];

  const orFilter = buildIlikeOr(terms, ['title', 'description']);

  const { data } = await supabase
    .from('documents')
    .select('id, title, description, verification_tier, document_type, date_published, slug')
    .or(orFilter)
    .limit(limit);

  return (data || []).map(d => ({
    id: d.id,
    type: 'evidence' as SearchResultType,
    title: d.title,
    description: d.description,
    pillar: d.document_type,
    tier: d.verification_tier as 'verified' | 'corroborated' | 'preliminary',
    date: d.date_published,
    slug: d.slug,
  }));
}

async function searchEnemies(query: string, limit = 25): Promise<SearchResult[]> {
  const pq = parseQuery(query);
  const terms = extractSearchTerms(pq);
  if (terms.length === 0) return [];

  const orFilter = buildIlikeOr(terms, ['name', 'title', 'summary']);

  const { data } = await supabase
    .from('enemies_of_truth')
    .select('id, name, title, summary, severity')
    .or(orFilter)
    .limit(limit);

  if (!data) return [];

  return data.map(d => ({
    id: d.id,
    type: 'dossier' as SearchResultType,
    title: d.name,
    description: d.title + (d.summary ? ` — ${d.summary.substring(0, 120)}` : ''),
    severity: d.severity,
  }));
}

async function searchEvents(query: string, limit = 25): Promise<SearchResult[]> {
  const pq = parseQuery(query);
  const terms = extractSearchTerms(pq);
  if (terms.length === 0) return [];

  const orFilter = buildIlikeOr(terms, ['title', 'description']);

  const { data } = await supabase
    .from('events')
    .select('id, title, description, event_date, pillar')
    .or(orFilter)
    .limit(limit);

  return (data || []).map(d => ({
    id: d.id,
    type: 'timeline' as SearchResultType,
    title: d.title,
    description: d.description,
    pillar: d.pillar,
    date: d.event_date,
  }));
}

function searchIncidents(query: string, limit = 25): SearchResult[] {
  const pq = parseQuery(query);
  const terms = extractSearchTerms(pq);
  if (terms.length === 0) return [];

  const lowerTerms = terms.map(t => t.toLowerCase());

  const matches = INCIDENTS_DATA.filter(incident => {
    const searchable = [
      incident.company,
      incident.description,
      incident.location,
      incident.type,
      incident.findings,
    ].join(' ').toLowerCase();
    return lowerTerms.some(term => searchable.includes(term));
  });

  return matches.slice(0, limit).map((incident, idx) => ({
    id: `incident-${incident.date}-${idx}`,
    type: 'incident' as SearchResultType,
    title: incident.company,
    description: `${incident.type} — ${incident.location} — ${incident.description}`,
    pillar: incident.type,
    date: incident.date,
  }));
}

export async function globalSearch(query: string): Promise<GroupedSearchResults> {
  if (!query.trim()) {
    return { evidence: [], dossier: [], timeline: [], incident: [], total: 0 };
  }

  const [evidence, dossier, timeline] = await Promise.all([
    searchDocuments(query, 25),
    searchEnemies(query, 15),
    searchEvents(query, 15),
  ]);

  const incident = searchIncidents(query, 15);

  return {
    evidence,
    dossier,
    timeline,
    incident,
    total: evidence.length + dossier.length + timeline.length + incident.length,
  };
}

export async function fullSearch(
  query: string,
  filters: {
    types?: SearchResultType[];
    tiers?: string[];
    dateFrom?: string;
    dateTo?: string;
  } = {},
  page = 1,
  pageSize = 20
): Promise<{ results: SearchResult[]; total: number }> {
  if (!query.trim()) return { results: [], total: 0 };

  const pq = parseQuery(query);
  const terms = extractSearchTerms(pq);
  if (terms.length === 0) return { results: [], total: 0 };

  const offset = (page - 1) * pageSize;
  const { types = ['evidence', 'dossier', 'timeline', 'incident'] } = filters;

  const promises: Promise<SearchResult[]>[] = [];

  if (types.includes('evidence')) {
    const orFilter = buildIlikeOr(terms, ['title', 'description']);

    let q = supabase
      .from('documents')
      .select('id, title, description, verification_tier, document_type, date_published, slug')
      .or(orFilter);

    if (filters.tiers && filters.tiers.length > 0) {
      q = q.in('verification_tier', filters.tiers);
    }
    if (filters.dateFrom) q = q.gte('date_published', filters.dateFrom);
    if (filters.dateTo) q = q.lte('date_published', filters.dateTo);

    promises.push(
      q.range(offset, offset + pageSize - 1).then(({ data }) =>
        (data || []).map(d => ({
          id: d.id,
          type: 'evidence' as SearchResultType,
          title: d.title,
          description: d.description,
          pillar: d.document_type,
          tier: d.verification_tier as 'verified' | 'corroborated' | 'preliminary',
          date: d.date_published,
          slug: d.slug,
        }))
      )
    );
  }

  if (types.includes('dossier')) {
    const orFilter = buildIlikeOr(terms, ['name', 'title', 'summary']);

    promises.push(
      supabase
        .from('enemies_of_truth')
        .select('id, name, title, summary, severity')
        .or(orFilter)
        .range(offset, offset + pageSize - 1)
        .then(({ data }) =>
          (data || []).map(d => ({
            id: d.id,
            type: 'dossier' as SearchResultType,
            title: d.name,
            description: d.title + (d.summary ? ` — ${d.summary.substring(0, 120)}` : ''),
            severity: d.severity,
          }))
        )
    );
  }

  if (types.includes('timeline')) {
    const orFilter = buildIlikeOr(terms, ['title', 'description']);

    promises.push(
      supabase
        .from('events')
        .select('id, title, description, event_date, pillar')
        .or(orFilter)
        .range(offset, offset + pageSize - 1)
        .then(({ data }) =>
          (data || []).map(d => ({
            id: d.id,
            type: 'timeline' as SearchResultType,
            title: d.title,
            description: d.description,
            pillar: d.pillar,
            date: d.event_date,
          }))
        )
    );
  }

  if (types.includes('incident')) {
    promises.push(Promise.resolve(searchIncidents(query, pageSize)));
  }

  const allResults = (await Promise.all(promises)).flat();

  return {
    results: allResults,
    total: allResults.length,
  };
}
