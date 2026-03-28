export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const workEntries: WorkEntry[] = [
  {
    company: "avance biosciences",
    role: "software engineer",
    period: "apr 2024 – present",
    description:
      "developed a laboratory information management system, including sample tracking, equipment management, and an FDA-compliant automated file transfer pipeline for scientific instruments.",
    tech: ["c#", ".net", "python", "javascript", "mysql", "apache nifi", "azure"],
  },
];
