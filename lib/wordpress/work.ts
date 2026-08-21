import { fetchGraphQL } from './client';

/** Work Category term slug in WordPress (taxonomy: work-category). */
export const FEATURED_WORK_CATEGORY_SLUG = 'featured';

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
  workTags: {
    nodes: WPTerm[];
  };
  liveWorks: {
    liveUrl?: string;
  } | null;
}

const WORK_FIELDS = /* GraphQL */ `
  id
  slug
  title
  featuredImage {
    node {
      sourceUrl
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
`;

const GET_FEATURED_WORKS = /* GraphQL */ `
  query GetFeaturedWorks($slug: ID!) {
    workCategory(id: $slug, idType: SLUG) {
      works(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          ${WORK_FIELDS}
        }
      }
    }
  }
`;

const GET_WORKS_FALLBACK = /* GraphQL */ `
  query GetWorksFallback {
    works(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ${WORK_FIELDS}
      }
    }
  }
`;

/** Featured works for the portfolio grid (Work Category taxonomy). */
export async function getWorks(): Promise<WPWork[]> {
  try {
    const data = await fetchGraphQL<{
      workCategory: { works: { nodes: WPWork[] } } | null;
    }>(GET_FEATURED_WORKS, { slug: FEATURED_WORK_CATEGORY_SLUG });

    const featured = data.workCategory?.works?.nodes ?? [];
    if (featured.length > 0) return featured;
  } catch {
    // workCategory taxonomy not registered yet, or no featured works assigned.
  }

  const data = await fetchGraphQL<{ works: { nodes: WPWork[] } }>(
    GET_WORKS_FALLBACK
  );
  return data.works.nodes;
}

export function getWorkTechTags(work: WPWork): WPTerm[] {
  return work.workTags?.nodes ?? [];
}

export function getWorkThumbnail(work: WPWork): string | null {
  return work.featuredImage?.node?.sourceUrl ?? null;
}
