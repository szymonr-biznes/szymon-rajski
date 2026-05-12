import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Szymon Rajski",
  description: "Skontaktuj się z nami",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
