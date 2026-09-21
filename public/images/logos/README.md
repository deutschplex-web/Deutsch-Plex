# DeutschPlex Image Repository - Brand Logos

This directory is the dedicated GitHub and static asset storage for automotive brand logos and visual assets in **DeutschPlex**.

## 📁 Directory Structure
All images placed in this folder are tracked in Git/GitHub and automatically served by Vite at the root URL `/images/logos/<filename>`.

```text
public/images/logos/
├── README.md           # Documentation for GitHub and asset usage
├── mercedes.png        # Official Mercedes-Benz 3D Chrome Star (960x960, Transparent)
├── mercedes.svg        # Official Mercedes-Benz Vector Emblem
├── bmw.png             # Official BMW Circular Bavarian Emblem (960x960, Transparent)
├── bmw.svg             # Official BMW Vector Emblem
├── audi.png            # Official Audi 4-Rings Chrome 3D Emblem (960x593, Transparent)
├── audi.svg            # Official Audi Vector Emblem
├── porsche.png         # Official Porsche Crest Shield (383x512, Transparent)
├── volkswagen.png      # Official Volkswagen Circular Emblem (960x960, Transparent)
└── volkswagen.svg      # Official Volkswagen Vector Emblem
```

## 🚀 How to Call Any Logo in Code
You can reference any logo using standard HTML/React `img` tags or the helper component:

### 1. Using the `BrandLogo` React Component (Recommended)
```tsx
import BrandLogo from '../components/BrandLogo';

// Renders the official authentic logo with responsive scaling and hover motion
<BrandLogo brandId="porsche" size="lg" />
<BrandLogo brandId="mercedes" size={64} showWordmark={true} />
```

### 2. Direct Static Asset URL
```tsx
<img 
  src="/images/logos/bmw.png" 
  alt="BMW Official Logo" 
  className="w-12 h-12 object-contain" 
/>
```

### 3. Using the Helper Function
```tsx
import { getBrandLogo } from '../data/brandLogos';

const logo = getBrandLogo('audi');
console.log(logo.png); // '/images/logos/audi.png'
console.log(logo.alt); // 'شعار أودي الرسمي'
```

## ➕ How to Add More Images via GitHub
1. Add your new image file to `public/images/logos/` (e.g. `maybach.png` or `alpina.png`).
2. Preferred format: PNG with transparent background (or SVG), minimum 512x512 resolution.
3. Commit and push to GitHub:
   ```bash
   git add public/images/logos/
   git commit -m "feat(assets): add new brand logo"
   git push origin main
   ```
4. Access it immediately in the app at `/images/logos/<your-filename>`.
