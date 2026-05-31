"use client";

import { useEffect, useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LinkBuilderForm() {
  const [company, setCompany] = useState("fred-hutch");
  const [name, setName] = useState("Hiring Team");
  const [role, setRole] = useState("Bioinformatics Scientist");
  const [message, setMessage] = useState("");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => setOrigin(window.location.origin), 0);
    return () => window.clearTimeout(id);
  }, []);

  const url = useMemo(() => {
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (role) params.set("role", role);
    if (message) params.set("message", message);
    return `${origin}/interview/${company || "your-team"}?${params.toString()}`;
  }, [company, name, role, message, origin]);

  return (
    <Card className="bio-card mx-auto max-w-3xl">
      <CardHeader><CardTitle>Personalized interview link</CardTitle></CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company slug</Label>
            <Input id="company" value={company} onChange={(event) => setCompany(event.target.value)} placeholder="fred-hutch" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Interviewer name</Label>
            <Input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Dr. Smith" />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" value={role} onChange={(event) => setRole(event.target.value)} placeholder="Clinical Bioinformatics Scientist" />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="message">Optional custom message</Label>
            <Textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Looking forward to discussing clinical AI and oncology data systems." />
          </div>
        </div>
        <div className="rounded-md border border-border/70 bg-background/60 p-4 font-mono text-sm break-all">{url}</div>
        <div className="flex flex-wrap gap-2">
          <CopyButton value={url} label="Copy link" />
          <Button asChild variant="outline" className="glass-button"><a href={url} target="_blank" rel="noreferrer">Open preview</a></Button>
        </div>
      </CardContent>
    </Card>
  );
}
