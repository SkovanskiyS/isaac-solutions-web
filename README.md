# Isaac Solutions Web

> **Status:** ✅ Production Ready | **Last Updated:** December 19, 2025

A modern, high-performance multilingual business website for Isaac Solutions - a software development company specializing in AI-powered MVP development and enterprise software solutions.

## 🌟 Features

- **🌍 Internationalization (i18n)**: Support for English, Russian, and Uzbek languages
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **🌙 Dark/Light Mode**: Instant theme switching (150ms) with View Transitions API
- **📱 Responsive Design**: Mobile-first approach with seamless desktop experience
- **⚡ Performance Optimized**: 
  - 53% smaller bundle size on pricing page
  - 50% faster page transitions
  - Dynamic imports for heavy components
  - Loading states for better UX
- **🎯 SEO Optimized**: Server-side rendering and meta tag management
- **📧 Contact Forms**: Interactive contact and inquiry forms
- **🎨 Portfolio Showcase**: Dynamic portfolio section with project galleries
- **💰 Pricing Pages**: Optimized pricing section with smooth loading

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.8.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion 12.23.22](https://www.framer.com/motion/)
- **Internationalization**: [next-intl 4.3.9](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React 0.475.0](https://lucide.dev/)
- **Build Tool**: [Turbopack](https://turbo.build/) (development)
- **Linting**: [ESLint](https://eslint.org/) + [Biome 1.9.4](https://biomejs.dev/)
- **Deployment**: [Netlify](https://netlify.com/) (recommended)

## ⚡ Performance Highlights

| Metric | Value | Status |
|--------|-------|--------|
| **First Load JS** | 102 kB | ✅ Optimized |
| **Pricing Page Bundle** | 3.74 kB | ✅ 53% smaller |
| **Theme Switch Speed** | 150ms | ✅ 50% faster |
| **Page Transition** | ~2-3s | ✅ Smooth loading |
| **Total Routes** | 6 | ✅ Production ready |

## 📁 Project Structure

```
isaac-solutions-web/
├── docs/                        # 📚 Documentation
│   ├── DEPLOYMENT_CHECKLIST.md # Deployment guide
│   ├── DEVELOPMENT.md          # Development guide
│   ├── MANUAL_TESTING_GUIDE.md # Testing scenarios
│   ├── PRICING_PAGE_OPTIMIZATION.md # Performance docs
│   ├── THEME_SWITCHING_OPTIMIZATION.md
│   ├── TESTING_CHECKLIST.md    # QA checklist
│   └── PROJECT_COMPLETION_SUMMARY.md
├── scripts/                     # 🛠️ Utility scripts
│   ├── cleanup-test-files.js   # Test file analyzer
│   ├── remove-test-files.js    # Automated cleanup
│   ├── optimize-images.js      # Image optimization
│   ├── image-report.js         # Image audit
│   └── security-check.js       # Security validation
├── src/
│   ├── app/                    # 📄 App Router pages
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── layout.tsx     # Locale layout
│   │   │   ├── page.tsx       # Homepage (185 kB)
│   │   │   ├── logo-demo/     # Logo showcase
│   │   │   └── pricing/       # Pricing pages
│   │   │       ├── layout.tsx # SEO metadata
│   │   │       ├── loading.tsx # Loading UI ⚡ NEW
│   │   │       └── page.tsx   # Optimized (177 kB)
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── globals.css        # Global styles (optimized)
│   │   └── layout.tsx         # Root layout
│   ├── components/            # 🎨 Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── animations/       # Animation components
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── ContactForm.tsx   # Contact form
│   │   ├── Portfolio.tsx     # Portfolio showcase
│   │   ├── ThemeToggle.tsx   # Theme switcher (optimized)
│   │   ├── ClientLogos.tsx   # Client carousel
│   │   └── NeuralBackground.tsx # Animated background
│   ├── contexts/             # ⚛️ React contexts
│   │   └── ThemeContext.tsx  # Theme management (optimized)
│   ├── lib/                  # 🔧 Utility functions
│   │   └── utils.ts          # General utilities
│   ├── types/                # 📝 TypeScript types
│   │   └── view-transitions.d.ts # View Transitions API ⚡ NEW
│   └── middleware.ts         # Next.js middleware
├── messages/                 # 🌍 Translation files
│   ├── en.json              # English (530+ lines)
│   ├── ru.json              # Russian
│   └── uz.json              # Uzbek
├── public/                  # 📁 Static assets
│   └── optimized/           # Optimized images (AVIF)
├── config/                  # ⚙️ Configuration
│   ├── i18n.ts
│   ├── site.ts
│   └── index.ts
└── Configuration files      # Various config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/SkovanskiyS/isaac-solutions-web.git
cd isaac-solutions-web
```

2. **Install dependencies**:
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. **Start the development server**:
```bash
# Using npm
npm run dev(auto-cleanup) |
| `npm run start` | Start production server |
| `npm run typecheck` | Run TypeScript compiler checks |
| `npm run lint` | Run TypeScript checks and ESLint |
| `npm run format` | Format code with Biome |
| `npm run cleanup` | Remove test files manually |
| `npm run security-check` | Run security validation |
| `npm run optimize-images` | Optimize images to AVIF |
| `npm run image-report` | Generate image optimization report |

### Build Process

The `build` script automatically:
1. Runs `cleanup` to remove test files
2. Compiles TypeScript
3. Runs ESLint
4. Builds optimized Next.js bundles
5. Generates static pages
6. Optimizes assets
# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal if 3000 is in use)

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run TypeScript checks and ESLint |
| `npm run typecheck` | Run TypeScript compiler checks |
| `npm run format` | Format code with Biome |

## 🌍 Internationalizan optimized theming system with:

- **Instant switching**: 150ms transitions (50% faster than before)
- **View Transitions API**: Smooth animations in modern browsers
- **Haptic feedback**: Mobile vibration on theme toggle
- **System preference**: Auto-detect user's preferred theme
- **Persistent storage**: Theme saved to localStorage
- **No flash**: Prevents flash of unstyled content

### Performance Optimizations

- ✅ Removed inefficient `*` selector (90% fewer DOM operations)
- ✅ Reduced transition duration from 300ms to 150ms
- ✅ Optimized CSS to target only necessary elements
- ✅ Added View Transitions API for smooth theme changes

### Customizing Themes

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... other theme variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... other dark theme variables */
}
```

**Read more:** [THEME_SWITCHING_OPTIMIZATION.md](./docs/THEME_SWITCHING_OPTIMIZATION.md),
  "hero": {
    "title": "Build Smart. Build Fast.",
    // ... other hero section content
  }
  // ... other sections
}
```

## 🎨 Theming

The project includes a comprehensive theming system:

- **Light/Dark mode toggle**
- **CSS custom properties** for easy customization
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components with theme support

### Customizing Themes

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other theme variables */
}

.darQuick Deploy to Netlify (Recommended)

```bash
# 1. Commit your changes
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Netlify auto-deploys from main branch
```

The project is pre-configured for Netlify with `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables

Set these in Netlify Dashboard → Site Settings → Environment Variables:

```e� Performance & Optimization

### Recent Optimizations (December 2025)

#### Pricing Page
- **Bundle Size:** 8.02 kB → 3.74 kB (-53%)
- **Load Time:** ~5s → ~2.5s (-50%)
- **Technique:** Dynamic imports, loading states
- **Details:** [PRICING_PAGE_OPTIMIZATION.md](./docs/PRICING_PAGE_OPTIMIZATION.md)

#### Theme Switching
- **Transition Speed:** 300ms → 150ms (-50%)
- **Icon Animation:** 500ms → 300ms (-40%)
- **DOM Operations:** ~1000-2000 → ~100-200 elements (-90%)
- **Technique:** Optimized CSS selectors, View Transitions API
- **Details:** [THEME_SWITCHING_OPTIMIZATION.md](./docs/THEME_SWITCHING_OPTIMIZATION.md)

### Build Statistics

```
Route (app)                          Size      First Load JS
├ ƒ /                               134 B     102 kB
├ ƒ /_not-found                     993 B     103 kB
├ ƒ /[locale]                      11.3 kB    185 kB (Homepage)
├ ƒ /[locale]/logo-demo            3.36 kB    107 kB
├ ƒ /[locale]/pricing              3.74 kB    177 kB (Optimized)
└ ƒ /api/contact                    134 B     102 kB
Contributions are welcome! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Run checks: `npm run typecheck && npm run lint`
5. Commit: `git commit -m 'Add some feature'`
6. Push: `git push origin feature/your-feature-name`
7. Submit a pull request

### Development Guidelines

- ✅ Follow TypeScript best practices
- ✅ Use ESLint and Biome for code formatting
- ✅ Write meaningful commit messages
- ✅ Test responsive design on multiple devices
- ✅ Update translations for all languages (en, ru, uz)
- ✅ Run `npm run build` before submitting PR
- ✅ Document significant changes

### Code Style

```bash
# Format code
npm run format

# Check types
npm run typecheck

# Lint code
npm run lint
```

## ✅ Production Checklist

Before deploying to production:

- [x] TypeScript compilation passes
- [x] ESLint passes with no errors
- [x] Production build succeeds
- [x] All routes load correctly
- [x] Theme switching works smoothly
- [x] i18n works for all languages (en, ru, uz)
- [x] Responsive on mobile, tablet, desktop
- [x] Images optimized (AVIF format)
- [x] Test files removed
- [x] Environment variables configured
- [x] Performance optimizations applied
- [x] Documentation up to date

## 🎉 Project Status

**✅ Production Ready**

- All tests completed
- Performance optimized
- Documentation complete
- Clean codebase
- Ready for deployment

### Recent Updates

- **Dec 19, 2025**: Performance optimizations complete
  - Pricing page: 53% smaller bundle
  - Theme switching: 50% faster
  - Test files cleaned up
  - Production build verified

### Build Health

```
✅ TypeScript: No errors
✅ ESLint: Passing
✅ Build: Success (4-6s)
✅ Bundle: Optimized
✅ Routes: 6 production routes
```

## 📚 Documentation

### Quick Links

| Document | Description |
|----------|-------------|
| [DEPLOYMENT_CHECKLIST.md](./docs/DEPLOYMENT_CHECKLIST.md) | Complete deployment guide |
| [DEVELOPMENT.md](./docs/DEVELOPMENT.md) | Development guidelines |
| [MANUAL_TESTING_GUIDE.md](./docs/MANUAL_TESTING_GUIDE.md) | Testing scenarios |
| [TESTING_CHECKLIST.md](./docs/TESTING_CHECKLIST.md) | QA checklist |
| [PROJECT_COMPLETION_SUMMARY.md](./docs/PROJECT_COMPLETION_SUMMARY.md) | Project summary |
| [PRICING_PAGE_OPTIMIZATION.md](./docs/PRICING_PAGE_OPTIMIZATION.md) | Performance optimizations |
| [THEME_SWITCHING_OPTIMIZATION.md](./docs/THEME_SWITCHING_OPTIMIZATION.md) | Theme performance |

### Getting Help

1. Check documentation in `/docs` folder
2. Review code comments in source files
3. Check [Next.js docs](https://nextjs.org/docs) for framework questions
4. Review [shadcn/ui docs](https://ui.shadcn.com) for component usage

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration with i18n setup |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `tsconfig.json` | TypeScript strict mode configuration |
| `eslint.config.mjs` | ESLint rules |
| `biome.json` | Biome formatter/linter configuration |
| `components.json` | shadcn/ui configuration |
| `netlify.toml` | Netlify deployment configuration |
| `package.json` | Dependencies and scripts
vercel --prod
```

#### Self-Hosted
```bash
npm run build
npm run start  # Runs on http://localhost:3000
```

**📖 Full deployment guide:** [DEPLOYMENT_CHECKLIST.md](./docs/DEPLOYMENT_CHECKLIST.md)
### Netlify (Recommended)

The project is configured for Netlify deployment with `netlify.toml`:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration with i18n setup |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `tsconfig.json` | TypeScript configuration |
| `eslint.config.mjs` | ESLint configuration |
| `biome.json` | Biome formatter/linter configuration |
| `components.json` | shadcn/ui configuration |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Biome for code formatting
- Write meaningful commit messages
- Test responsive design on multiple devices
- Ensure all translations are updated for new features

## 📄 License

This project is proprietary software owned by Isaac Solutions.

## 📞 Support

For questions or support regarding this project:

- **Website**: [Isaac Solutions](https://isaac-solutions.netlify.app)
- **Email**: Contact through the website form
- **GitHub**: [SkovanskiyS](https://github.com/SkovanskiyS)

---

Built with ❤️ by Isaac Solutions team
#   i s a a c - s o l u t i o n s - w e b 
 
 