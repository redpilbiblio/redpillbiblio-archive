import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface OGImageRequest {
  title: string;
  tier: 'verified' | 'corroborated' | 'preliminary';
  category: string;
  type: 'evidence' | 'default';
}

function wrapText(text: string, maxChars: number, maxLines: number): string[] {
  const truncated = text.length > 80 ? text.substring(0, 77) + '...' : text;
  const words = truncated.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxChars && currentLine.length > 0) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = currentLine ? currentLine + ' ' + word : word;
    }
  }
  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  const result = lines.slice(0, maxLines);
  if (lines.length > maxLines) {
    result[maxLines - 1] = result[maxLines - 1].substring(0, maxChars - 3) + '...';
  }
  return result;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateShieldIcon(tier: string, x: number, y: number): string {
  const colors: Record<string, { fill: string; stroke: string }> = {
    verified: { fill: '#00ff41', stroke: '#00ff41' },
    corroborated: { fill: '#f59e0b', stroke: '#f59e0b' },
    preliminary: { fill: 'none', stroke: '#6b7280' },
  };

  const { fill, stroke } = colors[tier] || colors.preliminary;
  const fillOpacity = tier === 'preliminary' ? '0' : '0.2';

  return `
    <g transform="translate(${x}, ${y})">
      <path d="M16 2 L28 8 L28 18 C28 26 16 32 16 32 C16 32 4 26 4 18 L4 8 Z"
        fill="${fill}" fill-opacity="${fillOpacity}" stroke="${stroke}" stroke-width="2.5"/>
      ${tier === 'verified' ? `
        <path d="M10 16 L14 20 L22 12" fill="none" stroke="${stroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ` : tier === 'corroborated' ? `
        <circle cx="16" cy="17" r="3" fill="none" stroke="${stroke}" stroke-width="2"/>
        <line x1="16" y1="10" x2="16" y2="13" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      ` : `
        <circle cx="16" cy="17" r="1.5" fill="${stroke}"/>
        <line x1="16" y1="11" x2="16" y2="15" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      `}
    </g>
  `;
}

function generateEvidenceSVG(data: OGImageRequest): string {
  const { title, tier, category } = data;

  const tierLabels: Record<string, string> = {
    verified: 'VERIFIED',
    corroborated: 'CORROBORATED',
    preliminary: 'PRELIMINARY',
  };

  const tierColors: Record<string, string> = {
    verified: '#00ff41',
    corroborated: '#f59e0b',
    preliminary: '#6b7280',
  };

  const tierLabel = tierLabels[tier] || 'PRELIMINARY';
  const tierColor = tierColors[tier] || tierColors.preliminary;
  const displayLines = wrapText(title, 45, 2);

  return `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .title { font-family: 'Arial', 'Helvetica', sans-serif; fill: #ffffff; font-size: 48px; font-weight: 700; }
          .category { font-family: 'Courier New', monospace; fill: #00ff41; font-size: 22px; font-weight: 400; }
          .tier-label { font-family: 'Courier New', monospace; fill: ${tierColor}; font-size: 18px; font-weight: 700; letter-spacing: 2px; }
          .footer { font-family: 'Courier New', monospace; fill: #00ff41; font-size: 18px; font-weight: 400; opacity: 0.8; }
          .scanline { fill: #00ff41; opacity: 0.03; }
        </style>
      </defs>

      <rect width="1200" height="630" fill="#0a0a0a"/>

      <rect x="0" y="0" width="1200" height="6" fill="#00ff41"/>
      <rect x="0" y="6" width="1200" height="2" fill="#00ff41" opacity="0.3"/>

      ${Array.from({ length: 31 }, (_, i) =>
        `<rect x="0" y="${i * 20}" width="1200" height="1" class="scanline"/>`
      ).join('\n      ')}

      <rect x="60" y="60" width="4" height="510" fill="#00ff41" opacity="0.15"/>

      <text x="90" y="110" class="category">&gt; cat /evidence/${escapeXml(category.toLowerCase().replace(/[^a-z0-9]/g, '-'))}</text>

      ${displayLines.map((line, i) =>
        `<text x="90" y="${200 + (i * 62)}" class="title">${escapeXml(line)}</text>`
      ).join('\n      ')}

      <g transform="translate(90, ${200 + displayLines.length * 62 + 30})">
        ${generateShieldIcon(tier, 0, -14)}
        <text x="42" y="8" class="tier-label">${tierLabel}</text>
      </g>

      <line x1="90" y1="540" x2="1110" y2="540" stroke="#00ff41" stroke-width="1" opacity="0.2"/>
      <text x="90" y="580" class="footer">REDPILLBIBLIO.WTF</text>

      <rect x="1100" y="60" width="40" height="40" fill="none" stroke="#00ff41" stroke-width="1" opacity="0.2" rx="4"/>
      <text x="1120" y="86" font-family="Courier New, monospace" font-size="14" fill="#00ff41" text-anchor="middle" opacity="0.3">RPB</text>
    </svg>
  `;
}

function generateDefaultSVG(): string {
  return `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .title { font-family: 'Arial', 'Helvetica', sans-serif; fill: #ffffff; font-size: 52px; font-weight: 700; }
          .subtitle { font-family: 'Courier New', monospace; fill: #00ff41; font-size: 28px; font-weight: 400; }
          .footer { font-family: 'Courier New', monospace; fill: #00ff41; font-size: 24px; font-weight: 700; }
          .scanline { fill: #00ff41; opacity: 0.03; }
        </style>
      </defs>

      <rect width="1200" height="630" fill="#0a0a0a"/>

      <rect x="0" y="0" width="1200" height="6" fill="#00ff41"/>
      <rect x="0" y="6" width="1200" height="2" fill="#00ff41" opacity="0.3"/>

      ${Array.from({ length: 31 }, (_, i) =>
        `<rect x="0" y="${i * 20}" width="1200" height="1" class="scanline"/>`
      ).join('\n      ')}

      <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#00ff41" stroke-width="2" opacity="0.3" rx="4"/>

      <text x="600" y="240" class="title" text-anchor="middle">The Red Pill</text>
      <text x="600" y="310" class="title" text-anchor="middle">Bibliography</text>
      <text x="600" y="380" class="subtitle" text-anchor="middle">&gt; An Evidence-Based Research Library</text>

      <text x="600" y="560" class="footer" text-anchor="middle">REDPILLBIBLIO.WTF</text>
    </svg>
  `;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const type = (url.searchParams.get('type') as 'evidence' | 'default') || 'default';
    const title = url.searchParams.get('title') || 'The Red Pill Bibliography';
    const category = url.searchParams.get('category') || url.searchParams.get('pillar') || 'Research';
    const tier = (url.searchParams.get('tier') as 'verified' | 'corroborated' | 'preliminary') || 'preliminary';

    let svg: string;

    if (type === 'evidence') {
      svg = generateEvidenceSVG({
        title: decodeURIComponent(title),
        tier,
        category: decodeURIComponent(category),
        type: 'evidence',
      });
    } else {
      svg = generateDefaultSVG();
    }

    return new Response(svg, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);

    return new Response(
      JSON.stringify({ error: 'Failed to generate OG image' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
