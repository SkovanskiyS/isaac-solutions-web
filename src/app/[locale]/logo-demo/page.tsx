"use client";

import React from "react";
import { Logo } from "@/components/Logo";

/**
 * Logo Preview Demo Page
 * Isaac Solutions - Professional Software Development Company
 */
export default function LogoDemo() {
  const variants = ["primary", "corporate", "elegant", "geometric", "wordmark"] as const;
  const sizes = [32, 48, 64, 96];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          Isaac Solutions Logo System
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          Professional logo variants for enterprise software development
        </p>
        <p className="text-sm text-muted-foreground mb-12">
          Clean, formal designs suitable for business contexts, documents, and digital presence.
        </p>

        {variants.map((variant) => (
          <div key={variant} className="mb-16">
            <h2 className="text-2xl font-semibold mb-2 capitalize">{variant} Logo</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {getVariantDescription(variant)}
            </p>

            {/* Size variants */}
            <div className="bg-card rounded-xl p-8 border border-border mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Icon Only</h3>
              <div className="flex items-end gap-8 flex-wrap">
                {sizes.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <Logo variant={variant} size={size} />
                    <span className="text-xs text-muted-foreground">{size}px</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With text */}
            <div className="bg-card rounded-xl p-8 border border-border mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">With Company Name</h3>
              <div className="flex flex-col gap-6">
                {[40, 56].map((size) => (
                  <div key={size} className="flex items-center gap-4">
                    <Logo variant={variant} size={size} showText />
                    <span className="text-xs text-muted-foreground">({size}px)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark/Light backgrounds */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                <h3 className="text-sm font-medium text-slate-400 mb-4">Dark Background</h3>
                <Logo variant={variant} size={64} showText />
              </div>
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-sm font-medium text-slate-600 mb-4">Light Background</h3>
                <Logo variant={variant} size={64} showText />
              </div>
            </div>

            {/* Code snippet */}
            <div className="mt-6 bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-sm text-cyan-400">
                {`<Logo variant="${variant}" size={48} showText />`}
              </code>
            </div>
          </div>
        ))}

        {/* Usage Examples Section */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="text-3xl font-bold mb-8">Business Applications</h2>

          {/* Navigation Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Website Navigation</h3>
            <div className="bg-slate-900/90 backdrop-blur rounded-lg p-4 border border-slate-700">
              <div className="flex items-center justify-between">
                <Logo variant="primary" size={40} showText />
                <div className="flex items-center gap-6 text-white/70 text-sm">
                  <span>Services</span>
                  <span>Portfolio</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Card Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Business Card</h3>
            <div className="bg-white rounded-lg p-8 border border-slate-200 max-w-md">
              <div className="flex items-start gap-4 mb-6">
                <Logo variant="corporate" size={48} />
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Isaac Solutions</h4>
                  <p className="text-slate-500 text-sm">Enterprise Software Development</p>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-slate-700 font-medium">Javohir Atabekov</p>
                <p className="text-slate-500 text-sm">Chief Technology Officer</p>
                <p className="text-slate-500 text-sm mt-2">info@isaac-solutions.com</p>
              </div>
            </div>
          </div>

          {/* Document Header Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Document Header</h3>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <Logo variant="elegant" size={44} showText />
                <div className="text-right text-sm text-slate-500">
                  <p>Proposal Document</p>
                  <p>December 2025</p>
                </div>
              </div>
              <div className="pt-4 text-slate-400 text-sm">
                Document content area...
              </div>
            </div>
          </div>

          {/* Favicon Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Favicon / App Icon</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white rounded p-1 shadow">
                  <Logo variant="wordmark" size={16} />
                </div>
                <span className="text-xs text-muted-foreground">16×16</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white rounded p-1 shadow">
                  <Logo variant="wordmark" size={32} />
                </div>
                <span className="text-xs text-muted-foreground">32×32</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <Logo variant="primary" size={64} />
                </div>
                <span className="text-xs text-muted-foreground">App Icon</span>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4">Recommended Usage</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Primary:</strong> Main website navigation, hero sections, general branding</li>
              <li><strong className="text-foreground">Corporate:</strong> Business cards, formal documents, enterprise presentations</li>
              <li><strong className="text-foreground">Elegant:</strong> Marketing materials, proposals, premium contexts</li>
              <li><strong className="text-foreground">Geometric:</strong> Tech-focused content, developer documentation</li>
              <li><strong className="text-foreground">Wordmark:</strong> Favicons, app icons, watermarks, small applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function getVariantDescription(variant: string): string {
  switch (variant) {
    case "primary":
      return "Main brand mark — Abstract 'I' with forward-leaning design suggesting progress and innovation. Suitable for all business contexts.";
    case "corporate":
      return "Formal IS monogram — Integrated 'I' and 'S' letters in a professional square format. Ideal for business cards and enterprise documents.";
    case "elegant":
      return "Sophisticated abstract mark — Clean lines with subtle depth creating a premium feel. Perfect for marketing and proposals.";
    case "geometric":
      return "Modern connected pattern — Hexagonal design representing solutions and integration. Tech-forward but professional.";
    case "wordmark":
      return "Typography-focused minimal mark — Simple, bold 'I' for favicons and small applications where clarity is essential.";
    default:
      return "";
  }
}
