import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileSearch, Crosshair, Clock, Activity, Shield,
  Menu, X, ChevronDown, Network, FileText, BookOpen,
  Trees, Scale, Info, Eye, Send, Upload, Share2, Lightbulb,
  Landmark, TrendingUp, Skull, PlaneTakeoff, DoorOpen, Radio
} from 'lucide-react';
import { GlobalSearch } from './GlobalSearch';

interface NavLink {
  to: string;
  label: string;
  icon?: React.ElementType;
}

interface NavGroup {
  id: string;
  label: string;
  icon: React.ElementType;
  links: NavLink[];
  routes: string[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    id: 'evidence',
    label: 'Evidence',
    icon: FileSearch,
    links: [
      { to: '/research', label: 'Research Board', icon: Network },
      { to: '/evidence-list', label: 'Evidence Archive', icon: FileText },
    ],
    routes: ['/research', '/evidence-list'],
  },
  {
    id: 'history',
    label: 'History',
    icon: Clock,
    links: [
      { to: '/timeline', label: 'Timeline', icon: Clock },
      { to: '/families', label: 'Family Trees', icon: Trees },
      { to: '/about', label: 'About', icon: Info },
    ],
    routes: ['/timeline', '/families', '/about'],
  },
  {
    id: 'trackers',
    label: 'Live Trackers',
    icon: Activity,
    links: [
      { to: '/convictions', label: 'Convictions', icon: Scale },
      { to: '/trackers#congress-trades', label: 'Congress Trades', icon: Landmark },
      { to: '/trackers#insider-trades', label: 'Insider Trades', icon: TrendingUp },
      { to: '/trackers#suspicious-deaths', label: 'Suspicious Deaths', icon: Skull },
      { to: '/trackers#accidents', label: 'Accidents & Crashes', icon: PlaneTakeoff },
      { to: '/trackers#revolving-door', label: 'Revolving Door', icon: DoorOpen },
      { to: '/trackers/transparency-hub', label: 'Transparency Hub', icon: Radio },
    ],
    routes: ['/convictions', '/trackers'],
  },
  {
    id: 'transparency',
    label: 'Transparency',
    icon: Shield,
    links: [
      { to: '/transparency', label: 'Transparency', icon: Eye },
      { to: '/methodology', label: 'Methodology', icon: BookOpen },
      { to: '/legal', label: 'Legal Disclaimer', icon: FileText },
      { to: '/submit', label: 'Submit a Tip', icon: Upload },
      { to: '/contact', label: 'Contact', icon: Send },
      { to: '/solutions', label: 'Solutions', icon: Lightbulb },
    ],
    routes: ['/transparency', '/methodology', '/legal', '/submit', '/contact', '/solutions'],
  },
];

const DIRECT_LINK: NavLink & { icon: React.ElementType } = {
  to: '/watchlist',
  label: 'The Watchlist',
  icon: Crosshair,
};

const CONNECTIONS_LINK: NavLink & { icon: React.ElementType } = {
  to: '/connections',
  label: 'Connections',
  icon: Share2,
};

interface NavDropdownProps {
  group: NavGroup;
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function NavDropdown({ group, isActive, isOpen, onOpen, onClose }: NavDropdownProps) {
  const Icon = group.icon;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  function scheduleClose() {
    closeTimer.current = setTimeout(onClose, 150);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); onOpen(); }}
      onMouseLeave={scheduleClose}
    >
      <button
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex items-center gap-1.5 px-[10px] py-1.5 rounded text-[13px] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] min-h-[44px] whitespace-nowrap ${
          isActive
            ? 'bg-[#00ff41]/10 text-[#00ff41]'
            : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{group.label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 z-[60]"
          style={{
            background: '#0a0a0a',
            border: '1px solid rgba(0, 255, 65, 0.2)',
            borderRadius: '0.5rem',
            padding: '0.5rem 0',
            minWidth: '210px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
          }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {group.links.map((link) => {
            const linkPath = link.to.split('#')[0];
            const isLinkActive = location.pathname === linkPath;
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.5rem 1rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: isLinkActive ? '#00ff41' : '#e8e8e8',
                  textDecoration: 'none',
                  background: isLinkActive ? 'rgba(0,255,65,0.08)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,65,0.1)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00ff41';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = isLinkActive ? 'rgba(0,255,65,0.08)' : 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = isLinkActive ? '#00ff41' : '#e8e8e8';
                }}
              >
                {LinkIcon && <LinkIcon size={13} aria-hidden="true" />}
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface MobileGroupProps {
  group: NavGroup;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function MobileGroup({ group, isExpanded, onToggle, onClose }: MobileGroupProps) {
  const Icon = group.icon;
  const location = useLocation();
  const isActive = group.routes.some(r => location.pathname.startsWith(r));

  return (
    <div>
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full px-4 rounded text-base font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] min-h-[52px] ${
          isActive
            ? 'bg-[#00ff41]/10 text-[#00ff41]'
            : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
        }`}
      >
        <span className="flex items-center gap-3">
          <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          {group.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {isExpanded && (
        <div className="ml-4 mt-0.5 mb-1" style={{ borderLeft: '2px solid rgba(0,255,65,0.3)' }}>
          {group.links.map((link) => {
            const linkPath = link.to.split('#')[0];
            const isLinkActive = location.pathname === linkPath;
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 rounded text-sm font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] min-h-[44px] ${
                  isLinkActive
                    ? 'text-[#00ff41] bg-[#00ff41]/5'
                    : 'text-gray-500 hover:text-[#00ff41] hover:bg-white/5'
                }`}
                aria-current={isLinkActive ? 'page' : undefined}
              >
                {LinkIcon && <LinkIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOpen = useCallback((id: string) => setOpenGroup(id), []);
  const handleClose = useCallback(() => setOpenGroup(null), []);

  const enemiesActive = location.pathname === '/enemies';
  const connectionsActive = location.pathname === '/connections';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-2">

            {/* Logo */}
            <Link
              to="/"
              className="font-mono text-sm sm:text-base font-bold text-[#00ff41] hover:text-[#00ff41]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] shrink-0 py-2 px-1 inline-flex items-center min-h-[44px] whitespace-nowrap"
              aria-label="Home - Knowledge Is Power"
            >
              #KnowledgeIsPower
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex items-center ml-2 mr-1">
              <GlobalSearch />
            </div>

            {/* Desktop Nav Groups */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-end">

              {/* Evidence dropdown */}
              <NavDropdown
                group={NAV_GROUPS[0]}
                isActive={NAV_GROUPS[0].routes.some(r => location.pathname.startsWith(r))}
                isOpen={openGroup === NAV_GROUPS[0].id}
                onOpen={() => handleOpen(NAV_GROUPS[0].id)}
                onClose={handleClose}
              />

              {/* Enemies of Truth — direct link */}
              <Link
                to={DIRECT_LINK.to}
                className={`flex items-center gap-1.5 px-[10px] py-1.5 rounded text-[13px] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] min-h-[44px] whitespace-nowrap ${
                  enemiesActive
                    ? 'bg-[#00ff41]/10 text-[#00ff41]'
                    : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
                }`}
                aria-current={enemiesActive ? 'page' : undefined}
              >
                <DIRECT_LINK.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{DIRECT_LINK.label}</span>
              </Link>

              {/* Connections — direct link */}
              <Link
                to={CONNECTIONS_LINK.to}
                className={`flex items-center gap-1.5 px-[10px] py-1.5 rounded text-[13px] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] min-h-[44px] whitespace-nowrap ${
                  connectionsActive
                    ? 'bg-[#00ff41]/10 text-[#00ff41]'
                    : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
                }`}
                aria-current={connectionsActive ? 'page' : undefined}
              >
                <CONNECTIONS_LINK.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{CONNECTIONS_LINK.label}</span>
              </Link>

              {/* History dropdown */}
              <NavDropdown
                group={NAV_GROUPS[1]}
                isActive={NAV_GROUPS[1].routes.some(r => location.pathname.startsWith(r))}
                isOpen={openGroup === NAV_GROUPS[1].id}
                onOpen={() => handleOpen(NAV_GROUPS[1].id)}
                onClose={handleClose}
              />

              {/* Live Trackers dropdown */}
              <NavDropdown
                group={NAV_GROUPS[2]}
                isActive={NAV_GROUPS[2].routes.some(r => location.pathname.startsWith(r))}
                isOpen={openGroup === NAV_GROUPS[2].id}
                onOpen={() => handleOpen(NAV_GROUPS[2].id)}
                onClose={handleClose}
              />

              {/* Transparency dropdown */}
              <NavDropdown
                group={NAV_GROUPS[3]}
                isActive={NAV_GROUPS[3].routes.some(r => location.pathname.startsWith(r))}
                isOpen={openGroup === NAV_GROUPS[3].id}
                onOpen={() => handleOpen(NAV_GROUPS[3].id)}
                onClose={handleClose}
              />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-[#00ff41] hover:bg-[#00ff41]/10 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff41] ml-auto"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[290px] z-[70] bg-[#0a0a0a] border-l border-[#00ff41]/30 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#00ff41]/20 shrink-0">
          <span className="text-[#00ff41] font-mono font-bold text-sm tracking-widest">#KnowledgeIsPower</span>
          <button
            className="flex items-center justify-center min-w-[44px] min-h-[44px] text-[#00ff41] hover:bg-[#00ff41]/10 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff41]"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-3 border-b border-[#00ff41]/10 shrink-0">
          <GlobalSearch compact onClose={() => setIsOpen(false)} />
        </div>

        <nav className="flex flex-col gap-0.5 px-3 py-3 overflow-y-auto flex-1">
          {/* Evidence group */}
          <MobileGroup
            group={NAV_GROUPS[0]}
            isExpanded={expandedMobileGroup === NAV_GROUPS[0].id}
            onToggle={() => setExpandedMobileGroup(v => v === NAV_GROUPS[0].id ? null : NAV_GROUPS[0].id)}
            onClose={() => setIsOpen(false)}
          />

          {/* Enemies of Truth — direct link */}
          <Link
            to={DIRECT_LINK.to}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 rounded text-base font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] min-h-[52px] ${
              enemiesActive
                ? 'bg-[#00ff41]/10 text-[#00ff41]'
                : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
            }`}
            aria-current={enemiesActive ? 'page' : undefined}
          >
            <DIRECT_LINK.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>{DIRECT_LINK.label}</span>
          </Link>

          {/* Connections — direct link */}
          <Link
            to={CONNECTIONS_LINK.to}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 rounded text-base font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#00ff41] min-h-[52px] ${
              connectionsActive
                ? 'bg-[#00ff41]/10 text-[#00ff41]'
                : 'text-gray-400 hover:text-[#00ff41] hover:bg-white/5'
            }`}
            aria-current={connectionsActive ? 'page' : undefined}
          >
            <CONNECTIONS_LINK.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>{CONNECTIONS_LINK.label}</span>
          </Link>

          {/* History group */}
          <MobileGroup
            group={NAV_GROUPS[1]}
            isExpanded={expandedMobileGroup === NAV_GROUPS[1].id}
            onToggle={() => setExpandedMobileGroup(v => v === NAV_GROUPS[1].id ? null : NAV_GROUPS[1].id)}
            onClose={() => setIsOpen(false)}
          />

          {/* Live Trackers group */}
          <MobileGroup
            group={NAV_GROUPS[2]}
            isExpanded={expandedMobileGroup === NAV_GROUPS[2].id}
            onToggle={() => setExpandedMobileGroup(v => v === NAV_GROUPS[2].id ? null : NAV_GROUPS[2].id)}
            onClose={() => setIsOpen(false)}
          />

          {/* Transparency group */}
          <MobileGroup
            group={NAV_GROUPS[3]}
            isExpanded={expandedMobileGroup === NAV_GROUPS[3].id}
            onToggle={() => setExpandedMobileGroup(v => v === NAV_GROUPS[3].id ? null : NAV_GROUPS[3].id)}
            onClose={() => setIsOpen(false)}
          />
        </nav>
      </div>
    </>
  );
}
