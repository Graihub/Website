import { HeroHead } from "./hero-head"

interface ClientsPageProps {
  active: boolean
}

export function ClientsPage({ active }: ClientsPageProps) {
  const clients = [
    {
      name: "DELTA×VNG+Font thường+Fix cập nhật",
      version: "v2.702",
      image: "/delta-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/tndjdctjw33t0tr/Delta_VN%F0%9F%87%BB%F0%9F%87%B3_V2.702_Fixed.apk/file",
    },
    {
      name: "DELTA×VNG+Fixlag+Font Thường",
      version: "v2.702",
      image: "/delta-executor-app.jpg",
      description: "Font thường",
      url: "https://www.mediafire.com/file/l35amt6p7djwfei/Detla%25C3%2597VNG%252BFixlag%252BFont_Th%25C6%25B0%25E1%25BB%259Dng%25F0%259F%2587%25BB%25F0%259F%2587%25B3.apk/file",
    },
    {
      name: "DELTA×VNG+Fixlag+Font Minecraft",
      version: "v2.702",
      image: "/delta-executor-app.jpg",
      description: "Font Minecraft.",
      url: "https://www.mediafire.com/file/7qt19kg6mk2uv8r/Detla%25C3%2597VNG%252BFixlag%252BFont_Minecraft%25F0%259F%2587%25BB%25F0%259F%2587%25B3.apk/file",
    },
    {
      name: "DELTA×VNG+Fixlag+Font Vệt Sơn",
      version: "v2.702",
      image: "/delta-executor-app.jpg",
      description: "Font Việt Sơn.",
      url: "https://www.mediafire.com/file/xjqp760d3mfls0h/Detla%C3%97VNG%2BFixlag%2BFont_V%E1%BB%87t_S%C6%A1n%F0%9F%87%BB%F0%9F%87%B3.apk/file",
    },
    {
      name: "Cryptic×VNG+Fixlag",
      version: "v2.702",
      image: "/cryptic-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/r7dd61v2vmyxt2g/Cryptic%25C3%2597VNG%252BFixlag.apk/file",
    },
    {
      name: "Ronix×VNG+Fixlag",
      version: "v2.702",
      image: "/ronix-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/ysy6hhap3vdesxo/Ronix%25C3%2597VNG_v2.702%252BFixlag%25F0%259F%2587%25BB%25F0%259F%2587%25B3.apk/file",
    },
    {
      name: "JJSploit×VNG+FixLag",
      version: "v2.702",
      image: "/jjsploit-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/dtwm6hcykbyakbg/JJSploit_VN%F0%9F%87%BB%F0%9F%87%B3_V2.702_32Bits.apk/file",
    },
    {
      name: "Cryptic×VNG+Fixlag",
      version: "v2.702",
      image: "/cryptic-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/4zqinr9lgb3nfc8/Cryptic_VNG_2.702.613_%2832-bit%29.apk/file",
    },
    {
      name: "Punk×VNG+Fixlag",
      version: "v2.702",
      image: "/punk-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/2qi3z12ypm1yqqk/PunkX_VNG_64Bits_2.702.622.apk/file?hash=re5UiOnuzeD9cDsSkdRFdEAyHAvVPF3Q0o00zn9NHTfprc3blLgY8OCBiq0A1tMM",
    },
    {
      name: "Neutron×VNG+Fixlag",
      version: "v2.702",
      image: "/neutron-executor-app.jpg",
      description: "Font thường.",
      url: "https://www.mediafire.com/file/jrlemyenm0o65i9/Neutron_VNG_32Bit_702.apk/file",
    },
  ]

  return (
    <section
      className={`${active ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-10"} transition-all duration-600`}
    >
      <HeroHead title="EXECUTORS" subtitle="AN TOAN" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <div
            key={i}
            className="group relative bg-[rgba(30,30,45,0.6)] backdrop-blur-[15px] border border-white/10 rounded-[45px] p-10 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:bg-[rgba(40,40,60,0.8)] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-0.5 rounded-md text-[0.65rem] font-bold backdrop-blur-sm">
              {client.version}
            </div>

            <div className="relative w-full h-[130px] rounded-[15px] overflow-hidden mb-4">
              <img
                src={client.image || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-white mb-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                {client.name}
              </h3>
              <p className="text-sm text-[#b2bec3] mb-4 leading-relaxed">{client.description}</p>
            </div>

            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white text-center rounded-[10px] font-bold text-sm shadow-[0_5px_15px_rgba(108,92,231,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(108,92,231,0.5)] hover:-translate-y-0.5 mt-auto"
            >
              <i className="fas fa-download mr-2" />
              TẢI XUỐNG
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
