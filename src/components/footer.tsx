import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>Kaizen Nathani · Bioinformatician · Data Engineer</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/link-builder" className="hover:text-foreground">Link Builder</Link>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href={siteConfig.links.dockerhub} target="_blank" rel="noreferrer" className="hover:text-foreground">DockerHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
