/**
 * Site Configuration
 * Central configuration for the Isaac Solutions website
 */

export const siteConfig = {
  name: 'Isaac Solutions',
  description: 'AI-powered MVP development and enterprise software solutions',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://isaac-solutions.netlify.app',
  
  // Supported locales
  locales: ['en', 'uz', 'ru'] as const,
  defaultLocale: 'en' as const,
  
  // Social links
  social: {
    github: 'https://github.com/SkovanskiyS',
    email: 'contact@isaac-solutions.com',
  },
  
  // Contact information
  contact: {
    email: 'info@isaac-solutions.com',
    phone: '+998 XX XXX XX XX',
  },
} as const;

export type Locale = typeof siteConfig.locales[number];
