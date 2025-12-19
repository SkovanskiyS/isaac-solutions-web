import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Isaac Solutions",
  description: "Transparent pricing for web development, mobile apps, AI integration, and custom software solutions.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
