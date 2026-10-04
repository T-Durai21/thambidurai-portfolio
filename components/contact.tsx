import { Code2 as Github, Globe as Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const channels = [
    profile.email && {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.linkedin && {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.linkedin,
    },
    profile.github && {
      icon: Github,
      label: 'GitHub',
      value: profile.github.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.github,
    },
    { icon: MapPin, label: 'Location', value: profile.location },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">Contact</p>
            <h2 id="contact-heading" className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {"Let's build reliable AI systems together"}
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-navy-foreground/80">
              {profile.contactNote}
            </p>
          </div>

          <ul className="grid gap-4">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-navy-foreground/70">{label}</span>
                    <span className="block truncate font-semibold text-white">{value}</span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-teal/50 hover:bg-white/10"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      {content}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-navy-foreground/60 sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>QA Engineer · Generative AI · {profile.location}</p>
        </footer>
      </div>
    </section>
  )
}
