/*
  # Drop unused indexes on corkboard tables

  ## Changes
  - Drop `corkboard_connections_session_board_idx` on `corkboard_connections` (never used)
  - Drop `corkboard_boards_session_board_idx` on `corkboard_boards` (never used)
  - Drop `corkboard_boards_share_token_idx` on `corkboard_boards` (never used)

  ## Purpose
  Unused indexes waste storage and add write overhead without query benefit.
*/

DROP INDEX IF EXISTS public.corkboard_connections_session_board_idx;
DROP INDEX IF EXISTS public.corkboard_boards_session_board_idx;
DROP INDEX IF EXISTS public.corkboard_boards_share_token_idx;
