interface LandscapeCardProps {
  avatar: string
  name: string
  role: string
  quote: string
  socials: { icon: string; url: string }[]
  skyGradient?: string
  waveClipPath?: string
}

export function LandscapeCard({
  avatar,
  name,
  role,
  quote,
  socials,
  skyGradient = "linear-gradient(135deg, #1e3c72, #2a5298)",
  waveClipPath = "polygon(0 40%, 100% 10%, 100% 100%, 0% 100%)",
}: LandscapeCardProps) {
  return (
    <div
      className="group relative h-[500px] bg-white rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-4 hover:rotate-x-[2deg] hover:shadow-[0_30px_80px_rgba(108,92,231,0.4)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Sky & Mountains */}
      <div className="absolute top-0 left-0 w-full h-[55%] overflow-hidden" style={{ background: skyGradient }}>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_5px_#fff] top-[20%] left-[30%] animate-twinkle" />
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_5px_#fff] top-[50%] left-[80%] animate-twinkle" />
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_5px_#fff] top-[10%] left-[10%] animate-twinkle" />
        <div
          className="absolute bottom-0 w-full h-[60%] bg-white/10"
          style={{ clipPath: "polygon(0% 100%, 25% 40%, 50% 90%, 75% 30%, 100% 100%)" }}
        />
      </div>

      {/* Avatar */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] z-10">
        <img
          src={avatar || "/placeholder.svg"}
          alt={name}
          className="w-full h-full rounded-full object-cover border-5 border-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:border-[#6c5ce7]"
        />
      </div>

      {/* Details */}
      <div className="absolute bottom-0 w-full h-[45%] bg-white pt-16 px-5 pb-5 text-center">
        <div className="absolute top-[-50px] left-0 w-full h-[50px] bg-white" style={{ clipPath: waveClipPath }} />

        <h3 className="font-display text-2xl font-extrabold text-[#2d3436] mb-1.5">{name}</h3>
        <div className="text-xs font-bold text-[#0984e3] uppercase tracking-[2px] mb-2.5">{role}</div>
        <p className="text-sm text-[#636e72] italic mb-4 px-2.5">{quote}</p>

        <div className="flex justify-center gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f1f2f6] text-[#2d3436] flex items-center justify-center text-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:-translate-y-1.5 hover:shadow-[0_5px_15px_rgba(108,92,231,0.4)]"
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
