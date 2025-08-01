"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  return (
    <footer className="flex justify-center items-center w-[100%] flex-col bg-[#EEEEEE]">
      <div className="flex justify-center items-center w-[100%]">
        <div>
          <Link href={"/"}>
            <img src="Logo.svg" alt="" />
          </Link>
          <div className="flex items-center justify-center"></div>
          <div className="flex items-center justify-center"></div>
        </div>
        <div></div>
        <div></div>
        <div>
          <div>
            <p>Language: {language}</p>
            <button onClick={() => setLanguage("en")}>EN</button>
            <button onClick={() => setLanguage("mk")}>MK</button>
            <button onClick={() => setLanguage("al")}>AL</button>
          </div>
        </div>
      </div>
      <div>c 2022 Copyright.VibeStrings</div>
    </footer>
  );
}
