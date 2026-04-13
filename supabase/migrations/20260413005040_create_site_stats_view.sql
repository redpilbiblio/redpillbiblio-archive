/*
  # Create site_stats View

  ## Purpose
  Provides a single, always-current row of aggregate statistics for the
  entire site. Every page that shows counts or a "last updated" timestamp
  reads from this view, so stats update automatically whenever any underlying
  table changes.

  ## Columns
  - total_documents (bigint) — COUNT(*) from documents
  - total_events    (bigint) — COUNT(*) from events
  - total_watchlist (bigint) — COUNT(*) from enemies_of_truth
  - last_updated    (timestamptz) — GREATEST of MAX(updated_at) across
                                    documents, events, and enemies_of_truth

  ## Notes
  - Convictions, trades, deaths, and families are sourced from JSON files
    (not yet in the database), so they are excluded from this view for now.
    They can be added once those tables are migrated to the DB.
  - The view is NOT materialized — every SELECT reflects the live table state
    with zero extra maintenance required.
  - RLS is not applicable to views directly; access is controlled via the
    underlying table policies. Public SELECT is intentionally granted here
    because statistics are non-sensitive aggregates.
*/

CREATE OR REPLACE VIEW public.site_stats AS
SELECT
  (SELECT COUNT(*)::bigint FROM public.documents)                         AS total_documents,
  (SELECT COUNT(*)::bigint FROM public.events)                            AS total_events,
  (SELECT COUNT(*)::bigint FROM public.enemies_of_truth)                  AS total_watchlist,
  GREATEST(
    (SELECT MAX(updated_at) FROM public.documents),
    (SELECT MAX(updated_at) FROM public.events),
    (SELECT MAX(last_updated) FROM public.enemies_of_truth)
  )                                                                        AS last_updated;

GRANT SELECT ON public.site_stats TO anon, authenticated;