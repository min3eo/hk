import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../site-header";

export const metadata: Metadata = {
  title: "김천의료원 장례식장 증축 설계공모 | H&K Architects",
  description: "김천의료원 장례식장 증축사업 설계용역 건축설계공모",
};

const projectInfo = [
  ["당선년도", "심사 결과 발표 후 업데이트"],
  ["용역명", "김천의료원 장례식장 증축사업 설계용역"],
  ["발주처", "경상북도 김천의료원"],
  ["위치", "경상북도 김천시 모암길 24"],
  ["연면적", "3,833.15㎡"],
  ["상태", "2026 건축설계공모 진행 중"],
];

export default function GimcheonCompetitionPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <SiteHeader />
      <main className="px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:px-12 lg:pt-12">
        <article className="mx-auto max-w-[1080px]">
          <header>
            <div className="mb-6 flex items-center gap-3 text-[10px] font-medium tracking-[0.12em] text-neutral-400 sm:text-xs">
              <Link href="/#competitions" className="transition-colors hover:text-black">COMPETITIONS</Link>
              <span>/</span>
              <span className="text-black">2026 GIMCHEON-SI</span>
            </div>
            <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.08] font-medium tracking-[-0.045em]">김천의료원 장례식장 증축</h1>
            <p className="mt-3 text-sm font-medium tracking-[0.02em] text-neutral-500 sm:text-base">GIMCHEON MEDICAL CENTER FUNERAL HALL EXTENSION</p>
            <dl className="mt-8 grid border-t border-black sm:grid-cols-2 lg:mt-10">
              {projectInfo.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[82px_1fr] gap-4 border-b border-neutral-300 py-3 text-sm sm:odd:pr-8 sm:even:pl-8">
                  <dt className="text-neutral-400">{label}</dt>
                  <dd className="font-medium leading-6">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <figure className="mt-10 sm:mt-12">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/main.jpg" alt="김천의료원 장례식장 증축안 주출입구 투시도" fill priority sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-[10px] tracking-[0.12em] text-neutral-400">MAIN ENTRANCE VIEW</figcaption>
          </figure>

          <section className="mx-auto max-w-[800px] py-12 sm:py-16">
            <h2 className="mt-4 text-2xl leading-[1.42] font-medium tracking-[-0.03em] sm:text-3xl">
              고인을 배웅하는 마지막 시간이<br className="hidden sm:block" /> 차분하고 온전하게 머무는 공간을 만듭니다.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-800 sm:text-base">
              <p>김천의료원의 기존 의료 기능을 방해하지 않으면서 장례식장 이용객에게 독립적이고 명확한 접근 체계를 제공하는 증축안을 제안합니다. 깊은 진입 캐노피와 단정한 전면 공간은 방문객을 자연스럽게 안내하고 외부의 소음과 시선을 완충합니다.</p>
              <p>빈소와 유가족 공간, 조문객 동선, 관리 및 서비스 동선을 세심하게 분리해 운영의 효율과 이용자의 프라이버시를 함께 확보했습니다. 내부 곳곳에 작은 중정과 자연광을 끌어들여 긴 대기와 애도의 시간에도 안정감을 느낄 수 있도록 계획했습니다.</p>
            </div>
          </section>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/projects/gimcheon-2026/aerial.png" alt="김천의료원 장례식장 증축안 배치 조감도" fill sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-6 text-[10px] tracking-[0.1em] text-neutral-400"><span>AERIAL VIEW</span><span>의료원과 연결되는 독립적 동선</span></figcaption>
          </figure>

          <section className="mx-auto max-w-[800px] py-12 sm:py-16">
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">존중과 배려로 완성하는 공간</h2>
            <div className="mt-6 border-t border-black">
              <div className="grid gap-2 border-b border-neutral-300 py-4 sm:grid-cols-[150px_1fr]"><h3 className="font-medium">분리된 동선</h3><p className="text-sm leading-6 text-neutral-700">조문객과 유가족, 서비스 차량의 흐름을 분리해 프라이버시를 지키고 기존 의료원의 운영 부담을 줄입니다.</p></div>
              <div className="grid gap-2 border-b border-neutral-300 py-4 sm:grid-cols-[150px_1fr]"><h3 className="font-medium">치유의 중정</h3><p className="text-sm leading-6 text-neutral-700">외부 시선에서 보호된 작은 정원과 자연광을 내부 깊숙이 들여와 조용히 숨을 고를 수 있는 장소를 마련합니다.</p></div>
              <div className="grid gap-2 border-b border-neutral-300 py-4 sm:grid-cols-[150px_1fr]"><h3 className="font-medium">절제된 재료</h3><p className="text-sm leading-6 text-neutral-700">밝은 벽돌과 따뜻한 목재, 깊은 처마를 사용해 공공시설의 견고함과 장례공간에 필요한 차분함을 함께 담습니다.</p></div>
            </div>
          </section>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
              <Image src="/projects/gimcheon-2026/interior.png" alt="추모 정원과 연결된 유가족 대기 공간" fill sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-6 text-[10px] tracking-[0.1em] text-neutral-400"><span>FAMILY LOUNGE</span><span>추모 정원과 연결된 대기 공간</span></figcaption>
          </figure>

          <nav className="mt-14 flex items-center justify-between gap-8 border-t border-black pt-5 text-xs font-medium tracking-[0.1em] sm:mt-16" aria-label="프로젝트 이동">
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
