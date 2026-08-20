import { useReveal } from '@/hooks/useReveal'
import { pillars } from '@/data/content'
import type { Pillar } from '@/data/content'

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`reveal grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 border-b border-[var(--line)] last:border-none ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div
        className={`relative aspect-[5/4] rounded-[1.5rem] overflow-hidden border border-[var(--line)] ${
          index % 2 === 0 ? 'bg-[var(--forest)]' : 'bg-[var(--terracotta)]'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            lang="ur"
            dir="rtl"
            className="font-display text-[6.5rem] leading-none text-[var(--cream)]/15 select-none"
          >
            {pillar.urduTag}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-7">
          <div
            lang="ur"
            dir="rtl"
            className="font-display text-5xl leading-tight text-[var(--cream)]"
          >
            {pillar.urduTag}
          </div>
          <div className="text-[var(--cream)]/75 text-sm mt-2">{pillar.name}</div>
        </div>
        <span className="absolute top-6 right-6 text-xs uppercase tracking-[0.18em] text-[var(--cream)]/60">
          0{index + 1}
        </span>
      </div>

      <div>
        <h3 className="font-display text-2xl md:text-3xl text-[var(--forest-deep)]">
          {pillar.name}
        </h3>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-[var(--ink)]/78">
          {pillar.summary}
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--ink)]/60">
          {pillar.detail}
        </p>
      </div>
    </div>
  )
}

export function Programs() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="programs" className="relative py-24 md:py-32 bg-[var(--cream-dim)]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
            What we do
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
            Four areas, one purpose.
          </h2>
        </div>

        <div className="mt-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
