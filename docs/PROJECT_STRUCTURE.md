# Project Structure Documentation

This document describes the improved organization of the Isaac Solutions Web project.

## 📁 Directory Structure

```
isaac-solutions-web/
├── config/                      # Centralized configuration
│   ├── site.ts                 # Site-wide settings
│   ├── i18n.ts                 # Internationalization config
│   └── index.ts                # Configuration exports
│
├── database/                    # Database files
│   ├── contacts-table.sql      # Contacts table schema
│   ├── fix-contacts-rls.sql    # RLS fixes
│   └── supabase-schema.sql     # Main Supabase schema
│
├── docs/                        # Documentation files
│   ├── ANIMATIONS.md           # Animation component docs
│   ├── API.md                  # API documentation
│   ├── AUTH-MIDDLEWARE-SUMMARY.md
│   ├── CLAUDE.md               # AI assistant notes
│   ├── CODE_REVIEW_SUMMARY.md
│   ├── COMPONENTS.md           # Component documentation
│   ├── CORPORATE_DESIGN.md     # Design guidelines
│   ├── DEVELOPMENT.md          # Development guide
│   ├── LIGHT_THEME_WHITE_UPDATE.md
│   ├── SECURITY-AUTH-MIDDLEWARE.md
│   ├── SECURITY-ENV-VARS.md
│   └── SECURITY.md             # Security documentation
│
├── i18n/                        # i18n configuration
│   └── request.ts              # Locale detection
│
├── messages/                    # Translation files
│   ├── en.json                 # English translations
│   ├── ru.json                 # Russian translations
│   └── uz.json                 # Uzbek translations
│
├── public/                      # Static assets
│   ├── portfolio/              # Portfolio images
│   └── ...                     # Other static files
│
├── scripts/                     # Utility scripts
│   ├── security-check.js       # Security validation
│   └── test-auth-middleware.js # Auth testing
│
├── src/                         # Source code
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Localized routes
│   │   │   ├── __archive__/   # Old/test files
│   │   │   ├── pricing/       # Pricing page
│   │   │   ├── layout.tsx     # Locale layout
│   │   │   └── page.tsx       # Homepage
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Root page
│   │
│   ├── components/             # React components
│   │   ├── animations/        # Animation components
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── index.ts       # Animation exports
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── alert.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...            # Other UI components
│   │   ├── ContactForm.tsx    # Contact form
│   │   ├── Navigation.tsx     # Navigation bar
│   │   ├── Portfolio.tsx      # Portfolio showcase
│   │   ├── ThemeToggle.tsx    # Theme switcher
│   │   ├── LanguageSwitcher.tsx
│   │   └── index.ts           # Component exports
│   │
│   ├── contexts/               # React contexts
│   │   ├── ThemeContext.tsx   # Theme management
│   │   ├── LanguageContext.tsx
│   │   └── index.ts           # Context exports
│   │
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts           # General utilities
│   │   ├── supabase-admin.ts  # Supabase helpers
│   │   └── index.ts           # Lib exports
│   │
│   ├── types/                  # TypeScript types
│   │   └── globals.d.ts       # Global type definitions
│   │
│   └── middleware.ts           # Next.js middleware
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── biome.json                  # Biome configuration
├── components.json             # shadcn/ui config
├── eslint.config.mjs           # ESLint configuration
├── netlify.toml                # Netlify deployment config
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # Project README
├── tailwind.config.ts          # Tailwind CSS config
└── tsconfig.json               # TypeScript configuration
```

## 🎯 Key Improvements

### 1. **Centralized Configuration** (`config/`)
- All configuration consolidated in one place
- Easy to maintain and update
- Type-safe configuration with TypeScript
- Accessible via `@/config` path alias

### 2. **Organized Documentation** (`docs/`)
- All markdown documentation files in dedicated folder
- Easy to navigate and maintain
- Clear separation from code

### 3. **Database Files** (`database/`)
- All SQL schemas and migrations in one place
- Better version control for database changes
- Clear separation of concerns

### 4. **Utility Scripts** (`scripts/`)
- Build and test scripts organized separately
- Easy to add new utility scripts
- Referenced in `package.json` scripts

### 5. **Component Organization** (`src/components/`)
- Barrel exports via `index.ts` files
- Cleaner imports throughout the app
- Better code organization

### 6. **Archive for Old Files** (`src/app/[locale]/__archive__/`)
- Test and backup files preserved but organized
- Doesn't clutter the active codebase
- Easy to reference or delete later

## 📝 Import Patterns

### Before
```typescript
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
```

### After (with barrel exports)
```typescript
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components';
import { useTheme } from '@/contexts';
import { cn } from '@/lib';
import { siteConfig } from '@/config';
```

## 🔧 Configuration Usage

### Using Site Config
```typescript
import { siteConfig } from '@/config';

const url = siteConfig.url;
const locales = siteConfig.locales;
```

### Using i18n Config
```typescript
import { i18nConfig } from '@/config';

const locales = i18nConfig.locales;
const defaultLocale = i18nConfig.defaultLocale;
```

## 🚀 Scripts

All utility scripts are now in the `scripts/` directory:

```json
{
  "security-check": "node scripts/security-check.js",
  "test-auth": "node scripts/test-auth-middleware.js"
}
```

## 📦 Path Aliases

TypeScript path aliases configured in `tsconfig.json`:

- `@/*` → `./src/*` (for source files)
- `@/config` → `./config` (for configuration)

## 🎨 Component Exports

### Main Components (`src/components/index.ts`)
```typescript
export { 
  Navigation,
  ContactForm,
  Portfolio,
  ThemeToggle,
  LanguageSwitcher,
  // ... and more
} from '@/components';
```

### Animation Components (`src/components/animations/index.ts`)
```typescript
export {
  FadeIn,
  SlideIn,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
```

### Contexts (`src/contexts/index.ts`)
```typescript
export {
  ThemeProvider,
  useTheme,
  LanguageProvider,
  useLanguage,
} from '@/contexts';
```

### Library Utilities (`src/lib/index.ts`)
```typescript
export { cn } from '@/lib';
```

## 🗂️ Archive Policy

The `__archive__` folder contains:
- Old test pages
- Backup files
- Deprecated components

These files are kept for reference but not used in production. Consider:
1. Reviewing periodically
2. Deleting if no longer needed
3. Documenting why files were archived

## 📚 Additional Resources

- **Main README**: See `README.md` for project overview
- **Development Guide**: See `docs/DEVELOPMENT.md`
- **API Documentation**: See `docs/API.md`
- **Security Guide**: See `docs/SECURITY.md`
- **Component Docs**: See `docs/COMPONENTS.md`

## 🔄 Migration Notes

When updating imports after this restructure:

1. **Components**: Use barrel exports from `@/components`
2. **Contexts**: Use barrel exports from `@/contexts`
3. **Configuration**: Import from `@/config`
4. **Scripts**: Update script paths in `package.json`
5. **Documentation**: Reference files in `docs/` folder

## ✅ Benefits

1. **Better Organization**: Clear separation of concerns
2. **Easier Navigation**: Logical folder structure
3. **Cleaner Imports**: Barrel exports reduce import complexity
4. **Maintainability**: Centralized configuration
5. **Scalability**: Easy to add new features
6. **Documentation**: All docs in one place
7. **Type Safety**: Configuration with TypeScript
