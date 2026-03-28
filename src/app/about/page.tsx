import KiwiHover from "@/components/KiwiHover";

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[var(--color-primary)]">about</h1>

      <p className="text-[var(--color-secondary)] leading-relaxed">
        i&apos;m currently a software engineer based in houston, completing a
        masters in computer science at georgia institute of technology. i love
        building things and am always looking for something new to learn.
      </p>

      <p className="text-[var(--color-secondary)] leading-relaxed">
        when i&apos;m not at my desk, you can find me trying new restaurants,
        tinkering, or spending time with my cat{" "}
        <KiwiHover><strong className="text-pink-400">kiwi</strong></KiwiHover>.
      </p>
    </div>
  );
}
