"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactForm from "@/components/ContactForm";
import { Code2 } from "lucide-react";
import { useTranslations } from 'next-intl';

interface NavigationProps {
  currentPage?: 'home' | 'pricing';
}

// Smooth scroll function with offset for sticky navigation
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
  }
};

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const t = useTranslations('navigation');
  
  return (
    <nav className="border-b border-border bg-[hsl(var(--nav-bg))] backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 active:scale-95 transition-all duration-150">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">{t('company')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {currentPage === 'home' ? (
              <>
                <button onClick={() => smoothScrollToSection('home')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('home')}</button>
                <button onClick={() => smoothScrollToSection('services')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('services')}</button>
                <Link href="/pricing" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('pricing')}</Link>
                <button onClick={() => smoothScrollToSection('portfolio')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('portfolio')}</button>
                <button onClick={() => smoothScrollToSection('about')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('about')}</button>
              </>
            ) : (
              <>
                <Link href="/" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('home')}</Link>
                <Link href="/#services" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('services')}</Link>
                <Link href="/pricing" className="text-blue-500 font-semibold active:text-blue-600 active:scale-95 transition-all duration-150 hover:text-blue-400">{t('pricing')}</Link>
                <Link href="/#portfolio" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('portfolio')}</Link>
                <Link href="/#about" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('about')}</Link>
              </>
            )}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - TODO: Add mobile menu in future */}
          <div className="md:hidden flex items-center space-x-2">
            <ContactForm 
              buttonText={t('startProject')}
              size="sm"
            />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}