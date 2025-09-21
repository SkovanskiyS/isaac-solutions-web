"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  BarChart3,
  Zap,
  Target,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Lightbulb,
  Globe,
  TrendingUp,
  Award,
  Palette,
  User,
  Linkedin
} from "lucide-react";

export default function Home() {
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
              AI-Powered Development
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build Smart. Build Fast.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build with Us.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in delivering high-quality software solutions and AI-powered MVPs — 
              helping startups and enterprises move from idea to launch in record time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactForm 
                buttonText="Start Your Project Today"
              />
              <a href="#portfolio">
                <Button variant="outline" size="xl" className="flex-shrink-0">
                  <Globe className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Speed & Innovation</h3>
                <p className="text-muted-foreground">MVPs delivered in weeks, not months</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">UX & UI</h3>
                <p className="text-muted-foreground">Beautiful designs that users love</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Delivery</h3>
                <p className="text-muted-foreground">Reliable solutions tailored to your business goals</p>
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
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">Web Development</CardTitle>
                <CardDescription>
                  We craft modern, scalable, and responsive web applications designed to grow with your business. From landing pages to enterprise platforms, our solutions are built with performance and usability in mind.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>React, Next.js, TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance optimized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">Mobile Development</CardTitle>
                <CardDescription>
                  Our team builds intuitive mobile applications for iOS and Android, ensuring a smooth experience across devices. Whether it's a business app or a customer-facing solution, we make it fast, secure, and user-friendly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>React Native, Flutter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Native performance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>App store deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-foreground">UX & UI Design</CardTitle>
                <CardDescription>
                  Beautiful, intuitive designs that create exceptional user experiences. We focus on usability, accessibility, and visual appeal to ensure your product delights users.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>User Experience Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Interface Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Prototyping & Testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <Lightbulb className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-foreground font-semibold">AI Advantage:</span>
              <span className="text-muted-foreground ml-2">We use AI-driven development to accelerate delivery, validate ideas quickly, and keep quality at the highest standard.</span>
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
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three passionate entrepreneurs building the future of software development with innovation and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Founder 1 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-600">
                <Image 
                  src="/javohir-atabekov.jpg" 
                  alt="Javohir Atabekov - CTO"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Javohir Atabekov</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Technology Officer (CTO)</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  CTO and SAP Business One consultant with strong experience in ERP implementation, digital transformation, 
                  and business process optimization. Skilled project manager leading initiatives that connect technology with 
                  business goals to deliver scalable growth.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SAP Business One</Badge>
                    <Badge variant="outline">Product Strategy</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">System Integration</Badge>
                    <Badge variant="outline">Data Analytics & BI</Badge>
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
                  View LinkedIn Profile
                </Button>
              </div>
            </Card>

            {/* Founder 2 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-600">
                <Image 
                  src="/jahongir-masharipov.jpg" 
                  alt="Jahongir Masharipov - Founder and CEO"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Jahongir Masharipov</h3>
              <p className="text-green-600 font-semibold mb-4">Founder and CEO</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  Passionate about making sports accessible to everyone. Over 2 years of experience in managing 
                  sports projects and leading innovative teams.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Sports Management</Badge>
                    <Badge variant="outline">Team Leadership</Badge>
                    <Badge variant="outline">Project Innovation</Badge>
                    <Badge variant="outline">Business Development</Badge>
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Button at bottom */}
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/jahongir-masharipov', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn Profile
                </Button>
              </div>
            </Card>

            {/* Team Member 3 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Alex Smith</h3>
              <p className="text-orange-600 font-semibold mb-4">Lead Developer</p>
              <div className="text-muted-foreground space-y-3 text-left flex-grow">
                <p>
                  Experienced full-stack developer with expertise in modern web technologies and cloud solutions. 
                  Passionate about creating scalable applications and mentoring junior developers to build 
                  high-quality software solutions.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Full-Stack Development</Badge>
                    <Badge variant="outline">React/Next.js</Badge>
                    <Badge variant="outline">Cloud Architecture</Badge>
                    <Badge variant="outline">Team Mentoring</Badge>
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Button at bottom */}
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/alex-smith-dev', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn Profile
                </Button>
              </div>
            </Card>
          </div>

          {/* Company Mission Statement */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                We believe in delivering high-quality software solutions that not only meet technical requirements 
                but also drive real business value. Our combined expertise in technology and business strategy 
                ensures every project is built for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Next Big Idea?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful startups and enterprises who trust us to deliver exceptional software solutions. 
            Let's discuss your project and turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactForm 
              buttonText="Get Started Today"
            />
            <a href="#portfolio">
              <Button variant="outline" size="lg">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Success Stories
              </Button>
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>24-hour response time</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>No commitment required</span>
            </div>
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
                <span className="text-xl font-bold text-foreground">BuildFast</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building high-quality software and AI-powered solutions that drive business growth.
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">BI Dashboards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 BuildFast. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}