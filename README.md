# DeutschPlex | بوابة قطع غيار السيارات الألمانية الأصلية
> **Direct Import of German Car Spare Parts to Saudi Arabia**  
> *Continuous Deployment Ready for GitHub & Netlify (Vite + React + Tailwind CSS)*

---

## 🚀 Quick Start & Continuous Deployment (GitHub ➔ Netlify)

This repository is pre-configured for **seamless continuous deployment (CI/CD)** on [Netlify](https://www.netlify.com/). Any commit pushed to your GitHub repository will automatically trigger an instant build and deploy!

### 1. Uploading This Project to GitHub

If you exported this repository or downloaded the ZIP from Google AI Studio:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Commit initial project
git commit -m "feat: initial DeutschPlex automotive platform"

# 4. Set main branch
git branch -M main

# 5. Add your GitHub repository remote URL (replace with your repo)
git remote add origin https://github.com/YOUR_USERNAME/deutschplex.git

# 6. Push to GitHub
git push -u origin main
```

*(Tip: In Google AI Studio, you can also export directly to GitHub via the settings menu in the top right).*

---

### 2. Connecting GitHub to Netlify (Continuous Deployment in 2 Minutes)

1. Go to **[Netlify Dashboard](https://app.netlify.com)** and log in with your GitHub account.
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Select **GitHub** and grant repository permissions to choose your `deutschplex` repository.
4. Netlify will auto-detect the configuration from our included `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20` (configured automatically)
5. Click **"Deploy Site"**.

🎉 **That's it!** Whenever you make updates or push new commits to GitHub, Netlify will automatically build and publish your latest code within seconds.

---

## 🛠 Included Netlify & CI/CD Files

- `netlify.toml` — Pre-configured build command (`npm run build`), publish directory (`dist`), SPA route fallback (`/* ➔ /index.html`), and secure production caching headers.
- `public/_redirects` — Fallback Netlify single-page redirect rule.
- `.github/workflows/deploy-netlify.yml` — Automated GitHub Actions CI workflow to test, type-check, and verify production builds on push.

---

## 🌟 Platform Features

- **VIN (Vehicle Identification Number) 17-Digit Validator & Decoder**:
  - Live character analysis (WMI manufacturer country, VDS model descriptors, VIS sequence).
  - Pre-configured sample VINs for Mercedes-Benz S-Class, BMW M5, Audi RS6, Porsche Cayenne.
- **Instant Quotation & Order Portal**:
  - Interactive multi-step form (Vehicle selection, VIN validation, part category pills, photo simulation).
  - Shipping tier selection (Express DHL Germany 3-7 days vs Air Cargo 7-14 days).
  - Instant WhatsApp direct message generator with pre-formatted vehicle and VIN specifications.
  - Quotation ID reference generation (e.g., `DP-2026-XXXX`).
- **Interactive Order Tracking Simulator**:
  - Track order progression (Received ➔ Catalog Query in Germany ➔ Quality Inspection ➔ Air Freight Frankfurt ➔ Riyadh Customs ➔ Delivered).
- **Luxury German Automotive UI**:
  - High-performance dark aesthetic with racing burgundy accents, glassmorphic panels, and full Arabic (RTL) typography powered by Google Cairo and Inter.
- **Golden Warranty (ضمان سنتين ذهبي)**:
  - 2-Year replacement warranty on all OEM and German-certified aftermarket parts.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy-netlify.yml    # GitHub Actions CI workflow
├── public/
│   ├── _redirects                # Netlify SPA redirect
│   └── assets/
├── src/
│   ├── components/               # UI components
│   │   ├── Navbar.tsx            # Header & quick actions
│   │   ├── Hero.tsx              # Automotive hero section
│   │   ├── VinChecker.tsx        # Interactive 17-digit VIN validator
│   │   ├── OrderForm.tsx         # Quotation & WhatsApp generator
│   │   ├── Features.tsx          # Competitive advantages
│   │   ├── Process.tsx           # 4-Step customer journey
│   │   ├── OrderTracker.tsx      # Order & quote tracking
│   │   ├── DeploymentModal.tsx   # Built-in GitHub & Netlify CI/CD Hub
│   │   ├── FaqSection.tsx        # Interactive FAQ
│   │   └── Footer.tsx            # Footer & contact info
│   ├── data/
│   │   └── brands.ts             # German auto brands & parts catalog
│   ├── utils/
│   │   └── vinDecoder.ts         # VIN 17-character decoding engine
│   ├── types.ts                  # Shared TypeScript models
│   ├── App.tsx                   # Main application layout
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Tailwind CSS styles
├── index.html                    # Root HTML with Arabic RTL & Cairo fonts
├── netlify.toml                  # Netlify deployment configuration
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## 📜 License
Licensed under Apache-2.0. Built for DeutschPlex.
