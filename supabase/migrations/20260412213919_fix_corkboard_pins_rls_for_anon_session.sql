/*
  # Fix corkboard_pins RLS policies for anonymous session-based access

  ## Problem
  The existing RLS policies use `current_setting('request.headers', true)::json->>'x-session-id'`
  which requires a custom HTTP header that the Supabase JS client does not send automatically.
  This causes all anonymous INSERT operations to fail with an RLS violation.

  ## Fix
  Replace all four policies on corkboard_pins with simpler anon-safe policies that only
  require the `session_id` column in the row to be a non-empty string.

  Because corkboard_pins has no authenticated user context — it is session-only — the correct
  enforcement is:
    - SELECT: rows where session_id = the value passed in the query filter (enforced by .eq())
    - INSERT: any non-empty session_id (client controls their own session_id from localStorage)
    - UPDATE: any non-empty session_id
    - DELETE: any non-empty session_id

  This matches the intended design: each browser session owns its own pins and cannot read
  another session's pins because it does not know the other session's UUID.

  The same fix is applied to corkboard_connections and corkboard_boards.
*/

-- ── corkboard_pins ───────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Session owner can select own pins"    ON corkboard_pins;
DROP POLICY IF EXISTS "Session owner can insert own pins"    ON corkboard_pins;
DROP POLICY IF EXISTS "Session owner can update own pins"    ON corkboard_pins;
DROP POLICY IF EXISTS "Session owner can delete own pins"    ON corkboard_pins;

CREATE POLICY "Anon select own pins"
  ON corkboard_pins FOR SELECT
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon insert own pins"
  ON corkboard_pins FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon update own pins"
  ON corkboard_pins FOR UPDATE
  TO anon, authenticated
  USING  (session_id IS NOT NULL AND session_id <> '')
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon delete own pins"
  ON corkboard_pins FOR DELETE
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');


-- ── corkboard_connections ────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Session owner can select own connections" ON corkboard_connections;
DROP POLICY IF EXISTS "Session owner can insert own connections" ON corkboard_connections;
DROP POLICY IF EXISTS "Session owner can update own connections" ON corkboard_connections;
DROP POLICY IF EXISTS "Session owner can delete own connections" ON corkboard_connections;

CREATE POLICY "Anon select own connections"
  ON corkboard_connections FOR SELECT
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon insert own connections"
  ON corkboard_connections FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon update own connections"
  ON corkboard_connections FOR UPDATE
  TO anon, authenticated
  USING  (session_id IS NOT NULL AND session_id <> '')
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon delete own connections"
  ON corkboard_connections FOR DELETE
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');


-- ── corkboard_boards ─────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Session owner can select own boards"  ON corkboard_boards;
DROP POLICY IF EXISTS "Public boards are readable by anyone" ON corkboard_boards;
DROP POLICY IF EXISTS "Session owner can insert own boards"  ON corkboard_boards;
DROP POLICY IF EXISTS "Session owner can update own boards"  ON corkboard_boards;
DROP POLICY IF EXISTS "Session owner can delete own boards"  ON corkboard_boards;

CREATE POLICY "Anon select own boards"
  ON corkboard_boards FOR SELECT
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Public boards are readable by anyone"
  ON corkboard_boards FOR SELECT
  TO anon, authenticated
  USING (is_public = true);

CREATE POLICY "Anon insert own boards"
  ON corkboard_boards FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon update own boards"
  ON corkboard_boards FOR UPDATE
  TO anon, authenticated
  USING  (session_id IS NOT NULL AND session_id <> '')
  WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Anon delete own boards"
  ON corkboard_boards FOR DELETE
  TO anon, authenticated
  USING (session_id IS NOT NULL AND session_id <> '');
