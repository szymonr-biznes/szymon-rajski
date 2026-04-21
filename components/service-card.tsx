"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkflowDiagram } from "./workflow-diagram"

interface ServiceCardProps {
  id: string
  slug?: string
  basePath?: string
  title: string
  shortDescription: string
  fullDescription: string
  price: string
  priceNote?: string
  features: string[]
  formLink: string
  formLinkText?: string
  comingSoon?: boolean
  workflowNodes?: { id: string; icon: string; x: number; y: number; color: string }[]
  workflowConnections?: { from: string; to: string }[]
}

export function ServiceCard({
  id,
  slug,
  basePath = "",
  title,
  shortDescription,
  fullDescription,
  price,
  priceNote,
  features,
  formLink,
  formLinkText = "Rozpocznij teraz",
  comingSoon = false,
  workflowNodes,
  workflowConnections,
}: ServiceCardProps) {
  return (
    <Card id={id} className="overflow-hidden transition-shadow hover:shadow-md flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              {comingSoon && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                  Wkrótce
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{shortDescription}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xl font-bold text-foreground">{price}</p>
            {priceNote && (
              <p className="text-xs text-muted-foreground">{priceNote}</p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-6 flex-1 flex flex-col">
          <p className="text-sm text-foreground leading-relaxed">{fullDescription}</p>

          {workflowNodes && workflowConnections && (
            <div className="relative h-64 sm:h-36 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <WorkflowDiagram
                nodes={workflowNodes}
                connections={workflowConnections}
                className="h-full w-full"
              />
            </div>
          )}

          <div className="flex-1">
            <p className="mb-2 text-sm font-medium text-foreground">Co otrzymujesz:</p>
            <ul className="space-y-1.5">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-4">
            {!comingSoon && (
              <Button asChild className="w-full">
                {slug ? (
                  <Link href={`${basePath}/${slug}`}>
                    {formLinkText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <a href={formLink} target="_blank" rel="noopener noreferrer">
                    {formLinkText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </Button>
            )}
            {comingSoon && (
              <Button disabled className="w-full">
                Dostępne wkrótce
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
