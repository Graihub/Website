"use client"

import { useEffect, useRef } from "react"

interface HeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 50
    canvas.height = 30

    // Simple audio visualizer bars
    const bars = [5, 10, 15, 8, 12, 18, 7, 14]
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, 50, 30)
      ctx.fillStyle = "#a29bfe"

      bars.forEach((height, i) => {
        const barHeight = height + Math.sin(frame * 0.1 + i) * 3
        ctx.fillRect(i * 6, 30 - barHeight, 4, barHeight)
      })

      frame++
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <>
      <audio ref={audioRef} loop autoPlay muted className="hidden">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <header className="sticky top-5 w-[92%] max-w-[1400px] h-20 mx-auto bg-[rgba(15,15,25,0.7)] backdrop-blur-xl border border-white/10 rounded-[20px] flex items-center justify-between px-10 z-[1000] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="flex items-center gap-4">
          <i className="fas fa-mountain text-[2rem] bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent animate-pulse" />
          <div>
            <h1 className="font-display text-2xl font-extrabold text-white tracking-wide leading-none">NAK HUB</h1>
            <span className="text-[0.7rem] text-[#0984e3] uppercase tracking-[3px] font-bold">LONELY</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-2.5 bg-white/[0.03] p-1.5 rounded-[15px] border border-white/5">
          <button
            onClick={() => onTabChange("home")}
            className={`px-6 py-2.5 font-display font-semibold text-sm rounded-[10px] transition-all duration-300 ${
              activeTab === "home"
                ? "bg-white text-[#2d3436] shadow-[0_5px_15px_rgba(255,255,255,0.2)] font-extrabold"
                : "bg-transparent text-[#b2bec3] hover:text-white"
            }`}
          >
            <i className="fas fa-home mr-2" />
            TRANG CHU
          </button>
          <button
            onClick={() => onTabChange("clients")}
            className={`px-6 py-2.5 font-display font-semibold text-sm rounded-[10px] transition-all duration-300 ${
              activeTab === "clients"
                ? "bg-white text-[#2d3436] shadow-[0_5px_15px_rgba(255,255,255,0.2)] font-extrabold"
                : "bg-transparent text-[#b2bec3] hover:text-white"
            }`}
          >
            <i className="fas fa-mobile-alt mr-2" />
            CLIENTS
          </button>
          <button
            onClick={() => onTabChange("scripts")}
            className={`px-6 py-2.5 font-display font-semibold text-sm rounded-[10px] transition-all duration-300 ${
              activeTab === "scripts"
                ? "bg-white text-[#2d3436] shadow-[0_5px_15px_rgba(255,255,255,0.2)] font-extrabold"
                : "bg-transparent text-[#b2bec3] hover:text-white"
            }`}
          >
            <i className="fas fa-code mr-2" />
            SCRIPTS
          </button>
          <button
            onClick={() => onTabChange("discord")}
            className={`px-6 py-2.5 font-display font-semibold text-sm rounded-[10px] transition-all duration-300 ${
              activeTab === "discord"
                ? "bg-white text-[#2d3436] shadow-[0_5px_15px_rgba(255,255,255,0.2)] font-extrabold"
                : "bg-transparent text-[#b2bec3] hover:text-white"
            }`}
          >
            <i className="fab fa-discord mr-2" />
            DISCORD
          </button>
        </nav>

        <div className="flex items-center gap-2.5">
          <canvas ref={canvasRef} className="w-[50px] h-[30px]" />
          <i className="fas fa-volume-up text-[#a29bfe] cursor-pointer" />
        </div>
      </header>
    </>
  )
}
