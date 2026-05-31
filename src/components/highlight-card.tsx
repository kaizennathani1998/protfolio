"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap, type IconName } from "@/components/icon-map";

export function HighlightCard({
  label,
  value,
  icon,
  tags,
  index,
}: {
  label: string;
  value: string;
  icon: string;
  tags: string[];
  index: number;
}) {
  const Icon = iconMap[icon as IconName] ?? iconMap.Network;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6 }}
    >
      <Card className="bio-card h-full">
        <CardContent className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-md border border-primary/20 bg-primary/10 p-2 text-primary">
              <Icon className="size-5" />
            </div>
            <span className="font-mono text-xl font-semibold text-primary">{value}</span>
          </div>
          <p className="text-sm font-medium leading-6">{label}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
