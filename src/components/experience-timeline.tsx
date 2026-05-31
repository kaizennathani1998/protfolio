"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl py-4">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/45 to-transparent md:left-1/2" />
      <div className="flex flex-col gap-8">
        {siteConfig.experience.map((item, index) => {
          const alignRight = index % 2 === 0;
          return (
            <motion.article
              key={`${item.org}-${item.role}`}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid gap-4 pl-12 md:grid-cols-[1fr_3rem_1fr] md:items-start md:gap-6 md:pl-0"
            >
              <div className={alignRight ? "hidden md:block" : "md:col-start-1"}>
                {!alignRight ? <TimelineCard item={item} index={index} /> : null}
              </div>
              <div className="absolute left-0 top-6 md:static md:col-start-2 md:flex md:justify-center">
                <div className="relative flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_34px_rgba(34,211,238,0.35)]">
                  <span className="size-2.5 rounded-full bg-primary" />
                </div>
              </div>
              <div className={alignRight ? "md:col-start-3" : "hidden md:block"}>
                {alignRight ? <TimelineCard item={item} index={index} /> : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: (typeof siteConfig.experience)[number];
  index: number;
}) {
  return (
    <Card className="bio-card overflow-hidden">
      <CardContent className="relative p-6">
        <div className="absolute -right-12 -top-16 size-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                0{index + 1}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5 text-primary" />
                {item.dates}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">{item.org}</h3>
            <p className="mt-1 text-base text-primary">{item.role}</p>
          </div>
          <span className="w-fit rounded-full border border-border/70 bg-background/45 px-3 py-1 text-xs text-muted-foreground">
            {item.period}
          </span>
        </div>
        <ul className="grid gap-3 text-sm leading-6 text-muted-foreground">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
