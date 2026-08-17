import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Contact Us | H&K Architects",
  description: "H&K Architects Design Group 사무실 위치와 연락처",
};

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-geist-sans)] text-black">
      <SiteHeader />
      <main className="flex-1 border-t border-black px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-4 text-[10px] tracking-[0.18em] text-neutral-400 sm:text-xs">CONTACT US</p>
          <h1 className="text-4xl font-normal tracking-[-0.045em] sm:text-6xl lg:text-7xl">Office</h1>

          <div className="mt-16 grid border-t border-black md:grid-cols-2 lg:mt-24">
            <section className="border-b border-neutral-300 py-8 md:border-r md:border-b-0 md:pr-12 lg:py-12 lg:pr-20">
              <h2 className="mb-8 text-[10px] tracking-[0.18em] text-neutral-400">H&amp;K ARCHITECTS</h2>
              <address className="text-xl leading-relaxed tracking-[-0.025em] not-italic sm:text-2xl">
                경기도 성남시 수정구 위례광장로 19<br />
                아이페리온 2층 207호
              </address>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                2F 207, 19 Wiryegwangjang-ro,<br />
                Sujeong-gu, Seongnam-si, Gyeonggi-do
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%84%B1%EB%82%A8%EC%8B%9C+%EC%88%98%EC%A0%95%EA%B5%AC+%EC%9C%84%EB%A1%80%EA%B4%91%EC%9E%A5%EB%A1%9C+19"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex border-b border-black pb-1 text-xs tracking-[0.12em]"
              >
                VIEW MAP ↗
              </a>
            </section>

            <section className="py-8 md:pl-12 lg:py-12 lg:pl-20">
              <h2 className="mb-8 text-[10px] tracking-[0.18em] text-neutral-400">CONTACT</h2>
              <dl className="space-y-5 text-base sm:text-lg">
                <div className="grid grid-cols-[70px_1fr] gap-4">
                  <dt className="text-neutral-400">TEL</dt>
                  <dd><a href="tel:+82317583242" className="hover:underline">031 758 3242</a></dd>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-4">
                  <dt className="text-neutral-400">FAX</dt>
                  <dd>070 8622 9551</dd>
                </div>
              </dl>
              <p className="mt-12 max-w-md text-sm leading-6 text-neutral-500">
                프로젝트 및 협업 문의는 대표전화로 연락해 주세요. 담당자가 확인 후 안내해 드립니다.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-[#111] px-5 py-6 text-[9px] tracking-[0.12em] text-white/40 uppercase sm:px-8 sm:text-[10px] lg:px-12">
        <div className="mx-auto flex max-w-[1500px] justify-between gap-5">
          <p>© {new Date().getFullYear()} H&amp;K Architects. All rights reserved.</p>
          <Link href="/" className="transition-colors hover:text-white">Home ↑</Link>
        </div>
      </footer>
    </div>
  );
}
