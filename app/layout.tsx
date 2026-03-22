import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VladiCamp",
  description: "Portfolio of Vladimir Campos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
