import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

interface FeaturedItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 'mkultra',
    slug: 'mk-ultra-cia-mind-control-experiments',
    title: 'MK-Ultra: CIA Mind Control Program',
    category: 'Government Science',
    description: 'Declassified CIA program conducting illegal mind control experiments on American citizens',
  },
  {
    id: 'pentagon-papers',
    slug: 'the-pentagon-papers-government-lies-about-vietnam-exposed',
    title: 'Pentagon Papers: Vietnam War Deception',
    category: 'Military Spending',
    description: 'Leaked Defense Department study revealing government lies about Vietnam War',
  },
  {
    id: 'citizens-united',
    slug: 'citizens-united-v-fec-unlimited-corporate-money-in-elections',
    title: 'Citizens United: Corporate Political Spending',
    category: 'Elections',
    description: 'Supreme Court decision allowing unlimited corporate spending in political campaigns',
  },
  {
    id: 'mockingbird',
    slug: 'operation-mockingbird-cia-media-infiltration',
    title: 'Operation Mockingbird: CIA Media Infiltration',
    category: 'Media & Propaganda',
    description: 'CIA operation to influence domestic and foreign media organizations',
  },
  {
    id: 'invention-secrecy',
    slug: 'the-invention-secrecy-act-6000-patents-currently-suppressed',
    title: 'The Invention Secrecy Act: 6,000+ Suppressed Patents',
    category: 'Energy & Technology',
    description: 'Federal law allowing government to classify and suppress patent applications for national security',
  },
];

export function FeaturedInvestigations() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 288 + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, featuredItems.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isExpanded) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isExpanded, handleScroll]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 288 + 16;
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="mb-6 bg-green-500/5 border border-green-500/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-green-500/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <h3 className="text-green-400 font-mono text-sm font-bold">
            FEATURED INVESTIGATIONS
          </h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-green-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-green-400" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 pt-0">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent"
          >
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                to={`/evidence/${item.slug}`}
                className="flex-shrink-0 w-72 bg-black border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 hover:bg-green-500/5 transition-all group block"
              >
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono text-xs mb-2">
                  {item.category}
                </Badge>
                <h4 className="text-green-400 font-mono text-sm font-bold mb-2 text-left">
                  {item.title}
                </h4>
                <p className="text-green-300/70 text-xs text-left mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-1 text-green-400 text-xs font-mono group-hover:gap-2 transition-all">
                  VIEW DOSSIER
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-3 pt-3 pb-1">
            {featuredItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to investigation ${i + 1}`}
                style={{ minWidth: '12px', minHeight: '12px' }}
                className={`rounded-full transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-green-400 w-5 h-3'
                    : 'bg-green-500/30 hover:bg-green-500/50 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
