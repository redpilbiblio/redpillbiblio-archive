import { DynastySource } from '../../data/dynasty_medici';

interface SourcePillsProps {
  sources: DynastySource[];
}

export function SourcePills({ sources }: SourcePillsProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: '1rem',
      paddingTop: '0.75rem',
      borderTop: '1px solid #1a1a1a',
    }}>
      {sources.map((source, i) => (
        <a
          key={i}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '0.3rem 0.6rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            color: '#00ff41',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#00ff41'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#333'; }}
        >
          {source.label} ↗
        </a>
      ))}
    </div>
  );
}
