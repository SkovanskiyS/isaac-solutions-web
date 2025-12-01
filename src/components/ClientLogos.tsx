"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";
import { Sparkles } from "lucide-react";

// Client names for text-based display
const clients = [
  { id: 1, name: "Bron24", color: "from-cyan-400 to-blue-500" },
  { id: 2, name: "Vita Coffee", color: "from-amber-400 to-orange-500" },
  { id: 3, name: "Beeline", color: "from-yellow-400 to-yellow-500" },
  { id: 4, name: "Amity University", color: "from-blue-400 to-indigo-500" },
  { id: 5, name: "Payme", color: "from-cyan-400 to-teal-500" },
  { id: 6, name: "Click", color: "from-purple-400 to-pink-500" },
];

interface ClientLogosProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function ClientLogos({
  className = "",
}: ClientLogosProps) {
  const t = useTranslations();

  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-corporate -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("trustedCompanies.badge") || "Our Clients"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {t("trustedCompanies.title") || "Trusted by Industry Leaders"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t("trustedCompanies.subtitle") || "Join the companies that trust us with their most important projects."}
          </p>
        </FadeIn>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-x-clip -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling text logos */}
          <div className="flex gap-12 animate-scroll-40s hover:pause-animation px-4 items-center pb-4">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex-shrink-0"
              >
                <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${client.color} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
