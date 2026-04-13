import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { bushDynasty } from '@/data/dynasty_bush';
import { ExternalLink, User } from 'lucide-react';

const ACCENT = '#b48c3c';
const ACCENT_DARK = '#8a6a2a';

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.7rem',
      color: ACCENT,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    }}>
      {children}
      <span style={{ flex: 1, height: '1px', background: `${ACCENT}40`, maxWidth: '80px' }} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 'clamp(1.25rem, 1rem + 1vw, 1.75rem)',
      fontWeight: 700,
      color: '#e8e2d6',
      marginBottom: '1.5rem',
      letterSpacing: '-0.01em',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {children}
    </h2>
  );
}

function DataTable({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid #2e2b22' }}>
            <td style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#524e46',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              width: '160px',
              padding: '0.75rem 1.25rem',
              verticalAlign: 'top',
            }}>
              {row.label}
            </td>
            <td style={{ color: '#e8e2d6', lineHeight: 1.5, padding: '0.75rem 1.25rem' }}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatusBadge({ status }: { status: 'LIVING' | 'DECEASED' }) {
  const isLiving = status === 'LIVING';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.65rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '2px 0.5rem',
      borderRadius: '9999px',
      background: isLiving ? 'rgba(34, 197, 94, 0.12)' : 'rgba(100,100,100,0.15)',
      color: isLiving ? '#4ade80' : '#888',
      border: `1px solid ${isLiving ? 'rgba(34, 197, 94, 0.25)' : 'rgba(100,100,100,0.25)'}`,
    }}>
      {isLiving && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80' }} />}
      {status}
    </span>
  );
}

function PersonCard({
  name,
  title,
  status,
  isFounder = false,
  isPatriarch = false,
  children,
}: {
  name: string;
  title: string;
  status: 'LIVING' | 'DECEASED';
  isFounder?: boolean;
  isPatriarch?: boolean;
  children: React.ReactNode;
}) {
  const borderColor = status === 'LIVING' ? '#4ade80' : '#555';
  return (
    <div style={{
      background: '#111009',
      border: '1px solid #3a3628',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      marginBottom: '1.5rem',
    }}>
      <div style={{
        background: isFounder ? `rgba(180, 140, 60, 0.08)` : isPatriarch ? 'rgba(100,60,20,0.1)' : '#161410',
        borderBottom: '1px solid #3a3628',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: `2px solid ${borderColor}`,
          background: '#1a1815',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <User style={{ width: '28px', height: '28px', color: borderColor, opacity: 0.7 }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#e8e2d6', marginBottom: '0.25rem' }}>
            {name}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#8a8478',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            {title}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <StatusBadge status={status} />
            {isFounder && (
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                padding: '2px 0.5rem',
                borderRadius: '9999px',
                background: `rgba(180, 140, 60, 0.15)`,
                color: ACCENT,
                border: `1px solid rgba(180, 140, 60, 0.25)`,
              }}>
                DYNASTY PRESIDENT
              </span>
            )}
            {isPatriarch && (
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                padding: '2px 0.5rem',
                borderRadius: '9999px',
                background: `rgba(100, 60, 20, 0.2)`,
                color: '#c89050',
                border: `1px solid rgba(100, 60, 20, 0.4)`,
              }}>
                PATRIARCH
              </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: '1.25rem 1.5rem' }}>
        {children}
      </div>
    </div>
  );
}

function FactList({ facts }: { facts: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {facts.map((fact, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
          <span style={{ color: ACCENT, fontFamily: 'monospace', fontSize: '0.8rem', marginTop: '0.1rem', flexShrink: 0 }}>▸</span>
          <span style={{ fontSize: '0.9rem', color: '#c8c0b0', lineHeight: 1.6 }}>{fact}</span>
        </li>
      ))}
    </ul>
  );
}

function ScandalCard({ scandal }: { scandal: typeof bushDynasty.scandals[0] }) {
  return (
    <div style={{
      background: '#111009',
      border: '1px solid #2e2b22',
      borderRadius: '0.5rem',
      padding: '1.25rem 1.5rem',
      marginBottom: '1rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: '#e8e2d6', marginBottom: '0.25rem' }}>{scandal.title}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#524e46', letterSpacing: '0.04em' }}>
            {scandal.authority} · {scandal.year}
          </div>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          background: `${scandal.statusColor}15`,
          color: scandal.statusColor,
          border: `1px solid ${scandal.statusColor}40`,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {scandal.status}
        </span>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#a09880', lineHeight: 1.65 }}>{scandal.description}</p>
    </div>
  );
}

function ConnectionCard({ conn }: { conn: typeof bushDynasty.connections[0] }) {
  return (
    <div style={{
      background: '#111009',
      border: '1px solid #2e2b22',
      borderRadius: '0.5rem',
      padding: '1rem 1.25rem',
      transition: 'border-color 0.15s ease',
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, marginBottom: '0.4rem' }}>
        {conn.type}
      </div>
      <div style={{ fontSize: '1rem', fontWeight: 600, color: '#e8e2d6', marginBottom: '0.5rem', lineHeight: 1.3 }}>
        {conn.name}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#a09880', lineHeight: 1.55 }}>{conn.detail}</div>
    </div>
  );
}

export function BushDynasty() {
  const { origins, founder, wealthMechanisms, members, scandals, connections, allSources } = bushDynasty;

  return (
    <>
      <SEOHead
        title="The Bush Family Dynasty"
        description="An evidence-based profile of the Bush family dynasty — Nazi banking origins, CIA directorship, two presidencies, Iraq War deception, Carlyle Group defense contracts, and documented scandals across four generations."
        url="https://redpillbiblio.wtf/families/bush"
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} style={{ minHeight: '100vh', background: '#0c0b09', paddingBottom: '4rem' }}>

        <div style={{
          background: '#111009',
          borderBottom: `1px solid ${ACCENT}30`,
          paddingTop: '8rem',
          paddingBottom: '3rem',
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: ACCENT,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ width: '24px', height: '2px', background: ACCENT, display: 'inline-block' }} />
              Power Families — Profile
            </div>
            <h1 style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 'clamp(2rem, 3vw + 1rem, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: '#e8e2d6',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
            }}>
              The <strong style={{ fontWeight: 800, color: ACCENT }}>Bush</strong><br />Family
            </h1>
            <p style={{ fontSize: '1rem', color: '#a09880', maxWidth: '60ch', lineHeight: 1.75, marginBottom: '2rem' }}>
              From a Nazi-linked Wall Street bank to two presidencies spanning the CIA's darkest chapters, the Gulf War, and the catastrophic invasion of Iraq — the Bush dynasty is the defining story of American deep-state power. Built on banking, oil, intelligence, and a network of elite secret societies, theirs is a century-long accumulation of influence that reshaped the world and left it on fire.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Two Presidencies', 'CIA Director', 'Nazi-Linked Banking', 'Iraq War Deception', 'Iran-Contra Pardons', 'Carlyle Group', 'Skull & Bones', 'S&L Scandal'].map(tag => (
                <span key={tag} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  padding: '0.2rem 0.65rem',
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
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 0' }}>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>01 — Origins</SectionEyebrow>
            <SectionTitle>Origins & Banking Roots</SectionTitle>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: `${ACCENT}80`,
              marginBottom: '1rem',
            }}>
              Pre-Wealth Lineage
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              {origins.preWealthLineage.map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1rem', marginBottom: '1rem', position: 'relative' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: ACCENT, textAlign: 'right', paddingRight: '1rem', paddingTop: '3px' }}>
                    {item.split(':')[0]}
                  </div>
                  <div style={{ paddingLeft: '1rem', borderLeft: `1px solid ${ACCENT}30` }}>
                    <div style={{ fontSize: '0.85rem', color: '#c8c0b0', lineHeight: 1.6 }}>
                      {item.split(':').slice(1).join(':').trim()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {origins.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: '0.95rem', color: '#a09880', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '72ch' }}>{p}</p>
            ))}
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              background: `${ACCENT}08`,
              borderLeft: `3px solid ${ACCENT}`,
              borderRadius: '0 4px 4px 0',
            }}>
              <p style={{ fontSize: '0.85rem', color: '#c8c0b0', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#e8e2d6' }}>Dynasty Classification:</strong> {origins.dynastyClassification}
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>02 — The Founder</SectionEyebrow>
            <SectionTitle>George H.W. Bush — The Spy Who Became President</SectionTitle>
            <div style={{ background: '#111009', border: '1px solid #3a3628', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <DataTable rows={[
                { label: 'Born', value: founder.dob },
                { label: 'Died', value: founder.dod },
                { label: 'Spouse', value: founder.spouse },
                { label: 'Children', value: founder.children },
                { label: 'Roles', value: founder.profession },
                { label: 'Political', value: founder.political },
                { label: 'Net Worth', value: founder.netWorth },
                { label: 'Wikipedia', value: (
                  <a href={founder.wikiUrl} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}>
                    Open article <ExternalLink style={{ width: '12px', height: '12px' }} />
                  </a>
                )},
              ]} />
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>03 — Wealth Mechanisms</SectionEyebrow>
            <SectionTitle>How the Fortune Was Built</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: '1rem' }}>
              {wealthMechanisms.map((mech, i) => (
                <div key={i} style={{ background: '#111009', border: '1px solid #2e2b22', borderRadius: '0.5rem', padding: '1.25rem' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: ACCENT, marginBottom: '0.25rem' }}>
                    {mech.amount}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#524e46', marginBottom: '0.5rem' }}>
                    {mech.label}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#a09880', lineHeight: 1.6, margin: 0 }}>{mech.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>04 — Family Members</SectionEyebrow>
            <SectionTitle>The Bush Dynasty</SectionTitle>
            {members.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                title={member.title}
                status={member.status}
                isFounder={member.isFounder}
                isPatriarch={member.isPatriarch}
              >
                <FactList facts={member.keyFacts} />
              </PersonCard>
            ))}
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>05 — Documented Scandals</SectionEyebrow>
            <SectionTitle>Legal Actions & Accountability</SectionTitle>
            {scandals.map((scandal, i) => (
              <ScandalCard key={i} scandal={scandal} />
            ))}
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>06 — Key Connections</SectionEyebrow>
            <SectionTitle>Network of Power</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: '1rem' }}>
              {connections.map((conn, i) => (
                <ConnectionCard key={i} conn={conn} />
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <SectionEyebrow>07 — Primary Sources</SectionEyebrow>
            <SectionTitle>Sources & Documentation</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {allSources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    background: '#111009',
                    border: '1px solid #2e2b22',
                    borderRadius: '0.375rem',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease',
                  }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: ACCENT }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#c8c0b0' }}>{source.label}</span>
                  <ExternalLink style={{ width: '13px', height: '13px', color: `${ACCENT}60`, flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </section>

          <div style={{
            marginTop: '2rem',
            padding: '1rem 1.25rem',
            background: '#0d0c09',
            border: '1px solid #2e2b22',
            borderRadius: '0.5rem',
          }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#524e46', lineHeight: 1.6, margin: 0 }}>
              <span style={{ color: `${ACCENT}80` }}>NOTE:</span> All claims are derived from primary government documents, official independent counsel reports, major investigative journalism, and peer-reviewed or institutional sources. No anonymous or unverified sources are relied upon. Legal status is stated for every subject. This page does not allege criminal guilt where none has been established by a court of law.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default BushDynasty;
