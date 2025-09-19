"use client";

import React, { useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased relative">
      <ParticleBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
