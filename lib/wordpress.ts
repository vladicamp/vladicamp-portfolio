const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://vladicamp.com/wp-json/wp/v2';

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single taxonomy term (tag, category, or custom taxonomy). */
export interface WPTerm {
  id: number;
  name: string;  // e.g. "Next.js"
  slug: string;  // e.g. "next-js"
  link: string;
}

export interface WPProject {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  /**
   * ACF fields — tech_stack has been migrated to WP Tags.
   * Only live_url and featured_image_url remain here.
   */
  acf: {
    live_url: string;
    featured_image_url: string;
  };
  /**
   * Populated when the request includes `_embed`.
   * Index 0 = tags, Index 1 = categories (standard WP order).
   * Use the helper `getProjectTechTags(project)` to extract them safely.
   */
  _embedded?: {
    'wp:term'?: WPTerm[][];
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: Record<string, unknown>;
}

// ─── Fetch helpers ─────────────────────────────────────────────────────────────

async function fetchWP<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${WP_API_URL}${endpoint}`, {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
    ...options,
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// ─── Projects (Custom Post Type) ──────────────────────────────────────────────

export async function getProjects(): Promise<WPProject[]> {
  // _embed ensures wp:term (tags) are included inline — no extra requests needed.
  return fetchWP<WPProject[]>('/project?_embed&per_page=100&orderby=date&order=desc');
}

export async function getProjectBySlug(slug: string): Promise<WPProject | null> {
  const projects = await fetchWP<WPProject[]>(`/project?slug=${slug}&_embed`);
  return projects[0] ?? null;
}

/**
 * Safely extracts the tag terms from an embedded WPProject.
 * Tags are always the first group (index 0) in `_embedded['wp:term']`.
 */
export function getProjectTechTags(project: WPProject): WPTerm[] {
  return project._embedded?.['wp:term']?.[0] ?? [];
}

/**
 * Fetches every tag attached to the 'project' post type.
 * Use this to build a dynamic tech-stack filter menu.
 */
export async function getTechTags(): Promise<WPTerm[]> {
  // post_type filter requires the WP REST API to support custom post type tags.
  // If you registered a custom taxonomy you can change 'tags' to that endpoint.
  return fetchWP<WPTerm[]>('/tags?per_page=100&orderby=name&order=asc');
}

// ─── About Page ────────────────────────────────────────────────────────────────

export async function getAboutPage(): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>('/pages?slug=about&_embed');
  return pages[0] ?? null;
}

// ─── Tech Stack (from WP options via ACF Options Page) ────────────────────────

export interface TechCategory {
  category: string;
  skills: string[];
}

export async function getTechStack(): Promise<TechCategory[]> {
  // Requires ACF Pro + Options Page plugin
  const data = await fetchWP<{ tech_stack: TechCategory[] }>('/acf/v3/options/options');
  return data?.tech_stack ?? [];
}

// ─── Contact (WP sends email via Contact Form 7 REST API) ─────────────────────

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.append('your-name', payload.name);
  formData.append('your-email', payload.email);
  formData.append('your-message', payload.message);

  const CF7_FORM_ID = process.env.CF7_FORM_ID || '1';
  const res = await fetch(
    `${WP_API_URL.replace('/wp/v2', '')}/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`,
    { method: 'POST', body: formData }
  );

  const data = await res.json();
  return {
    success: data.status === 'mail_sent',
    message: data.message,
  };
}
