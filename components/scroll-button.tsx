"use client"

import { Plus } from "lucide-react"

interface ScrollButtonProps {
  targetId: string
  label: string
  className?: string
}

export function ScrollButton({ targetId, label, className }: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Adjust for header height if needed
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      <div className="w-5 h-5 rounded-[4px] bg-white/20 flex items-center justify-center">
        <Plus className="w-3.5 h-3.5" />
      </div>
      {label}
    </button>
  )
}
