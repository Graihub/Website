interface HeroHeadProps {
  title: string
  subtitle: string
}

export function HeroHead({ title, subtitle }: HeroHeadProps) {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="font-display text-6xl font-black bg-gradient-to-b from-white to-[#a29bfe] bg-clip-text text-transparent mb-2.5 tracking-[-2px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {title}
      </h2>
      <p className="text-lg text-[#dfe6e9] tracking-[5px] uppercase opacity-80">{subtitle}</p>
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full" />
    </div>
  )
}
