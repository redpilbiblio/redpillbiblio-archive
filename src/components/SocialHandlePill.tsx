const PLATFORM_STYLES: Record<string, { label: string; color: string; border: string; bg: string }> = {
  X: {
    label: "\u{1D54F}",
    color: "#e5e5e5",
    border: "#e5e5e533",
    bg: "#e5e5e508",
  },
  Instagram: {
    label: "IG",
    color: "#E4405F",
    border: "#E4405F33",
    bg: "#E4405F08",
  },
  LinkedIn: {
    label: "in",
    color: "#0A66C2",
    border: "#0A66C233",
    bg: "#0A66C208",
  },
  Official: {
    label: "\u{1F310}",
    color: "#00ff41",
    border: "#00ff4133",
    bg: "#00ff4108",
  },
};

interface SocialHandle {
  platform: string;
  handle: string;
  url: string;
  archived?: boolean;
}

export function SocialHandlePill({ platform, handle, url, archived }: SocialHandle) {
  const style = PLATFORM_STYLES[platform] || PLATFORM_STYLES["Official"];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={archived ? "Archived account" : `${platform}: ${handle}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65em",
        marginLeft: "0.4rem",
        color: style.color,
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: "3px",
        padding: "0.1rem 0.4rem",
        textDecoration: "none",
        opacity: archived ? 0.5 : 0.85,
        verticalAlign: "middle",
        lineHeight: 1.4,
        transition: "opacity 0.15s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = archived ? "0.65" : "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = archived ? "0.5" : "0.85")}
    >
      <span style={{ fontSize: "0.9em", opacity: 0.7 }}>{style.label}</span>
      {handle}
    </a>
  );
}

export function SocialHandlePills({ handles }: { handles?: SocialHandle[] }) {
  if (!handles || handles.length === 0) return null;
  return (
    <>
      {handles.map((h, i) => (
        <SocialHandlePill key={i} platform={h.platform} handle={h.handle} url={h.url} archived={h.archived} />
      ))}
    </>
  );
}
