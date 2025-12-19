"use client";

import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿", nativeName: "O'zbekcha" },
  { code: "ru", name: "Русский", flag: "🇷🇺", nativeName: "Русский" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Store language preference
      localStorage.setItem("preferred-language", newLocale);
      document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year

      // Navigate to the new locale
      const segments = pathname.split("/");
      segments[1] = newLocale; // Replace the locale segment
      const newPathname = segments.join("/");

      router.push(newPathname);
      setIsOpen(false);
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300 flex items-center gap-1.5"
        disabled={isPending}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-1.5">
          {currentLanguage?.name}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
        {isPending && (
          <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin ml-1" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop overlay for mobile */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`
              absolute top-full mt-2 right-0 
              w-56 
              bg-background/95 backdrop-blur-xl
              border border-border/50 
              rounded-xl 
              shadow-xl shadow-black/5
              overflow-hidden 
              z-50 
              animate-in fade-in slide-in-from-top-2 duration-200
            `}
            style={{
              boxShadow:
                "0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Dropdown Header */}
            <div className="px-4 py-2.5 border-b border-border/50 bg-muted/30">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Select Language
              </p>
            </div>

            {/* Language Options */}
            <div className="py-1">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  className={`
                    w-full flex items-center justify-between 
                    px-4 py-3
                    text-left 
                    transition-all duration-150
                    hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                    dark:hover:from-blue-950/30 dark:hover:to-purple-950/30
                    active:scale-[0.98]
                    ${
                      locale === lang.code
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40"
                        : ""
                    }
                    ${index !== languages.length - 1 ? "border-b border-border/30" : ""}
                    group
                  `}
                  onClick={() => handleLanguageChange(lang.code)}
                  disabled={isPending}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                      {lang.flag}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`
                        font-semibold text-sm
                        ${locale === lang.code ? "text-blue-600 dark:text-blue-400" : "text-foreground"}
                      `}
                      >
                        {lang.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {lang.nativeName}
                      </span>
                    </div>
                  </div>
                  {locale === lang.code && (
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 shadow-sm">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
