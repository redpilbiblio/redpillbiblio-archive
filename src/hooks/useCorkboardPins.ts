import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getSessionId } from '../lib/session';
import type { ResearchItem } from '../lib/researchItems';

export type PinRow = {
  id: string;
  session_id: string;
  user_id: string | null;
  board_name: string;
  item_type: string;
  item_id: string;
  item_snapshot: Record<string, unknown>;
  sort_order: number;
  user_note: string | null;
  pinned_at: string;
};

export type CorkboardPinsHandle = {
  pins: PinRow[];
  loading: boolean;
  error: string | null;
  pinItem: (item: ResearchItem) => Promise<void>;
  unpinItem: (pinId: string) => Promise<void>;
  reorderPins: (orderedPinIds: string[]) => Promise<void>;
  isItemPinned: (itemType: string, itemId: string) => boolean;
};

export function useCorkboardPins(boardName: string = 'default'): CorkboardPinsHandle {
  const [pins, setPins] = useState<PinRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPins = useCallback(async () => {
    const { data, error: fetchError } = await supabase
      .from('corkboard_pins')
      .select('*')
      .eq('session_id', getSessionId())
      .eq('board_name', boardName)
      .order('sort_order', { ascending: true });

    if (fetchError) {
      console.error('[useCorkboardPins] fetchPins error:', fetchError);
      setError(fetchError.message);
    } else {
      setPins((data as PinRow[]) ?? []);
    }
    setLoading(false);
  }, [boardName]);

  useEffect(() => {
    fetchPins();
  }, [fetchPins]);

  const pinItem = useCallback(async (item: ResearchItem): Promise<void> => {
    if (!item.id || !item.title) {
      console.warn('[useCorkboardPins] pinItem: item missing id or title', item);
      return;
    }

    const sessionId = getSessionId();

    const snapshot: Record<string, unknown> = {
      title: item.title,
      itemType: item.itemType,
      date: item.date,
      pillarSlug: item.pillarSlug ?? null,
      dynastyName: item.dynastyName ?? null,
      severity: item.severity ?? null,
      verificationTier: item.verificationTier ?? null,
      snippet: item.snippet ?? null,
      tags: item.tags ?? null,
    };

    const optimisticPin: PinRow = {
      id: `optimistic-${item.itemType}-${item.id}`,
      session_id: sessionId,
      user_id: null,
      board_name: boardName,
      item_type: item.itemType,
      item_id: item.id,
      item_snapshot: snapshot,
      sort_order: pins.length,
      user_note: null,
      pinned_at: new Date().toISOString(),
    };

    setPins(prev => [...prev, optimisticPin]);

    const { data: inserted, error: insertError } = await supabase
      .from('corkboard_pins')
      .insert({
        session_id: sessionId,
        user_id: null,
        board_name: boardName,
        item_type: item.itemType,
        item_id: item.id,
        item_snapshot: snapshot,
        sort_order: pins.length,
      })
      .select()
      .maybeSingle();

    if (insertError) {
      if (insertError.code === '23505') {
        setPins(prev => prev.filter(p => p.id !== optimisticPin.id));
        return;
      }
      console.error('[useCorkboardPins] pinItem insert error:', insertError);
      setError(insertError.message);
      setPins(prev => prev.filter(p => p.id !== optimisticPin.id));
      return;
    }

    if (inserted) {
      setPins(prev =>
        prev.map(p => (p.id === optimisticPin.id ? (inserted as PinRow) : p))
      );
    } else {
      await fetchPins();
    }
  }, [boardName, pins.length, fetchPins]);

  const unpinItem = useCallback(async (pinId: string): Promise<void> => {
    setPins(prev => prev.filter(p => p.id !== pinId));

    const { error: deleteError } = await supabase
      .from('corkboard_pins')
      .delete()
      .eq('id', pinId)
      .eq('session_id', getSessionId());

    if (deleteError) {
      console.error('[useCorkboardPins] unpinItem error:', deleteError);
      setError(deleteError.message);
      await fetchPins();
    }
  }, [fetchPins]);

  const reorderPins = useCallback(async (orderedPinIds: string[]): Promise<void> => {
    const updates = orderedPinIds.map((id, index) =>
      supabase
        .from('corkboard_pins')
        .update({ sort_order: index })
        .eq('id', id)
    );

    const results = await Promise.all(updates);
    const failed = results.find(r => r.error);

    if (failed?.error) {
      console.error('[useCorkboardPins] reorderPins error:', failed.error);
      setError(failed.error.message);
      return;
    }

    await fetchPins();
  }, [fetchPins]);

  const isItemPinned = useCallback((itemType: string, itemId: string): boolean => {
    return pins.some(p => p.item_type === itemType && p.item_id === itemId);
  }, [pins]);

  return { pins, loading, error, pinItem, unpinItem, reorderPins, isItemPinned };
}
