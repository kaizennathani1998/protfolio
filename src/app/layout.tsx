import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/animated-background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaizen-nathani.vercel.app"),
  title: {
    default: `${siteConfig.candidate.name} | Bioinformatics Scientist`,
    template: `%s | ${siteConfig.candidate.name}`,
  },
  description: siteConfig.candidate.pitch,
  openGraph: {
    title: `${siteConfig.candidate.name} | Bioinformatics Scientist`,
    description: siteConfig.candidate.pitch,
    type: "website",
    images: ["/avatar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.candidate.name} | Bioinformatics Scientist`,
    description: siteConfig.candidate.pitch,
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">
        <Providers>
          <AnimatedBackground />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
