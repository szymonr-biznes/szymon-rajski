import Link from 'next/link';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialMediaBackground } from '@/components/social-media-background';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialMediaBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="mx-auto max-w-2xl w-full">
            <Card className="overflow-hidden bg-card border-border shadow-md">
              <CardHeader className="pb-3 pt-8 text-center">
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
                  Płatność zakończona sukcesem
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-2 text-center space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Dziękujemy za zamówienie! Twoja płatność została przetworzona pomyślnie.
                  Rozpoczynamy pracę nad Twoją analizą i skontaktujemy się z Tobą mailowo w ciągu 24h.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="h-12 px-8 font-semibold">
                    <Link href="/">
                      Wróć do strony głównej
                      <Home className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-8 font-semibold">
                    <Link href="/social-media">
                      Zobacz inne usługi
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
