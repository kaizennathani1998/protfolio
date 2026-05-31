import { Badge } from "@/components/ui/badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <Badge variant="secondary" className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
