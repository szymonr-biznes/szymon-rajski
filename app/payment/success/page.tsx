"use client"

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialMediaBackground } from '@/components/social-media-background';
import { socialMediaServices, businessServices } from '@/lib/services';

function SuccessContent() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get('service');

  const allServices = [...socialMediaServices, ...businessServices];
  // Fallback to the first service just for visual testing if param is missing
  const service = allServices.find(s => s.slug === serviceSlug) || (process.env.NODE_ENV === 'development' ? allServices[0] : null);

  return (
    <Card className="overflow-hidden bg-card border-border shadow-md text-center flex flex-col">
      <CardHeader className="pb-0 text-center">
        <CardTitle className="text-lg">Płatność zakończona sukcesem</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        <div className="flex justify-center -mt-2">
          <CheckCircle2 className="h-8 w-8 text-green-500 animate-in zoom-in duration-700" />
        </div>

        {service && (
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground">Zakupiona usługa</p>
            <p className="text-lg font-bold text-foreground">{service.title}</p>
          </div>
        )}

        <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">
          Dziękuję za zamówienie! Twoja płatność została przetworzona pomyślnie.
          Rozpoczynamy pracę nad Twoją analizą i skontaktujemy się z Tobą mailowo w ciągu 24h.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Link href="/">
              Wróć do strony głównej
            </Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/social-media">
              Zobacz inne usługi
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialMediaBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="mx-auto max-w-2xl w-full">
            <Suspense fallback={<div className="text-center text-muted-foreground">Ładowanie...</div>}>
              <SuccessContent />
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
