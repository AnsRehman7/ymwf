import { useEffect, useRef } from 'react'
import { mediaQuoteEnglish, mediaQuoteUrdu, pillars } from '@/data/content'

/**
 * The dark mission band.
 *
 * This section previously ran animated counters. The foundation has not
 * published verified figures (students supported, families reached, etc.), so
 * it carries the mission and the four areas of focus instead. When real numbers
 * are confirmed, they belong here.
 */
export function Impact() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const cards = node.querySelectorAll('.reveal-scale')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        }
      },
      { threshold: 0.3 },
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--forest-deep)] text-[var(--cream)] overflow-hidden"
    >
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[30rem] w-[46rem] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(214,138,45,0.25), transparent 70%)' }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--marigold-bright)]">
          Why we do this
        </span>

        <blockquote className="mt-8 max-w-3xl">
          <p
            lang="ur"
            dir="rtl"
            className="font-display text-[1.75rem] md:text-[2.4rem] leading-[1.9]"
          >
            {mediaQuoteUrdu}
          </p>
          <footer className="mt-5 text-[var(--cream)]/60 text-base md:text-lg italic">
            {mediaQuoteEnglish}
          </footer>
        </blockquote>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="reveal-scale border-t border-[var(--cream)]/15 pt-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl text-[var(--marigold-bright)]">
                0{index + 1}
              </div>
              <div className="mt-2 text-sm text-[var(--cream)]/65 max-w-[18ch]">
                {pillar.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
