"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";
import { Building2 } from "lucide-react";

interface Logo {
  id: number;
  name: string;
  src: string;
  alt: string;
}

// Real client logos from portfolio projects
const clientLogos: Logo[] = [
  {
    id: 1,
    name: "Bron24",
    src: "/portfolio/bron24.png",
    alt: "Bron24 - Online Booking Platform",
  },
  {
    id: 2,
    name: "Vita Coffee",
    src: "/portfolio/vita-coffee.png",
    alt: "Vita Coffee - Coffee Shop Brand",
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

  return (
    <section className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background ${className}`}>
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

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clientLogos.map((logo, index) => (
            <FadeIn key={logo.id} delay={0.1 * (index + 1)}>
              <div className="group relative">
                {/* Card Container */}
                <div className="relative glass rounded-2xl p-8 md:p-12 border-2 border-border hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-corporate hover:shadow-2xl hover:shadow-blue-500/10 bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Logo Container */}
                  <div className="relative flex items-center justify-center h-32 md:h-40">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={300}
                      height={160}
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-lg
                        dark:brightness-0 dark:invert dark:opacity-90 dark:group-hover:opacity-100
                        light:opacity-80 light:group-hover:opacity-100"
                      priority={index < 2}
                    />
                  </div>
                  
                  {/* Company Name */}
                  <div className="relative mt-6 text-center">
                    <p className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {logo.name}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
