import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Szymon Rajski Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-foreground">Szymon Rajski</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link href="/social-media" className="hover:text-foreground">
              Social Media
            </Link>
            <Link href="/business" className="hover:text-foreground">
              Biznes
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Kontakt
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Szymon Rajski
          </p>
        </div>
      </div>
    </footer>
  )
}
