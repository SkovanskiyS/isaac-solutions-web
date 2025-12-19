"use client";

import { useLocale } from "next-intl";
import React, { createContext, useContext, type ReactNode } from "react";

interface LanguageContextType {
  locale: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();

  return (
    <LanguageContext.Provider value={{ locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
