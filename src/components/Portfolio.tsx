"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface PortfolioProps {
  className?: string;
}

interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  tagsKey: string;
  image: string;
}

export default function Portfolio({ className = "" }: PortfolioProps) {
  const t = useTranslations("portfolio");

  // Featured Projects data - using translations
  const featuredProjects = [
    {
      id: 1,
      nameKey: "bron24.name",
      descriptionKey: "bron24.description",
      tagsKey: "bron24.tags",
      image: "/portfolio/bron24.png",
    },
    {
      id: 2,
      nameKey: "vitaCoffee.name",
      descriptionKey: "vitaCoffee.description",
      tagsKey: "vitaCoffee.tags",
      image: "/portfolio/vita-coffee.png",
    },
    {
      id: 3,
      nameKey: "techflowCrm.name",
      descriptionKey: "techflowCrm.description",
      tagsKey: "techflowCrm.tags",
      image: "/portfolio/techflow-crm.png",
    },
  ];

  return (
    <section
      id="portfolio"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-gradient-to-b from-background via-muted/5 to-background ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-4xl">✨</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {t("title")}
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Projects Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual project card component
function ProjectCard({
  project,
  t,
}: {
  project: Project;
  t: ReturnType<typeof useTranslations>;
}) {
  const name = t(`projects.${project.nameKey}`);
  const description = t(`projects.${project.descriptionKey}`);
  const tags = t.raw(`projects.${project.tagsKey}`) as string[];

  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-border/50 bg-card backdrop-blur-sm rounded-2xl">
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
        <Image
          src={project.image}
          alt={`${name} project screenshot`}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardContent className="relative p-6 space-y-4 bg-gradient-to-b from-card/95 to-card">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
          {name}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[60px]">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 border border-blue-200/50 dark:border-blue-800/50"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
}
