import { i18nConfig } from "@/config";
import createMiddleware from "next-intl/middleware";

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  // Handle all routes for internationalization
  pathnames: i18nConfig.pathnames,
});

export default intlMiddleware;

export const config = {
  // Exclude static assets, API routes, Next.js internals and files with extensions
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
