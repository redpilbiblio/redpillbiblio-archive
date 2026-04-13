import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { clintonDynasty } from '@/data/dynasty_clinton';
import { ChevronDown, ExternalLink, TriangleAlert as AlertTriangle, User } from 'lucide-react';
import { SocialHandlePills } from '@/components/SocialHandlePill';
import { SOCIAL_HANDLES } from '@/data/socialHandles';

const ACCENT = '#c8102e';
const ACCENT_GOLD = '#d4a853';

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
  children
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
        background: isFounder ? `rgba(200, 16, 46, 0.08)` : '#161410',
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
          <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#e8e2d6', marginBottom: '0.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.25rem' }}>
            <span>{name}</span>
            <SocialHandlePills handles={SOCIAL_HANDLES[name] || []} />
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
                background: 'rgba(200, 16, 46, 0.15)',
                color: ACCENT,
                border: '1px solid rgba(200, 16, 46, 0.25)',
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
                background: 'rgba(212, 168, 83, 0.15)',
                color: ACCENT_GOLD,
                border: '1px solid rgba(212, 168, 83, 0.25)',
              }}>
                IN-LAW
              </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: 0 }}>
        {children}
      </div>
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
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: ACCENT,
      }} />
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
      <div style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#e8e2d6',
        marginBottom: '0.5rem',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '0.75rem',
        color: '#8a8478',
        lineHeight: 1.5,
      }}>
        {description}
      </div>
    </div>
  );
}

function VehicleRow({ vehicle }: { vehicle: typeof clintonDynasty.vehicles[0] }) {
  const statusColors: Record<string, { bg: string; text: string }> = {
    'Active': { bg: 'rgba(0, 255, 65, 0.1)', text: '#00ff41' },
    'Closed': { bg: 'rgba(100,100,100,0.1)', text: '#888' },
    'Dark Money': { bg: 'rgba(200, 16, 46, 0.1)', text: ACCENT },
    'Indirect': { bg: 'rgba(212, 168, 83, 0.1)', text: ACCENT_GOLD },
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

function LegalTable({ records }: { records: typeof clintonDynasty.legalRecord }) {
  const outcomeColors: Record<string, string> = {
    cleared: '#4ade80',
    impeached: ACCENT,
    settled: ACCENT_GOLD,
    nocharge: '#8a8478',
    active: ACCENT_GOLD,
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

function EpsteinCallout() {
  const { stats, facts } = clintonDynasty.epsteinConnection;

  return (
    <div style={{
      border: `1px solid rgba(200, 16, 46, 0.35)`,
      background: `rgba(200, 16, 46, 0.05)`,
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
        Documented Facts — Epstein / Clinton Connection
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1rem' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: stat.color === 'accent' ? ACCENT_GOLD : stat.color === 'muted' ? '#524e46' : ACCENT,
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#524e46',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginTop: '0.25rem',
              whiteSpace: 'pre-line',
            }}>
              {stat.label.replace(/ /g, '\n')}
            </div>
          </div>
        ))}
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
                {f.status === 'documented' ? 'Documented' : f.status === 'claimed' ? 'Claimed by former aide — Contested' : 'None filed as of March 2026'}
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

export function ClintonDynasty() {
  const [activeSection, setActiveSection] = useState('origins');
  const { origins, founder, wealthMechanisms, generations, minorChildren, vehicles, connections, legalRecord, allegations, vincentFosterNote, powerAnalysis, allSources } = clintonDynasty;

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
    { id: 'hillary', label: 'Hillary Clinton' },
    { id: 'chelsea', label: 'Chelsea Clinton' },
    { id: 'marc', label: 'Marc Mezvinsky' },
    { id: 'grandchildren', label: 'Grandchildren' },
    { id: 'vehicles', label: 'Vehicles & Assets' },
    { id: 'institutions', label: 'Institutional Map' },
    { id: 'legal', label: 'Legal Record' },
    { id: 'epstein', label: 'Epstein Connection' },
    { id: 'power', label: 'Power Analysis' },
  ];

  return (
    <>
      <SEOHead
        title="Clinton Dynasty"
        description="The Clinton Dynasty dossier: origins, wealth mechanisms, legal record, Epstein connections, and institutional power map. Compiled from credible public sources."
        url="https://redpillbiblio.wtf/families/clinton"
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
              border: `1px solid rgba(200, 16, 46, 0.25)`,
              background: `rgba(200, 16, 46, 0.08)`,
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
              The <span style={{ color: ACCENT }}>Clinton</span> Dynasty
            </h1>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: '#8a8478',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Political-Corporate Conversion Dynasty · Era: Modern Sovereign
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
              <div><span style={{ color: '#524e46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Classification</span> <span>Political → Corporate → Philanthropic</span></div>
              <div><StatusBadge status="LIVING" /></div>
              <div><span style={{ color: '#524e46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Est. Combined Wealth</span> <span style={{ color: ACCENT, fontWeight: 700 }}>~$120–240M</span></div>
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
                    background: activeSection === link.id ? 'rgba(200, 16, 46, 0.1)' : 'transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          <div style={{ minWidth: 0 }}>
            <section data-section="origins" id="origins" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 0</SectionEyebrow>
              <SectionTitle>Origins of Surname & Pre-Wealth Generations</SectionTitle>
              <div style={{ fontSize: '1rem', color: '#8a8478', lineHeight: 1.7 }}>
                {origins.paragraphs.map((p, i) => (
                  <p key={i} style={{ marginBottom: '1rem', maxWidth: '72ch' }}>{p}</p>
                ))}
              </div>

              <h3 style={{ fontSize: '1.125rem', margin: '1.5rem 0 1rem', color: '#e8e2d6' }}>Pre-Wealth Generations: Bill Clinton's Direct Line</h3>
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

            <section data-section="founder" id="founder" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 1 — Founder</SectionEyebrow>
              <SectionTitle>William Jefferson Clinton</SectionTitle>

              <PersonCard
                name="William Jefferson Clinton"
                title="42nd President of the United States · Dynasty Founder"
                status="LIVING"
                isFounder
              >
                <DataTable rows={[
                  { label: 'Born', value: founder.dob },
                  { label: 'Status', value: 'Living (age 79 as of 2026); multiple serious cardiac episodes; seen with portable defibrillator August 2025' },
                  { label: 'Spouse', value: founder.spouse },
                  { label: 'Children', value: 'Chelsea Victoria Clinton (born February 27, 1980, Little Rock, AR) — only child' },
                  { label: 'Profession', value: founder.profession },
                  { label: 'Political', value: founder.political },
                  { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{founder.netWorth}</span> },
                  { label: 'External', value: <a href={founder.wikiUrl} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_GOLD }}>Wikipedia — Bill Clinton</a> },
                ]} />
              </PersonCard>

              <h3 style={{ fontSize: '1.125rem', margin: '1.5rem 0 1rem', color: '#e8e2d6' }}>Wealth Mechanisms</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {wealthMechanisms.map((w, i) => (
                  <WealthCard key={i} amount={w.amount} label={w.label} description={w.description} />
                ))}
              </div>
            </section>

            <section data-section="hillary" id="hillary" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 2 — Co-Architect</SectionEyebrow>
              <SectionTitle>Hillary Diane Rodham Clinton</SectionTitle>

              <PersonCard
                name="Hillary Diane Rodham Clinton"
                title="Senator · Secretary of State · 2016 Presidential Nominee · Professor, Columbia SIPA"
                status="LIVING"
                isFounder
              >
                <DataTable rows={[
                  { label: 'Born', value: 'October 26, 1947 · Chicago, Illinois' },
                  { label: 'Spouse', value: 'Bill Clinton (married 1975)' },
                  { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>~$120M combined (2024–2025 estimates)</span> },
                  { label: 'Key Roles', value: 'First Lady (1993–2001); U.S. Senator, NY (2001–2009); Secretary of State (2009–2013); 2016 Presidential Nominee; Professor of Practice, Columbia SIPA (2023–present)' },
                  { label: 'Businesses', value: 'HiddenLight Productions (co-founded with Chelsea Clinton & Sam Branson); Onward Together PAC (founded 2017)' },
                ]} />
              </PersonCard>

              <div style={{
                marginTop: '1.25rem',
                border: `1px solid rgba(212, 168, 83, 0.35)`,
                background: `rgba(212, 168, 83, 0.04)`,
                borderRadius: '0.5rem',
                padding: '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: ACCENT_GOLD,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                }}>
                  <AlertTriangle style={{ width: '14px', height: '14px' }} />
                  Active Legal Matter — February 2026
                </div>
                <p style={{ fontSize: '0.875rem', color: '#8a8478', lineHeight: 1.6 }}>
                  On <strong style={{ color: '#e8e2d6' }}>February 26, 2026</strong>, Hillary Clinton was deposed under oath by the House Oversight Committee in Chappaqua, NY, as part of the congressional investigation into Jeffrey Epstein's network. Testimony was behind closed doors and transcribed.
                </p>
              </div>
            </section>

            <section data-section="chelsea" id="chelsea" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 2 — Generation</SectionEyebrow>
              <SectionTitle>Chelsea Victoria Clinton</SectionTitle>

              <PersonCard
                name="Chelsea Victoria Clinton"
                title="Vice Chair, Clinton Foundation · Corporate Board Director · Co-Founder, HiddenLight"
                status="LIVING"
              >
                <DataTable rows={[
                  { label: 'Born', value: 'February 27, 1980 · Little Rock, Arkansas' },
                  { label: 'Spouse', value: 'Marc Mezvinsky (married July 31, 2010, Rhinebeck, NY)' },
                  { label: 'Children', value: 'Charlotte (b. 2014); Aidan (b. 2016); Jasper (b. 2019) — all minors' },
                  { label: 'Est. Net Worth', value: <span style={{ color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>~$30M (combined with Marc Mezvinsky)</span> },
                  { label: 'Board Roles', value: 'Expedia Group — Director since 2017; IAC Inc. — Director since 2011 ($9M compensation through 2020); Clover Health — Director since 2021' },
                  { label: 'Foundation', value: 'Vice Chair, Clinton Foundation; Vice Chair, CHAI' },
                  { label: 'Legal Record', value: 'None documented' },
                ]} />
              </PersonCard>

              <div style={{
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid #524e46`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
              }}>
                <strong style={{ color: '#8a8478' }}>Dynasty Note:</strong> Chelsea's placement on the boards of IAC (2011) and Expedia (2017) — both controlled by longtime Clinton ally Barry Diller — represents a classic dynastic move: translating family prestige into corporate governance compensation without a traditional operating track record.
              </div>
            </section>

            <section data-section="marc" id="marc" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Layer 2 — In-Law / Capital Allocator</SectionEyebrow>
              <SectionTitle>Marc Margolies Mezvinsky</SectionTitle>

              <PersonCard
                name="Marc Margolies Mezvinsky"
                title="Partner, TPG Rise Climate · Highest-AUM Capital Allocator in Dynasty Orbit"
                status="LIVING"
                isInLaw
              >
                <DataTable rows={[
                  { label: 'Born', value: 'December 10, 1977' },
                  { label: 'Spouse', value: 'Chelsea Clinton (married 2010)' },
                  { label: 'Family Background', value: 'Father: Edward Mezvinsky (former Democratic congressman) — convicted of fraud 2001, served prison time. Mother: Marjorie Margolies (Democratic congresswoman, Pennsylvania).' },
                  { label: 'Current Role', value: 'Partner, TPG Rise Climate — climate tech impact investing; TPG manages $220B+ AUM; debut fund $7B+' },
                  { label: 'Notable Controversy', value: 'Eaglevale Partners LP (2011–2016): launched with Goldman colleagues; Hellenic Opportunity fund lost ~90% of value before closure 2016.' },
                  { label: 'Legal Record', value: 'None documented' },
                ]} />
              </PersonCard>
            </section>

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
                name="Charlotte, Aidan & Jasper Clinton Mezvinsky"
                title="Children of Chelsea Clinton & Marc Mezvinsky · New York City metro area"
                status="LIVING"
              >
                <DataTable rows={[
                  { label: 'Charlotte', value: 'Born September 26, 2014 (age ~11)' },
                  { label: 'Aidan', value: 'Born June 18, 2016 (age ~9)' },
                  { label: 'Jasper', value: 'Born July 22, 2019 (age ~6)' },
                  { label: 'Public Roles', value: 'None — all minors with no public roles as of 2026' },
                ]} />
              </PersonCard>
            </section>

            <section data-section="vehicles" id="vehicles" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Ownership & Control</SectionEyebrow>
              <SectionTitle>Family Vehicles & Assets</SectionTitle>

              <p style={{ fontSize: '1rem', color: '#8a8478', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '72ch' }}>
                The Clinton family controls power primarily through a constellation of nonprofit structures, political action organizations, and corporate board positions — not through direct business ownership in the conventional sense.
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
                <strong style={{ color: ACCENT }}>Opaque Structure Note:</strong> The Harry Walker Agency manages all Clinton speaking engagements; IRS forms do not disclose specific speech buyers, only gross income. Onward Together 501(c)(4) legally prohibited from disclosing donors.
              </div>
            </section>

            <section data-section="institutions" id="institutions" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Institutional Connections</SectionEyebrow>
              <SectionTitle>Institutional Power Map</SectionTitle>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr>
                      {['Institution', 'Person / Role', 'Strategic Significance'].map(h => (
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
                          color: c.entity.includes('Epstein') ? ACCENT : '#e8e2d6',
                          fontWeight: 600,
                          borderBottom: '1px solid #2e2b22',
                        }}>
                          {c.entity}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>
                          {c.relationship}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>
                          {c.significance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section data-section="legal" id="legal" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>Legal, Sanctions & Repression Profile</SectionEyebrow>
              <SectionTitle>Criminal & Civil Record</SectionTitle>

              <div style={{
                marginBottom: '1.5rem',
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid #524e46`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
              }}>
                <strong>Sanctions (Family-Wide):</strong> None documented. No member of the Clinton family appears on U.S., EU, UK, or UN sanctions lists.
              </div>

              <LegalTable records={legalRecord} />

              <h3 style={{ fontSize: '1.125rem', margin: '2.5rem 0 1rem', color: '#e8e2d6' }}>Sexual Misconduct Allegations (Bill Clinton)</h3>

              <div style={{
                marginBottom: '1rem',
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid #524e46`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
              }}>
                <strong>Note:</strong> The following are documented allegations from public record. Inclusion here does not imply guilt. Characterizations reflect documented outcomes only.
              </div>

              {allegations.map((a, i) => (
                <div key={i} style={{
                  background: '#111009',
                  border: '1px solid #2e2b22',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.25rem',
                  marginBottom: '0.75rem',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr auto',
                  gap: '1rem',
                  alignItems: 'start',
                  fontSize: '0.875rem',
                }}>
                  <div style={{ fontWeight: 600, color: '#e8e2d6' }}>{a.name}</div>
                  <div style={{ color: '#8a8478', lineHeight: 1.5 }}>{a.description}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: a.statusType === 'admitted' ? ACCENT : a.statusType === 'settled' ? ACCENT_GOLD : '#8a8478',
                    whiteSpace: 'nowrap',
                  }}>
                    {a.status}
                  </div>
                </div>
              ))}

              <h3 style={{ fontSize: '1.125rem', margin: '2.5rem 0 1rem', color: '#e8e2d6' }}>Vince Foster Death</h3>
              <div style={{
                background: '#1a1815',
                border: '1px solid #2e2b22',
                borderLeft: `3px solid #524e46`,
                padding: '1rem 1.25rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontSize: '0.875rem',
                color: '#8a8478',
                lineHeight: 1.6,
              }}>
                {vincentFosterNote}
              </div>
            </section>

            <section data-section="epstein" id="epstein" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #2e2b22' }}>
              <SectionEyebrow>High-Visibility Connection</SectionEyebrow>
              <SectionTitle>Jeffrey Epstein Network — Documented Connection</SectionTitle>
              <EpsteinCallout />
            </section>

            <section data-section="power" id="power" style={{ marginBottom: '4rem' }}>
              <SectionEyebrow>EOT / Cross-Pillar Analysis</SectionEyebrow>
              <SectionTitle>How This Dynasty Built & Deploys Power</SectionTitle>

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
                      {['Person', 'Classification', 'Primary Role'].map(h => (
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
                        <td style={{ padding: '0.75rem 1rem', color: '#e8e2d6', fontWeight: 600, borderBottom: '1px solid #2e2b22' }}>{p.person}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22' }}>{p.classification}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#8a8478', borderBottom: '1px solid #2e2b22', lineHeight: 1.5 }}>{p.role}</td>
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
                All claims sourced from credible public record including: Wikipedia; Forbes; NYT; Washington Post; Reuters; AP; The Hill; Congressional Record; IRS Form 990 filings; U.S. Federal Court Records; Clinton Foundation audited financials.<br /><br />
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

export default ClintonDynasty;
