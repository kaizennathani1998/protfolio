import { Code2, Container, ExternalLink, GitBranch } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Demo = (typeof siteConfig.demos)[number];

export function DemoLauncherCard({ demo }: { demo: Demo }) {
  return (
    <Card className="bio-card h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{demo.title}</CardTitle>
            <CardDescription className="mt-2">{demo.description}</CardDescription>
          </div>
          <Badge variant={demo.status === "Live" ? "default" : "secondary"}>{demo.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          {demo.stack.map((tech) => <Badge key={tech} variant="outline">{tech}</Badge>)}
        </div>
        <Accordion>
          <AccordionItem value="run">
            <AccordionTrigger>How to run locally</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3">
                <pre className="code-block"><code>{demo.run.npm}</code></pre>
                <pre className="code-block"><code>{demo.run.python}</code></pre>
                <pre className="code-block"><code>{demo.run.docker}</code></pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button asChild disabled={!demo.live}>
          <a href={demo.live || "#"} target="_blank" rel="noreferrer"><ExternalLink data-icon="inline-start" /> Launch Demo</a>
        </Button>
        <Button asChild variant="outline" className="glass-button" disabled={!demo.github}>
          <a href={demo.github || "#"} target="_blank" rel="noreferrer"><GitBranch data-icon="inline-start" /> View GitHub</a>
        </Button>
        <Button asChild variant="outline" className="glass-button" disabled={!demo.docker}>
          <a href={demo.docker || "#"} target="_blank" rel="noreferrer"><Container data-icon="inline-start" /> Docker Image</a>
        </Button>
        <Button variant="ghost"><Code2 data-icon="inline-start" /> How to Run</Button>
      </CardFooter>
    </Card>
  );
}
