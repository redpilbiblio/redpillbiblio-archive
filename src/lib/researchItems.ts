export type ResearchItemType =
  | 'Document'
  | 'Event'
  | 'Watchlist'
  | 'Conviction'
  | 'Incident'
  | 'Death'
  | 'Trade'
  | 'Family';

export interface SourceLink {
  label: string;
  url: string;
}

export interface ResearchItem {
  id: string;
  itemType: ResearchItemType;
  title: string;
  date: string | null;
  pillarSlug: string | null;
  pillar: string | null;
  sources: SourceLink[];
  dynastyName?: string | null;
  severity?: string | null;
  verificationTier?: 'verified' | 'corroborated' | 'preliminary' | null;
  tags?: string[];
  snippet?: string | null;
}

export interface ResearchFilters {
  query?: string;
  pillars?: string[];
  pillarSlugs?: string[];
  types?: ResearchItemType[];
  verificationTiers?: ('verified' | 'corroborated' | 'preliminary')[];
  dateFrom?: string | null;
  dateTo?: string | null;
  tags?: string[];
  sort?: 'newest' | 'oldest';
}

export function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}
