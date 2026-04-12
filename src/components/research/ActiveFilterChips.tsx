import { X } from 'lucide-react';
import type { ResearchFilters } from '../../lib/researchItems';

export interface ActiveFilterChipsProps {
  filters: ResearchFilters;
  onClearQuery: () => void;
  onClearPillar: (slug: string) => void;
  onClearType: (type: string) => void;
  onClearVerificationTier: (tier: string) => void;
  onClearDateRange: () => void;
  onClearTag: (tag: string) => void;
  onClearSort: () => void;
  onClearAll: () => void;
}

const TIER_LABELS: Record<string, string> = {
  verified:     'Verified',
  corroborated: 'Corroborated',
  preliminary:  'Preliminary',
};

function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

interface ChipProps {
  label: string;
  onRemove: () => void;
}

function Chip({ label, onRemove }: ChipProps) {
  return (
    <span className="inline-flex items-center gap-1 pl-2.5 pr-1 py-0.5 rounded-full text-xs font-medium bg-muted text-foreground border border-border">
      {label}
      <button
        onClick={onRemove}
        className="ml-0.5 p-0.5 rounded-full hover:bg-accent transition-colors duration-100"
        aria-label={`Remove filter: ${label}`}
      >
        <X size={10} strokeWidth={2.5} />
      </button>
    </span>
  );
}

export function ActiveFilterChips({
  filters,
  onClearQuery,
  onClearPillar,
  onClearType,
  onClearVerificationTier,
  onClearDateRange,
  onClearTag,
  onClearSort,
  onClearAll,
}: ActiveFilterChipsProps) {
  const chips: React.ReactNode[] = [];

  if (filters.query) {
    chips.push(
      <Chip
        key="query"
        label={`Search: "${filters.query}"`}
        onRemove={onClearQuery}
      />
    );
  }

  for (const slug of filters.pillarSlugs ?? []) {
    chips.push(
      <Chip
        key={`pillar-${slug}`}
        label={`Pillar: ${slugToLabel(slug)}`}
        onRemove={() => onClearPillar(slug)}
      />
    );
  }

  for (const type of filters.types ?? []) {
    chips.push(
      <Chip
        key={`type-${type}`}
        label={`Type: ${type}`}
        onRemove={() => onClearType(type)}
      />
    );
  }

  for (const tier of filters.verificationTiers ?? []) {
    chips.push(
      <Chip
        key={`tier-${tier}`}
        label={`Tier: ${TIER_LABELS[tier] ?? slugToLabel(tier)}`}
        onRemove={() => onClearVerificationTier(tier)}
      />
    );
  }

  if (filters.dateFrom || filters.dateTo) {
    const from = filters.dateFrom ?? '…';
    const to = filters.dateTo ?? '…';
    chips.push(
      <Chip
        key="date-range"
        label={`Date: ${from} – ${to}`}
        onRemove={onClearDateRange}
      />
    );
  }

  for (const tag of filters.tags ?? []) {
    chips.push(
      <Chip
        key={`tag-${tag}`}
        label={`Tag: ${tag}`}
        onRemove={() => onClearTag(tag)}
      />
    );
  }

  if (filters.sort) {
    const sortLabel = filters.sort === 'newest' ? 'Newest' : 'Oldest';
    chips.push(
      <Chip
        key="sort"
        label={`Sort: ${sortLabel}`}
        onRemove={onClearSort}
      />
    );
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-1 py-1">
      {chips}
      <button
        onClick={onClearAll}
        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors duration-100 ml-1"
      >
        Clear all
      </button>
    </div>
  );
}
