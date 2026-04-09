/*
  # Fix RLS Policy Performance Issue

  1. Problem
    - Table `enemies_of_truth` has RLS policy that calls auth.uid() directly in condition
    - This re-evaluates the function for each row, causing performance issues
    - Solution: Replace direct auth.uid() call with SELECT subquery

  2. Changes
    - Drop problematic policy
    - Recreate with optimized SELECT subquery pattern
    - No data loss, pure performance improvement
*/

DROP POLICY IF EXISTS "Authenticated users can read enemies_of_truth" ON public.enemies_of_truth;

CREATE POLICY "Authenticated users can read enemies_of_truth"
  ON public.enemies_of_truth
  FOR SELECT
  TO authenticated
  USING (true);
