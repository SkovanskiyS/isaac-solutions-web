import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'uz', 'ru'],
  defaultLocale: 'en',
  // Only handle routes that don't match static assets or API routes
  pathnames: {
    '/': '/',
    '/pricing': '/pricing',
    '/dashboard': '/dashboard',
    '/faq': '/faq',
    '/login': '/login',
    '/signup': '/signup'
  }
});

export const config = {
  // Exclude static assets, API routes, Next.js internals and files with extensions
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};