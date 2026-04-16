import { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

export type EpistemicType = 'DOCUMENTED' | 'INFERRED' | 'CONTESTED';

interface LabeledClaim {
  type: EpistemicType;
  text: string;
}

const labelConfig: Record<EpistemicType, { color: string; border: string; bg: string; description: string }> = {
  DOCUMENTED: {
    color: 'text-emerald-400',
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/10',
    description: 'Confirmed by primary government documents, court records, or peer-reviewed research.',
  },
  INFERRED: {
    color: 'text-amber-400',
    border: 'border-amber-400/40',
    bg: 'bg-amber-400/10',
    description: 'Reasonable conclusion drawn from documented evidence but not explicitly stated in primary sources.',
  },
  CONTESTED: {
    color: 'text-red-400',
    border: 'border-red-400/40',
    bg: 'bg-red-400/10',
    description: 'Claim where significant expert or scholarly disagreement exists.',
  },
};

export function EpistemicTag({ type }: { type: EpistemicType }) {
  const config = labelConfig[type] || labelConfig.CONTESTED;
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider ${config.color} ${config.bg} ${config.border} border`}
      style={{ textDecorationColor: 'currentColor' }}
    >
      [{type}]
    </span>
  );
}

export function EpistemicLegend() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-green-500/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-green-500/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-green-400/70" />
          <span className="text-green-400/80 font-mono text-xs font-semibold">
            HOW TO READ THIS ITEM
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-green-400/50" />
        ) : (
          <ChevronDown className="w-4 h-4 text-green-400/50" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 pb-4 space-y-3 border-t border-green-500/10">
          <p className="text-green-300/60 text-xs font-mono mt-3 mb-2">
            Inline labels indicate the epistemic status of specific claims:
          </p>
          {(Object.keys(labelConfig) as EpistemicType[]).map((type) => {
            const config = labelConfig[type];
            return (
              <div key={type} className="flex items-start gap-3">
                <EpistemicTag type={type} />
                <span className={`text-xs leading-relaxed ${config.color} opacity-80`}>
                  {config.description}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function normalizeClaim(raw: unknown): LabeledClaim | null {
  if (typeof raw === 'object' && raw !== null && 'type' in raw && 'text' in raw) {
    const obj = raw as { type: string; text: string };
    const validType = labelConfig[obj.type as EpistemicType] ? (obj.type as EpistemicType) : 'CONTESTED';
    return { type: validType, text: obj.text };
  }
  if (typeof raw === 'string') {
    const match = raw.match(/^(DOCUMENTED|INFERRED|CONTESTED|UNRESOLVED):\s*(.+)$/i);
    if (match) {
      const mapped = match[1].toUpperCase() === 'UNRESOLVED' ? 'CONTESTED' : match[1].toUpperCase() as EpistemicType;
      const validType = labelConfig[mapped] ? mapped : 'CONTESTED';
      return { type: validType, text: match[2] };
    }
    return { type: 'CONTESTED', text: raw };
  }
  return null;
}

export function EpistemicClaimBlock({ claim }: { claim: LabeledClaim }) {
  const config = labelConfig[claim.type] || labelConfig.CONTESTED;
  return (
    <div className={`flex items-start gap-2 my-2 pl-3 border-l-2 ${config.border}`}>
      <EpistemicTag type={claim.type} />
      <span
        className={`text-sm leading-relaxed ${config.color}`}
        style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'currentColor', textUnderlineOffset: '3px' }}
      >
        {claim.text}
      </span>
    </div>
  );
}

export function renderLabeledClaims(claims: unknown[] | null | undefined) {
  if (!claims || claims.length === 0) return null;
  const normalized = claims.map(normalizeClaim).filter((c): c is LabeledClaim => c !== null);
  if (normalized.length === 0) return null;
  return (
    <div className="mt-4 space-y-1">
      {normalized.map((claim, i) => (
        <EpistemicClaimBlock key={i} claim={claim} />
      ))}
    </div>
  );
}
