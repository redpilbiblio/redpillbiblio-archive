import { useEffect, useState } from 'react';
import { generateSitemap } from '@/lib/generateSitemap';

export function Sitemap() {
  const [sitemap, setSitemap] = useState('');

  useEffect(() => {
    async function loadSitemap() {
      const xml = await generateSitemap();
      setSitemap(xml);
    }
    loadSitemap();
  }, []);

  useEffect(() => {
    if (sitemap) {
      const blob = new Blob([sitemap], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      window.location.href = url;
    }
  }, [sitemap]);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      {sitemap || 'Generating sitemap...'}
    </div>
  );
}
