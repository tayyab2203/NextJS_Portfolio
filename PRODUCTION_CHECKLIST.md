# Production Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Content Updates
- [ ] Update all personal information (name, email, phone)
- [ ] Replace placeholder images with actual project images
- [ ] Update all social media links
- [ ] Update WhatsApp number in `src/app/contact/page.js` (line 38)
- [ ] Update Cal.com URL (replace username in contact page and footer)
- [ ] Update company information
- [ ] Update projects with real data and metrics
- [ ] Update skills and certifications

### 2. Configuration
- [ ] Update SEO metadata in `src/app/layout.js`
- [ ] Update Open Graph tags
- [ ] Update Twitter card information
- [ ] Set up environment variables
- [ ] Configure domain name
- [ ] Set up SSL certificate

### 3. Contact Form
- [ ] Integrate contact form with backend service (Formspree, SendGrid, etc.)
- [ ] Test form submission
- [ ] Set up email notifications
- [ ] Test WhatsApp link with actual number
- [ ] Test Cal.com integration

### 4. Performance
- [ ] Optimize images (use WebP/AVIF format)
- [ ] Test page load speeds
- [ ] Check Lighthouse scores
- [ ] Minimize bundle size
- [ ] Enable compression

### 5. Testing
- [ ] Test all pages on desktop
- [ ] Test all pages on mobile devices
- [ ] Test all navigation links
- [ ] Test all external links
- [ ] Test form validation
- [ ] Test error handling
- [ ] Test 404 page
- [ ] Test loading states

### 6. SEO
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Verify meta tags on all pages
- [ ] Add structured data (JSON-LD)
- [ ] Test social media previews

### 7. Security
- [ ] Review security headers
- [ ] Enable HTTPS
- [ ] Review environment variables
- [ ] Remove console.logs in production
- [ ] Add rate limiting for forms

### 8. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Google Tag Manager
- [ ] Add tracking codes

## 🚀 Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Test the production build locally:**
   ```bash
   npm start
   ```

3. **Deploy to your hosting platform:**
   - Vercel (recommended): Connect GitHub, auto-deploys
   - Netlify: Connect GitHub, set build command
   - Other: Follow platform-specific instructions

4. **Post-Deployment:**
   - Verify all pages load correctly
   - Test contact form
   - Test WhatsApp link
   - Check mobile responsiveness
   - Verify analytics (if added)

## 📝 Important Notes

- **WhatsApp Number Format**: Use country code + number without + or spaces
  - Example: `1234567890` for US number `+1 (234) 567-8900`
  
- **Contact Form**: Currently uses demo submission. Integrate with:
  - Formspree
  - SendGrid
  - AWS SES
  - Your own API endpoint

- **Images**: Add project images to `/public` folder and reference them in project data

- **Environment Variables**: Create `.env.local` for local development and set in hosting platform for production

## 🔍 Quality Checks

- [ ] No console errors
- [ ] No broken links
- [ ] All images optimized
- [ ] Fast page load (< 3 seconds)
- [ ] Mobile-friendly
- [ ] Accessible (WCAG 2.1 AA)
- [ ] SEO optimized
- [ ] Cross-browser compatible





