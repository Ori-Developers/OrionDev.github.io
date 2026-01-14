export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-primary" />
          <span className="font-mono text-sm uppercase tracking-widest text-primary">About Us</span>
        </div>

        <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">A small team with big ideas</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Orion Dev</span> is a tight-knit group of three developers
            who share a passion for building quality software. We focus on{" "}
            <span className="text-primary">Discord tools</span>,{" "}
            <span className="text-secondary">developer utilities</span>, and{" "}
            <span className="text-primary">community platforms</span>.
          </p>
          <p>
            We're not a large collective or an open-source foundation—just a dedicated team working on projects we
            believe in. Quality over quantity, always.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-12">
          {[
            { value: "3", label: "Developers" },
            { value: "100%", label: "Passion" },
            { value: "∞", label: "Ideas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
