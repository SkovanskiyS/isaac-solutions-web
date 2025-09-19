"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Globe } from "lucide-react";
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'uz' as Language, name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' }
];

export default function ClientLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = React.useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-muted">
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">
            {currentLanguage?.flag} {currentLanguage?.name}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] p-6">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-foreground mb-6">
            Select Language
          </div>
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
                hover:bg-muted
                ${language === lang.code ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50'}
              `}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1">
                <div className="font-medium text-foreground">{lang.name}</div>
                <div className="text-sm text-muted-foreground">{lang.code.toUpperCase()}</div>
              </div>
              {language === lang.code && (
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              )}
            </div>
          ))}
          
          <div className="mt-8 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Language changes instantly without page reload
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}