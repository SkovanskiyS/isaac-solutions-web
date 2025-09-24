"use client";

import React from "react";
import ParticleBackground from "../components/ParticleBackground";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="antialiased relative">
      <ParticleBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
