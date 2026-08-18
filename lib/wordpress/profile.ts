import { fetchGraphQL } from './client';

export interface WPProfileSettings {
  resumeUrl: string | null;
}

export const DEFAULT_RESUME_URL =
  'https://vladicamp.com/wp-content/uploads/2023/05/vladimir-campos-cv-1.pdf';

const GET_PROFILE = /* GraphQL */ `
  query GetProfile {
    profileSettings {
      profile {
        resumeUrl {
          url
        }
      }
    }
  }
`;

/** Profile settings from WP ACF Profile Settings — includes CV / Resume URL. */
export async function getProfileSettings(): Promise<WPProfileSettings> {
  try {
    const data = await fetchGraphQL<{
      profileSettings: {
        profile: {
          resumeUrl: {
            url: string | null;
          } | null;
        } | null;
      } | null;
    }>(GET_PROFILE);

    const url = data?.profileSettings?.profile?.resumeUrl?.url;

    return {
      resumeUrl: url || DEFAULT_RESUME_URL,
    };
  } catch {
    return {
      resumeUrl: DEFAULT_RESUME_URL,
    };
  }
}

export async function getProfile(): Promise<WPProfileSettings> {
  return getProfileSettings();
}

export function getResumeUrl(profile: WPProfileSettings): string {
  return profile.resumeUrl ?? DEFAULT_RESUME_URL;
}
