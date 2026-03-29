import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-medium text-[var(--color-primary)]">{project.name}</span>
        {project.status === "WIP" && (
          <span className="text-sm text-[var(--color-muted)] border border-[var(--color-border)] px-1.5 py-0.5 rounded">
            in progress
          </span>
        )}
      </div>
      <p className="text-base text-[var(--color-secondary)] mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-sm text-[var(--color-muted)] bg-[#ebebeb] border border-[var(--color-border)] px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
