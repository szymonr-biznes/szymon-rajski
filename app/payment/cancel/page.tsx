"use client"

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { XCircle, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { FooterCTA } from '@/components/footer-cta';
import { socialMediaServices, businessServices } from '@/lib/services';

function CancelContent() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get('service');
  
  const allServices = [...socialMediaServices, ...businessServices];
  const service = allServices.find(s => s.slug === serviceSlug) || (process.env.NODE_ENV === 'development' ? allServices[0] : null);

  return (
    <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-black/10 shadow-none text-center flex flex-col max-w-lg mx-auto rounded-sm">
      <CardHeader className="pb-0 text-center pt-8">
        <CardTitle className="text-xl font-medium">Płatność anulowana</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6 pb-10">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
            <XCircle className="h-8 w-8 text-red-500 animate-in zoom-in duration-700" />
          </div>
        </div>
        
        {service && (
          <div className="space-y-1">
            <p className="text-[11px] text-center text-muted-foreground/100 tracking-tight">
              Wybrana usługa
            </p>
            <p className="text-xl font-bold text-foreground">{service.title}</p>
          </div>
        )}

        <p className="text-sm text-foreground/70 leading-relaxed max-w-sm mx-auto">
          Proces płatności został przerwany. Jeśli masz pytania lub wystąpił problem techniczny, skontaktuj się ze mną.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            href={service ? `/${socialMediaServices.some(s => s.slug === service.slug) ? 'social-media' : 'business'}/${service.slug}` : "/"}
            className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-2.5 rounded-sm text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5" />
            </div>
            Spróbuj ponownie
          </Link>
          <Link
            href="/contact"
            className="bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-sm text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5" />
            </div>
            Skontaktuj się ze mną
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CancelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 relative z-10">
        <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 px-6 lg:px-8 pt-32 pb-24 border-l border-black min-h-[calc(100vh-200px)] flex flex-col justify-center">
          <div className="w-full">
            <Suspense fallback={<div className="text-center text-muted-foreground italic font-serif">Ładowanie...</div>}>
              <CancelContent />
            </Suspense>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
