import { useState } from 'react';
import { PanelRightOpen, PanelRightClose, ExternalLink, Pin } from 'lucide-react';
import { useCorkboardPins, type CorkboardPinsHandle } from '../../hooks/useCorkboardPins';
import { StickyNoteCard } from './StickyNoteCard';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '../ui/skeleton';

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function isValidUrl(s: unknown): s is string {
  if (typeof s !== 'string') return false;
  try { new URL(s); return true; } catch { return false; }
}

function extractLinks(snapshot: Record<string, unknown>): { url: string; label: string }[] {
  const links: { url: string; label: string }[] = [];
  const seen = new Set<string>();
  const keys = ['url', 'source_url', 'links', 'sources'];
  for (const key of keys) {
    const val = snapshot[key];
    if (typeof val === 'string' && isValidUrl(val) && !seen.has(val)) {
      seen.add(val);
      links.push({ url: val, label: extractDomain(val) });
    } else if (Array.isArray(val)) {
      for (const item of val) {
        if (typeof item === 'string' && isValidUrl(item) && !seen.has(item)) {
          seen.add(item);
          links.push({ url: item, label: extractDomain(item) });
        } else if (item && typeof item === 'object') {
          const obj = item as Record<string, unknown>;
          const u = obj.url ?? obj.href ?? obj.link;
          if (typeof u === 'string' && isValidUrl(u) && !seen.has(u)) {
            seen.add(u);
            links.push({ url: u, label: typeof obj.label === 'string' ? obj.label : extractDomain(u) });
          }
        }
      }
    }
  }
  return links;
}

function formatDate(date: unknown): string {
  if (!date || typeof date !== 'string') return 'Unknown date';
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Unknown date';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function SkeletonGrid() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ width: 220 }}>
          <Skeleton className="h-[130px] w-full rounded-lg" style={{ backgroundColor: '#fef9c3aa' }} />
        </div>
      ))}
    </div>
  );
}

export interface CorkboardPanelProps {
  corkboard?: CorkboardPinsHandle;
}

export function CorkboardPanel({ corkboard: corkboardProp }: CorkboardPanelProps = {}) {
  const ownCorkboard = useCorkboardPins();
  const { pins, loading, error, unpinItem } = corkboardProp ?? ownCorkboard;
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const selectedPin = pins.find(p => p.id === selectedPinId) ?? null;

  const snap = selectedPin?.item_snapshot ?? null;
  const title      = snap && typeof snap.title      === 'string' ? snap.title      : null;
  const snippet    = snap && typeof snap.snippet    === 'string' ? snap.snippet    : null;
  const pillarSlug = snap && typeof snap.pillarSlug === 'string' ? snap.pillarSlug : null;
  const dynasty    = snap && typeof snap.dynastyName === 'string' ? snap.dynastyName : null;
  const severity   = snap && typeof snap.severity   === 'string' ? snap.severity   : null;
  const itemType   = selectedPin ? (selectedPin.item_type ?? '') : '';
  const date       = snap ? snap.date : null;
  const links      = snap ? extractLinks(snap) : [];

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-0 overflow-hidden">
      <div className="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col">
        <div
          className="flex-1 overflow-auto"
          style={{
            backgroundImage: `
              radial-gradient(circle, #d1a97a 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px',
            backgroundColor: '#c8a06a',
            backgroundPosition: '14px 14px',
          }}
        >
          {error && (
            <div className="m-4 p-3 rounded-md bg-red-100 text-red-700 text-sm">
              Failed to load pins: {error}
            </div>
          )}

          {loading ? (
            <SkeletonGrid />
          ) : pins.length === 0 && !error ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[240px] gap-2 text-amber-900/50 select-none">
              <Pin size={32} strokeWidth={1.5} />
              <p className="text-sm font-medium">No notes pinned yet</p>
              <p className="text-xs">Pin items from the research results to see them here.</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 p-6 content-start">
              {pins.map(pin => (
                <StickyNoteCard
                  key={pin.id}
                  pin={pin}
                  onUnpin={id => {
                    if (selectedPinId === id) setSelectedPinId(null);
                    unpinItem(id);
                  }}
                  onSelect={() => setSelectedPinId(prev => prev === pin.id ? null : pin.id)}
                  selected={pin.id === selectedPinId}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {!detailsOpen ? (
        <div className="flex lg:flex-col items-center justify-start lg:justify-start gap-2 p-2 border-t lg:border-t-0 lg:border-l border-border bg-muted/40 shrink-0">
          <button
            onClick={() => setDetailsOpen(true)}
            className="p-1.5 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            title="Open details panel"
          >
            <PanelRightOpen size={16} />
          </button>
          <span className="text-[10px] text-muted-foreground hidden lg:block [writing-mode:vertical-rl] rotate-180 tracking-wider uppercase mt-1">
            Details
          </span>
        </div>
      ) : (
        <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 border-t lg:border-t-0 lg:border-l border-border flex flex-col bg-background max-h-[50vh] lg:max-h-none">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Details
            </span>
            <button
              onClick={() => setDetailsOpen(false)}
              className="p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              title="Collapse details panel"
            >
              <PanelRightClose size={15} />
            </button>
          </div>

          <ScrollArea className="flex-1 min-h-0">
            <div className="p-4">
              {!selectedPin ? (
                <div className="flex flex-col items-center justify-center min-h-[160px] gap-2 text-center text-muted-foreground select-none">
                  <PanelRightOpen size={28} strokeWidth={1.5} className="opacity-40" />
                  <p className="text-sm font-medium">Select a note on the corkboard to see full details.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-foreground">{title ?? 'Untitled'}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{formatDate(date)}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {itemType && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary text-secondary-foreground uppercase tracking-wide">
                        {itemType}
                      </span>
                    )}
                    {pillarSlug && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground uppercase tracking-wide">
                        {pillarSlug.replace(/-/g, ' ')}
                      </span>
                    )}
                    {dynasty && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800">
                        {dynasty}
                      </span>
                    )}
                    {severity && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-100 text-red-700 uppercase tracking-wide">
                        {severity}
                      </span>
                    )}
                  </div>

                  {snippet && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Summary</p>
                      <p className="text-sm text-foreground leading-relaxed">{snippet}</p>
                    </div>
                  )}

                  {links.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Sources</p>
                      <div className="space-y-1.5">
                        {links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline group"
                          >
                            <ExternalLink size={11} className="mt-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                            <span className="break-all leading-tight">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedPin.user_note && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Your Note</p>
                      <p className="text-sm text-foreground italic leading-relaxed">{selectedPin.user_note}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
