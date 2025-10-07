"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const tNav = useTranslations("navigation");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {tNav("company")} - Test Page
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This is a test page to verify the routing is working.
        </p>
        <div className="space-y-4">
          <p>Current page: Home</p>
          <p>Language switching should work!</p>
        </div>
      </div>
    </div>
  );
}
