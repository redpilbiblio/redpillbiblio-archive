import { DynastyFounder } from '../../data/dynasty_medici';
import { SourcePills } from './SourcePills';

interface DataRowProps {
  label: string;
  value: string;
  indent?: boolean;
  accentColor: string;
}

function DataRow({ label, value, indent = false, accentColor }: DataRowProps) {
  return (
    <div style={{
      display: 'flex',
      gap: '0.75rem',
      paddingLeft: indent ? '1.5rem' : '0',
      marginBottom: '0.1rem',
    }}>
      {label && (
        <span style={{ color: 'rgba(255,255,255,0.4)', minWidth: '130px', flexShrink: 0 }}>
          {label}:
        </span>
      )}
      <span style={{ color: accentColor === '#C9A84C' ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.85)' }}>{value}</span>
    </div>
  );
}

interface FounderHeroCardProps {
  founder: DynastyFounder;
  accentColor: string;
}

export function FounderHeroCard({ founder, accentColor }: FounderHeroCardProps) {
  return (
    <div style={{
      background: '#111',
      border: `2px solid ${accentColor}`,
      boxShadow: `0 0 20px ${accentColor}33, inset 0 0 20px ${accentColor}0a`,
      borderRadius: '0.5rem',
      padding: '2rem',
      maxWidth: '640px',
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            margin: 0,
          }}>
            {founder.fullName}
          </h3>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem',
            marginTop: '0.25rem',
          }}>
            FOUNDER — DYNASTY PATRIARCH
          </div>
        </div>
        <div style={{
          background: '#444',
          color: '#ccc',
          padding: '0.2rem 0.6rem',
          borderRadius: '4px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          flexShrink: 0,
          marginLeft: '1rem',
        }}>
          DECEASED
        </div>
      </div>

      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', lineHeight: '2' }}>
        <DataRow label="Born" value={founder.dob} accentColor={accentColor} />
        <DataRow label="Died" value={founder.dod} accentColor={accentColor} />
        <DataRow label="Spouse" value={founder.spouse} accentColor={accentColor} />
        {founder.spouseFamily && (
          <DataRow label="" value={`↳ ${founder.spouseFamily}`} indent accentColor={accentColor} />
        )}
        <DataRow label="Profession" value={founder.profession} accentColor={accentColor} />
        <DataRow label="Major Positions" value={founder.majorPositions} accentColor={accentColor} />
        <DataRow label="Net Worth" value={founder.netWorth} accentColor={accentColor} />
        <DataRow label="Political" value={founder.political} accentColor={accentColor} />
        <DataRow label="Donations" value={founder.donations} accentColor={accentColor} />
      </div>

      <div style={{ marginTop: '1rem', borderTop: '1px solid #1a1a1a', paddingTop: '1rem' }}>
        <a
          href={founder.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00ff41',
            fontSize: '0.75rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          🔗 Wikipedia ↗
        </a>
      </div>

      <SourcePills sources={founder.sources} />
    </div>
  );
}
