"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";
import { Building2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Logo {
  id: number;
  name: string;
  src: string;
  srcDark?: string;
  alt: string;
}

// Real client logos from portfolio projects and partners
const clientLogos: Logo[] = [
  {
    id: 1,
    name: "Bron24",
    src: "/Bron24.png",
    srcDark: "/Bron24_Dark.png",
    alt: "Bron24 - Online Booking Platform",
  },
  {
    id: 2,
    name: "Vita Coffee",
    src: "/VitaCoffee.jpg",
    alt: "Vita Coffee - Coffee Shop Brand",
  },
  {
    id: 3,
    name: "Beeline",
    src: "/BeelinelogoLight.svg",
    srcDark: "/BeelinelogoDark.svg",
    alt: "Beeline - Telecommunications Company",
  },
  {
    id: 4,
    name: "Amity University",
    src: "/AMITY.PNG.png",
    alt: "Amity University - Educational Institution",
  },
  {
    id: 5,
    name: "Payme",
    src: "/payme.png",
    srcDark: "/PaymeDark.png",
    alt: "Payme - Payment System",
  },
  {
    id: 6,
    name: "Click",
    src: "/click.png",
    srcDark: "/ClickDark.png",
    alt: "Click - Payment System",
  },
];

interface ClientLogosProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function ClientLogos({
  className = "",
}: ClientLogosProps) {
  const t = useTranslations();
  const { theme } = useTheme();

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <Badge className="mb-4 glass border-blue-500/30 text-blue-500 font-semibold px-4 py-1.5">
            <Building2 className="w-4 h-4 mr-1" />
            {t("trustedCompanies.badge") || "Our Clients"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("trustedCompanies.title") || "Trusted by Industry Leaders"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("trustedCompanies.subtitle") || "Join the companies that trust us with their most important projects."}
          </p>
        </FadeIn>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Scrolling logos */}
          <div className="flex gap-8 animate-scroll-40s hover:pause-animation px-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="group flex-shrink-0 w-80"
              >
                {/* Logo Container - Clean & Simple */}
                <div className="flex items-center justify-center h-40 p-6 bg-white dark:bg-background rounded-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src={theme === 'dark' && logo.srcDark ? logo.srcDark : logo.src}
                    alt={logo.alt}
                    width={280}
                    height={140}
                    className="w-full h-full object-contain"
                    priority={index < 6}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
