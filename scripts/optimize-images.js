const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'optimized');

// Image quality settings
const QUALITY_SETTINGS = {
  jpeg: { quality: 85, progressive: true },
  png: { quality: 85, compressionLevel: 9, progressive: true },
  webp: { quality: 85, effort: 6 },
  avif: { quality: 80, effort: 9 },
};

// Size configurations for responsive images
const SIZES = [
  { suffix: '', width: null, height: null }, // Original size (optimized)
  { suffix: '-lg', width: 1920, height: null },
  { suffix: '-md', width: 1280, height: null },
  { suffix: '-sm', width: 640, height: null },
];

async function optimizeImage(filePath, fileName) {
  try {
    const fileExt = path.extname(fileName).toLowerCase();
    const baseName = path.basename(fileName, fileExt);
    
    // Skip SVG files - they're already optimized
    if (fileExt === '.svg') {
      console.log(`⏭️  Skipping SVG: ${fileName}`);
      return;
    }

    console.log(`\n🖼️  Processing: ${fileName}`);
    
    // Get original file size
    const originalSize = fs.statSync(filePath).size;
    const originalSizeKB = (originalSize / 1024).toFixed(2);
    console.log(`   Original size: ${originalSizeKB} KB`);

    // Process each size variant
    for (const size of SIZES) {
      let pipeline = sharp(filePath);
      
      // Get image metadata
      const metadata = await pipeline.metadata();
      
      // Resize if needed
      if (size.width && metadata.width > size.width) {
        pipeline = pipeline.resize(size.width, size.height, {
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      // Generate different formats
      const formats = [
        { ext: '.webp', options: QUALITY_SETTINGS.webp },
        { ext: '.avif', options: QUALITY_SETTINGS.avif },
      ];

      // Also include original format (optimized)
      if (fileExt === '.jpg' || fileExt === '.jpeg') {
        formats.push({ ext: '.jpg', options: QUALITY_SETTINGS.jpeg });
      } else if (fileExt === '.png') {
        formats.push({ ext: '.png', options: QUALITY_SETTINGS.png });
      }

      for (const format of formats) {
        const outputFileName = `${baseName}${size.suffix}${format.ext}`;
        const outputPath = path.join(OUTPUT_DIR, outputFileName);

        try {
          let formatPipeline = pipeline.clone();

          // Apply format-specific processing
          if (format.ext === '.webp') {
            formatPipeline = formatPipeline.webp(format.options);
          } else if (format.ext === '.avif') {
            formatPipeline = formatPipeline.avif(format.options);
          } else if (format.ext === '.jpg') {
            formatPipeline = formatPipeline.jpeg(format.options);
          } else if (format.ext === '.png') {
            formatPipeline = formatPipeline.png(format.options);
          }

          await formatPipeline.toFile(outputPath);

          const newSize = fs.statSync(outputPath).size;
          const newSizeKB = (newSize / 1024).toFixed(2);
          const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
          
          console.log(`   ✅ ${outputFileName}: ${newSizeKB} KB (${savings}% smaller)`);
        } catch (err) {
          console.error(`   ❌ Failed to create ${outputFileName}:`, err.message);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}\n`);
  }

  // Get all image files from public directory
  const files = fs.readdirSync(PUBLIC_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('⚠️  No images found to optimize!');
    return;
  }

  console.log(`📊 Found ${imageFiles.length} images to optimize\n`);

  // Process all images
  for (const file of imageFiles) {
    const filePath = path.join(PUBLIC_DIR, file);
    await optimizeImage(filePath, file);
  }

  console.log('\n✨ Image optimization complete!');
  console.log(`\n💡 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n📝 Next steps:');
  console.log('   1. Review the optimized images in /public/optimized/');
  console.log('   2. Replace original images if satisfied with results');
  console.log('   3. Update image paths in your components to use optimized versions');
}

main().catch(console.error);
