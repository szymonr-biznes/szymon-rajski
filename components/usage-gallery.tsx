"use client"

import { WorkflowDiagram } from "./workflow-diagram"
import { 
  Chrome, 
  Grid2X2, 
  StickyNote, 
  Box, 
  CreditCard, 
  Linkedin,
  FileText,
  FileSpreadsheet,
  FileCode,
  Calendar
} from "lucide-react"
import { businessServices, socialMediaServices } from "@/lib/services"

const allServices = [...businessServices, ...socialMediaServices]
const displayServices = [...allServices, ...allServices]

const brands = [
  { id: 'google', name: 'Google', icon: <Chrome className="w-6 h-6" />, color: 'text-[#4285F4]' },
  { id: 'microsoft', name: 'Microsoft', icon: <Grid2X2 className="w-6 h-6" />, color: 'text-[#00A4EF]' },
  { id: 'notion', name: 'Notion', icon: <StickyNote className="w-6 h-6" />, color: 'text-black' },
  { id: 'dropbox', name: 'DropBox', icon: <Box className="w-6 h-6" />, color: 'text-[#0061FF]' },
  { id: 'stripe', name: 'Stripe', icon: <CreditCard className="w-6 h-6" />, color: 'text-[#635BFF]' },
  { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, color: 'text-[#0A66C2]' },
  { id: 'calendly', name: 'Calendly', icon: <Calendar className="w-6 h-6" />, color: 'text-[#006BFF]' },
  { id: 'files', name: 'Formaty danych', icon: null, color: '' },
]

export function UsageGallery() {
  return (
    <section className="bg-[#F4F1EA] relative overflow-hidden">
      <div className="absolute top-0 left-3 lg:left-8 right-0 border-t border-black" />
      <div className="w-[calc(100%-24px)] lg:w-[calc(100%-64px)] mx-3 lg:mx-8 pt-24 pb-0 border-l border-black relative">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Sprawdzone systemy<br />
            wdrożone w <span className="font-serif italic font-normal">realnych</span> biznesach
          </h2>
        </div>

        <div className="relative overflow-hidden group/carousel -mr-3 lg:-mr-8">
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
            {displayServices.map((service, idx) => (
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
                  <div className="w-[40%] md:w-[45%] p-3 md:p-6 flex flex-col border-l border-black/5 bg-white/20">
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-[8px] md:text-[10px] tracking-widest text-black/40 font-bold mb-1 md:mb-2">System</p>
                      <p className="text-[10px] md:text-sm text-black/70 leading-relaxed font-medium">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Title Badge - Moved to Right Column */}
                    <div className="mt-4">
                      <div className="border-[3px] md:border-[6px] border-[#0033FF] bg-[#2E51A3] text-white py-1.5 px-3 md:py-2 md:px-4 rounded-sm text-[8px] md:text-[10px] font-black tracking-widest shadow-xl flex items-center justify-center text-center leading-tight">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden -mr-3 lg:-mr-8 border-t border-black mt-8 bg-white/5">
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
                className="flex-shrink-0 w-[280px] px-8 py-10 flex items-center justify-center border-r border-black gap-4 group/item"
              >
                {brand.id === 'files' ? (
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-blue-500/5 p-1 rounded-sm border border-blue-500/10 transform -rotate-12">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="absolute -bottom-1 -right-1 text-[5px] font-bold bg-blue-600 text-white px-0.5 rounded-xs">DOCX</span>
                    </div>
                    <div className="absolute top-4 -left-1 bg-green-500/5 p-1 rounded-sm border border-green-500/10 transform rotate-12">
                      <FileSpreadsheet className="w-4 h-4 text-green-600" />
                      <span className="absolute -bottom-1 -right-1 text-[5px] font-bold bg-green-600 text-white px-0.5 rounded-xs">XLSX</span>
                    </div>
                    <div className="absolute top-4 -right-1 bg-red-500/5 p-1 rounded-sm border border-red-500/10 transform -rotate-6">
                      <FileCode className="w-4 h-4 text-red-600" />
                      <span className="absolute -bottom-1 -right-1 text-[5px] font-bold bg-red-600 text-white px-0.5 rounded-xs">PDF</span>
                    </div>
                  </div>
                ) : (
                  <div className={`p-2.5 bg-black/5 rounded-lg group-hover/item:bg-white transition-all duration-300 shadow-sm border border-transparent group-hover/item:border-black/5 ${brand.color}`}>
                    {brand.icon}
                  </div>
                )}
                <span className="text-lg font-bold tracking-tight text-black/60 group-hover/item:text-black transition-colors duration-300">
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

