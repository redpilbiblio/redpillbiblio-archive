interface AncestryBreadcrumbProps {
  items: string[];
  accentColor: string;
}

export function AncestryBreadcrumb({ items, accentColor }: AncestryBreadcrumbProps) {
  return (
    <div
      className="ancestry-breadcrumb"
      style={{
        position: 'sticky',
        top: '6.5rem',
        zIndex: 10,
        background: 'rgba(0,0,0,0.95)',
        borderBottom: '1px solid #1a1a1a',
        padding: '0.5rem 1rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: accentColor,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {items.join(' > ')}
    </div>
  );
}
