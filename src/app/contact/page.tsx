import type { Metadata } from "next";
import { Container, Download, GitBranch, Link2, Mail } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kaizen Nathani for bioinformatics, clinical informatics, precision oncology, and AI-for-healthcare roles.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        title="Let’s talk biomedical systems"
        description="Open to bioinformatics, clinical informatics, computational biology, precision oncology, and AI-for-healthcare roles."
      />
      <Card className="bio-card mx-auto max-w-3xl">
        <CardContent className="flex flex-col gap-6 p-8">
          <a href={siteConfig.links.email} className="text-2xl font-semibold text-primary">{siteConfig.candidate.email}</a>
          <div className="flex flex-wrap gap-3">
            <Button asChild><a href={siteConfig.links.email}><Mail data-icon="inline-start" /> Email</a></Button>
            <Button asChild variant="outline" className="glass-button"><a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer"><Link2 data-icon="inline-start" /> LinkedIn</a></Button>
            <Button asChild variant="outline" className="glass-button"><a href={siteConfig.links.github} target="_blank" rel="noreferrer"><GitBranch data-icon="inline-start" /> GitHub</a></Button>
            <Button asChild variant="outline" className="glass-button"><a href={siteConfig.links.dockerhub} target="_blank" rel="noreferrer"><Container data-icon="inline-start" /> DockerHub</a></Button>
            <Button asChild variant="outline" className="glass-button"><a href={siteConfig.links.resume}><Download data-icon="inline-start" /> Resume</a></Button>
            <CopyButton value={siteConfig.candidate.email} label="Copy email" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
