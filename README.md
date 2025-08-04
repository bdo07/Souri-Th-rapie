# Souri Thérapie - Wellness & Beauty Clinic Landing Page

A modern, multilingual landing page for Souri Thérapie, a comprehensive wellness and beauty clinic offering a wide range of health and aesthetic services.

## 🌟 Features

### Multilingual Support
- **Languages**: Arabic (RTL), French, English
- **Internationalization**: Built with next-intl for seamless language switching
- **RTL Support**: Full right-to-left layout support for Arabic
- **Language Switcher**: Easy language switching in the header

### Services Offered
- **Physical Therapy** (الترويض الطبي)
- **Laser Treatments** (علاجات الليزر)
- **Cupping Therapy** (الحجامة)
- **Acupuncture** (الوخز بالإبر)
- **Additional Medical & Beauty Services**

### Design & UX
- **Modern UI**: Clean, elegant design with smooth animations
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Animations**: Framer Motion animations for enhanced user experience
- **Color Palette**: 
  - Teal: #47C7C4
  - Royal Blue: #3E56AE
  - Cream: #F2E4C7

### Contact & CTA Features
- **WhatsApp Integration**: Direct WhatsApp appointment booking
- **Phone Integration**: One-click calling functionality
- **Google Maps**: Embedded map with location details
- **Contact Form**: Easy contact options

### Technical Features
- **Next.js 14+**: Latest Next.js with App Router
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed and Core Web Vitals

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd souri-therapie
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
souri-therapie/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── messages/
│   ├── en.json
│   ├── fr.json
│   └── ar.json
├── i18n.ts
├── middleware.ts
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🌍 Internationalization

The project supports three languages:

- **English** (`/en`) - Default language
- **French** (`/fr`) - French translations
- **Arabic** (`/ar`) - Arabic with RTL support

### Adding New Languages

1. Create a new translation file in `messages/[locale].json`
2. Add the locale to the `locales` array in `i18n.ts`
3. Update the middleware configuration

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  teal: '#47C7C4',
  'royal-blue': '#3E56AE',
  cream: '#F2E4C7',
}
```

### Content
- Update clinic information in translation files
- Modify contact details in components
- Replace images with your own assets

### WhatsApp Integration
Update the WhatsApp number in components:
```javascript
window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank')
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://souri-therapie.com
NEXT_PUBLIC_WHATSAPP_NUMBER=2126XXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=+2126XXXXXXX
```

### SEO Configuration
Update metadata in `app/layout.tsx` and `app/[locale]/layout.tsx` for:
- Page titles
- Meta descriptions
- Open Graph tags
- Twitter cards

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@souri-therapie.com
- WhatsApp: +212 6XX XX XX XX

---

**Souri Thérapie** - Your trusted partner in wellness and beauty. 🌟 