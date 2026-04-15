"use client"

import React, { useEffect, useRef } from 'react'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Make sure we're in browser environment and element exists
    if (typeof window === 'undefined' || !containerRef.current) return

    // Initialize and configure Mermaid
    const initializeMermaid = async () => {
      try {
        const mermaid = (await import('mermaid')).default
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#10b981", 
            primaryTextColor: "#f0fdf4",
            primaryBorderColor: "#10b981",
            lineColor: "#10b981",
            secondaryColor: "#065f46",
            tertiaryColor: "#000000",
            background: "#000000",
            mainBkg: "#022c22",
            nodeBorder: "#10b981",
            clusterBkg: "#022c22", 
            clusterBorder: "#10b981", 
            titleColor: "#f0fdf4",
            edgeLabelBackground: "#022c22",
            nodeTextColor: "#f0fdf4"
          },
          securityLevel: "loose",
          flowchart: { htmlLabels: true, curve: "cardinal" }
        })
        
        // Clear contents to avoid rendering issues on re-renders
        if (containerRef.current) {
          containerRef.current.innerHTML = ''
        }

        // Generate and render the diagram
        const id = 'mermaid-' + Math.random().toString(36).substring(2, 12)
        const { svg } = await mermaid.render(id, chart)

        if (containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error)
        if (containerRef.current) {
          containerRef.current.innerHTML = `<div class="p-4 text-red-500 border border-red-500 rounded">Error rendering diagram</div>`
        }
      }
    }

    // Execute initialization
    initializeMermaid()
  }, [chart])

  return (
    <div 
      ref={containerRef} 
      className={`mermaid-container not-prose ${className}`} 
      style={{ minHeight: '50px' }}
    >
      <div className="animate-pulse bg-black/50 h-[200px] rounded flex items-center justify-center">
        <span className="text-green-400/50 text-sm">Loading diagram...</span>
      </div>
    </div>
  )
}