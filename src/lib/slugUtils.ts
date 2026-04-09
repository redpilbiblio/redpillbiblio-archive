export function generateSlug(title: string): string {
  let slug = title.toLowerCase();
  slug = slug.replace(/[^a-z0-9]+/g, '-');
  slug = slug.replace(/^-+|-+$/g, '');

  if (slug.length > 80) {
    slug = slug.substring(0, 80);
    slug = slug.replace(/-+$/, '');
  }

  return slug;
}

export function isUUID(value: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}
