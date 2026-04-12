import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getSessionId } from '../lib/session';
import type { ResearchItem } from '../lib/researchItems';

type PinRow = {
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

export function useCorkboardPins(boardName: string = 'default') {
  const [pins, setPins] = useState<PinRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPins = useCallback(async () => {
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from('corkboard_pins')
      .select('*')
      .eq('session_id', getSessionId())
      .eq('board_name', boardName)
      .order('sort_order', { ascending: true });

    if (fetchError) {
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
    const snapshot: Record<string, unknown> = {
      title: item.title,
      itemType: item.itemType,
      date: item.date,
      pillarSlug: item.pillarSlug,
      dynastyName: item.dynastyName ?? null,
      severity: item.severity ?? null,
      verificationTier: item.verificationTier ?? null,
      snippet: item.snippet ?? null,
      tags: item.tags ?? null,
    };

    const { error: insertError } = await supabase
      .from('corkboard_pins')
      .insert({
        session_id: getSessionId(),
        user_id: null,
        board_name: boardName,
        item_type: item.itemType,
        item_id: item.id,
        item_snapshot: snapshot,
        sort_order: pins.length,
      });

    if (insertError) {
      if (insertError.code === '23505') {
        return;
      }
      setError(insertError.message);
      return;
    }

    await fetchPins();
  }, [boardName, pins.length, fetchPins]);

  const unpinItem = useCallback(async (pinId: string): Promise<void> => {
    const { error: deleteError } = await supabase
      .from('corkboard_pins')
      .delete()
      .eq('id', pinId)
      .eq('session_id', getSessionId());

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    await fetchPins();
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
