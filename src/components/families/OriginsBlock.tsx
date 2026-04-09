import { DynastySource } from '../../data/dynasty_medici';
import { SourcePills } from './SourcePills';

interface OriginsBlockProps {
  accentColor: string;
  paragraphs: string[];
  lineage: string[];
  sources: DynastySource[];
}

export function OriginsBlock({ accentColor, paragraphs, lineage, sources }: OriginsBlockProps) {
  return (
    <div style={{
      background: '#0d0d0d',
      border: '1px solid #1a1a1a',
      borderLeft: `3px solid ${accentColor}`,
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginBottom: '0',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: accentColor,
        fontSize: '0.7rem',
        textTransform: 'uppercase' as const,
        marginBottom: '0.75rem',
        letterSpacing: '0.1em',
      }}>
        ◆ ORIGINS OF SURNAME
      </div>
      <div style={{
        fontFamily: "'Literata', serif",
        color: 'rgba(255,255,255,0.85)',
        fontSize: '0.9rem',
        lineHeight: '1.7',
      }}>
        {paragraphs.map((paragraph, i) => (
          <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>
        ))}
      </div>

      <div style={{
        borderTop: '1px solid #1a1a1a',
        paddingTop: '1rem',
        marginTop: '0.5rem',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          marginBottom: '0.5rem',
        }}>
          Direct Pre-Wealth Lineage:
        </div>
        {lineage.map((ancestor, i) => (
          <div key={i} style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.8rem',
            paddingLeft: `${i * 1.25}rem`,
            marginBottom: '0.25rem',
          }}>
            ▸ {ancestor}
          </div>
        ))}
      </div>

      <SourcePills sources={sources} />
    </div>
  );
}
