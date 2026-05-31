"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap, type IconName } from "@/components/icon-map";
import { siteConfig } from "@/lib/site-config";

export function WhatIBuildSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {siteConfig.whatIBuild.map((item, index) => {
        const Icon = iconMap[item.icon as IconName] ?? iconMap.Network;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, rotateX: 2, rotateY: index === 1 ? 0 : index === 0 ? -2 : 2 }}
            className="h-full [perspective:900px]"
          >
            <Card className="bio-card h-full overflow-hidden">
              <CardContent className="relative flex min-h-72 flex-col gap-5 p-6">
                <div className="absolute -right-10 -top-12 size-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-fit rounded-md border border-primary/20 bg-primary/10 p-3 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
