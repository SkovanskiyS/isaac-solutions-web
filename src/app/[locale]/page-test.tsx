"use client";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Test Page Working!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Locale from params: {params.locale}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            If you can see this, the routing is working!
          </p>
        </div>
      </div>
    </div>
  );
}
