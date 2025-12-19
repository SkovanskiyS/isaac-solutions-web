"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { memo } from "react";

const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-border/50 hover:border-border active:scale-95"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 text-amber-500 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 text-blue-400 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
          isDark ? "bg-blue-500/5" : "bg-amber-500/5"
        }`}
      />
    </Button>
  );
});

export default ThemeToggle;
