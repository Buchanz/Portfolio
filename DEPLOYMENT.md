# Deployment Guide for Portfolio Website

## Quick Deploy Options

### Option 1: Netlify Drop (Easiest - 2 minutes)

1. **Go to Netlify Drop**: https://app.netlify.com/drop
2. **Drag and drop** your entire `xBuchanz` folder onto the page
3. Your site will be live instantly with a URL like `https://random-name-123.netlify.app`
4. **To add your custom domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS setup instructions

### Option 2: GitHub Pages (Best for Portfolios)

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository**:
   - Click the "+" icon → "New repository"
   - Name it (e.g., `portfolio` or `tyler-buchanan-portfolio`)
   - Make it **Public**
   - Don't initialize with README
   - Click "Create repository"

3. **Upload your files**:
   ```bash
   cd /Users/buchanz/Desktop/xBuchanz
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"
   - Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

5. **Add custom domain**:
   - In Pages settings, add your domain under "Custom domain"
   - Add a `CNAME` file in your repo root with your domain name
   - Update DNS records as instructed

### Option 3: Vercel (Also Great)

1. **Go to**: https://vercel.com
2. **Sign up** with GitHub
3. **Import your repository** (or drag & drop)
4. **Deploy** - it's automatic!
5. **Add custom domain** in project settings

## Files Needed for Deployment

Make sure these files are in your deployment:
- ✅ `index.html` (main file)
- ✅ `styles.css` (if used)
- ✅ `about-image.png`
- ✅ `carousel-dark.png`
- ✅ `carousel-light.png`
- ✅ `project-dark.png`
- ✅ `project-light.png`

## Custom Domain Setup

After deploying, you'll need to:

1. **Get your deployment URL** (from Netlify/GitHub/Vercel)
2. **Update DNS records** at your domain registrar:
   - **For Netlify/Vercel**: Add a CNAME record pointing to your deployment URL
   - **For GitHub Pages**: Add A records (IPs provided by GitHub) or CNAME
3. **Wait for DNS propagation** (can take a few hours)

## Notes

- Your site is a single-page application, so it works great with all these platforms
- All images and assets are included in the folder
- The site uses modern CSS/JS that works in all browsers
- Make sure to test on mobile devices after deployment!

## Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Vercel Docs**: https://vercel.com/docs
