# Manual Testing Guide

## Prerequisites
✅ TypeScript compilation passed
✅ Production build successful
✅ No build errors

## Quick Start Testing

### 1. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## Testing Scenarios

### Scenario 1: Internationalization Testing (15 minutes)

**Objective:** Verify all 3 languages work correctly

**Steps:**
1. Open http://localhost:3000/en
2. Verify all English content displays correctly
3. Check navigation menu, hero section, services
4. Click language switcher → Select "Русский"
5. Verify URL changes to /ru
6. Verify all content displays in Russian
7. Click language switcher → Select "O'zbekcha"
8. Verify URL changes to /uz
9. Verify all content displays in Uzbek
10. Navigate to pricing page in each language
11. Check footer content in all languages

**Expected Results:**
- ✅ All content translates correctly
- ✅ No missing translations (no JSON keys visible)
- ✅ URLs update to reflect language
- ✅ Navigation persists across pages

**Common Issues:**
- Missing translation keys show as "navigation.home" instead of "Home"
- URL doesn't update when switching languages
- Content partially translated

---

### Scenario 2: Theme Switching (10 minutes)

**Objective:** Verify dark/light mode works and persists

**Steps:**
1. Open site (should be in light mode by default)
2. Locate theme toggle button (sun/moon icon)
3. Click to switch to dark mode
4. Verify:
   - Background becomes dark
   - Text color adjusts for readability
   - Logo switches to dark variant (if applicable)
   - Client logos update to dark versions
5. Navigate to pricing page
6. Verify theme persists
7. Refresh the page (Ctrl+R)
8. Verify theme is still dark
9. Switch back to light mode
10. Close browser and reopen
11. Verify theme preference saved

**Expected Results:**
- ✅ Smooth transition between themes
- ✅ All components render properly in both modes
- ✅ Theme persists across navigation
- ✅ Theme persists after refresh
- ✅ Theme saves to localStorage

**Common Issues:**
- Flash of wrong theme on page load
- Some components don't respect theme
- Theme doesn't persist after refresh

---

### Scenario 3: Responsive Design (20 minutes)

**Objective:** Test on different screen sizes

**Steps:**

#### Mobile (375px - iPhone SE)
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone SE"
4. Verify:
   - Navigation collapses to hamburger menu
   - Hamburger menu opens and closes
   - All text readable without horizontal scroll
   - Hero section displays correctly
   - Service cards stack vertically
   - Portfolio grid shows 1 column
   - Contact form is usable
   - Footer content readable

#### Tablet (768px - iPad)
1. Select "iPad" in device toolbar
2. Verify:
   - Navigation may show full menu or hamburger
   - Service grid shows 2 columns
   - Portfolio grid shows 2 columns
   - All spacing appropriate
   - Images scale correctly

#### Desktop (1920px)
1. Select "Responsive" and set to 1920x1080
2. Verify:
   - Full navigation visible
   - Service grid shows 3 columns
   - Portfolio grid shows 3-4 columns
   - Content centered with max-width
   - No excessive whitespace

**Expected Results:**
- ✅ Smooth responsive behavior
- ✅ No horizontal scroll on any device
- ✅ Touch targets > 44px on mobile
- ✅ Readable text on all devices

---

### Scenario 4: Contact Form (15 minutes)

**Objective:** Test form validation and submission

**Steps:**

#### Validation Testing
1. Navigate to homepage
2. Scroll to contact form
3. Try submitting empty form
4. Verify validation errors appear
5. Fill only email field
6. Try submitting
7. Verify other required fields show errors
8. Enter invalid email (e.g., "notanemail")
9. Verify email validation error

#### Successful Submission
1. Fill all required fields with valid data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+1234567890"
   - Message: "This is a test message"
2. Click Submit
3. Verify:
   - Submit button shows loading state
   - Button is disabled during submission
   - Success message appears (or error if API not configured)
   - Form clears on success

**Expected Results:**
- ✅ Validation works on all fields
- ✅ Error messages are clear
- ✅ Submit button disabled during submission
- ✅ Success/error feedback provided

---

### Scenario 5: Navigation & Links (10 minutes)

**Objective:** Verify all navigation works

**Steps:**
1. Click each navigation menu item:
   - Home
   - Services
   - Pricing
   - Portfolio
   - About
2. Verify each link navigates correctly
3. Check that active page is highlighted
4. Click logo → should return to homepage
5. Test smooth scroll to sections (if applicable)
6. Test all footer links
7. Test external links (should open in new tab)

**Expected Results:**
- ✅ All links work
- ✅ No 404 errors
- ✅ External links open in new tab
- ✅ Active page highlighted

---

### Scenario 6: Performance Check (5 minutes)

**Objective:** Quick performance validation

**Steps:**
1. Open DevTools → Lighthouse tab
2. Select "Desktop" mode
3. Check only "Performance"
4. Click "Generate report"
5. Review scores:
   - Performance (target: >90)
   - First Contentful Paint (target: <1.8s)
   - Largest Contentful Paint (target: <2.5s)
6. Repeat for "Mobile" mode

**Expected Results:**
- ✅ Performance score > 85
- ✅ FCP < 2s
- ✅ LCP < 3s
- ✅ No major blocking resources

---

### Scenario 7: Authentication (15 minutes)

**Objective:** Test login/signup flow

**Steps:**

#### Protected Route Access
1. Navigate to http://localhost:3000/en/dashboard
2. If not logged in, should redirect to login

#### Login Flow
1. Navigate to /en/login
2. Try logging in with empty fields
3. Verify validation errors
4. Try with invalid credentials
5. Verify error message
6. Login with valid credentials (if available)
7. Verify redirect to dashboard

#### Signup Flow
1. Navigate to /en/signup
2. Fill signup form
3. Test password validation
4. Submit form
5. Verify account creation or error

**Expected Results:**
- ✅ Protected routes require auth
- ✅ Form validation works
- ✅ Error messages clear
- ✅ Successful login redirects properly

---

## Quick Test Checklist

### 5-Minute Smoke Test
- [ ] Site loads at http://localhost:3000
- [ ] Language switcher works (en, ru, uz)
- [ ] Theme toggle works
- [ ] Mobile menu opens/closes
- [ ] Contact form shows validation
- [ ] No console errors

### 15-Minute Core Test
- [ ] All pages load (home, pricing, etc.)
- [ ] i18n works across all pages
- [ ] Theme persists after refresh
- [ ] Responsive on mobile/desktop
- [ ] Forms validate correctly
- [ ] Navigation links work

### 30-Minute Full Test
- [ ] Complete all scenarios above
- [ ] Check all translations
- [ ] Test all viewport sizes
- [ ] Run Lighthouse audit
- [ ] Check accessibility
- [ ] Test on multiple browsers

---

## Testing Environment

**Browser DevTools Shortcuts:**
- `F12` - Open DevTools
- `Ctrl+Shift+M` - Toggle device toolbar
- `Ctrl+Shift+C` - Inspect element
- `Ctrl+Shift+I` - Console
- `Ctrl+R` - Refresh page
- `Ctrl+Shift+R` - Hard refresh

**Useful DevTools Tabs:**
- **Elements:** Inspect HTML/CSS
- **Console:** Check for errors
- **Network:** Check API calls
- **Lighthouse:** Performance audit
- **Application:** Check localStorage

---

## Reporting Issues

When you find a bug, document:

### Issue Template
```
**Title:** [Brief description]

**Severity:** Critical / High / Medium / Low

**Environment:**
- Browser: Chrome 120
- Device: Desktop / Mobile
- OS: Windows 11
- Language: English
- Theme: Dark

**Steps to Reproduce:**
1. Navigate to /en
2. Click on contact form
3. Submit without filling

**Expected Behavior:**
Validation errors should appear

**Actual Behavior:**
Form submits without validation

**Screenshots:**
[Attach screenshot]

**Console Errors:**
[Paste any console errors]
```

---

## Next Steps After Manual Testing

1. **Fix any bugs found**
2. **Remove test files** (use cleanup script)
3. **Run final build** (`npm run build`)
4. **Deploy to staging** (Netlify)
5. **Test on staging**
6. **Deploy to production**

---

## Automated Testing (Future)

Consider adding:
- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright or Cypress
- **Visual Regression:** Percy or Chromatic
- **Performance Monitoring:** Lighthouse CI

```bash
# Example setup
npm install --save-dev @playwright/test
npx playwright install
npx playwright codegen localhost:3000
```
