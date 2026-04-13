import { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Document } from '@/lib/supabase';
import { getPillarBySlug, normalizePillarName, CONNECTED_PILLARS } from '@/lib/pillarUtils';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  DollarSign,
  Scale,
  Globe,
  Shield,
  Baby,
  Eye,
  Zap,
  Target,
  Trees,
  ArrowRight,
  Calendar,
  BookOpen,
} from 'lucide-react';
import { formatUTCDateShort } from '@/lib/utils';
import { usePillarEssay, useVerifiedDocuments } from '@/hooks/useSupabaseQuery';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign, Target, FileText, Scale, Shield, Zap, Baby, Globe, Eye, Trees,
};

function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1.5 text-green-300/80 text-sm pl-2">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-green-300">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={i} className="text-green-400 font-mono text-lg font-bold mt-8 mb-3 first:mt-0">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      listItems.push(line.replace('- ', ''));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={i}
          className="text-green-300/80 text-sm leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

export function PillarOverview() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const pillar = slug ? getPillarBySlug(slug) : undefined;
  const PillarIcon = pillar ? ICON_MAP[pillar.icon] || BookOpen : BookOpen;
  const connectedSlugs = slug ? (CONNECTED_PILLARS[slug] || []) : [];
  const connectedPillars = connectedSlugs.map(s => getPillarBySlug(s)).filter(Boolean);

  const { data: essay, isLoading: essayLoading } = usePillarEssay(slug);
  const { data: verifiedDocs = [], isLoading: docsLoading } = useVerifiedDocuments();
  const loading = essayLoading || docsLoading;

  const topDocs = useMemo(() => {
    if (!pillar) return [];
    const matching = verifiedDocs.filter(doc => {
      const docPillar = normalizePillarName(doc.metadata?.pillar || '');
      return docPillar === pillar.canonicalName;
    });
    const featured = matching.filter(doc => doc.metadata?.featured === true);
    const nonFeatured = matching.filter(doc => doc.metadata?.featured !== true);
    return [...featured, ...nonFeatured].slice(0, 5);
  }, [verifiedDocs, pillar]);

  if (!pillar) {
    return (
      <div className="min-h-screen bg-black text-green-500">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="text-red-400 font-mono text-lg">PILLAR NOT FOUND</div>
          <Button
            onClick={() => navigate('/about')}
            className="mt-4 bg-green-500/20 text-green-400 hover:bg-green-500/30"
          >
            Return to About
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const pageUrl = `https://redpillbiblio.wtf/pillars/${slug}`;
  const pageDescription = essay?.subtitle || pillar.description;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay?.title || pillar.name,
    description: pageDescription,
    url: pageUrl,
    dateModified: essay?.last_updated || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Red Pill Bibliography Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Red Pill Bibliography',
    },
    articleSection: pillar.name,
  };

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title={essay?.title || pillar.name}
        description={pageDescription}
        url={pageUrl}
        type="article"
        structuredData={structuredData}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Navigation />

      <div className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-5xl relative z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/about')}
          className="mb-6 text-green-400 hover:text-green-300 hover:bg-green-500/10 font-mono"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to About
        </Button>

        <div className="mb-10 bg-black border-2 border-green-500/50 rounded-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0" />

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-green-500/10 border-2 border-green-500/50 rounded-lg flex items-center justify-center flex-shrink-0">
              <PillarIcon className="w-7 h-7 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="text-green-500/50 font-mono text-xs mb-1 tracking-wider">
                PILLAR OVERVIEW
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-300 leading-tight">
                {essay?.title || pillar.name}
              </h1>
              {(essay?.subtitle || pillar.description) && (
                <p className="text-green-400/70 text-sm mt-2 leading-relaxed max-w-2xl">
                  {essay?.subtitle || pillar.description}
                </p>
              )}
            </div>
          </div>

          {essay?.word_count ? (
            <div className="flex items-center gap-4 text-[10px] font-mono text-green-500/50">
              <span>{essay.word_count.toLocaleString()} words</span>
              <span>Last updated: {new Date(essay.last_updated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          ) : null}
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-green-500/50 font-mono text-sm">Loading pillar data...</p>
          </div>
        ) : (
          <>
            {essay?.body_markdown && (
              <div className="mb-10 bg-green-500/5 border border-green-500/30 rounded-lg p-6 md:p-8">
                {renderMarkdown(essay.body_markdown)}
              </div>
            )}

            {topDocs.length > 0 && (
              <div className="mb-10 bg-black border border-green-500/30 rounded-lg p-6">
                <h2 className="text-green-400 font-mono text-sm font-bold mb-5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-500" />
                  KEY VERIFIED EVIDENCE IN THIS PILLAR
                </h2>

                <div className="space-y-3">
                  {topDocs.map(doc => (
                    <Link
                      key={doc.id}
                      to={`/evidence/${doc.slug}`}
                      className="block bg-green-500/5 border border-green-500/20 rounded-lg p-4 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono text-[10px]">
                              VERIFIED
                            </Badge>
                            <Badge className="bg-green-500/10 text-green-500/60 border-green-500/20 font-mono text-[10px]">
                              {doc.document_type}
                            </Badge>
                          </div>
                          <h3 className="text-green-300 font-bold text-sm leading-tight mb-1 group-hover:text-green-200 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-green-500/50 text-xs font-mono line-clamp-2">
                            {doc.description?.substring(0, 120)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {doc.date_published && (
                            <span className="text-green-500/40 text-[10px] font-mono flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatUTCDateShort(doc.date_published)}
                            </span>
                          )}
                          <ArrowRight className="w-4 h-4 text-green-500/30 group-hover:text-green-400 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/evidence-list')}
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono text-xs"
                  >
                    View All Evidence
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {connectedPillars.length > 0 && (
              <div className="mb-10 bg-black border border-green-500/30 rounded-lg p-6">
                <h2 className="text-green-400 font-mono text-sm font-bold mb-5">
                  CONNECTED PILLARS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {connectedPillars.map(cp => {
                    if (!cp) return null;
                    const ConnIcon = ICON_MAP[cp.icon] || BookOpen;
                    return (
                      <Link
                        key={cp.slug}
                        to={`/pillars/${cp.slug}`}
                        className="bg-green-500/5 border border-green-500/20 rounded-lg p-4 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <ConnIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-green-300 font-mono text-xs font-bold mb-1 group-hover:text-green-200 transition-colors">
                              {cp.name}
                            </div>
                            <div className="text-green-500/50 text-[10px]">
                              {cp.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
