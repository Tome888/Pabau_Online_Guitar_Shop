"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = home[language];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full hero gap-6">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-[56px] font-bold text-zinc-950 text-center">
          {t.heroTitle}
        </h1>
        <p className="text-lg text-[rgba(102, 102, 102, 1)] w-[50%] text-center">
          {t.smallHeroTitle}
        </p>
      </div>

      <div className="testImage"></div>
    </section>
  );
}
