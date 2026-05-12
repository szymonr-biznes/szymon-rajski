"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Header } from "@/components/header";
import { FooterCTA } from "@/components/footer-cta";

export default function KontaktPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": {
          "branding": {
            "brandColor": "#0033FF"
          }
        },
        "cssVarsPerTheme": {
          "light": {
            "cal-brand": "#0033FF"
          },
          "dark": {
            "cal-brand": "#0033FF"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      } as any);
    })();
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] relative">
      <Header />
      <main className="flex-1 relative z-10">
        <section className="relative overflow-hidden">
          <div className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-24 border-l border-black relative">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              Zróbmy to <span className="font-serif italic font-normal">razem</span>
            </h1>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Masz pytania dotyczące automatyzacji lub chcesz omówić swój projekt? Skontaktuj się ze mną bezpośrednio.
            </p>
          </div>

          <div className="border-l border-t lg:border-r border-black ml-3 lg:mx-16 bg-[#F4F1EA] pt-18 px-4">
            <Cal
              calLink="szymon-rajski-k6egws/spotkanie-projektowe"
              style={{ width: "100%", height: "100%" }}
              config={{
                layout: "month_view",
                theme: "light",
                locale: "pl"
              }}
            />
          </div>

          <div className="w-auto ml-3 lg:w-[calc(100%-128px)] lg:mx-16 border-l border-black pb-20 md:pb-32">
            <div className="lg:border-r border-t border-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <a href="mailto:szymonr.biznes@gmail.com" className="p-8 lg:p-12 border-b md:border-r border-black group lg:hover:bg-black lg:hover:text-white transition-colors duration-500">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50 group-hover:opacity-100">Email</p>
                  <div className="text-xl md:text-2xl font-medium break-words">szymonr.biznes@gmail.com</div>
                </a>

                <a href="tel:+48506455883" className="p-8 lg:p-12 border-b border-black group lg:hover:bg-black lg:hover:text-white transition-colors duration-500">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50 group-hover:opacity-100">Telefon</p>
                  <div className="text-xl md:text-2xl font-medium">+48 506 455 883</div>
                </a>

                <a href="https://www.linkedin.com/in/szymon-rajski-73177a21a" target="_blank" rel="noopener noreferrer" className="p-8 lg:p-12 border-b md:border-r border-black group lg:hover:bg-black lg:hover:text-white transition-colors duration-500">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50 group-hover:opacity-100">LinkedIn</p>
                  <div className="text-xl md:text-2xl font-medium">Szymon Rajski</div>
                </a>

                <a href="https://instagram.com/_rajo_rajo_" target="_blank" rel="noopener noreferrer" className="p-8 lg:p-12 border-b border-black group lg:hover:bg-black lg:hover:text-white transition-colors duration-500">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50 group-hover:opacity-100">Instagram</p>
                  <div className="text-xl md:text-2xl font-medium">@_rajo_rajo_</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
}
