// Disabled next-intl middleware for client-side translations
// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'uz', 'ru'],
//   defaultLocale: 'en'
// });

// No middleware needed for client-side translations
export const config = {
  matcher: []
};