export type DemoStatus = "Live" | "GitHub Only" | "Coming Soon" | "Private Demo";

export const siteConfig = {
  candidate: {
    name: "Kaizen Nathani",
    title: "Bioinformatics Scientist | Data Engineer | Clinical Informatics",
    email: "nathanikaizen@gmail.com",
    pitch:
      "I build automated bioinformatics pipelines and AI-ready data systems for translational research and clinical decision-making.",
    summary:
      "Kaizen Nathani works across clinical NGS, oncology informatics, AI-assisted biomedical automation, and data engineering. His portfolio spans variant review support, sequencing QC automation, PhIP-Seq and multi-omics cancer research, clinical data extraction, and ML-ready pipelines for translational precision oncology.",
  },
  links: {
    email: "mailto:nathanikaizen@gmail.com",
    linkedin: "https://www.linkedin.com/in/kaizenbio/",
    github: "https://github.com/kaizennathani1998",
    dockerhub: "https://hub.docker.com/u/intruder404",
    resume: "/Kaizen_Nathani_Resume.pdf",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Live Demos", href: "/demo" },
    { label: "Contact", href: "/contact" },
  ],
  highlights: [
    { label: "Clinical NGS + oncology workflows", value: "NGS", icon: "Dna", tags: ["AML/MDS", "variant review"] },
    { label: "AI-assisted EHR extraction", value: "LLM", icon: "BrainCircuit", tags: ["JSON", "clinical notes"] },
    { label: "FHIR / REDCap-ready structured data", value: "FHIR", icon: "Workflow", tags: ["interoperability"] },
    { label: "Ion Torrent / Genexus QC automation", value: "QC", icon: "Activity", tags: ["coverage", "artifacts"] },
    { label: "HPC, AWS, Docker, Nextflow", value: "Cloud", icon: "CloudCog", tags: ["SLURM", "containers"] },
    { label: "PhIP-Seq and multi-omics cancer research", value: "Omics", icon: "Microscope", tags: ["CRC", "biomarkers"] },
    { label: "Variant review and clinical reporting support", value: "Report", icon: "FileSearch", tags: ["ClinVar", "COSMIC"] },
    { label: "ML-ready biomedical data pipelines", value: "Pipes", icon: "Network", tags: ["ETL", "analytics"] },
  ],
  whatIBuild: [
    {
      title: "Clinical Bioinformatics Systems",
      description:
        "CLIA/CAP-compliant clinical bioinformatics systems for somatic variant analysis, NGS quality control, and automated reporting.",
      icon: "Dna",
      tags: ["NGS", "CLIA/CAP", "Variants Analysis"],
    },
    {
      title: "AI Agents for Healthcare Data",
      description:
        "LLM-assisted extraction and review systems that turn clinical text into structured, auditable outputs.",
      icon: "Bot",
      tags: ["LLMs", "FHIR"],
    },
    {
      title: "Data Engineering for Precision Oncology",
      description:
        "Cloud/HPC-aware pipelines that make biomedical data reliable, traceable, and analysis-ready.",
      icon: "DatabaseZap",
      tags: ["AWS", "Docker", "Nextflow", "CI/CD"],
    },
  ],
  experience: [
    {
      org: "Fred Hutchinson Cancer Center",
      role: "Bioinformatics Analyst III",
      period: "Current",
      dates: "2024 - Present",
      highlights: [
        "Clinical bioinformatics support for AML/MDS precision medicine workflows",
        "MyeloMATCH / clinical NGS variant analysis and QC",
        "Ion Torrent / Genexus sequencing run monitoring",
        "Variant review, reporting support, automation, and QC investigations",
        "Sequencing artifact monitoring and coverage-based QC dashboards",
      ],
    },
    {
      org: "Johns Hopkins Medicine",
      role: "Research Technologist, Bioinformatics",
      period: "Cancer informatics research",
      dates: "2021 - 2024",
      highlights: [
        "PhIP-Seq antibody profiling in colorectal cancer research",
        "Statistical modeling for peptide/antigen-level reactivity",
        "Pipeline maintenance, data processing, and translational cancer informatics support",
      ],
    },
    {
      org: "Regeneron",
      role: "Summer Intern",
      period: "Biotech / pharma research",
      dates: "Summer 2023",
      highlights: [
        "AI and computational work related to biomedical data",
        "Comparator patent, protein structure, and sequence analysis exposure",
        "Applied data science in a biotech/pharma research setting",
      ],
    },
    {
      org: "Johns Hopkins Cancer Research / Graduate Work",
      role: "Graduate Research",
      period: "Precision oncology research",
      dates: "Graduate research",
      highlights: [
        "Multi-omics analysis in prostate and colorectal cancer",
        "Transcriptomics, APA, miRNA, EMT signatures, clustering, and survival-informed analysis",
        "Biomarker discovery and translational oncology analysis",
      ],
    },
    {
      org: "Johns Hopkins Center for Education and Reform in Research",
      role: "Data Engineer",
      period: "Data systems",
      dates: "2020 - 2021",
      highlights: [
        "Data pipeline development",
        "Process automation",
        "Analytics workflows",
        "Structured data transformation and reporting",
      ],
    },
    {
      org: "CitiusTech",
      role: "Clinical Informatician",
      period: "Healthcare technology",
      dates: "2019 - 2020",
      highlights: [
        "Healthcare data workflows",
        "Clinical informatics systems",
        "EHR and structured data understanding",
        "Healthcare interoperability exposure",
      ],
    },
    {
      org: "Moog Medical",
      role: "Data Analyst Intern",
      period: "Medical device analytics",
      dates: "2018",
      highlights: [
        "Data analysis and reporting",
        "Healthcare and medical device data exposure",
        "Dashboarding and workflow improvement",
      ],
    },
  ],
  education: [
    {
      school: "Johns Hopkins University",
      program: "Graduate training in bioinformatics, cancer genomics, and translational research",
      dates: "Graduate study",
      details: [
        "Multi-omics cancer research across prostate and colorectal cancer contexts",
        "Transcriptomics, APA, miRNA, EMT signatures, clustering, and survival-informed analysis",
        "Precision oncology, biomarker discovery, and reproducible biomedical analysis",
      ],
    },
    {
      school: "Biomedical Data Science Foundation",
      program: "Applied bioinformatics, clinical informatics, and healthcare analytics",
      dates: "Academic + applied training",
      details: [
        "Clinical data workflows, structured healthcare data, and EHR-oriented thinking",
        "Statistics, programming, visualization, and biomedical research communication",
        "Hands-on translation of research questions into analysis-ready datasets",
      ],
    },
  ],
  skills: [
    {
      group: "Bioinformatics",
      items: ["Python", "R", "Bash", "NGS", "VCF/BAM", "variant analysis", "PhIP-Seq", "RNA-seq", "multi-omics", "LoFreq", "GATK-style workflows", "samtools", "bedtools"],
    },
    {
      group: "Clinical Informatics",
      items: ["EHR", "FHIR", "REDCap", "clinical data extraction", "oncology reporting", "clinical workflows"],
    },
    {
      group: "AI/LLMs",
      items: ["LLM agents", "prompt engineering", "structured extraction", "JSON validation", "AI-assisted review systems"],
    },
    {
      group: "Cloud/HPC",
      items: ["AWS", "SLURM", "Docker", "Singularity/Apptainer", "Nextflow", "GitHub Actions"],
    },
    {
      group: "Data Visualization",
      items: ["R", "ggplot2", "Plotly", "Recharts", "dashboards", "QC visualizations"],
    },
    {
      group: "Software Engineering",
      items: ["TypeScript", "Next.js", "React", "SQL", "APIs", "data modeling", "Git", "REST-style architecture"],
    },
  ],
  projectCategories: ["Clinical Bioinformatics", "AI / LLM", "Data Engineering", "Cancer Research", "QC / Visualization"],
  projects: [
    {
      title: "EHR Agent",
      category: "AI / LLM",
      tagline: "LLM-powered clinical notes to structured outputs.",
      problem: "Clinical notes contain high-value details that are difficult to reuse for research databases or review workflows.",
      contribution:
        "Built an MVP for extracting structured clinical information from notes or mock records with JSON validation and human-review-friendly output.",
      stack: ["Next.js", "TypeScript", "LLM agents", "JSON Schema", "FHIR/REDCap-ready models"],
      impact: "Demonstrates a practical clinical informatics path from narrative text to auditable structured data.",
      tags: ["Clinical text", "REDCap", "FHIR", "LLM"],
      github: "https://github.com/kaizennathani1998/EHR-AIAgent",
    },
    {
      title: "Ion Torrent Amplicon Capture Sequencing QC Dashboard",
      category: "QC / Visualization",
      tagline: "Run-level and sample-level sequencing QC for clinical NGS.",
      problem: "Homopolymer-region artifacts and flow-rate or fluidics issues can complicate variant review.",
      contribution:
        "Designed a dashboard framework for automated amplicon coverage monitoring, sequencing artifacts tracking, and clinical sequencing QC investigation.",
      stack: ["Recharts", "Python/R", "Ion Torrent", "Genexus", "QC analytics"],
      impact: "Supports faster investigation of false-positive results and run-level sequencing behavior by pathologists on a no-code interface.",
      tags: ["Genexus", "coverage", "homopolymers", "QC"],
    },
    {
      title: "VCF Harmonizer for CloneTracker",
      category: "Data Engineering",
      tagline: "Cross-platform VCF normalization into CloneTracker-ready TSVs.",
      problem: "Variant calls from different platforms and callers rarely align cleanly for downstream clonal evolution tools.",
      contribution:
        "Planned a harmonization workflow for caller-specific parsing, normalization, and ML-ready tabular transformation.",
      stack: ["Python", "VCF", "TSV", "variant normalization", "ETL"],
      impact: "Improves compatibility across sequencing workflows and downstream clonal tracking analysis.",
      tags: ["VCF", "CloneTracker", "ETL", "clonal evolution"],
    },
    {
      title: "ARscore Statistical Modeling for PhIP-Seq",
      category: "Cancer Research",
      tagline: "Species-level antigen profiling from antibody reactivity data.",
      problem: "PhIP-Seq peptide-level reactivity needs reproducible modeling to support cancer research interpretation.",
      contribution:
        "Created a statistical scoring framework for peptide and antigen-level reactivity in a colorectal cancer research context.",
      stack: ["R", "statistics", "PhIP-Seq", "reproducible analysis"],
      impact: "Makes antibody profiling outputs easier to compare, summarize, and investigate.",
      tags: ["PhIP-Seq", "CRC", "antibody profiling"],
      github: "https://github.com/kaizennathani1998/ARscore",
    },
    {
      title: "Variant Reviewer AI Agent",
      category: "Clinical Bioinformatics",
      tagline: "AI-assisted clinical significance review for variants.",
      problem: "Variant review requires comparing evidence across multiple clinical and public knowledge sources.",
      contribution:
        "Designed an AI-assisted review pattern with ClinVar/dbSNP/COSMIC-style placeholders, evidence comparison, and human-in-the-loop summaries.",
      stack: ["LLM agents", "ClinVar-style APIs", "COSMIC-style sources", "TypeScript", "clinical reporting"],
      impact: "Frames a practical assistant for clinical reporting support without replacing expert review.",
      tags: ["variants", "ClinVar", "COSMIC", "review"],
    },
  ],
  demos: [
    {
      title: "EHR Agent",
      status: "GitHub Only" as DemoStatus,
      description: "LLM-assisted EHR-to-structured-data extraction MVP.",
      github: "https://github.com/kaizennathani1998/EHR-AIAgent",
      live: "",
      docker: "",
      stack: ["Next.js", "LLM", "JSON validation", "FHIR/REDCap"],
      run: {
        npm: "npm install && npm run dev",
        python: "python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt",
        docker: "docker run -p 3000:3000 intruder404/ehr-agent:latest",
      },
    },
    {
      title: "CloneTracker VCF Harmonizer",
      status: "Coming Soon" as DemoStatus,
      description: "Harmonizes multi-caller/platform VCFs into CloneTracker-compatible TSVs.",
      github: "",
      live: "",
      docker: "",
      stack: ["Python", "VCF", "TSV", "ETL"],
      run: {
        npm: "npm install && npm run dev",
        python: "python harmonize_vcf.py --input sample.vcf --output clonetracker.tsv",
        docker: "docker run -v $PWD:/data intruder404/vcf-harmonizer:latest",
      },
    },
    {
      title: "Variant Reviewer AI Agent",
      status: "Coming Soon" as DemoStatus,
      description: "AI-assisted variant significance review across multiple knowledge sources.",
      github: "",
      live: "",
      docker: "",
      stack: ["LLM agents", "ClinVar", "dbSNP", "COSMIC"],
      run: {
        npm: "npm install && npm run dev",
        python: "python variant_review.py --variant BRAF:V600E",
        docker: "docker run -p 8080:8080 intruder404/variant-reviewer:latest",
      },
    },
  ],
  companyNames: {
    astrazeneca: "AstraZeneca",
    "fred-hutch": "Fred Hutch",
    "johns-hopkins": "Johns Hopkins",
    jhu: "Johns Hopkins",
    regeneron: "Regeneron",
  } as Record<string, string>,
  interview: {
    defaultMessage:
      "I truly appreciate your time and hope you enjoy exploring this portfolio and selected technical demos.",
  },
};

export function companyFromSlug(slug?: string) {
  if (!slug) return "your team";
  return (
    siteConfig.companyNames[slug] ??
    slug
      .split("-")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}
