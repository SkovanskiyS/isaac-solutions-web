#!/usr/bin/env node

/**
 * Image Optimization Comparison Report
 * Compares original vs optimized image sizes
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function main() {
  console.log('\n📊 IMAGE OPTIMIZATION REPORT\n');
  console.log('='.repeat(80));

  const files = fs.readdirSync(PUBLIC_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];

  for (const file of imageFiles) {
    const baseName = path.basename(file, path.extname(file));
    const originalPath = path.join(PUBLIC_DIR, file);
    const webpPath = path.join(OPTIMIZED_DIR, `${baseName}.webp`);
    const avifPath = path.join(OPTIMIZED_DIR, `${baseName}.avif`);

    const originalSize = getFileSize(originalPath);
    const webpSize = getFileSize(webpPath);
    const avifSize = getFileSize(avifPath);

    if (webpSize > 0) {
      totalOriginal += originalSize;
      totalOptimized += webpSize;

      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      results.push({
        file,
        originalSize,
        webpSize,
        avifSize,
        savings: parseFloat(savings)
      });
    }
  }

  // Sort by savings
  results.sort((a, b) => b.savings - a.savings);

  console.log('\n🏆 TOP OPTIMIZATIONS\n');
  results.slice(0, 5).forEach((result, index) => {
    console.log(`${index + 1}. ${result.file}`);
    console.log(`   Original: ${formatBytes(result.originalSize)}`);
    console.log(`   WebP: ${formatBytes(result.webpSize)} | AVIF: ${formatBytes(result.avifSize)}`);
    console.log(`   Savings: ${result.savings}% 🎉\n`);
  });

  console.log('='.repeat(80));
  console.log('\n📈 OVERALL STATISTICS\n');
  console.log(`Total original size: ${formatBytes(totalOriginal)}`);
  console.log(`Total WebP size: ${formatBytes(totalOptimized)}`);
  console.log(`Total savings: ${formatBytes(totalOriginal - totalOptimized)}`);
  console.log(`Percentage saved: ${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%`);
  
  const optimizedFiles = fs.readdirSync(OPTIMIZED_DIR).length;
  console.log(`\nOptimized files created: ${optimizedFiles}`);
  console.log(`Variants per image: WebP, AVIF, + 3 responsive sizes each`);
  
  console.log('\n✅ OPTIMIZATION COMPLETE!\n');
}

main();
