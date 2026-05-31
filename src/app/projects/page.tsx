import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { ProjectsShowcase } from "@/app/projects/projects-showcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio showcase for clinical bioinformatics, AI, data engineering, cancer research, and QC visualization work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        title="Cool systems I’ve built"
        description="A recruiter-friendly work grid with expandable technical details for clinical AI, NGS QC, and translational oncology data systems."
      />
      <ProjectsShowcase />
    </div>
  );
}
