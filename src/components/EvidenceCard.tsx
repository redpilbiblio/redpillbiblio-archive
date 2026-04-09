import { Document } from '@/lib/supabase';
import { Badge } from './ui/badge';
import { FileText, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatUTCDateShort } from '@/lib/utils';
import { normalizePillarName, getPillarSlugByName } from '@/lib/pillarUtils';

interface EvidenceCardProps {
  document: Document;
  searchTerm?: string;
  onClick: () => void;
}

export function EvidenceCard({ document, searchTerm = '', onClick }: EvidenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-green-500/30 text-green-300 px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const tierColors = {
    verified: 'border-green-500 bg-green-500/10',
    open: 'border-cyan-400 bg-cyan-400/10',
    corroborated: 'border-yellow-500 bg-yellow-500/10',
    preliminary: 'border-gray-500 bg-gray-500/10',
  };

  const tierBadgeColors = {
    verified: 'bg-green-500/20 text-green-400 border-green-500/50',
    open: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/50',
    corroborated: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    preliminary: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
  };

  const excerpt = document.content
    ? document.content.substring(0, 180) + (document.content.length > 180 ? '...' : '')
    : document.description?.substring(0, 180) + (document.description && document.description.length > 180 ? '...' : '');

  return (
    <div
      className={`relative bg-black border-2 ${tierColors[document.verification_tier]} rounded-lg p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/90 border border-green-500/50 px-8 py-3 rounded">
              <span className="text-green-400 font-bold text-sm tracking-wider">
                ██████ REDACTED ██████
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-green-300 font-bold text-sm leading-tight flex-1">
          {highlightText(document.title, searchTerm)}
        </h3>
        {document.verification_tier === 'verified' && (
          <div className="relative flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
            <span className="absolute -top-1 -right-1 text-[8px] font-bold text-yellow-500 rotate-12">
              VERIFIED
            </span>
          </div>
        )}
      </div>

      <p className="text-green-500/60 text-xs font-mono leading-relaxed mb-3 line-clamp-2">
        {excerpt}
      </p>

      <div className="flex items-center justify-between text-[10px] text-green-500/50 font-mono border-t border-green-500/20 pt-3 mt-3">
        <div className="flex items-center gap-3">
          {(() => {
            const formatted = formatUTCDateShort(document.date_published);
            return formatted ? (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatted}
              </div>
            ) : (
              <div className="flex items-center gap-1 italic">
                <Calendar className="w-3 h-3" />
                Date Unknown
              </div>
            );
          })()}
          <div className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            {document.document_type.split(' ')[0]}
          </div>
        </div>
        {document.source_url && (
          <ExternalLink className="w-3 h-3 text-green-400" />
        )}
      </div>

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <Badge className={`${tierBadgeColors[document.verification_tier]} text-[11px] uppercase`}>
          {document.verification_tier === 'corroborated' ? 'VALID' : document.verification_tier}
        </Badge>
        {(() => {
          const pillarName = document.metadata?.pillar;
          if (!pillarName) return null;
          const normalized = normalizePillarName(pillarName);
          const pillarSlug = getPillarSlugByName(pillarName);
          if (!pillarSlug) return null;
          return (
            <Link
              to={`/pillars/${pillarSlug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-block"
            >
              <Badge className="bg-green-500/10 text-green-500/60 border-green-500/20 text-[10px] hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-pointer">
                {normalized}
              </Badge>
            </Link>
          );
        })()}
      </div>
    </div>
  );
}
