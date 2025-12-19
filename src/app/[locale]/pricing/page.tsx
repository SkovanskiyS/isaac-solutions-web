"use client";

import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import FadeIn from "@/components/animations/FadeIn";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Check,
  Code2,
  Cpu,
  MessageCircle,
  Package,
  Palette,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Link from "next/link";

const NeuralBackground = dynamic(
  () => import("@/components/NeuralBackground"),
  {
    ssr: false,
  },
);

export default function PricingPage() {
  const t = useTranslations("pricing");
  const contactT = useTranslations("contactForm");
  const footerT = useTranslations("footer");

  return (
    <div className="min-h-screen bg-background ai-grid-bg relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralBackground />

      <Navigation currentPage="pricing" />

      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient orbs with AI colors */}
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] -z-10 animate-float" />
        <div
          className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[120px] -z-10 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] -z-10 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <FadeIn delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/30 rounded-full px-6 py-2.5 text-white border-0 font-semibold text-sm tracking-wider uppercase hover:shadow-purple-400/50 hover:scale-105 transition-all duration-500"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  {t("badge")}
                </Badge>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
                <span className="text-gradient-ai">{t("title")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Web Development */}
          <div className="mb-20 sm:mb-28 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 gradient-corporate rounded-3xl -z-10" />

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mb-12 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 glow-cyan shadow-lg">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  <span className="text-gradient-ai">{t("webDev.title")}</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.starter.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 rounded-2xl relative flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      {t("webDev.packages.standard.mostPopular")}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.standard.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.premium.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-dashed border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("webDev.packages.custom.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
                      {t("webDev.packages.custom.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("webDev.packages.custom.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(t.raw("webDev.packages.custom.features") as string[]).map(
                      (feature: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start group/item hover:translate-x-1 transition-transform"
                        >
                          <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span>{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm buttonText={t("cta.buttonText")} />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="mb-20 sm:mb-28 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 gradient-corporate rounded-3xl -z-10" />

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mb-12 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-purple shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  <span className="text-gradient-ai">
                    {t("mobileDev.title")}
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-green-500/20 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.starter.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-green-500 rounded-2xl relative flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      {t("mobileDev.packages.standard.mostPopular")}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.standard.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.premium.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-dashed border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("mobileDev.packages.custom.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
                      {t("mobileDev.packages.custom.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("mobileDev.packages.custom.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("mobileDev.packages.custom.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Telegram Bot */}
          <div className="mb-20 sm:mb-28 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 gradient-corporate rounded-3xl -z-10" />

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mb-12 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 glow-cyan shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  <span className="text-gradient-ai">
                    {t("telegramBot.title")}
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.starter.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 rounded-2xl relative flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      {t("telegramBot.packages.standard.mostPopular")}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.standard.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.premium.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-dashed border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("telegramBot.packages.custom.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
                      {t("telegramBot.packages.custom.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("telegramBot.packages.custom.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("telegramBot.packages.custom.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-20 sm:mb-28 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 gradient-corporate rounded-3xl -z-10" />

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mb-12 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 glow-pink shadow-lg">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  <span className="text-gradient-ai">
                    {t("uiUxDesign.title")}
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pt-6">
              <ScrollReveal delay={0.1}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-pink-500/20 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.starter.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 rounded-2xl relative flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 group overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      {t("uiUxDesign.packages.standard.mostPopular")}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.standard.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.premium.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-dashed border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("uiUxDesign.packages.custom.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
                      {t("uiUxDesign.packages.custom.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("uiUxDesign.packages.custom.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("uiUxDesign.packages.custom.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* All-In Package */}
          <div className="mb-20 sm:mb-28 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 gradient-corporate rounded-3xl -z-10" />

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mb-8 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 glow-purple shadow-lg">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  <span className="text-gradient-ai">
                    {t("allInPackage.title")}
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
                {t("allInPackage.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pt-6">
              <ScrollReveal delay={0.2}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-violet-500/20 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.starter.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="card-elevated p-6 sm:p-8 border-2 border-blue-500 rounded-2xl relative flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group overflow-visible">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <Badge className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg px-4 py-1.5 text-sm font-semibold animate-pulse hover:scale-110 transition-transform border-2 border-white/20">
                      {t("allInPackage.packages.standard.mostPopular")}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.standard.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-fuchsia-500/20 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.premium.title")}
                    </h3>
                    <div className="text-2xl sm:text-3xl font-bold mb-4 text-gradient-ai whitespace-nowrap">
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
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <Card className="card-elevated p-6 sm:p-8 flex flex-col h-full rounded-2xl border-2 border-dashed border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("allInPackage.packages.custom.title")}
                    </h3>
                    <div className="text-3xl font-bold mb-4 text-gradient-ai">
                      {t("allInPackage.packages.custom.priceUsd")}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {t("allInPackage.packages.custom.priceUzs")}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(
                      t.raw("allInPackage.packages.custom.features") as string[]
                    ).map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start group/item hover:translate-x-1 transition-transform"
                      >
                        <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <ContactForm
                      buttonText={contactT("modal.buttons.defaultButton")}
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-corporate my-16" />

          {/* Contact CTA */}
          <ScrollReveal delay={0.2}>
            <div className="relative text-center glass-strong rounded-3xl p-8 sm:p-16 border-2 border-cyan-500/30 shadow-corporate-xl overflow-hidden">
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic opacity-20" />

              {/* Gradient orb decorations */}
              <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[80px] -z-10" />

              <div className="relative z-10">
                <Brain className="w-16 h-16 text-cyan-500 mx-auto mb-8" />
                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                  <span className="text-gradient-ai">{t("cta.title")}</span>
                </h2>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mx-auto max-w-lg">
                  <div className="pulse-ring rounded-xl w-full sm:w-auto">
                    <ContactForm buttonText={t("cta.buttonText")} size="xl" />
                  </div>
                  <Link href="/" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="xl"
                      className="w-full sm:w-auto group glass border-purple-500/40 hover:bg-purple-500/10 shadow-corporate hover:shadow-corporate-lg hover:border-purple-400/60 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer - Modern AI Style */}
      <footer className="border-t border-cyan-500/20 bg-background/80 backdrop-blur-xl py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 ai-grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center glow-cyan">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-gradient-ai">
                  {footerT("company")}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {footerT("description")}
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6 text-lg">
                {footerT("services.title")}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {(footerT.raw("services.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <Link
                        href="/#services"
                        className="hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6 text-lg">
                {footerT("company_info.title")}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                {(footerT.raw("company_info.items") as string[]).map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <a
                        href={`/#${item.toLowerCase()}`}
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

          <div className="divider-corporate mt-12 mb-8" />

          <div className="text-center">
            <p className="text-muted-foreground">{footerT("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
