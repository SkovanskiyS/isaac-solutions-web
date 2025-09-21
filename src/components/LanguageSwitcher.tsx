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
      // Store language preference
      localStorage.setItem('preferred-language', newLocale);
      document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
      
      // Navigate to the new locale
      const segments = pathname.split('/');
      segments[1] = newLocale; // Replace the locale segment
      const newPathname = segments.join('/');
      
      router.push(newPathname);
      setIsOpen(false);
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 hover:bg-muted"
          disabled={isPending}
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">
            {currentLanguage?.flag} {currentLanguage?.name}
          </span>
          {isPending && <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin ml-1" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] p-6">
        <SheetHeader className="mb-6">
          <SheetTitle>Select Language</SheetTitle>
          <SheetDescription>
            Choose your preferred language
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className={`w-full justify-start text-left p-4 h-auto hover:bg-muted ${
                locale === lang.code ? 'bg-muted border border-border' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isPending}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </div>
                {locale === lang.code && (
                  <Check className="w-4 h-4 text-green-500" />
                )}
              </div>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
