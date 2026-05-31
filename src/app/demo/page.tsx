import type { Metadata } from "next";
import { DemoLauncherCard } from "@/components/demo-launcher-card";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Live Demo Launcher",
  description: "Selected MVPs and GitHub-hosted demos for Kaizen Nathani.",
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        title="Live Demo Launcher"
        description="Selected MVPs and GitHub-hosted demos. Some can run directly as hosted apps, while others include GitHub, Docker, or local setup instructions."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {siteConfig.demos.map((demo) => <DemoLauncherCard key={demo.title} demo={demo} />)}
      </div>
    </div>
  );
}
