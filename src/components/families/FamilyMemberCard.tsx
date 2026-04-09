import { DynastyMember } from '../../data/dynasty_medici';
import { SocialHandlePills } from '../SocialHandlePill';
import { SOCIAL_HANDLES } from '../../data/socialHandles';

interface FamilyMemberCardProps {
  member: DynastyMember;
  accentColor: string;
}

export function FamilyMemberCard({ member, accentColor }: FamilyMemberCardProps) {
  const isGold = member.borderType === 'gold';
  const isLiving = member.borderType === 'living';
  const borderColor = isGold ? '#C9A84C' : isLiving ? '#00ff41' : '#555';
  const textColor = isGold ? '#C9A84C' : '#fff';
  const statusBg = isGold ? '#C9A84C' : isLiving ? '#00ff41' : '#444';
  const statusTextColor = isLiving || isGold ? '#000' : '#ccc';
  const linkUrl = member.wikiUrl || member.primarySourceUrl || '#';

  return (
    <div style={{
      background: '#111',
      border: `1px solid ${borderColor}`,
      borderRadius: '0.5rem',
      padding: '1.25rem',
      minWidth: '300px',
      maxWidth: '380px',
      flex: '0 0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.25rem', flex: 1, marginRight: '0.5rem' }}>
          {linkUrl !== '#' ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: textColor,
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              {member.fullName} ↗
            </a>
          ) : (
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: textColor,
              fontSize: '0.85rem',
              fontWeight: 700,
            }}>
              {member.fullName}
            </span>
          )}
          <SocialHandlePills handles={SOCIAL_HANDLES[member.fullName] || []} />
        </div>
        <span style={{
          background: statusBg,
          color: statusTextColor,
          padding: '0.15rem 0.5rem',
          borderRadius: '3px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.55rem',
          flexShrink: 0,
          fontWeight: 700,
        }}>
          {member.status}
        </span>
      </div>

      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.72rem',
        lineHeight: '1.9',
        color: isGold ? '#C9A84C' : 'rgba(255,255,255,0.75)',
      }}>
        <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Born:</span> {member.dob}</div>
        {member.dod && <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Died:</span> {member.dod}</div>}
        <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Spouse:</span> {member.spouse || 'None documented'}</div>
        {member.spouseFamily && (
          <div style={{ paddingLeft: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem' }}>
            ↳ {member.spouseFamily}
          </div>
        )}
        <div style={{ marginTop: '0.25rem' }}><span style={{ color: 'rgba(255,255,255,0.35)' }}>Profession:</span> {member.profession}</div>
        {member.majorPositions && (
          <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Positions:</span> {member.majorPositions}</div>
        )}
        <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Net Worth:</span> {member.netWorth}</div>
        <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Political:</span> {member.political}</div>
        <div><span style={{ color: 'rgba(255,255,255,0.35)' }}>Donations:</span> {member.donations}</div>
      </div>

      {member.note && (
        <div style={{
          marginTop: '0.75rem',
          paddingTop: '0.5rem',
          borderTop: '1px solid #1a1a1a',
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.65rem',
          fontStyle: 'italic',
        }}>
          {member.note}
        </div>
      )}

      {member.businesses && member.businesses.length > 0 && (
        <div style={{
          borderTop: '1px solid #1a1a1a',
          marginTop: '0.75rem',
          paddingTop: '0.75rem',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00ff41',
            fontSize: '0.65rem',
            textTransform: 'uppercase' as const,
            marginBottom: '0.5rem',
          }}>
            Business Operations
          </div>
          {member.businesses.map((biz, i) => (
            <div key={i} style={{ marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                ▸ {biz.name} — {biz.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: '1rem' }}>
                Revenue: {biz.revenue}
              </div>
              {biz.url !== '#' ? (
                <a
                  href={biz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ff41', fontSize: '0.65rem', paddingLeft: '1rem', textDecoration: 'none', display: 'block' }}
                >
                  🔗 {biz.urlDisplay} ↗
                </a>
              ) : (
                <span style={{ color: '#555', fontSize: '0.65rem', paddingLeft: '1rem', display: 'block' }}>
                  {biz.urlDisplay}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {member.disclaimer && (
        <div style={{
          marginTop: '0.75rem',
          padding: '0.75rem',
          background: 'rgba(201,168,76,0.05)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '4px',
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(201,168,76,0.7)',
          fontSize: '0.62rem',
          lineHeight: '1.5',
          fontStyle: 'italic',
        }}>
          ⚠ {member.disclaimer}
        </div>
      )}

      {member.sources && member.sources.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #1a1a1a' }}>
          {member.sources.map((src, i) => (
            <a
              key={i}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.58rem',
                color: '#00ff41',
                textDecoration: 'none',
              }}
            >
              {src.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="mobile-parent-label" style={{ display: 'none', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', marginTop: '0.5rem' }}>
        Parent: {member.parentName}
      </div>
    </div>
  );
}
