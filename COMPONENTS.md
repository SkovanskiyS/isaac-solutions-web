# Component Documentation

This document provides detailed information about all components used in the Isaac Solutions Web project.

## 🧩 Component Overview

### Component Categories

1. **Layout Components**: Navigation, headers, footers
2. **UI Components**: Reusable interface elements (shadcn/ui)
3. **Feature Components**: Business logic components
4. **Form Components**: Input handling and validation
5. **Utility Components**: Theme toggles, language switchers

---

## 📋 Layout Components

### Navigation Component

**File**: `src/components/Navigation.tsx`

**Purpose**: Main navigation bar with responsive design and smooth scrolling.

**Props**:
```typescript
interface NavigationProps {
  currentPage?: 'home' | 'pricing';
}
```

**Features**:
- Responsive hamburger menu for mobile
- Smooth scrolling to page sections
- Language and theme toggles
- Contact form modal trigger

**Usage**:
```tsx
<Navigation currentPage="home" />
```

---

## 🎨 UI Components (shadcn/ui)

### Button Component

**File**: `src/components/ui/button.tsx`

**Variants**:
- `default`: Primary button style
- `destructive`: For dangerous actions
- `outline`: Outlined button
- `secondary`: Secondary button style
- `ghost`: Transparent button
- `link`: Link-style button

**Sizes**: `default`, `sm`, `lg`, `icon`

**Usage**:
```tsx
<Button variant="default" size="lg">
  Click Me
</Button>
```

### Card Component

**File**: `src/components/ui/card.tsx`

**Sub-components**:
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content area
- `CardFooter`: Footer section

**Usage**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Input Component

**File**: `src/components/ui/input.tsx`

**Props**: Extends HTML input attributes with custom styling.

**Usage**:
```tsx
<Input 
  type="email" 
  placeholder="Enter your email"
  className="w-full"
/>
```

### Dialog Component

**File**: `src/components/ui/dialog.tsx`

**Sub-components**:
- `Dialog`: Root component
- `DialogTrigger`: Trigger element
- `DialogContent`: Modal content
- `DialogHeader`: Header section
- `DialogTitle`: Modal title
- `DialogDescription`: Description
- `DialogFooter`: Footer with actions

**Usage**:
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 🔧 Feature Components

### Portfolio Component

**File**: `src/components/Portfolio.tsx`

**Purpose**: Displays a grid of portfolio projects with detailed modals.

**Features**:
- Responsive grid layout
- Project detail modals
- Category filtering
- Image optimization
- Smooth animations

**Data Structure**:
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link?: string;
}
```

**Usage**:
```tsx
<Portfolio />
```

### ContactForm Component

**File**: `src/components/ContactForm.tsx`

**Purpose**: Multi-step contact form with validation.

**Features**:
- Form validation with error messages
- Multi-step wizard interface
- Email integration (planned)
- Loading states and success messages

**Form Fields**:
- Name (required, min 2 chars)
- Email (required, valid email)
- Company (optional)
- Message (required, min 10 chars)
- Service type selection

**Usage**:
```tsx
<ContactForm />
```

### ClientLogos Component

**File**: `src/components/ClientLogos.tsx`

**Purpose**: Animated carousel of client logos.

**Features**:
- Infinite scroll animation
- Responsive logo sizing
- Hover effects
- Automatic cycling

**Usage**:
```tsx
<ClientLogos />
```

---

## 🎯 Utility Components

### ThemeToggle Component

**File**: `src/components/ThemeToggle.tsx`

**Purpose**: Toggle between light, dark, and system theme preferences.

**Features**:
- System preference detection
- Persistent theme storage
- Smooth theme transitions
- Icon updates based on current theme

**Usage**:
```tsx
<ThemeToggle />
```

### LanguageSwitcher Component

**File**: `src/components/LanguageSwitcher.tsx`

**Purpose**: Language selection dropdown for i18n.

**Supported Languages**:
- English (en)
- Russian (ru)
- Uzbek (uz)

**Features**:
- Country flag icons
- Persistent language preference
- Smooth page transitions
- URL locale updates

**Usage**:
```tsx
<LanguageSwitcher />
```

### ParticleBackground Component

**File**: `src/components/ParticleBackground.tsx`

**Purpose**: Animated particle background effect.

**Features**:
- Canvas-based particle system
- Responsive to mouse movement
- Performance optimized
- Theme-aware colors

**Usage**:
```tsx
<ParticleBackground />
```

---

## 📱 Responsive Behavior

### Mobile-First Design

All components follow mobile-first responsive design:

```typescript
// Example responsive classes
className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
  xl:grid-cols-4
"
```

### Breakpoint Guidelines

- **Mobile**: 320px - 767px (base styles)
- **Tablet**: 768px - 1023px (`md:` prefix)
- **Desktop**: 1024px - 1279px (`lg:` prefix)
- **Large Desktop**: 1280px+ (`xl:` and `2xl:` prefixes)

---

## 🎨 Theming Support

### Theme Variables

All components use CSS custom properties for theming:

```css
.component {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}
```

### Dark Mode Implementation

Components automatically adapt to dark mode through CSS variables:

```css
.dark .component {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

---

## 🌍 Internationalization

### Translation Integration

Components use `next-intl` for translations:

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('componentName');
  
  return <h1>{t('title')}</h1>;
}
```

### Translation Keys Structure

```json
{
  "componentName": {
    "title": "Component Title",
    "description": "Component description",
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel"
    }
  }
}
```

---

## ♿ Accessibility Features

### ARIA Support

Components include proper ARIA attributes:

```tsx
<button
  aria-label={t('buttons.openMenu')}
  aria-expanded={isOpen}
  aria-controls="navigation-menu"
>
  Menu
</button>
```

### Keyboard Navigation

- Tab order management
- Enter/Space key handling
- Escape key support for modals
- Focus management

### Screen Reader Support

- Semantic HTML structure
- ARIA labels and descriptions
- Live region updates
- High contrast support

---

## 🔄 State Management

### Component State

Components use React hooks for local state:

```typescript
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(false);
```

### Global State

Context providers for shared state:

```typescript
const { theme, setTheme } = useContext(ThemeContext);
const { locale, setLocale } = useContext(LanguageContext);
```

---

## 🧪 Testing Components

### Component Testing Example

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Component from './Component';

const renderWithIntl = (component: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={mockMessages}>
      {component}
    </NextIntlClientProvider>
  );
};

describe('Component', () => {
  it('renders and handles interactions', () => {
    renderWithIntl(<Component />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(screen.getByText('Expected Result')).toBeInTheDocument();
  });
});
```

---

## 📚 Best Practices

### Component Development

1. **Single Responsibility**: One component, one purpose
2. **Prop Validation**: Use TypeScript interfaces
3. **Error Boundaries**: Wrap components that might fail
4. **Performance**: Use React.memo for expensive components
5. **Testing**: Write tests for complex logic

### Styling Guidelines

1. **Tailwind Classes**: Use utility classes primarily
2. **CSS Variables**: For theme-aware properties
3. **Responsive**: Mobile-first approach
4. **Animations**: Subtle and purposeful
5. **Accessibility**: High contrast and focus states

### Code Organization

```typescript
// 1. Imports
import React from 'react';
import { useTranslations } from 'next-intl';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component
export default function Component({ title, onAction }: ComponentProps) {
  // 4. Hooks and state
  const t = useTranslations();
  const [state, setState] = useState();
  
  // 5. Effects and handlers
  useEffect(() => {
    // Effect logic
  }, []);
  
  const handleClick = () => {
    // Handler logic
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

---

This documentation should be updated as components are added, modified, or removed from the project.