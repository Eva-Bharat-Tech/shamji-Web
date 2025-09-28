# Cloudflare Pages Deployment Guide

This guide will help you deploy your Sham Ji Advertisement Company website to Cloudflare Pages.

## Method 1: Automatic Deployment via Git Integration (Recommended)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add Cloudflare Pages configuration"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project"
3. Choose "Connect to Git"
4. Select your GitHub repository (`shamji-Web`)
5. Configure build settings:
   - **Project name**: `shamji-web` (or your preferred name)
   - **Production branch**: `main`
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Node.js version**: `18` or `20`

### Step 3: Deploy

- Click "Save and Deploy"
- Cloudflare will automatically build and deploy your site
- Your site will be available at: `https://shamji-web.pages.dev`

## Method 2: Manual Deployment with Wrangler CLI

### Step 1: Install Wrangler (if not already installed)

```bash
npm install -g wrangler
# or
bun add -g wrangler
```

### Step 2: Authenticate with Cloudflare

```bash
wrangler login
```

### Step 3: Deploy

```bash
# Build the project
bun run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=shamji-web

# Alternative: Deploy using the wrangler.toml configuration
npx wrangler deploy
```

## Configuration Files

### wrangler.toml

The `wrangler.toml` file configures:

- Project name and compatibility date
- Asset directory (`./dist`)
- Build configuration

### \_routes.json

Located in `public/_routes.json`, this file:

- Handles client-side routing
- Ensures all routes serve the main `index.html`

### \_headers

Located in `public/_headers`, this file:

- Sets security headers
- Configures caching for assets
- Optimizes performance

## Custom Domain (Optional)

### Step 1: Add Custom Domain

1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `shamji-ads.com`)

### Step 2: Update DNS

- If your domain is on Cloudflare: DNS records are added automatically
- If your domain is elsewhere: Add the CNAME record as instructed

### Step 3: Update wrangler.toml (if using CLI deployment)

Uncomment and update the routes section in `wrangler.toml`:

```toml
[env.production]
routes = [
  { pattern = "shamji-ads.com", zone_name = "shamji-ads.com" },
  { pattern = "www.shamji-ads.com", zone_name = "shamji-ads.com" }
]
```

## Environment Variables (if needed)

If you need environment variables:

### Via Dashboard:

1. Go to your project settings
2. Click "Environment variables"
3. Add your variables

### Via CLI:

```bash
wrangler pages secret put VARIABLE_NAME
```

## Build Optimization

Your site is optimized for Cloudflare Pages with:

- **Fast builds**: Using Bun for package management
- **Asset optimization**: Fonts, images, and SVGs are properly cached
- **Security headers**: Added via `_headers` file
- **Performance**: Static assets cached for 1 year

## Troubleshooting

### Build Fails

1. Check build logs in Cloudflare Pages dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `bun run build`

### Assets Not Loading

1. Verify `dist` folder contains all assets after build
2. Check `_routes.json` configuration
3. Ensure paths are relative (no absolute paths)

### Wrangler Deploy Errors

If you get "Cannot use assets with a binding" error:

1. Use the direct command: `npx wrangler pages deploy dist --project-name=shamji-web`
2. Or remove any `binding` entries from `wrangler.toml`

### Custom Domain Issues

1. Verify DNS propagation (can take up to 24 hours)
2. Check SSL certificate status in dashboard
3. Ensure domain is properly configured

### First Time Deployment

If this is your first deployment to a new project:

1. The project will be created automatically
2. You may need to authenticate: `npx wrangler auth login`
3. Your site will be available at `https://shamji-web.pages.dev`

## Performance Features

Cloudflare Pages provides:

- **Global CDN**: Your site loads fast worldwide
- **Automatic HTTPS**: SSL certificates automatically managed
- **DDoS protection**: Built-in security
- **Edge caching**: Static assets cached at edge locations
- **Analytics**: Built-in web analytics

## Site Features

Your deployed site includes:

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom fonts (Outfit and Poppins)
- ✅ Material-UI components
- ✅ Custom SVG assets and animations
- ✅ Optimized images and performance
- ✅ Modern React 19 features
- ✅ Fast loading with Vite optimization

## Support

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Wrangler CLI Docs**: https://developers.cloudflare.com/workers/wrangler/
- **Community Support**: Cloudflare Discord

Your Sham Ji Advertisement Company website is now ready for Cloudflare Pages! 🚀
