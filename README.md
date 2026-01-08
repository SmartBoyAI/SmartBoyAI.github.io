# SmartBoy Public Website

This is the public-facing marketing website for the SmartBoy educational app, designed for GitHub Pages hosting.

## 🌐 Live Site

Will be hosted at: `https://[your-username].github.io/SmartBoy/public_website/`

## 📁 Project Structure

```
public_website/
├── index.html              # Main landing page
├── css/
│   ├── style.css          # Main stylesheet with CSS variables
│   ├── animations.css     # Animation effects and transitions
│   └── responsive.css     # Mobile-first responsive design
├── js/
│   ├── main.js           # Core functionality (nav, scroll, FAQ)
│   ├── animations.js     # Scroll reveals, counters, parallax
│   └── pricing.js        # Pricing toggle and calculator
├── images/
│   └── screenshots/      # App screenshots from Frontend_Capacitor
└── README.md
```

## 🚀 Features

### Landing Page Sections
1. **Hero Section** - Eye-catching introduction with CTAs
2. **Features** - 6 comprehensive feature cards
3. **Why SmartBoy** - Comparison table + benefits
4. **How It Works** - 4-step user journey
5. **Subjects** - 11 subject cards with icons
6. **Pricing** - Monthly/Yearly toggle with 3 tiers
7. **Screenshots** - Swiper carousel of app images
8. **Safety & Privacy** - COPPA/GDPR compliance badges
9. **Testimonials** - Swiper carousel of reviews
10. **FAQ** - Accordion with 8 questions
11. **Download CTA** - Google Play + App Store (coming soon)
12. **Footer** - Links, contact, social media

### Technical Features
- **Mobile-First Responsive Design** (320px - 2560px+)
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Swiper.js** - Touch-enabled carousels
- **Lazy Loading** - Optimized image loading
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Accessibility** - ARIA labels, keyboard navigation
- **Performance** - Debounced scroll, optimized animations

## 🛠️ Development

### Prerequisites
- A modern web browser
- (Optional) Live Server for local development

### Local Development

1. **Using VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - Visit `http://localhost:5500/public_website/`

2. **Using Python:**
   ```bash
   cd public_website
   python -m http.server 8000
   ```
   Visit `http://localhost:8000/`

3. **Using Node.js:**
   ```bash
   npx serve public_website
   ```

## 📦 Deployment to GitHub Pages

### Option 1: Deploy from Main Branch

1. **Push to GitHub:**
   ```bash
   git add public_website/
   git commit -m "Add public website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/public_website`
   - Click Save

3. **Access your site:**
   - `https://[username].github.io/SmartBoy/public_website/`

### Option 2: Custom Domain (Optional)

1. Create `CNAME` file in `public_website/`:
   ```
   smartboy-edu.com
   ```

2. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   
   Type: CNAME
   Name: www
   Value: [username].github.io
   ```

3. Enable HTTPS in GitHub Pages settings

## 🎨 Customization

### Colors (css/style.css)
```css
--primary-color: #2563eb;    /* Blue */
--secondary-color: #7c3aed;  /* Purple */
--accent-color: #10b981;     /* Green */
```

### Fonts
- Headings: Poppins (Google Fonts)
- Body: Inter (Google Fonts)

### Screenshots
Replace images in `images/screenshots/` with your own (recommended: 300x600px, PNG format)

## 📊 Analytics (Future)

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
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

## 🔧 Maintenance

### Update App Version
Update in footer (index.html line ~900):
```html
<p class="version">Version 1.0.0.20</p>
```

### Update Pricing
Edit `js/pricing.js`:
```javascript
const pricing = {
    monthly: { price: '4.99', ... },
    yearly: { price: '39.99', ... }
};
```

### Update Download Links
When iOS app is ready, change button in index.html:
```html
<a href="https://apps.apple.com/..." class="btn btn-download">
    <!-- Remove 'disabled' class -->
</a>
```

## 📱 Testing Checklist

- [ ] Mobile responsiveness (320px, 375px, 414px)
- [ ] Tablet layout (768px, 1024px)
- [ ] Desktop display (1280px, 1920px+)
- [ ] All links working (Google Play, WhatsApp, Email)
- [ ] Images loading correctly
- [ ] Swiper carousels functional
- [ ] FAQ accordion working
- [ ] Pricing toggle (Monthly/Yearly)
- [ ] Smooth scrolling navigation
- [ ] Mobile menu toggle
- [ ] Loading performance (<3s)
- [ ] Lighthouse score (90+)

## 🐛 Troubleshooting

**Images not loading:**
- Check file paths are correct (case-sensitive on Linux servers)
- Verify images copied to `images/screenshots/`

**Animations not working:**
- Check browser console for JavaScript errors
- Ensure AOS library loaded from CDN

**Mobile menu not opening:**
- Verify `main.js` loaded correctly
- Check browser console for errors

## 📄 License

This website is part of the SmartBoy Educational Platform.
© 2026 SmartBoy. All rights reserved.

## 📞 Support

- Email: smartboyai.app@gmail.com
- WhatsApp: +94 768 222 623
- Phone: +94 768 222 623

## 🎯 Next Steps

1. ✅ Website structure created
2. ✅ All sections implemented
3. ✅ Responsive design complete
4. ✅ Animations added
5. ⏳ Deploy to GitHub Pages
6. ⏳ Add Google Analytics
7. ⏳ Submit to search engines (Google, Bing)
8. ⏳ Social media sharing
9. ⏳ A/B testing for conversions
10. ⏳ Monitor performance metrics

