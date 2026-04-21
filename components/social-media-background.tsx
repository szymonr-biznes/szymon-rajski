"use client"

import { useEffect, useState, useRef } from "react"
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const USER_DATA = [
  { username: "@instagram", color: "bg-blue-500", iconColor: "text-blue-500" },
  { username: "@patrycjaaa", color: "bg-purple-500", iconColor: "text-purple-500" },
  { username: "@moto_bartek", color: "bg-indigo-500", iconColor: "text-indigo-500" },
  { username: "@fitpatka", color: "bg-pink-500", iconColor: "text-pink-500" },
  { username: "@moda_kobieca", color: "bg-rose-500", iconColor: "text-rose-500" },
  { username: "@paweltrenuje", color: "bg-orange-500", iconColor: "text-orange-500" }
]

const CAPTIONS = [
  "Nowa funkcja dostępna, sprawdź!",
  "Piękny dzień na kawę w mieście ☕",
  "Mój kot dzisiaj z rana 🐱",
  "Piękne widoki z mężem na wakacjach",
  "Nowe wyzwania, nowa energia! ✨",
  "Dzisiaj ukończone 5 km!"
]

interface Post {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  user: typeof USER_DATA[0]
  caption: string
  imgUrl: string
}

export function SocialMediaBackground() {
  const [posts, setPosts] = useState<Post[]>([])
  const requestRef = useRef<number>(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Initialize posts and dimensions
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize)
      handleResize()

      const initialPosts = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        user: USER_DATA[i % USER_DATA.length],
        caption: CAPTIONS[i % CAPTIONS.length],
        imgUrl: `https://picsum.photos/id/${20 + i * 10}/300/400`
      }))

      setPosts(initialPosts)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Animation Loop with Collision Physics
  useEffect(() => {
    const animate = () => {
      setPosts((prevPosts) => {
        // 1. Move posts and handle wall collisions
        const nextPosts = prevPosts.map((post) => {
          let newX = post.x + post.vx
          let newY = post.y + post.vy
          let newVx = post.vx
          let newVy = post.vy

          // Bounce off wall edges (with margin)
          if (newX < 100 || newX > window.innerWidth - 100) newVx *= -1
          if (newY < 120 || newY > window.innerHeight - 120) newVy *= -1

          return { ...post, x: newX, y: newY, vx: newVx, vy: newVy }
        })

        // 2. Pair-wise collision detection and resolution (Elastic collision)
        const radius = 110 // Estimated collision radius for 160x200 cards

        for (let i = 0; i < nextPosts.length; i++) {
          for (let j = i + 1; j < nextPosts.length; j++) {
            const p1 = nextPosts[i]
            const p2 = nextPosts[j]

            const dx = p2.x - p1.x
            const dy = p2.y - p1.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = radius * 2

            if (distance < minDistance) {
              // Collision detected!

              // Normal vector
              const nx = dx / distance
              const ny = dy / distance

              // Relative velocity
              const rvx = p2.vx - p1.vx
              const rvy = p2.vy - p1.vy

              // Velocity along the normal
              const velAlongNormal = rvx * nx + rvy * ny

              // Do not resolve if velocities are separating
              if (velAlongNormal > 0) continue

              // Perfectly elastic collision: swap component of velocity along normal
              const impulse = -(1 + 1) * velAlongNormal / (1 / 1 + 1 / 1) // Mass is assumed equal (1)

              const ix = impulse * nx
              const iy = impulse * ny

              // Adjust velocities
              p1.vx -= ix
              p1.vy -= iy
              p2.vx += ix
              p2.vy += iy

              // Position correction (prevent overlap/sticking)
              const percent = 0.5
              const slop = 0.01
              const penetration = minDistance - distance
              const correction = Math.max(penetration - slop, 0) / (1 / 1 + 1 / 1) * percent
              const cx = correction * nx
              const cy = correction * ny

              p1.x -= cx
              p1.y -= cy
              p2.x += cx
              p2.y += cy
            }
          }
        }

        return [...nextPosts]
      })
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden select-none bg-[linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      {/* Connectivity Map Layer (SVG) */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(64, 93, 230, 0.05)" />
          </linearGradient>
        </defs>
        {posts.map((p1, k) =>
          posts.slice(k + 1).map((p2) => {
            const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
            if (dist < 500) {
              return (
                <line
                  key={`${p1.id}-${p2.id}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                  style={{ opacity: 1 - dist / 500 }}
                />
              )
            }
            return null
          })
        )}
      </svg>

      {/* Posts Layer (DOM) */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="absolute opacity-60"
          style={{
            transform: `translate3d(${post.x}px, ${post.y}px, 0) translate(-50%, -50%)`,
            willChange: "transform"
          }}
        >
          <div className="w-[160px] rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100/50 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className={cn("size-6 rounded-full", post.user.color)} />
              <span className="text-[10px] font-bold text-slate-700 truncate">
                {post.user.username}
              </span>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-100">
              <img
                src={post.imgUrl}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Footer Icons */}
            <div className="flex items-center gap-3 mt-3 px-1">
              <Heart className="size-4 text-rose-500 fill-rose-500/10" strokeWidth={2} />
              <MessageCircle className="size-4 text-slate-400" strokeWidth={2} />
              <Repeat2 className="size-4 text-purple-500" strokeWidth={2} />
              <Send className="size-4 text-blue-500" strokeWidth={2} />
            </div>

            {/* Caption */}
            <div className="mt-2 px-1">
              <p className="text-[9px] text-slate-500 leading-tight line-clamp-2">
                {post.caption}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  )
}
