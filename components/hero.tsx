import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'

export function Hero() {
  const titleParts = profile.title.split('|').map((p) => p.trim())

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pb-20 pt-32 text-white md:pb-28 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-sm text-teal">
          <MapPin className="size-4" aria-hidden="true" />
          {profile.location}
        </p>

        <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-medium text-navy-foreground md:text-lg">
          {titleParts.map((part, i) => (
            <span key={part} className="flex items-center gap-3">
              {i > 0 && <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />}
              <span className={i === 0 ? 'text-teal' : undefined}>{part}</span>
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/80 md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-navy transition-colors hover:bg-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            View Experience
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-white md:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-navy-foreground/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
