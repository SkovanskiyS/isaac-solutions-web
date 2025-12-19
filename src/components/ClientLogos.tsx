"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { memo } from "react";

// Client logos configuration
const CLIENTS = [
  {
    id: 1,
    name: "Bron24",
    logo: "/Bron24.png",
    darkLogo: "/Bron24_Dark.png",
  },
  {
    id: 2,
    name: "Vita Coffee",
    logo: "/VitaCoffee.jpg",
    darkLogo: "/VitaCoffee.jpg",
  },
  {
    id: 3,
    name: "Beeline",
    logo: "/BeelinelogoLight.svg",
    darkLogo: "/BeelinelogoDark.svg",
  },
  {
    id: 4,
    name: "Amity University",
    logo: "/AMITY.PNG.png",
    darkLogo: "/AMITY.PNG.png",
  },
  {
    id: 5,
    name: "Payme",
    logo: "/payme.png",
    darkLogo: "/payme.png",
  },
  {
    id: 6,
    name: "Click",
    logo: "/click.png",
    darkLogo: "/ClickDark.png",
  },
] as const;

interface ClientLogosProps {
  className?: string;
}

// Memoized logo card with hover effects
const ClientLogo = memo(function ClientLogo({
  name,
  logo,
  darkLogo,
}: {
  name: string;
  logo: string;
  darkLogo: string;
}) {
  return (
    <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-24 flex items-center justify-center">
        {/* Light mode logo */}
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain dark:hidden opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          loading="lazy"
          quality={85}
        />
        {/* Dark mode logo - mix-blend-screen makes black backgrounds transparent */}
        <Image
          src={darkLogo}
          alt={`${name} logo`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain hidden dark:block mix-blend-screen opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          loading="lazy"
          quality={85}
        />
      </div>
    </div>
  );
});

const ClientLogos = memo(function ClientLogos({
  className = "",
}: ClientLogosProps) {
  const t = useTranslations();

  return (
    <section
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 gradient-corporate -z-10" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t("trustedCompanies.badge") || "Our Clients"}
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {t("trustedCompanies.title") || "Trusted by Industry Leaders"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t("trustedCompanies.subtitle") ||
              "Join the companies that trust us with their most important projects."}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {CLIENTS.map((client) => (
              <ClientLogo
                key={client.id}
                name={client.name}
                logo={client.logo}
                darkLogo={client.darkLogo}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
});

export default ClientLogos;
