import { supabase } from './supabase';

export type SearchResultType = 'evidence' | 'dossier' | 'timeline';

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
  total: number;
}

async function searchDocuments(query: string, limit = 8): Promise<SearchResult[]> {
  const { data, error } = await supabase
    .from('documents')
    .select('id, title, description, verification_tier, document_type, date_published, slug')
    .textSearch('title', query, { type: 'plain', config: 'english' })
    .limit(limit);

  if (error || !data) return [];

  return data.map(d => ({
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

async function searchEnemies(query: string, limit = 4): Promise<SearchResult[]> {
  const { data, error } = await supabase
    .from('enemies_of_truth')
    .select('id, name, title, summary, severity')
    .or(`name.ilike.%${query}%,title.ilike.%${query}%,summary.ilike.%${query}%`)
    .limit(limit);

  if (error || !data) return [];

  return data.map(d => ({
    id: d.id,
    type: 'dossier' as SearchResultType,
    title: d.name,
    description: d.title + (d.summary ? ` — ${d.summary.substring(0, 80)}` : ''),
    severity: d.severity,
  }));
}

async function searchEvents(query: string, limit = 4): Promise<SearchResult[]> {
  const { data, error } = await supabase
    .from('events')
    .select('id, title, description, event_date, pillar')
    .textSearch('title', query, { type: 'plain', config: 'english' })
    .limit(limit);

  if (error || !data) return [];

  return data.map(d => ({
    id: d.id,
    type: 'timeline' as SearchResultType,
    title: d.title,
    description: d.description,
    pillar: d.pillar,
    date: d.event_date,
  }));
}

export async function globalSearch(query: string): Promise<GroupedSearchResults> {
  if (!query.trim()) {
    return { evidence: [], dossier: [], timeline: [], total: 0 };
  }

  const [evidence, dossier, timeline] = await Promise.all([
    searchDocuments(query, 8),
    searchEnemies(query, 4),
    searchEvents(query, 4),
  ]);

  return {
    evidence,
    dossier,
    timeline,
    total: evidence.length + dossier.length + timeline.length,
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

  const offset = (page - 1) * pageSize;
  const { types = ['evidence', 'dossier', 'timeline'] } = filters;

  const promises: Promise<SearchResult[]>[] = [];

  if (types.includes('evidence')) {
    let q = supabase
      .from('documents')
      .select('id, title, description, verification_tier, document_type, date_published, slug')
      .textSearch('title', query, { type: 'plain', config: 'english' });

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
    promises.push(
      supabase
        .from('enemies_of_truth')
        .select('id, name, title, summary, severity')
        .or(`name.ilike.%${query}%,title.ilike.%${query}%,summary.ilike.%${query}%`)
        .range(0, pageSize - 1)
        .then(({ data }) =>
          (data || []).map(d => ({
            id: d.id,
            type: 'dossier' as SearchResultType,
            title: d.name,
            description: d.title + (d.summary ? ` — ${d.summary.substring(0, 80)}` : ''),
            severity: d.severity,
          }))
        )
    );
  }

  if (types.includes('timeline')) {
    promises.push(
      supabase
        .from('events')
        .select('id, title, description, event_date, pillar')
        .textSearch('title', query, { type: 'plain', config: 'english' })
        .range(0, pageSize - 1)
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

  const allResults = (await Promise.all(promises)).flat();

  return {
    results: allResults,
    total: allResults.length,
  };
}
