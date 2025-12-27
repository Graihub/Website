import { HeroHead } from "./hero-head"

interface DiscordPageProps {
  active: boolean
}

export function DiscordPage({ active }: DiscordPageProps) {
  const servers = [
    {
      icon: "https://i.pinimg.com/736x/42/c0/f6/42c0f6721af713a508b13836896b0925.jpg",
      name: "BelBel Community",
      description: "Sever Của Grai Đẹp Trai Và Mọi Người",
      url: "https://discord.gg/qVa6jedW9p",
    },
    {
      icon: "https://cdn.discordapp.com/icons/1411295508735070291/ac31b0da190f795c02a356a1f2ec43f7.png?size=4096",
      name: "Hmg Store",
      description: "Sever Sell Mọi Loại Key , Pet , Acc",
      url: "https://discord.gg/hwduUamSTu",
    },
    {

  return (
    <section
      className={`${active ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-10"} transition-all duration-600`}
    >
      <HeroHead title="COMMUNITY" subtitle="Join The Gang" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map((server, i) => (
          <div
            key={i}
            className="bg-[#2b2d31] rounded-2xl p-6 flex flex-col items-center relative border border-transparent transition-all duration-300 hover:bg-[#313338] hover:border-[#5865F2] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(88,101,242,0.2)]"
          >
            <div className="relative w-[100px] h-[100px] mb-5">
              <img
                src={server.icon || "/placeholder.svg"}
                alt={server.name}
                className="w-full h-full rounded-[30px] object-cover shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-[#23a559] border-[5px] border-[#2b2d31] rounded-full" />
            </div>

            <h3 className="text-white font-display font-extrabold text-xl mb-2 text-center">{server.name}</h3>
            <p className="text-[#b5bac1] text-sm text-center mb-6 leading-relaxed">{server.description}</p>

            <a
              href={server.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#5865F2] text-white text-center rounded-md font-semibold transition-all duration-200 hover:bg-[#4752c4]"
            >
              THAM GIA NGAY
            </a>
          </div>
        ))}
      </div>
    </section>
  )
    }
