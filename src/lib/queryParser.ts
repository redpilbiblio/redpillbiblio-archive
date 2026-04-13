export interface ParsedQuery {
  required: string[];
  optional: string[][];
  excluded: string[];
}

export function parseQuery(input: string): ParsedQuery {
  const required: string[] = [];
  const optional: string[][] = [];
  const excluded: string[] = [];

  const trimmed = input.trim();
  if (!trimmed) return { required, optional, excluded };

  const tokens: string[] = [];
  let i = 0;
  while (i < trimmed.length) {
    if (trimmed[i] === '"') {
      const end = trimmed.indexOf('"', i + 1);
      if (end !== -1) {
        tokens.push(trimmed.slice(i + 1, end));
        i = end + 1;
      } else {
        tokens.push(trimmed.slice(i + 1));
        break;
      }
    } else if (trimmed[i] === ' ') {
      i++;
    } else {
      let end = i;
      while (end < trimmed.length && trimmed[end] !== ' ' && trimmed[end] !== '"') end++;
      tokens.push(trimmed.slice(i, end));
      i = end;
    }
  }

  let idx = 0;
  while (idx < tokens.length) {
    const tok = tokens[idx];
    const upper = tok.toUpperCase();

    if (upper === 'AND') {
      idx++;
      continue;
    }

    if (upper === 'OR') {
      idx++;
      if (idx < tokens.length && required.length > 0) {
        const left = required.pop()!;
        let right = tokens[idx];
        if (right.startsWith('-')) {
          right = right.slice(1);
        }
        optional.push([left.toLowerCase(), right.toLowerCase()]);
        idx++;
        while (idx < tokens.length && tokens[idx].toUpperCase() === 'OR' && idx + 1 < tokens.length) {
          idx++;
          let next = tokens[idx];
          if (next.startsWith('-')) next = next.slice(1);
          optional[optional.length - 1].push(next.toLowerCase());
          idx++;
        }
      }
      continue;
    }

    if (upper === 'NOT') {
      idx++;
      if (idx < tokens.length) {
        excluded.push(tokens[idx].toLowerCase());
        idx++;
      }
      continue;
    }

    if (tok.startsWith('-') && tok.length > 1) {
      excluded.push(tok.slice(1).toLowerCase());
      idx++;
      continue;
    }

    required.push(tok.toLowerCase());
    idx++;
  }

  return { required, optional, excluded };
}

export function buildHaystack(fields: (string | null | undefined)[]): string {
  return fields
    .filter((f): f is string => typeof f === 'string' && f.length > 0)
    .join(' ')
    .toLowerCase();
}

export function matchesQuery(haystack: string, pq: ParsedQuery): boolean {
  if (pq.required.length === 0 && pq.optional.length === 0 && pq.excluded.length === 0) {
    return true;
  }

  for (const term of pq.required) {
    if (!haystack.includes(term)) return false;
  }

  for (const group of pq.optional) {
    if (!group.some(term => haystack.includes(term))) return false;
  }

  for (const term of pq.excluded) {
    if (haystack.includes(term)) return false;
  }

  return true;
}

export function extractSearchTerms(pq: ParsedQuery): string[] {
  const all: string[] = [...pq.required];
  for (const group of pq.optional) {
    all.push(...group);
  }
  return all;
}
