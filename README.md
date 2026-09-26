# DeutschPlex — دويتش بلكس

Website for **DeutschPlex**, which imports genuine German car parts (Mercedes, BMW, Audi, Porsche, Volkswagen) from Germany to Saudi Arabia.

Built with **React + Vite + Tailwind CSS**. It's hosted on **Netlify**, and every push to `main` goes live automatically.

---

## Where to change things

| I want to change… | Edit this file |
| --- | --- |
| WhatsApp number, email, office locations | `src/config/site.ts` |
| Menu links (navbar + footer) | `src/config/navigation.ts` |
| Category cards (titles, images) | `src/data/categories.ts` + images in `public/images/categories/` |
| Brands inside each category (profiles) | `src/data/brandProfiles.ts` |
| FAQ questions and answers | `src/data/faqs.ts` |
| Car brands and models | `src/data/brands.ts` |
| Home page showcase cars | `src/data/heroShowcase.ts` |
| Text on a specific page | that page's folder in `src/pages/` (see below) |
| The DeutschPlex logo | replace the files in `public/images/brand/` (same names) |
| Colors, fonts, dark mode | `src/styles/index.css` |

---

## Project structure

```text
public/                      Files served as-is (images, favicon)
└── images/
    ├── categories/          Category card images (.webp + .jpg fallback)
    ├── car-brands/          Brand logos
    ├── hero/                Home page hero photos
    ├── brand/               DeutschPlex logo (site versions + full-size files)
    └── future-pictures/     Spare photos, not used on the site yet

src/
├── App.tsx                  Site shell: navbar, active page, footer
├── main.tsx                 Entry point (you rarely need to touch this)
│
├── pages/                   One folder per page
│   ├── home/                HomePage + Hero + SectionsHub
│   ├── categories/          CategoriesPage + CategoryGrid + CategoryDetail + BrandProfileCard
│   ├── order/               OrderPage + OrderForm
│   ├── about/               AboutPage + AboutContent
│   ├── process/             ProcessPage + ProcessSteps
│   └── faq/                 FaqPage + FaqList
│
├── components/              Pieces shared by several pages
│   ├── layout/              Navbar, Footer, PageHeader, WhatsAppButton, PageTransition
│   ├── brand/               DeutschPlexLogo, BrandLogo
│   └── ui/                  ThemeToggle
│
├── config/                  Site-wide settings (contact info, menu)
├── data/                    Content lists (brands, categories, brand profiles, FAQs, showcase)
├── hooks/                   useHashPage: which page is open, based on the URL
├── context/                 ThemeContext: light / dark mode
├── utils/                   vinDecoder: reads a VIN number
├── types/                   Shared TypeScript types
└── styles/                  index.css (Tailwind + theme colors)
```

Each page folder has a `…Page.tsx` file with the page title banner, and one or more section files with the actual content.

Pages are addressed by URL hash: `/#categories`, `/#order`, `/#about`, `/#process`, `/#faq`.

Each category has its own address too, e.g. `/#categories/brakes`. The ids are `transmission`, `engine`, `suspension`, `brakes`, `electronics` and `cooling`.

### Adding a new page

1. Add its id to `PageId` in `src/types/index.ts`, and to the `PAGES` list in `src/hooks/useHashPage.ts`.
2. Create `src/pages/<name>/<Name>Page.tsx` (copy an existing page as a starting point).
3. Render it in `src/App.tsx`.
4. Add a menu link in `src/config/navigation.ts`.

---

## Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # type check
npm run build     # production build into dist/
```

## Deployment

Netlify builds the site from `main` using `netlify.toml` (`npm run build` → `dist/`). GitHub Actions (`.github/workflows/`) runs the type check and build on every push and pull request.
