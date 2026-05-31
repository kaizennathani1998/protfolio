import { GraduationCap, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
      {siteConfig.education.map((item) => (
        <Card key={item.school} className="bio-card overflow-hidden">
          <CardContent className="relative flex min-h-72 flex-col gap-5 p-6">
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-md border border-primary/20 bg-primary/10 p-3 text-primary">
                <GraduationCap className="size-6" />
              </div>
              <span className="rounded-full border border-border/70 bg-background/45 px-3 py-1 text-xs text-muted-foreground">
                {item.dates}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{item.school}</h3>
              <p className="mt-2 text-primary">{item.program}</p>
            </div>
            <ul className="mt-auto grid gap-3 text-sm leading-6 text-muted-foreground">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
