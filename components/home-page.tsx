import { HeroHead } from "./hero-head"
import { LandscapeCard } from "./landscape-card"

interface HomePageProps {
  active: boolean
}

export function HomePage({ active }: HomePageProps) {
  const admins = [
    {
      avatar: "/415b2bf9c76d4a0d88899ca74e46f8ef.png",
      name: "Grai",
      role: "YTB",
      quote: "Một Thằng YTb Quèn",
      socials: [
        { icon: "fab fa-youtube-f", url: "https://facebook.com/Sunnixkissyou" },
        { icon: "fab fa-discord", url: "https://discord.gg/qVa6jedW9p" },
        { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@grairoblox?_r=1&_t=ZS-92SOBEc30mV" },
      ],
      skyGradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
      waveClipPath: "polygon(0 40%, 100% 10%, 100% 100%, 0% 100%)",
    },
    {
      avatar: "/anime-style-person.jpg",
      name: "BelBel",
      role: "Mod",
      quote: "Nhìn Đẹp Trai Mà Không Có Tiền",
      socials: [
        { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@nak_nohack" },
        { icon: "fab fa-discord", url: "https://discord.gg/CJbpkPC4KJ" },
      ],
      skyGradient: "linear-gradient(135deg, #4b6cb7, #182848)",
      waveClipPath: "polygon(0 20%, 100% 40%, 100% 100%, 0% 100%)",
    },
    {
      
  return (
    <section
      className={`${active ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-10"} transition-all duration-600`}
    >
      <HeroHead title="TRANG CHU" subtitle="THANH VIEN" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ perspective: "1000px" }}>
        {admins.map((admin, i) => (
          <LandscapeCard key={i} {...admin} />
        ))}
      </div>
    </section>
  )
    }
