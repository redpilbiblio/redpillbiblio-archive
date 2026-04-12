import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, Rocket, Eye, HeartPulse, Shield, Zap, Tv, Target, Vote, Trees,
  X as CloseIcon, ChevronRight
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { pillars, connections, Connection, Pillar } from '../data/connectionMapData';

const iconMap: Record<string, any> = {
  DollarSign, Rocket, Eye, HeartPulse, Shield, Zap, Tv, Target, Vote, Trees
};

interface CirclePosition {
  x: number;
  y: number;
  radius: number;
}

const pillarPositions: Record<number, CirclePosition> = {
  1: { x: 400, y: 280, radius: 110 },
  2: { x: 240, y: 480, radius: 100 },
  3: { x: 560, y: 280, radius: 110 },
  4: { x: 290, y: 430, radius: 95 },
  5: { x: 510, y: 430, radius: 95 },
  6: { x: 340, y: 530, radius: 100 },
  7: { x: 290, y: 340, radius: 95 },
  8: { x: 460, y: 380, radius: 105 },
  9: { x: 460, y: 230, radius: 95 },
  10: { x: 400, y: 520, radius: 100 }
};

const pillarColors: Record<number, string> = {
  1: '#00ff41',
  2: '#8b5cf6',
  3: '#06b6d4',
  4: '#f59e0b',
  5: '#14b8a6',
  6: '#eab308',
  7: '#ec4899',
  8: '#ef4444',
  9: '#3b82f6',
  10: '#5A6F4C'
};

const getIntersectionPoint = (conn: Connection): { x: number; y: number } => {
  if (conn.pillars.length === 9 || conn.pillars.length >= 4) {
    return { x: 400, y: 380 };
  }

  const positions = conn.pillars.map(id => pillarPositions[id]);
  const avgX = positions.reduce((sum, p) => sum + p.x, 0) / positions.length;
  const avgY = positions.reduce((sum, p) => sum + p.y, 0) / positions.length;

  return { x: avgX, y: avgY };
};

const connectionIntersections: Record<string, { x: number; y: number; label: string }> = {};

connections.forEach(conn => {
  const pos = getIntersectionPoint(conn);
  connectionIntersections[conn.id] = {
    ...pos,
    label: conn.pillars.length >= 4 ? '🎯' : '+'
  };
});

export default function ConnectionMap() {
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedPillars, setExpandedPillars] = useState<Set<number>>(new Set());

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePillarExpansion = (pillarId: number) => {
    const newExpanded = new Set(expandedPillars);
    if (newExpanded.has(pillarId)) {
      newExpanded.delete(pillarId);
    } else {
      newExpanded.add(pillarId);
    }
    setExpandedPillars(newExpanded);
  };

  const getPillarConnections = (pillarId: number) => {
    return connections.filter(c => c.pillars.includes(pillarId));
  };

  const renderDesktopVennDiagram = () => (
    <div className="relative w-full" style={{ height: '700px' }}>
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 700">
        <defs>
          {pillars.map(pillar => (
            <filter key={`glow-${pillar.id}`} id={`glow-${pillar.id}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          ))}
        </defs>

        {pillars.map(pillar => {
          const pos = pillarPositions[pillar.id];
          const pillarColor = pillarColors[pillar.id];

          return (
            <circle
              key={`circle-${pillar.id}`}
              cx={pos.x}
              cy={pos.y}
              r={pos.radius}
              fill={pillarColor}
              fillOpacity="0.15"
              stroke={pillarColor}
              strokeWidth="1.5"
              strokeOpacity="0.6"
              className="transition-all duration-300 cursor-pointer"
              style={{
                filter: `url(#glow-${pillar.id})`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.setAttribute('fill-opacity', '0.25');
                e.currentTarget.setAttribute('stroke-opacity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.setAttribute('fill-opacity', '0.15');
                e.currentTarget.setAttribute('stroke-opacity', '0.6');
              }}
            />
          );
        })}

        {connections.map(conn => {
          const pos = connectionIntersections[conn.id];
          const isHovered = hoveredConnection === conn.id;

          return (
            <g key={`intersection-${conn.id}`}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 18 : 15}
                fill="rgba(0, 0, 0, 0.8)"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth={isHovered ? "2" : "1"}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredConnection(conn.id)}
                onMouseLeave={() => setHoveredConnection(null)}
                onClick={() => setSelectedConnection(conn)}
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="13"
                className="pointer-events-none select-none"
              >
                {pos.label}
              </text>
            </g>
          );
        })}

        {pillars.map(pillar => {
          const pos = pillarPositions[pillar.id];

          return (
            <g key={`label-${pillar.id}`}>
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
                className="pointer-events-none select-none"
              >
                {pillar.shortName}
              </text>
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredConnection && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute pointer-events-none"
            style={{
              left: connectionIntersections[hoveredConnection].x,
              top: connectionIntersections[hoveredConnection].y + 30,
              transform: 'translateX(-50%)',
              zIndex: 50
            }}
          >
            <div className="bg-[#0a0a0a] border border-white/20 rounded-lg px-4 py-2 shadow-xl backdrop-blur max-w-xs">
              <p className="text-white text-sm font-medium text-center">
                {connections.find(c => c.id === hoveredConnection)?.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderMobileAccordion = () => (
    <div className="space-y-4 p-4">
      {pillars.map(pillar => {
        const pillarConnections = getPillarConnections(pillar.id);
        const isExpanded = expandedPillars.has(pillar.id);
        const Icon = iconMap[pillar.icon];
        const color = pillarColors[pillar.id];

        return (
          <div
            key={pillar.id}
            className="border rounded-lg overflow-hidden bg-[#0f0f0f]"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <button
              onClick={() => togglePillarExpansion(pillar.id)}
              className="w-full p-4 flex items-center gap-3 hover:bg-[#1a1a1a] transition-colors"
            >
              <div
                className="rounded-full p-3 border-2"
                style={{
                  backgroundColor: `${color}40`,
                  borderColor: color,
                }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-white">{pillar.name}</div>
                <div className="text-sm text-[#a0a0a0]">{pillarConnections.length} connections</div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-5 h-5 text-[#a0a0a0]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-3 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    {pillarConnections.map(conn => {
                      const connectedPillars = conn.pillars
                        .filter(id => id !== pillar.id)
                        .map(id => pillars.find(p => p.id === id))
                        .filter(Boolean) as Pillar[];

                      return (
                        <button
                          key={conn.id}
                          onClick={() => setSelectedConnection(conn)}
                          className="w-full text-left p-3 rounded-lg bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors border"
                          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                        >
                          <div
                            className="h-1 rounded-full mb-2"
                            style={{
                              background: `linear-gradient(90deg, ${conn.pillars.map(p => pillarColors[p]).join(', ')})`
                            }}
                          />
                          <div className="font-medium text-white text-sm mb-1">{conn.title}</div>
                          <div className="text-xs text-[#a0a0a0] mb-2">{conn.summary}</div>
                          <div className="flex gap-2 flex-wrap">
                            {connectedPillars.map(p => (
                              <span
                                key={p.id}
                                className="text-xs px-2 py-1 rounded"
                                style={{
                                  backgroundColor: `${pillarColors[p.id]}20`,
                                  color: pillarColors[p.id],
                                  border: `1px solid ${pillarColors[p.id]}`,
                                }}
                              >
                                {p.shortName}
                              </span>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  const renderConnectionModal = () => {
    if (!selectedConnection) return null;

    const connectedPillars = selectedConnection.pillars
      .map(id => pillars.find(p => p.id === id))
      .filter(Boolean) as Pillar[];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedConnection(null)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative bg-[#0a0a0a]/95 border rounded-xl p-6 max-w-2xl w-full backdrop-blur-lg"
          style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedConnection(null)}
            className="absolute top-4 right-4 text-[#a0a0a0] hover:text-white transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            {connectedPillars.slice(0, 2).map((pillar, idx) => {
              const Icon = iconMap[pillar.icon];
              return (
                <div key={pillar.id} className="flex items-center gap-2">
                  <div
                    className="rounded-full p-2 border"
                    style={{
                      backgroundColor: `${pillarColors[pillar.id]}40`,
                      borderColor: pillarColors[pillar.id],
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillarColors[pillar.id] }} />
                  </div>
                  {idx === 0 && connectedPillars.length > 1 && (
                    <span className="text-[#a0a0a0] text-xl">←→</span>
                  )}
                </div>
              );
            })}
            {connectedPillars.length > 2 && (
              <span className="text-[#a0a0a0] text-sm">+{connectedPillars.length - 2} more</span>
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            {selectedConnection.title}
          </h2>

          <p className="text-[#d1d5db] leading-relaxed mb-4">
            {selectedConnection.summary}
          </p>

          <div className="bg-[#0f0f0f] rounded-lg p-4 mb-4 border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              {selectedConnection.fullText}
            </p>
          </div>

          {selectedConnection.citations && selectedConnection.citations.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#a0a0a0] mb-2">CITATIONS</h3>
              <div className="space-y-1">
                {selectedConnection.citations.map((citation, idx) => (
                  <p key={idx} className="text-xs text-[#808080] leading-relaxed">
                    {citation}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 flex-wrap mb-4">
            {selectedConnection.tags?.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-white/5 text-[#a0a0a0] border"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="Connection Map"
        description="Interactive visualization of how the ten research pillars interconnect through documented evidence, revealing systemic patterns across institutions."
        url="https://redpillbiblio.wtf/connections"
      />
      <Navigation />

      <main id="main-content" className="max-w-7xl mx-auto px-4 pt-24 pb-24">
        <div className="mb-8 text-center border-b border-[#00ff41]/30 pb-4">
          <h1 className="text-[1.75rem] font-bold mb-3 text-[#00ff41] font-mono">
            &gt; CONNECTION_MAP.net
          </h1>
          <p className="text-[#9ca3af] text-base max-w-2xl mx-auto">
            Explore how the ten pillars interconnect. Click any intersection to read the analysis.
          </p>
        </div>

        <div className="relative">
          {isMobile ? renderMobileAccordion() : renderDesktopVennDiagram()}
        </div>

        <AnimatePresence>
          {renderConnectionModal()}
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  );
}
