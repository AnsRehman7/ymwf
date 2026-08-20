/**
 * All site copy lives here.
 *
 * Everything in this file is sourced from the foundation's own published
 * material (the Google Sites page and Rana Ahsan's LinkedIn posts). Nothing is
 * invented — if a figure or a name is not in here, it is because the foundation
 * has not published it yet. Add real values as they are confirmed.
 */

export const foundation = {
  name: 'Young Merit Welfare Foundation',
  shortName: 'Young Merit',
  city: 'Lahore',
  tagline:
    'Join Young Merit Welfare Foundation, Lahore, and be a part of meaningful change through education and community service.',
  mission:
    'Young Merit Welfare Foundation, Lahore is a non-profit organization dedicated to supporting underprivileged communities through education, healthcare, and social welfare services.',
  missionLong: [
    'Young Merit Welfare Foundation, Lahore is a non-profit organization dedicated to supporting underprivileged communities through education, healthcare, and social welfare services.',
    'The foundation focuses on empowering youth by offering merit-based support, skill development opportunities, and community outreach programs. With a mission to create a more inclusive and equitable society, the foundation works tirelessly to uplift deserving individuals and promote positive social change.',
    'Through its dedicated team and volunteers, Young Merit Welfare Foundation continues to make a meaningful impact across Lahore and beyond.',
  ],
  teamNote:
    'All team members are diligently fulfilling their responsibilities through this welfare foundation, contributing meaningfully to its mission.',
  registerUrl: 'https://forms.cloud.microsoft/r/pusTXHPF0G',
}

export const contact = {
  office: 'Yousaf Park, Shahdara, Lahore 54950',
  phone: '+92 303 2344448',
  phoneHref: 'tel:+923032344448',
  email: 'youngmeritwelfare@gmail.com',
  itEmail: 'usmansamar.live@outlook.com',
  speakingContact: 'Rana Ahsan',
}

export const socials = [
  { label: 'Facebook', href: 'https://web.facebook.com/YMWF.org.pk' },
  { label: 'Instagram', href: 'https://www.instagram.com/chwhdryhsnslhry/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rana-ahsan-598917373/' },
]

export const founder = {
  name: 'Rana Ahsan',
  role: 'Founder, Young Merit Welfare Foundation',
  initials: 'RA',
  quoteUrdu:
    'فلاحی ادارے وہ روشنی ہیں جو مایوسی کے اندھیروں میں امید جگاتے ہیں۔ خدمتِ خلق انسانیت کا سب سے بلند درجہ ہے، اور Young Merit Welfare Foundation بہتری کی اسی راہ پر گامزن ہے۔',
  quoteEnglish:
    'Welfare organisations are the light that keeps hope alive in the darkness of despair. Service to humanity is the highest calling, and Young Merit Welfare Foundation walks that same road toward better.',
}

export const mediaQuoteUrdu =
  'ہر عظیم معاشرے کی بنیاد اُن لوگوں کی خدمت پر ہوتی ہے جو دوسروں کا خیال رکھتے ہیں۔'

export const mediaQuoteEnglish =
  'Every great society is built on the service of those who care for others.'

/* ------------------------------------------------------------------ */
/* What we do — the four areas named in the foundation's own mission   */
/* ------------------------------------------------------------------ */

export interface Pillar {
  id: string
  name: string
  urduTag: string
  summary: string
  detail: string
}

export const pillars: Array<Pillar> = [
  {
    id: 'education',
    name: 'Merit-Based Education Support',
    urduTag: 'تعلیم',
    summary:
      'Support for students who have earned their place on merit but cannot carry the cost of staying in education.',
    detail:
      'Assistance is directed at deserving students so that ability, not household income, decides how far someone goes. This is the work the foundation was built around, and it stays at the centre of everything else we do.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Access',
    urduTag: 'صحت',
    summary:
      'Help reaching basic healthcare for families in underprivileged communities across Lahore.',
    detail:
      'Health support sits alongside education because a child who cannot get treated cannot stay in school. The foundation works with families to close the gap between a medical need and the means to meet it.',
  },
  {
    id: 'welfare',
    name: 'Social Welfare & Community Outreach',
    urduTag: 'فلاح',
    summary:
      'Direct welfare support and outreach programmes for underprivileged communities in and around Lahore.',
    detail:
      'Outreach is how the foundation reaches the people its programmes are meant for — through community presence rather than paperwork, and through partners already trusted in the neighbourhood.',
  },
  {
    id: 'skills',
    name: 'Skill Development & Youth Empowerment',
    urduTag: 'ہنر',
    summary:
      'Skill development opportunities that give young people a practical route into work and self-reliance.',
    detail:
      'Young Merit exists to empower youth. Skills training, capacity building, and partnerships with academic institutions give young people something they can build a livelihood on.',
  },
]

/* ------------------------------------------------------------------ */
/* Recent work — add the newest entry at the top                       */
/* ------------------------------------------------------------------ */

export interface Update {
  id: string
  date: string
  category: string
  title: string
  summary: string
  image?: { src: string; alt: string }
  body?: Array<string>
  people?: Array<{ name: string; role: string }>
  link?: { label: string; href: string }
}

export const updates: Array<Update> = [
  {
    id: 'umt-mou',
    date: '15 April 2026',
    category: 'Partnership',
    title: 'MoU signed with the University of Management and Technology',
    summary:
      'Young Merit Welfare Foundation has officially signed a Memorandum of Understanding with UMT to strengthen collaboration in youth development, education, and capacity building initiatives.',
    image: {
      src: '/images/updates/umt-mou.jpg',
      alt: 'Rana Ahsan seated with Prof. Dr. Asghar Zaidi and Irfan Gondal at the MoU signing ceremony at UMT.',
    },
    body: [
      'This significant milestone reflects a shared vision to empower students and create meaningful opportunities for academic and professional growth.',
      'The partnership marks the beginning of a promising journey toward impactful collaboration between academia and community development organisations.',
    ],
    people: [
      { name: 'Prof. Dr. Asghar Zaidi', role: 'Provost, UMT' },
      { name: 'Irfan Gondal', role: 'Director, Social Welfare Department Punjab' },
      { name: 'Rana Ahsan', role: 'Founder, Young Merit Welfare Foundation' },
    ],
    link: {
      label: 'Read the announcement',
      href: 'https://www.linkedin.com/posts/rana-ahsan-598917373_mou-umt-youngmeritwelfarefoundation-activity-7450089826592169984-gt2P',
    },
  },
  {
    id: 'ctn-session',
    date: '8 April 2026',
    category: 'Dialogue',
    title: 'Intellectual session with the Constructive Thinkers Network',
    summary:
      'An analytical session on the geostrategic situation of Afghanistan and Iran, attended by our founder alongside distinguished participants.',
    image: {
      src: '/images/updates/ctn-session.jpg',
      alt: 'Constructive Thinkers Network session on the geostrategic perspective of Afghanistan and Iran.',
    },
    body: [
      'The talk by the Chief Guest Speaker offered new perspectives on the complexities of the region, while the presence of other distinguished participants added great value to the session.',
      'This was not just a session but a platform for the exchange of ideas, learning, and meaningful dialogue — the kind of environment that lays the foundation for better decision-making and a stronger society.',
    ],
    people: [
      { name: 'Lt Gen Muhammad Ashraf Saleem, HI(M), (Retd)', role: 'Chief Guest Speaker' },
      { name: 'Tauqir Ahmad Sharif', role: 'Secretary General, CTN' },
      { name: 'Brig. Irfan Ali (R)', role: 'Executive Member, CTN' },
    ],
    link: {
      label: 'Read the reflection',
      href: 'https://www.linkedin.com/posts/rana-ahsan-598917373_ctn-constructivethinkersnetwork-geopolitics-activity-7447681358354599936-2n1Y',
    },
  },
  {
    id: 'alkhidmat-meeting',
    date: 'Recent',
    category: 'Meeting',
    title: 'Meeting at Alkhidmat Foundation, Lahore',
    summary:
      'A working meeting at Alkhidmat Foundation Lahore, part of the foundation’s ongoing engagement with established welfare organisations across the city.',
  },
]

/* ------------------------------------------------------------------ */
/* Institutions the foundation has publicly worked with                */
/* ------------------------------------------------------------------ */

export interface Partner {
  name: string
  kind: string
  note: string
}

export const partners: Array<Partner> = [
  {
    name: 'University of Management and Technology',
    kind: 'Academic partner',
    note: 'MoU for youth development, education, and capacity building initiatives.',
  },
  {
    name: 'Social Welfare Department, Punjab',
    kind: 'Government',
    note: 'Represented at the signing of our partnership with UMT.',
  },
  {
    name: 'Alkhidmat Foundation, Lahore',
    kind: 'Welfare sector',
    note: 'Ongoing engagement with one of Pakistan’s largest welfare networks.',
  },
  {
    name: 'Constructive Thinkers Network',
    kind: 'Policy forum',
    note: 'Participation in intellectual sessions on regional and social policy.',
  },
]

/* ------------------------------------------------------------------ */
/* Ways to get involved                                                */
/* ------------------------------------------------------------------ */

export interface Way {
  title: string
  body: string
  cta: { label: string; href: string; external: boolean }
}

export const waysToHelp: Array<Way> = [
  {
    title: 'Join as a volunteer',
    body: 'Register through our official form and be part of meaningful change through education and community service.',
    cta: { label: 'Register now', href: foundation.registerUrl, external: true },
  },
  {
    title: 'Support a student',
    body: 'Contributions go toward merit-based education support for students who have earned their place but cannot carry the cost. Write to us and we will share the details.',
    cta: { label: 'Email the foundation', href: 'mailto:' + contact.email, external: true },
  },
  {
    title: 'Partner with us',
    body: 'Universities, welfare organisations, and government departments looking to collaborate on youth development can reach the founder directly.',
    cta: { label: 'Get in touch', href: '#contact', external: false },
  },
]
