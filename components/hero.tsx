import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { openTo, profile, stats } from '@/lib/portfolio-data'

export function Hero() {
  const titleParts = profile.title.split('|').map((p) => p.trim())

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pb-16 pt-32 text-white md:pb-20 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="inline-flex items-center gap-2 text-sm text-brand">
          <MapPin className="size-4" aria-hidden="true" />
          {profile.location}
        </p>

        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-semibold text-brand md:text-lg">
          {titleParts.map((part, i) => (
            <span key={part} className="flex items-center gap-3">
              {i > 0 && <span className="size-1 rounded-full bg-brand/60" aria-hidden="true" />}
              <span>{part}</span>
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-navy-foreground/85 md:text-lg">
          {profile.tagline}
        </p>

        <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy p-4">
              <dt className="text-xs uppercase tracking-widest text-navy-foreground/60">{s.label}</dt>
              <dd className="mt-2 text-lg font-semibold text-white">{s.value}</dd>
              <dd className="mt-1 text-sm text-navy-foreground/65">{s.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-navy-foreground/60">Open to</span>
          {openTo.map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/25 px-3 py-1 text-sm text-navy-foreground"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold text-navy transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            View experience
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact details
          </a>
        </div>
      </div>
    </section>
  )
}
