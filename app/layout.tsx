import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getGeneralSettings } from "@/lib/wordpress/settings";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGeneralSettings();

  return {
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
    },
    title: settings.title,
    description: settings.description,
    icons: {
      icon: settings.siteIconUrl || "/favicon.ico",
    },
    verification: {
      google: "GcWZXfA1SYejeFGLR-w00tHLXjB2YJroBHqQX-fizAU",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
