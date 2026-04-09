/*
  # Fix Security and Performance Issues

  1. Performance Improvements
    - Add missing indexes on foreign key columns in `document_connections` table
      - Index on `source_document_id` for faster lookups
      - Index on `target_document_id` for faster reverse lookups
    - Drop unused indexes to reduce maintenance overhead
      - Remove `idx_auto_connections_confidence` (unused)
      - Remove `idx_documents_slug` (unused - queries use direct lookups)

  2. Security Fixes
    - Fix function search path mutability for `generate_slug`
    - Fix function search path mutability for `auto_generate_slug`
    - These functions will have immutable search paths to prevent security vulnerabilities

  3. Notes
    - Auth DB connection strategy is a project-level setting that must be changed in Supabase dashboard
    - Foreign key indexes significantly improve JOIN performance
*/

-- Add indexes for foreign keys in document_connections table
CREATE INDEX IF NOT EXISTS idx_document_connections_source_id 
  ON public.document_connections(source_document_id);

CREATE INDEX IF NOT EXISTS idx_document_connections_target_id 
  ON public.document_connections(target_document_id);

-- Drop unused indexes to reduce maintenance overhead
DROP INDEX IF EXISTS public.idx_auto_connections_confidence;
DROP INDEX IF EXISTS public.idx_documents_slug;

-- Drop existing triggers first
DROP TRIGGER IF EXISTS set_slug_on_insert ON public.documents;
DROP TRIGGER IF EXISTS trigger_auto_generate_slug ON public.documents;

-- Fix search path mutability for generate_slug function
DROP FUNCTION IF EXISTS public.generate_slug(text);

CREATE OR REPLACE FUNCTION public.generate_slug(input_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public, pg_temp
AS $$
DECLARE
  slug text;
  counter int := 0;
  base_slug text;
BEGIN
  base_slug := lower(regexp_replace(
    regexp_replace(input_text, '[^a-zA-Z0-9\s-]', '', 'g'),
    '\s+', '-', 'g'
  ));
  
  base_slug := trim(both '-' from base_slug);
  
  slug := base_slug;
  
  WHILE EXISTS (SELECT 1 FROM documents WHERE documents.slug = slug) LOOP
    counter := counter + 1;
    slug := base_slug || '-' || counter;
  END LOOP;
  
  RETURN slug;
END;
$$;

-- Fix search path mutability for auto_generate_slug function
DROP FUNCTION IF EXISTS public.auto_generate_slug() CASCADE;

CREATE OR REPLACE FUNCTION public.auto_generate_slug()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER trigger_auto_generate_slug
  BEFORE INSERT ON public.documents
  FOR EACH ROW
  EXECUTE FUNCTION auto_generate_slug();