# Images

Everything in `public/` is served as-is. For example, `public/images/categories/brakes.webp` is available on the site at `/images/categories/brakes.webp`.

| Folder | What it holds | Used by |
| --- | --- | --- |
| `categories/` | The six category card images (`.webp` plus a `.jpg` fallback) | `src/data/categories.ts` |
| `car-brands/` | Brand logos (Mercedes, BMW, Audi, Porsche, VW) | `src/data/brandLogos.ts` |
| `store-logo/` | DeutschPlex logo files (SVG/PNG) for social media, print, etc. | nothing (the site draws the logo in code: `src/components/brand/DeutschPlexLogo.tsx`) |
| `hero/` | Photos in the home page brand showcase | `src/data/heroShowcase.ts` |
| `future-pictures/` | Spare photos that aren't on the site yet | nothing |

To replace an image, upload a new file with **exactly the same name** into the same folder. No code change is needed.

When adding a new image, save a `.webp` version for speed and a `.jpg` fallback for older browsers.
