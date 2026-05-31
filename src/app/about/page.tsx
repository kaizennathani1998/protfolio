import type { Metadata } from "next";
import { EducationSection } from "@/components/education-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionHeader } from "@/components/section-header";
import { SkillCloud } from "@/components/skill-cloud";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Clinical NGS, oncology informatics, AI agents, data engineering, and cancer research experience.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader title="Clinical bioinformatics with an engineering spine" description={siteConfig.candidate.summary} />
      <Tabs defaultValue="overview" className="mx-auto max-w-7xl">
        <div className="sticky top-20 z-30 mb-12 flex justify-center py-3">
          <TabsList className="h-auto rounded-full border border-border/70 bg-background/45 p-1.5 backdrop-blur-xl">
            <TabsTrigger value="overview" className="rounded-full px-5 py-2">Overview</TabsTrigger>
            <TabsTrigger value="experience" className="rounded-full px-5 py-2">Experience</TabsTrigger>
            <TabsTrigger value="education" className="rounded-full px-5 py-2">Education</TabsTrigger>
            <TabsTrigger value="skills" className="rounded-full px-5 py-2">Skills</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview">
          <Card className="bio-card mx-auto max-w-4xl">
            <CardContent className="p-8 text-lg leading-8 text-muted-foreground">
              Kaizen builds practical biomedical systems for precision oncology: NGS quality control, variant review support,
              data pipelines, structured clinical extraction, and translational cancer research workflows. His work connects
              clinical context with reproducible computation, making complex data easier to inspect, validate, and use.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="experience">
          <SectionHeader title="Experience timeline" description="A dated timeline across clinical, research, informatics, and data engineering work." />
          <ExperienceTimeline />
        </TabsContent>
        <TabsContent value="education">
          <SectionHeader title="Education" description="Academic and applied training behind the clinical bioinformatics and data engineering work." />
          <EducationSection />
        </TabsContent>
        <TabsContent value="skills">
          <SectionHeader title="Technical depth" description="Grouped for fast recruiter scanning with enough detail for technical interviews." />
          <SkillCloud />
        </TabsContent>
      </Tabs>
    </div>
  );
}
