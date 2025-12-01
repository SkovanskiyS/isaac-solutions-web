# Website Animations Guide

This document describes the animation system implemented in the Isaac Solutions website.

## 🎨 Animation Libraries

### Framer Motion
- **Purpose**: Production-ready motion library for React
- **Installation**: `npm install framer-motion`
- **Documentation**: https://www.framer.com/motion/

## 📦 Animation Components

All animation components are located in `src/components/animations/`

### 1. FadeIn
Fades in content with a subtle upward slide effect.

**Usage:**
```tsx
import FadeIn from "@/components/animations/FadeIn";

<FadeIn delay={0.2} duration={0.5}>
  <h1>Your Content</h1>
</FadeIn>
```

**Props:**
- `delay` (number): Delay before animation starts in seconds (default: 0)
- `duration` (number): Animation duration in seconds (default: 0.5)
- `className` (string): Additional CSS classes

**Use Cases:**
- Hero section content
- Page titles
- Initial content load

---

### 2. SlideIn
Slides content in from a specified direction.

**Usage:**
```tsx
import SlideIn from "@/components/animations/SlideIn";

<SlideIn direction="left" delay={0.1} duration={0.6}>
  <div>Content slides from left</div>
</SlideIn>
```

**Props:**
- `direction` ("left" | "right" | "up" | "down"): Slide direction (default: "up")
- `delay` (number): Delay in seconds (default: 0)
- `duration` (number): Duration in seconds (default: 0.6)
- `className` (string): Additional CSS classes

**Use Cases:**
- Sidebar content
- Modal entrances
- Directional emphasis

---

### 3. ScrollReveal
Reveals content when it enters the viewport (scroll-triggered).

**Usage:**
```tsx
import ScrollReveal from "@/components/animations/ScrollReveal";

<ScrollReveal delay={0.2} direction="up" once={true}>
  <Card>Content appears on scroll</Card>
</ScrollReveal>
```

**Props:**
- `direction` ("up" | "down" | "left" | "right"): Reveal direction (default: "up")
- `delay` (number): Delay in seconds (default: 0)
- `duration` (number): Duration in seconds (default: 0.6)
- `once` (boolean): Animate only once (default: true)
- `className` (string): Additional CSS classes

**Use Cases:**
- Service cards
- Team member cards
- Section content
- Portfolio items

---

### 4. StaggerContainer & StaggerItem
Creates staggered animations for multiple child elements.

**Usage:**
```tsx
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

<StaggerContainer staggerDelay={0.15}>
  <StaggerItem>
    <div>Item 1 - appears first</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 2 - appears 0.15s later</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 3 - appears 0.15s after item 2</div>
  </StaggerItem>
</StaggerContainer>
```

**Props (StaggerContainer):**
- `staggerDelay` (number): Delay between each child in seconds (default: 0.1)
- `className` (string): Additional CSS classes

**Props (StaggerItem):**
- `className` (string): Additional CSS classes

**Use Cases:**
- Feature lists
- Multiple cards in a row
- Navigation items
- List items

---

## 🎭 Tailwind CSS Animations

Custom animations added to `tailwind.config.ts`

### Available Classes

| Class | Effect | Use Case |
|-------|--------|----------|
| `animate-fade-in` | Fade in with upward motion | Static page elements |
| `animate-slide-in-left` | Slide from left | Sidebar content |
| `animate-slide-in-right` | Slide from right | Right-aligned content |
| `animate-scale-in` | Scale from 95% to 100% | Pop-in effects |
| `animate-bounce-subtle` | Gentle continuous bounce | Icons, attention elements |
| `animate-glow` | Pulsing glow effect | Call-to-action, highlights |
| `animate-float` | Floating up/down | Decorative elements |

### Usage Example
```tsx
<Zap className="w-8 h-8 text-blue-400 animate-bounce-subtle" />
<div className="animate-fade-in">Content</div>
```

---

## 🎯 Animation Patterns Used

### Hero Section
```tsx
<FadeIn delay={0.1}>
  <Badge>New Features</Badge>
</FadeIn>
<FadeIn delay={0.2}>
  <h1>Main Title</h1>
</FadeIn>
<FadeIn delay={0.3}>
  <p>Subtitle</p>
</FadeIn>
<FadeIn delay={0.4}>
  <Button>CTA</Button>
</FadeIn>
```
**Pattern**: Sequential fade-ins with 0.1s increments

### Service Cards
```tsx
<ScrollReveal delay={0.1}>
  <Card>Service 1</Card>
</ScrollReveal>
<ScrollReveal delay={0.2}>
  <Card>Service 2</Card>
</ScrollReveal>
<ScrollReveal delay={0.3}>
  <Card>Service 3</Card>
</ScrollReveal>
```
**Pattern**: Scroll-triggered with staggered delays

### Feature Grid
```tsx
<StaggerContainer staggerDelay={0.15}>
  <StaggerItem><Feature 1 /></StaggerItem>
  <StaggerItem><Feature 2 /></StaggerItem>
  <StaggerItem><Feature 3 /></StaggerItem>
</StaggerContainer>
```
**Pattern**: Automatic staggered animations

---

## 🔧 Hover Effects

### Enhanced Hover Patterns

**Card Hover:**
```tsx
<Card className="hover:scale-105 hover:shadow-2xl transition-all duration-300">
```

**Button with Icon:**
```tsx
<Button className="group">
  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
  Text
</Button>
```

**Image Zoom:**
```tsx
<div className="overflow-hidden">
  <Image className="hover:scale-110 transition-transform duration-300" />
</div>
```

**Nested Hover (list items):**
```tsx
<ul>
  <li className="group/item hover:translate-x-1 transition-transform">
    <CheckCircle className="group-hover/item:scale-110 transition-transform" />
    Text
  </li>
</ul>
```

---

## ⚡ Performance Tips

1. **Use `will-change` sparingly** - Only for complex animations
2. **Prefer `transform` and `opacity`** - GPU-accelerated properties
3. **Set `once={true}` on ScrollReveal** - Prevents re-animations on scroll
4. **Lazy load animated sections** - Use Next.js dynamic imports for heavy components
5. **Limit simultaneous animations** - Don't animate too many elements at once

---

## 🎬 Animation Timing Guidelines

| Element Type | Duration | Delay Pattern |
|-------------|----------|---------------|
| Text (fade in) | 0.5s | Sequential: 0.1s increments |
| Cards (reveal) | 0.6s | Staggered: 0.1-0.2s |
| Buttons | 0.3s | Immediate (hover) |
| Icons | 0.3s | Immediate (hover) |
| Page sections | 0.6s | 0.2-0.4s after scroll |

---

## 🚀 Adding New Animations

### Step 1: Create Animation Component (Optional)
If you need a custom animation pattern, create a new component in `src/components/animations/`

### Step 2: Add to Tailwind (if using CSS animations)
```typescript
// tailwind.config.ts
keyframes: {
  'your-animation': {
    '0%': { /* start state */ },
    '100%': { /* end state */ }
  }
},
animation: {
  'your-animation': 'your-animation 1s ease-in-out'
}
```

### Step 3: Use in Components
```tsx
import YourAnimation from '@/components/animations/YourAnimation';

<YourAnimation>
  <Content />
</YourAnimation>
```

---

## 📚 Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind Animation Plugin](https://tailwindcss.com/docs/animation)
- [Animation Best Practices](https://web.dev/animations/)
- [Reduced Motion Accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

## ✅ Checklist for New Pages

When adding animations to new pages:

- [ ] Import necessary animation components
- [ ] Add hero section animations (FadeIn with staggered delays)
- [ ] Wrap section titles in ScrollReveal
- [ ] Add ScrollReveal to cards/content blocks
- [ ] Include hover effects on interactive elements
- [ ] Test scroll performance
- [ ] Verify animations on mobile devices
- [ ] Check accessibility (reduced motion)
