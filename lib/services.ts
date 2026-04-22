export const socialMediaServices = [
  {
    id: "instagram-growth",
    title: "Instagram Profile Growth",
    shortDescription: "Strategia wzrostu na Instagramie",
    fullDescription: `Kompleksowy raport Twojego konta na Instagramie.
      Analizujemy Twoje zasięgi, engagement, konkurencje i wiele więcej.
      Otrzymujesz gotowy plan wraz z konkretnymi rekomendacjami, jak
      zwiększać swoją obecność na platformie.`,
    price: "99 zł",
    amount: 9900,
    priceNote: "analiza",
    features: [
      "Analiza konta",
      "Audyt treści",
      "Mocne i słabe strony konkurencji",
      "Gotowe hooki, CTA oraz pomysły",
      "Plan tygodniowy",
      "Przykładowy content na 14 dni"
    ],
    formLink: "https://forms.gle/VjGUvQUkfF2wtRJW7",
    slug: "instagram-growth",
    workflowNodes: [
      { id: "1", icon: "form" as const, x: 35, y: 65, color: "#405DE6" },
      { id: "2", icon: "users" as const, x: 105, y: 20, color: "#C13584" },
      { id: "3", icon: "chart-column" as const, x: 115, y: 80, color: "#833AB4" },
      { id: "4", icon: "chart-no-axes-gantt" as const, x: 185, y: 55, color: "#F56040" },
      { id: "5", icon: "file-chart-line" as const, x: 255, y: 45, color: "#FCAF45" },
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "4", to: "5" },
    ],
  },
  {
    id: "instagram-dm",
    title: "Instagram DM Replier",
    shortDescription: "System odpowiedzi na wiadomości",
    fullDescription: `Zautomatyzujemy odpowiedzi na wiadomości od obserwujących
      lub innych użytkowników a Ty nie przegapisz ofert lub chęci zakupu Twojej usługi.
      Idealne dla twórców otrzymujących dziesiątki DM-ów dziennie.`,
    price: "149 zł",
    amount: 14900,
    priceNote: "miesięczne",
    features: [
      "Automatyczne odpowiedzi 24/7",
      "Konfigurowalne szablony wiadomości",
      "Triggery dla Twoich słów kluczowych",
      "Analiza wiadomości"
    ],
    formLink: "https://forms.example.com/instagram-dm",
    slug: "instagram-dm",
    workflowNodes: [
      { id: "1", icon: "message" as const, x: 35, y: 10, color: "#E1306C" },
      { id: "2", icon: "bolt" as const, x: 115, y: 20, color: "#405DE6" },
      { id: "3", icon: "workflow" as const, x: 135, y: 70, color: "#F56040" },
      { id: "4", icon: "send" as const, x: 205, y: 45, color: "#FCAF45" },
      { id: "5", icon: "users" as const, x: 275, y: 45, color: "#833AB4" },
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "4", to: "5" },
    ],
  },
]

export const businessServices = [
  {
    id: "outreach",
    title: "Outreach & Leads System",
    shortDescription: "Pozyskiwanie Twoich potencjalnych klientów",
    fullDescription: `Zaawansowany system outreachu dla małych i średnich firm,
      dzięki któremu pozyskasz nowych klientów szybko i skutecznie bez żadnych
      barier komunikacyjnych.`,
    price: "Od 299 zł",
    amount: 29900,
    priceNote: "miesięczne",
    features: [
      "Automatyczne wyszukiwanie leadów",
      "Sekwencje follow-up",
      "Integracja z LinkedIn i email",
      "Raporty konwersji",
      "Dodatki na żądanie"
    ],
    formLink: "#",
    comingSoon: true,
    slug: "leads-system",
    workflowNodes: [
      { id: "1", icon: "search" as const, x: -15, y: 15, color: "#1B50FF" },
      { id: "2", icon: "circle-pile" as const, x: 55, y: 45, color: "#00D9FF" },
      { id: "3", icon: "table" as const, x: 135, y: 25, color: "#01753F" },
      { id: "4", icon: "mail" as const, x: 195, y: 60, color: "#FF9100" },
      { id: "5", icon: "user-plus" as const, x: 280, y: 50, color: "#0CEE71" },
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "4", to: "5" },
    ],
  },
  {
    id: "cold-email",
    title: "Cold Email System",
    shortDescription: "Kontakt z Twoimi klientami na najwyższym poziomie",
    fullDescription: `Niezawodny system cold emailingu, z którym zadbasz o swoich
      klientów w profesjonalny i szybki sposób. Pomaga on prowadzić komunikację w
      sposób uporządkowany, konkretny i bez niepotrzebnych napięć.`,
    price: "Od 199 zł",
    amount: 19900,
    priceNote: "miesięczne",
    features: [
      "Prowadzenie wielowątkowych rozmów",
      "Personalizowanie ofert dla klientów",
      "Szczegółowa analiza zachowań",
      "Raporty skuteczności",
      "Dodatki na żądanie"
    ],
    formLink: "#",
    comingSoon: true,
    slug: "cold-email",
    workflowNodes: [
      { id: "1", icon: "users" as const, x: 5, y: 75, color: "#FF00F7" },
      { id: "2", icon: "mail-search" as const, x: 75, y: 75, color: "#FF9100" },
      { id: "3", icon: "scan-text" as const, x: 145, y: 40, color: "#0679AA" },
      { id: "4", icon: "bolt" as const, x: 205, y: 70, color: "#92280E" },
      { id: "5", icon: "mails" as const, x: 285, y: 50, color: "#039956" },
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "4", to: "5" },
    ],
  },
  {
    id: "bookings",
    title: "System Rezerwacji",
    shortDescription: "Rezerwacje online z obsługą klienta",
    fullDescription: `System, który obsłuży Twoich klientów bez zbędnego czekania.
      W połączeniu ze stroną internetową, kalendarzem i płatnościami online,
      klienci będą w stanie łatwo zarezerwować termin i dokonać płatności.`,
    price: "Od 149 zł",
    amount: 14900,
    priceNote: "miesięczne",
    features: [
      "Strona internetowa z systemem rezerwacji",
      "Podział na różnych specjalistów lub usługi",
      "Obsługa płatności online z Przelewy24 i Blik",
      "Automatyczne przypomnienia SMS/email",
      "Modyfikacje na żądanie"
    ],
    formLink: "#",
    comingSoon: false,
    slug: "bookings",
    workflowNodes: [
      { id: "1", icon: "globe" as const, x: 0, y: 10, color: "#9100B5" },
      { id: "2", icon: "calendar-check" as const, x: 70, y: 10, color: "#FF9100" },
      { id: "3", icon: "credit-card" as const, x: 140, y: 10, color: "#0CEE71" },
      { id: "4", icon: "bell" as const, x: 140, y: 80, color: "#1B50FF" },
      { id: "5", icon: "handshake" as const, x: 210, y: 80, color: "#8F4B0D" },
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" },
      { from: "4", to: "5" },
    ],
  },
  {
    id: "websites",
    title: "Strona WWW",
    shortDescription: "Wizytówka Twojego biznesu w sieci",
    fullDescription: `Profesjonalna strona internetowa z nowoczesnym designem 
     i intuicyjną obsługą na smartfony i komputery, która sprawi, że Twoi klienci
     znajdą potrzebne informacje i zamówią Twoje usługi w szybki sposób.`,
    price: "Od 35 zł",
    amount: 3500,
    priceNote: "miesięczne",
    features: [
      "Nowoczesny design",
      "Optymalizacja pod urządzenia mobilne",
      "Szybkie ładowanie strony",
      "Łatwa nawigacja",
      "Modyfikacje na żądanie"
    ],
    formLink: "#",
    comingSoon: false,
    slug: "websites",
    workflowNodes: [
      { id: "1", icon: "search" as const, x: 10, y: 30, color: "#FF9100" },
      { id: "2", icon: "globe" as const, x: 100, y: 50, color: "#9100B5" },
      { id: "3", icon: "eye" as const, x: 170, y: 20, color: "#1B50FF" },
      { id: "4", icon: "smile" as const, x: 250, y: 40, color: "#01753F" }
    ],
    workflowConnections: [
      { from: "1", to: "2" },
      { from: "2", to: "3" },
      { from: "3", to: "4" }
    ],
  }
]
