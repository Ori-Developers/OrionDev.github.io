import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Discord Bot",
    description:
      "A powerful, modular Discord bot with built-in moderation, utility features, and an extensible plugin system. Currently in early development.",
    tags: ["Discord.js", "TypeScript", "Planned"],
    status: "Coming Soon",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    title: "API Wrapper",
    description:
      "A lightweight, type-safe wrapper for popular APIs. Zero dependencies, full TypeScript support, and comprehensive documentation.",
    tags: ["TypeScript", "REST API", "Planned"],
    status: "Coming Soon",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Dev Utilities",
    description:
      "A collection of developer utilities for common tasks: code formatting, project scaffolding, and productivity tools.",
    tags: ["CLI", "Utilities", "Planned"],
    status: "Coming Soon",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-primary" />
          <span className="font-mono text-sm uppercase tracking-widest text-primary">What We're Building</span>
        </div>

        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Projects in the Works</h2>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
          We're just getting started. Here's a peek at what we're working on.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group block">
              <Card className="h-full border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                      {project.icon}
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
