"use client";

// This component is a client-side wrapper for the LanguageSwitcher
// It's kept for compatibility but the main LanguageSwitcher.tsx is used instead

import LanguageSwitcher from "./LanguageSwitcher";

export default function ClientLanguageSwitcher() {
  return <LanguageSwitcher />;
}
