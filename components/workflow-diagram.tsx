"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import * as LucideIcons from "lucide-react"
import { icons } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, { icon: LucideIcon; color: string; bgColor: string }> = {
  mail: { icon: LucideIcons.Mail, color: "text-blue-500", bgColor: "bg-blue-50" },
  check: { icon: LucideIcons.Check, color: "text-green-500", bgColor: "bg-green-50" },
  send: { icon: LucideIcons.Send, color: "text-cyan-500", bgColor: "bg-cyan-50" },
  message: { icon: LucideIcons.MessageSquare, color: "text-purple-500", bgColor: "bg-purple-50" },
  search: { icon: LucideIcons.Search, color: "text-amber-500", bgColor: "bg-amber-50" },
  database: { icon: LucideIcons.Database, color: "text-slate-500", bgColor: "bg-slate-50" },
  clock: { icon: LucideIcons.Clock, color: "text-orange-500", bgColor: "bg-orange-50" },
  user: { icon: LucideIcons.User, color: "text-indigo-500", bgColor: "bg-indigo-50" },
  bell: { icon: LucideIcons.Bell, color: "text-rose-500", bgColor: "bg-rose-50" },
  file: { icon: LucideIcons.FileText, color: "text-teal-500", bgColor: "bg-teal-50" },
  zap: { icon: LucideIcons.Zap, color: "text-yellow-500", bgColor: "bg-yellow-50" },
  chart: { icon: LucideIcons.BarChart, color: "text-emerald-500", bgColor: "bg-emerald-50" },
}

const colorMap: Record<string, { color: string; bgColor: string }> = {
  blue: { color: "text-blue-500", bgColor: "bg-blue-50" },
  pink: { color: "text-pink-500", bgColor: "bg-pink-50" },
  red: { color: "text-red-500", bgColor: "bg-red-50" },
  gray: { color: "text-gray-500", bgColor: "bg-gray-50" },
  slate: { color: "text-slate-500", bgColor: "bg-slate-50" },
  emerald: { color: "text-emerald-500", bgColor: "bg-emerald-50" },
  indigo: { color: "text-indigo-500", bgColor: "bg-indigo-50" },
  purple: { color: "text-purple-500", bgColor: "bg-purple-50" },
  amber: { color: "text-amber-500", bgColor: "bg-amber-50" },
  orange: { color: "text-orange-500", bgColor: "bg-orange-50" },
  cyan: { color: "text-cyan-500", bgColor: "bg-cyan-50" },
  green: { color: "text-green-500", bgColor: "bg-green-50" },
  teal: { color: "text-teal-500", bgColor: "bg-teal-50" },
  yellow: { color: "text-yellow-500", bgColor: "bg-yellow-50" },
  rose: { color: "text-rose-500", bgColor: "bg-rose-50" },
}

interface WorkflowNode {
  id: string
  icon: string
  x: number
  y: number
  color: string
}

interface WorkflowConnection {
  from: string
  to: string
}

interface WorkflowDiagramProps {
  nodes: WorkflowNode[]
  connections: WorkflowConnection[]
  className?: string
  vertical?: boolean
}

export function WorkflowDiagram({ nodes, connections, className = "", vertical = false }: WorkflowDiagramProps) {
  const [activeConnections, setActiveConnections] = useState<number[]>([])
  const [pulseOffsets, setPulseOffsets] = useState<number[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isInitialized, setIsInitialized] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isAnimatingRef = useRef(false)

  // Track container size
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        })
      }
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const isVertical = containerSize.width > 0 && containerSize.width < 380

  // Calculate centering offset for horizontal mode
  useEffect(() => {
    if (nodes.length === 0 || containerSize.width === 0 || isVertical) {
      if (isVertical || (nodes.length > 0 && containerSize.width > 0)) {
        setIsInitialized(true)
      }
      return
    }

    const { width, height } = containerSize

    const minX = Math.min(...nodes.map(n => n.x))
    const maxX = Math.max(...nodes.map(n => n.x))
    const minY = Math.min(...nodes.map(n => n.y))
    const maxY = Math.max(...nodes.map(n => n.y))

    const nodesCenterX = (minX + maxX) / 2
    const nodesCenterY = (minY + maxY) / 2

    setOffset({
      x: width / 2 - nodesCenterX,
      y: height / 2 - nodesCenterY
    })

    // Ensure coordinates are applied before showing to avoid slide-in
    setTimeout(() => setIsInitialized(true), 20)
  }, [nodes, containerSize, isVertical])

  // Scale pulsing animation for icons
  useEffect(() => {
    let frame: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      const scaleValue = 1 + Math.sin((elapsed / 1000) * 1.5) * 0.05
      setPulseOffsets([scaleValue])

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [nodes])

  // Auto-animate connections in strict sequence
  const runAnimation = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    setActiveConnections([])

    // Animate exactly in order of the connections array (1->2, 2->3, etc)
    connections.forEach((_, i) => {
      setTimeout(() => {
        setActiveConnections(prev => [...prev, i])
      }, i * 800)
    })

    animationRef.current = setTimeout(() => {
      isAnimatingRef.current = false
      runAnimation()
    }, 5000)
  }, [connections])

  useEffect(() => {
    runAnimation()
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current)
      isAnimatingRef.current = false
    }
  }, [runAnimation])

  const getNodePosition = (id: string) => {
    const nodeIndex = nodes.findIndex((n) => n.id === id)
    const node = nodes[nodeIndex]
    if (!node) return { x: 0, y: 0 }

    if (isVertical) {
      const stagger = containerSize.width * 0.25
      const centerX = containerSize.width / 2
      const x = nodeIndex % 2 === 0 ? centerX - stagger : centerX + stagger

      return {
        x,
        y: (nodeIndex + 1) * (containerSize.height / (nodes.length + 1))
      }
    }

    return { x: node.x + offset.x, y: node.y + offset.y }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden transition-opacity duration-300 ${className} ${isInitialized ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg className="h-full w-full">
        <style>
          {`
            @keyframes flow {
              from { stroke-dashoffset: 20; }
              to { stroke-dashoffset: 0; }
            }
            .animate-flow {
              animation: flow 1s linear infinite;
            }
          `}
        </style>
        {connections.map((conn, idx) => {
          const from = getNodePosition(conn.from)
          const to = getNodePosition(conn.to)
          const isActive = activeConnections.includes(idx)

          return (
            <line
              key={idx}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className={`${isActive ? "stroke-blue-500 animate-flow" : "stroke-blue-500/20"}`}
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeDasharray="10 5"
              style={{
                transition: isInitialized
                  ? "stroke 0.5s ease-in-out, stroke-opacity 0.5s ease-in-out, stroke-width 0.5s ease-in-out, x1 0.5s ease-in-out, y1 0.5s ease-in-out, x2 0.5s ease-in-out, y2 0.5s ease-in-out"
                  : "none"
              }}
            />
          )
        })}
        </svg>
      </div>
      {nodes.map((node) => {
        // Dynamic icon resolution
        let IconComponent = LucideIcons.Zap
        
        const possibleIcon = iconMap[node.icon]
        if (possibleIcon) {
          IconComponent = possibleIcon.icon
        } else {
          // Convert kebab-case (e.g. notebook-pen) to PascalCase (e.g. NotebookPen)
          const pascalName = node.icon
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("")
          
          IconComponent = (LucideIcons as any)[pascalName] || (icons as any)[pascalName] || LucideIcons.Zap
        }

        // Color resolution
        let iconTextColor = ""
        let iconBgColor = ""
        let iconInlineStyle: React.CSSProperties = {}
        let nodeInlineStyle: React.CSSProperties = {}

        if (node.color.startsWith("#")) {
          iconInlineStyle = { color: node.color }
          // Add 10% opacity to hex for background
          nodeInlineStyle = { backgroundColor: `${node.color}1a`, borderColor: `${node.color}33` }
        } else {
          const customColor = colorMap[node.color] || colorMap.blue
          iconTextColor = customColor.color
          iconBgColor = customColor.bgColor
        }
        const pos = getNodePosition(node.id)
        const isActive = activeConnections.some(ci => connections[ci].from === node.id || connections[ci].to === node.id)

        return (
          <div
            key={node.id}
            className={`absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-all bg-white dark:bg-slate-950 ${isActive ? "scale-110 ring-4 ring-blue-100" : "scale-100"}`}
            style={{
              left: pos.x,
              top: pos.y,
              zIndex: 10,
              transitionDuration: isInitialized ? "500ms" : "0ms",
              borderColor: node.color.startsWith("#") ? `${node.color}33` : undefined
            }}
          >
            {/* Opaque Background Layer with Tint */}
            <div 
              className={`absolute inset-0 rounded-full ${iconBgColor}`}
              style={node.color.startsWith("#") ? { backgroundColor: `${node.color}1a` } : {}}
            />
            
            {/* Icon Content Layer */}
            <div className={`relative z-10 ${isActive ? "animate-pulse" : ""}`}>
              <IconComponent 
                className={`h-3.5 w-3.5 ${iconTextColor}`} 
                style={iconInlineStyle}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
