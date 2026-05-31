"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Mail, Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { AnimatedAvatar } from "@/components/animated-avatar";
import { OrbitalBioGraphic } from "@/components/orbital-bio-graphic";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-4 sm:gap-5">
            <AnimatedAvatar compact />
            <div className="min-w-0">
              <motion.p
                className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary/80"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.18 }}
              >
                BIOINFORMATICS SYSTEMS X DATA ENGINEERING
              </motion.p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                {siteConfig.candidate.name}
              </h1>
            </div>
          </div>
          <p className="text-xl font-medium text-primary sm:text-2xl">{siteConfig.candidate.title}</p>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{siteConfig.candidate.pitch}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link href="/about">About <ArrowRight data-icon="inline-end" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="glass-button"><Link href="/projects">Projects</Link></Button>
          <Button asChild size="lg" variant="outline" className="glass-button"><Link href="/demo"><Rocket data-icon="inline-start" /> Live Demos</Link></Button>
          <Button asChild size="lg" variant="ghost"><a href={siteConfig.links.github} target="_blank" rel="noreferrer"><GitBranch data-icon="inline-start" /> GitHub</a></Button>
          <Button asChild size="lg" variant="ghost"><Link href="/contact"><Mail data-icon="inline-start" /> Contact</Link></Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 42, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <OrbitalBioGraphic />
      </motion.div>
    </section>
  );
}
