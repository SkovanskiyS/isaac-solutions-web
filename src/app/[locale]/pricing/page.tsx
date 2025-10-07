"use client";

import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Check,
  Code2,
  MessageCircle,
  Palette,
  Wrench,
  Smartphone,
  Package,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FadeIn from "@/components/animations/FadeIn";

export default function PricingPage() {
  const t = useTranslations("pricing");
  const contactT = useTranslations("contactForm");

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="pricing" />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 glass border-blue-500/30"
              >
                {t("badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Web Development */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <Code2 className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t("webDev.title")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.starter.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("webDev.packages.starter.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("webDev.packages.starter.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("webDev.packages.starter.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm buttonText={t("cta.buttonText")} />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 shadow-corporate-lg overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      <Sparkles className="w-4 h-4 mr-1.5 inline-block animate-sparkle" />
                      {t("webDev.packages.standard.mostPopular")}
                      <Sparkles
                        className="w-4 h-4 ml-1.5 inline-block animate-sparkle"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.standard.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("webDev.packages.standard.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("webDev.packages.standard.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("webDev.packages.standard.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm buttonText={t("cta.buttonText")} />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.premium.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("webDev.packages.premium.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("webDev.packages.premium.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("webDev.packages.premium.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm buttonText={t("cta.buttonText")} />
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <Smartphone className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t("mobileDev.title")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.starter.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("mobileDev.packages.starter.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("mobileDev.packages.starter.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("mobileDev.packages.starter.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 shadow-corporate-lg overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      <Sparkles className="w-4 h-4 mr-1.5 inline-block animate-sparkle" />
                      {t("mobileDev.packages.standard.mostPopular")}
                      <Sparkles
                        className="w-4 h-4 ml-1.5 inline-block animate-sparkle"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.standard.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("mobileDev.packages.standard.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("mobileDev.packages.standard.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("mobileDev.packages.standard.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.premium.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("mobileDev.packages.premium.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("mobileDev.packages.premium.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("mobileDev.packages.premium.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Telegram Bot */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t("telegramBot.title")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.starter.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("telegramBot.packages.starter.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("telegramBot.packages.starter.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("telegramBot.packages.starter.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 shadow-corporate-lg overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      <Sparkles className="w-4 h-4 mr-1.5 inline-block animate-sparkle" />
                      {t("telegramBot.packages.standard.mostPopular")}
                      <Sparkles
                        className="w-4 h-4 ml-1.5 inline-block animate-sparkle"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.standard.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("telegramBot.packages.standard.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("telegramBot.packages.standard.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw(
                        "telegramBot.packages.standard.features",
                      ) as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.premium.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("telegramBot.packages.premium.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("telegramBot.packages.premium.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("telegramBot.packages.premium.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <Palette className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t("uiUxDesign.title")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.starter.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("uiUxDesign.packages.starter.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("uiUxDesign.packages.starter.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("uiUxDesign.packages.starter.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 shadow-corporate-lg overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      <Sparkles className="w-4 h-4 mr-1.5 inline-block animate-sparkle" />
                      {t("uiUxDesign.packages.standard.mostPopular")}
                      <Sparkles
                        className="w-4 h-4 ml-1.5 inline-block animate-sparkle"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.standard.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("uiUxDesign.packages.standard.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("uiUxDesign.packages.standard.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("uiUxDesign.packages.standard.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.premium.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("uiUxDesign.packages.premium.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("uiUxDesign.packages.premium.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("uiUxDesign.packages.premium.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* All-In Package */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <Wrench className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t("allInPackage.title")}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t("allInPackage.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pt-6">
              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.starter.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("allInPackage.packages.starter.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("allInPackage.packages.starter.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw(
                        "allInPackage.packages.starter.features",
                      ) as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 shadow-corporate-lg overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      <Sparkles className="w-4 h-4 mr-1.5 inline-block animate-sparkle" />
                      {t("allInPackage.packages.standard.mostPopular")}
                      <Sparkles
                        className="w-4 h-4 ml-1.5 inline-block animate-sparkle"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.standard.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("allInPackage.packages.standard.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("allInPackage.packages.standard.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw(
                        "allInPackage.packages.standard.features",
                      ) as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-8 flex flex-col h-full hover:scale-105 transition-all duration-300 shadow-corporate-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.premium.title")}
                    </h3>
                    <div className="text-2xl font-bold mb-4 text-blue-600">
                      {t("allInPackage.packages.premium.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("allInPackage.packages.premium.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw(
                        "allInPackage.packages.premium.features",
                      ) as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Contact CTA */}
          <ScrollReveal delay={0.2}>
            <div className="text-center glass-strong rounded-2xl p-6 sm:p-12 border-2 border-blue-500/30 shadow-corporate-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t("cta.description")}
              </p>
              <div className="flex justify-center w-full">
                <ContactForm
                  buttonText={t("cta.buttonText")}
                  className="w-full max-w-xs sm:max-w-md mx-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
