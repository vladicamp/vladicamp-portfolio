const WP_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://vladicamp.com/graphql';

// ─── Core fetch helper ────────────────────────────────────────────────────────

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(
      `GraphQL errors: ${json.errors.map((e: any) => e.message).join(', ')}`
    );
  }

  return json.data as T;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPTerm {
  id: string;
  name: string;
  slug: string;
}

export interface WPWork {
  id: string;
  slug: string;
  title: string;
  featuredImage: {
    node: { sourceUrl: string };
  } | null;
  workTags: {           // custom taxonomy
    nodes: WPTerm[];
  };
  liveWorks: {              // ACF field group
    liveUrl?: string;
  } | null;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const GET_WORKS = /* GraphQL */ `
  query GetWorks {
    works {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl(size: ET_PB_POST_MAIN_IMAGE_FULLWIDTH)
          }
        }
        workTags {
          nodes {
            id
            name
            slug
          }
        }
        liveWorks {
          liveUrl
        }
      }
    }
  }
`;

// ─── Data functions ───────────────────────────────────────────────────────────

export async function getWorks(): Promise<WPWork[]> {
  const data = await fetchGraphQL<{ works: { nodes: WPWork[] } }>(GET_WORKS);
  return data.works.nodes;
}

export function getWorkTechTags(work: WPWork): WPTerm[] {
  return work.workTags?.nodes ?? [];
}

export function getWorkThumbnail(work: WPWork): string | null {
  return work.featuredImage?.node?.sourceUrl ?? null;
}