import Link from "next/link";
import { GitBranch, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-sm text-primary shadow-[0_0_32px_rgba(34,211,238,0.2)]">
            KN
          </span>
          <span className="hidden text-sm tracking-wide sm:inline">Kaizen Nathani</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GitBranch data-icon="inline-start" />
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">
              <Mail data-icon="inline-start" />
              Contact
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
