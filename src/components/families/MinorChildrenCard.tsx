interface MinorChildrenCardProps {
  count: number;
  ageRange: string;
}

export function MinorChildrenCard({ count, ageRange }: MinorChildrenCardProps) {
  return (
    <div style={{
      background: '#111',
      border: '1px solid #00ff41',
      borderRadius: '0.5rem',
      padding: '1rem',
      minWidth: '200px',
      maxWidth: '250px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.8rem',
      }}>
        Children: {count}
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.7rem',
        marginTop: '0.25rem',
      }}>
        Current Age Range: {ageRange}
      </div>
    </div>
  );
}
