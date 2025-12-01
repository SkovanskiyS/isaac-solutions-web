# Quick Start Guide

This guide helps you get started with the Isaac Solutions Web project quickly.

## 🚀 Quick Setup (5 minutes)

### 1. Clone and Install
```bash
# Clone the repository
git clone https://github.com/SkovanskiyS/isaac-solutions-web.git
cd isaac-solutions-web

# Install dependencies (choose one)
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Environment Setup
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your settings
```

### 3. Run Development Server
```bash
# Start the dev server
npm run dev

# Server will start at http://localhost:3000
```

## 📋 Common Tasks

### Run Linting
```bash
npm run lint          # TypeScript check + ESLint
npm run typecheck     # TypeScript only
```

### Format Code
```bash
npm run format        # Format with Biome
```

### Build for Production
```bash
npm run build         # Create production build
npm run start         # Start production server
```

### Security & Testing
```bash
npm run security-check  # Run security validation
npm run test-auth       # Test authentication
```

## 🗂️ Project Structure Overview

```
isaac-solutions-web/
├── config/          # Configuration files
├── database/        # SQL schemas
├── docs/            # Documentation
├── scripts/         # Utility scripts
├── src/
│   ├── app/        # Next.js pages & routes
│   ├── components/ # React components
│   ├── contexts/   # React contexts
│   ├── lib/        # Utilities
│   └── types/      # TypeScript types
├── messages/        # Translations (en, ru, uz)
└── public/          # Static assets
```

## 🌍 Adding Translations

Edit translation files in `messages/`:
- `en.json` - English
- `ru.json` - Russian
- `uz.json` - Uzbek

## 🎨 Adding Components

1. Create component in `src/components/`
2. Export it in `src/components/index.ts`
3. Use it: `import { MyComponent } from '@/components'`

## 📝 Configuration

Edit site settings in `config/site.ts`:
```typescript
export const siteConfig = {
  name: 'Isaac Solutions',
  url: 'https://your-domain.com',
  locales: ['en', 'uz', 'ru'],
  // ... more settings
};
```

## 🔧 Path Aliases

- `@/*` - Everything in `src/`
- `@/config` - Configuration files
- `@/components` - Components
- `@/contexts` - React contexts
- `@/lib` - Utilities

## 📚 Documentation

See `docs/` folder for detailed guides:
- `PROJECT_STRUCTURE.md` - Full structure guide
- `DEVELOPMENT.md` - Development workflow
- `COMPONENTS.md` - Component documentation
- `SECURITY.md` - Security guidelines
- `API.md` - API documentation

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Next.js will automatically try alternative ports
# Or specify a different port:
PORT=3001 npm run dev
```

### TypeScript Errors
```bash
# Clean and rebuild TypeScript cache
rm -rf .next
rm tsconfig.tsbuildinfo
npm run dev
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

## 📞 Need Help?

- Check `docs/` for detailed documentation
- Review `README.md` for complete overview
- Contact: info@isaac-solutions.com

---

Happy coding! 🎉
