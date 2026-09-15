# DeutschPlex Development & Deployment Rules

## GitHub Synchronization & Export
- Always keep the repository production-ready for GitHub sync.
- Users can export or push directly to GitHub at any time via the AI Studio Settings menu or using standard `git push origin main`.
- All build configurations (`package.json`, `vite.config.ts`, `netlify.toml`, `.github/workflows`) must remain strictly green and verified.
- Any new features, assets, and components must pass `npm run lint` and `npm run build` so that automated GitHub Actions and Netlify Continuous Deployment work smoothly on every push.
