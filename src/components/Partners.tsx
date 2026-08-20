import { useReveal } from '@/hooks/useReveal'
import { partners } from '@/data/content'
import type { Partner } from '@/data/content'

export function Partners() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="partners" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal max-w-xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
            Who we work with
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
            Partners and institutions.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  const rotate = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-0' : 'rotate-1'

  return (
    <div
      ref={ref}
      className={`reveal ${rotate} hover:rotate-0 transition-transform duration-500 rounded-[1.5rem] border border-[var(--line)] bg-[var(--cream-dim)] p-7 flex flex-col justify-between min-h-[240px] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(33,29,22,0.28)]`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--terracotta)]">
          {partner.kind}
        </div>
        <h3 className="font-display text-xl leading-snug text-[var(--forest-deep)] mt-3">
          {partner.name}
        </h3>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-[var(--ink)]/60">{partner.note}</p>
    </div>
  )
}
