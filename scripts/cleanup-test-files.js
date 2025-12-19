#!/usr/bin/env node

/**
 * Cleanup Test Files Script
 * Identifies and optionally removes test/demo files from production build
 */

const fs = require('fs');
const path = require('path');

const TEST_FILES = [
  'src/app/[locale]/test-page.tsx',
  'src/app/[locale]/page-test.tsx',
  'src/app/[locale]/page-final-test.tsx',
  'src/app/[locale]/page-clean.tsx',
  'src/app/[locale]/layout-test.tsx',
];

const TEST_DIRECTORIES = [
  'src/app/[locale]/__archive__',
];

// Optional: Keep logo-demo if it's part of the brand guidelines
const OPTIONAL_FILES = [
  'src/app/[locale]/logo-demo',
];

console.log('🧹 Test File Cleanup Analysis\n');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check test files
console.log('📄 Test Files to Review:\n');
TEST_FILES.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`  ❌ ${file}`);
    console.log(`     Size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`     Modified: ${stats.mtime.toLocaleDateString()}\n`);
  } else {
    console.log(`  ✓ ${file} (already removed)\n`);
  }
});

// Check test directories
console.log('\n📁 Test Directories to Review:\n');
TEST_DIRECTORIES.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    console.log(`  ❌ ${dir}`);
    console.log(`     Contains: ${files.length} files`);
    files.forEach(f => console.log(`       - ${f}`));
    console.log();
  } else {
    console.log(`  ✓ ${dir} (already removed)\n`);
  }
});

// Check optional files
console.log('\n🔍 Optional Files to Review:\n');
OPTIONAL_FILES.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`  ⚠️  ${file}`);
    console.log(`     Keep if: Part of brand/style guide`);
    console.log(`     Remove if: Only used during development\n`);
  } else {
    console.log(`  ✓ ${file} (not present)\n`);
  }
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('💡 To remove these files:\n');
console.log('   Manual: Delete each file/directory');
console.log('   PowerShell: Remove-Item "path/to/file"\n');

console.log('⚠️  CAUTION: Make sure you have a git commit before deleting!\n');
