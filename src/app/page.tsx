import WorkEntryCard from "@/components/WorkEntry";
import ProjectCard from "@/components/ProjectCard";
import { workEntries } from "@/data/work";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
          work
        </h2>
        {workEntries.map((entry) => (
          <WorkEntryCard key={entry.company} entry={entry} />
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
          projects
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
          education
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-medium text-[var(--color-primary)]">georgia institute of technology</span>
              <span className="text-base text-[var(--color-muted)]">jan 2024 – dec 2026</span>
            </div>
            <p className="text-base text-[var(--color-secondary)]">ms computer science</p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-medium text-[var(--color-primary)]">texas a&amp;m university</span>
              <span className="text-base text-[var(--color-muted)]">aug 2019 – aug 2023</span>
            </div>
            <p className="text-base text-[var(--color-secondary)]">bs biochemistry</p>
            <p className="text-base text-[var(--color-secondary)]">minors in computer science & psychology</p>
          </div>
        </div>
      </section>
    </>
  );
}
