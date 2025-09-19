"use client";

import React, { useState, useTransition } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Globe, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Store language preference in both localStorage and cookie
      localStorage.setItem('preferred-language', newLocale);
      document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
      
      // Replace current locale in pathname with new locale
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      
      router.push(newPathname);
      setIsOpen(false);
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 min-w-[80px] hover:bg-muted/50"
          disabled={isPending}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Choose Language</span>
          </SheetTitle>
          <SheetDescription>
            Select your preferred language
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-2">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={language.code === locale ? "default" : "ghost"}
              className="w-full justify-start text-left h-12"
              onClick={() => handleLanguageChange(language.code)}
              disabled={isPending}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                {language.code === locale && (
                  <Check className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </Button>
          ))}
        </div>
        <div className="mt-6 text-xs text-muted-foreground">
          Your language preference will be saved for future visits.
        </div>
      </SheetContent>
    </Sheet>
  );
}