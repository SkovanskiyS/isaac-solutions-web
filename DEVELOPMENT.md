# Development Guide

This guide provides detailed information for developers working on the Isaac Solutions Web project.

## 🏗️ Architecture Overview

### App Router Structure

The project uses Next.js 15 App Router with internationalization:

```
src/app/
├── [locale]/          # Internationalized routes
│   ├── page.tsx       # Homepage (/)
│   ├── layout.tsx     # Locale-specific layout
│   ├── dashboard/     # Dashboard section (/dashboard)
│   ├── faq/          # FAQ page (/faq)
│   ├── login/        # Authentication (/login)
│   ├── signup/       # User registration (/signup)
│   └── pricing/      # Pricing page (/pricing)
├── layout.tsx        # Root layout
├── globals.css       # Global styles
└── ClientBody.tsx    # Client-side body wrapper
```

### Component Architecture

```
components/
├── ui/               # Base UI components (shadcn/ui)
├── Navigation.tsx    # Main navigation component
├── ContactForm.tsx   # Multi-step contact form
├── Portfolio.tsx     # Project showcase grid
├── ThemeToggle.tsx   # Dark/light mode switcher
├── LanguageSwitcher.tsx # Language selection
├── ClientLogos.tsx   # Client logo carousel
└── ParticleBackground.tsx # Animated background
```

## 🎨 Styling Guide

### Design System

- **Colors**: Defined in `tailwind.config.ts` and CSS custom properties
- **Typography**: System fonts with Geist as primary
- **Spacing**: Tailwind's default spacing scale (0.25rem increments)
- **Breakpoints**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`

### Theme Variables

```css
/* Light theme */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
}
```

### Component Styling Patterns

1. **Layout Components**: Use flexbox and grid for structure
2. **Interactive Elements**: Include hover, focus, and active states
3. **Responsive Design**: Mobile-first approach with progressive enhancement
4. **Animation**: Subtle transitions using Tailwind's transition utilities

## 🌍 Internationalization (i18n)

### Configuration

The i18n setup uses `next-intl` with the following structure:

```typescript
// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}));
```

### Translation Management

1. **File Structure**: One JSON file per locale in `/messages/`
2. **Nested Keys**: Organize translations by feature/component
3. **Interpolation**: Support for variables and pluralization
4. **Fallbacks**: English as default fallback language

### Adding New Content

```typescript
// In your component
import {useTranslations} from 'next-intl';

export default function Component() {
  const t = useTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description', {name: 'Isaac'})}</p>
    </div>
  );
}
```

```json
// In messages/en.json
{
  "sectionName": {
    "title": "Welcome",
    "description": "Hello {name}, welcome to our site!"
  }
}
```

## 🔧 State Management

### Context Providers

The project uses React Context for global state:

```typescript
// contexts/ThemeContext.tsx
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  // Theme logic here
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Available Contexts

- **ThemeContext**: Manages dark/light theme preferences
- **LanguageContext**: Handles language switching and persistence

## 📱 Responsive Design Patterns

### Breakpoint Usage

```typescript
// Component example
<div className="
  grid grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4 md:gap-6 lg:gap-8
">
  {/* Content */}
</div>
```

### Mobile-First Approach

1. Design for mobile screens first (320px+)
2. Add tablet styles with `md:` prefix (768px+)
3. Enhance for desktop with `lg:` and `xl:` (1024px+)
4. Use `2xl:` for large screens (1536px+)

## 🧪 Testing Guidelines

### Component Testing

```typescript
// Example test structure
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Component from './Component';

const messages = {
  // Mock translations
};

describe('Component', () => {
  it('renders correctly', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Component />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Testing Checklist

- [ ] Component renders without errors
- [ ] Translations work correctly
- [ ] Theme switching functions
- [ ] Responsive design works on all breakpoints
- [ ] Forms submit and validate properly
- [ ] Navigation works correctly

## 🚀 Performance Optimization

### Bundle Optimization

1. **Dynamic Imports**: Use for heavy components
2. **Image Optimization**: Next.js Image component with proper sizing
3. **Font Loading**: Preload critical fonts
4. **Code Splitting**: Automatic with App Router

### Performance Monitoring

```typescript
// Example performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🔒 Security Best Practices

### Input Validation

```typescript
// Form validation example
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

### Security Headers

Configured in `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

## 🛠️ Development Workflow

### Code Quality

1. **TypeScript**: Strict mode enabled for type safety
2. **ESLint**: Configured with Next.js and TypeScript rules
3. **Biome**: Fast formatter and linter
4. **Husky**: Pre-commit hooks for code quality

### Git Workflow

```bash
# Feature development
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Create pull request for review
```

### Commit Message Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 📊 Analytics and Monitoring

### Performance Metrics

Monitor these key metrics:

- **Core Web Vitals**: LCP, FID, CLS
- **Time to Interactive (TTI)**
- **First Contentful Paint (FCP)**
- **Bundle size and loading times**

### Error Monitoring

Consider integrating:

- Sentry for error tracking
- Google Analytics for user behavior
- Vercel Analytics for performance insights

## 🔄 Deployment Pipeline

### Netlify Configuration

```toml
# netlify.toml
[build]
  publish = ".next"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Management

- **Development**: `.env.local`
- **Staging**: Netlify environment variables
- **Production**: Netlify production environment

---

This guide should be updated as the project evolves and new patterns emerge.