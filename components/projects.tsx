import { FlaskConical } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="projects-heading" eyebrow="Projects" title="Selected work" />

        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="rounded-2xl border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FlaskConical className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 font-medium text-primary">{p.organization}</p>
              <p className="mt-3 text-muted-foreground">{p.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
