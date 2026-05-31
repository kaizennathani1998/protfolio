# Kaizen Nathani Portfolio

Production-ready personal interview portfolio for Kaizen Nathani, built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts, Lucide icons, and Vercel-friendly deployment.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Edit Site Content

Most portfolio content lives in:

```text
src/lib/site-config.ts
```

Edit this file to update:

- Candidate profile
- Social links
- Resume path
- Navigation
- Highlight cards
- Experience timeline
- Skills
- Projects
- Demo launcher cards
- Company display-name mappings
- Default interview modal text

## Avatar

The animated avatar component expects:

```text
public/avatar.png
```

If the image is missing or fails to load, the site shows a polished animated fallback avatar.

## Resume PDF

Place the resume here:

```text
public/Kaizen_Nathani_Resume.pdf
```

The contact page already points the resume button to that path.

## Demo Links

Demo cards are configured in `src/lib/site-config.ts` under `demos`.

Each card supports:

- `github`
- `live`
- `docker`
- `status`
- `stack`
- local run commands for npm, Python, and Docker

Heavy backend processing should stay outside Vercel. Use GitHub, Docker, external hosted apps, AWS Batch, REDCap/FHIR APIs, or HPC job systems for real demos later.

## Personalized Interview Links

Use routes like:

```text
/interview/astrazeneca?name=Jennifer
/interview/fred-hutch?name=Dr.%20Smith
/interview/jhu?name=Hiring%20Team&role=Bioinformatics%20Scientist
```

The first-visit modal is dismissed through `localStorage` using a key that includes company and name, so each personalized link can show once.

## Link Builder

Open:

```text
/link-builder
```

Use it to generate interview URLs locally without editing code.

## API Placeholders

Server-side placeholder routes exist at:

```text
src/app/api/extract/route.ts
src/app/api/variant-review/route.ts
```

They intentionally return `501` for now. Future OpenAI, FHIR, REDCap, ClinVar, COSMIC, AWS Batch, or HPC integrations should stay server-side and avoid exposing secrets to the frontend.

## GitHub Push

```bash
git init
git add .
git commit -m "Build Kaizen portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

If this project lives inside another Git repository, stage only the `Bash/Kaizen` folder from the parent repository.

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`
5. Output: handled automatically by Vercel.

No environment variables are required for the current static/config-driven version.
