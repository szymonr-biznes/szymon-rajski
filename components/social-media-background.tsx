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
  scale: number
  rotation: number
  phase: number
  speed: number
  amplitude: number
  user: typeof USER_DATA[0]
  caption: string
  imgUrl: string
}

export function SocialMediaBackground() {
  const [posts, setPosts] = useState<Post[]>([])
  const [time, setTime] = useState(0)
  const requestRef = useRef<number>(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rows = 3
      const cols = 3
      const cellWidth = 100 / cols
      const cellHeight = 100 / rows

      const initialPosts = Array.from({ length: 8 }).map((_, i) => {
        const row = Math.floor(i / cols)
        const col = i % cols

        // Center of the grid cell + some jitter
        const x = (col + 0.5) * cellWidth + (Math.random() - 0.5) * (cellWidth * 0.4)
        const y = (row + 0.5) * cellHeight + (Math.random() - 0.5) * (cellHeight * 0.4)

        return {
          id: i,
          x,
          y,
          scale: 0.56 + Math.random() * 0.44,
          rotation: (Math.random() - 0.5) * 30, // -15 to 15 degrees
          phase: Math.random() * Math.PI * 2,
          speed: 0.0005 + Math.random() * 0.001, // Slower
          amplitude: 4 + Math.random() * 4, // Subtle (4-8px)
          user: USER_DATA[i % USER_DATA.length],
          caption: CAPTIONS[i % CAPTIONS.length],
          imgUrl: `https://picsum.photos/id/${30 + i * 12}/300/400`
        }
      })
      setPosts(initialPosts)
    }
  }, [])

  useEffect(() => {
    const animate = (timestamp: number) => {
      setTime(timestamp)
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden select-none bg-[#F4F1EA]">
      {/* Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Posts Layer */}
      {posts.map((post) => {
        const floatY = Math.sin(time * post.speed + post.phase) * post.amplitude

        return (
          <div
            key={post.id}
            className="absolute transition-opacity duration-1000"
            style={{
              left: `${post.x}%`,
              top: `${post.y}%`,
              transform: `translate(-50%, -50%) translateY(${floatY}px) rotate(${post.rotation}deg) scale(${post.scale})`,
              opacity: 0.8,
              willChange: "transform"
            }}
          >
            <div className="w-[112px] rounded-xl bg-white p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-200/50 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center gap-1.5 mb-1.5 px-0.5">
                <div className={cn("size-3 rounded-full", post.user.color)} />
                <span className="text-[6px] font-bold text-slate-700 truncate">
                  {post.user.username}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={post.imgUrl}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Footer Icons */}
              <div className="flex items-center gap-2 mt-2 px-0.5">
                <Heart className="size-2 text-rose-500 fill-rose-500/5" strokeWidth={2} />
                <MessageCircle className="size-2 text-slate-400" strokeWidth={2} />
                <Repeat2 className="size-2 text-purple-500" strokeWidth={2} />
                <Send className="size-2 text-blue-500" strokeWidth={2} />
              </div>

              {/* Caption */}
              <div className="mt-1.5 px-0.5">
                <p className="text-[5px] text-slate-500 leading-[1.2] line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)]" />
    </div>
  )
}
