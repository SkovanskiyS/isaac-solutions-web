"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactForm from "@/components/ContactForm";
import { Brain, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface NavigationProps {
  currentPage?: "home" | "pricing";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Determine if navbar should show based on scroll direction
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setIsScrolled(scrollTop > 10);
      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight - 20; // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after navigation
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* Spacer to prevent content jump when navbar is fixed */}
      <div className="h-16" />
      
      <nav 
        className={`border-b border-cyan-500/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-background/85 transform ${
          isVisible 
            ? "translate-y-0" 
            : "-translate-y-full"
        } ${
          isScrolled 
            ? "shadow-lg shadow-cyan-500/10 bg-background/95" 
            : "shadow-corporate"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {currentPage === "home" ? (
              <>
                <button
                  onClick={() => smoothScrollToSection("home")}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("home")}
                </button>
                <button
                  onClick={() => smoothScrollToSection("services")}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("services")}
                </button>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("pricing")}
                </Link>
                <button
                  onClick={() => smoothScrollToSection("portfolio")}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("portfolio")}
                </button>
                <button
                  onClick={() => smoothScrollToSection("about")}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("about")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/${locale}`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("home")}
                </Link>
                <Link
                  href={`/${locale}/#services`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("services")}
                </Link>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("pricing")}
                </Link>
                <Link
                  href={`/${locale}/#portfolio`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("portfolio")}
                </Link>
                <Link
                  href={`/${locale}/#about`}
                  className="text-foreground hover:text-cyan-500 active:text-cyan-600 active:scale-95 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:transition-all after:duration-300"
                >
                  {t("about")}
                </Link>
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
              className="h-8 w-8 p-0 hover:bg-cyan-500/10"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/20 bg-[hsl(var(--nav-bg))] backdrop-blur-2xl">
            <div className="px-4 py-6 space-y-4">
              {currentPage === "home" ? (
                <>
                  <button
                    onClick={() => smoothScrollToSection("home")}
                    className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                  >
                    {t("home")}
                  </button>
                  <button
                    onClick={() => smoothScrollToSection("services")}
                    className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                  >
                    {t("services")}
                  </button>
                  <Link
                    href={`/${locale}/pricing`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("pricing")}
                  </Link>
                  <button
                    onClick={() => smoothScrollToSection("portfolio")}
                    className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                  >
                    {t("portfolio")}
                  </button>
                  <button
                    onClick={() => smoothScrollToSection("about")}
                    className="block w-full text-left text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                  >
                    {t("about")}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={`/${locale}`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("home")}
                  </Link>
                  <Link
                    href={`/${locale}/#services`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("services")}
                  </Link>
                  <Link
                    href={`/${locale}/pricing`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("pricing")}
                  </Link>
                  <Link
                    href={`/${locale}/#portfolio`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("portfolio")}
                  </Link>
                  <Link
                    href={`/${locale}/#about`}
                    className="block text-foreground hover:text-cyan-500 active:text-cyan-600 transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t("about")}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
