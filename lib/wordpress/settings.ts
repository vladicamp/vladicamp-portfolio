import { fetchGraphQL } from './client';

export interface WPGeneralSettings {
  title: string;
  description: string;
  siteIconUrl: string | null;
}

const DEFAULT_GENERAL_SETTINGS: WPGeneralSettings = {
  title: 'VladiCamp',
  description: 'Portfolio of Vladimir Campos',
  siteIconUrl: null,
};

export const LOCAL_LOGO_FALLBACK = '/vladicamp-light-logo-512.avif';

const GET_GENERAL_SETTINGS = /* GraphQL */ `
  query GetGeneralSettings {
    generalSettings {
      title
      description
      siteIconUrl
    }
  }
`;

/** Site-wide identity from WP General Settings — safe to use in layout, metadata, header/footer. */
export async function getGeneralSettings(): Promise<WPGeneralSettings> {
  try {
    const data = await fetchGraphQL<{
      generalSettings: {
        title: string | null;
        description: string | null;
        siteIconUrl: string | null;
      };
    }>(GET_GENERAL_SETTINGS);

    return {
      title: data.generalSettings.title || DEFAULT_GENERAL_SETTINGS.title,
      description:
        data.generalSettings.description ||
        DEFAULT_GENERAL_SETTINGS.description,
      siteIconUrl: data.generalSettings.siteIconUrl || null,
    };
  } catch {
    return DEFAULT_GENERAL_SETTINGS;
  }
}

export function getSiteLogoSrc(settings: WPGeneralSettings): string {
  return settings.siteIconUrl ?? LOCAL_LOGO_FALLBACK;
}
