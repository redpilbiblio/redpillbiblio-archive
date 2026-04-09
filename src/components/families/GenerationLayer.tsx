import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DynastyMember } from '../../data/dynasty_medici';
import { FamilyMemberCard } from './FamilyMemberCard';

interface ParentGroup {
  parentName: string;
  members: DynastyMember[];
}

interface GenerationLayerProps {
  number: number;
  label?: string;
  members: DynastyMember[];
  accentColor: string;
}

export function GenerationLayer({ number, label, members, accentColor }: GenerationLayerProps) {
  const [expanded, setExpanded] = useState(number < 3);

  const livingCount = members.filter(m => m.borderType === 'living').length;
  const deceasedCount = members.filter(m => m.borderType === 'deceased').length;
  const isCollapsible = number >= 3;

  const parentGroups: ParentGroup[] = members.reduce((acc: ParentGroup[], member) => {
    const existing = acc.find(g => g.parentName === member.parentName);
    if (existing) {
      existing.members.push(member);
    } else {
      acc.push({ parentName: member.parentName, members: [member] });
    }
    return acc;
  }, []);

  return (
    <div style={{ marginBottom: '0' }}>
      <button
        onClick={() => isCollapsible && setExpanded(v => !v)}
        style={{
          width: '100%',
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          borderRadius: '4px',
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: isCollapsible ? 'pointer' : 'default',
          marginBottom: expanded ? '1rem' : '0',
          textAlign: 'left' as const,
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: accentColor,
          fontSize: '0.7rem',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
        }}>
          {label
            ? `═══ ${label} ═══`
            : `═══ GENERATION ${number} ═══`
          }{' '}
          {members.length} descendants ({livingCount} living, {deceasedCount} deceased)
        </span>
        {isCollapsible && (
          expanded
            ? <ChevronUp size={14} style={{ color: accentColor, flexShrink: 0 }} />
            : <ChevronDown size={14} style={{ color: accentColor, flexShrink: 0 }} />
        )}
      </button>

      {(expanded || !isCollapsible) && (
        <div className="generation-cards-row" style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
        }}>
          {parentGroups.map((group, gi) => (
            <div key={gi} style={{ flexShrink: 0 }}>
              {parentGroups.length > 1 && (
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.6rem',
                  marginBottom: '0.5rem',
                  textAlign: 'center' as const,
                }}>
                  Children of {group.parentName}
                </div>
              )}
              <div style={{ display: 'flex', gap: '1rem' }}>
                {group.members.map((member) => (
                  <FamilyMemberCard key={member.id} member={member} accentColor={accentColor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
