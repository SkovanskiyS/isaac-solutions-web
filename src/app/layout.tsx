import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getLocale } from "next-intl/server";

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
  description:
    "We specialize in delivering high-quality software solutions and AI-powered MVPs — helping startups and enterprises move from idea to launch in record time.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
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
                document.documentElement.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
