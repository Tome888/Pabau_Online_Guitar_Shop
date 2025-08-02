"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import Image from "next/image";

export default function PhonesSection() {
  const { language } = useLanguage();
  const t = home[language];

  return (
    <section className="w-full flex justify-center items-center gap-50 py-24 px-8 max-md:flex-col max-md:gap-16">
      <div className="flex flex-col justify-center items-center text-center max-w-[500px]">
        <h2 className="text-[48px] text-[#000000]">{t.appTitle}</h2>
        <Image
          src="/Stores.png"
          alt="Available Stores"
          width={500}
          height={300}
          className="mt-6"
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/twoPhones.png"
          alt="App Preview on Phones"
          width={550}
          height={700}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </section>
  );
}
