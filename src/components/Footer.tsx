import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      {/* Desktop footer */}
      <footer className="hidden md:block relative z-40 w-full py-1.5 bg-[#0a0a0a] border-t border-[#1a1a1a] lg:fixed lg:bottom-0 lg:left-0 lg:right-0">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] font-mono text-[#4a4a4a] whitespace-nowrap">
          © 2026 The Red Pill Bibliography <span className="text-[#2a2a2a]">|</span> For Educational &amp; Research Purposes <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/legal" className="hover:text-[#6a6a6a] transition-colors">Legal Disclaimer</Link> <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/privacy" className="hover:text-[#6a6a6a] transition-colors">Privacy</Link> <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/terms" className="hover:text-[#6a6a6a] transition-colors">Terms</Link> <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/dmca" className="hover:text-[#6a6a6a] transition-colors">DMCA</Link> <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/submit" className="hover:text-[#6a6a6a] transition-colors">Submit Evidence</Link> <span className="text-[#2a2a2a]">|</span>{' '}
          <Link to="/transparency" className="hover:text-[#6a6a6a] transition-colors">Transparency</Link>
        </div>
      </footer>

      {/* Mobile footer */}
      <footer className="md:hidden relative z-40 w-full py-1 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="text-center">
          <Link to="/legal" className="text-[9px] font-mono text-[#4a4a4a] hover:text-[#6a6a6a] transition-colors">
            Disclaimers &amp; Privacy
          </Link>
        </div>
      </footer>
    </>
  );
}
