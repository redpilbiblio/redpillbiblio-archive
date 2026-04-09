import { rockefellerDynasty } from '../../data/dynasty_rockefeller';
import { AncestryBreadcrumb } from './AncestryBreadcrumb';
import { OriginsBlock } from './OriginsBlock';
import { FounderHeroCard } from './FounderHeroCard';
import { GenerationLayer } from './GenerationLayer';
import { ConnectionsTable } from './ConnectionsTable';
import { LegacySection } from './LegacySection';
import { SourcePills } from './SourcePills';

const ACCENT = '#E8722A';

const CONNECTOR = (
  <div style={{
    width: '2px',
    height: '40px',
    background: ACCENT,
    margin: '0 auto',
    opacity: 0.4,
  }} />
);

export function RockefellerContent() {
  const { origins, founder, generations, connections, legacy, allSources } = rockefellerDynasty;

  const breadcrumbItems = [
    "ROCKEFELLER",
    "Johann Peter (1682)",
    "'Devil Bill' (1810)",
    "John D. Sr. — Standard Oil",
    "John D. Jr. — Rockefeller Center",
    "The Brothers — Nelson, David Sr.",
    "Jay IV, David Jr. — Living",
  ];

  return (
    <div>
      <AncestryBreadcrumb items={breadcrumbItems} accentColor={ACCENT} />

      <OriginsBlock
        accentColor={ACCENT}
        paragraphs={origins.paragraphs}
        lineage={origins.preWealthLineage}
        sources={origins.sources}
      />

      {CONNECTOR}

      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: ACCENT,
          fontSize: '0.7rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          textAlign: 'center' as const,
          marginBottom: '1rem',
          padding: '0.5rem',
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          borderRadius: '4px',
        }}>
          ═══ GENERATION 1 — FOUNDER ═══ 1 patriarch
        </div>
        <FounderHeroCard founder={founder} accentColor={ACCENT} />
      </div>

      {generations.map((gen) => (
        <div key={gen.number}>
          {CONNECTOR}
          <GenerationLayer
            number={gen.number}
            label={gen.label}
            members={gen.members}
            accentColor={ACCENT}
          />
          {gen.note && (
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.7rem',
              fontStyle: 'italic',
              padding: '0.5rem 1rem',
              borderLeft: `2px solid ${ACCENT}44`,
              marginTop: '0.75rem',
            }}>
              {gen.note}
            </div>
          )}
        </div>
      ))}

      {CONNECTOR}

      <div style={{
        textAlign: 'center' as const,
        padding: '2rem 0',
        borderTop: '1px solid #333',
        marginTop: '0',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: ACCENT,
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
        }}>
          ═══ DYNASTY ACTIVE — GENERATION 5 LIVING ═══
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.7rem',
          marginTop: '0.5rem',
        }}>
          ~180 living descendants of JDR Sr. · Total family wealth ~$10.3B (2024) · "Room 5600," 30 Rockefeller Plaza
        </div>
      </div>

      <ConnectionsTable connections={connections} accentColor={ACCENT} />
      <LegacySection accentColor={ACCENT} intro={legacy.intro} items={legacy.items} />

      <div style={{ marginTop: '1.5rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          marginBottom: '0.5rem',
        }}>
          All Sources ({allSources.length})
        </div>
        <SourcePills sources={allSources} />
      </div>
    </div>
  );
}
