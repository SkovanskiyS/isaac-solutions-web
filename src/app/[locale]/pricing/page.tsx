import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, MessageCircle, Palette, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations('pricing');
  const contactT = useTranslations('contactForm');
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="pricing" />
      
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t('badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Software Development */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Code2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t('softwareDev.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('softwareDev.packages.starter.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('softwareDev.packages.starter.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('softwareDev.packages.starter.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('softwareDev.packages.starter.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">{t('softwareDev.packages.standard.mostPopular')}</Badge>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('softwareDev.packages.standard.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('softwareDev.packages.standard.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('softwareDev.packages.standard.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('softwareDev.packages.standard.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('softwareDev.packages.premium.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('softwareDev.packages.premium.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('softwareDev.packages.premium.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('softwareDev.packages.premium.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>
            </div>
          </div>

          {/* Telegram Bot */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t('telegramBot.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('telegramBot.packages.starter.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('telegramBot.packages.starter.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('telegramBot.packages.starter.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('telegramBot.packages.starter.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">{t('telegramBot.packages.business.mostPopular')}</Badge>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('telegramBot.packages.business.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('telegramBot.packages.business.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('telegramBot.packages.business.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('telegramBot.packages.business.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('telegramBot.packages.premium.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('telegramBot.packages.premium.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('telegramBot.packages.premium.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('telegramBot.packages.premium.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Palette className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t('uiUxDesign.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('uiUxDesign.packages.basic.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('uiUxDesign.packages.basic.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('uiUxDesign.packages.basic.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('uiUxDesign.packages.basic.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('uiUxDesign.packages.standard.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('uiUxDesign.packages.standard.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('uiUxDesign.packages.standard.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('uiUxDesign.packages.standard.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('uiUxDesign.packages.premium.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('uiUxDesign.packages.premium.priceUsd')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('uiUxDesign.packages.premium.priceUzs')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.raw('uiUxDesign.packages.premium.features') as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Wrench className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t('customSolutions.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4">{t('customSolutions.enterprise.title')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('customSolutions.enterprise.price')}
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {t('customSolutions.enterprise.description')}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-1 gap-6 mb-8 text-left">
                  <ul className="space-y-3">
                    {(t.raw('customSolutions.enterprise.features') as string[]).map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <ContactForm buttonText={t('cta.buttonText')} />
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/10 dark:to-purple-950/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <ContactForm buttonText={t('cta.buttonText')} className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}