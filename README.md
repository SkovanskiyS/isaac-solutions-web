# Isaac Solutions Web

A modern, production-ready multilingual website for Isaac Solutions. Built with Next.js 15, TypeScript, and Tailwind CSS.

**Status:** ✅ Production Ready | **Updated:** December 19, 2025

## Overview

Isaac Solutions is a software development company specializing in AI-powered MVP development and enterprise solutions. This website features:

- 🌍 **Multilingual** - English, Russian, and Uzbek support
- ⚡ **High Performance** - Optimized bundles, 150ms theme switching, dynamic imports
- 🎨 **Modern UI** - shadcn/ui components with dark/light mode
- 📱 **Responsive** - Mobile-first design
- 🎯 **SEO Ready** - Server-side rendering with Next.js App Router

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15.5.3 (App Router) |
| Language | TypeScript 5.8.3 |
| Styling | Tailwind CSS 3.4.17 |
| UI Components | shadcn/ui + Radix UI |
| Animations | Framer Motion 12.23.22 |
| Internationalization | next-intl 4.3.9 |
| Deployment | Netlify |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/SkovanskiyS/isaac-solutions-web.git
cd isaac-solutions-web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint and TypeScript checks |
| `npm run format` | Format code with Biome |
| `npm run typecheck` | TypeScript compiler checks |
| `npm run cleanup` | Remove test files |
| `npm run optimize-images` | Convert images to AVIF |

## Performance Metrics

| Metric | Value | Improvement |
|--------|-------|-------------|
| First Load JS | 102 kB | ✅ Optimized |
| Pricing Page Bundle | 3.74 kB | 53% smaller |
| Theme Switch Speed | 150ms | 50% faster |
| Total Routes | 6 | Production ready |

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── page.tsx       # Homepage
│   │   ├── pricing/       # Pricing page
│   │   └── logo-demo/     # Logo showcase
│   ├── api/contact/       # Contact form API
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── Navigation.tsx     # Main navigation
│   ├── ContactForm.tsx    # Contact form
│   ├── Portfolio.tsx      # Portfolio section
│   └── ThemeToggle.tsx    # Theme switcher
├── contexts/
│   └── ThemeContext.tsx   # Theme management
├── lib/                   # Utilities
└── types/                 # TypeScript types

messages/
├── en.json               # English translations
├── ru.json               # Russian translations
└── uz.json               # Uzbek translations

docs/                     # Documentation
public/optimized/         # Optimized images (AVIF)
scripts/                  # Build & optimization scripts
```

## Internationalization

Add or modify translations in the `messages/` directory:

```json
// messages/en.json
{
  "hero": {
    "title": "Build Smart. Build Fast.",
    "subtitle": "AI-powered MVP development"
  }
}
```

Supported languages: English (en), Russian (ru), Uzbek (uz).

## Theming

The project uses a custom theming system with instant dark/light mode switching:

- 150ms transition speed (50% faster than standard)
- View Transitions API for smooth animations
- System preference detection
- localStorage persistence

Customize theme colors in [src/app/globals.css](src/app/globals.css):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
}
```

## Deployment

### Netlify (Recommended)

The project is pre-configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Auto-deploys on push to `main`

Configuration is in [netlify.toml](netlify.toml).

### Manual Deployment

```bash
npm run build
npm run start  # Production server on port 3000
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Documentation

Comprehensive documentation is available in the `/docs` directory:

- [DEPLOYMENT_CHECKLIST.md](./docs/DEPLOYMENT_CHECKLIST.md) - Deployment guide
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - Development guidelines
- [PRICING_PAGE_OPTIMIZATION.md](./docs/PRICING_PAGE_OPTIMIZATION.md) - Performance details
- [THEME_SWITCHING_OPTIMIZATION.md](./docs/THEME_SWITCHING_OPTIMIZATION.md) - Theme optimization
- [MANUAL_TESTING_GUIDE.md](./docs/MANUAL_TESTING_GUIDE.md) - Testing scenarios

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Run checks: `npm run typecheck && npm run lint`
5. Commit with clear messages
6. Push and submit a pull request

**Guidelines:**
- Follow TypeScript best practices
- Update all translations (en, ru, uz)
- Test responsive design
- Run `npm run build` before submitting

## License

Proprietary software owned by Isaac Solutions.

## Contact

- **Website:** [isaac-solutions.netlify.app](https://isaac-solutions.netlify.app)
- **GitHub:** [@SkovanskiyS](https://github.com/SkovanskiyS)
- **Email:** Contact via website form

---

Built with Next.js, TypeScript, and Tailwind CSS by Isaac Solutions.
