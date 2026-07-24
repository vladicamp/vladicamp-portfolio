import { fetchGraphQL } from './client';

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

/** Home page portfolio grid data. */
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
