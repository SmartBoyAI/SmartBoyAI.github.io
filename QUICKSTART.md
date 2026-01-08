# 🚀 Quick Start Guide - SmartBoy Public Website

## ⚡ Fastest Way to View Locally

### Option 1: VS Code Live Server (Recommended)
1. Open VS Code
2. Navigate to `public_website/index.html`
3. Right-click → "Open with Live Server"
4. Browser opens automatically at `http://localhost:5500/public_website/`

### Option 2: Double-Click
1. Navigate to `public_website/index.html`
2. Double-click to open in default browser
3. ⚠️ Some features may not work without a server (relative paths)

### Option 3: Python Server
```bash
cd public_website
python -m http.server 8000
```
Then visit: http://localhost:8000/

## 📋 Pre-Launch Checklist

Before deploying to GitHub Pages:

### Content Review
- [ ] Check all text for typos
- [ ] Verify pricing matches actual plans
- [ ] Confirm contact information (email, phone, WhatsApp)
- [ ] Review testimonials (replace with real ones when available)
- [ ] Validate all screenshots are current app version

### Links Verification
- [ ] Google Play Store link works: https://play.google.com/store/apps/details?id=tuanorg.smartboy&pcampaignid=web_share
- [ ] WhatsApp link works: https://wa.me/94769105555
- [ ] Email links work: smartboyai.app@gmail.com
- [ ] Social media links (update when ready)

### Technical Testing
- [ ] Test on mobile device (actual phone)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Test all screen sizes (320px to 2560px)
- [ ] Check loading speed (<3 seconds)
- [ ] Verify all images load
- [ ] Test navigation menu (mobile toggle)
- [ ] Test FAQ accordion
- [ ] Test pricing toggle (monthly/yearly)
- [ ] Test Swiper carousels (screenshots, testimonials)
- [ ] Verify smooth scrolling works

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Samsung Internet (Android)

### Performance
Run Lighthouse audit (Chrome DevTools):
- [ ] Performance > 90
- [ ] Accessibility > 95
- [ ] Best Practices > 90
- [ ] SEO > 95

## 🌐 Deploy to GitHub Pages

### Step 1: Commit Changes
```bash
git add public_website/
git commit -m "Add SmartBoy public website with all features"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source":
   - Branch: `main`
   - Folder: `/public_website`
4. Click **Save**
5. Wait 2-3 minutes for deployment

### Step 3: Access Your Site
Your site will be available at:
```
https://[your-github-username].github.io/SmartBoy/public_website/
```

## 🎨 Quick Customizations

### Change Colors
Edit `css/style.css` (lines 8-13):
```css
--primary-color: #2563eb;    /* Blue */
--secondary-color: #7c3aed;  /* Purple */
--accent-color: #10b981;     /* Green */
```

### Update Pricing
Edit `js/pricing.js` (lines 12-28):
```javascript
monthly: {
    price: '4.99',  // ← Change here
    period: '/month',
    ...
}
```

### Change App Version
Edit `index.html` (line ~920):
```html
<p class="version">Version 1.0.0.20</p>
```

### Add/Update Screenshots
1. Place new screenshots in `images/screenshots/`
2. Update Swiper slides in `index.html` (lines ~750-780)

## 🔍 SEO Optimization (After Deployment)

### Submit to Search Engines
1. **Google Search Console**
   - Add property: `https://[username].github.io/SmartBoy/public_website/`
   - Submit sitemap (create one or use online generator)
   - Request indexing

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

### Create Sitemap (Optional)
Create `sitemap.xml` in public_website/:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[username].github.io/SmartBoy/public_website/</loc>
    <lastmod>2026-01-08</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📊 Add Analytics (Optional)

### Google Analytics 4
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Common Issues & Fixes

### Images Not Loading
**Problem:** Broken image icons
**Solution:** 
```bash
# Verify images exist
ls public_website/images/screenshots/

# Re-copy if needed
cp Frontend_Capacitor/docs-root/media/*.png public_website/images/screenshots/
```

### Mobile Menu Not Working
**Problem:** Hamburger menu doesn't open
**Solution:** Check browser console for JavaScript errors. Ensure `js/main.js` is loaded.

### Animations Not Playing
**Problem:** Elements don't fade in on scroll
**Solution:** Verify AOS library CDN link in `index.html`. Check `js/animations.js` is loaded.

### Pricing Toggle Not Working
**Problem:** Monthly/Yearly toggle doesn't switch prices
**Solution:** Verify `js/pricing.js` is loaded. Check element IDs match.

## 📱 Mobile Testing Tips

### Test on Real Devices
1. Deploy to GitHub Pages first
2. Visit on actual phones/tablets
3. Test all interactive elements:
   - Menu toggle
   - Scroll navigation
   - FAQ accordion
   - Pricing toggle
   - Download buttons
   - Carousels (swipe)

### Browser DevTools Mobile Simulation
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test various device presets:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - Pixel 5 (393px)
   - iPad (768px)
   - iPad Pro (1024px)

## ✅ Final Pre-Launch Checklist

- [ ] All content reviewed and approved
- [ ] All links tested and working
- [ ] Responsive design tested on all breakpoints
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO tags complete (title, description, Open Graph)
- [ ] Analytics added (if required)
- [ ] Privacy policy linked (when available)
- [ ] Terms of service linked (when available)
- [ ] Contact information verified
- [ ] Social media links added (when ready)
- [ ] Deployed to GitHub Pages successfully
- [ ] Tested on production URL
- [ ] Submitted to search engines

## 🎯 Post-Launch Tasks

1. **Monitor Analytics**
   - Track visitor behavior
   - Identify popular sections
   - Measure conversion rates

2. **A/B Testing**
   - Test different headlines
   - Try various CTAs
   - Optimize pricing presentation

3. **Continuous Improvement**
   - Add blog/news section
   - Create video tutorials
   - Collect and display more testimonials
   - Add live chat support

4. **Marketing**
   - Share on social media
   - Create backlinks
   - Submit to app directories
   - Run Google Ads campaigns

## 📞 Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Review this guide's troubleshooting section
3. Test on a different browser
4. Clear browser cache and reload
5. Contact support: smartboyai.app@gmail.com

---

**Ready to launch?** Follow the deployment steps above! 🚀
