"use client";

import { useTranslations, useLocale } from 'next-intl';
import Navigation from '@/components/Navigation';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Language Switcher */}
      <Navigation currentPage="home" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('hero.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            🌐 Current locale: <span className="font-mono bg-muted px-2 py-1 rounded">{locale}</span> ✅
          </p>
          
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('services.subtitle')}
            </p>
            
            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-semibold">
                🎉 Multilingual Support is Now Active! 🎉
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                Language switcher available in the navigation bar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}