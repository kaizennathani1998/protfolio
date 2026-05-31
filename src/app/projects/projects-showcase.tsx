"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ProjectsShowcase() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...siteConfig.projectCategories];
  const projects = useMemo(
    () => siteConfig.projects.filter((project) => category === "All" || project.category === category),
    [category],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <Button key={item} variant={item === category ? "default" : "outline"} className={item === category ? "" : "glass-button"} onClick={() => setCategory(item)}>
            {item}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  );
}
