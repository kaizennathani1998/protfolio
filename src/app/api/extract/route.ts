import { NextResponse } from "next/server";

export async function POST() {
  // TODO: Keep future OpenAI, REDCap, or FHIR integrations server-side here.
  // Do not expose API keys or clinical data processing logic to client components.
  return NextResponse.json({ message: "EHR extraction API placeholder. Connect a server-side workflow later." }, { status: 501 });
}
