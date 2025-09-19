"use client";

import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Language Switcher */}
      <Navigation currentPage="home" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Welcome to Isaac Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building the future with innovative technology solutions
          </p>
          
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive technology solutions for your business
            </p>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 font-semibold">
                🌐 Client-Side Multilingual Support Active!
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
                Language switcher in top-right corner - no URL changes needed!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}