'use client';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CheckoutForm({ slug }: { slug: string }) {
  const [form, setForm] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(`checkoutForm_${slug}`);
      if (saved) return JSON.parse(saved);
    }
    return { firstName: '', email: '' };
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    sessionStorage.setItem(`checkoutForm_${slug}`, JSON.stringify(form));
  }, [form, slug]);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setLoading(false);
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email) {
      setError('Wypełnij wszystkie pola.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lastName: '', slug }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Błąd inicjacji płatności. Spróbuj ponownie.');
        setLoading(false);
      }
    } catch (err) {
      setError('Coś poszło nie tak. Sprawdź połączenie.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 mt-2">
        <div className="grid gap-1.5">
          <Label htmlFor="firstName" className="text-sm text-muted-foreground">Imię</Label>
          <Input
            id="firstName"
            placeholder="Twoje imię"
            value={form.firstName}
            onChange={e => setForm((p: typeof form) => ({ ...p, firstName: e.target.value }))}
            className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/40"
            required
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
          <Input
            id="email"
            placeholder="Twój adres email do kontaktu"
            type="email"
            value={form.email}
            onChange={e => setForm((p: typeof form) => ({ ...p, email: e.target.value }))}
            className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/40"
            required
          />
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-in fade-in slide-in-from-top-1">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full relative overflow-hidden"
        style={{ cursor: 'pointer' }}
      >
        <span style={{ cursor: 'pointer' }} className={`flex items-center justify-center gap-2 transition-all duration-300 ${loading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          Kup teraz
        </span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
      </Button>

      <p className="text-[10px] text-center text-muted-foreground/60 tracking-tight">
        Zostaniesz przekierowany do bezpiecznej płatności Stripe
      </p>
    </form>
  );
}
