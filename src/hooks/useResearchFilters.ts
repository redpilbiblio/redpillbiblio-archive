import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ResearchFilters, ResearchItemType } from '../lib/researchItems';

function splitParam(value: string | null): string[] {
  if (!value) return [];
  return value.split(',').filter(s => s.length > 0);
}

const FILTER_PARAMS = ['q', 'pillar', 'cat', 'type', 'tier', 'from', 'to', 'tags', 'sort'];

export function useResearchFilters(): {
  filters: ResearchFilters;
  setQuery: (q: string | undefined) => void;
  setPillars: (pillars: string[] | undefined) => void;
  setTypes: (types: ResearchItemType[] | undefined) => void;
  setVerificationTiers: (tiers: ResearchFilters['verificationTiers']) => void;
  setDateRange: (from: string | null, to: string | null) => void;
  setTags: (tags: string[] | undefined) => void;
  setSort: (sort: 'newest' | 'oldest' | undefined) => void;
  clearAll: () => void;
} {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo<ResearchFilters>(() => {
    const pillars = splitParam(searchParams.get('pillar'));
    const types = splitParam(searchParams.get('type')) as ResearchItemType[];
    const verificationTiers = splitParam(searchParams.get('tier')) as ResearchFilters['verificationTiers'];
    const tags = splitParam(searchParams.get('tags'));
    const query = searchParams.get('q') ?? undefined;
    const dateFrom = searchParams.get('from') ?? null;
    const dateTo = searchParams.get('to') ?? null;
    const sortRaw = searchParams.get('sort');
    const sort: ResearchFilters['sort'] =
      sortRaw === 'newest' || sortRaw === 'oldest' ? sortRaw : undefined;

    return {
      ...(query ? { query } : {}),
      ...(pillars.length ? { pillars } : {}),
      ...(types.length ? { types } : {}),
      ...(verificationTiers && verificationTiers.length ? { verificationTiers } : {}),
      ...(dateFrom ? { dateFrom } : {}),
      ...(dateTo ? { dateTo } : {}),
      ...(tags.length ? { tags } : {}),
      ...(sort ? { sort } : {}),
    };
  }, [searchParams]);

  const updateParam = useCallback((key: string, value: string | undefined) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (value === undefined || value === '') {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  const setQuery = useCallback((q: string | undefined) => {
    updateParam('q', q);
  }, [updateParam]);

  const setPillars = useCallback((pillars: string[] | undefined) => {
    updateParam('pillar', pillars && pillars.length ? pillars.join(',') : undefined);
  }, [updateParam]);

  const setTypes = useCallback((types: ResearchItemType[] | undefined) => {
    updateParam('type', types && types.length ? types.join(',') : undefined);
  }, [updateParam]);

  const setVerificationTiers = useCallback((tiers: ResearchFilters['verificationTiers']) => {
    updateParam('tier', tiers && tiers.length ? tiers.join(',') : undefined);
  }, [updateParam]);

  const setDateRange = useCallback((from: string | null, to: string | null) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (from) {
        next.set('from', from);
      } else {
        next.delete('from');
      }
      if (to) {
        next.set('to', to);
      } else {
        next.delete('to');
      }
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  const setTags = useCallback((tags: string[] | undefined) => {
    updateParam('tags', tags && tags.length ? tags.join(',') : undefined);
  }, [updateParam]);

  const setSort = useCallback((sort: 'newest' | 'oldest' | undefined) => {
    updateParam('sort', sort);
  }, [updateParam]);

  const clearAll = useCallback(() => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      FILTER_PARAMS.forEach(key => next.delete(key));
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  return {
    filters,
    setQuery,
    setPillars,
    setTypes,
    setVerificationTiers,
    setDateRange,
    setTags,
    setSort,
    clearAll,
  };
}
