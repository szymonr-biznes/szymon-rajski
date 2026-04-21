import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Szymon Rajski | Automatyzacja dla biznesu i twórców',
  description: 'Oszczędzaj czas i zwiększaj efektywność z naszymi narzędziami automatyzacji - Instagram, outreach, cold email i więcej.',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${inter.variable} ${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
