import { Event } from '@/lib/supabase';
import { normalizePillarName } from '@/lib/pillarUtils';

export interface EraDefinition {
  label: string;
  start: number;
  end: number;
  color: string;
}

export const ERAS: EraDefinition[] = [
  { label: 'Ancient', start: -10000, end: 499, color: '#c9a96e' },
  { label: 'Medieval', start: 500, end: 1499, color: '#8b6914' },
  { label: 'Early Modern', start: 1500, end: 1749, color: '#c17f59' },
  { label: 'Revolution', start: 1750, end: 1849, color: '#e07b39' },
  { label: 'Industrial', start: 1850, end: 1913, color: '#a0522d' },
  { label: 'World Wars', start: 1914, end: 1945, color: '#cc3333' },
  { label: 'Cold War', start: 1946, end: 1991, color: '#3a86ff' },
  { label: 'Modern', start: 1992, end: 2030, color: '#00ff41' },
];

export function getSortableYear(event: Event): number {
  const meta = event.metadata as Record<string, unknown> | null;
  if (meta?.era === 'BCE' && typeof meta.year === 'number') {
    return meta.year;
  }
  const dateStr = event.event_date;
  if (!dateStr) return 9999;
  const parts = dateStr.split('T')[0].split('-');
  return parseInt(parts[0], 10) || 9999;
}

export function getSortableKey(event: Event): number {
  const meta = event.metadata as Record<string, unknown> | null;
  if (meta?.era === 'BCE' && typeof meta.year === 'number') {
    return meta.year;
  }
  const dateStr = event.event_date;
  if (!dateStr) return 99990000;
  const parts = dateStr.split('T')[0].split('-');
  return (
    parseInt(parts[0], 10) * 10000 +
    parseInt(parts[1] || '01', 10) * 100 +
    parseInt(parts[2] || '01', 10)
  ) || 99990000;
}

export function getDisplayDate(event: Event): string {
  const meta = event.metadata as Record<string, unknown> | null;
  if (meta?.display_date && typeof meta.display_date === 'string') {
    return meta.display_date;
  }
  if (meta?.era === 'BCE' && typeof meta.year === 'number') {
    return `${Math.abs(meta.year)} BCE`;
  }
  const dateStr = event.event_date;
  if (!dateStr) return 'Date Unknown';
  const parts = dateStr.split('T')[0].split('-');
  if (parts.length < 3) return 'Date Unknown';
  const year = parseInt(parts[0], 10);
  if (year <= 1) return 'Date Unknown';
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (month === 1 && day === 1) return `${year}`;
  return `${months[month - 1]} ${day}, ${year}`;
}

export function getEraForYear(year: number): EraDefinition | undefined {
  return ERAS.find(era => year >= era.start && year <= era.end);
}

export const PILLAR_COLORS: Record<string, string> = {
  'Financial Systems': '#00ff41',
  'Space & Black Budget Programs': '#9d4edd',
  'AI & Surveillance': '#06ffa5',
  'Government Health Transparency': '#ff006e',
  'Child Safety & Trafficking': '#fb5607',
  'Energy & Suppressed Technology': '#ffbe0b',
  'Media Manipulation': '#8338ec',
  'War & Intelligence Operations': '#e63946',
  'Elections & Democratic Process': '#3a86ff',
  'Environmental & Corporate Accountability': '#5A6F4C',
};

export function getPillarColor(pillar: string): string {
  const normalized = normalizePillarName(pillar);
  return PILLAR_COLORS[normalized] || '#00ff41';
}

export function deduplicateEvents(events: Event[]): Event[] {
  const titleMap = new Map<string, Event>();
  for (const event of events) {
    if (!event.title || event.title.trim() === '') continue;
    const existing = titleMap.get(event.title);
    if (!existing) {
      titleMap.set(event.title, event);
    } else {
      const existingYear = getSortableYear(existing);
      const newYear = getSortableYear(event);
      if (newYear < existingYear) {
        titleMap.set(event.title, event);
      }
    }
  }
  return Array.from(titleMap.values());
}
