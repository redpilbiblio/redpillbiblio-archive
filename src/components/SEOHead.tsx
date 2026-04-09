import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noTitleSuffix?: boolean;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  url,
  ogImage,
  type = 'website',
  noTitleSuffix = false,
  structuredData
}: SEOHeadProps) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const defaultOgImage = `${supabaseUrl}/functions/v1/generate-og-image?type=page&title=${encodeURIComponent(title)}`;
  const finalOgImage = ogImage || defaultOgImage;

  const fullTitle = noTitleSuffix ? title : `${title} — The Red Pill Bibliography`;

  const truncatedDescription = description.length > 155
    ? description.substring(0, 152) + '...'
    : description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDescription} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="The Red Pill Bibliography" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      <link rel="canonical" href={url} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
