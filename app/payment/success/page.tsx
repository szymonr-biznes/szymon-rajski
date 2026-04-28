"use client"

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { FooterCTA } from '@/components/footer-cta';
import { socialMediaServices, businessServices } from '@/lib/services';

function SuccessContent() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get('service');

  const allServices = [...socialMediaServices, ...businessServices];
  // Fallback to the first service just for visual testing if param is missing
  const service = allServices.find(s => s.slug === serviceSlug) || (process.env.NODE_ENV === 'development' ? allServices[0] : null);

  return (
    <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-black/10 shadow-none text-center flex flex-col max-w-lg mx-auto rounded-sm">
      <CardHeader className="pb-0 text-center pt-8">
        <CardTitle className="text-xl font-medium">Płatność zakończona sukcesem</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6 pb-10">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-500 animate-in zoom-in duration-700" />
          </div>
        </div>

        {service && (
          <div className="space-y-1">
            <p className="text-[11px] text-center text-muted-foreground/100 tracking-tight">
              Zakupiona usługa
            </p>
            <p className="text-xl font-bold text-foreground">{service.title}</p>
          </div>
        )}

        <p className="text-sm text-foreground/70 leading-relaxed max-w-sm mx-auto">
          {service?.successMessage || "Dziękuję za zamówienie! Twoja płatność została przetworzona pomyślnie. Rozpoczynamy pracę nad Twoim zamówieniem i skontaktujemy się z Tobą mailowo w ciągu 24h."}
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/"
            className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5" />
            </div>
            Wróć do strony głównej
          </Link>
          <Link
            href="/social-media"
            className="bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5" />
            </div>
            Zobacz inne usługi
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 relative z-10">
        <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 px-6 lg:px-8 pt-32 pb-24 border-l border-black min-h-[calc(100vh-200px)] flex flex-col justify-center">
          <div className="w-full">
            <Suspense fallback={<div className="text-center text-muted-foreground italic font-serif">Ładowanie...</div>}>
              <SuccessContent />
            </Suspense>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
