import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Career timeline" />

        <ol className="relative border-l-2 border-border pl-8 md:ml-4 md:pl-12">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+1px)] top-1 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:-left-[calc(3rem+1px)]"
              >
                <Briefcase className="size-3.5" />
              </span>

              <article className="rounded-2xl border bg-card p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-pretty text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 font-medium text-primary">{exp.company}</p>
                  </div>
                  <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground">
                    {exp.current && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                        Current
                      </span>
                    )}
                    <time>{exp.period}</time>
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
