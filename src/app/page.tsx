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
      <div className="mx-auto grid max-w-[1600px] grid-cols-[190px_minmax(0,1fr)] items-end border-b border-black pb-3 lg:grid-cols-[230px_minmax(0,1fr)]">
        <div className="pb-1"><Logo /></div>
        <nav className="hidden flex-1 self-stretch md:block" aria-label="주 메뉴">
          <ul className="grid h-full grid-cols-4 items-end">
            {menus.map((menu) => (
              <li key={menu.label} className="group static flex h-full items-end justify-start">
                <a href={`#${menu.label.toLowerCase().replaceAll(" ", "-")}`} className="flex h-full items-end pr-4 pb-1 pl-10 text-[18px] tracking-[-0.04em] lg:text-[21px]">
                  {menu.label}
                </a>
                <div className="pointer-events-none invisible absolute top-full left-0 w-full -translate-y-1.5 border-b border-neutral-300 bg-white/98 opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
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
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <Header />
      <main id="project" className="mx-auto grid max-w-[1160px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[minmax(280px,420px)_1fr] md:py-24 lg:gap-14 lg:py-28">
        <div className="aspect-[3/4] w-full border border-neutral-500" role="img" aria-label="프로젝트 이미지 영역" />
        <article className="pt-0 md:pt-1">
          <p className="text-4xl font-medium tracking-[-0.04em]">2026</p>
          <h1 className="mt-1 text-xl leading-snug tracking-[-0.04em] sm:text-2xl">보령시 관창일반산업단지 기숙사 증축 설계용역</h1>
          <p className="mt-1 text-sm tracking-[0.02em] text-neutral-400 sm:text-base">BORYEONG-SI GWANCHANG INDUSTRIAL COMPLEX DORMITORY</p>
          <div className="mt-10 sm:mt-12">
            <h2 className="border-b-4 border-double border-black pb-2 text-lg">우수작(가작)</h2>
            <div className="mt-4 space-y-6 text-[15px] leading-[1.65] tracking-[-0.02em] sm:text-base">
              <p>대지의 흐름과 주변 경관을 존중하며, 사용자의 일상과 자연스럽게 연결되는 공간을 계획했습니다. 단순하고 명료한 동선 안에 다양한 휴식과 교류의 장면을 담아 새로운 기숙 환경을 제안합니다.</p>
              <p>건물의 입면은 절제된 재료와 반복되는 리듬으로 구성하고, 빛과 그림자의 변화를 통해 시간에 따라 다른 표정을 갖도록 했습니다. 공용 공간은 외부 마당과 연계해 열린 생활의 중심이 됩니다.</p>
              <p>효율적인 구조와 지속 가능한 설비 계획을 바탕으로 오래 사용될 수 있는 건축을 지향합니다.</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
