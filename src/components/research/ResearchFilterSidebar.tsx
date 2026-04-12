import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useResearchFilters } from '../../hooks/useResearchFilters';
import type { ResearchItemType } from '../../lib/researchItems';

export interface ResearchFilterSidebarProps {}

const PILLARS: { slug: string; label: string }[] = [
  { slug: 'financial-systems',                       label: 'Financial Systems' },
  { slug: 'media-manipulation',                      label: 'Media Manipulation' },
  { slug: 'health-transparency',                     label: 'Health Transparency' },
  { slug: 'elections-governance',                    label: 'Elections & Governance' },
  { slug: 'war-intelligence',                        label: 'War & Intelligence' },
  { slug: 'energy-suppressed-technology',            label: 'Energy & Suppressed Technology' },
  { slug: 'child-safety-trafficking',                label: 'Child Safety & Trafficking' },
  { slug: 'space-black-budget',                      label: 'Space & Black Budget' },
  { slug: 'ai-surveillance',                         label: 'AI & Surveillance' },
  { slug: 'environmental-corporate-accountability',  label: 'Environmental & Corporate Accountability' },
];

const TYPES: { value: ResearchItemType; label: string }[] = [
  { value: 'document',   label: 'Document' },
  { value: 'event',      label: 'Event' },
  { value: 'watchlist',  label: 'Watchlist' },
  { value: 'conviction', label: 'Conviction' },
  { value: 'incident',   label: 'Incident' },
  { value: 'death',      label: 'Death' },
  { value: 'trade',      label: 'Trade' },
  { value: 'family',     label: 'Family' },
];

const TIERS: { value: 'verified' | 'corroborated' | 'preliminary'; label: string }[] = [
  { value: 'verified',     label: 'Verified' },
  { value: 'corroborated', label: 'Corroborated' },
  { value: 'preliminary',  label: 'Preliminary' },
];

const SEVERITIES = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];

const DYNASTIES = ['Bush', 'Clinton', 'Rockefeller', 'Rothschild', 'Soros', 'Gates'];

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        {title}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && (
        <div className="px-3 pb-3 space-y-1.5">
          {children}
        </div>
      )}
    </div>
  );
}

interface CheckRowProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function CheckRow({ id, label, checked, onCheckedChange }: CheckRowProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={val => onCheckedChange(val === true)}
        className="h-3.5 w-3.5"
      />
      <Label
        htmlFor={id}
        className="text-xs font-normal cursor-pointer leading-none"
      >
        {label}
      </Label>
    </div>
  );
}

export function ResearchFilterSidebar(_props: ResearchFilterSidebarProps) {
  const {
    filters,
    setPillars,
    setTypes,
    setVerificationTiers,
    setSeverities,
    setDynastyNames,
    setDateRange,
    setSort,
  } = useResearchFilters();

  const activePillars   = filters.pillarSlugs    ?? [];
  const activeTypes     = filters.types           ?? [];
  const activeTiers     = filters.verificationTiers ?? [];
  const activeSeverities = filters.severities     ?? [];
  const activeDynasties = filters.dynastyNames    ?? [];

  function togglePillar(slug: string, checked: boolean) {
    setPillars(
      checked ? [...activePillars, slug] : activePillars.filter(s => s !== slug)
    );
  }

  function toggleType(value: ResearchItemType, checked: boolean) {
    setTypes(
      checked
        ? [...activeTypes, value]
        : activeTypes.filter(t => t !== value) as ResearchItemType[]
    );
  }

  function toggleTier(value: 'verified' | 'corroborated' | 'preliminary', checked: boolean) {
    const next = checked
      ? [...activeTiers, value]
      : activeTiers.filter(t => t !== value);
    setVerificationTiers(next as typeof activeTiers);
  }

  function toggleSeverity(value: string, checked: boolean) {
    setSeverities(
      checked ? [...activeSeverities, value] : activeSeverities.filter(s => s !== value)
    );
  }

  function toggleDynasty(name: string, checked: boolean) {
    setDynastyNames(
      checked ? [...activeDynasties, name] : activeDynasties.filter(d => d !== name)
    );
  }

  const showVerification =
    activeTypes.length === 0 || activeTypes.includes('document');
  const showSeverity =
    activeTypes.length === 0 || activeTypes.includes('watchlist');
  const showDynasty =
    activeTypes.length === 0 || activeTypes.includes('family');

  const hasDateRange = !!(filters.dateFrom || filters.dateTo);

  return (
    <div className="h-full overflow-y-auto text-sm">
      <Section title="Pillar">
        {PILLARS.map(p => (
          <CheckRow
            key={p.slug}
            id={`pillar-${p.slug}`}
            label={p.label}
            checked={activePillars.includes(p.slug)}
            onCheckedChange={c => togglePillar(p.slug, c)}
          />
        ))}
      </Section>

      <Section title="Type">
        {TYPES.map(t => (
          <CheckRow
            key={t.value}
            id={`type-${t.value}`}
            label={t.label}
            checked={activeTypes.includes(t.value)}
            onCheckedChange={c => toggleType(t.value, c)}
          />
        ))}
      </Section>

      {showVerification && (
        <Section title="Verification">
          {TIERS.map(t => (
            <CheckRow
              key={t.value}
              id={`tier-${t.value}`}
              label={t.label}
              checked={activeTiers.includes(t.value)}
              onCheckedChange={c => toggleTier(t.value, c)}
            />
          ))}
        </Section>
      )}

      {showSeverity && (
        <Section title="Severity">
          {SEVERITIES.map(s => (
            <CheckRow
              key={s}
              id={`severity-${s}`}
              label={s.charAt(0) + s.slice(1).toLowerCase()}
              checked={activeSeverities.includes(s)}
              onCheckedChange={c => toggleSeverity(s, c)}
            />
          ))}
        </Section>
      )}

      {showDynasty && (
        <Section title="Dynasty">
          {DYNASTIES.map(d => (
            <CheckRow
              key={d}
              id={`dynasty-${d}`}
              label={d}
              checked={activeDynasties.includes(d)}
              onCheckedChange={c => toggleDynasty(d, c)}
            />
          ))}
        </Section>
      )}

      <Section title="Date Range">
        <div className="space-y-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="date-from" className="text-xs text-muted-foreground">From</Label>
            <input
              id="date-from"
              type="date"
              value={filters.dateFrom ?? ''}
              onChange={e => setDateRange(e.target.value || null, filters.dateTo ?? null)}
              className="w-full rounded-md border border-input bg-background px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="date-to" className="text-xs text-muted-foreground">To</Label>
            <input
              id="date-to"
              type="date"
              value={filters.dateTo ?? ''}
              onChange={e => setDateRange(filters.dateFrom ?? null, e.target.value || null)}
              className="w-full rounded-md border border-input bg-background px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          {hasDateRange && (
            <button
              onClick={() => setDateRange(null, null)}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Clear dates
            </button>
          )}
        </div>
      </Section>

      <Section title="Sort">
        <div className="flex gap-2">
          <Button
            variant={filters.sort === 'newest' || !filters.sort ? 'default' : 'outline'}
            size="sm"
            className="flex-1 text-xs h-7"
            onClick={() => setSort('newest')}
          >
            Newest first
          </Button>
          <Button
            variant={filters.sort === 'oldest' ? 'default' : 'outline'}
            size="sm"
            className="flex-1 text-xs h-7"
            onClick={() => setSort('oldest')}
          >
            Oldest first
          </Button>
        </div>
      </Section>
    </div>
  );
}
