/*
  # Add slug column to documents table

  1. Changes
    - Add `slug` column to `documents` table (text, unique, indexed)
    - Create function to generate URL-friendly slugs from titles
    - Populate slugs for all existing documents
    - Add index for fast slug lookups

  2. Security
    - No RLS changes needed (inherits existing policies)
*/

-- Function to generate URL-friendly slugs
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
DECLARE
  slug TEXT;
BEGIN
  -- Convert to lowercase
  slug := LOWER(title);

  -- Replace spaces and special characters with hyphens
  slug := REGEXP_REPLACE(slug, '[^a-z0-9]+', '-', 'g');

  -- Remove leading/trailing hyphens
  slug := TRIM(BOTH '-' FROM slug);

  -- Limit to 80 characters
  IF LENGTH(slug) > 80 THEN
    slug := SUBSTRING(slug FROM 1 FOR 80);
    -- Remove trailing hyphen if any
    slug := REGEXP_REPLACE(slug, '-+$', '');
  END IF;

  RETURN slug;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add slug column to documents table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'slug'
  ) THEN
    ALTER TABLE documents ADD COLUMN slug TEXT;
  END IF;
END $$;

-- Generate slugs for existing documents
UPDATE documents
SET slug = generate_slug(title)
WHERE slug IS NULL;

-- Handle duplicate slugs by appending a counter
DO $$
DECLARE
  doc RECORD;
  new_slug TEXT;
  counter INTEGER;
BEGIN
  FOR doc IN
    SELECT id, slug
    FROM documents
    WHERE slug IN (
      SELECT slug
      FROM documents
      GROUP BY slug
      HAVING COUNT(*) > 1
    )
    ORDER BY created_at
  LOOP
    counter := 1;
    new_slug := doc.slug || '-' || counter;

    WHILE EXISTS (SELECT 1 FROM documents WHERE slug = new_slug) LOOP
      counter := counter + 1;
      new_slug := doc.slug || '-' || counter;
    END LOOP;

    UPDATE documents SET slug = new_slug WHERE id = doc.id;
  END LOOP;
END $$;

-- Add unique constraint and index
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'documents_slug_key'
  ) THEN
    ALTER TABLE documents ADD CONSTRAINT documents_slug_key UNIQUE (slug);
  END IF;
END $$;

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_documents_slug ON documents(slug);

-- Add trigger to auto-generate slug on insert/update
CREATE OR REPLACE FUNCTION auto_generate_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_slug(NEW.title);

    -- Handle potential duplicates
    IF EXISTS (SELECT 1 FROM documents WHERE slug = NEW.slug AND id != NEW.id) THEN
      NEW.slug := NEW.slug || '-' || SUBSTRING(NEW.id::TEXT FROM 1 FOR 8);
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_auto_generate_slug ON documents;
CREATE TRIGGER trigger_auto_generate_slug
  BEFORE INSERT OR UPDATE ON documents
  FOR EACH ROW
  EXECUTE FUNCTION auto_generate_slug();
