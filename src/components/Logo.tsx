"use client";

import React, { memo, useId, useMemo } from "react";

// Types
type LogoVariant = "primary" | "corporate" | "elegant" | "geometric" | "wordmark";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: LogoVariant;
  showText?: boolean;
  animated?: boolean;
}

interface LogoVariantProps {
  size: number;
  className: string;
  showText: boolean;
  gradientId: string;
}

// Shared text component to reduce duplication
const LogoText = memo(function LogoText({ 
  subtitle 
}: { 
  subtitle: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight text-foreground">
        Isaac Solutions
      </span>
      <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
        {subtitle}
      </span>
    </div>
  );
});

// Logo wrapper component
const LogoWrapper = memo(function LogoWrapper({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={`flex items-center gap-3 ${className}`}>{children}</div>;
});

// Variant components map for cleaner switch
const LOGO_VARIANTS: Record<LogoVariant, React.ComponentType<LogoVariantProps>> = {
  primary: PrimaryLogo,
  corporate: CorporateLogo,
  elegant: ElegantLogo,
  geometric: GeometricLogo,
  wordmark: WordmarkLogo,
};

/**
 * Isaac Solutions Logo Component
 * Professional, formal design for enterprise software company
 * 
 * Variants:
 * - primary: Main logo - Abstract "I" with forward momentum (recommended)
 * - corporate: Formal square logo with integrated IS monogram
 * - elegant: Sophisticated abstract mark with clean lines
 * - geometric: Modern geometric pattern representing solutions/connections
 * - wordmark: Text-focused minimal mark
 */
export const Logo = memo(function Logo({
  className = "",
  size = 40,
  variant = "primary",
  showText = false,
  animated = true,
}: LogoProps) {
  const uniqueId = useId();
  const gradientId = `logo-grad-${uniqueId}`;
  
  const combinedClassName = useMemo(() => {
    const animationClass = animated ? "transition-all duration-300" : "";
    return `${className} ${animationClass}`.trim();
  }, [className, animated]);

  const LogoComponent = LOGO_VARIANTS[variant] ?? LOGO_VARIANTS.primary;
  
  return (
    <LogoComponent 
      size={size} 
      className={combinedClassName} 
      showText={showText} 
      gradientId={gradientId}
    />
  );
});

/**
 * Primary Logo - Main Brand Mark
 * Abstract "I" representing Isaac, with forward-leaning design suggesting progress
 * Professional, clean, suitable for all business contexts
 */
function PrimaryLogo({ size, className, showText, gradientId }: LogoVariantProps) {
  return (
    <LogoWrapper className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${gradientId})`} />
        <rect x="12" y="10" width="24" height="5" rx="2" fill="white" />
        <path d="M19 15L21 38H27L29 15H19Z" fill="white" />
        <rect x="12" y="33" width="24" height="5" rx="2" fill="white" />
        <rect x="30" y="18" width="3" height="12" rx="1.5" fill="white" opacity="0.6" />
      </svg>
      {showText && <LogoText subtitle="Software Development" />}
    </LogoWrapper>
  );
}

/**
 * Corporate Logo - Formal IS Monogram
 * Integrated "I" and "S" in a professional square format
 * Best for formal documents, business cards, enterprise contexts
 */
function CorporateLogo({ size, className, showText, gradientId }: LogoVariantProps) {
  return (
    <LogoWrapper className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="50%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="6" fill={`url(#${gradientId})`} />
        <rect x="5" y="5" width="38" height="38" rx="4" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
        <rect x="10" y="12" width="6" height="24" rx="1" fill="white" />
        <rect x="8" y="12" width="10" height="4" rx="1" fill="white" />
        <rect x="8" y="32" width="10" height="4" rx="1" fill="white" />
        <path
          d="M24 12H38C39.1 12 40 12.9 40 14V16C40 17.1 39.1 18 38 18H26C24.9 18 24 18.9 24 20V22C24 23.1 24.9 24 26 24H38C39.1 24 40 24.9 40 26V28C40 29.1 39.1 30 38 30H26C24.9 30 24 30.9 24 32V34C24 35.1 24.9 36 26 36H40"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && <LogoText subtitle="Enterprise Software" />}
    </LogoWrapper>
  );
}

/**
 * Elegant Logo - Sophisticated Abstract Mark
 * Clean lines forming abstract "I" with subtle depth
 * Premium, minimalist, works well at all sizes
 */
function ElegantLogo({ size, className, showText, gradientId }: LogoVariantProps) {
  const gradientId2 = `${gradientId}-2`;
  return (
    <LogoWrapper className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id={gradientId2} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill={`url(#${gradientId})`} />
        {/* Back layer - creates depth */}
        <rect x="17" y="11" width="14" height="4" rx="2" fill="white" opacity="0.4" />
        <rect x="20" y="15" width="8" height="18" rx="1" fill="white" opacity="0.4" />
        <rect x="17" y="33" width="14" height="4" rx="2" fill="white" opacity="0.4" />
        {/* Front layer - main shape */}
        <rect x="15" y="10" width="14" height="4" rx="2" fill="white" />
        <rect x="18" y="14" width="8" height="18" rx="1" fill="white" />
        <rect x="15" y="32" width="14" height="4" rx="2" fill="white" />
        <circle cx="35" cy="14" r="3" fill="white" opacity="0.8" />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Isaac Solutions
          </span>
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground">
            Digital Excellence
          </span>
        </div>
      )}
    </LogoWrapper>
  );
}

/**
 * Geometric Logo - Modern Connected Pattern
 * Represents solutions, integration, and connectivity
 * Tech-forward but professional
 */
function GeometricLogo({ size, className, showText, gradientId }: LogoVariantProps) {
  return (
    <LogoWrapper className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="50%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M24 3L43 14V34L24 45L5 34V14L24 3Z" fill={`url(#${gradientId})`} />
        <path d="M24 7L39 16V32L24 41L9 32V16L24 7Z" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
        <path d="M24 10L29 14L24 18L19 14L24 10Z" fill="white" />
        <rect x="20" y="16" width="8" height="14" fill="white" />
        <path d="M24 28L29 32L24 36L19 32L24 28Z" fill="white" />
        {/* Connection lines */}
        <line x1="14" y1="20" x2="19" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="29" y1="20" x2="34" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="14" y1="28" x2="19" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="29" y1="28" x2="34" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        {/* Corner nodes */}
        <circle cx="12" cy="20" r="2" fill="white" opacity="0.8" />
        <circle cx="36" cy="20" r="2" fill="white" opacity="0.8" />
        <circle cx="12" cy="28" r="2" fill="white" opacity="0.8" />
        <circle cx="36" cy="28" r="2" fill="white" opacity="0.8" />
      </svg>
      {showText && <LogoText subtitle="Integrated Systems" />}
    </LogoWrapper>
  );
}

/**
 * Wordmark Logo - Typography Focused
 * Minimal mark with focus on company name
 * Best for formal letterheads, documents, small favicon
 */
function WordmarkLogo({ size, className, showText, gradientId }: LogoVariantProps) {
  return (
    <LogoWrapper className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="8" fill={`url(#${gradientId})`} />
        <rect x="14" y="10" width="20" height="4" rx="1" fill="white" />
        <rect x="20" y="14" width="8" height="20" rx="1" fill="white" />
        <rect x="14" y="34" width="20" height="4" rx="1" fill="white" />
      </svg>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Isaac Solutions
        </span>
      )}
    </LogoWrapper>
  );
}

/**
 * Logo Icon Only - For use in places where only the icon is needed
 */
export const LogoIcon = memo(function LogoIcon({
  className = "",
  size = 40,
  variant = "primary",
}: Omit<LogoProps, "showText" | "animated">) {
  return <Logo className={className} size={size} variant={variant} showText={false} />;
});

/**
 * Logo with Text - For use in navigation and headers
 */
export const LogoWithText = memo(function LogoWithText({
  className = "",
  size = 40,
  variant = "primary",
}: Omit<LogoProps, "showText" | "animated">) {
  return <Logo className={className} size={size} variant={variant} showText />;
});

export default Logo;
