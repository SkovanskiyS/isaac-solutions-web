"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Featured Projects data - exactly 3 projects
const featuredProjects = [
  {
    id: 1,
    name: "Bron24",
    description: "A comprehensive 24/7 business management platform with real-time analytics, customer management, and automated workflows. Built for modern enterprises.",
    image: "/portfolio/bron24.png",
    tags: ["Web App", "Dashboard", "Analytics", "SaaS"]
  },
  {
    id: 2,
    name: "Vita Coffee",
    description: "Premium coffee e-commerce platform with subscription management, inventory tracking, and mobile-optimized checkout experience.",
    image: "/portfolio/vita-coffee.png",
    tags: ["E-commerce", "Subscription", "Mobile App"]
  },
  {
    id: 3,
    name: "TechFlow CRM",
    description: "Customer relationship management system with advanced lead tracking, automated email campaigns, and detailed reporting dashboard.",
    image: "/portfolio/techflow-crm.png",
    tags: ["CRM", "Automation", "Email Marketing"]
  }
];

// Individual project card component
function ProjectCard({ project }: { project: typeof featuredProjects[0] }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
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
          {project.name}
        </h3>
        
        {/* Project Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string, index: number) => (
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

interface PortfolioProps {
  className?: string;
}

export default function Portfolio({ className = "" }: PortfolioProps) {
  return (
    <section id="portfolio" className={`py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ✨ Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our latest work showcasing innovation, quality, and client success.
          </p>
        </div>

        {/* Projects Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}