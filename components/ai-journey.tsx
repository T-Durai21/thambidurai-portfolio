import { BookOpen, GraduationCap, Scale, Smartphone, type LucideIcon } from 'lucide-react'
import { aiJourney, type JourneyItem } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons: Record<JourneyItem['icon'], LucideIcon> = {
  graduation: GraduationCap,
  scale: Scale,
  smartphone: Smartphone,
  book: BookOpen,
}

export function AiJourney() {
  return (
    <section id="ai-journey" aria-labelledby="ai-journey-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="ai-journey-heading" eyebrow="Career transition" title="Generative AI Journey" />

        <ul className="grid gap-5 md:grid-cols-2">
          {aiJourney.map((item) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.title} className="flex gap-4 rounded-2xl border bg-card p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.period && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
