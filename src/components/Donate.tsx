import { useReveal } from '@/hooks/useReveal'
import { foundation, waysToHelp } from '@/data/content'
import type { Way } from '@/data/content'

export function Donate() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="involved" className="relative py-24 md:py-32 bg-[var(--cream-dim)]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Get involved
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-[3rem] leading-[1.08] text-[var(--forest-deep)]">
              Three ways to be part of this.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-[var(--ink)]/75 max-w-sm">
              {foundation.tagline}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {waysToHelp.map((way, index) => (
              <WayCard key={way.title} way={way} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WayCard({ way, index }: { way: Way; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-6 flex flex-col hover:border-[var(--marigold)]/60 transition-colors duration-300"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="h-8 w-8 rounded-full bg-[var(--marigold)]/15 text-[var(--terracotta)] font-display flex items-center justify-center text-sm mb-4">
        {index + 1}
      </div>
      <h3 className="font-semibold text-[var(--forest-deep)]">{way.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">{way.body}</p>
      <a
        href={way.cta.href}
        {...(way.cta.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest)] group"
      >
        {way.cta.label}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  )
}
