import HeroSlider from "./hero-slider";
import Image from "next/image";

const menus = [
  { label: "PROJECTS", items: ["2026 JEONGSEON-GUN", "2026 GOYANG-SI", "2025 JEONGSEON-GUN", "2025 GANGSEO-GU", "2024 ULJU-GUN", "2024 SOKCHO-SI"] },
  { label: "COMPETITIONS", items: ["2026 GIMCHEON-SI", "2026 NAMWON-SI", "2026 BORYEONG-SI", "2026 HONGCEHON-GUN", "2026 JEONGSEON-GUN", "2026 YONGIN-SI", "2026 GANGNEUNG-SI"] },
  { label: "ABOUT US", items: ["ARCHITECTS", "HISTORY", "OUR DESIGNS"] },
  { label: "CONTACT US", items: ["OFFICE", "ADDRESS BOOK"] },
];

const news = [
  {
    image: "/slides/istanbul-waterfront.jpg",
    category: "COMPETITION",
    date: "2026.08",
    title: "도시와 수변을 연결하는 새로운 문화시설 계획",
    position: "center center",
  },
  {
    image: "/slides/via-57-west.jpg",
    category: "PROJECT",
    date: "2026.06",
    title: "도심형 복합주거 설계 프로젝트 선정",
    position: "center 42%",
  },
  {
    image: "/slides/istanbul-modern.jpg",
    category: "NEWS",
    date: "2026.04",
    title: "H&K가 제안하는 열린 미술관과 공공 공간",
    position: "left center",
  },
];

function Logo() {
  return (
    <a href="#" className="block w-fit leading-none" aria-label="H and K 홈">
      <span className="font-[family-name:var(--font-logo)] text-[54px] tracking-[-0.08em] text-black sm:text-[68px]">H&amp;K</span>
      <span className="mt-1 block text-[11px] tracking-[0.12em] text-neutral-500 uppercase sm:text-xs">Architects Design Group</span>
    </a>
  );
}

function Header() {
  return (
    <header className="relative z-20 border-t border-black bg-white px-4 pt-3 sm:px-7 lg:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[190px_minmax(0,1fr)] items-end pb-3 lg:grid-cols-[230px_minmax(0,1fr)]">
        <div className="pb-1"><Logo /></div>
        <nav className="hidden flex-1 self-stretch md:block" aria-label="주 메뉴">
          <ul className="grid h-full grid-cols-4 items-end">
            {menus.map((menu) => (
              <li key={menu.label} className="group static flex h-full items-end justify-start">
                <a href={`#${menu.label.toLowerCase().replaceAll(" ", "-")}`} className="flex h-full items-end pr-4 pb-1 pl-10 text-[18px] tracking-[-0.04em] lg:text-[21px]">
                  {menu.label}
                </a>
                <div className="pointer-events-none invisible absolute top-full left-0 w-full -translate-y-1.5 border-y border-t-black border-b-neutral-300 bg-white/98 opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="min-h-52 px-7 py-4 lg:px-10">
                    <div className="mx-auto grid max-w-[1600px] grid-cols-[190px_repeat(4,minmax(0,1fr))] lg:grid-cols-[230px_repeat(4,minmax(0,1fr))]">
                      <div />
                      {menus.map((column) => (
                        <div key={column.label} className="pr-4 pl-10">
                          <ul className="space-y-1">
                            {column.items.map((item) => <li key={item}><a href="#project" className="text-[15px] hover:underline lg:text-base">{item}</a></li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <details className="group ml-auto md:hidden">
          <summary className="cursor-pointer list-none pb-2 text-sm tracking-[0.12em]">MENU</summary>
          <div className="absolute top-full left-0 w-full border-y border-black bg-white px-5 py-5">
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-neutral-200 py-3 last:border-0">
                <p className="mb-2 text-sm font-semibold">{menu.label}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600">
                  {menu.items.map((item) => <a key={item} href="#project">{item}</a>)}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-end justify-between border-b border-black pb-4 sm:mb-14">
          <h2 className="text-2xl font-normal tracking-[0.04em] sm:text-3xl">NEWS</h2>
          <a href="#news" className="text-[10px] tracking-[0.14em] text-neutral-500 transition-colors hover:text-black sm:text-xs">VIEW ALL</a>
        </div>
        <div className="grid gap-x-5 gap-y-12 md:grid-cols-3 lg:gap-x-8">
          {news.map((item) => (
            <article key={item.title} className="group">
              <a href="#news" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" style={{ objectPosition: item.position }} />
                </div>
                <div className="border-b border-neutral-300 py-4">
                  <div className="mb-3 flex items-center justify-between text-[10px] tracking-[0.14em] text-neutral-500 sm:text-xs">
                    <span>{item.category}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3 className="text-base leading-snug tracking-[-0.025em] underline-offset-4 group-hover:underline sm:text-lg">{item.title}</h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] px-5 pt-14 pb-6 text-white sm:px-8 sm:pt-18 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/25 pb-14 sm:grid-cols-3 lg:gap-16">
          <div>
            <h2 className="mb-5 text-[10px] tracking-[0.18em] text-white/45">OFFICE</h2>
            <address className="text-sm leading-6 text-white/75 not-italic">
              Seongnam-si, Gyeonggi-do<br />
              Republic of Korea
            </address>
          </div>

          <div>
            <h2 className="mb-5 text-[10px] tracking-[0.18em] text-white/45">PRACTICE</h2>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Architecture Design</li>
              <li>Construction Supervision</li>
              <li>Interior Design</li>
              <li>Project Planning</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-[10px] tracking-[0.18em] text-white/45">COMPANY</h2>
            <dl className="space-y-2 text-sm text-white/75">
              <div><dt className="inline text-white/40">TYPE&nbsp;&nbsp;</dt><dd className="inline">Architects Office</dd></div>
              <div><dt className="inline text-white/40">EST.&nbsp;&nbsp;</dt><dd className="inline">2013</dd></div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[9px] tracking-[0.12em] text-white/35 uppercase sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <p>© {new Date().getFullYear()} H&amp;K Architects. All rights reserved.</p>
          <a href="#" className="w-fit transition-colors hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <div className="flex h-svh flex-col overflow-hidden">
        <Header />
        <main className="min-h-0 flex-1">
          <HeroSlider />
        </main>
      </div>
      <NewsSection />
      <Footer />
    </div>
  );
}
