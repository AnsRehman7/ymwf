# Young Merit Welfare Foundation — Website

The public website for Young Merit Welfare Foundation, a non-profit based in Shahdara,
Lahore, supporting underprivileged communities through education, healthcare, and
social welfare services.

The site is a single scrolling page covering the foundation's mission, its four areas
of focus, recent work and partnerships, the institutions it works with, ways to get
involved, and a contact form.

## Content

All site copy lives in [`src/data/content.ts`](./src/data/content.ts) and is sourced
from the foundation's own published material. Nothing in that file is invented — if a
figure or a name is not there, it is because the foundation has not published it yet.

To add a new entry to the **Recent work** section, add an object to the top of the
`updates` array. Only `id`, `date`, `category`, `title`, and `summary` are required;
`body`, `people`, and `link` are optional.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- Netlify Forms for the contact form
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

Note: Netlify Forms submissions only work once deployed — the contact form will not
receive real submissions from a local dev server.
