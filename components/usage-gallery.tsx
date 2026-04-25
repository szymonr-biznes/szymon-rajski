"use client"

import { WorkflowDiagram } from "./workflow-diagram"
import { businessServices, socialMediaServices } from "@/lib/services"

const allServices = [...businessServices, ...socialMediaServices]
const displayServices = [...allServices, ...allServices]

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
            {[...["ECOM HOUSE", "adsventure", "adspecialist", "audiencly", "beilmann", "The Optimized Agency"], ...["ECOM HOUSE", "adsventure", "adspecialist", "audiencly", "beilmann", "The Optimized Agency"]].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[250px] px-8 py-10 flex items-center justify-center border-r border-black"
              >
                <span className="text-xl font-bold tracking-tighter text-black/40 grayscale hover:grayscale-0 transition-all duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

