"use client";

import React from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

// Lazy load ParticleBackground for better performance
const ParticleBackground = dynamic(
  () => import("../components/ParticleBackground"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="antialiased relative">
      <ParticleBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
