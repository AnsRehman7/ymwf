import { useReveal } from '@/hooks/useReveal'
import { foundation, founder } from '@/data/content'

const FACTS = [
  { value: 'Lahore', label: 'Where we work' },
  { value: '04', label: 'Areas of focus' },
  { value: '2026', label: 'MoU signed with UMT' },
]

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Who we are
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
              Every great journey has a beginning.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[var(--ink)]/60">
              {foundation.teamNote}
            </p>
          </div>

          <div className="space-y-6 text-[1.02rem] leading-relaxed text-[var(--ink)]/78 md:pt-3">
            {foundation.missionLong.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream-dim)] px-6 py-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]/45">
                Founded and led by
              </div>
              <div className="mt-2 font-display text-2xl text-[var(--forest-deep)]">
                {founder.name}
              </div>
              <div className="text-sm text-[var(--ink)]/60">{founder.role}</div>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-[var(--line)]">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <div className="font-display text-3xl text-[var(--forest)]">{fact.value}</div>
                  <div className="text-xs text-[var(--ink)]/55 uppercase tracking-wide mt-1">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
