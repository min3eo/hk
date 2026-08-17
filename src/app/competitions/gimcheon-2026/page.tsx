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

export default function GimcheonCompetitionPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <SiteHeader />
      <main className="px-5 pt-10 pb-24 sm:px-8 sm:pt-14 sm:pb-32 lg:px-12 lg:pt-16">
        <article className="mx-auto max-w-[1080px]">
          <header>
            <div className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.15em] text-neutral-400 sm:text-xs">
              <Link href="/#competitions" className="transition-colors hover:text-black">COMPETITIONS</Link>
              <span>/</span>
              <span className="text-black">2026 GIMCHEON-SI</span>
            </div>
            <p className="mb-4 text-xs tracking-[0.15em] text-neutral-500">WINNING COMPETITION · 2026</p>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] font-normal tracking-[-0.05em]">김천시 복합문화시설</h1>
            <p className="mt-4 text-sm tracking-[0.03em] text-neutral-400 sm:text-base">GIMCHEON CULTURE COMMONS</p>
            <dl className="mt-10 grid border-t border-black sm:grid-cols-2 lg:mt-14">
              {projectInfo.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[82px_1fr] gap-4 border-b border-neutral-300 py-3.5 text-sm sm:odd:pr-8 sm:even:pl-8">
                  <dt className="text-neutral-400">{label}</dt>
                  <dd className="leading-6">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <figure className="mt-12 sm:mt-16">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/projects/gimcheon-2026/hero.png" alt="김천시 복합문화시설 중앙 마당 투시도" fill priority sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-[10px] tracking-[0.12em] text-neutral-400">CENTRAL COURTYARD VIEW</figcaption>
          </figure>

          <section className="mx-auto max-w-[800px] py-20 sm:py-28">
            <p className="text-xs tracking-[0.15em] text-neutral-400">작품소개</p>
            <h2 className="mt-6 text-2xl leading-[1.5] font-normal tracking-[-0.035em] sm:text-3xl">
              서로 다른 일상이 하나의 마당에서 만나고,<br className="hidden sm:block" /> 도시의 풍경이 건축 안으로 이어집니다.
            </h2>
            <div className="mt-8 space-y-6 text-[15px] leading-8 text-neutral-600 sm:text-base">
              <p>김천의 새로운 공공문화 거점은 하나의 큰 건물보다 여러 개의 친근한 볼륨이 마당을 감싸는 모습으로 계획했습니다. 중앙의 열린 공간은 도서관, 전시, 교육과 커뮤니티 프로그램을 연결하며 일상적인 산책과 만남까지 받아들입니다.</p>
              <p>붉은 벽돌과 목재 루버는 시간에 따라 깊어지는 재료의 표정을 만들고, 깊은 처마와 투명한 저층부는 내부 활동을 도시로 드러냅니다. 계절과 운영 방식이 달라져도 유연하게 변화할 수 있는 지속 가능한 공공건축을 제안합니다.</p>
            </div>
          </section>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/projects/gimcheon-2026/aerial.png" alt="김천시 복합문화시설 배치 조감도" fill sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-6 text-[10px] tracking-[0.1em] text-neutral-400"><span>AERIAL VIEW</span><span>도시와 연결되는 열린 배치</span></figcaption>
          </figure>

          <section className="mx-auto max-w-[800px] py-20 sm:py-28">
            <p className="text-xs tracking-[0.15em] text-neutral-400">설계개념</p>
            <h2 className="mt-6 text-2xl tracking-[-0.035em] sm:text-3xl">열린 마당, 이어지는 일상</h2>
            <div className="mt-10 border-t border-black">
              <div className="grid gap-3 border-b border-neutral-300 py-6 sm:grid-cols-[150px_1fr]"><h3>도시를 잇는 마당</h3><p className="text-sm leading-7 text-neutral-500">주변의 보행 흐름을 중앙 마당으로 모아 누구나 자연스럽게 지나고 머무를 수 있는 공공의 중심을 만듭니다.</p></div>
              <div className="grid gap-3 border-b border-neutral-300 py-6 sm:grid-cols-[150px_1fr]"><h3>풍경을 담는 건축</h3><p className="text-sm leading-7 text-neutral-500">낮은 매스와 열린 틈을 통해 김천의 산세와 도시 풍경이 건물 안쪽까지 이어지도록 계획했습니다.</p></div>
              <div className="grid gap-3 border-b border-neutral-300 py-6 sm:grid-cols-[150px_1fr]"><h3>유연한 공공 공간</h3><p className="text-sm leading-7 text-neutral-500">독립적으로 운영되는 프로그램과 공유 공간을 결합해 시간과 수요의 변화에 오래 대응합니다.</p></div>
            </div>
          </section>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/projects/gimcheon-2026/interior.png" alt="중앙 마당과 연결된 커뮤니티 라운지" fill sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-6 text-[10px] tracking-[0.1em] text-neutral-400"><span>COMMUNITY LOUNGE</span><span>마당과 내부를 잇는 생활 공간</span></figcaption>
          </figure>

          <nav className="mt-20 flex items-center justify-between gap-8 border-t border-black pt-6 text-xs tracking-[0.12em] sm:mt-28" aria-label="프로젝트 이동">
            <Link href="/#competitions" className="transition-opacity hover:opacity-50">← ALL COMPETITIONS</Link>
            <span className="text-neutral-400">2026 GIMCHEON-SI</span>
          </nav>
        </article>
      </main>

      <footer className="bg-[#111] px-5 py-7 text-[9px] tracking-[0.12em] text-white/40 uppercase sm:px-8 sm:text-[10px] lg:px-12">
        <div className="mx-auto flex max-w-[1500px] justify-between gap-5"><p>© {new Date().getFullYear()} H&amp;K Architects. All rights reserved.</p><Link href="/" className="transition-colors hover:text-white">Home ↗</Link></div>
      </footer>
    </div>
  );
}
