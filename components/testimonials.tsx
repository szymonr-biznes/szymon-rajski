"use client";

import { motion } from "framer-motion"
import Link from "next/link"
import { Plus } from "lucide-react"
import Image from "next/image"

const testimonials1 = [
  {
    name: "Karolina",
    role: "Twórca na Instagramie",
    content: `Moje rolki zyskały więcej wyświetleń dzięki kompletnej analizie
      mojego profilu i konkurencji przez co mój rozwój przyśpieszył w ciągu kilku tygodni!`,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mateusz",
    role: "Trener personalny i dietetyk",
    content: `Miałem problem z oferowaniem moich usług prywatnie, więc zgłosiłem się
     po profesjonalną stronę. Od tamtego czasu pozyskałem wielu nowych ludzi oraz nawiązałem
     kilkanaście współprac z markami fitness.`,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jagoda",
    role: "Food blogerka",
    content: `Jako wieloletnia blogerka kulinarna, zmagalam sie z brakiem obsługi moich 
      klientów w sieci. Dopiero niezawodny system sprawił że byłam w stanie potroić
      sprzedaż moich poradników i przepisów w sieci bez straty mojego czasu.`,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Ania",
    role: "Moda i lifestyle",
    content: `Miałam problem z odpisywaniem na pytania od moich obserwatorów.
      System do obsługi prywatnych wiadomości sprawił, że mam więcej czasu na tworzenie
      nowych treści a moi fani są kierowani do moich szczegółowych ofert na bieżąco!`,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

const testimonials2 = [
  {
    name: "Andrzej",
    role: "Właściciel agencji marketingowej",
    content: `Mój zespół potrzebował niezawodnego systemu do kontaktu z klientami dlatego
      umówiłem się na konsultację aby poznać proces tworzenia i integracji. Po tygodniu
      przeszliśmy do wdrożenia systemu u nas w firmie i działamy bez przestojów.`,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Grzegorz",
    role: "CEO firmy outsourcingowej",
    content: `Nasza współpraca odmieniła podejście mojej firmy do inbound marketingu.
      Wreszcie mamy przewidywalny plan sprzedaży i możemy planować rozwój w oparciu o twarde
      dane a nie domysły.`,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Adam",
    role: "Firma developerska",
    content: `Potrzebowaliśmy systemu do analizy rynku mieszkań w polskich miastach. Teraz
      mamy automatyczny system do wycen oraz popytu w danych lokalizacjach przez co możemy mieć
      konkurencyjne oferty na bieżąco.`,
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    name: "Martyna",
    role: "Departament HR",
    content: `Nasz stary system do filtracji CV nie działał poprawnie i często się zacinał,
      przez co traciliśmy wielu cennych kandydatów. Teraz nawet nieszablonowe CV przechodzą
      przez nasz system i są oceniane pod kątem kwalifikacji a nie według sztywnych schematów.`,
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  }
]

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="pb-4">
      <div className="bg-white p-6 rounded-sm border border-black/5 shadow-sm h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
            <Image src={t.image} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
        <p className="text-sm font-medium leading-relaxed text-foreground/80">
          {t.content}
        </p>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden h-auto lg:h-[800px]">
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-3 lg:mx-8 px-6 lg:px-8 py-24 lg:py-0 h-full relative border-l border-black after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">

          {/* Left Side */}
          <div className="max-w-xl z-10 lg:pl-4">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
              Co mówią liderzy i twórcy <br className="hidden md:block" />
              o współpracy <span className="font-serif italic font-normal">ze mną</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-md">
              Zamiast kolejnego nudnego pakietu usług, otrzymujesz specjalnie zaprojektowany
              pod Ciebie system z możliwością przyszłych integracji i rozbudowy na życzenie.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#cases" className="bg-black hover:bg-black/80 text-white px-5 py-3 text-sm font-semibold transition-colors flex items-center gap-3 rounded-sm">
                <div className="w-5 h-5 rounded-[4px] bg-white/10 flex items-center justify-center">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                Zobacz case study
              </Link>
              <Link href="#contact" className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-5 py-3 text-sm font-semibold transition-colors flex items-center gap-3 rounded-sm">
                <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                Porozmawiajmy
              </Link>
            </div>
          </div>

          {/* Right Side - Two Carousels */}
          <div className="relative h-[500px] lg:h-[650px] overflow-hidden flex flex-col md:flex-row gap-4 -mx-6 lg:mx-0 px-6 lg:px-0">
            {/* gradient overlays for smooth fading */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>

            {/* Carousel 1 (Scroll Down) */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col absolute top-0 left-0 w-full"
                animate={{ y: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...testimonials1, ...testimonials1].map((t, i) => (
                  <TestimonialCard key={`col1-${i}`} t={t} />
                ))}
              </motion.div>
            </div>

            {/* Carousel 2 (Scroll Up) */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col absolute top-0 left-0 w-full"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
              >
                {[...testimonials2, ...testimonials2].map((t, i) => (
                  <TestimonialCard key={`col2-${i}`} t={t} />
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
