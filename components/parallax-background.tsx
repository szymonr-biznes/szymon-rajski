"use client"

import { useEffect, useRef } from "react"

export function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)

    // Create wave pattern dots
    const spacing = 40
    const amplitude = 15
    const waveSpeed = 0.02
    const waveLength = 0.08

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const parallaxOffset = scrollRef.current * 0.15
      const cols = Math.ceil(canvas.width / spacing) + 2
      const rows = Math.ceil(canvas.height / spacing) + 8

      for (let row = -4; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * spacing + (row % 2 === 0 ? 0 : spacing / 2)
          const baseY = row * spacing - parallaxOffset % spacing

          // Multiple wave layers for organic feel
          const wave1 = Math.sin(time + col * waveLength + row * 0.05) * amplitude
          const wave2 = Math.sin(time * 0.7 + col * waveLength * 1.3 + row * 0.08) * (amplitude * 0.5)
          const wave3 = Math.cos(time * 0.5 + col * waveLength * 0.7) * (amplitude * 0.3)

          const waveOffset = wave1 + wave2 + wave3

          const x = baseX
          const y = baseY + waveOffset

          // Only draw visible dots
          if (y < -30 || y > canvas.height + 30) continue

          // Vary opacity based on wave phase for depth
          const depthFactor = 0.5 + Math.sin(time * 0.3 + col * 0.1 + row * 0.05) * 0.3
          const opacity = 0.12 + depthFactor * 0.15
          const size = 1.5 + depthFactor * 1.5

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
          ctx.fill()
        }
      }

      time += waveSpeed
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
