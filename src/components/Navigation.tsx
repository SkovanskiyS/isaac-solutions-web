"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ClientLanguageSwitcher from "@/components/ClientLanguageSwitcher";
import ContactForm from "@/components/ContactForm";
import { Code2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
  
  return (
    <nav className="border-b border-border bg-[hsl(var(--nav-bg))] backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 active:scale-95 transition-all duration-150">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">{t('navigation.company')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {currentPage === 'home' ? (
              <>
                <button onClick={() => smoothScrollToSection('home')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.home')}</button>
                <button onClick={() => smoothScrollToSection('services')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.services')}</button>
                <Link href="/pricing" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.pricing')}</Link>
                <button onClick={() => smoothScrollToSection('portfolio')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.portfolio')}</button>
                <button onClick={() => smoothScrollToSection('about')} className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.about')}</button>
              </>
            ) : (
              <>
                <Link href="/" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.home')}</Link>
                <Link href="/#services" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.services')}</Link>
                <Link href="/pricing" className="text-blue-500 font-semibold active:text-blue-600 active:scale-95 transition-all duration-150 hover:text-blue-400">{t('navigation.pricing')}</Link>
                <Link href="/#portfolio" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.portfolio')}</Link>
                <Link href="/#about" className="text-foreground hover:text-blue-400 active:text-blue-500 active:scale-95 transition-all duration-150 font-medium">{t('navigation.about')}</Link>
              </>
            )}
            <ClientLanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - TODO: Add mobile menu in future */}
          <div className="md:hidden flex items-center space-x-2">
            <ContactForm 
              buttonText={t('navigation.startProject')}
              size="sm"
            />
            <ClientLanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}