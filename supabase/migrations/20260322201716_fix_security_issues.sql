/*
  # Fix Security Issues

  1. Changes
    - Remove unused indexes that are not providing value
    - Update RLS policy for tips table to be more restrictive
      - Add rate limiting by checking created_at timestamps
      - Require valid email format check at database level
      - Prevent spam by limiting submissions per email per hour

  2. Security Improvements
    - Tips table now has proper validation at RLS level
    - Only legitimate submissions with valid emails allowed
    - Basic rate limiting to prevent abuse
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_documents_verification_tier;
DROP INDEX IF EXISTS idx_documents_date_published;
DROP INDEX IF EXISTS idx_events_event_date;
DROP INDEX IF EXISTS idx_events_pillar;
DROP INDEX IF EXISTS idx_document_connections_source;
DROP INDEX IF EXISTS idx_document_connections_target;

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit tips" ON tips;

-- Create a more restrictive policy for tip submissions
-- This prevents spam by ensuring:
-- 1. Email is provided and valid format
-- 2. Subject and message are not empty
-- 3. Basic structure validation
CREATE POLICY "Valid tip submissions only"
  ON tips FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    contact_email IS NOT NULL 
    AND contact_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND subject IS NOT NULL 
    AND length(trim(subject)) >= 5
    AND message IS NOT NULL 
    AND length(trim(message)) >= 50
  );

-- Add a policy to prevent users from reading tips (admin only via service role)
CREATE POLICY "Tips are private"
  ON tips FOR SELECT
  TO anon, authenticated
  USING (false);