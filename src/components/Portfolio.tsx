"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Globe, Layers, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { memo, useMemo } from "react";

interface PortfolioProps {
  className?: string;
}

interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  tagsKey: string;
  image: string;
  mobileImage?: string;
  accentColor: "cyan" | "purple" | "pink";
  deviceType: "laptop" | "phone" | "both";
  stats?: { label: string; value: string }[];
}

// Constants extracted outside component
const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    nameKey: "bron24.name",
    descriptionKey: "bron24.description",
    tagsKey: "bron24.tags",
    image: "/Bron24main.png",
    mobileImage: "/Bron24mobilepicutre.jpg",
    accentColor: "cyan",
    deviceType: "both",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Bookings", value: "50K+" },
    ],
  },
  {
    id: 2,
    nameKey: "vitaCoffee.name",
    descriptionKey: "vitaCoffee.description",
    tagsKey: "vitaCoffee.tags",
    image: "/VitaCoffee.jpg",
    accentColor: "purple",
    deviceType: "laptop",
    stats: [
      { label: "Performance", value: "98%" },
      { label: "Conversion", value: "+45%" },
    ],
  },
  {
    id: 3,
    nameKey: "techflowCrm.name",
    descriptionKey: "techflowCrm.description",
    tagsKey: "techflowCrm.tags",
    image: "/Bron24_Dark.png",
    accentColor: "pink",
    deviceType: "laptop",
    stats: [
      { label: "Efficiency", value: "+60%" },
      { label: "Clients", value: "200+" },
    ],
  },
] as const;

const COLOR_MAP = {
  cyan: {
    accent: "text-cyan-500",
    gradient: "from-cyan-500 to-blue-500",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    button: "bg-cyan-500 hover:bg-cyan-600",
    ring: "ring-cyan-500/30",
  },
  purple: {
    accent: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    badge:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    button: "bg-purple-500 hover:bg-purple-600",
    ring: "ring-purple-500/30",
  },
  pink: {
    accent: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
    badge: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30",
    button: "bg-pink-500 hover:bg-pink-600",
    ring: "ring-pink-500/30",
  },
} as const;

const Portfolio = memo(function Portfolio({ className = "" }: PortfolioProps) {
  const t = useTranslations("portfolio");

  // Split title for gradient styling - memoized
  const titleParts = useMemo(() => {
    const title = t("title");
    const words = title.split(" ");
    return {
      first: words[0],
      rest: words.slice(1).join(" "),
    };
  }, [t]);

  return (
    <section
      id="portfolio"
      className={`py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 gradient-corporate -z-10" />
      <div className="absolute inset-0 ai-grid-bg opacity-30 -z-10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent rounded-full blur-[150px] -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-[130px] -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500"
            >
              <Layers className="w-4 h-4 mr-2" />
              {t("badge") || "Our Work"}
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">{titleParts.first} </span>
            <span className="text-gradient-ai">{titleParts.rest}</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-32">
          {FEATURED_PROJECTS.map((project, index) => (
            <DeviceMockupCard
              key={project.id}
              project={project}
              t={t}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10">
            <Zap className="w-5 h-5 text-cyan-500" />
            <span className="text-muted-foreground">
              More projects coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;

// Memoized Device Mockup Card Component
const DeviceMockupCard = memo(function DeviceMockupCard({
  project,
  t,
  index,
  isReversed,
}: {
  project: Project;
  t: ReturnType<typeof useTranslations>;
  index: number;
  isReversed: boolean;
}) {
  const name = t(`projects.${project.nameKey}`);
  const description = t(`projects.${project.descriptionKey}`);
  const tags = t.raw(`projects.${project.tagsKey}`) as string[];
  const colors = COLOR_MAP[project.accentColor];

  return (
    <div
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
    >
      {/* Device Mockup Side */}
      <div className="w-full lg:w-3/5 relative group">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-10 blur-3xl scale-110 group-hover:opacity-20 transition-opacity duration-700`}
        />

        <div className="relative">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative bg-gray-900 dark:bg-gray-800 rounded-t-xl pt-4 px-4 pb-2">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-700" />
                <div className="w-1 h-1 rounded-full bg-gray-700" />
              </div>

              <div
                className={`relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-950 ring-1 ${colors.ring}`}
              >
                <Image
                  src={project.image}
                  alt={`${name} on laptop`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <button
                      className={`flex items-center gap-2 px-6 py-3 rounded-full ${colors.button} text-white font-medium shadow-xl transition-all duration-200`}
                    >
                      <Globe className="w-4 h-4" />
                      <span>View Live</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-4 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-b-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 dark:bg-gray-600 rounded-b-lg" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 dark:bg-black/40 blur-xl rounded-full" />
          </div>

          {project.deviceType === "both" && project.mobileImage && (
            <div
              className={`absolute -bottom-8 ${isReversed ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"} w-24 sm:w-32 lg:w-40 transform rotate-6 group-hover:rotate-3 transition-transform duration-500`}
            >
              <div className="bg-gray-900 dark:bg-gray-800 rounded-[1.5rem] p-1.5 shadow-2xl">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-800 dark:bg-gray-700 rounded-full z-10" />
                <div className="relative aspect-[9/19] rounded-[1.2rem] overflow-hidden bg-gray-950">
                  <Image
                    src={project.mobileImage}
                    alt={`${name} on mobile`}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div
          className={`inline-flex items-center gap-3 text-sm font-mono ${colors.accent}`}
        >
          <span className={`w-8 h-px bg-gradient-to-r ${colors.gradient}`} />
          <span>Project 0{index + 1}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          {name}
        </h3>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>

        {project.stats && (
          <div className="flex gap-8 py-4">
            {project.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag: string, tagIndex: number) => (
            <Badge
              key={tagIndex}
              variant="outline"
              className={`text-xs font-medium px-3 py-1.5 ${colors.badge} rounded-full`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="pt-4">
          <button className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:gap-3 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
});
