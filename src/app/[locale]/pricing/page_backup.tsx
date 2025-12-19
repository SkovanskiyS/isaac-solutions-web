import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, MessageCircle, Palette, Wrench } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="pricing" />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Outsourcing Packages
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Isaac Solutions � Outsourcing Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible outsourcing solutions to fit your business needs � from
              launching fast MVPs to scaling enterprise-level systems.
            </p>
          </div>

          {/* Software Development */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Code2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">
                Software Development
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter Dev</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $600 � $900
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    7.5M � 11M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Landing page (2�3 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Mobile responsive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>1-month free support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8 border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">Most Popular</Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard Dev</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $950 � $1,600
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    12M � 20M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Business website (5�7 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Contact forms & integrations (Telegram, Email)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Responsive design (desktop + mobile)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Basic CMS (easy content editing)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>2-month support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Dev</h3>
                  <div className="text-2xl font-bold mb-4 text-blue-600">
                    $1,600 � $3,200
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    20M � 40M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>E-commerce store / ERP module / custom web app</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Payment integration (Payme/Click, Stripe)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Admin dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>3-month dedicated support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>
            </div>
          </div>

          {/* Telegram Bot Development */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">
                Telegram Bot Development
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter Bot</h3>
                  <div className="text-2xl font-bold mb-4 text-green-600">
                    $240 � $430
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    3M � 5.5M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Simple menu bot (FAQ, contacts)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>1 language support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>1-month support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8 border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500">Most Popular</Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Business Bot</h3>
                  <div className="text-2xl font-bold mb-4 text-green-600">
                    $800 � $1,600
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    10M � 20M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Ordering system (products/services)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Online payments (Payme, Click)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Notifications for admins</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>2-month support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Bot</h3>
                  <div className="text-2xl font-bold mb-4 text-green-600">
                    $1,600 � $2,700
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    20M � 35M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Full CRM / ERP integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Customer database + analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Role-based access for staff</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>AI chatbot functions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>3-month premium support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Palette className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">
                UI/UX Design
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter UX</h3>
                  <div className="text-2xl font-bold mb-4 text-purple-600">
                    $200 � $310
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    2.5M � 4M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Logo design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Landing page or 1-screen app design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Style guide (colors, fonts)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>1 round of revisions</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-500">Best Value</Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard UX</h3>
                  <div className="text-2xl font-bold mb-4 text-purple-600">
                    $600 � $1,200
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    7.5M � 15M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Website / mobile app (8�12 screens)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Wireframes + hi-fi mockups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Interactive prototype (Figma)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>2 rounds of revisions</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium UX</h3>
                  <div className="text-2xl font-bold mb-4 text-purple-600">
                    $1,200 � $1,700
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    15M � 22M UZS
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Full product design (20+ screens)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>UX research (user flows, personas)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Design system + reusable components</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Usability testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Unlimited revisions (within scope)</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>
            </div>
          </div>

          {/* IT Support */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Wrench className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">
                IT Support (Monthly Plans)
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter Care</h3>
                  <div className="text-2xl font-bold mb-4 text-orange-600">
                    $160 � $300
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    2M � 3.8M UZS/month
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>10 hrs / month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Website & bot bug fixes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Basic updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Remote support</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8 border-2 border-orange-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500">Most Popular</Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard Care</h3>
                  <div className="text-2xl font-bold mb-4 text-orange-600">
                    $300 � $520
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    3.8M � 6.5M UZS/month
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>20�40 hrs / month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>System monitoring & maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Regular backups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Priority bug fixing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>24h response time</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>

              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium Care</h3>
                  <div className="text-2xl font-bold mb-4 text-orange-600">
                    $750 � $1,900
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    9.6M � 24M UZS/month
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>60+ hrs / month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Dedicated support manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>24/7 SLA response</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Unlimited bug fixing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Monthly reports</span>
                  </li>
                </ul>

                <ContactForm
                  buttonText="Start Your Project Today"
                  className="w-full"
                />
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Ready to transform your business with our outsourcing solutions?
            </p>
            <ContactForm buttonText="Get Custom Quote" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
