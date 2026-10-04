import { Bot, Code2, Server, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react'
import { skillGroups, type SkillGroup } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons: Record<SkillGroup['icon'], LucideIcon> = {
  shield: ShieldCheck,
  bot: Bot,
  server: Server,
  code: Code2,
  wrench: Wrench,
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="Testing toolkit" />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <li
                key={group.title}
                className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
