"use client"

import { useState } from "react"
import { HeroHead } from "./hero-head"
import { useToast } from "@/hooks/use-toast-message"

interface ScriptsPageProps {
  active: boolean
}

export function ScriptsPage({ active }: ScriptsPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { showToast } = useToast()

  const scripts = [
    {
      name: "quantum hub",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/flazhy/QuantumOnyx/refs/heads/main/QuantumOnyx.lua"))()',
    },
    {
      name: "Redz Hub Campuchia V4",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/vinh129150/hack/refs/heads/main/Bloxfruits.lua"))()',
    },
    {
      name: "Hiru Hub",
      code: 'repeat wait() until game:IsLoaded() and game.Players.LocalPlayer\ngetgenv().Settings = {\nJoinTeam = true,\nTeam = "Marines"-- Pirates or Marines\n}\nloadstring(game:HttpGet("https://raw.githubusercontent.com/KiddoHiru/BloxFruits/main/Source.lua"))()',
    },
    {
      name: "Andepzai Hub",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/trongdeptraihucscript/Adz-Hub/refs/heads/main/Adz-Hub.lua"))()',
    },
    {
      name: "Teddy Hub",
      code: 'loadstring(game:HttpGet("https://pandadevelopment.net/virtual/file/ea696e8e7439ba51"))()',
    },
    {
      name: "Ok hub",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/fakekuri/Okhubhere/refs/heads/main/MainBloxFruit.lua"))()',
    },
    {
      name: "BlueX Hub",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-BlueX/BlueX-Hub/refs/heads/main/Main.lua"))()',
    },
    {
      name: "Gravity Hub",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-GravityHub/BloxFruit/refs/heads/main/Main.lua"))()',
    },
    { name: "Zee Hub", code: 'loadstring(game:HttpGet("https://zuwz.me/Ls-Zee-Hub"))()' },
    {
      name: "Xeter Hub V1",
      code: 'getgenv().Version = "V1"\ngetgenv().Team = "Marines"\nloadstring(game:HttpGet("https://raw.githubusercontent.com/TlDinhKhoi/Xeter/refs/heads/main/Main.lua"))()',
    },
    {
      name: "Xeter Hub V2",
      code: 'getgenv().Version = "V2"\ngetgenv().Team = "Marines"\nloadstring(game:HttpGet("https://raw.githubusercontent.com/TlDinhKhoi/Xeter/refs/heads/main/Main.lua"))()',
    },
    {
      name: "Xeter Hub V3",
      code: 'getgenv().Version = "V3"\ngetgenv().Team = "Marines"\nloadstring(game:HttpGet("https://raw.githubusercontent.com/TlDinhKhoi/Xeter/refs/heads/main/Main.lua"))()',
    },
    {
      name: "Xeter Hub V4",
      code: 'getgenv().Version = "V4"\ngetgenv().Team = "Marines"\nloadstring(game:HttpGet("https://raw.githubusercontent.com/TlDinhKhoi/Xeter/refs/heads/main/Main.lua"))()',
    },
    {
      name: "HNC Hub",
      code: 'getgenv().team = "Pirates" --"Marines"\nloadstring(game:HttpGet("https://raw.githubusercontent.com/hnc-roblox/HNCHubOnTop/refs/heads/main/HNC_Roblox.lua"))()',
    },
    {
      name: "Tuấn Anh IOS",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AnhTuanDzai-Hub/TuanAnhIOS/refs/heads/main/TuanAnhIOS-Main.Lua"))()',
    },
    {
      name: "Trẩu V1",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/traurobloxdeptrai/traukhoaito/refs/heads/main/trauv2.lua"))()',
    },
    {
      name: "Trẩu V2",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/traurobloxdeptrai/traukhoaito/refs/heads/main/TrauRobloxRedZV2.lua"))()',
    },
    {
      name: "Trẩu V3",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/traurobloxdeptrai/traukhoaito/refs/heads/main/traurobloxv3.lua"))()',
    },
    {
      name: "Trẩu V4",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/traurobloxdeptrai/traukhoaito/refs/heads/main/traurobloxredzv4.lua"))()',
    },
    {
      name: "Redz Hub Fake",
      code: 'getgenv().team = "Marines" -- Marines or Pirates\n_G.Translate = "English"\n-- Thai or Russian or Portuguese or Vietnamese\nloadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-Hinishi/Hinishi-Hub/refs/heads/main/Freemium.lua"))()',
    },
    {
      name: "The forge",
      code: 'loadstring(game:HttpGet("https://pandadevelopment.net/virtual/file/f3e2379f5d38627e"))()',
    },
    {
      name: "Turbo Lite",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/TurboLite/Script/main/FixLag.lua"))()',
    },
    { name: "Night mystic", code: 'loadstring(game:HttpGet("https://pastefy.app/B6YlbRFj/raw"))()' },
    {
      name: "Auto Lấy cybog",
      code: 'getgenv().Team = "Marines"\ngetgenv().Get_Race = "Cyborg"\nloadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/7a6c326e81861b3e1e7207c5d11ed755.lua"))()',
    },
    {
      name: "Auto Lấy ghoul",
      code: 'getgenv().Team = "Marines"\ngetgenv().Get_Race = "Ghoul"\nloadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/7a6c326e81861b3e1e7207c5d11ed755.lua"))()',
    },
  ]

  const filteredScripts = scripts.filter((script) => script.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      showToast("Script copied to clipboard successfully!")
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section
      className={`${active ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-10"} transition-all duration-600`}
    >
      <HeroHead title="SCRIPT HUB" subtitle="Auto Farm" />

      <div className="relative max-w-[600px] mx-auto mb-12">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm Script (VD: HoHo, Redz...)"
          className="w-full py-4 px-6 pr-14 bg-white/10 border border-white/20 rounded-full text-white font-body text-base transition-all duration-300 focus:bg-white/20 focus:border-[#6c5ce7] focus:shadow-[0_0_20px_rgba(108,92,231,0.3)] outline-none"
        />
        <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-white/50" />
      </div>

      <div className="grid gap-5">
        {filteredScripts.map((script, i) => (
          <div
            key={i}
            className="bg-[#1e1e2e] border border-[#333] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#555]"
          >
            <div className="bg-[#282a36] py-2.5 px-5 flex items-center justify-between border-b border-[#444]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[#f8f8f2] font-mono font-bold">{script.name}</div>
            </div>

            <div className="relative">
              <textarea
                readOnly
                value={script.code}
                className="w-full h-[90px] bg-[#15151e] text-[#50fa7b] p-5 border-none font-mono text-sm resize-none"
              />
              <div className="w-full bg-[#282a36] flex justify-end p-1.5 px-2.5">
                <button
                  onClick={() => copyToClipboard(script.code)}
                  className="bg-transparent border-none text-[#bdc3c7] font-bold text-sm flex items-center gap-1.5 py-2 px-4 rounded-md transition-all duration-200 hover:bg-[#444] hover:text-white"
                >
                  <i className="fas fa-copy text-[#6c5ce7]" />
                  COPY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
