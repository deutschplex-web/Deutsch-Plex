# Notes for AI coding agents

Read `README.md` first. It explains the folder layout and where each kind of change belongs.

Rules:

- Each page lives in `src/pages/<page>/`. Code shared by several pages goes in `src/components/`.
- Contact details (WhatsApp, email, locations) come only from `src/config/site.ts`. Never hard-code them in components.
- Menu links come only from `src/config/navigation.ts`.
- Content lists (categories, FAQs, brands) live in `src/data/`. Don't duplicate them inside components.
- Images go in `public/images/<purpose>/`. Provide a `.webp` plus a `.jpg` fallback.
- Before committing, run `npm run lint` and `npm run build`. Both must pass, because Netlify deploys every push to `main`.
