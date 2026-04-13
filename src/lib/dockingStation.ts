export const DOCKING_STORAGE_KEY = 'docking-monitors';
export const DOCKING_MAX = 6;

export interface DockingMonitor {
  id: number;
  url: string;
  title: string;
}

export function getMonitors(): DockingMonitor[] {
  try {
    return JSON.parse(localStorage.getItem(DOCKING_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveMonitors(monitors: DockingMonitor[]): void {
  localStorage.setItem(DOCKING_STORAGE_KEY, JSON.stringify(monitors));
}

export function addMonitor(url: string, title: string): 'added' | 'full' | 'duplicate' {
  const monitors = getMonitors();
  if (monitors.some(m => m.url === url)) return 'duplicate';
  if (monitors.length >= DOCKING_MAX) return 'full';
  monitors.push({ id: Date.now(), url, title });
  saveMonitors(monitors);
  return 'added';
}

export function removeMonitor(id: number): void {
  saveMonitors(getMonitors().filter(m => m.id !== id));
}

export function clearMonitors(): void {
  localStorage.removeItem(DOCKING_STORAGE_KEY);
}
