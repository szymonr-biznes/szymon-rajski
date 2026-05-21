import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Szymon Rajski | Automatyzacja dla biznesu i twórców',
  description: "Zastąp powtarzalne procesy zautomatyzowanymi systemami i nowoczesnymi aplikacjami webowymi. Zoptymalizuj koszty operacyjne i zapewnij firmie stały dopływ klientów.",
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background overflow-x-hidden">
      <body className={`${inter.variable} ${inter.className} ${playfair.variable} antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
