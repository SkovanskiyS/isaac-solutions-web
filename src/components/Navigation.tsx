"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactForm from "@/components/ContactForm";
import { Code2, Menu, X } from "lucide-react";
import { useTranslations } from 'next-intl';

interface NavigationProps {
  currentPage?: 'home' | 'pricing';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const t = useTranslations('navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll function with offset for sticky navigation and mobile menu close
  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of sticky navigation (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight - 20; // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      closeMobileMenu();
    }
  };
  
  return (
    <nav className="border-b border-border/50 bg-[hsl(var(--nav-bg))] backdrop-blur-xl sticky top-0 z-50 shadow-corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 active:scale-95 transition-all duration-150 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-corporate group-hover:shadow-corporate-lg transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('company')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {currentPage === 'home' ? (
              <>
                <button onClick={() => smoothScrollToSection('home')} className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('home')}</button>
                <button onClick={() => smoothScrollToSection('services')} className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('services')}</button>
                <Link href="/pricing" className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('pricing')}</Link>
                <button onClick={() => smoothScrollToSection('portfolio')} className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('portfolio')}</button>
                <button onClick={() => smoothScrollToSection('about')} className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('about')}</button>
              </>
            ) : (
              <>
                <Link href="/" className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('home')}</Link>
                <Link href="/#services" className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('services')}</Link>
                <Link href="/pricing" className="text-blue-500 font-semibold active:text-blue-600 active:scale-95 transition-all duration-150 hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">{t('pricing')}</Link>
                <Link href="/#portfolio" className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('portfolio')}</Link>
                <Link href="/#about" className="text-foreground hover:text-blue-500 active:text-blue-600 active:scale-95 transition-all duration-150 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">{t('about')}</Link>
              </>
            )}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="h-8 w-8 p-0"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-[hsl(var(--nav-bg))] backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {currentPage === 'home' ? (
                <>
                  <button 
                    onClick={() => smoothScrollToSection('home')} 
                    className="block w-full text-left text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                  >
                    {t('home')}
                  </button>
                  <button 
                    onClick={() => smoothScrollToSection('services')} 
                    className="block w-full text-left text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                  >
                    {t('services')}
                  </button>
                  <Link 
                    href="/pricing" 
                    className="block text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('pricing')}
                  </Link>
                  <button 
                    onClick={() => smoothScrollToSection('portfolio')} 
                    className="block w-full text-left text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                  >
                    {t('portfolio')}
                  </button>
                  <button 
                    onClick={() => smoothScrollToSection('about')} 
                    className="block w-full text-left text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                  >
                    {t('about')}
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/" 
                    className="block text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('home')}
                  </Link>
                  <Link 
                    href="/#services" 
                    className="block text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('services')}
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="block text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-150 py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('pricing')}
                  </Link>
                  <Link 
                    href="/#portfolio" 
                    className="block text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('portfolio')}
                  </Link>
                  <Link 
                    href="/#about" 
                    className="block text-foreground hover:text-blue-400 active:text-blue-500 transition-colors duration-150 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t('about')}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}