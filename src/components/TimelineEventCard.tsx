import { Event, Document } from '@/lib/supabase';
import { FileText, ExternalLink, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { normalizePillarName } from '@/lib/pillarUtils';
import { getDisplayDate, getPillarColor, getEraForYear, getSortableYear } from '@/lib/timelineUtils';

interface TimelineEventCardProps {
  event: Event;
  documents: Document[];
  onOpenDocument: (docId: string) => void;
}

export function TimelineEventCard({ event, documents, onOpenDocument }: TimelineEventCardProps) {
  const normalizedPillar = normalizePillarName(event.pillar);
  const pillarColor = getPillarColor(event.pillar);
  const displayDate = getDisplayDate(event);
  const year = getSortableYear(event);
  const era = getEraForYear(year);

  const meta = event.metadata as Record<string, unknown> | null;
  const sources = (meta?.sources || meta?.source_links || []) as string[];
  const hasDocuments = event.document_ids && Array.isArray(event.document_ids) && event.document_ids.length > 0;
  const hasExternalSources = Array.isArray(sources) && sources.length > 0;

  return (
    <div className="relative pl-20">
      <div
        className="absolute left-6 top-2 w-5 h-5 rounded-full border-4 bg-[#0a0a0a]"
        style={{ borderColor: pillarColor }}
      />

      <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className="shrink-0"
                style={{ borderColor: pillarColor, color: pillarColor }}
              >
                {normalizedPillar}
              </Badge>
              {era && (
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-opacity-30"
                  style={{ borderColor: era.color, color: era.color }}
                >
                  {era.label}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-[#e5e5e5]">
              {event.title}
            </h3>
          </div>
          <time className="text-sm text-[#a0a0a0] font-mono whitespace-nowrap shrink-0">
            {displayDate}
          </time>
        </div>

        <p className="text-[#a0a0a0] leading-relaxed mb-4">
          {event.description}
        </p>

        <div className="border-t border-white/10 pt-4 space-y-4">
          {hasDocuments && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-sm text-[#a0a0a0]">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Evidence Board Documents</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(event.document_ids as string[]).map((docId: string) => {
                  const doc = documents.find((d) => d.id === docId);
                  return doc ? (
                    <Button
                      key={docId}
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenDocument(docId)}
                      className="text-xs border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10"
                    >
                      <Link2 className="w-3 h-3 mr-1" />
                      {doc.title}
                    </Button>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {hasExternalSources && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-sm text-[#a0a0a0]">
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Sources</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sources.map((source: string, idx: number) => {
                  const isUrl = source.startsWith('http://') || source.startsWith('https://');
                  if (isUrl) {
                    return (
                      <a
                        key={idx}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs border border-[#ffbf00]/30 text-[#ffbf00] hover:bg-[#ffbf00]/10 px-2 py-1 rounded transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {new URL(source).hostname.replace('www.', '')}
                      </a>
                    );
                  }
                  return (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-[#ffbf00]/30 text-[#ffbf00]"
                    >
                      {source}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {!hasDocuments && !hasExternalSources && (
            <div className="flex items-center gap-2 text-sm text-red-400/70">
              <span className="text-xs">No source documentation available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
