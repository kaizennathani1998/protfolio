import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { InterviewWelcomeModal } from "@/components/interview-welcome-modal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { WhatIBuildSection } from "@/components/what-i-build-section";
import { companyFromSlug, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ company: string }>;
  searchParams: Promise<{ name?: string; role?: string; message?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  return { title: `Interview | ${companyFromSlug(company)}` };
}

export default async function InterviewPage({ params, searchParams }: Props) {
  const { company: slug } = await params;
  const query = await searchParams;
  const company = companyFromSlug(slug);
  const name = query.name;
  const message = query.message;

  return (
    <>
      <InterviewWelcomeModal company={company} name={name} message={message} />
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
