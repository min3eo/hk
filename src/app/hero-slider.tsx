"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/slides/istanbul-modern.jpg",
    title: "Istanbul Modern",
    subtitle: "이스탄불 현대미술관",
    position: "center center",
  },
  {
    src: "/slides/istanbul-waterfront.jpg",
    title: "Museum on the Waterfront",
    subtitle: "수변 문화시설",
    position: "center center",
  },
  {
    src: "/slides/via-57-west.jpg",
    title: "VIA 57 West",
    subtitle: "도시형 주거 프로젝트",
    position: "center center",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLElement>(null);

  const move = useCallback((direction: number) => {
    setCurrent((index) => (index + direction + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(timer);
  }, [move, paused]);

  useEffect(() => {
    const shell = sliderRef.current?.closest<HTMLElement>("[data-hero-shell]");
    if (!shell) return;

    let viewportWidth = window.innerWidth;
    const lockHeight = () => {
      shell.style.height = `${window.innerHeight}px`;
    };
    const handleResize = () => {
      if (window.innerWidth === viewportWidth) return;
      viewportWidth = window.innerWidth;
      lockHeight();
    };

    lockHeight();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", lockHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", lockHeight);
      shell.style.removeProperty("height");
    };
  }, []);

  return (
    <section
      ref={sliderRef}
      className="relative h-full min-h-0 w-full overflow-hidden bg-neutral-900"
      aria-label="주요 건축 프로젝트"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${index === current ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.src}
            alt={`${slide.title} 건축물 전경`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
          <div className="absolute right-6 bottom-8 text-right text-white sm:right-10 sm:bottom-10 lg:right-16 lg:bottom-14">
            <p className="text-2xl font-light tracking-[-0.03em] drop-shadow-sm sm:text-4xl lg:text-5xl">{slide.title}</p>
            <p className="mt-1 text-sm tracking-[0.04em] drop-shadow-sm sm:text-lg">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-36 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.72)_16%,rgba(255,255,255,0.28)_38%,rgba(255,255,255,0.08)_68%,transparent_100%)] sm:h-48 lg:h-64"
      />

      <button type="button" onClick={() => move(-1)} className="absolute top-1/2 left-3 z-20 -translate-y-1/2 p-3 text-4xl font-light text-white drop-shadow-md transition-opacity hover:opacity-60 sm:left-6 sm:text-5xl" aria-label="이전 슬라이드">‹</button>
      <button type="button" onClick={() => move(1)} className="absolute top-1/2 right-3 z-20 -translate-y-1/2 p-3 text-4xl font-light text-white drop-shadow-md transition-opacity hover:opacity-60 sm:right-6 sm:text-5xl" aria-label="다음 슬라이드">›</button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-label="슬라이드 선택">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => setCurrent(index)} className={`h-1 transition-all ${index === current ? "w-8 bg-white" : "w-4 bg-white/45 hover:bg-white/75"}`} aria-label={`${index + 1}번 슬라이드 보기`} aria-current={index === current ? "true" : undefined} />
        ))}
      </div>
    </section>
  );
}
