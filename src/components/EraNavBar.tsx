import { ERAS, EraDefinition } from '@/lib/timelineUtils';

interface EraNavBarProps {
  activeEra: string | null;
  eraCounts: Record<string, number>;
  onEraClick: (era: EraDefinition | null) => void;
}

export function EraNavBar({ activeEra, eraCounts, onEraClick }: EraNavBarProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-[#a0a0a0]">Era</span>
        {activeEra && (
          <button
            onClick={() => onEraClick(null)}
            className="text-xs text-[#a0a0a0] hover:text-[#e5e5e5] underline underline-offset-2 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {ERAS.map((era) => {
          const count = eraCounts[era.label] || 0;
          const isActive = activeEra === era.label;
          return (
            <button
              key={era.label}
              onClick={() => onEraClick(isActive ? null : era)}
              className={`
                relative px-3 py-1.5 rounded-md text-sm font-mono transition-all
                border
                ${isActive
                  ? 'border-opacity-100 bg-opacity-15'
                  : 'border-white/10 hover:border-white/30 bg-transparent'
                }
              `}
              style={{
                borderColor: isActive ? era.color : undefined,
                color: isActive ? era.color : '#a0a0a0',
                backgroundColor: isActive ? `${era.color}15` : undefined,
              }}
              aria-pressed={isActive}
            >
              <span>{era.label}</span>
              <span className="ml-1.5 text-xs opacity-60">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
