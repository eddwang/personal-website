"use client";

import Link from "next/link";

export default function Nav() {
  const navLinks = [
    { href: "/", label: "experience" },
    { href: "/about", label: "about" },
  ];

  return (
    <nav className="flex items-baseline justify-between">
      <span className="text-sm font-medium tracking-wide text-[var(--color-primary)]">
        edward wang
      </span>

      <div className="flex gap-6 text-sm text-[var(--color-muted)]">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            {label}
          </Link>
        ))}
        <a
          href="mailto:edwang613@gmail.com"
          className="transition-colors hover:text-[var(--color-primary)]"
        >
          contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--color-primary)]"
        >
          resume
        </a>
      </div>
    </nav>
  );
}
