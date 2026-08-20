import { useReveal } from '@/hooks/useReveal'
import { updates } from '@/data/content'
import type { Update } from '@/data/content'

/**
 * Recent work and announcements.
 *
 * Driven entirely by the `updates` array in src/data/content.ts — add the
 * newest entry at the top of that array and it appears here. Every field
 * except `id`, `date`, `category`, `title` and `summary` is optional.
 */
export function Updates() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Recent work
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
              What we have been doing.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ink)]/60">
            Partnerships, meetings, and sessions the foundation has taken part in — updated
            as the work happens.
          </p>
        </div>

        <ol className="mt-16 relative border-l border-[var(--line)] ml-2 md:ml-4">
          {updates.map((update, index) => (
            <UpdateEntry key={update.id} update={update} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function UpdateEntry({ update, index }: { update: Update; index: number }) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className="reveal relative pl-8 md:pl-12 pb-14 last:pb-0"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span
        className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full bg-[var(--marigold)] ring-4 ring-[var(--cream)]"
        aria-hidden
      />

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--terracotta)]">
          {update.category}
        </span>
        <span className="h-1 w-1 rounded-full bg-[var(--ink)]/25" aria-hidden />
        <span className="text-xs text-[var(--ink)]/55">{update.date}</span>
      </div>

      <div className="mt-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--cream-dim)] p-7 md:p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(33,29,22,0.28)]">
        <div
          className={
            update.image ? 'grid md:grid-cols-[0.85fr_1.15fr] gap-7 md:gap-9 items-start' : ''
          }
        >
          {update.image && (
            <figure className="overflow-hidden rounded-[1.15rem] border border-[var(--line)] bg-[var(--cream)]">
              <img
                src={update.image.src}
                alt={update.image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block transition-transform duration-700 hover:scale-[1.03]"
              />
            </figure>
          )}

          <div>
            <h3 className="font-display text-2xl md:text-[1.9rem] leading-snug text-[var(--forest-deep)]">
              {update.title}
            </h3>

            <p className="mt-4 text-[1.02rem] leading-relaxed text-[var(--ink)]/78">
              {update.summary}
            </p>

            {update.body?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-4 text-[0.95rem] leading-relaxed text-[var(--ink)]/60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {update.people && (
          <div className="mt-7 pt-6 border-t border-[var(--line)]">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]/45">
              In attendance
            </div>
            <ul className="mt-4 grid sm:grid-cols-3 gap-4">
              {update.people.map((person) => (
                <li key={person.name}>
                  <div className="text-sm font-semibold text-[var(--forest-deep)]">
                    {person.name}
                  </div>
                  <div className="text-xs text-[var(--ink)]/55 mt-0.5">{person.role}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {update.link && (
          <a
            href={update.link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest)] group"
          >
            {update.link.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </li>
  )
}
