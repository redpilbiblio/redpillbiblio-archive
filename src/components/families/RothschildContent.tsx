import { rothschildDynasty } from '../../data/dynasty_rothschild';
import { AncestryBreadcrumb } from './AncestryBreadcrumb';
import { OriginsBlock } from './OriginsBlock';
import { FounderHeroCard } from './FounderHeroCard';
import { GenerationLayer } from './GenerationLayer';
import { ConnectionsTable } from './ConnectionsTable';
import { LegacySection } from './LegacySection';
import { SourcePills } from './SourcePills';

const ACCENT = '#C9A84C';

const BRANCH_LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  color: 'rgba(201,168,76,0.5)',
  fontSize: '0.6rem',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  marginBottom: '0.5rem',
  marginTop: '0.25rem',
};

const GEN_NOTE_STYLE: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  color: 'rgba(255,255,255,0.35)',
  fontSize: '0.7rem',
  fontStyle: 'italic',
  padding: '0.5rem 1rem',
  borderLeft: '2px solid #333',
  marginBottom: '0.75rem',
};

const CONNECTOR = (
  <div style={{
    width: '2px',
    height: '40px',
    background: ACCENT,
    margin: '0 auto',
    opacity: 0.4,
  }} />
);

const BRANCH_CLUSTERS: Record<number, { label: string; memberIds: string[] }[]> = {
  7: [
    { label: '── English Branch (Jacob / Victor\'s Line) ──', memberIds: ['jacob-4th-baron'] },
    { label: '── Evelyn Line (Anthony\'s Descendants) ──', memberIds: ['evelyn'] },
    { label: '── French Branch (James → Guy\'s Line) ──', memberIds: ['david-rene', 'edouard'] },
    { label: '── Wine Branch (Philippe\'s Line) ──', memberIds: ['philippe-wine'] },
    { label: '── Edmond Branch ──', memberIds: ['benjamin'] },
  ],
  8: [
    { label: '── English Branch ──', memberIds: ['nat-5th-baron', 'hannah'] },
    { label: '── Evelyn Line ──', memberIds: ['lynn-forester'] },
    { label: '── French Branch ──', memberIds: ['alexandre'] },
    { label: '── Wine Branch ──', memberIds: ['philippine', 'julien'] },
    { label: '── Edmond Branch ──', memberIds: ['ariane'] },
  ],
};

export function RothschildContent() {
  const { origins, founder, generations, connections, legacy, allSources } = rothschildDynasty;

  const breadcrumbItems = [
    "ROTHSCHILD",
    "Mayer Amschel",
    "Five Sons",
    "Nathan → Lionel → Natty",
    "Victor 3rd Baron → Jacob 4th Baron",
    "Nat 5th Baron / Alexandre / Ariane",
  ];

  return (
    <div>
      <AncestryBreadcrumb items={breadcrumbItems} accentColor={ACCENT} />

      <OriginsBlock
        accentColor={ACCENT}
        paragraphs={origins.paragraphs}
        lineage={origins.preWealthLineage}
        sources={origins.sources}
      />

      {CONNECTOR}

      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: ACCENT,
          fontSize: '0.7rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          textAlign: 'center' as const,
          marginBottom: '1rem',
          padding: '0.5rem',
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          borderRadius: '4px',
        }}>
          ═══ GENERATION 1 — FOUNDER ═══ 1 patriarch
        </div>
        <FounderHeroCard founder={founder} accentColor={ACCENT} />
      </div>

      {generations.map((gen) => {
        const clusters = BRANCH_CLUSTERS[gen.number];
        return (
          <div key={gen.number}>
            {CONNECTOR}
            {clusters ? (
              <div>
                <div style={{
                  background: '#0d0d0d',
                  border: '1px solid #1a1a1a',
                  borderRadius: '4px',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: ACCENT,
                    fontSize: '0.7rem',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                  }}>
                    {gen.label
                      ? `═══ ${gen.label} ═══`
                      : `═══ GENERATION ${gen.number} ═══`
                    }{' '}
                    {gen.members.length} descendants ({gen.members.filter(m => m.borderType === 'living').length} living, {gen.members.filter(m => m.borderType === 'deceased').length} deceased)
                  </span>
                </div>
                {gen.note && (
                  <div style={GEN_NOTE_STYLE}>{gen.note}</div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {clusters.map((cluster) => {
                    const clusterMembers = gen.members.filter(m => cluster.memberIds.includes(m.id));
                    if (clusterMembers.length === 0) return null;
                    return (
                      <div key={cluster.label}>
                        <div style={BRANCH_LABEL_STYLE}>{cluster.label}</div>
                        <div className="generation-cards-row" style={{
                          display: 'flex',
                          gap: '1rem',
                          overflowX: 'auto',
                          paddingBottom: '0.5rem',
                          flexWrap: 'nowrap',
                          alignItems: 'flex-start',
                        }}>
                          {clusterMembers.map(member => {
                            const isGold = member.borderType === 'gold';
                            const isLiving = member.borderType === 'living';
                            const borderColor = isGold ? '#C9A84C' : isLiving ? '#00ff41' : '#555';
                            const textColor = isGold ? '#C9A84C' : '#fff';
                            const statusBg = isGold ? '#C9A84C' : isLiving ? '#00ff41' : '#444';
                            const statusTextColor = isLiving || isGold ? '#000' : '#ccc';
                            const linkUrl = member.wikiUrl || member.primarySourceUrl || '#';

                            return (
                              <div key={member.id} style={{
                                background: '#111',
                                border: `1px solid ${borderColor}`,
                                borderRadius: '0.5rem',
                                padding: '1.25rem',
                                minWidth: '300px',
                                maxWidth: '380px',
                                flex: '0 0 auto',
                              }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                  {linkUrl !== '#' ? (
                                    <a
                                      href={linkUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ fontFamily: "'JetBrains Mono', monospace", color: textColor, fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', flex: 1, marginRight: '0.5rem' }}
                                    >
                                      {member.fullName} ↗
                                    </a>
                                  ) : (
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: textColor, fontSize: '0.85rem', fontWeight: 700, flex: 1, marginRight: '0.5rem' }}>
                                      {member.fullName}
                                    </span>
                                  )}
                                  <span style={{ background: statusBg, color: statusTextColor, padding: '0.15rem 0.5rem', borderRadius: '3px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', flexShrink: 0, fontWeight: 700 }}>
                                    {member.status}
                                  </span>
                                </div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', lineHeight: '1.9', color: isGold ? '#C9A84C' : 'rgba(255,255,255,0.75)' }}>
                                  <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Born:</span> {member.dob}</div>
                                  {member.dod && <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Died:</span> {member.dod}</div>}
                                  <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Spouse:</span> {member.spouse || 'None documented'}</div>
                                  {member.spouseFamily && <div style={{ paddingLeft: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem' }}>↳ {member.spouseFamily}</div>}
                                  <div style={{ marginTop: '0.25rem' }}><span style={{ color: 'rgba(255,255,255,0.35)' }}>Profession:</span> {member.profession}</div>
                                  {member.majorPositions && <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Positions:</span> {member.majorPositions}</div>}
                                  <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Net Worth:</span> {member.netWorth}</div>
                                  <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Political:</span> {member.political}</div>
                                  <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Donations:</span> {member.donations}</div>
                                </div>
                                {member.note && (
                                  <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #1a1a1a', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontStyle: 'italic' }}>
                                    {member.note}
                                  </div>
                                )}
                                {member.businesses && member.businesses.length > 0 && (
                                  <div style={{ borderTop: '1px solid #1a1a1a', marginTop: '0.75rem', paddingTop: '0.75rem' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00ff41', fontSize: '0.65rem', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Business Operations</div>
                                    {member.businesses.map((biz, i) => (
                                      <div key={i} style={{ marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>
                                        <div style={{ color: 'rgba(255,255,255,0.8)' }}>▸ {biz.name} — {biz.title}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: '1rem' }}>Revenue: {biz.revenue}</div>
                                        {biz.url !== '#' ? (
                                          <a href={biz.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff41', fontSize: '0.65rem', paddingLeft: '1rem', textDecoration: 'none', display: 'block' }}>
                                            {biz.urlDisplay} ↗
                                          </a>
                                        ) : (
                                          <span style={{ color: '#555', fontSize: '0.65rem', paddingLeft: '1rem', display: 'block' }}>{biz.urlDisplay}</span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {member.sources && member.sources.length > 0 && (
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #1a1a1a' }}>
                                    {member.sources.map((src, i) => (
                                      <a key={i} href={src.url} target="_blank" rel="noopener noreferrer" style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '4px', padding: '0.25rem 0.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: '#00ff41', textDecoration: 'none' }}>
                                        {src.label} ↗
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                {gen.note && <div style={GEN_NOTE_STYLE}>{gen.note}</div>}
                <GenerationLayer
                  number={gen.number}
                  label={gen.label}
                  members={gen.members}
                  accentColor={ACCENT}
                />
              </div>
            )}
          </div>
        );
      })}

      {CONNECTOR}

      <div style={{
        textAlign: 'center' as const,
        padding: '1.5rem 0',
        borderTop: '1px solid #333',
        marginTop: '1.5rem',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#00ff41',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
        }}>
          ═══ DYNASTY ACTIVE — EST. 1744 ═══
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.7rem',
          marginTop: '0.5rem',
        }}>
          Five branches operating across banking, wine, private equity, and philanthropy
        </div>
      </div>

      <ConnectionsTable connections={connections} accentColor={ACCENT} />
      <LegacySection accentColor={ACCENT} intro={legacy.intro} items={legacy.items} />

      <div style={{ marginTop: '1.5rem' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.65rem',
          textTransform: 'uppercase' as const,
          marginBottom: '0.5rem',
        }}>
          All Sources ({allSources.length})
        </div>
        <SourcePills sources={allSources} />
      </div>
    </div>
  );
}
