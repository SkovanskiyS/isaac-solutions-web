"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t("hero.subtitle")}
          </p>
          <p className="text-sm text-muted-foreground">
            Current locale: {locale}
          </p>
        </div>
      </div>
    </div>
  );
}
