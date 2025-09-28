# GitHub Pages Deployment Guide

This guide will help you deploy your Sham Ji Advertisement Company website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. Node.js and npm/bun installed locally

## Deployment Methods

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/shamji-Web/`
   - GitHub will show you the URL in the Pages settings

### Method 2: Manual Deployment with gh-pages

1. **Install dependencies:**

   ```bash
   bun install
   # or
   npm install
   ```

2. **Deploy manually:**

   ```bash
   bun run deploy
   # or
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages in your GitHub repository
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

### Method 3: Using Deploy Script

1. **Update the deploy script:**

   - Edit `deploy.sh`
   - Replace `YOUR_USERNAME` with your GitHub username

2. **Run the script:**
   ```bash
   ./deploy.sh
   ```

## Configuration Details

### Vite Configuration

The `vite.config.js` has been configured with:

- `base: '/shamji-Web/'` - Sets the correct base path for GitHub Pages
- `outDir: 'dist'` - Build output directory
- Asset optimization for production

### Package.json Scripts

- `npm run build` - Builds the production version
- `npm run deploy` - Builds and deploys to gh-pages branch
- `npm run preview` - Preview the built site locally

## Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages:**

   - Make sure the `base` in `vite.config.js` matches your repository name
   - Ensure GitHub Pages is enabled and pointing to the correct source

2. **Assets not loading:**

   - Check that all asset paths are relative
   - Verify the `base` path is correct in Vite config

3. **Build fails:**
   - Run `npm run build` locally to check for errors
   - Fix any TypeScript/ESLint errors before deploying

### Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file:**

   - Create a `CNAME` file in the `public` folder
   - Add your domain name (e.g., `www.shamji-ads.com`)

2. **Update Vite config:**

   ```js
   export default defineConfig({
     base: "/", // Change to root for custom domain
     // ... other config
   });
   ```

3. **Configure DNS:**
   - Point your domain's DNS to GitHub Pages servers
   - Follow GitHub's custom domain documentation

## Site Structure

Your deployed site will include:

- Responsive design for mobile, tablet, and desktop
- Custom fonts (Outfit and Poppins)
- Material-UI components
- Custom SVG assets
- Optimized images and assets

## Development vs Production

- **Development:** `bun run dev` - Runs on localhost:3000
- **Production:** Built and optimized for GitHub Pages
- **Preview:** `bun run preview` - Preview production build locally

## Support

If you encounter issues:

1. Check the GitHub Actions logs for deployment errors
2. Verify all file paths are correct
3. Ensure all dependencies are properly installed
4. Test the build locally before deploying

Your Sham Ji Advertisement Company website is now ready for GitHub Pages! 🚀
