"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitBranch, Mail, Rocket, Sparkles } from "lucide-react";
import { AnimatedAvatar } from "@/components/animated-avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";

export function InterviewWelcomeModal({
  company,
  name,
  message,
}: {
  company: string;
  name?: string;
  message?: string;
}) {
  const [open, setOpen] = useState(true);
  const [now, setNow] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => {
      setNow(new Intl.DateTimeFormat(undefined, { dateStyle: "full", timeStyle: "short" }).format(new Date()));
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  function close() {
    setOpen(false);
  }

  const greeting = name
    ? `Hi ${name}, thank you for the interview opportunity with ${company}.`
    : `Hi, thank you for the interview opportunity with ${company}.`;

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? setOpen(true) : close())}>
      <DialogContent className="overflow-hidden border-primary/20 bg-background/95 sm:max-w-2xl">
        <div className="absolute right-8 top-8 text-primary/70"><Sparkles className="size-6 animate-pulse" /></div>
        <DialogHeader>
          <DialogTitle className="text-3xl">Welcome</DialogTitle>
          <DialogDescription>{now}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 sm:grid-cols-[8rem_1fr] sm:items-center">
          <AnimatedAvatar compact />
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-8">{greeting} {message || siteConfig.interview.defaultMessage}</p>
            <div className="flex flex-wrap gap-2">
              <Button asChild onClick={close}><Link href="/projects">Explore Projects</Link></Button>
              <Button asChild variant="outline" className="glass-button" onClick={close}><Link href="/demo"><Rocket data-icon="inline-start" /> View Live Demos</Link></Button>
              <Button asChild variant="outline" className="glass-button"><a href={siteConfig.links.github} target="_blank" rel="noreferrer"><GitBranch data-icon="inline-start" /> Open GitHub</a></Button>
              <Button asChild variant="ghost" onClick={close}><Link href="/contact"><Mail data-icon="inline-start" /> Contact Me</Link></Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
