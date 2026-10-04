import { Sparkles } from 'lucide-react'
import { domains } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="about-heading" eyebrow="About" title="Quality-first, across regulated industries" />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              I bring <strong className="font-semibold text-foreground">4.5+ years of QA experience</strong>{' '}
              within a 10+ year career, testing products across banking, UPI payments, cryptocurrency,
              healthcare, pharmaceuticals and title insurance.
            </p>
            <p>
              I&apos;m skilled in manual testing, test case design, functional and regression testing, UAT
              and end-to-end defect lifecycle management, with automation using{' '}
              <strong className="font-semibold text-foreground">Selenium WebDriver, Java and TestNG</strong>.
            </p>
            <p>
              I&apos;m currently creating engineering documentation for{' '}
              <strong className="font-semibold text-foreground">Handshake AI</strong>, while learning
              Generative AI and Python.
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border bg-muted p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                Industry domains
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {domains.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-primary/20 bg-background px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-navy p-4 text-navy-foreground">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-white">Currently learning:</span> Generative AI and
                  Python
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
