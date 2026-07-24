import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { getGeneralSettings } from "@/lib/wordpress/settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGeneralSettings();

  return {
    title: settings.title,
    description: settings.description,
    icons: {
      icon: settings.siteIconUrl || "/favicon.ico",
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
      </body>
    </html>
  );
}
