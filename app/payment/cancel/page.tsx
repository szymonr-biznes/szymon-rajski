import Link from 'next/link';
import { XCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialMediaBackground } from '@/components/social-media-background';

export default function CancelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialMediaBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 bg-destructive/10 rounded-full flex items-center justify-center">
                <XCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            
            <h1 className="text-3xl font-black text-foreground tracking-tight mb-2">
              Anulowano
            </h1>
            <p className="text-muted-foreground mb-8">
              Proces płatności został przerwany. Jeśli masz pytania lub wystąpił problem techniczny, skontaktuj się ze mną.
            </p>

            <div className="grid gap-3">
              <Button asChild className="h-12 font-bold uppercase tracking-widest">
                <Link href="/social-media/instagram-growth">
                  Spróbuj ponownie
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 font-bold uppercase tracking-widest">
                <Link href="/contact">
                  Napisz do mnie
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
