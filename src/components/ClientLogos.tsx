"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { memo, useMemo } from "react";

// Constants extracted outside component
const CLIENTS = [
  { id: 1, name: "Bron24", color: "from-green-300 to-emerald-400" },
  { id: 2, name: "Vita Coffee", color: "from-orange-300 to-amber-400" },
  { id: 3, name: "Beeline", color: "from-yellow-200 to-yellow-400" },
  { id: 4, name: "Amity University", color: "from-pink-300 to-rose-400" },
  { id: 5, name: "Payme", color: "from-cyan-300 to-blue-400" },
  { id: 6, name: "Click", color: "from-purple-300 to-violet-400" },
] as const;

interface ClientLogosProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

// Memoized client item to prevent re-renders
const ClientItem = memo(function ClientItem({
  name,
  color,
}: { name: string; color: string }) {
  return (
    <div className="group flex-shrink-0">
      <span
        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
      >
        {name}
      </span>
    </div>
  );
});

const ClientLogos = memo(function ClientLogos({
  className = "",
}: ClientLogosProps) {
  const t = useTranslations();

  // Duplicate clients for seamless scroll - memoized
  const duplicatedClients = useMemo(() => [...CLIENTS, ...CLIENTS], []);

  return (
    <section
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 gradient-corporate -z-10" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t("trustedCompanies.badge") || "Our Clients"}
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {t("trustedCompanies.title") || "Trusted by Industry Leaders"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t("trustedCompanies.subtitle") ||
              "Join the companies that trust us with their most important projects."}
          </p>
        </FadeIn>

        <div className="relative overflow-x-clip -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-scroll-40s hover:pause-animation px-4 items-center pb-4">
            {duplicatedClients.map((client, index) => (
              <ClientItem
                key={`${client.id}-${index}`}
                name={client.name}
                color={client.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ClientLogos;
