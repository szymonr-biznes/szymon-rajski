"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function TrustEngine() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden relative">
      <div className="mx-auto max-w-[1400px] pl-10 lg:pl-16 pr-6 lg:pr-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Guiding your <span className="font-serif italic font-normal">growth</span><br />
              beyond the known<br />
              using our Trust Engine
            </h2>
            
            <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed border-l border-gray-800 pl-4">
              We&apos;re not just another ad agency. We align marketing to the truth of what you want to achieve, focusing on creating predictable revenue architectures.
            </p>
            
            <div className="mt-8">
              <Link
                href="#engine"
                className="bg-[#0033FF] hover:bg-[#002BE6] text-white px-4 py-3 rounded-sm text-sm font-semibold transition-colors inline-block"
              >
                Discover the Engine
              </Link>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative w-full lg:w-[600px] h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Figure 8 / Infinity SVG Orbits */}
            <svg viewBox="0 0 400 400" className="w-full h-full text-white/20">
              <g fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
                {/* Top Orbit */}
                <ellipse cx="200" cy="120" rx="150" ry="80" transform="rotate(15 200 120)" />
                <ellipse cx="200" cy="120" rx="110" ry="50" transform="rotate(15 200 120)" />
                <circle cx="340" cy="90" r="3" fill="white" />
                <text x="350" y="94" fill="white" fontSize="10" className="font-medium">Growth</text>
                
                {/* Bottom Orbit */}
                <ellipse cx="200" cy="280" rx="150" ry="80" transform="rotate(-15 200 280)" />
                <ellipse cx="200" cy="280" rx="110" ry="50" transform="rotate(-15 200 280)" />
                <circle cx="340" cy="310" r="3" fill="white" />
                <text x="350" y="314" fill="white" fontSize="10" className="font-medium">Scale</text>
              </g>
              
              {/* Center Diamond */}
              <path d="M200 190 L205 200 L200 210 L195 200 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight">Founder-Led</h3>
        </div>
      </div>
    </section>
  )
}
