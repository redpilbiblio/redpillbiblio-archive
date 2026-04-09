import { DynastyLegacyItem } from '../../data/dynasty_medici';

interface LegacySectionProps {
  accentColor: string;
  intro: string;
  items: DynastyLegacyItem[];
}

export function LegacySection({ accentColor, intro, items }: LegacySectionProps) {
  return (
    <div style={{
      background: '#0d0d0d',
      border: '1px solid #1a1a1a',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginTop: '1rem',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: accentColor,
        fontSize: '0.7rem',
        textTransform: 'uppercase' as const,
        marginBottom: '1rem',
        letterSpacing: '0.1em',
      }}>
        ◆ KEY FINANCIAL INNOVATIONS & LEGACY
      </div>
      <div style={{
        fontFamily: "'Literata', serif",
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.85rem',
        lineHeight: '1.7',
        marginBottom: '1rem',
      }}>
        {intro}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          marginBottom: '0.75rem',
          paddingLeft: '1rem',
        }}>
          <span style={{ color: accentColor }}>▸</span>{' '}
          <span style={{ color: '#fff', fontWeight: 600 }}>{item.title}:</span>{' '}
          <span style={{ color: 'rgba(255,255,255,0.65)' }}>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
