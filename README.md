# Professional Portfolio Website

A modern, production-ready portfolio website built with Next.js, featuring AI-powered decision assistance, animated components, and a professional dark theme.

## 🚀 Features

- **Modern Design**: Professional dark theme with custom color palette
- **AI Decision Helper**: Interactive tool to help clients make smart project decisions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Contact Options**: Email, WhatsApp, Cal.com integration, and contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Other Libraries**:
  - React Countup (animated counters)
  - Swiper (carousels)
  - React Parallax
  - React Intersection Observer

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Update Personal Information

1. **Contact Information** (`src/app/contact/page.js`):
   - Update email address
   - Update WhatsApp number (line 58): `const whatsappNumber = '1234567890';`
   - Update Cal.com URL (replace `tayyabsajjad4679` with your Cal.com username)
   - Update social media links

2. **Hero Section** (`src/components/Hero.jsx`):
   - Update name and roles
   - Update stats (projects, clients, experience)

3. **About Page** (`src/app/about/page.js`):
   - Update timeline data
   - Add profile image
   - Update company information

4. **Projects** (`src/data/projects.js`):
   - Add your actual projects
   - Update metrics and case studies
   - Add project images to `/public` folder

5. **Skills** (`src/data/skills.js`):
   - Update your skills and proficiency levels
   - Add certifications

6. **Company** (`src/data/company.js`):
   - Update company information
   - Add team details
   - Update achievements

7. **Metadata** (`src/app/layout.js`):
   - Update SEO metadata
   - Update Open Graph tags
   - Update Twitter card information

### Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure everything
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Connect repository, build settings auto-detected
- **DigitalOcean App Platform**: Connect repository, auto-detects Next.js

## 📝 Customization

### Colors

Update colors in `tailwind.config.js`:
- `dark_walnut`, `saddle_brown`, `toffee_brown`
- `camel`, `khaki_beige`, `dry_sage`
- `dusty_olive`, `ebony`, `charcoal_brown`

### Fonts

The portfolio uses Comfortaa font. To change:
1. Update `src/app/globals.css` - Google Fonts import
2. Update `tailwind.config.js` - fontFamily configuration

## 🔒 Security

- Security headers configured in `next.config.mjs`
- XSS protection enabled
- Content Security Policy ready (add CSP headers if needed)
- HTTPS enforced in production

## 📊 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization
- Compressed assets
- Optimized fonts loading

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall: `npm install --legacy-peer-deps`
4. Rebuild: `npm run build`

### WhatsApp Link Not Working

Make sure your WhatsApp number is in the correct format:
- Country code + number (without + or spaces)
- Example: `1234567890` for US number `+1 (234) 567-8900`

## 📄 License

This project is private and proprietary.

## 👤 Author

Your Name - Full-Stack Developer

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All open-source contributors
