import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { HomeInterviewWelcome } from "@/components/home-interview-welcome";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { WhatIBuildSection } from "@/components/what-i-build-section";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <HomeInterviewWelcome />
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          title="What I build"
          description="Systems that sit where clinical workflows, biomedical data, and production engineering meet."
        />
        <WhatIBuildSection />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Featured work</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Selected clinical AI, NGS QC, and translational cancer informatics projects.</p>
          </div>
          <Button asChild variant="outline" className="glass-button">
            <Link href="/projects">View all projects <ArrowRight data-icon="inline-end" /></Link>
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {siteConfig.projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} featured />)}
        </div>
      </section>
    </>
  );
}
