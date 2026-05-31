"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export type Project = (typeof siteConfig.projects)[number];

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div layout whileHover={{ y: -6 }} className="h-full">
      <Card className={cn("bio-card group h-full overflow-hidden", featured && "min-h-80")}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="mt-2 text-base">{project.tagline}</CardDescription>
            </div>
            <Badge variant="outline">{project.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="grid gap-4 text-sm leading-6 text-muted-foreground">
            <p><span className="text-foreground">Problem:</span> {project.problem}</p>
            <p><span className="text-foreground">Built:</span> {project.contribution}</p>
            <p><span className="text-foreground">Impact:</span> {project.impact}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.github ? (
              <Button asChild variant="outline" className="glass-button">
                <a href={project.github} target="_blank" rel="noreferrer"><GitBranch data-icon="inline-start" /> GitHub</a>
              </Button>
            ) : null}
            <Button variant="ghost" onClick={() => setOpen((value) => !value)}>
              <ChevronDown data-icon="inline-start" className={cn("transition-transform", open && "rotate-180")} />
              View details
            </Button>
          </div>
          {open ? (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="rounded-md border border-border/70 bg-background/45 p-4">
              <p className="mb-3 text-sm font-medium">Technical stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
              </div>
              <Button asChild variant="link" className="mt-3 px-0">
                <a href="/demo">Open related demos <ExternalLink data-icon="inline-end" /></a>
              </Button>
            </motion.div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
