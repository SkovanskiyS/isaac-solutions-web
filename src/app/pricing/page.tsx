// This file redirects to the internationalized pricing page  
// The actual pricing page is at src/app/[locale]/pricing/page.tsx

import { redirect } from 'next/navigation';

export default function RootPricingPage() {
  // This will be handled by middleware to redirect to /en/pricing by default
  redirect('/en/pricing');
}