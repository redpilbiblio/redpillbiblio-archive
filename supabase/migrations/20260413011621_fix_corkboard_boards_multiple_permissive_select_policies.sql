/*
  # Fix multiple permissive SELECT policies on corkboard_boards

  ## Problem
  `corkboard_boards` has two overlapping permissive SELECT policies for both
  `anon` and `authenticated` roles:
  - "Anon select own boards"
  - "Public boards are readable by anyone"

  Having multiple permissive policies for the same role/action causes Postgres to
  evaluate them with OR logic, which is confusing and can produce unexpected access.

  ## Fix
  Drop both existing SELECT policies and replace them with two clean, non-overlapping
  policies:
  1. `anon` and `authenticated` users can read boards they own (by session_id / user_id)
  2. Anyone can read boards marked is_public = true

  ## Security
  - Ownership check uses session_id for anon, auth.uid() for authenticated
  - Public access is limited strictly to is_public = true rows
*/

DROP POLICY IF EXISTS "Anon select own boards" ON public.corkboard_boards;
DROP POLICY IF EXISTS "Public boards are readable by anyone" ON public.corkboard_boards;

CREATE POLICY "Anon can read own session boards"
  ON public.corkboard_boards
  FOR SELECT
  TO anon
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR is_public = true);

CREATE POLICY "Authenticated can read own or public boards"
  ON public.corkboard_boards
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR is_public = true);
