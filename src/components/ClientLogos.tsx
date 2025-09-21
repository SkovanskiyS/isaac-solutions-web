"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Real company logos - using multiple reliable sources with fallbacks
const clientLogos = [
  {
    id: 1,
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    alt: "Microsoft"
  },
  {
    id: 2,
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    alt: "Google"
  },
  {
    id: 3,
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    alt: "Apple"
  },
  {
    id: 4,
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "Amazon"
  },
  {
    id: 5,
    name: "Meta",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    alt: "Meta"
  },
  {
    id: 6,
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    fallback: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    alt: "Netflix"
  },
  {
    id: 7,
    name: "Tesla",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    fallback: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
    alt: "Tesla"
  },
  {
    id: 8,
    name: "Adobe",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg",
    alt: "Adobe"
  },
  {
    id: 9,
    name: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    alt: "Spotify"
  },
  {
    id: 10,
    name: "Airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    fallback: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg",
    alt: "Airbnb"
  },
  {
    id: 11,
    name: "Uber",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    fallback: "https://cdn.worldvectorlogo.com/logos/uber-1.svg",
    alt: "Uber"
  },
  {
    id: 12,
    name: "Dropbox",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg",
    fallback: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg",
    alt: "Dropbox"
  },
  {
    id: 13,
    name: "LinkedIn",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn"
  },
  {
    id: 14,
    name: "GitHub",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub"
  },
  {
    id: 15,
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    alt: "Slack"
  }
];

// Individual logo component with fallback handling
function LogoImage({ logo, index }: { logo: any; index: number }) {
  const [currentSrc, setCurrentSrc] = useState(logo.src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentSrc === logo.src && logo.fallback) {
      // Try fallback URL first
      setCurrentSrc(logo.fallback);
    } else if (!hasError) {
      // If fallback also fails, use avatar generator
      setCurrentSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(logo.name)}&size=160&background=random&color=fff&bold=true&format=svg`);
      setHasError(true);
    }
  };

  return (
    <div className="flex-shrink-0 group">
      <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:scale-110 bg-white/5 dark:bg-white/5">
        <Image
          src={currentSrc}
          alt={logo.alt}
          width={160}
          height={96}
          className="max-w-full max-h-full object-contain transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105"
          priority={index < 15}
          onError={handleError}
          unoptimized={hasError} // Use unoptimized for generated avatars
        />
      </div>
    </div>
  );
}

interface ClientLogosProps {
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export default function ClientLogos({ className = "", speed = 'normal' }: ClientLogosProps) {
  const t = useTranslations('clientLogos');
  
  // Animation speed mapping
  const speedClasses = {
    slow: 'animate-scroll-60s',
    normal: 'animate-scroll-40s', 
    fast: 'animate-scroll-20s'
  };

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className={`w-full py-12 bg-background ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t('title')}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Logo Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth edge fade */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className={`flex gap-8 md:gap-12 ${speedClasses[speed]} hover:pause-animation`}>
          {duplicatedLogos.map((logo, index) => (
            <LogoImage
              key={`${logo.id}-${index}`}
              logo={logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}