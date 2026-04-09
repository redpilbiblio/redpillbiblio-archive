import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.substring(0, eqIdx).trim();
    const val = trimmed.substring(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const DIST_DIR = path.resolve('dist');
const BASE_URL = 'https://redpillbiblio.wtf';
const OG_BASE = `${SUPABASE_URL}/functions/v1/generate-og-image`;

const SITE_NAME = 'The Red Pill Bibliography';
const DEFAULT_DESC = 'An evidence-based research library documenting verified cases of institutional capture, corruption, and accountability failures.';

function buildHtml(title, description, url, type = 'website', structuredData = null, ogImage = null) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const desc = description.length > 155 ? description.substring(0, 152) + '...' : description;
  const finalOg = ogImage || `${OG_BASE}?type=page&title=${encodeURIComponent(title)}`;
  const templatePath = path.join(DIST_DIR, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const metaBlock = `
    <title>${fullTitle}</title>
    <meta name="description" content="${desc}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${finalOg}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${finalOg}" />
    <link rel="canonical" href="${url}" />
    ${structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>` : ''}
  `;

  return template
    .replace(/<title>.*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:type"[^>]*>/, '')
    .replace(/<meta property="og:title"[^>]*>/, '')
    .replace(/<meta property="og:description"[^>]*>/, '')
    .replace(/<meta property="og:image"[^>]*>(?!<meta property="og:image:)/, '')
    .replace(/<meta property="og:url"[^>]*>/, '')
    .replace(/<meta property="og:site_name"[^>]*>/, '')
    .replace(/<meta name="twitter:card"[^>]*>/, '')
    .replace(/<meta name="twitter:title"[^>]*>/, '')
    .replace(/<meta name="twitter:description"[^>]*>/, '')
    .replace(/<meta name="twitter:image"[^>]*>/, '')
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace('</head>', `${metaBlock}\n</head>`);
}

function writeRoute(routePath, html) {
  const dir = path.join(DIST_DIR, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`  Generated: ${routePath}/index.html`);
}

async function generateStaticPages() {
  console.log('Generating static HTML pages for SEO...\n');

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description: DEFAULT_DESC,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  const staticRoutes = [
    {
      path: '/about',
      title: 'About',
      description: 'What The Red Pill Bibliography is, how it works, and why every claim links to a primary source. An evidence library built on declassified files and court records.',
    },
    {
      path: '/methodology',
      title: 'Methodology',
      description: 'Three-tier verification system: VERIFIED primary documents, VALID secondary sources, and PRELIMINARY evidence. Every item is traced to its origin.',
    },
    {
      path: '/evidence-list',
      title: 'Evidence Archive',
      description: 'Browse all documented evidence items organized by verification tier, document type, and research pillar. Searchable archive of primary sources.',
    },
    {
      path: '/convictions',
      title: 'Convictions Tracker',
      description: 'Documented criminal convictions across government, corporate, entertainment, and religious institutions. Court records and sentencing data.',
    },
    {
      path: '/watchlist',
      title: 'The Watchlist',
      description: 'Profiles of public figures documented through court records, congressional investigations, and verified reporting for institutional accountability.',
    },
  ];

  const homeHtml = buildHtml(
    SITE_NAME,
    DEFAULT_DESC,
    BASE_URL,
    'website',
    websiteSchema,
    `${OG_BASE}?type=default`
  );
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml, 'utf-8');
  console.log('  Updated: / (index.html with WebSite schema)');

  for (const route of staticRoutes) {
    const html = buildHtml(route.title, route.description, `${BASE_URL}${route.path}`);
    writeRoute(route.path, html);
  }

  const { data: essays } = await supabase
    .from('pillar_essays')
    .select('pillar_slug, title, subtitle')
    .order('pillar_slug');

  if (essays && essays.length > 0) {
    for (const essay of essays) {
      const pillarSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: essay.title,
        description: essay.subtitle || '',
        url: `${BASE_URL}/pillars/${essay.pillar_slug}`,
        author: { '@type': 'Organization', name: 'Red Pill Bibliography Editorial Team' },
        publisher: { '@type': 'Organization', name: SITE_NAME },
      };

      const html = buildHtml(
        essay.title,
        essay.subtitle || `Research pillar: ${essay.title}`,
        `${BASE_URL}/pillars/${essay.pillar_slug}`,
        'article',
        pillarSchema
      );
      writeRoute(`/pillars/${essay.pillar_slug}`, html);
    }
  }

  await generateSitemapXml();

  console.log('\nStatic page generation complete.');
}

async function generateSitemapXml() {
  console.log('\nGenerating sitemap.xml...');

  const [
    { data: documents },
    { data: pillarEssays },
    { data: watchlist },
  ] = await Promise.all([
    supabase
      .from('documents')
      .select('slug, updated_at')
      .order('updated_at', { ascending: false }),
    supabase
      .from('pillar_essays')
      .select('pillar_slug, last_updated')
      .order('pillar_slug'),
    supabase
      .from('enemies_of_truth')
      .select('id, last_updated')
      .order('last_updated', { ascending: false })
      .limit(1),
  ]);

  const now = new Date().toISOString().split('T')[0];
  const watchlistLastmod = watchlist?.[0]?.last_updated?.split('T')[0] || now;

  const staticPages = [
    { url: '/', lastmod: now, priority: '1.0', changefreq: 'daily' },
    { url: '/about', lastmod: now, priority: '0.9', changefreq: 'weekly' },
    { url: '/methodology', lastmod: now, priority: '0.8', changefreq: 'monthly' },
    { url: '/evidence-list', lastmod: now, priority: '0.9', changefreq: 'daily' },
    { url: '/evidence', lastmod: now, priority: '0.8', changefreq: 'weekly' },
    { url: '/convictions', lastmod: now, priority: '0.8', changefreq: 'weekly' },
    { url: '/watchlist', lastmod: watchlistLastmod, priority: '0.8', changefreq: 'weekly' },
    { url: '/timeline', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/connections', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/trackers', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/trackers/congress-trades', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/trackers/insider-trades', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/trackers/suspicious-deaths', lastmod: now, priority: '0.7', changefreq: 'weekly' },
    { url: '/trackers/accidents', lastmod: now, priority: '0.6', changefreq: 'weekly' },
    { url: '/trackers/revolving-door', lastmod: now, priority: '0.6', changefreq: 'weekly' },
    { url: '/contact', lastmod: now, priority: '0.5', changefreq: 'monthly' },
    { url: '/legal', lastmod: now, priority: '0.3', changefreq: 'yearly' },
    { url: '/privacy', lastmod: now, priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', lastmod: now, priority: '0.3', changefreq: 'yearly' },
    { url: '/transparency', lastmod: now, priority: '0.5', changefreq: 'monthly' },
    { url: '/search', lastmod: now, priority: '0.5', changefreq: 'monthly' },
  ];

  const urlEntries = [
    ...staticPages.map(p => `  <url>\n    <loc>${BASE_URL}${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`),
    ...(pillarEssays || []).map(e => `  <url>\n    <loc>${BASE_URL}/pillars/${e.pillar_slug}</loc>\n    <lastmod>${e.last_updated?.split('T')[0] || now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`),
    ...(documents || []).map(d => `  <url>\n    <loc>${BASE_URL}/evidence/${d.slug}</loc>\n    <lastmod>${d.updated_at?.split('T')[0] || now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`  Generated: sitemap.xml (${urlEntries.length} URLs)`);
}

generateStaticPages().catch(err => {
  console.error('Error generating static pages:', err);
  process.exit(1);
});
