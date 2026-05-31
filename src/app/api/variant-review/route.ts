import { NextResponse } from "next/server";

export async function POST() {
  // TODO: Connect future ClinVar/dbSNP/COSMIC, AWS Batch, or HPC job submission adapters here.
  // Keep heavy processing outside Vercel and return job links or summaries from external services.
  return NextResponse.json({ message: "Variant review API placeholder. Connect external knowledge sources later." }, { status: 501 });
}
