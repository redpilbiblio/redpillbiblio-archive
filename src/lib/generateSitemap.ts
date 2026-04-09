import { supabase } from './supabase';

export async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://redpillbiblio.wtf';

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

  const urls = [
    ...staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`),

    ...(pillarEssays || []).map(essay => `
  <url>
    <loc>${baseUrl}/pillars/${essay.pillar_slug}</loc>
    <lastmod>${essay.last_updated?.split('T')[0] || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`),

    ...(documents || []).map(doc => `
  <url>
    <loc>${baseUrl}/evidence/${doc.slug}</loc>
    <lastmod>${doc.updated_at?.split('T')[0] || now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`),
  ].join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
