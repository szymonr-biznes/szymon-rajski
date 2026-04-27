"use client"

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <Card className="overflow-hidden bg-white border-black shadow-2xl text-center flex flex-col max-w-lg mx-auto rounded-sm">
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
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Wybrana usługa</p>
            <p className="text-lg font-bold text-foreground">{service.title}</p>
          </div>
        )}

        <p className="text-sm text-foreground/70 leading-relaxed max-w-sm mx-auto">
          Proces płatności został przerwany. Jeśli masz pytania lub wystąpił problem techniczny, skontaktuj się ze mną.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <Button
            asChild
            className="bg-[#0033FF] hover:bg-[#002BE6] text-white rounded-sm h-12 text-sm font-bold transition-all"
          >
            <Link href={service ? `/${socialMediaServices.some(s => s.slug === service.slug) ? 'social-media' : 'business'}/${service.slug}` : "/"}>
              Spróbuj ponownie
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-sm h-12 border-black text-black hover:bg-black hover:text-white transition-all text-sm font-bold">
            <Link href="/contact">
              Skontaktuj się ze mną
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CancelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24 relative z-10">
        <div className="w-full">
          <Suspense fallback={<div className="text-center text-muted-foreground italic font-serif">Ładowanie...</div>}>
            <CancelContent />
          </Suspense>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
