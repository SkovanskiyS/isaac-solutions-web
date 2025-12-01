/**
 * Internationalization Configuration
 * Settings for next-intl middleware
 */

import type { Locale } from './site';

export const i18nConfig = {
  locales: ['en', 'uz', 'ru'] as Locale[],
  defaultLocale: 'en' as Locale,
  
  // Pathname configuration for i18n routes
  pathnames: {
    '/': '/',
    '/pricing': '/pricing',
    '/faq': '/faq',
  },
} as const;
