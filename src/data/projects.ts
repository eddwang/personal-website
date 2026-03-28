export interface Project {
  name: string;
  period: string;
  status?: "WIP" | "Complete";
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "vpn mobile app",
    period: "jun 2025 – present",
    status: "WIP",
    description:
      "cross-platform vpn app built with react native and swift. backend powered by node.js/express, using wireguard tunneling on digitalocean and dynamic vpn config generation via restful apis.",
    tech: ["react native", "swift", "node.js", "express", "wireguard", "digitalocean"],
  },
  {
    name: "pocketpantry",
    period: "jul – sep 2024",
    status: "Complete",
    description:
      "mobile culinary companion app for scanning receipts and tracking grocery inventory. features ingredient management backed by postgresql via supabase.",
    tech: ["react native", "postgresql", "supabase"],
  },
  {
    name: "machine learning stock tracker",
    period: "jun – aug 2024",
    status: "Complete",
    description:
      "algorithmic trading system using bootstrap aggregation over random tree models. incorporates sma, bollinger bands, macd, and other technical indicators.",
    tech: ["python", "scikit-learn", "pandas"],
  },
];
