export type ResearchItemType =
  | 'document'
  | 'event'
  | 'watchlist'
  | 'conviction'
  | 'incident'
  | 'death'
  | 'trade'
  | 'family';

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
