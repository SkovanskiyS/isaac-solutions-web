import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientBody from "../ClientBody";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Solutions - AI-Powered Development",
  description: "We specialize in delivering high-quality software solutions and AI-powered MVPs — helping startups and enterprises move from idea to launch in record time.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const theme = localStorage.getItem('nrm-theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const selectedTheme = (theme === 'dark' || theme === 'light') ? theme : systemTheme;
                
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(selectedTheme);
                document.documentElement.setAttribute('data-theme', selectedTheme);
              } catch (e) {
                // Fallback to light theme if localStorage is not available
                document.documentElement.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ClientBody>{children}</ClientBody>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}