#!/usr/bin/env node

/**
 * Remove Test Files Script
 * Removes all test and development files before production deployment
 */

const fs = require('fs');
const path = require('path');

const filesToRemove = [
  'src/app/[locale]/test-page.tsx',
  'src/app/[locale]/page-test.tsx',
  'src/app/[locale]/page-final-test.tsx',
  'src/app/[locale]/page-clean.tsx',
  'src/app/[locale]/layout-test.tsx',
];

const dirsToRemove = [
  'src/app/[locale]/__archive__',
];

console.log('🧹 Removing Test Files...\n');

let removedCount = 0;
let errors = 0;

// Remove files
filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${file}`);
      removedCount++;
    } catch (error) {
      console.log(`❌ Failed to remove ${file}: ${error.message}`);
      errors++;
    }
  } else {
    console.log(`⏭️  Already removed: ${file}`);
  }
});

// Remove directories
dirsToRemove.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed directory: ${dir}`);
      removedCount++;
    } catch (error) {
      console.log(`❌ Failed to remove ${dir}: ${error.message}`);
      errors++;
    }
  } else {
    console.log(`⏭️  Already removed: ${dir}`);
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (errors === 0) {
  console.log(`✅ Cleanup complete! Removed ${removedCount} items.\n`);
  process.exit(0);
} else {
  console.log(`⚠️  Cleanup completed with ${errors} errors.\n`);
  process.exit(1);
}
