"use client";

import { FormEvent, useState } from "react";

const fieldClass = "w-full border-b border-neutral-300 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-neutral-300 focus:border-black";

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("온라인 전송 연결 준비 중입니다. 현재는 대표전화로 문의해 주세요.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-20 border-t border-black pt-8 sm:mt-28 sm:pt-10">
      <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[10px] tracking-[0.18em] text-neutral-400">PROJECT INQUIRY</p>
          <h2 className="text-2xl tracking-[-0.035em] sm:text-3xl">프로젝트 문의</h2>
        </div>
        <p className="text-xs text-neutral-400">* 필수 입력 항목</p>
      </div>

      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        <label className="block">
          <span className="text-xs tracking-[0.08em]">NAME *</span>
          <input name="name" type="text" required autoComplete="name" placeholder="이름" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-xs tracking-[0.08em]">COMPANY</span>
          <input name="company" type="text" autoComplete="organization" placeholder="회사명 또는 소속" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-xs tracking-[0.08em]">EMAIL *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="name@example.com" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-xs tracking-[0.08em]">PHONE</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="010 0000 0000" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-xs tracking-[0.08em]">INQUIRY TYPE *</span>
          <select name="inquiryType" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
            <option value="" disabled>문의 유형을 선택해 주세요</option>
            <option value="architecture">건축 설계</option>
            <option value="supervision">건축 감리</option>
            <option value="interior">인테리어 설계</option>
            <option value="collaboration">협업 및 기타</option>
          </select>
        </label>
        <label className="block">
          <span className="text-xs tracking-[0.08em]">SUBJECT *</span>
          <input name="subject" type="text" required placeholder="문의 제목" className={fieldClass} />
        </label>
        <label className="block md:col-span-2">
          <span className="text-xs tracking-[0.08em]">MESSAGE *</span>
          <textarea name="message" required rows={6} placeholder="프로젝트 위치, 용도, 규모와 문의 내용을 작성해 주세요." className={`${fieldClass} resize-y leading-7`} />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-6 border-b border-neutral-300 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-neutral-500">
          <input type="checkbox" name="privacy" required className="mt-1 size-3.5 accent-black" />
          <span>문의 답변을 위한 개인정보 수집 및 이용에 동의합니다. *</span>
        </label>
        <button type="submit" className="w-full border border-black px-8 py-3 text-xs tracking-[0.12em] transition-colors hover:bg-black hover:text-white sm:w-auto">
          SEND INQUIRY
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-4 min-h-5 text-xs text-neutral-500">{notice}</p>
    </form>
  );
}
