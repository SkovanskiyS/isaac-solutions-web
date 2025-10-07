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
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";

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

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 gradient-corporate"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <FadeIn delay={0.1}>
              <Badge className="mb-6 glass-strong shadow-corporate px-6 py-2 text-blue-500 border-blue-500/30 font-semibold">
                <Zap className="w-4 h-4 mr-1" />
                {t("hero.badge")}
              </Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                {t("hero.title")}{" "}
                <span className="text-gradient-corporate">
                  {t("hero.titleHighlight")}
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-md">
                <ContactForm buttonText={t("hero.startProject")} size="xl" />
                <a href="#portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="xl"
                    className="flex-shrink-0 w-full sm:w-auto group glass border-blue-500/30 hover:bg-blue-500/10 shadow-corporate hover:shadow-corporate-lg"
                  >
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t("hero.viewWork")}
                  </Button>
                </a>
              </div>
            </FadeIn>
            <StaggerContainer
              staggerDelay={0.15}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <StaggerItem>
                <div className="text-center group hover:scale-105 transition-transform duration-300 glass p-6 rounded-xl shadow-corporate">
                  <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t("features.speed.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.speed.description")}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center group hover:scale-105 transition-transform duration-300 glass p-6 rounded-xl shadow-corporate">
                  <Globe className="w-8 h-8 text-purple-500 mx-auto mb-3 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t("features.uxUi.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.uxUi.description")}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center group hover:scale-105 transition-transform duration-300 glass p-6 rounded-xl shadow-corporate">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t("features.trusted.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.trusted.description")}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos speed="normal" />

      {/* Divider */}
      <div className="divider-corporate my-16"></div>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative bg-gradient-to-b from-background via-muted/5 to-background"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-corporate -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 glass border-blue-500/30 text-blue-500 font-semibold px-4 py-1.5">
              {t("services.badge") || "Our Services"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="group relative card-elevated h-full border-2 hover:border-blue-500/50 shadow-corporate-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden bg-gradient-to-b from-card/95 to-card">
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/30">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {t("services.webDev.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.webDev.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.webDev.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.webDev.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.webDev.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="group relative card-elevated h-full border-2 hover:border-green-500/50 shadow-corporate-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden bg-gradient-to-b from-card/95 to-card">
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-green-500/30">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {t("services.mobileDev.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.mobileDev.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.mobileDev.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.mobileDev.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.mobileDev.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="group relative card-elevated h-full border-2 hover:border-purple-500/50 shadow-corporate-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden bg-gradient-to-b from-card/95 to-card">
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-500/30">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t("services.uxUiDesign.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.uxUiDesign.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.uxUiDesign.features.0")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.uxUiDesign.features.1")}</span>
                    </li>
                    <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      <span>{t("services.uxUiDesign.features.2")}</span>
                    </li>
                  </ul>
                </CardContent>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-16 text-center">
            <div className="inline-flex items-center px-10 py-5 glass-strong rounded-2xl border-2 border-blue-500/30 hover:border-blue-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 shadow-corporate-lg group">
              <Lightbulb className="w-7 h-7 text-blue-500 mr-4 group-hover:animate-pulse group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
              <span className="text-foreground font-bold text-xl">
                {t("services.aiAdvantage.label")}
              </span>
              <span className="text-muted-foreground ml-3 text-lg">
                {t("services.aiAdvantage.description")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <div className="divider-corporate my-16"></div>
      <Portfolio />
      <div className="divider-corporate my-16"></div>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-corporate -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 glass border-purple-500/30 text-purple-500 font-semibold">
              {t("about.badge") || "Our Team"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("about.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Founder 1 */}
            <ScrollReveal delay={0.1}>
              <Card className="card-elevated p-8 text-center flex flex-col h-full border-2 border-blue-500/20 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500 hover:border-blue-400 transition-colors shadow-2xl ring-4 ring-blue-500/20 group-hover:ring-blue-500/40">
                  <Image
                    src="/javohir-atabekov.jpg"
                    alt={`${t("about.team.javohir.name")} - ${t("about.team.javohir.position")}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("about.team.javohir.name")}
                </h3>
                <p className="text-blue-500 font-semibold mb-4 text-lg">
                  {t("about.team.javohir.position")}
                </p>
                <div className="text-muted-foreground space-y-3 text-left flex-grow">
                  <p className="leading-relaxed">
                    {t("about.team.javohir.bio")}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">
                      {t("about.team.javohir.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("about.team.javohir.skills") as string[]).map(
                        (skill: string, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="glass border-blue-500/30"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Button at bottom */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/javohir-atabekov",
                        "_blank",
                      )
                    }
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center gap-2 mx-auto shadow-corporate hover:shadow-corporate-lg group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t("about.linkedinProfile")}
                  </Button>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            {/* Founder 2 */}
            <ScrollReveal delay={0.2}>
              <Card className="card-elevated p-8 text-center flex flex-col h-full border-2 border-green-500/20 rounded-2xl hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-500 hover:border-green-400 transition-colors shadow-2xl ring-4 ring-green-500/20 group-hover:ring-green-500/40">
                  <Image
                    src="/jahongir-masharipov.jpg"
                    alt={`${t("about.team.jahongir.name")} - ${t("about.team.jahongir.position")}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("about.team.jahongir.name")}
                </h3>
                <p className="text-green-500 font-semibold mb-4 text-lg">
                  {t("about.team.jahongir.position")}
                </p>
                <div className="text-muted-foreground space-y-3 text-left flex-grow">
                  <p className="leading-relaxed">
                    {t("about.team.jahongir.bio")}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">
                      {t("about.team.jahongir.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("about.team.jahongir.skills") as string[]).map(
                        (skill: string, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="glass border-green-500/30"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Button at bottom */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://uz.linkedin.com/in/jaxongir-masharipov-67a584256",
                        "_blank",
                      )
                    }
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center gap-2 mx-auto shadow-corporate hover:shadow-corporate-lg group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t("about.linkedinProfile")}
                  </Button>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>

            {/* Team Member 3 */}
            <ScrollReveal delay={0.3}>
              <Card className="card-elevated p-8 text-center flex flex-col h-full border-2 border-orange-500/20 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-orange-500 hover:border-orange-400 transition-colors shadow-2xl ring-4 ring-orange-500/20 group-hover:ring-orange-500/40">
                  <Image
                    src="/fayzullo-lutpillayev.jpg"
                    alt={`${t("about.team.alex.name")} - ${t("about.team.alex.position")}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("about.team.alex.name")}
                </h3>
                <p className="text-orange-500 font-semibold mb-4 text-lg">
                  {t("about.team.alex.position")}
                </p>
                <div className="text-muted-foreground space-y-3 text-left flex-grow">
                  <p className="leading-relaxed">{t("about.team.alex.bio")}</p>
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">
                      {t("about.team.alex.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("about.team.alex.skills") as string[]).map(
                        (skill: string, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="glass border-orange-500/30"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Button at bottom */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/fayzullo-lutpillayev-892923258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                        "_blank",
                      )
                    }
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center gap-2 mx-auto shadow-corporate hover:shadow-corporate-lg group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t("about.linkedinProfile")}
                  </Button>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </ScrollReveal>
          </div>

          {/* Company Mission Statement */}
          <ScrollReveal delay={0.4} className="mt-20 text-center">
            <div className="max-w-3xl mx-auto glass-strong p-8 rounded-2xl border-2 border-blue-500/30 shadow-corporate-xl">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {t("about.vision.title")}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.vision.description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-corporate -z-10 opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("cta.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-md mb-12">
              <ContactForm buttonText={t("cta.getStarted")} size="xl" />
              <a href="#portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto group hover:shadow-lg transition-all">
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {t("cta.viewStories")}
                </Button>
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="inline-block glass-strong p-8 rounded-2xl border-2 border-blue-500/30 shadow-corporate-xl">
              <div className="flex flex-col items-start gap-4 text-muted-foreground">
                {(t.raw("cta.features") as string[]).map(
                  (feature: string, index: number) => (
                    <div key={index} className="flex items-center group hover:translate-x-2 transition-transform">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-base font-medium">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>
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
                <span className="text-xl font-bold text-foreground">
                  {t("footer.company")}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">
                {t("footer.services.title")}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                {(t.raw("footer.services.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="hover:text-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">
                {t("footer.company_info.title")}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                {(t.raw("footer.company_info.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
