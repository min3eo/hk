import Image from "next/image";
import Link from "next/link";

const menus = [
  { label: "PROJECTS", href: "/#projects", items: ["2026 JEONGSEON-GUN", "2026 GOYANG-SI", "2025 JEONGSEON-GUN", "2025 GANGSEO-GU", "2024 ULJU-GUN", "2024 SOKCHO-SI"] },
  { label: "COMPETITIONS", href: "/#competitions", items: ["2026 GIMCHEON-SI", "2026 NAMWON-SI", "2026 BORYEONG-SI", "2026 HONGCEHON-GUN", "2026 JEONGSEON-GUN", "2026 YONGIN-SI", "2026 GANGNEUNG-SI"] },
  { label: "ABOUT US", href: "/#about-us", items: ["ARCHITECTS", "HISTORY", "OUR DESIGNS"] },
  { label: "CONTACT US", href: "/contact-us", items: ["OFFICE"] },
];

function Logo() {
  return (
    <Link href="/" className="mt-1 block w-fit leading-none" aria-label="H and K 홈">
      <Image
        src="/hk-logo.svg"
        alt="H&amp;K"
        width={408}
        height={112}
        priority
        className="h-auto w-[115px] origin-bottom scale-y-[1.05] sm:w-[138px]"
      />
      <span className="mt-1 block text-center text-[10px] font-medium italic tracking-[0.1em] text-neutral-500 uppercase sm:text-[11px]">Architects Design Group</span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="relative z-20 bg-white px-4 pt-3 sm:px-7 lg:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[190px_minmax(0,1fr)] items-end pb-3 lg:grid-cols-[230px_minmax(0,1fr)]">
        <div className="flex h-full items-center"><Logo /></div>
        <nav className="group hidden flex-1 self-stretch md:block" aria-label="주 메뉴">
          <ul className="grid h-full grid-cols-4 items-end">
            {menus.map((menu) => (
              <li key={menu.label} className="static flex h-full items-end justify-center">
                <Link href={menu.href} className="flex h-full items-end px-4 pb-1 text-[18px] tracking-[-0.04em] lg:text-[21px]">{menu.label}</Link>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none invisible absolute top-full left-0 w-full -translate-y-1.5 border-b border-b-neutral-300 bg-white/98 opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <div className="min-h-52 px-7 pt-[3.5px] pb-4 lg:px-10">
              <div className="mx-auto grid max-w-[1600px] grid-cols-[190px_repeat(4,minmax(0,1fr))] lg:grid-cols-[230px_repeat(4,minmax(0,1fr))]">
                <div className="col-span-4 col-start-2 mb-4 border-t border-black" />
                <div />
                {menus.map((column) => (
                  <div key={column.label} className="flex justify-center px-4">
                    <ul className="w-fit space-y-1 text-left">
                      {column.items.map((item) => <li key={item}><Link href={item === "2026 GIMCHEON-SI" ? "/competitions/gimcheon-2026" : column.href} className="text-[15px] hover:underline lg:text-base">{item}</Link></li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <details className="group ml-auto md:hidden">
          <summary className="cursor-pointer list-none pb-2 text-sm tracking-[0.12em]">MENU</summary>
          <div className="absolute top-full left-0 max-h-[calc(100svh-5rem)] w-full overflow-y-auto border-y border-black bg-white px-5 py-5">
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-neutral-200 py-3 last:border-0">
                <Link href={menu.href} className="mb-2 block text-sm font-semibold">{menu.label}</Link>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-600">
                  {menu.items.map((item) => <Link key={item} href={item === "2026 GIMCHEON-SI" ? "/competitions/gimcheon-2026" : menu.href}>{item}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
