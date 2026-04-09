#!/usr/bin/env python3
"""Generate SQL INSERT statements for the documents table from parsed evidence items."""

import json
import re
import sys
from datetime import datetime

# Load the data
with open('/tmp/cc-agent/64949774/project/evidence_items_parsed.json', 'r') as f:
    items = json.load(f)

print(f"Loaded {len(items)} items")

# Pillar mapping
PILLAR_MAP = {
    "Pillar 1: AI, SURVEILLANCE & DIGITAL RIGHTS": "AI, Surveillance & Digital Rights",
    "Pillar 2: CHILD SAFETY & HUMAN TRAFFICKING": "Child Safety & Human Trafficking",
    "Pillar 3: ENERGY & SUPPRESSED TECHNOLOGY": "Energy & Suppressed Technology",
}

# Page header pattern to clean from content
# Matches patterns like:
# "Page X of 319\n\nRedPillBiblio.wtf | Compiled March 2026\n\nRed Pill Bibliography — 780 New Evidence Items\n\n"
# Can appear at beginning, middle, or end of content
PAGE_HEADER_PATTERN = re.compile(
    r'\s*Page\s+\d+\s+of\s+319\s*\n+'
    r'\s*RedPillBiblio\.wtf\s*\|\s*Compiled\s+March\s+2026\s*\n+'
    r'\s*Red\s+Pill\s+Bibliography\s*[\u2014—-]+\s*780\s+New\s+Evidence\s+Items\s*\n*',
    re.IGNORECASE
)

def clean_page_headers(text):
    """Remove all page break artifacts from text."""
    cleaned = PAGE_HEADER_PATTERN.sub('\n\n', text)
    # Also clean standalone page markers that might appear at very end or beginning
    cleaned = re.sub(r'\s*Page\s+\d+\s+of\s+319\s*$', '', cleaned)
    cleaned = re.sub(r'^\s*Page\s+\d+\s+of\s+319\s*\n+', '', cleaned)
    # Clean up excessive whitespace
    cleaned = re.sub(r'\n{3,}', '\n\n', cleaned)
    cleaned = cleaned.strip()
    return cleaned

def extract_url(content):
    """Extract the source URL from the MLA citation at the end of content."""
    # Look for URLs - try https:// first, then http://, then www.
    # Search from the end of the content backwards
    urls = re.findall(r'https?://[^\s,\"\)\]]+', content)
    if urls:
        # Get the last URL (which is typically in the citation)
        url = urls[-1]
        # Clean trailing punctuation
        url = url.rstrip('.,;:')
        return url

    # Try www. URLs
    urls = re.findall(r'www\.[^\s,\"\)\]]+', content)
    if urls:
        url = 'https://' + urls[-1].rstrip('.,;:')
        return url

    # Try bare domain URLs in MLA citations (e.g., "cyberscoop.com/path/to/article")
    # Look for patterns like "domain.tld/path" that appear after a comma in citations
    bare_urls = re.findall(r'(?:,\s+|\s)([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,}/[^\s,\"\)\]]+)', content)
    if bare_urls:
        url = 'https://' + bare_urls[-1].rstrip('.,;:')
        return url

    return None

def extract_date(content, title):
    """Try to extract the most relevant date from the content."""
    # Common date patterns in the content

    # Try to find dates in MLA citation format: "28 Apr. 2023" or "22 May 2023"
    month_map = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Sept': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12',
        'January': '01', 'February': '02', 'March': '03', 'April': '04',
        'June': '06', 'July': '07', 'August': '08',
        'September': '09', 'October': '10', 'November': '11', 'December': '12'
    }

    # Look for explicit dates in the content body (not citation)
    # Split content to get the main body before citation
    parts = content.split('\n\n')
    body = parts[0] if parts else content

    # Pattern: "in Month YYYY" or "Month YYYY" or "Month DD, YYYY"
    date_patterns = [
        # "May 19, 2025" or "October 14, 2024"
        r'(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b)',
        # "in Month YYYY"
        r'in\s+(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)',
        # Stand-alone "Month YYYY"
        r'(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b)',
    ]

    for pattern in date_patterns:
        matches = re.findall(pattern, body)
        if matches:
            date_str = matches[0]
            # Parse "Month DD, YYYY"
            m = re.match(r'(\w+)\s+(\d{1,2}),?\s+(\d{4})', date_str)
            if m:
                month_name, day, year = m.groups()
                if month_name in month_map:
                    return f"{year}-{month_map[month_name]}-{int(day):02d}"
            # Parse "Month YYYY"
            m = re.match(r'(\w+)\s+(\d{4})', date_str)
            if m:
                month_name, year = m.groups()
                if month_name in month_map:
                    return f"{year}-{month_map[month_name]}-01"

    # Try citation date: "DD Mon. YYYY" pattern in the citation
    citation_pattern = r'(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+(\d{4})'
    matches = re.findall(citation_pattern, content)
    if matches:
        day, month_abbr, year = matches[-1]
        if month_abbr in month_map:
            return f"{year}-{month_map[month_abbr]}-{int(day):02d}"

    # Try "Mon. YYYY" or "Month YYYY" in citation
    citation_month_year = r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+(\d{4})'
    matches = re.findall(citation_month_year, content)
    if matches:
        month_abbr, year = matches[-1]
        if month_abbr in month_map:
            return f"{year}-{month_map[month_abbr]}-01"

    # Try just year patterns in body: "in 2023" or "in 2024"
    year_matches = re.findall(r'\bin\s+(20\d{2})\b', body)
    if year_matches:
        return f"{year_matches[0]}-01-01"

    return None

def generate_slug(title, existing_slugs):
    """Generate a URL-friendly slug from the title."""
    # Convert to lowercase
    slug = title.lower()
    # Replace em dashes and other dashes
    slug = slug.replace('\u2014', '-').replace('\u2013', '-').replace('—', '-').replace('–', '-')
    # Remove special characters except hyphens and alphanumeric
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    # Replace spaces with hyphens
    slug = re.sub(r'\s+', '-', slug)
    # Remove consecutive hyphens
    slug = re.sub(r'-{2,}', '-', slug)
    # Remove leading/trailing hyphens
    slug = slug.strip('-')
    # Truncate to 80 chars
    if len(slug) > 80:
        # Try to truncate at a word boundary
        slug = slug[:80]
        last_hyphen = slug.rfind('-')
        if last_hyphen > 40:
            slug = slug[:last_hyphen]

    # Ensure uniqueness
    original_slug = slug
    counter = 1
    while slug in existing_slugs:
        suffix = f"-{counter}"
        max_base = 80 - len(suffix)
        base = original_slug[:max_base]
        slug = base + suffix
        counter += 1

    existing_slugs.add(slug)
    return slug

def get_first_paragraph(cleaned_content):
    """Extract the first paragraph from cleaned content (before the citation)."""
    # Split into paragraphs
    paragraphs = cleaned_content.split('\n\n')
    if paragraphs:
        first = paragraphs[0].strip()
        # Make sure we're not returning a citation
        if first and not first.startswith(('http', 'www.')):
            return first
    return cleaned_content[:500]

def escape_sql(text):
    """Escape single quotes for SQL."""
    return text.replace("'", "''")

# Process all items
pillar1_items = []
pillar2_items = []
pillar3_items = []

existing_slugs = set()

for item in items:
    number = item['number']
    title = item['title']
    content = item['content']
    pillar = item['pillar']

    # Clean page headers from content
    cleaned_content = clean_page_headers(content)

    # Get document type
    doc_type = PILLAR_MAP.get(pillar, pillar)

    # Extract URL
    source_url = extract_url(content)

    # Extract date
    date_published = extract_date(content, title)

    # Generate slug
    slug = generate_slug(title, existing_slugs)

    # Get first paragraph for description
    description = get_first_paragraph(cleaned_content)

    # Build the SQL
    sql_parts = []
    sql_parts.append(f"INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug)")
    sql_parts.append(f"VALUES (")
    sql_parts.append(f"  '{escape_sql(title)}',")
    sql_parts.append(f"  '{escape_sql(description)}',")
    sql_parts.append(f"  '{escape_sql(cleaned_content)}',")

    if source_url:
        sql_parts.append(f"  '{escape_sql(source_url)}',")
    else:
        sql_parts.append(f"  NULL,")

    sql_parts.append(f"  'verified',")
    sql_parts.append(f"  '{escape_sql(doc_type)}',")

    if date_published:
        sql_parts.append(f"  '{date_published}',")
    else:
        sql_parts.append(f"  NULL,")

    sql_parts.append(f"  '{escape_sql(slug)}'")
    sql_parts.append(f");")

    sql_statement = '\n'.join(sql_parts)

    if pillar == "Pillar 1: AI, SURVEILLANCE & DIGITAL RIGHTS":
        pillar1_items.append((number, sql_statement))
    elif pillar == "Pillar 2: CHILD SAFETY & HUMAN TRAFFICKING":
        pillar2_items.append((number, sql_statement))
    elif pillar == "Pillar 3: ENERGY & SUPPRESSED TECHNOLOGY":
        pillar3_items.append((number, sql_statement))
    else:
        print(f"WARNING: Unknown pillar for item {number}: {pillar}")

print(f"Pillar 1 (AI): {len(pillar1_items)} items")
print(f"Pillar 2 (Child Safety): {len(pillar2_items)} items")
print(f"Pillar 3 (Energy): {len(pillar3_items)} items")
print(f"Total: {len(pillar1_items) + len(pillar2_items) + len(pillar3_items)} items")

def write_sql_file(filepath, items, pillar_name, doc_type):
    """Write SQL file for a pillar."""
    with open(filepath, 'w') as f:
        f.write(f"-- SQL INSERT statements for {pillar_name}\n")
        f.write(f"-- Document type: {doc_type}\n")
        f.write(f"-- Total items: {len(items)}\n")
        f.write(f"-- Generated from evidence_items_parsed.json\n\n")

        for number, sql in items:
            f.write(f"-- Item #{number}\n")
            f.write(sql)
            f.write('\n\n')

    print(f"Wrote {filepath} with {len(items)} items")

write_sql_file(
    '/tmp/cc-agent/64949774/project/pillar1_sql.sql',
    pillar1_items,
    'Pillar 1: AI, Surveillance & Digital Rights',
    'AI, Surveillance & Digital Rights'
)

write_sql_file(
    '/tmp/cc-agent/64949774/project/pillar2_sql.sql',
    pillar2_items,
    'Pillar 2: Child Safety & Human Trafficking',
    'Child Safety & Human Trafficking'
)

write_sql_file(
    '/tmp/cc-agent/64949774/project/pillar3_sql.sql',
    pillar3_items,
    'Pillar 3: Energy & Suppressed Technology',
    'Energy & Suppressed Technology'
)

print("\nDone! All SQL files generated.")
