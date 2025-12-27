"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ParticleCanvas } from "@/components/particle-canvas"
import { HomePage } from "@/components/home-page"
import { ClientsPage } from "@/components/clients-page"
import { ScriptsPage } from "@/components/scripts-page"
import { DiscordPage } from "@/components/discord-page"
import { ToastContainer } from "@/components/toast-container"

export default function Page() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[url('https://i.pinimg.com/originals/42/6d/77/426d77da9c0c9cebc29e7ed35e4c585d.gif')] bg-cover bg-center scale-110 brightness-[0.4] blur-sm" />
      <ParticleCanvas />
      <div className="fixed inset-0 -z-[3] pointer-events-none bg-grid-pattern" />

      <ToastContainer />

      <div className="pt-6 pb-2">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <main className="w-[92%] max-w-[1400px] mx-auto pt-12 pb-32">
        <HomePage active={activeTab === "home"} />
        <ClientsPage active={activeTab === "clients"} />
        <ScriptsPage active={activeTab === "scripts"} />
        <DiscordPage active={activeTab === "discord"} />
      </main>
    </div>
  )
}
