// This file redirects to the internationalized homepage
// The actual homepage is at src/app/[locale]/page.tsx

import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will be handled by middleware to redirect to /en by default
  redirect('/en');
}
