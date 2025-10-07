"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-border/50 hover:border-border active:scale-95"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          } text-amber-500`}
        />

        {/* Moon Icon */}
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          } text-blue-400`}
        />
      </div>

      {/* Background glow effect */}
      <div
        className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
          theme === "dark" ? "bg-blue-500/5" : "bg-amber-500/5"
        }`}
      />
    </Button>
  );
}
