"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import {
  Code2,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Globe,
  Palette,
  User,
  Linkedin
} from "lucide-react";

// Lazy load heavy components for better performance
const ClientLogos = dynamic(() => import('@/components/ClientLogos'), {
  loading: () => <div className="h-24 animate-pulse bg-muted/20 rounded mx-auto max-w-6xl" />,
  ssr: false
});

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded mx-auto max-w-6xl" />,
  ssr: false
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false
});

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
              <Zap className="w-4 h-4 mr-1" />
              {t('hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t('hero.title')}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-md">
              <ContactForm 
                buttonText={t('hero.startProject')}
                size="xl"
              />
              <a href="#portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="flex-shrink-0 w-full sm:w-auto">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('hero.viewWork')}
                </Button>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('features.speed.title')}</h3>
                <p className="text-muted-foreground">{t('features.speed.description')}</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('features.uxUi.title')}</h3>
                <p className="text-muted-foreground">{t('features.uxUi.description')}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('features.trusted.title')}</h3>
                <p className="text-muted-foreground">{t('features.trusted.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos speed="normal" />

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">{t('services.webDev.title')}</CardTitle>
                <CardDescription>
                  {t('services.webDev.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.webDev.features.0')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.webDev.features.1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.webDev.features.2')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">{t('services.mobileDev.title')}</CardTitle>
                <CardDescription>
                  {t('services.mobileDev.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.mobileDev.features.0')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.mobileDev.features.1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.mobileDev.features.2')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">{t('services.uxUiDesign.title')}</CardTitle>
                <CardDescription>
                  {t('services.uxUiDesign.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.uxUiDesign.features.0')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.uxUiDesign.features.1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t('services.uxUiDesign.features.2')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <Lightbulb className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-foreground font-semibold">{t('services.aiAdvantage.label')}</span>
              <span className="text-muted-foreground ml-2">{t('services.aiAdvantage.description')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Founder 1 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-600">
                <Image 
                  src="/javohir-atabekov.jpg" 
                  alt={`${t('about.team.javohir.name')} - ${t('about.team.javohir.position')}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{t('about.team.javohir.name')}</h3>
              <p className="text-blue-600 font-semibold mb-4">{t('about.team.javohir.position')}</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  {t('about.team.javohir.bio')}
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">{t('about.team.javohir.expertise')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw('about.team.javohir.skills') as string[]).map((skill: string, index: number) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Button at bottom */}
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/javohir-atabekov', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('about.linkedinProfile')}
                </Button>
              </div>
            </Card>

            {/* Founder 2 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-600">
                <Image 
                  src="/jahongir-masharipov.jpg" 
                  alt={`${t('about.team.jahongir.name')} - ${t('about.team.jahongir.position')}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{t('about.team.jahongir.name')}</h3>
              <p className="text-green-600 font-semibold mb-4">{t('about.team.jahongir.position')}</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  {t('about.team.jahongir.bio')}
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">{t('about.team.jahongir.expertise')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw('about.team.jahongir.skills') as string[]).map((skill: string, index: number) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Button at bottom */}
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  onClick={() => window.open('https://uz.linkedin.com/in/jaxongir-masharipov-67a584256', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('about.linkedinProfile')}
                </Button>
              </div>
            </Card>

            {/* Team Member 3 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-orange-600">
                <Image 
                  src="/fayzullo-lutpillayev.jpg" 
                  alt={`${t('about.team.alex.name')} - ${t('about.team.alex.position')}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{t('about.team.alex.name')}</h3>
              <p className="text-orange-600 font-semibold mb-4">{t('about.team.alex.position')}</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  {t('about.team.alex.bio')}
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">{t('about.team.alex.expertise')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw('about.team.alex.skills') as string[]).map((skill: string, index: number) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Button at bottom */}
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/fayzullo-lutpillayev-892923258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('about.linkedinProfile')}
                </Button>
              </div>
            </Card>
          </div>

          {/* Company Mission Statement */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.vision.title')}</h3>
              <p className="text-lg text-muted-foreground">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-md">
            <ContactForm 
              buttonText={t('cta.getStarted')}
              size="xl"
            />
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <ArrowRight className="w-5 h-5 mr-2" />
                {t('cta.viewStories')}
              </Button>
            </a>
          </div>
          <div className="mt-12 flex flex-col items-start justify-start gap-3 text-muted-foreground mx-auto w-fit">
            {(t.raw('cta.features') as string[]).map((feature: string, index: number) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">{t('footer.company')}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">{t('footer.services.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(t.raw('footer.services.items') as string[]).map((item: string, index: number) => (
                  <li key={index}><a href="#services" className="hover:text-foreground transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">{t('footer.company_info.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(t.raw('footer.company_info.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}