import { Link } from 'react-router-dom';
import { bushDynasty } from '../../data/dynasty_bush';

const ACCENT = '#b48c3c';

export function BushContent() {
  const { origins, members, scandals, connections, allSources } = bushDynasty;

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}>
        {['1895–Present', 'Two Presidencies', 'CIA Director', 'Nazi-Linked Banking', 'Iraq War Deception', 'Skull & Bones', 'Carlyle Group'].map(tag => (
          <span key={tag} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            padding: '0.2rem 0.6rem',
            border: `1px solid ${ACCENT}40`,
            borderRadius: '4px',
            color: ACCENT,
            background: `${ACCENT}10`,
            letterSpacing: '0.04em',
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        {origins.paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} style={{ fontSize: '0.9rem', color: '#a09880', lineHeight: 1.75, marginBottom: '0.75rem' }}>{p}</p>
        ))}
        <div style={{
          padding: '0.75rem 1rem',
          background: `${ACCENT}08`,
          borderLeft: `3px solid ${ACCENT}`,
          borderRadius: '0 4px 4px 0',
          marginTop: '1rem',
        }}>
          <p style={{ fontSize: '0.82rem', color: '#c8c0b0', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: '#e8e2d6' }}>Key Note:</strong> {origins.keyNote}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          color: `${ACCENT}80`,
          marginBottom: '0.75rem',
        }}>
          Family Members
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))', gap: '0.75rem' }}>
          {members.map((member) => (
            <div key={member.name} style={{
              background: '#0d0c09',
              border: `1px solid ${member.status === 'DECEASED' ? '#333' : '#2e2b22'}`,
              borderRadius: '0.375rem',
              padding: '0.875rem',
              opacity: member.status === 'DECEASED' ? 0.75 : 1,
            }}>
              <div style={{ fontWeight: 600, color: '#e8e2d6', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{member.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: ACCENT, textTransform: 'uppercase' as const, letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                {member.title.split('·')[0].trim()}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#a09880', lineHeight: 1.5 }}>{member.keyFacts[0]}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          color: `${ACCENT}80`,
          marginBottom: '0.75rem',
        }}>
          Key Documented Scandals
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
          {scandals.slice(0, 4).map((scandal, i) => (
            <div key={i} style={{
              background: '#0d0c09',
              border: '1px solid #2e2b22',
              borderRadius: '0.375rem',
              padding: '0.875rem 1rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' as const }}>
                <div style={{ fontWeight: 600, color: '#e8e2d6', fontSize: '0.875rem', flex: 1 }}>{scandal.title}</div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.55rem',
                  padding: '2px 0.5rem',
                  borderRadius: '9999px',
                  background: `${scandal.statusColor}15`,
                  color: scandal.statusColor,
                  border: `1px solid ${scandal.statusColor}40`,
                  whiteSpace: 'nowrap' as const,
                  flexShrink: 0,
                }}>
                  {scandal.status}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#a09880', lineHeight: 1.55 }}>{scandal.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          color: `${ACCENT}80`,
          marginBottom: '0.75rem',
        }}>
          Key Connections
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))', gap: '0.75rem' }}>
          {connections.slice(0, 6).map((conn, i) => (
            <div key={i} style={{ background: '#0d0c09', border: '1px solid #2e2b22', borderRadius: '0.375rem', padding: '0.875rem' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: ACCENT, marginBottom: '0.25rem' }}>
                {conn.type}
              </div>
              <div style={{ fontWeight: 600, color: '#e8e2d6', fontSize: '0.875rem', marginBottom: '0.35rem' }}>{conn.name}</div>
              <div style={{ fontSize: '0.78rem', color: '#a09880', lineHeight: 1.5 }}>{conn.detail.split('.')[0] + '.'}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          color: `${ACCENT}80`,
          marginBottom: '0.5rem',
        }}>
          Sources
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem' }}>
          {allSources.slice(0, 8).map((source, i) => (
            <a
              key={i}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                padding: '0.2rem 0.6rem',
                background: '#0d0c09',
                border: '1px solid #2e2b22',
                borderRadius: '4px',
                color: '#7a9abb',
                textDecoration: 'none',
              }}
            >
              {source.label.split(' — ')[0].split(' · ')[0]}
            </a>
          ))}
        </div>
      </div>

      <Link
        to="/families/bush"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          width: '100%',
          padding: '0.875rem 1rem',
          background: `linear-gradient(135deg, ${ACCENT}18 0%, rgba(100,60,20,0.15) 100%)`,
          border: `1px solid ${ACCENT}50`,
          borderRadius: '0.375rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          color: ACCENT,
          textDecoration: 'none',
          letterSpacing: '0.06em',
          transition: 'all 0.15s ease',
        }}
      >
        VIEW FULL BUSH DYNASTY DOSSIER →
      </Link>
    </div>
  );
}
