import { useState, useEffect } from 'react';

const STORAGE_KEY = 'rpb_last_visit';

export function useLastVisit() {
  const [lastVisit, setLastVisit] = useState<Date | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prev = stored ? new Date(parseInt(stored, 10)) : null;
    setLastVisit(prev);

    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsInitialized(true);
  }, []);

  return { lastVisit, isInitialized };
}

export function getLastVisit(): Date | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? new Date(parseInt(stored, 10)) : null;
}
