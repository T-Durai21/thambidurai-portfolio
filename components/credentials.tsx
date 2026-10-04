import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Credentials() {
  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="credentials-heading" eyebrow="Credentials" title="Certifications and education" />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground">
              <Award className="size-4 text-primary" aria-hidden="true" />
              Certifications
            </h3>
            <ul className="mt-5 grid gap-3">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex flex-col gap-1 rounded-xl border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                  {c.inProgress ? (
                    <span className="w-fit shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                      In progress
                    </span>
                  ) : (
                    c.year && <span className="shrink-0 text-sm font-medium text-muted-foreground">{c.year}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground">
              <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              Education
            </h3>
            <ul className="mt-5 grid gap-3">
              {education.map((e) => (
                <li key={e.degree} className="rounded-xl bg-navy p-6 text-navy-foreground">
                  <p className="text-lg font-semibold text-white">{e.degree}</p>
                  <p className="mt-1 text-teal">{e.institution}</p>
                  <p className="mt-3 text-sm text-navy-foreground/70">{e.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
