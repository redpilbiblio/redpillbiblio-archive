import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export type SiteStats = {
  total_documents: number;
  total_events: number;
  total_watchlist: number;
  last_updated: string | null;
};

type UseSiteStatsResult = {
  stats: SiteStats | null;
  isLoading: boolean;
  error: string | null;
};

const DEFAULT_STATS: SiteStats = {
  total_documents: 0,
  total_events: 0,
  total_watchlist: 0,
  last_updated: null,
};

export function useSiteStats(): UseSiteStatsResult {
  const [stats, setStats] = useState<SiteStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    supabase
      .from('site_stats')
      .select('*')
      .maybeSingle()
      .then(({ data, error: err }) => {
        if (cancelled) return;
        if (err) {
          setError(err.message);
          setStats(DEFAULT_STATS);
        } else {
          setStats((data as SiteStats) ?? DEFAULT_STATS);
        }
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, isLoading, error };
}

export function formatLastUpdated(ts: string | null): string {
  if (!ts) return '—';
  return new Date(ts).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }) + ' ET';
}
