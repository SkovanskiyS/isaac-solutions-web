"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import ClientLogos from '@/components/ClientLogos';
import ContactForm from '@/components/ContactForm';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Zap, Users, Globe, MessageSquare } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Language Switcher */}
      <Navigation currentPage="home" />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <ContactForm 
                buttonText={t('navigation.startProject')}
                size="lg"
              />
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => smoothScrollToSection('portfolio')}
                className="group"
              >
                {t('hero.viewWork')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{t('hero.features.speed.title')}</h3>
                <p className="text-muted-foreground">{t('hero.features.speed.description')}</p>
              </Card>
              <Card className="p-6 text-center">
                <Palette className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">{t('hero.features.design.title')}</h3>
                <p className="text-muted-foreground">{t('hero.features.design.description')}</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">{t('hero.features.delivery.title')}</h3>
                <p className="text-muted-foreground">{t('hero.features.delivery.description')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="p-8">
              <Code2 className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4">{t('services.webDev.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('services.webDev.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  React, Next.js, TypeScript
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Responsive design
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Performance optimized
                </li>
              </ul>
            </Card>

            {/* Mobile Development */}
            <Card className="p-8">
              <Globe className="w-12 h-12 mb-4 text-green-600" />
              <h3 className="text-2xl font-semibold mb-4">{t('services.mobileDev.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('services.mobileDev.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  React Native, Flutter
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Native performance
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  App store deployment
                </li>
              </ul>
            </Card>

            {/* UX/UI Design */}
            <Card className="p-8">
              <MessageSquare className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-4">{t('services.uxUi.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('services.uxUi.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  User Experience Design
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Interface Design
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Prototyping & Testing
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <ContactForm 
              buttonText={t('navigation.startProject')}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio className="" />

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Isaac Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences that drive business growth.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <ContactForm 
              buttonText={t('navigation.startProject')}
              size="lg"
            />
          </Card>
        </div>
      </section>
    </div>
  );
}