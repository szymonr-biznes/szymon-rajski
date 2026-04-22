import * as LucideIcons from "lucide-react"

interface DynamicIconProps {
  name: string
  className?: string
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  // Convert kebab-case (e.g. file-text) to PascalCase (e.g. FileText)
  const pascalName = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")

  const IconComponent = (LucideIcons as any)[pascalName] || LucideIcons.Check

  return <IconComponent className={className} />
}
