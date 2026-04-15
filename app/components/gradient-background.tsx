"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { ref: inViewRef } = useInView({
    threshold: 0,
    initialInView: true,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Redraw gradient when canvas is resized
      const gradient = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height)
      gradient.addColorStop(0, "#034c3c")
      gradient.addColorStop(1, "#000000")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    
    // Initial size and render
    resizeCanvas()

    // Handle window resize events
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={inViewRef} className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

