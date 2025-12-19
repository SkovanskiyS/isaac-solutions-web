# Image Optimization Guide

This document provides guidelines for optimizing images in the Isaac Solutions Web project.

## Overview

The project uses Next.js Image Optimization with modern image formats (WebP and AVIF) to improve performance and reduce bandwidth usage.

## Optimization Results

The image optimization script has achieved significant file size reductions:

### Top Savings
- **jahongir-masharipov.jpg**: 8.1 MB → 90 KB (WebP-lg) = **98.9% reduction**
- **Bron24main.png**: 2.5 MB → 132 KB (WebP-lg) = **94.8% reduction**
- **ClickDark.png**: 957 KB → 15 KB (WebP) = **98.4% reduction**
- **PaymeDark.png**: 682 KB → 16 KB (WebP) = **97.7% reduction**
- **Bron24_Dark.png**: 592 KB → 15 KB (WebP) = **97.5% reduction**

### Average Improvements
- **WebP format**: 80-98% size reduction
- **AVIF format**: 70-99% size reduction
- **Optimized originals**: 30-85% size reduction

## Configuration

### Next.js Config (`next.config.js`)

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

This configuration:
- Prioritizes AVIF format (best compression) with WebP fallback
- Defines responsive breakpoints for different screen sizes
- Caches optimized images for 60 seconds

## Image Sizes Generated

The optimization script creates 4 size variants for each image:

1. **Original** - Full size (optimized)
2. **Large (-lg)** - Max width 1920px (for desktop screens)
3. **Medium (-md)** - Max width 1280px (for tablets)
4. **Small (-sm)** - Max width 640px (for mobile)

Each size is available in 3 formats:
- `.webp` - Widely supported modern format
- `.avif` - Best compression, newer browsers
- Original format (`.jpg`/`.png`) - Optimized fallback

## Using Optimized Images

### Portfolio Component Example

```tsx
<Image
  src="/optimized/Bron24main.webp"
  alt="Project screenshot"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 1200px"
  quality={90}
  priority={false}
  loading="lazy"
/>
```

### Image Component Props

- **src**: Use `/optimized/filename.webp` for optimized images
- **sizes**: Define responsive sizes for optimal loading
- **quality**: 85-90 for main images, 75-80 for thumbnails
- **priority**: `true` for above-the-fold images, `false` otherwise
- **loading**: `"eager"` for priority images, `"lazy"` for below-the-fold

## Running Optimization

### Optimize All Images

```bash
npm run optimize-images
```

This will:
1. Process all images in `/public` directory
2. Generate WebP and AVIF versions
3. Create 4 size variants for each
4. Save to `/public/optimized/` directory

### Output Location

All optimized images are saved to:
```
/public/optimized/
```

## Best Practices

### 1. Image Selection

✅ **DO:**
- Use WebP for general images (best compatibility)
- Use AVIF for hero images (best compression)
- Use responsive sizes based on viewport
- Compress images before committing

❌ **DON'T:**
- Upload images larger than 2MB
- Use PNG for photos (use JPG/WebP instead)
- Skip the `alt` attribute
- Set `priority={true}` on all images

### 2. Sizes Attribute

Define accurate sizes for optimal performance:

```tsx
// Full width on mobile, 60% on desktop
sizes="(max-width: 768px) 100vw, 60vw"

// Fixed widths at different breakpoints
sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"

// Large hero images
sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 1200px"
```

### 3. Loading Strategy

**Priority Images** (above-the-fold):
```tsx
<Image
  priority={true}
  loading="eager"
  quality={90}
/>
```

**Lazy Images** (below-the-fold):
```tsx
<Image
  priority={false}
  loading="lazy"
  quality={85}
/>
```

### 4. Quality Settings

- **Hero images**: 90
- **Portfolio images**: 85-90
- **Logos**: 85
- **Thumbnails**: 75-80
- **Background images**: 70-75

## File Size Guidelines

### Target Sizes
- **Mobile (640px)**: < 50 KB
- **Tablet (1280px)**: < 150 KB
- **Desktop (1920px)**: < 300 KB
- **Hero images**: < 500 KB

### Current Optimized Sizes

| Image | Original | WebP | AVIF | Savings |
|-------|----------|------|------|---------|
| Bron24main | 2,528 KB | 133 KB | 149 KB | 94.8% |
| jahongir-masharipov | 8,113 KB | 99 KB | 90 KB | 98.9% |
| ClickDark | 957 KB | 18 KB | 15 KB | 98.4% |
| PaymeDark | 682 KB | 16 KB | 18 KB | 97.7% |
| Bron24_Dark | 592 KB | 15 KB | 15 KB | 97.5% |

## Troubleshooting

### Images Not Loading

1. Check the file path: `/optimized/filename.webp`
2. Verify the file exists in `/public/optimized/`
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild: `npm run build`

### Poor Image Quality

1. Increase `quality` prop (85-95)
2. Use larger size variant (-lg instead of -md)
3. Check original image quality

### Slow Loading

1. Ensure correct `sizes` attribute
2. Use `loading="lazy"` for below-fold images
3. Reduce `quality` for non-critical images
4. Consider using smaller size variants

## Performance Metrics

### Before Optimization
- Total image size: ~14 MB
- Largest image: 8.1 MB
- Average load time: 8-12s on 3G

### After Optimization
- Total image size: ~2 MB (WebP)
- Largest image: 707 KB
- Average load time: 1-2s on 3G

**Improvement**: ~85% reduction in total size, 5-10x faster loading

## Maintenance

### Adding New Images

1. Add original image to `/public/` directory
2. Run `npm run optimize-images`
3. Update component to use `/optimized/filename.webp`
4. Test across different devices/browsers

### Updating Existing Images

1. Replace image in `/public/`
2. Delete optimized versions in `/public/optimized/`
3. Run `npm run optimize-images`
4. Verify changes in browser

## Browser Support

### Format Support
- **WebP**: 97% of browsers (Chrome, Firefox, Edge, Safari 14+)
- **AVIF**: 85% of browsers (Chrome 85+, Firefox 93+, Safari 16+)
- **JPG/PNG**: 100% (automatic fallback)

Next.js automatically serves the best format supported by each browser.

## Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP Format](https://developers.google.com/speed/webp)
- [AVIF Format](https://avif.io/)
- [Sharp Library](https://sharp.pixelplumbing.com/)
