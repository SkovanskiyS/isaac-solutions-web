# Image Optimization - Quick Reference

## 🚀 Quick Start

### Optimize all images
```bash
npm run optimize-images
```

Output: `/public/optimized/`

## 📊 Results Summary

### Biggest Savings
- jahongir-masharipov.jpg: **8.1 MB → 90 KB** (98.9% ↓)
- Bron24main.png: **2.5 MB → 133 KB** (94.8% ↓)
- ClickDark.png: **957 KB → 18 KB** (98.1% ↓)
- PaymeDark.png: **682 KB → 16 KB** (97.7% ↓)
- Bron24_Dark.png: **592 KB → 15 KB** (97.4% ↓)

**Total Savings**: ~85% reduction across all images

## 💻 Usage in Components

```tsx
import Image from "next/image";

// Hero/Priority Image
<Image
  src="/optimized/Bron24main.webp"
  alt="Project screenshot"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 1200px"
  quality={90}
  priority={true}
  loading="eager"
/>

// Lazy-loaded Image
<Image
  src="/optimized/VitaCoffee.webp"
  alt="Project screenshot"
  fill
  sizes="(max-width: 768px) 100vw, 60vw"
  quality={85}
  loading="lazy"
/>
```

## 📐 Size Variants Available

Each image comes in 4 sizes:
- **Original** - `filename.webp`
- **Large** - `filename-lg.webp` (1920px)
- **Medium** - `filename-md.webp` (1280px)
- **Small** - `filename-sm.webp` (640px)

And 3 formats:
- `.webp` (recommended)
- `.avif` (best compression)
- `.jpg`/`.png` (optimized fallback)

## ⚙️ Quality Settings

| Image Type | Quality |
|------------|---------|
| Hero | 90 |
| Portfolio | 85-90 |
| Logos | 85 |
| Thumbnails | 75-80 |
| Backgrounds | 70-75 |

## 📱 Responsive Sizes

```tsx
// Full width mobile, 60% desktop
sizes="(max-width: 768px) 100vw, 60vw"

// Fixed widths
sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"

// Complex breakpoints
sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 1200px"
```

## ✅ Checklist for New Images

- [ ] Add image to `/public/`
- [ ] Run `npm run optimize-images`
- [ ] Use `/optimized/filename.webp` path
- [ ] Set appropriate `quality` (85-90)
- [ ] Define responsive `sizes`
- [ ] Set `priority` only for above-fold
- [ ] Use `loading="lazy"` for below-fold
- [ ] Add descriptive `alt` text
- [ ] Test on mobile and desktop

## 🎯 Performance Impact

**Before**: 14 MB total, 8-12s load (3G)  
**After**: 2 MB total, 1-2s load (3G)  

**5-10x faster loading** 🚀

## 📚 Full Documentation

See [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md) for complete guide.
