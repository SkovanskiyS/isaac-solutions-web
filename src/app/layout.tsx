import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Solutions - Software Development & AI-Powered MVPs",
  description: "We specialize in delivering high-quality software solutions and AI-powered MVPs — helping startups and enterprises move from idea to launch in record time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var s=localStorage.getItem('nrm-theme');var t=(s==='dark'||s==='light')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var e=document.documentElement;e.classList.remove('dark','light');e.classList.add(t);e.setAttribute('data-theme',t);}catch(e){}})();`}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <ClientBody>{children}</ClientBody>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
