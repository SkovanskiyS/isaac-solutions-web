import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaac Solutions - AI-Powered Development",
  description: "We specialize in delivering high-quality software solutions and AI-powered MVPs  helping startups and enterprises move from idea to launch in record time.",
};

// Root layout - Next.js requires this file to exist
// The actual layout logic is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
