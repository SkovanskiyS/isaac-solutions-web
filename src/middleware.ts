import createMiddleware from "next-intl/middleware";

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  locales: ["en", "uz", "ru"],
  defaultLocale: "en",
  // Handle all routes for internationalization
  pathnames: {
    "/": "/",
    "/pricing": "/pricing",
    "/faq": "/faq",
  },
});

export default intlMiddleware;

export const config = {
  // Exclude static assets, API routes, Next.js internals and files with extensions
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
