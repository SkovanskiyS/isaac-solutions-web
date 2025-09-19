"use client";

import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, MessageCircle, Palette, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="pricing" />
      
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t('pricing.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>

          {/* Software Development */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Code2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t('pricing.softwareDev.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.softwareDev.starter.name')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('pricing.softwareDev.starter.price')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('pricing.softwareDev.starter.priceLocal')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Landing page (2-3 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mobile responsive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>1-month free support</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">{t('pricing.softwareDev.standard.popular')}</Badge>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.softwareDev.standard.name')}</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    {t('pricing.softwareDev.standard.price')}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t('pricing.softwareDev.standard.priceLocal')}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Business website (5-7 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contact forms &amp; integrations (Telegram, Email)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Responsive design (desktop + mobile)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic CMS (easy content editing)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>3-month free support</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Dev</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $1,700 - $2,500
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    21M - 31M UZS
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Complex web application (10+ pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>User authentication &amp; dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Database integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>API development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Advanced CMS with role-based permissions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>6-month free support</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Palette className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">UI/UX Design</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Basic Design</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $300 - $500
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    3.7M - 6.2M UZS
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Landing page mockup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic branding (logo, color palette)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>2 design revisions</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard Design</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $600 - $900
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    7.5M - 11M UZS
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Multi-page website design (5-7 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>User experience wireframing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Complete brand identity package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Interactive prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>5 design revisions</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>

              <Card className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Design</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $1,000 - $1,500
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    12.5M - 19M UZS
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Complex application UI design (10+ screens)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Advanced user journey mapping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Design system creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>High-fidelity interactive prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Unlimited design revisions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Developer handoff documentation</span>
                  </li>
                </ul>
                
                <div className="mt-auto flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8">
              <Wrench className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Custom Solutions</h2>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4">Enterprise & Scalable Solutions</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    Custom Quote
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Need something bigger? We build enterprise-grade solutions, complex integrations, 
                    and scalable systems tailored to your specific business requirements.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                  <div>
                    <h4 className="font-semibold mb-3">Enterprise Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Multi-tenant architecture</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Advanced analytics dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Third-party integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Custom API development</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Scalability & Support:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Cloud deployment & optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Load balancing & CDN setup</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">24/7 monitoring & alerts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <span className="text-sm">Dedicated support team</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ContactForm buttonText={t('navigation.startProject')} />
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/10 dark:to-purple-950/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <ContactForm buttonText={t('navigation.startProject')} className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}