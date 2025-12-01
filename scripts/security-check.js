#!/usr/bin/env node

/**
 * Security Check Script
 * Verifies that sensitive files are properly ignored by git
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Running Security Checks...\n');

let hasIssues = false;

// Check 1: Verify .env.local is not tracked
console.log('✓ Checking .env files are not tracked...');
try {
  const trackedEnvFiles = execSync('git ls-files | grep -E "\\.env"', { encoding: 'utf-8' }).trim();
  if (trackedEnvFiles) {
    console.error('❌ CRITICAL: Environment files are tracked in git:');
    console.error(trackedEnvFiles);
    hasIssues = true;
  } else {
    console.log('  ✅ No .env files tracked in git');
  }
} catch (error) {
  console.log('  ✅ No .env files tracked in git');
}

// Check 2: Verify .gitignore exists and includes .env*
console.log('\n✓ Checking .gitignore configuration...');
const gitignorePath = path.join(__dirname, '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
  if (gitignoreContent.includes('.env')) {
    console.log('  ✅ .gitignore properly configured for environment files');
  } else {
    console.error('  ❌ WARNING: .gitignore does not include .env pattern');
    hasIssues = true;
  }
} else {
  console.error('  ❌ CRITICAL: .gitignore file not found');
  hasIssues = true;
}

// Check 3: Verify .env.example exists
console.log('\n✓ Checking .env.example exists...');
const envExamplePath = path.join(__dirname, '.env.example');
if (fs.existsSync(envExamplePath)) {
  console.log('  ✅ .env.example exists for team reference');
  
  // Verify it doesn't contain real secrets
  const envExampleContent = fs.readFileSync(envExamplePath, 'utf-8');
  if (envExampleContent.includes('your_') || envExampleContent.includes('placeholder')) {
    console.log('  ✅ .env.example uses placeholder values');
  } else {
    console.error('  ⚠️  WARNING: .env.example might contain real values');
  }
} else {
  console.warn('  ⚠️  .env.example not found (recommended for team onboarding)');
}

// Check 4: Verify .env.local exists locally
console.log('\n✓ Checking local environment configuration...');
const envLocalPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envLocalPath)) {
  console.log('  ✅ .env.local exists locally');
  
  // Check if it's properly ignored
  try {
    const checkIgnore = execSync('git check-ignore .env.local', { encoding: 'utf-8' }).trim();
    if (checkIgnore.includes('.env.local')) {
      console.log('  ✅ .env.local is properly ignored by git');
    }
  } catch (error) {
    console.error('  ❌ CRITICAL: .env.local is NOT ignored by git');
    hasIssues = true;
  }
} else {
  console.warn('  ⚠️  .env.local not found (copy from .env.example)');
}

// Check 5: Scan for potential secrets in staged files
console.log('\n✓ Scanning staged files for secrets...');
try {
  const stagedFiles = execSync('git diff --staged --name-only', { encoding: 'utf-8' }).trim();
  if (stagedFiles) {
    const sensitivePatterns = [
      /SUPABASE_SERVICE_ROLE_KEY\s*=\s*ey[A-Za-z0-9_-]+/,
      /password\s*=\s*["'][^"']{8,}["']/i,
      /api[_-]?key\s*=\s*["'][^"']+["']/i,
      /secret\s*=\s*["'][^"']+["']/i
    ];
    
    let foundSecrets = false;
    stagedFiles.split('\n').forEach(file => {
      try {
        const content = execSync(`git diff --staged ${file}`, { encoding: 'utf-8' });
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            console.error(`  ❌ WARNING: Potential secret found in staged file: ${file}`);
            foundSecrets = true;
            hasIssues = true;
          }
        });
      } catch (err) {
        // File might be binary or deleted
      }
    });
    
    if (!foundSecrets) {
      console.log('  ✅ No obvious secrets found in staged files');
    }
  } else {
    console.log('  ✅ No staged files to check');
  }
} catch (error) {
  console.log('  ✅ No staged files to check');
}

// Final summary
console.log('\n' + '='.repeat(50));
if (hasIssues) {
  console.error('❌ SECURITY ISSUES FOUND - Please review above');
  console.error('   Read SECURITY.md for remediation steps');
  process.exit(1);
} else {
  console.log('✅ All security checks passed!');
  console.log('   Your secrets are properly protected.');
  process.exit(0);
}
