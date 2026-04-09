import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SkipLink } from '@/components/SkipLink';
import { BackToTop } from '@/components/BackToTop';

export function IslandWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <SkipLink />
        {children}
        <BackToTop />
      </HelmetProvider>
    </BrowserRouter>
  );
}
