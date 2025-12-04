"use client";

import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Brain, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface NavigationProps {
  currentPage?: "home" | "pricing";
}

// Constants
const NAV_HEIGHT = 64;
const SCROLL_THRESHOLD = 100;
const SCROLL_OFFSET = 20;

// Memoized nav link component
const NavLink = memo(function NavLink({
  onClick,
  children,
  className = "",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300 ${className}`}
    >
      {children}
    </button>
  );
});

const Navigation = memo(function Navigation({ currentPage = "home" }: NavigationProps) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Memoized scroll handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          
          setIsVisible(scrollTop <= lastScrollY || scrollTop <= SCROLL_THRESHOLD);
          setIsScrolled(scrollTop > 10);
          setLastScrollY(scrollTop);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const smoothScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAV_HEIGHT - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  // Memoized nav class with enhanced glassmorphism
  const navClassName = useMemo(() => {
    const baseClass = "border-b border-cyan-500/20 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out transform";
    const visibilityClass = isVisible ? "translate-y-0" : "-translate-y-full";
    const glassClass = isScrolled 
      ? "bg-background/80 backdrop-blur-[32px] saturate-[180%] shadow-[0_8px_32px_rgba(6,182,212,0.12),0_0_60px_rgba(6,182,212,0.06),inset_0_-1px_0_rgba(6,182,212,0.1)] border-cyan-500/30" 
      : "bg-background/60 backdrop-blur-[24px] saturate-[150%] shadow-corporate";
    return `${baseClass} ${visibilityClass} ${glassClass}`;
  }, [isVisible, isScrolled]);

  return (
    <>
      <div className="h-16" />
      
      <nav className={navClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-3 hover:opacity-80 active:scale-95 transition-all duration-150 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-corporate group-hover:shadow-corporate-lg transition-all duration-300 glow-cyan">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-gradient-corporate">
              {t("company")}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {currentPage === "home" ? (
              <>
                <NavLink onClick={() => smoothScrollToSection("home")}>{t("home")}</NavLink>
                <NavLink onClick={() => smoothScrollToSection("services")}>{t("services")}</NavLink>
                <Link href={`/${locale}/pricing`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">
                  {t("pricing")}
                </Link>
                <NavLink onClick={() => smoothScrollToSection("portfolio")}>{t("portfolio")}</NavLink>
                <NavLink onClick={() => smoothScrollToSection("about")}>{t("about")}</NavLink>
              </>
            ) : (
              <>
                <Link href={`/${locale}`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">{t("home")}</Link>
                <Link href={`/${locale}/#services`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">{t("services")}</Link>
                <Link href={`/${locale}/pricing`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">{t("pricing")}</Link>
                <Link href={`/${locale}/#portfolio`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">{t("portfolio")}</Link>
                <Link href={`/${locale}/#about`} className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300">{t("about")}</Link>
              </>
            )}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="h-8 w-8 p-0 hover:bg-cyan-500/10"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/20 bg-[hsl(var(--nav-bg))] backdrop-blur-2xl">
            <div className="px-4 py-6 space-y-4">
              {currentPage === "home" ? (
                <>
                  <button onClick={() => smoothScrollToSection("home")} className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2">{t("home")}</button>
                  <button onClick={() => smoothScrollToSection("services")} className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2">{t("services")}</button>
                  <Link href={`/${locale}/pricing`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("pricing")}</Link>
                  <button onClick={() => smoothScrollToSection("portfolio")} className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2">{t("portfolio")}</button>
                  <button onClick={() => smoothScrollToSection("about")} className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2">{t("about")}</button>
                </>
              ) : (
                <>
                  <Link href={`/${locale}`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("home")}</Link>
                  <Link href={`/${locale}/#services`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("services")}</Link>
                  <Link href={`/${locale}/pricing`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("pricing")}</Link>
                  <Link href={`/${locale}/#portfolio`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("portfolio")}</Link>
                  <Link href={`/${locale}/#about`} className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2" onClick={closeMobileMenu}>{t("about")}</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
});

export default Navigation;
