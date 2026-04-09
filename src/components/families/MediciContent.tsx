import { mediciDynasty } from '../../data/dynasty_medici';
import { AncestryBreadcrumb } from './AncestryBreadcrumb';
import { OriginsBlock } from './OriginsBlock';
import { FounderHeroCard } from './FounderHeroCard';
import { GenerationLayer } from './GenerationLayer';
import { FamilyMemberCard } from './FamilyMemberCard';
import { ConnectionsTable } from './ConnectionsTable';
import { LegacySection } from './LegacySection';
import { SourcePills } from './SourcePills';

const ACCENT = '#C9A84C';

const CONNECTOR = (
  <div style={{
    width: '2px',
    height: '40px',
    background: ACCENT,
    margin: '0 auto',
    opacity: 0.4,
  }} />
);

export function MediciContent() {
  const { origins, founder, generations, modernClaimants, connections, legacy, allSources } = mediciDynasty;

  const breadcrumbItems = [
    "MEDICI",
    "Giovanni di Bicci",
    "Cosimo 'The Elder'",
    "Lorenzo 'The Magnificent'",
    "Catherine de' Medici",
    "Anna Maria Luisa (last)",
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

      {generations.map((gen, i) => (
        <div key={gen.number}>
          {CONNECTOR}
          <GenerationLayer
            number={gen.number}
            label={gen.label}
            members={gen.members}
            accentColor={ACCENT}
          />
          {gen.members.some(m => m.note && m.id === 'cosimo-i') && (
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.7rem',
              fontStyle: 'italic',
              padding: '0.5rem 1rem',
              borderLeft: '2px solid #333',
              marginTop: '0.75rem',
            }}>
              {gen.members.find(m => m.id === 'cosimo-i')?.note}
            </div>
          )}
        </div>
      ))}

      {CONNECTOR}

      <div style={{
        background: '#0d0d0d',
        border: '1px dashed #C9A84C',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginTop: '0',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#C9A84C',
          fontSize: '0.7rem',
          textTransform: 'uppercase' as const,
          marginBottom: '0.5rem',
          letterSpacing: '0.1em',
        }}>
          ⚠ MODERN CLAIMANTS — UNVERIFIED DESCENT
        </div>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(201, 168, 76, 0.7)',
          fontSize: '0.7rem',
          marginBottom: '1rem',
          fontStyle: 'italic',
        }}>
          Historians confirm the main Medici bloodline is extinct as of 1743. The following claim descent through disputed or non-main-line genealogy.
        </p>
        <div className="generation-cards-row" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {modernClaimants.map(member => (
            <FamilyMemberCard key={member.id} member={member} accentColor={ACCENT} />
          ))}
        </div>
      </div>

      <div style={{
        textAlign: 'center' as const,
        padding: '2rem 0',
        borderTop: '1px solid #333',
        marginTop: '1.5rem',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#666',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
        }}>
          ═══ DYNASTY EXTINCT — 1743 ═══
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.7rem',
          marginTop: '0.5rem',
        }}>
          Grand Duchy of Tuscany passed to the House of Habsburg-Lorraine
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
