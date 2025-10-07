# 🔒 Security Best Practices

This document outlines security measures and best practices for this project.

## ⚠️ CRITICAL: Environment Variables

### Never Commit These Files:
- ❌ `.env.local`
- ❌ `.env.development.local`
- ❌ `.env.production.local`
- ❌ Any file containing API keys, secrets, or credentials

### ✅ What's Safe to Commit:
- `.env.example` (template with placeholder values)
- `.gitignore` (ensures sensitive files are ignored)

## 🔑 Supabase Keys Security

### NEXT_PUBLIC_SUPABASE_ANON_KEY (Client-Safe)
- ✅ Can be exposed to the browser
- Protected by Row Level Security (RLS) policies
- Used for client-side authentication and queries

### SUPABASE_SERVICE_ROLE_KEY (Server-Only)
- ⚠️ **BYPASSES ALL ROW LEVEL SECURITY**
- ❌ NEVER use in client-side code
- ✅ Only use in API routes (`/app/api/*`)
- Must be stored as environment variable on hosting platform

## 🛡️ If Keys Are Compromised

If you accidentally commit sensitive keys to git:

### 1. Rotate Keys Immediately
```bash
# Go to Supabase Dashboard
# Project Settings → API → Reset Service Role Key
```

### 2. Remove from Git History
```bash
# WARNING: This rewrites git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (coordinate with team first!)
git push origin --force --all
```

### 3. Alternative: Use BFG Repo-Cleaner
```bash
# Install BFG: https://rtyley.github.io/bfg-repo-cleaner/
bfg --delete-files .env.local
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push origin --force --all
```

## 🏗️ Production Deployment

### Environment Variables Setup

**Netlify:**
1. Go to Site Settings → Build & Deploy → Environment
2. Add each variable individually
3. Never commit the values to git

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Vercel encrypts all environment variables

**Other Platforms:**
- Render: Environment Groups
- Railway: Variables tab
- Heroku: Config Vars

## 📋 Security Checklist

- [x] `.env.local` added to `.gitignore`
- [x] `.env.example` created for team reference
- [x] Security headers added to `next.config.js`
- [x] XSS vulnerabilities fixed (innerHTML → textContent)
- [ ] Authentication middleware implemented
- [ ] Password hashing enabled
- [ ] Rate limiting configured
- [ ] CSRF protection added

## 🔍 Regular Security Audits

### Run Security Checks:
```bash
# Check for secrets in code
git secrets --scan

# Audit npm packages
npm audit

# Check for outdated packages
npm outdated
```

### Online Scanners:
- https://securityheaders.com
- https://observatory.mozilla.org
- https://snyk.io

## 📞 Security Incident Response

If you discover a security vulnerability:

1. **Do NOT** create a public issue
2. Rotate compromised credentials immediately
3. Document the incident
4. Review access logs
5. Update security measures to prevent recurrence

## 🔗 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)

---

**Last Updated:** October 7, 2025  
**Reviewed By:** Security Audit
