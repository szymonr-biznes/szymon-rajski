"use client"

import { WorkflowDiagram } from "./workflow-diagram"
import { FileText, FileSpreadsheet, FileCode } from "lucide-react"
import { businessServices } from "@/lib/services"

const brands = [
  {
    id: 'google',
    name: 'Google',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
    color: ''
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    icon: (
      <svg viewBox="0 0 23 23" className="w-6 h-6">
        <path fill="#f25022" d="M1 1h10v10H1z" /><path fill="#7fba00" d="M12 1h10v10H12z" /><path fill="#00a4ef" d="M1 12h10v10H1z" /><path fill="#ffb900" d="M12 12h10v10H12z" />
      </svg>
    ),
    color: ''
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M4.46 2.5c-.5 0-.96.2-1.24.6l-1.9 2.8c-.2.3-.3.66-.3 1v12.2c0 1.25 1 2.25 2.25 2.25h15.46c1.25 0 2.25-1 2.25-2.25V5.5c0-1.25-1-2.25-2.25-2.25H4.46zm1.14 3.5h12.8v12h-1.5L14.4 7.5h-1.6l2.1 9.5h-1.5L11.2 7.5H9.6l1.6 9.5H9.7l-2-9.5H6.1L8.2 18H5.6V6z" />
      </svg>
    ),
    color: 'text-black'
  },
  {
    id: 'dropbox',
    name: 'DropBox',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M6 1.807L1 5.011l5 3.204 5-3.204-5-3.204zm12 0l-5 3.204 5 3.204 5-3.204-5-3.204zM1 11.423l5 3.204 5-3.204-5-3.204-5 3.204zm12 3.204l5-3.204 5 3.204-5 3.204-5-3.204zM6 15.404l6 4.027 6-4.027-6-3.834-6 3.834zM12 21.841l-6-3.834v1.442l6 3.834 6-3.834v-1.442l-6 3.834z" />
      </svg>
    ),
    color: 'text-[#0061FF]'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M13.962 10.931c-1.184-.306-2.328-.542-2.328-1.467 0-.589.571-1.036 1.446-1.036.77 0 1.503.215 2.151.585L16 6.133c-.702-.35-1.6-.623-2.614-.623-2.21 0-3.654 1.153-3.654 3.037 0 2.335 2.51 2.903 4.317 3.363 1.232.315 2.127.587 2.127 1.459 0 .744-.694 1.117-1.613 1.117-.866 0-1.811-.305-2.544-.733L10.9 16.74c.885.442 2.018.757 3.048.757 2.213 0 3.793-1.156 3.793-3.122 0-2.553-2.526-3.095-3.779-3.444z" />
      </svg>
    ),
    color: 'text-[#635BFF]'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: 'text-[#0A66C2]'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M22.059 4.301c.214.28.324.577.33.891v13.616c-.006.314-.116.611-.33.891s-.494.502-.84.667c-.346.165-.722.25-1.127.255H3.908c-.405-.005-.781-.091-1.127-.255s-.626-.387-.84-.667-.324-.577-.33-.891V5.192c.006-.314.116-.611.33-.891s.494-.502.84-.667c.346-.165.722-.25 1.127-.255h16.191c.405.005.781.091 1.127.255s.626.387.84.667zM18.89 17.653c.189 0 .341-.059.456-.176s.173-.284.173-.5c0-.214-.058-.382-.173-.504s-.267-.183-.456-.183H5.11c-.189 0-.341.061-.456.183s-.173.29-.173.504c0 .216.058.382.173.5s.267.176.456.176h13.78zm0-3.528c.189 0 .341-.059.456-.176s.173-.285.173-.505c0-.214-.058-.382-.173-.504s-.267-.183-.456-.183H5.11c-.189 0-.341.061-.456.183s-.173.29-.173.504c0 .219.058.388.173.505s.267.176.456.176h13.78zm0-3.528c.189 0 .341-.059.456-.176s.173-.284.173-.5c0-.214-.058-.382-.173-.504s-.267-.183-.456-.183H5.11c-.189 0-.341.061-.456.183s-.173.29-.173.504c0 .216.058.382.173.5s.267.176.456.176h13.78z" />
      </svg>
    ),
    color: 'text-[#006BFF]'
  },
  {
    id: 'meta',
    name: 'Meta',
    icon: (
      <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <defs>
          <linearGradient id="ig_g1" x1="54.92" y1="48.55" x2="229.06" y2="45.93" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgb(0,100,225)" />
            <stop offset="40%" stopColor="rgb(0,100,225)" />
            <stop offset="83%" stopColor="rgb(0,115,238)" />
            <stop offset="100%" stopColor="rgb(0,130,251)" />
          </linearGradient>
          <linearGradient id="ig_g2" x1="36.43" y1="100.27" x2="36.43" y2="38.35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgb(0,130,251)" />
            <stop offset="100%" stopColor="rgb(0,100,224)" />
          </linearGradient>
        </defs>
        <g transform="translate(3.95 3.95) scale(2.81 2.81)">
          <path
            d="M9.721 54.533c0 3.437.754 6.075 1.74 7.671 1.293 2.091 3.221 2.976 5.186 2.976 2.535 0 4.854-.629 9.324-6.81 3.58-4.954 7.799-11.909 10.638-16.269l4.807-7.386c3.339-5.13 7.205-10.832 11.637-14.697 3.618-3.155 7.521-4.907 11.449-4.907 6.594 0 12.876 3.821 17.683 10.989C87.446 33.949 90 43.836 90 54.039c0 6.066-1.196 10.522-3.23 14.043-1.966 3.405-5.796 6.807-12.241 6.807v-9.709c5.518 0 6.895-5.07 6.895-10.873 0-8.269-1.928-17.445-6.175-24.002-3.014-4.651-6.92-7.493-11.217-7.493-4.648 0-8.388 3.505-12.591 9.756-2.235 3.321-4.529 7.368-7.105 11.934l-2.836 5.023c-5.696 10.1-7.139 12.4-9.987 16.197-4.992 6.648-9.255 9.167-14.866 9.167-6.657 0-10.867-2.883-13.474-7.227C1.045 64.123 0 59.478 0 54.186L9.721 54.533z"
            fill="rgb(0,129,251)"
          />
          <path
            d="M7.665 26.785c4.457-6.87 10.889-11.674 18.265-11.674 4.272 0 8.519 1.264 12.954 4.886 4.851 3.959 10.022 10.479 16.472 21.223l2.313 3.856c5.584 9.302 8.76 14.087 10.619 16.344 2.391 2.898 4.066 3.762 6.241 3.762 5.518 0 6.895-5.07 6.895-10.873L90 54.039c0 6.066-1.196 10.522-3.23 14.043-1.965 3.405-5.796 6.807-12.241 6.807-4.006 0-7.555-.87-11.48-4.573-3.017-2.842-6.544-7.89-9.258-12.428L45.72 44.405c-4.05-6.767-7.765-11.812-9.915-14.097-2.313-2.457-5.286-5.424-10.031-5.424-3.84 0-7.101 2.695-9.831 6.817L7.665 26.785z"
            fill="url(#ig_g1)"
          />
          <path
            d="M25.774 24.885c-3.84 0-7.101 2.695-9.831 6.817-3.859 5.825-6.222 14.5-6.222 22.832 0 3.437.754 6.075 1.74 7.671l-8.288 5.458C1.045 64.123 0 59.478 0 54.186c0-9.624 2.642-19.655 7.665-27.401C12.122 19.915 18.554 15.111 25.93 15.111L25.774 24.885z"
            fill="url(#ig_g2)"
          />
        </g>
      </svg>
    ),
    color: 'text-[#0668E1]'
  },
  { id: 'files', name: 'Dokumenty', icon: null, color: '' },
]

export function UsageGallery() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden">
      <div className="absolute top-0 left-3 lg:left-16 right-0 border-t border-black" />
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-128px)] mx-3 lg:mx-16 pt-16 md:pt-24 pb-0 border-l border-black relative">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Sprawdzone systemy<br />
            wdrożone w <span className="font-serif italic font-normal">realnych</span> biznesach.
            Łatwa integracja<br />
            z <span className="font-serif italic font-normal">Twoimi</span> narzędziami.
          </h2>
        </div>

        <div className="relative overflow-hidden group/carousel -mr-3 lg:-mr-16">
          <style>
            {`
              @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: scroll 40s linear infinite;
              }
              .group\\/carousel:hover .animate-infinite-scroll {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="flex animate-infinite-scroll w-max">
            {[...businessServices, ...businessServices].map((service, idx) => (
              <div
                key={`${service.id}-${idx}`}
                className="flex-shrink-0 w-[300px] md:w-[500px] aspect-[4/3] md:aspect-[3/2] pr-4 group cursor-pointer relative"
              >
                <div className="h-full flex bg-white/50 backdrop-blur-sm rounded-sm w-full border border-black/5 overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Diagram Area */}
                  <div className="w-[50%] md:w-[55%] h-full relative">
                    <WorkflowDiagram
                      nodes={service.workflowNodes}
                      connections={service.workflowConnections}
                      className="h-full w-full"
                    />
                  </div>

                  {/* Description Area */}
                  <div className="w-[40%] md:w-[45%] p-4 md:p-6 flex flex-col border-l border-black/5 bg-white/20">
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-[8px] md:text-[10px] tracking-widest text-black/40 font-bold mb-1 md:mb-2">{service.title}</p>
                      <p className="text-[10px] md:text-sm text-black/70 leading-relaxed font-medium">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden -mr-3 lg:-mr-16 border-t border-black mt-8 bg-white/5">
          <style>
            {`
              @keyframes scroll-reverse {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
              }
              .animate-infinite-scroll-reverse {
                animation: scroll-reverse 40s linear infinite;
              }
            `}
          </style>
          <div className="flex animate-infinite-scroll-reverse w-max">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[180px] md:w-[280px] px-4 md:px-8 py-4 md:py-10 flex items-center justify-center border-r border-black gap-2 md:gap-4 group/item"
              >
                {brand.id === 'files' ? (
                  <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-blue-500/5 p-0.5 md:p-1 rounded-sm border border-blue-500/10 transform -rotate-12">
                      <FileText className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                      <span className="absolute -bottom-1 -right-1 text-[4px] md:text-[5px] font-bold bg-blue-600 text-white px-0.5 rounded-xs">DOCX</span>
                    </div>
                    <div className="absolute top-3 md:top-4 -left-1 bg-green-500/5 p-0.5 md:p-1 rounded-sm border border-green-500/10 transform rotate-12">
                      <FileSpreadsheet className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span className="absolute -bottom-1 -right-1 text-[4px] md:text-[5px] font-bold bg-green-600 text-white px-0.5 rounded-xs">XLSX</span>
                    </div>
                    <div className="absolute top-3 md:top-4 -right-1 bg-red-500/5 p-0.5 md:p-1 rounded-sm border border-red-500/10 transform -rotate-6">
                      <FileCode className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                      <span className="absolute -bottom-1 -right-1 text-[4px] md:text-[5px] font-bold bg-red-600 text-white px-0.5 rounded-xs">PDF</span>
                    </div>
                  </div>
                ) : (
                  <div className={`p-1.5 md:p-2.5 bg-black/5 rounded-lg group-hover/item:bg-white transition-all duration-300 shadow-sm border border-transparent group-hover/item:border-black/5 ${brand.color}`}>
                    <div className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center">
                      {brand.icon}
                    </div>
                  </div>
                )}
                <span className="text-xs md:text-lg font-bold tracking-tight text-black/60 group-hover/item:text-black transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

