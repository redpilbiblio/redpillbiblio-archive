/*
  # Create Corkboard Research Workspace Tables

  ## Summary
  Creates three new tables to power the /research workspace — a session-based
  collaborative corkboard where users can pin research items, draw string
  connections between them, and save/share named boards.

  ## New Tables

  ### 1. corkboard_pins
  Stores individual items that a user has pinned to their corkboard.
  - `id` — primary key
  - `session_id` — anonymous browser session identifier (from localStorage UUID)
  - `user_id` — nullable, reserved for future authenticated users
  - `board_name` — which board this pin belongs to; default 'default'
  - `item_type` — one of: document | event | watchlist | conviction | incident | death | trade | family
  - `item_id` — stable identifier for the source item (uuid string or slug)
  - `item_snapshot` — full denormalized JSON copy of the item at pin time (title, pillar, type, date, snippet)
  - `sort_order` — integer for manual drag-reorder within a board
  - `user_note` — optional sticky-note annotation the user types on the card
  - `pinned_at` — timestamp when pinned
  - Unique constraint on (session_id, board_name, item_type, item_id) prevents duplicate pins

  ### 2. corkboard_connections
  Stores red-string connections drawn between two pinned cards on a board.
  - `id` — primary key
  - `session_id` — must match the owning session
  - `board_name` — must match the owning board
  - `from_pin_id` — FK → corkboard_pins.id, CASCADE DELETE
  - `to_pin_id` — FK → corkboard_pins.id, CASCADE DELETE
  - `label` — optional text label shown at the midpoint of the string
  - `color` — hex color string for the string line, default red #ef4444
  - `created_at` — timestamp
  - Unique constraint on (session_id, board_name, from_pin_id, to_pin_id) prevents duplicate connections
  - Connections are automatically deleted when either pin is removed (CASCADE)

  ### 3. corkboard_boards
  Stores named, saveable boards and controls public sharing.
  - `id` — primary key
  - `session_id` — owning session
  - `user_id` — nullable, reserved for future auth
  - `board_name` — name chosen by the user when saving
  - `share_token` — uuid generated on share, used in /board/:token URLs
  - `is_public` — whether the board is publicly viewable via share link
  - `created_at` / `updated_at` — timestamps
  - Unique constraint on (session_id, board_name) prevents duplicate board names per session

  ## Security
  - RLS enabled on all three tables
  - Anonymous access is filtered by session_id on all operations
  - Public board SELECT is allowed where is_public = true (no session check needed)
  - No unauthenticated user can read or modify another session's data
  - INSERT and UPDATE policies enforce that session_id in the row matches the session_id
    being written (WITH CHECK prevents session spoofing)
  - DELETE policies require session_id match
  - Connections inherit session scoping from their pins (session_id column + FK cascade)

  ## Indexes
  - (session_id, board_name, sort_order) on pins for ordered board fetches
  - (session_id, board_name) on connections for board-scoped connection fetches
  - (session_id, board_name) on boards for board lookups
  - (share_token) on boards for public board lookups by token
*/

-- ============================================================
-- TABLE: corkboard_pins
-- ============================================================

CREATE TABLE IF NOT EXISTS corkboard_pins (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id    text        NOT NULL,
  user_id       uuid        NULL,
  board_name    text        NOT NULL DEFAULT 'default',
  item_type     text        NOT NULL,
  item_id       text        NOT NULL,
  item_snapshot jsonb       NOT NULL DEFAULT '{}',
  sort_order    integer     NOT NULL DEFAULT 0,
  user_note     text        NULL,
  pinned_at     timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT corkboard_pins_item_type_check
    CHECK (item_type IN ('document','event','watchlist','conviction','incident','death','trade','family')),

  CONSTRAINT corkboard_pins_unique_per_board
    UNIQUE (session_id, board_name, item_type, item_id)
);

CREATE INDEX IF NOT EXISTS corkboard_pins_session_board_order_idx
  ON corkboard_pins (session_id, board_name, sort_order);

ALTER TABLE corkboard_pins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Session owner can select own pins"
  ON corkboard_pins FOR SELECT
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can insert own pins"
  ON corkboard_pins FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can update own pins"
  ON corkboard_pins FOR UPDATE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)))
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can delete own pins"
  ON corkboard_pins FOR DELETE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));


-- ============================================================
-- TABLE: corkboard_connections
-- ============================================================

CREATE TABLE IF NOT EXISTS corkboard_connections (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id  text        NOT NULL,
  board_name  text        NOT NULL DEFAULT 'default',
  from_pin_id uuid        NOT NULL REFERENCES corkboard_pins(id) ON DELETE CASCADE,
  to_pin_id   uuid        NOT NULL REFERENCES corkboard_pins(id) ON DELETE CASCADE,
  label       text        NULL,
  color       text        NOT NULL DEFAULT '#ef4444',
  created_at  timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT corkboard_connections_unique_per_board
    UNIQUE (session_id, board_name, from_pin_id, to_pin_id)
);

CREATE INDEX IF NOT EXISTS corkboard_connections_session_board_idx
  ON corkboard_connections (session_id, board_name);

ALTER TABLE corkboard_connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Session owner can select own connections"
  ON corkboard_connections FOR SELECT
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can insert own connections"
  ON corkboard_connections FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can update own connections"
  ON corkboard_connections FOR UPDATE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)))
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can delete own connections"
  ON corkboard_connections FOR DELETE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));


-- ============================================================
-- TABLE: corkboard_boards
-- ============================================================

CREATE TABLE IF NOT EXISTS corkboard_boards (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id   text        NOT NULL,
  user_id      uuid        NULL,
  board_name   text        NOT NULL DEFAULT 'default',
  share_token  uuid        UNIQUE NULL,
  is_public    boolean     NOT NULL DEFAULT false,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT corkboard_boards_unique_per_session
    UNIQUE (session_id, board_name)
);

CREATE INDEX IF NOT EXISTS corkboard_boards_session_board_idx
  ON corkboard_boards (session_id, board_name);

CREATE INDEX IF NOT EXISTS corkboard_boards_share_token_idx
  ON corkboard_boards (share_token)
  WHERE share_token IS NOT NULL;

ALTER TABLE corkboard_boards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Session owner can select own boards"
  ON corkboard_boards FOR SELECT
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Public boards are readable by anyone"
  ON corkboard_boards FOR SELECT
  TO anon, authenticated
  USING (is_public = true);

CREATE POLICY "Session owner can insert own boards"
  ON corkboard_boards FOR INSERT
  TO anon, authenticated
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can update own boards"
  ON corkboard_boards FOR UPDATE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)))
  WITH CHECK (session_id = current_setting('request.headers', true)::json->>'x-session-id'
              OR session_id = (SELECT current_setting('app.session_id', true)));

CREATE POLICY "Session owner can delete own boards"
  ON corkboard_boards FOR DELETE
  TO anon, authenticated
  USING (session_id = current_setting('request.headers', true)::json->>'x-session-id'
         OR session_id = (SELECT current_setting('app.session_id', true)));
