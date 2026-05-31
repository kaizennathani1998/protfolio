"use client";

import { useEffect, useState } from "react";
import { InterviewWelcomeModal } from "@/components/interview-welcome-modal";
import { companyFromSlug } from "@/lib/site-config";

export function HomeInterviewWelcome() {
  const [details, setDetails] = useState<{ company: string; name?: string; message?: string } | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const companySlug = searchParams.get("company");
      if (!companySlug) return;
      setDetails({
        company: companyFromSlug(companySlug),
        name: searchParams.get("name") ?? undefined,
        message: searchParams.get("message") ?? undefined,
      });
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!details) return null;

  return (
    <InterviewWelcomeModal
      company={details.company}
      name={details.name}
      message={details.message}
    />
  );
}
