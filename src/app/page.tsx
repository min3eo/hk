import HeroSlider from "./hero-slider";
import Image from "next/image";
import SiteHeader from "./site-header";

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
            <ul className="grid gap-x-6 gap-y-2 text-sm text-white/75 lg:grid-cols-2">
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
      <div data-hero-shell className="flex h-svh flex-col overflow-hidden">
        <SiteHeader />
        <main className="min-h-0 flex-1">
          <HeroSlider />
        </main>
      </div>
      <NewsSection />
      <Footer />
    </div>
  );
}
