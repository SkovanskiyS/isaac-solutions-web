"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`absolute h-4 w-4 transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          } text-amber-500`}
        />

        {/* Moon Icon */}
        <Moon
          className={`absolute h-4 w-4 transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          } text-blue-400`}
        />
      </div>

      {/* Background glow effect */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-blue-500/10 shadow-lg shadow-blue-500/20'
            : 'bg-amber-500/10 shadow-lg shadow-amber-500/20'
        }`}
      />
    </Button>
  );
}
