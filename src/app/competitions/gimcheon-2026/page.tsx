import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../site-header";

export const metadata: Metadata = {
  title: "2026 Gimcheon-si Competition | H&K Architects",
  description: "김천시 복합문화시설 건립 설계공모 프로젝트",
};

const projectInfo = [
  ["당선년도", "2026"],
  ["용역명", "김천시 복합문화시설 건립 설계용역"],
  ["발주처", "김천시"],
  ["위치", "경상북도 김천시"],
  ["유형", "건축 설계공모 · 당선"],
  ["용도", "문화 및 집회시설"],
];

const concepts = [
  {
    number: "01",
    title: "도시를 잇는 열린 마당",
    body: "분절된 주변 보행 흐름을 중앙 마당으로 모으고, 누구나 자연스럽게 지나고 머무를 수 있는 공공의 중심을 만듭니다.",
  },
  {
    number: "02",
    title: "풍경을 담는 낮은 건축",
    body: "주변 산세를 가리지 않는 낮은 매스와 열린 틈을 통해 도시와 자연의 풍경이 건물 안쪽까지 이어지도록 계획했습니다.",
  },
  {
    number: "03",
    title: "변화에 대응하는 구조",
    body: "독립적으로 운영 가능한 프로그램과 유연한 공용공간을 결합해 시간과 수요의 변화에 오래 대응하는 건축을 제안합니다.",
  },
];

export default function GimcheonCompetitionPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <SiteHeader />

      <main>
        <section className="px-5 pt-10 pb-10 sm:px-8 sm:pt-14 sm:pb-14 lg:px-12 lg:pt-20 lg:pb-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.15em] text-neutral-400 sm:text-xs">
              <Link href="/#competitions" className="transition-colors hover:text-black">COMPETITIONS</Link>
              <span>/</span>
              <span className="text-black">2026 GIMCHEON-SI</span>
            </div>

            <div className="grid gap-10 border-t border-black pt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:gap-20 lg:pt-8">
              <div>
                <p className="mb-4 text-xs tracking-[0.16em] text-neutral-500">WINNING COMPETITION · 2026</p>
                <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,5.5rem)] leading-[0.98] font-normal tracking-[-0.055em]">
                  김천시 복합문화시설
                </h1>
                <p className="mt-5 text-base tracking-[-0.02em] text-neutral-500 sm:text-lg">GIMCHEON CULTURE COMMONS</p>
              </div>

              <dl className="border-t border-neutral-300">
                {projectInfo.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[86px_1fr] gap-5 border-b border-neutral-300 py-3.5 text-sm sm:grid-cols-[100px_1fr]">
                    <dt className="text-neutral-400">{label}</dt>
                    <dd className="leading-6">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <figure className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 sm:aspect-[16/8.5] lg:aspect-[16/7.5]">
          <Image
            src="/projects/gimcheon-2026/hero.png"
            alt="김천시 복합문화시설 중앙 마당 투시도"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <figcaption className="absolute right-4 bottom-4 bg-black/70 px-3 py-2 text-[9px] tracking-[0.12em] text-white sm:right-7 sm:bottom-6 sm:text-[10px]">
            CENTRAL COURTYARD VIEW
          </figcaption>
        </figure>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[minmax(180px,0.45fr)_minmax(0,1.55fr)] lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.16em] text-neutral-400">PROJECT STATEMENT</p>
              <p className="mt-3 text-sm text-neutral-500">열린 마당, 이어지는 일상</p>
            </div>
            <div>
              <h2 className="max-w-5xl text-2xl leading-[1.45] font-normal tracking-[-0.035em] sm:text-3xl lg:text-[2.6rem] lg:leading-[1.38]">
                서로 다른 일상이 하나의 마당에서 만나고,<br className="hidden sm:block" />
                도시의 풍경이 건축 안으로 이어집니다.
              </h2>
              <div className="mt-10 grid gap-7 text-[15px] leading-7 text-neutral-600 sm:grid-cols-2 sm:text-base sm:leading-8 lg:mt-14 lg:gap-12">
                <p>
                  김천의 새로운 공공문화 거점은 하나의 큰 건물보다 여러 개의 친근한 볼륨이 마당을 감싸는 모습으로 계획했습니다. 중앙의 열린 공간은 도서관, 전시, 교육과 커뮤니티 프로그램을 연결하며 일상적인 산책과 만남까지 받아들입니다.
                </p>
                <p>
                  붉은 벽돌과 목재 루버는 시간에 따라 깊어지는 재료의 표정을 만들고, 깊은 처마와 투명한 저층부는 내부 활동을 도시로 드러냅니다. 계절과 운영 방식이 달라져도 유연하게 변화할 수 있는 지속 가능한 공공건축을 제안합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-300 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 flex items-end justify-between gap-8">
              <h2 className="text-xl tracking-[-0.025em] sm:text-2xl">DESIGN STRATEGY</h2>
              <p className="text-[10px] tracking-[0.16em] text-neutral-400">THREE PRINCIPLES</p>
            </div>
            <div className="grid gap-12 md:grid-cols-3 md:gap-7 lg:gap-12">
              {concepts.map((concept) => (
                <article key={concept.number} className="border-t border-black pt-4">
                  <span className="text-xs text-neutral-400">{concept.number}</span>
                  <h3 className="mt-8 text-xl tracking-[-0.03em] sm:text-2xl">{concept.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500 sm:text-[15px]">{concept.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1500px] space-y-16 sm:space-y-24 lg:space-y-32">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
                <Image src="/projects/gimcheon-2026/aerial.png" alt="김천시 복합문화시설 배치 조감도" fill sizes="(min-width: 1500px) 1500px, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 flex justify-between border-t border-neutral-300 pt-3 text-[10px] tracking-[0.12em] text-neutral-400">
                <span>AERIAL VIEW</span><span>도시와 연결되는 열린 배치</span>
              </figcaption>
            </figure>

            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] lg:gap-16">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image src="/projects/gimcheon-2026/interior.png" alt="중앙 마당과 연결된 커뮤니티 라운지" fill sizes="(min-width: 1024px) 68vw, 100vw" className="object-cover" />
                </div>
              </figure>
              <div className="border-t border-black pt-5 lg:pb-8">
                <p className="text-[10px] tracking-[0.15em] text-neutral-400">COMMUNITY LOUNGE</p>
                <h2 className="mt-8 text-2xl leading-snug tracking-[-0.035em] sm:text-3xl">마당과 내부를 잇는<br />열린 생활 공간</h2>
                <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-[15px]">
                  깊은 처마 아래의 투명한 경계는 안과 밖을 부드럽게 연결합니다. 시민들은 책을 읽고, 쉬고, 대화하며 마당의 계절 변화를 일상 가까이에서 경험합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-t border-black px-5 py-8 sm:px-8 lg:px-12" aria-label="프로젝트 이동">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-8 text-xs tracking-[0.12em]">
            <Link href="/#competitions" className="transition-opacity hover:opacity-50">← ALL COMPETITIONS</Link>
            <span className="text-neutral-400">2026 GIMCHEON-SI</span>
          </div>
        </nav>
      </main>

      <footer className="bg-[#111] px-5 py-7 text-[9px] tracking-[0.12em] text-white/40 uppercase sm:px-8 sm:text-[10px] lg:px-12">
        <div className="mx-auto flex max-w-[1500px] justify-between gap-5">
          <p>© {new Date().getFullYear()} H&amp;K Architects. All rights reserved.</p>
          <Link href="/" className="transition-colors hover:text-white">Home ↗</Link>
        </div>
      </footer>
    </div>
  );
}
