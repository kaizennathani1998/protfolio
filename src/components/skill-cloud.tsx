import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillCloud() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {siteConfig.skills.map((skill) => (
        <Card key={skill.group} className="bio-card">
          <CardHeader><CardTitle>{skill.group}</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skill.items.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
