import { useState, useCallback, useRef, useEffect } from 'react';
import { getSessionId } from '../lib/session';

export interface NotePosition {
  x: number;
  y: number;
}

export interface BoardConnection {
  id: string;
  fromId: string;
  toId: string;
  color: string;
}

export type ConnectionColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'gray';

export const CONNECTION_COLORS: { value: ConnectionColor; hex: string }[] = [
  { value: 'red',    hex: '#ef4444' },
  { value: 'blue',   hex: '#3b82f6' },
  { value: 'green',  hex: '#22c55e' },
  { value: 'yellow', hex: '#eab308' },
  { value: 'orange', hex: '#f97316' },
  { value: 'gray',   hex: '#94a3b8' },
];

export function getConnectionHex(color: string): string {
  return CONNECTION_COLORS.find(c => c.value === color)?.hex ?? '#ef4444';
}

const NOTE_W = 220;
const NOTE_H = 140;
const GRID_COL_GAP = 48;
const GRID_ROW_GAP = 48;
const BOARD_PADDING = 40;

function defaultPosition(index: number): NotePosition {
  const cols = 4;
  const col = index % cols;
  const row = Math.floor(index / cols);
  return {
    x: BOARD_PADDING + col * (NOTE_W + GRID_COL_GAP),
    y: BOARD_PADDING + row * (NOTE_H + GRID_ROW_GAP),
  };
}

function loadLayout(sessionId: string): Record<string, NotePosition> {
  try {
    const raw = localStorage.getItem(`researchBoardLayout:${sessionId}`);
    if (raw) return JSON.parse(raw) as Record<string, NotePosition>;
  } catch { /* ignore */ }
  return {};
}

function saveLayout(sessionId: string, positions: Record<string, NotePosition>) {
  try {
    localStorage.setItem(`researchBoardLayout:${sessionId}`, JSON.stringify(positions));
  } catch { /* ignore */ }
}

function loadConnections(sessionId: string): BoardConnection[] {
  try {
    const raw = localStorage.getItem(`researchBoardConnections:${sessionId}`);
    if (raw) return JSON.parse(raw) as BoardConnection[];
  } catch { /* ignore */ }
  return [];
}

function saveConnections(sessionId: string, connections: BoardConnection[]) {
  try {
    localStorage.setItem(`researchBoardConnections:${sessionId}`, JSON.stringify(connections));
  } catch { /* ignore */ }
}

export interface BoardStateHandle {
  positions: Record<string, NotePosition>;
  getPosition: (pinId: string, index: number) => NotePosition;
  setPosition: (pinId: string, pos: NotePosition) => void;

  connections: BoardConnection[];
  addConnection: (fromId: string, toId: string, color: string) => void;
  updateConnectionColor: (connId: string, color: string) => void;
  removeConnection: (connId: string) => void;
  hasConnection: (fromId: string, toId: string) => boolean;
  clearConnections: () => void;
  clearLayout: () => void;

  currentColor: ConnectionColor;
  setCurrentColor: (c: ConnectionColor) => void;

  connectingFrom: string | null;
  setConnectingFrom: (id: string | null) => void;

  selectedConnectionId: string | null;
  setSelectedConnectionId: (id: string | null) => void;

  draggingId: string | null;
  dragStart: (pinId: string, startX: number, startY: number, noteX: number, noteY: number) => void;
  dragMove: (clientX: number, clientY: number) => void;
  dragEnd: () => void;

  rubberBand: { x1: number; y1: number; x2: number; y2: number } | null;
  rubberBandStart: (fromId: string, clientX: number, clientY: number, boardRef: React.RefObject<HTMLDivElement | null>) => void;
  rubberBandMove: (clientX: number, clientY: number, boardRef: React.RefObject<HTMLDivElement | null>) => void;
  rubberBandEnd: (toId: string | null) => void;
}

export function useBoardState(): BoardStateHandle {
  const sessionId = getSessionId();

  const [positions, setPositions] = useState<Record<string, NotePosition>>(() => loadLayout(sessionId));
  const [connections, setConnections] = useState<BoardConnection[]>(() => loadConnections(sessionId));
  const [currentColor, setCurrentColor] = useState<ConnectionColor>('red');
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [selectedConnectionId, setSelectedConnectionId] = useState<string | null>(null);

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [rubberBand, setRubberBand] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);

  const dragOffsetRef = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 });
  const rubberFromRef = useRef<string | null>(null);

  const getPosition = useCallback((pinId: string, index: number): NotePosition => {
    return positions[pinId] ?? defaultPosition(index);
  }, [positions]);

  const setPosition = useCallback((pinId: string, pos: NotePosition) => {
    setPositions(prev => {
      const next = { ...prev, [pinId]: pos };
      saveLayout(sessionId, next);
      return next;
    });
  }, [sessionId]);

  const addConnection = useCallback((fromId: string, toId: string, color: string) => {
    if (fromId === toId) return;
    setConnections(prev => {
      if (prev.some(c => (c.fromId === fromId && c.toId === toId) || (c.fromId === toId && c.toId === fromId))) {
        return prev;
      }
      const next = [
        ...prev,
        { id: `conn-${Date.now()}-${Math.random().toString(36).slice(2)}`, fromId, toId, color },
      ];
      saveConnections(sessionId, next);
      return next;
    });
  }, [sessionId]);

  const updateConnectionColor = useCallback((connId: string, color: string) => {
    setConnections(prev => {
      const next = prev.map(c => c.id === connId ? { ...c, color } : c);
      saveConnections(sessionId, next);
      return next;
    });
  }, [sessionId]);

  const removeConnection = useCallback((connId: string) => {
    setConnections(prev => {
      const next = prev.filter(c => c.id !== connId);
      saveConnections(sessionId, next);
      return next;
    });
    setSelectedConnectionId(null);
  }, [sessionId]);

  const hasConnection = useCallback((fromId: string, toId: string): boolean => {
    return connections.some(
      c => (c.fromId === fromId && c.toId === toId) || (c.fromId === toId && c.toId === fromId)
    );
  }, [connections]);

  const dragStart = useCallback((pinId: string, boardX: number, boardY: number, noteX: number, noteY: number) => {
    dragOffsetRef.current = { dx: boardX - noteX, dy: boardY - noteY };
    setDraggingId(pinId);
  }, []);

  const dragMove = useCallback((boardX: number, boardY: number) => {
    if (!draggingId) return;
    const newX = Math.max(0, boardX - dragOffsetRef.current.dx);
    const newY = Math.max(0, boardY - dragOffsetRef.current.dy);
    setPositions(prev => ({ ...prev, [draggingId]: { x: newX, y: newY } }));
  }, [draggingId]);

  const dragEnd = useCallback(() => {
    if (draggingId) {
      setPositions(prev => {
        saveLayout(sessionId, prev);
        return prev;
      });
      setDraggingId(null);
    }
  }, [draggingId, sessionId]);

  const rubberBandStart = useCallback((
    fromId: string,
    clientX: number,
    clientY: number,
    boardRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    rubberFromRef.current = fromId;
    setConnectingFrom(fromId);
    setRubberBand({ x1: x, y1: y, x2: x, y2: y });
  }, []);

  const rubberBandMove = useCallback((
    clientX: number,
    clientY: number,
    boardRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect || !rubberFromRef.current) return;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setRubberBand(prev => prev ? { ...prev, x2: x, y2: y } : null);
  }, []);

  const rubberBandEnd = useCallback((toId: string | null) => {
    const fromId = rubberFromRef.current;
    if (fromId && toId && fromId !== toId) {
      addConnection(fromId, toId, currentColor);
    }
    rubberFromRef.current = null;
    setConnectingFrom(null);
    setRubberBand(null);
  }, [addConnection, currentColor]);

  const clearConnections = useCallback(() => {
    setConnections([]);
    setSelectedConnectionId(null);
    try {
      localStorage.removeItem(`researchBoardConnections:${sessionId}`);
    } catch { /* ignore */ }
  }, [sessionId]);

  const clearLayout = useCallback(() => {
    setPositions({});
    try {
      localStorage.removeItem(`researchBoardLayout:${sessionId}`);
    } catch { /* ignore */ }
  }, [sessionId]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setConnectingFrom(null);
        setRubberBand(null);
        rubberFromRef.current = null;
        setSelectedConnectionId(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    positions,
    getPosition,
    setPosition,
    connections,
    addConnection,
    updateConnectionColor,
    removeConnection,
    hasConnection,
    clearConnections,
    clearLayout,
    currentColor,
    setCurrentColor,
    connectingFrom,
    setConnectingFrom,
    selectedConnectionId,
    setSelectedConnectionId,
    draggingId,
    dragStart,
    dragMove,
    dragEnd,
    rubberBand,
    rubberBandStart,
    rubberBandMove,
    rubberBandEnd,
  };
}
