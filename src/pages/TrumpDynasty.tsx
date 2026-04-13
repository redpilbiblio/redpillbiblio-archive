import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { trumpDynasty } from '@/data/dynasty_trump';
import { ExternalLink, TriangleAlert as AlertTriangle, User } from 'lucide-react';

const ACCENT = '#c0392b';
const ACCENT_GOLD = '#d4a843';

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
            <td style={{
              color: '#e8e2d6',
              lineHeight: 1.5,
              padding: '0.75rem 1.25rem',
            }}>
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
  isInLaw = false,
  children,
}: {
  name: string;
  title: string;
  status: 'LIVING' | 'DECEASED';
  isFounder?: boolean;
  isInLaw?: boolean;
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
        background: isFounder ? `rgba(192, 57, 43, 0.08)` : '#161410',
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
                background: `rgba(192, 57, 43, 0.15)`,
                color: ACCENT,
                border: `1px solid rgba(192, 57, 43, 0.25)`,
              }}>
                FOUNDER
              </span>
            )}
            {isInLaw && (
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                padding: '2px 0.5rem',
                borderRadius: '9999px',
                background: 'rgba(212, 168, 67, 0.15)',
                color: ACCENT_GOLD,
                border: '1px solid rgba(212, 168, 67, 0.25)',
              }}>
                IN-LAW
              </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

function WealthCard({ amount, label, description }: { amount: string; label: string; description: string }) {
  return (
    <div style={{
      background: '#111009',
      border: '1px solid #3a3628',
      borderRadius: '0.5rem',
      padding: '1.25rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: ACCENT }} />
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '1.25rem',
        fontWeight: 700,
        color: ACCENT,
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {amount}
      </div>
      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8e2d6', marginBottom: '0.5rem' }}>
        {label}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#8a8478', lineHeight: 1.5 }}>
        {description}
      </div>
    </div>
  );
}

function VehicleRow({ vehicle }: { vehicle: typeof trumpDynasty.vehicles[0] }) {
  const statusColors: Record<string, { bg: string; text: string }> = {
    'Active': { bg: 'rgba(0, 255, 65, 0.1)', text: '#00ff41' },
    'Closed': { bg: 'rgba(100,100,100,0.1)', text: '#888' },
    'Dark Money': { bg: 'rgba(192, 57, 43, 0.1)', text: ACCENT },
    'Indirect': { bg: 'rgba(212, 168, 67, 0.1)', text: ACCENT_GOLD },
  };
  const statusStyle = statusColors[vehicle.status] || statusColors['Active'];
  const isClosed = vehicle.status === 'Closed';

  return (
    <div style={{
      background: '#111009',
      border: '1px solid #3a3628',
      borderRadius: '0.5rem',
      padding: '1.25rem 1.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '1rem',
      alignItems: 'start',
      opacity: isClosed ? 0.7 : 1,
    }}>
      <div>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: '#e8e2d6', marginBottom: '0.25rem' }}>
          {vehicle.name}
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: '#524e46',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          {vehicle.type}
        </div>
        <div style={{ fontSize: '0.85rem', color: '#8a8478', marginTop: '0.5rem', lineHeight: 1.5 }}>
          {vehicle.description}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        {vehicle.aum && (
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            fontWeight: 600,
            color: ACCENT_GOLD,
            whiteSpace: 'nowrap',
          }}>
            {vehicle.aum}
          </div>
        )}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: statusStyle.text,
          background: statusStyle.bg,
          padding: '2px 8px',
          borderRadius: '4px',
          marginTop: '0.25rem',
          display: 'inline-block',
        }}>
          {vehicle.status}
        </div>
      </div>
    </div>
  );
}

function LegalTable({ records }: { records: typeof trumpDynasty.legalRecord }) {
  const outcomeColors: Record<string, string> = {
    convicted: ACCENT,
    settled: ACCENT_GOLD,
    nocharge: '#8a8478',
    active: ACCENT_GOLD,
    cleared: '#4ade80',
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            {['Case', 'Person', 'Jurisdiction', 'Outcome / Status'].map(h => (
              <th key={h} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#524e46',
                background: '#1a1815',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                borderBottom: '1px solid #3a3628',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td style={{ padding: '1rem', verticalAlign: 'top', color: '#e8e2d6', fontWeight: 600, borderBottom: '1px solid #2e2b22' }}>
                {r.case}
              </td>
              <td style={{ padding: '1rem', verticalAlign: 'top', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>
                {r.person}
              </td>
              <td style={{ padding: '1rem', verticalAlign: 'top', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>
                {r.jurisdiction}
              </td>
              <td style={{ padding: '1rem', verticalAlign: 'top', color: outcomeColors[r.outcomeType], borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>
                {r.outcome}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CryptoConflictCallout() {
  const { facts } = trumpDynasty.cryptoConflicts;

  return (
    <div style={{
      border: `1px solid rgba(192, 57, 43, 0.35)`,
      background: `rgba(192, 57, 43, 0.05)`,
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginTop: '1.5rem',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
        color: ACCENT,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '1rem',
      }}>
        <AlertTriangle style={{ width: '14px', height: '14px' }} />
        Documented Facts — Crypto / Regulatory Conflict
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            <th style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#524e46',
              background: '#1a1815',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              borderBottom: '1px solid #3a3628',
            }}>
              Fact
            </th>
            <th style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#524e46',
              background: '#1a1815',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              borderBottom: '1px solid #3a3628',
            }}>
              Status / Evidence Level
            </th>
          </tr>
        </thead>
        <tbody>
          {facts.map((f, i) => (
            <tr key={i}>
              <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>
                {f.fact}
              </td>
              <td style={{
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #2e2b22',
                color: f.status === 'documented' ? '#4ade80' : f.status === 'claimed' ? ACCENT_GOLD : '#524e46',
              }}>
                {f.status === 'documented' ? 'Documented' : f.status === 'claimed' ? 'White House assertion — Contested' : 'None on record'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PowerCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{
      background: '#111009',
      border: '1px solid #3a3628',
      borderRadius: '0.5rem',
      padding: '1.25rem',
    }}>
      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e2d6', marginBottom: '0.75rem' }}>
        {title}
      </div>
      <div style={{ fontSize: '0.875rem', color: '#8a8478', lineHeight: 1.6 }}>
        {description}
      </div>
    </div>
  );
}

function OpaqueItem({ name, description }: { name: string; description: string }) {
  return (
    <div style={{
      borderLeft: `2px solid ${ACCENT}`,
      padding: '0.75rem 1.25rem',
      marginBottom: '1rem',
      background: '#111009',
      borderRadius: '0 0.5rem 0.5rem 0',
    }}>
      <div style={{ fontWeight: 600, color: '#e8e2d6', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
        {name}
      </div>
      <div style={{ fontSize: '0.875rem', color: '#8a8478', lineHeight: 1.5 }}>
        {description}
      </div>
    </div>
  );
}

function SourceLink({ source }: { source: { label: string; url?: string } }) {
  if (!source.url) {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.75rem',
        background: '#1a1815',
        border: '1px solid #3a3628',
        borderRadius: '4px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
        color: '#8a8478',
      }}>
        {source.label}
      </span>
    );
  }
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.75rem',
        background: 'rgba(0, 217, 255, 0.1)',
        border: '1px solid rgba(0, 217, 255, 0.3)',
        borderRadius: '4px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
        color: '#00d9ff',
        textDecoration: 'none',
        transition: 'all 0.15s ease',
      }}
    >
      {source.label}
      <ExternalLink style={{ width: '10px', height: '10px', opacity: 0.6 }} />
    </a>
  );
}

export function TrumpDynasty() {
  const [activeSection, setActiveSection] = useState('origins');
  const { origins, founder, wealthMechanisms, generations, minorChildren, vehicles, connections, legalRecord, powerAnalysis, allSources } = trumpDynasty;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = 'origins';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 150) {
          current = section.getAttribute('data-section') || current;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarLinks = [
    { id: 'origins', label: 'Layer 0 — Origins' },
    { id: 'founder', label: 'Layer 1 — Founder' },
    { id: 'second-gen', label: 'Second Generation' },
    { id: 'in-laws', label: 'In-Laws' },
    { id: 'grandchildren', label: 'Grandchildren' },
    { id: 'vehicles', label: 'Vehicles & Assets' },
    { id: 'institutions', label: 'Key Connections' },
    { id: 'legal', label: 'Legal Record' },
    { id: 'crypto', label: 'Crypto Conflicts' },
    { id: 'foreign', label: 'Foreign Entanglements' },
    { id: 'power', label: 'Power Analysis' },
  ];

  return (
    <>
      <SEOHead
        title="Trump Dynasty"
        description="The Trump Dynasty dossier: origins, wealth mechanisms, legal record, cryptocurrency conflicts, foreign entanglements, and power analysis. Compiled from credible public sources."
        url="https://redpillbiblio.wtf/families/trump"
      />
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        style={{
          minHeight: '100vh',
          background: '#0c0b09',
          paddingTop: '5rem',
        }}
      >
        <header style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#111009',
          borderBottom: '1px solid #2e2b22',
          padding: '4rem 2rem 3rem',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${ACCENT} 0%, ${ACCENT_GOLD} 50%, transparent 100%)`,
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: ACCENT,
              marginBottom: '1rem',
              border: `1px solid rgba(192, 57, 43, 0.25)`,
              background: `rgba(192, 57, 43, 0.08)`,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: ACCENT,
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Dynasties Feature — Active Node
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#e8e2d6',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}>
              The <span style={{ color: ACCENT }}>Trump</span> Dynasty
            </h1>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: '#8a8478',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Real Estate → Brand → Political Power Dynasty · Era: Modern Sovereign
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#8a8478',
              marginBottom: '2rem',
            }}>
              <div><span style={{ color: '#524e46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Compiled</span> <span>March 2026</span></div>
              <div><span style={{ color: '#524e46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Classification</span> <span>Real Estate → Brand Licensing → Political → Crypto</span></div>
              <div><StatusBadge status="LIVING" /></div>
              <div><span style={{ color: '#524e46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Est. Combined Wealth</span> <span style={{ color: ACCENT, fontWeight: 700 }}>~$10B+</span></div>
            </div>

            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {sidebarLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: '#8a8478',
                    border: '1px solid #3a3628',
                    background: '#1a1815',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.label.split(' — ').pop()}
                </a>
              ))}
            </nav>

            <div style={{
              background: '#1a1815',
              border: '1px solid #2e2b22',
              borderLeft: `3px solid ${ACCENT_GOLD}`,
              padding: '1rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontSize: '0.875rem',
              color: '#8a8478',
              maxWidth: '72ch',
            }}>
              <strong style={{ color: ACCENT_GOLD, fontFamily: "'JetBrains Mono', monospace" }}>Disclaimer:</strong> This dossier is compiled from credible, verifiable public sources for investigative and educational purposes. Where information is contested, the level of evidence is noted. Where data is unavailable, "None documented" or "Unknown" is stated rather than speculated.
            </div>
          </div>
        </header>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <aside style={{ position: 'sticky', top: '6rem' }} className="hidden lg:block">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {sidebarLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: activeSection === link.id ? ACCENT : '#8a8478',
                    fontSize: '0.875rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.5rem',
                    borderLeft: `2px solid ${activeSection === link.id ? ACCENT : 'transparent'}`,
                    background: activeSection === link.id ? `rgba(192, 57, 43, 0.1)` : 'transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          <div style={{ minWidth: 0 }}>

            {/* ORIGINS */}
            <section data-section="origins" id="origins" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 0</SectionEyebrow>
              <SectionTitle>Origins of Surname &amp; Pre-Wealth Generations</SectionTitle>
              <div style={{ fontSize: '1rem', color: '#8a8478', lineHeight: 1.7 }}>
                {origins.paragraphs.map((p, i) => (
                  <p key={i} style={{ marginBottom: '1rem', maxWidth: '72ch' }}>{p}</p>
                ))}
              </div>

              <h3 style={{ fontSize: '1.125rem', margin: '1.5rem 0 1rem', color: '#e8e2d6' }}>Pre-Wealth Generations: Trump Direct Line</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr>
                      {['Period', 'Location', 'Social Status', 'Notes'].map(h => (
                        <th key={h} style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#524e46',
                          background: '#1a1815',
                          padding: '0.75rem 1rem',
                          textAlign: 'left',
                          borderBottom: '1px solid #3a3628',
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {origins.preWealthLineage.map((line, i) => {
                      const [period, rest] = line.split(': ');
                      const parts = rest?.split(' — ') || [line];
                      return (
                        <tr key={i}>
                          <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', whiteSpace: 'nowrap' }}>{period}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>{parts[0]?.split(' — ')[0]}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>{parts[0]?.includes(' — ') ? parts[0].split(' — ')[1] : ''}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>{parts.slice(1).join(' — ')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {origins.keyNote && (
                <div style={{
                  marginTop: '1.25rem',
                  background: '#1a1815',
                  border: '1px solid #2e2b22',
                  borderLeft: `3px solid ${ACCENT_GOLD}`,
                  padding: '1rem 1.25rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  fontSize: '0.875rem',
                  color: '#8a8478',
                }}>
                  <strong style={{ color: ACCENT_GOLD }}>Key Note:</strong> {origins.keyNote}
                </div>
              )}

              {origins.dynastyClassification && (
                <div style={{
                  marginTop: '1rem',
                  background: '#1a1815',
                  border: '1px solid #2e2b22',
                  borderLeft: `3px solid ${ACCENT}`,
                  padding: '1rem 1.25rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  fontSize: '0.875rem',
                  color: '#8a8478',
                }}>
                  <strong style={{ color: ACCENT }}>Dynasty Classification:</strong> {origins.dynastyClassification}
                </div>
              )}
            </section>

            {/* FOUNDER */}
            <section data-section="founder" id="founder" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 1 — Founder</SectionEyebrow>
              <SectionTitle>Donald John Trump</SectionTitle>

              <PersonCard
                name="Donald John Trump"
                title="45th & 47th President of the United States · Dynasty Founder"
                status="LIVING"
                isFounder
              >
                <DataTable rows={[
                  { label: 'Born', value: founder.dob },
                  { label: 'Spouse(s)', value: founder.spouse },
                  { label: 'Children', value: founder.children },
                  { label: 'Profession', value: founder.profession },
                  { label: 'Political', value: founder.political },
                  { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{founder.netWorth}</span> },
                  { label: 'External', value: <a href={founder.wikiUrl} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_GOLD }}>Wikipedia — Donald Trump</a> },
                ]} />
              </PersonCard>

              <h3 style={{ fontSize: '1.125rem', margin: '1.5rem 0 1rem', color: '#e8e2d6' }}>Wealth Mechanisms</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {wealthMechanisms.map((w, i) => (
                  <WealthCard key={i} amount={w.amount} label={w.label} description={w.description} />
                ))}
              </div>
            </section>

            {/* SECOND GENERATION */}
            <section data-section="second-gen" id="second-gen" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 2 — Second Generation</SectionEyebrow>
              <SectionTitle>Donald's Five Children</SectionTitle>

              {generations[0].members.map((member, i) => (
                <PersonCard
                  key={i}
                  name={member.name}
                  title={member.role}
                  status={member.status}
                  isFounder={false}
                  isInLaw={false}
                >
                  <DataTable rows={[
                    { label: 'Born', value: member.born },
                    { label: 'Spouse', value: member.spouse },
                    { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{member.netWorth}</span> },
                    { label: 'Notes', value: member.notes },
                    { label: 'Legal Record', value: member.legalRecord },
                  ]} />
                </PersonCard>
              ))}
            </section>

            {/* IN-LAWS */}
            <section data-section="in-laws" id="in-laws" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 2 — In-Laws / Capital Allocators</SectionEyebrow>
              <SectionTitle>Spouses &amp; Partners</SectionTitle>

              {generations[1].members.map((member, i) => (
                <PersonCard
                  key={i}
                  name={member.name}
                  title={member.role}
                  status={member.status}
                  isInLaw
                >
                  <DataTable rows={[
                    { label: 'Born', value: member.born },
                    { label: 'Spouse', value: member.spouse },
                    { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{member.netWorth}</span> },
                    { label: 'Notes', value: member.notes },
                    { label: 'Legal Record', value: member.legalRecord },
                  ]} />
                </PersonCard>
              ))}
            </section>

            {/* GRANDCHILDREN */}
            <section data-section="grandchildren" id="grandchildren" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 3 — Dynastic Heirs</SectionEyebrow>
              <SectionTitle>Grandchildren</SectionTitle>

              <div style={{
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid #524e46`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
                marginBottom: '1.5rem',
              }}>
                {minorChildren.note}
              </div>

              <PersonCard
                name="11 Grandchildren"
                title="Children of Donald Jr., Ivanka, Eric, Tiffany, and Barron"
                status="LIVING"
              >
                <DataTable rows={minorChildren.members.map(m => ({
                  label: m.relation,
                  value: `${m.name} — ${m.dob}`,
                }))} />
              </PersonCard>
            </section>

            {/* VEHICLES */}
            <section data-section="vehicles" id="vehicles" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Ownership &amp; Control</SectionEyebrow>
              <SectionTitle>Family Vehicles &amp; Assets</SectionTitle>

              <p style={{ fontSize: '1rem', color: '#8a8478', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '72ch' }}>
                The Trump family controls power through a dense constellation of privately held corporations, public companies, cryptocurrency ventures, golf properties, and political entities — many of which directly intersect with active US government policy.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {vehicles.map((v, i) => (
                  <VehicleRow key={i} vehicle={v} />
                ))}
              </div>

              <div style={{
                marginTop: '1rem',
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid ${ACCENT}`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
              }}>
                <strong style={{ color: ACCENT }}>Conflict of Interest Note:</strong> The Trump Revocable Trust — established January 20, 2017 — is not a genuine blind trust. Trump retains the right to dissolve it at any time and withdraw profits. He received regular business performance updates throughout his presidency. The structure was designed to create the appearance of separation while maintaining beneficial control.
              </div>
            </section>

            {/* KEY CONNECTIONS */}
            <section data-section="institutions" id="institutions" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Institutional Connections</SectionEyebrow>
              <SectionTitle>Key Connections &amp; Power Network</SectionTitle>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr>
                      {['Type', 'Individual / Entity', 'Significance'].map(h => (
                        <th key={h} style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#524e46',
                          background: '#1a1815',
                          padding: '0.75rem 1rem',
                          textAlign: 'left',
                          borderBottom: '1px solid #3a3628',
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {connections.map((c, i) => (
                      <tr key={i}>
                        <td style={{
                          padding: '0.75rem 1rem',
                          color: ACCENT_GOLD,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          borderBottom: '1px solid #2e2b22',
                          whiteSpace: 'nowrap',
                        }}>
                          {c.type}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', color: '#e8e2d6', fontWeight: 600, borderBottom: '1px solid #2e2b22' }}>
                          {c.name}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>
                          {c.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* LEGAL */}
            <section data-section="legal" id="legal" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Legal, Criminal &amp; Civil Record</SectionEyebrow>
              <SectionTitle>Criminal &amp; Civil Record</SectionTitle>

              <div style={{
                marginBottom: '1.5rem',
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid ${ACCENT}`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
              }}>
                <strong style={{ color: ACCENT }}>Criminal Convictions on Record:</strong> The Trump Organization was convicted on all 17 criminal counts (December 2022). Donald Trump personally was convicted on all 34 felony counts (May 2024) — the first former US president in history to be convicted of felony crimes. Post-election, both cases were either dismissed or resulted in unconditional discharge.
              </div>

              <LegalTable records={legalRecord} />
            </section>

            {/* CRYPTO CONFLICTS */}
            <section data-section="crypto" id="crypto" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>High-Visibility Conflict</SectionEyebrow>
              <SectionTitle>Cryptocurrency &amp; Regulatory Conflicts</SectionTitle>

              <p style={{ fontSize: '1rem', color: '#8a8478', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '72ch' }}>
                {trumpDynasty.cryptoConflicts.intro}
              </p>

              <CryptoConflictCallout />
            </section>

            {/* FOREIGN ENTANGLEMENTS */}
            <section data-section="foreign" id="foreign" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Foreign Financial Relationships</SectionEyebrow>
              <SectionTitle>Foreign Entanglements</SectionTitle>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {trumpDynasty.foreignEntanglements.map((fe, i) => (
                  <div key={i} style={{
                    background: '#111009',
                    border: `1px solid ${fe.severity === 'high' ? 'rgba(192, 57, 43, 0.3)' : '#3a3628'}`,
                    borderRadius: '0.5rem',
                    padding: '1.25rem 1.5rem',
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '1.25rem',
                    alignItems: 'start',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: ACCENT_GOLD,
                        marginBottom: '0.25rem',
                        letterSpacing: '0.04em',
                      }}>
                        {fe.country}
                      </div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: fe.severity === 'high' ? ACCENT : '#524e46',
                        background: fe.severity === 'high' ? `rgba(192, 57, 43, 0.1)` : 'transparent',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        display: 'inline-block',
                      }}>
                        {fe.severity} risk
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8e2d6', marginBottom: '0.5rem' }}>
                        {fe.entity}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#8a8478', lineHeight: 1.6 }}>
                        {fe.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* POWER ANALYSIS */}
            <section data-section="power" id="power" style={{ marginBottom: '4rem' }}>
              <SectionEyebrow>EOT / Cross-Pillar Analysis</SectionEyebrow>
              <SectionTitle>How This Dynasty Built &amp; Deploys Power</SectionTitle>

              <h3 style={{ fontSize: '1.125rem', margin: '0 0 1rem', color: '#e8e2d6' }}>Power-Building Mechanisms</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {powerAnalysis.mechanisms.map((m, i) => (
                  <PowerCard key={i} title={m.title} description={m.description} />
                ))}
              </div>

              <h3 style={{ fontSize: '1.125rem', margin: '0 0 1rem', color: '#e8e2d6' }}>Opaque Structures</h3>
              <div style={{ marginBottom: '2rem' }}>
                {powerAnalysis.opaqueStructures.map((o, i) => (
                  <OpaqueItem key={i} name={o.name} description={o.description} />
                ))}
              </div>

              <h3 style={{ fontSize: '1.125rem', margin: '0 0 1rem', color: '#e8e2d6' }}>Capital Allocators vs. Symbolic Rulers</h3>
              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      {['Member', 'Capital Role', 'Symbolic Role', 'Net Worth'].map(h => (
                        <th key={h} style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#524e46',
                          background: '#1a1815',
                          padding: '0.75rem 1rem',
                          textAlign: 'left',
                          borderBottom: '1px solid #3a3628',
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {powerAnalysis.capitalVsSymbolic.map((p, i) => (
                      <tr key={i}>
                        <td style={{ padding: '0.75rem 1rem', color: '#e8e2d6', fontWeight: 600, borderBottom: '1px solid #2e2b22', whiteSpace: 'nowrap' }}>{p.member}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.4 }}>{p.capitalRole}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.4 }}>{p.symbolicRole}</td>
                        <td style={{ padding: '0.75rem 1rem', color: ACCENT_GOLD, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', borderBottom: '1px solid #2e2b22', whiteSpace: 'nowrap' }}>{p.netWorth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{
                background: '#111009',
                border: '1px solid #2e2b22',
                borderRadius: '0.5rem',
                padding: '1.25rem 1.5rem',
                fontSize: '0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#524e46',
                lineHeight: 1.7,
              }}>
                <strong style={{ color: '#8a8478' }}>Document compiled March 2026 for redpillbiblio.wtf Dynasties Feature.</strong><br /><br />
                All claims sourced from credible public record including: Forbes; The New York Times; NY Attorney General; Manhattan DA; Wikipedia; Le Monde; Yahoo Finance; Real Leaders; US DOJ; Special Counsel Reports; Senate Intelligence Committee Reports.<br /><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {allSources.map((s, i) => (
                    <SourceLink key={i} source={s} />
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 1024px) {
          .hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default TrumpDynasty;
