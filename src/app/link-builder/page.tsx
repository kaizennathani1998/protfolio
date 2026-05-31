import type { Metadata } from "next";
import { LinkBuilderForm } from "@/components/link-builder-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Interview Link Builder",
  description: "Generate personalized interview links locally.",
};

export default function LinkBuilderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        title="Interview link builder"
        description="Generate personalized links without editing code. Everything runs locally in the browser."
      />
      <LinkBuilderForm />
    </div>
  );
}
