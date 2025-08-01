"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import LanguageToggle from "./micro_elements/LanguageToggle";
import { Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";
import home from "../../../translations/home";
// import home from "../translations/home";

export default function Footer() {
  const { language } = useLanguage();
  const t = home[language]; // get translations for current language

  return (
    <footer className="flex justify-center items-center w-full flex-col bg-[#EEEEEE] ">
      <div className="flex justify-between items-center w-full gap-12 p-6">
        <div className=" p-4  rounded-md">
          <Link href={"/"}>
            <img src="Logo.svg" alt="VibeStrings Logo" />
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <Mail />
            <p>Enquiry@VibeStrings.com</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin />
            <p>San Francisco</p>
          </div>
        </div>

        {/* Example: Footer Pages section */}
        <div className=" p-4  rounded-md">
          <h3 className="mb-2 font-bold uppercase text-zinc-950">
            {t.footerPages.title}
          </h3>
          <ul>
            {t.footerPages.links.map((link, i) => (
              <li key={i} className="hover:underline cursor-pointer mt-4">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Example: Footer Products section */}
        <div className=" p-4  rounded-md">
          <h3 className="mb-2 font-bold uppercase text-zinc-950">
            {t.footerProdcats.title}
          </h3>
          <ul>
            {t.footerProdcats.links.map((link, i) => (
              <li key={i} className="hover:underline cursor-pointer mt-4">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials and Language Toggle */}
        <div className=" p-4  rounded-md flex flex-col items-center gap-4">
          <h3 className="font-bold uppercase text-zinc-950">
            {t.footerSocials.title}
          </h3>
          <div className="flex gap-4 text-xl">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>

          <LanguageToggle />
        </div>
      </div>

      <div className="text-center py-4 text-gray-600 text-sm">
        © 2022 Copyright. VibeStrings
      </div>
    </footer>
  );
}
