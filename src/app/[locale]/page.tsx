"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
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
  Linkedin,
  Brain,
  Cpu,
  Sparkles,
  Bot,
  Rocket,
  Shield,
  CircuitBoard,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import RotatingText from "@/components/RotatingText";

// Lazy load heavy components for better performance
const ClientLogos = dynamic(() => import("@/components/ClientLogos"), {
  loading: () => (
    <div className="h-24 animate-pulse bg-muted/20 rounded mx-auto max-w-6xl" />
  ),
  ssr: false,
});

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-muted/20 rounded mx-auto max-w-6xl" />
  ),
  ssr: false,
});

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});

const NeuralBackground = dynamic(() => import("@/components/NeuralBackground"), {
  ssr: false,
});

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background ai-grid-bg relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralBackground />
      
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section - Futuristic AI Design */}
      <section
        id="home"
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20"
      >
        {/* Animated gradient orbs with AI colors */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[150px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
                <Badge variant="outline" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500">
                  <Brain className="w-4 h-4 mr-2" />
                  {t("hero.badge")}
                </Badge>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-[0.9] tracking-tight">
                {t("hero.title")}
              </h1>
              <div className="text-4xl md:text-6xl font-black text-gradient-ai mb-8">
                <RotatingText />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                {t("hero.subtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mx-auto max-w-lg">
                <div className="pulse-ring rounded-xl w-full sm:w-auto">
                  <ContactForm buttonText={t("hero.startProject")} size="xl" />
                </div>
                <a href="#portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="xl"
                    className="flex-shrink-0 w-full sm:w-auto group glass border-purple-500/40 hover:bg-purple-500/10 shadow-corporate hover:shadow-corporate-lg hover:border-purple-400/60 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin transition-transform" />
                    {t("hero.viewWork")}
                  </Button>
                </a>
              </div>
            </FadeIn>
            
            {/* AI Feature Cards */}
            <StaggerContainer
              staggerDelay={0.15}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              <StaggerItem>
                <div className="h-full text-center group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 glass-premium glass-shine p-10 rounded-3xl border border-border/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden flex flex-col">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-3xl"></div>
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <div className="w-20 h-20 mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/30 group-hover:scale-105 transition-all duration-500">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t("features.speed.title")}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed flex-1">
                      {t("features.speed.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full text-center group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 glass-premium glass-shine p-10 rounded-3xl border border-border/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden flex flex-col">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl"></div>
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <div className="w-20 h-20 mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-xl group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all duration-500">
                      <Palette className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t("features.uxUi.title")}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed flex-1">
                      {t("features.uxUi.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full text-center group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 glass-premium glass-shine p-10 rounded-3xl border border-border/50 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden flex flex-col">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <div className="w-20 h-20 mb-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-xl group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t("features.trusted.title")}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed flex-1">
                      {t("features.trusted.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos speed="normal" />

      {/* Divider */}
      <div className="divider-corporate my-20"></div>

      {/* Services Section - AI Themed */}
      <section
        id="services"
        className="py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-corporate -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Badge variant="outline" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500">
                <Cpu className="w-4 h-4 mr-2" />
                {t("services.badge") || "Our Services"}
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {t("services.subtitle")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="group relative card-elevated h-full border-2 border-cyan-500/20 hover:border-cyan-400/50 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-cyan">
                    <Code2 className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {t("services.webDev.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.webDev.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                      </div>
                      <span>{t("services.webDev.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                      </div>
                      <span>{t("services.webDev.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                      </div>
                      <span>{t("services.webDev.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="group relative card-elevated h-full border-2 border-purple-500/20 hover:border-purple-400/50 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-purple">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t("services.mobileDev.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.mobileDev.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                      </div>
                      <span>{t("services.mobileDev.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                      </div>
                      <span>{t("services.mobileDev.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                      </div>
                      <span>{t("services.mobileDev.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="group relative card-elevated h-full border-2 border-pink-500/20 hover:border-pink-400/50 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 group-hover:from-pink-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-pink">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {t("services.uxUiDesign.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.uxUiDesign.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                      </div>
                      <span>{t("services.uxUiDesign.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                      </div>
                      <span>{t("services.uxUiDesign.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                      </div>
                      <span>{t("services.uxUiDesign.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-20 text-center">
            <div className="inline-flex items-center px-12 py-6 glass-morph rounded-2xl hover:scale-105 transition-all duration-300 shadow-corporate-xl group relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Brain className="w-8 h-8 text-cyan-500 mr-4 group-hover:animate-pulse relative z-10" />
              <span className="text-foreground font-bold text-xl relative z-10">
                {t("services.aiAdvantage.label")}
              </span>
              <span className="text-muted-foreground ml-3 text-lg relative z-10">
                {t("services.aiAdvantage.description")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <div className="divider-corporate my-20"></div>
      <Portfolio />
      <div className="divider-corporate my-20"></div>

      {/* About Section - Futuristic Team */}
      <section
        id="about"
        className="py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative overflow-hidden"
      >
        {/* Enhanced Background decoration - more subtle */}
        <div className="absolute inset-0 gradient-corporate -z-10 opacity-50"></div>
        <div className="absolute inset-0 ai-grid-bg -z-10 opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-pink-500/3 rounded-full blur-[200px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-24">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Badge variant="outline" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500">
                <Rocket className="w-4 h-4 mr-2" />
                {t("about.badge") || "Our Team"}
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-gradient-corporate">{t("about.title")}</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Founder 1 - Javohir */}
            <ScrollReveal delay={0.1}>
              <Card className="group relative h-full rounded-[2rem] border-0 bg-transparent overflow-hidden">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-background/95 backdrop-blur-xl"></div>
                </div>
                
                {/* Card content */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Floating particles effect on hover */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.2s' }}></div>
                  
                  {/* Profile image with enhanced styling */}
                  <div className="relative mx-auto mb-8">
                    <div className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-400/50 group-hover:scale-105">
                      <Image
                        src="/javohir-atabekov.jpg"
                        alt={`${t("about.team.javohir.name")} - ${t("about.team.javohir.position")}`}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.7s ease-out, opacity 0.3s' }}></div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-3 border-background shadow-lg shadow-emerald-500/50"></div>
                  </div>
                  
                  {/* Name and position */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gradient-corporate transition-all duration-300">
                      {t("about.team.javohir.name")}
                    </h3>
                    <p className="text-cyan-500 font-semibold text-lg flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      {t("about.team.javohir.position")}
                    </p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 flex-grow">
                    {t("about.team.javohir.bio")}
                  </p>
                  
                  {/* Skills section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm text-center flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      {t("about.team.javohir.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {(t.raw("about.team.javohir.skills") as string[]).map(
                        (skill: string, index: number) => (
                          <Badge
                            key={index}
                            className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 text-xs px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  
                  {/* LinkedIn button */}
                  <div className="mt-auto pt-4">
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/javohir-atabekov",
                          "_blank",
                        )
                      }
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-6 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all duration-300 group/btn"
                    >
                      <Linkedin className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      {t("about.linkedinProfile")}
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Founder 2 - Jahongir */}
            <ScrollReveal delay={0.2}>
              <Card className="group relative h-full rounded-[2rem] border-0 bg-transparent overflow-hidden">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500 via-violet-500 to-purple-400 p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-background/95 backdrop-blur-xl"></div>
                </div>
                
                {/* Card content */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Floating particles effect on hover */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.2s' }}></div>
                  
                  {/* Profile image with enhanced styling */}
                  <div className="relative mx-auto mb-8">
                    <div className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400/50 group-hover:border-purple-400 transition-all duration-500 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-400/50 group-hover:scale-105">
                      <Image
                        src="/jahongir-masharipov.jpg"
                        alt={`${t("about.team.jahongir.name")} - ${t("about.team.jahongir.position")}`}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.7s ease-out, opacity 0.3s' }}></div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-3 border-background shadow-lg shadow-emerald-500/50"></div>
                  </div>
                  
                  {/* Name and position */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gradient-corporate transition-all duration-300">
                      {t("about.team.jahongir.name")}
                    </h3>
                    <p className="text-purple-500 font-semibold text-lg flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                      {t("about.team.jahongir.position")}
                    </p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 flex-grow">
                    {t("about.team.jahongir.bio")}
                  </p>
                  
                  {/* Skills section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm text-center flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      {t("about.team.jahongir.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {(t.raw("about.team.jahongir.skills") as string[]).map(
                        (skill: string, index: number) => (
                          <Badge
                            key={index}
                            className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 text-xs px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  
                  {/* LinkedIn button */}
                  <div className="mt-auto pt-4">
                    <Button
                      onClick={() =>
                        window.open(
                          "https://uz.linkedin.com/in/jaxongir-masharipov-67a584256",
                          "_blank",
                        )
                      }
                      className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 text-white font-semibold py-6 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 hover:scale-[1.02] transition-all duration-300 group/btn"
                    >
                      <Linkedin className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      {t("about.linkedinProfile")}
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Company Mission Statement */}
          <ScrollReveal delay={0.4} className="mt-24 text-center">
            <div className="max-w-4xl mx-auto glass-premium p-10 rounded-3xl shadow-corporate-xl relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
                <h3 className="text-4xl font-black text-foreground mb-6 text-gradient-corporate">
                  {t("about.vision.title")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action Section - Futuristic */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-corporate -z-10"></div>
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[150px] -z-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient-ai leading-tight pb-4">
              {t("cta.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {t("cta.subtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mx-auto max-w-lg mb-16">
              <div className="pulse-ring rounded-xl w-full sm:w-auto">
                <ContactForm buttonText={t("cta.getStarted")} size="xl" />
              </div>
              <a href="#portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto group glass border-purple-500/40 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin transition-transform" />
                  {t("cta.viewStories")}
                </Button>
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="inline-block glass-premium glass-shine p-10 rounded-3xl shadow-corporate-xl relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="relative z-10 flex flex-col items-start gap-5 text-muted-foreground">
                {(t.raw("cta.features") as string[]).map(
                  (feature: string, index: number) => (
                    <div key={index} className="flex items-center group hover:translate-x-3 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer - Modern AI Style */}
      <footer className="border-t border-cyan-500/20 bg-background/80 backdrop-blur-xl py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 ai-grid-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center glow-cyan">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-gradient-corporate">
                  {t("footer.company")}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6 text-lg">
                {t("footer.services.title")}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {(t.raw("footer.services.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6 text-lg">
                {t("footer.company_info.title")}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {(t.raw("footer.company_info.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="divider-corporate mt-12 mb-8"></div>
          
          <div className="text-center">
            <p className="text-muted-foreground">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
