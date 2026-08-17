import HeroSlider from "./hero-slider";

const menus = [
  { label: "PROJECTS", items: ["2026 JEONGSEON-GUN", "2026 GOYANG-SI", "2025 JEONGSEON-GUN", "2025 GANGSEO-GU", "2024 ULJU-GUN", "2024 SOKCHO-SI"] },
  { label: "COMPETITIONS", items: ["2026 GIMCHEON-SI", "2026 NAMWON-SI", "2026 BORYEONG-SI", "2026 HONGCEHON-GUN", "2026 JEONGSEON-GUN", "2026 YONGIN-SI", "2026 GANGNEUNG-SI"] },
  { label: "ABOUT US", items: ["ARCHITECTS", "HISTORY", "OUR DESIGNS"] },
  { label: "CONTACT US", items: ["OFFICE", "ADDRESS BOOK"] },
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

export default function Home() {
  return (
    <div className="flex h-svh flex-col overflow-hidden bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <Header />
      <main className="min-h-0 flex-1">
        <HeroSlider />
      </main>
      <footer className="flex h-9 shrink-0 items-center justify-between border-t border-black px-4 text-[9px] tracking-[0.08em] text-neutral-500 uppercase sm:px-7 sm:text-[10px] lg:px-10">
        <span>© H&amp;K Architects Design Group</span>
        <span className="flex gap-3">
          <span className="hidden sm:inline">Photos: Philrock · Dosseman · Tiraspolsky</span>
          <a href="https://commons.wikimedia.org/wiki/File:Fassade_des_Istanbul_Modern_Museums.jpg" target="_blank" rel="noreferrer" className="hover:text-black">Credits</a>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="hover:text-black">CC BY-SA</a>
        </span>
      </footer>
    </div>
  );
}
