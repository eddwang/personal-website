import type { WorkEntry } from "@/data/work";

export default function WorkEntryCard({ entry }: { entry: WorkEntry }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-medium text-[var(--color-primary)]">{entry.company}</span>
        <span className="text-base text-[var(--color-muted)]">{entry.period}</span>
      </div>
      <p className="text-base text-[var(--color-secondary)] mb-1">{entry.role}</p>
      <p className="text-base text-[var(--color-secondary)] mb-3">{entry.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tech.map((t) => (
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
