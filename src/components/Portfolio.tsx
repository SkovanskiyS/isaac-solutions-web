"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('portfolio');
  
  // Featured Projects data - using translations
  const featuredProjects = [
    {
      id: 1,
      nameKey: "bron24.name",
      descriptionKey: "bron24.description", 
      tagsKey: "bron24.tags",
      image: "/portfolio/bron24.png"
    },
    {
      id: 2,
      nameKey: "vitaCoffee.name",
      descriptionKey: "vitaCoffee.description",
      tagsKey: "vitaCoffee.tags", 
      image: "/portfolio/vita-coffee.png"
    },
    {
      id: 3,
      nameKey: "techflowCrm.name",
      descriptionKey: "techflowCrm.description",
      tagsKey: "techflowCrm.tags",
      image: "/portfolio/techflow-crm.png"
    }
  ];

  return (
    <section id="portfolio" className={`py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ✨ {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  t 
}: { 
  project: Project;
  t: ReturnType<typeof useTranslations>;
}) {
  const name = t(`projects.${project.nameKey}`);
  const description = t(`projects.${project.descriptionKey}`);
  const tags = t.raw(`projects.${project.tagsKey}`) as string[];

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${name} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        
        {/* Project Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag: string, index: number) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}