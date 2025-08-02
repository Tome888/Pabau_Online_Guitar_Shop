"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import LanguageToggle from "./micro_elements/LanguageToggle";
import { Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";
import home from "../../../translations/home";
import Image from "next/image";
export default function Footer() {
  const { language } = useLanguage();
  const t = home[language];

  return (
    <footer className="flex justify-center items-center w-full flex-col bg-[#EEEEEE] ">
      <div className="flex justify-between items-center w-full gap-12 p-6">
        <div className=" p-4  rounded-md">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="VibeStrings Logo"
              width={150}
              height={50}
              priority
              style={{ height: "auto", width: "auto" }}
              className="h-15"
            />
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
