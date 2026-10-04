export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
