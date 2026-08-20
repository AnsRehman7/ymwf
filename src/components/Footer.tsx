import { contact, foundation, pillars, socials } from '@/data/content'

export function Footer() {
  const marqueeItems = pillars.map((pillar) => pillar.name)

  return (
    <footer className="relative bg-[var(--forest-deep)] text-[var(--cream)] pt-16 pb-8 overflow-hidden">
      <div className="overflow-hidden border-y border-[var(--cream)]/10 py-4 mb-14">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 font-display text-lg text-[var(--cream)]/35 uppercase tracking-widest"
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--marigold)] text-[var(--forest-deep)] font-display text-sm">
              YM
            </span>
            <span className="font-display text-lg">{foundation.name}</span>
          </div>
          <p className="mt-4 text-sm text-[var(--cream)]/55 max-w-sm leading-relaxed">
            {foundation.mission}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-[var(--cream)]/70 hover:text-[var(--marigold-bright)] transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cream)]/40 mb-4">
            Explore
          </div>
          <ul className="space-y-2.5 text-sm text-[var(--cream)]/70">
            <li>
              <a href="#about" className="hover:text-[var(--marigold-bright)] transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-[var(--marigold-bright)] transition-colors">
                What we do
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-[var(--marigold-bright)] transition-colors">
                Recent work
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-[var(--marigold-bright)] transition-colors">
                Partners
              </a>
            </li>
            <li>
              <a href="#involved" className="hover:text-[var(--marigold-bright)] transition-colors">
                Get involved
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cream)]/40 mb-4">
            Reach us
          </div>
          <ul className="space-y-2.5 text-sm text-[var(--cream)]/70">
            <li>{contact.office}</li>
            <li>
              <a
                href={contact.phoneHref}
                className="hover:text-[var(--marigold-bright)] transition-colors"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[var(--marigold-bright)] transition-colors break-all"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14 pt-6 border-t border-[var(--cream)]/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--cream)]/40">
        <span>
          © {new Date().getFullYear()} {foundation.name}, {foundation.city}.
        </span>
        <span>Non-profit organisation · Punjab, Pakistan.</span>
      </div>
    </footer>
  )
}
