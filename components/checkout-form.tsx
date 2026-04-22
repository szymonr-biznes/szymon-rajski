'use client';
import { useState } from 'react';
import { Loader2, ArrowRight, User, Mail, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CheckoutForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      setError('Wypełnij wszystkie pola.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slug }),
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
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Imię</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id="firstName"
              placeholder="Jan"
              value={form.firstName}
              onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))}
              className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Nazwisko</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id="lastName"
              placeholder="Kowalski"
              value={form.lastName}
              onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))}
              className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <Input
              id="email"
              placeholder="jan@kowalski.pl"
              type="email"
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>
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
        className="w-full h-12 text-sm font-bold tracking-widest group relative overflow-hidden"
      >
        <span className={`flex items-center justify-center gap-2 transition-all duration-300 ${loading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          Zapłać teraz
          <CreditCard className="h-4 w-4" />
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
      </Button>

      <p className="text-[10px] text-center text-muted-foreground/60 uppercase tracking-tight">
        Zostaniesz przekierowany do bezpiecznej płatności Stripe
      </p>
    </form>
  );
}
