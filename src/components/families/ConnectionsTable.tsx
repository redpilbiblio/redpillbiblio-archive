import { DynastyConnection } from '../../data/dynasty_medici';

interface ConnectionsTableProps {
  connections: DynastyConnection[];
  accentColor: string;
}

export function ConnectionsTable({ connections, accentColor }: ConnectionsTableProps) {
  return (
    <div style={{
      background: '#0d0d0d',
      border: '1px solid #1a1a1a',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginTop: '1.5rem',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: accentColor,
        fontSize: '0.7rem',
        textTransform: 'uppercase' as const,
        marginBottom: '1rem',
        letterSpacing: '0.1em',
      }}>
        ◆ INSTITUTIONAL CONNECTIONS
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse' as const,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
        }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Connection</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Institution / Family</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Relationship</th>
            </tr>
          </thead>
          <tbody>
            {connections.map((conn, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '0.5rem', color: accentColor, whiteSpace: 'nowrap' as const }}>{conn.type}</td>
                <td style={{ padding: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>{conn.institution}</td>
                <td style={{ padding: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>{conn.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
