/*
  # Fix SECURITY DEFINER on site_stats view

  ## Problem
  The `site_stats` view was created with SECURITY DEFINER, meaning it always
  executes with the privileges of its creator rather than the querying user.
  This is a security risk as it can bypass RLS policies.

  ## Fix
  Drop and recreate the view with SECURITY INVOKER (the default), so it runs
  with the privileges of the calling user and respects RLS.

  ## Notes
  The view only reads aggregate counts (no user-specific data), so switching
  to SECURITY INVOKER has no functional impact on the data returned.
*/

DROP VIEW IF EXISTS public.site_stats;

CREATE VIEW public.site_stats
  WITH (security_invoker = true)
AS
  SELECT
    ( SELECT count(*) FROM documents ) AS total_documents,
    ( SELECT count(*) FROM events ) AS total_events,
    ( SELECT count(*) FROM enemies_of_truth ) AS total_watchlist,
    GREATEST(
      ( SELECT max(updated_at) FROM documents ),
      ( SELECT max(updated_at) FROM events ),
      ( SELECT max(last_updated) FROM enemies_of_truth )
    ) AS last_updated;
