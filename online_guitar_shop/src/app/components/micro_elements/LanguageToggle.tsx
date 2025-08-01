"use client";

import { useLanguage } from "@/app/providers/LanguageContext";

const languages: ("en" | "mk" | "al")[] = ["mk", "en", "al"];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-3">
      {languages.map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-full font-semibold uppercase transition-all duration-200 transform shadow-sm ${
              isActive
                ? "bg-black text-white scale-110 shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 scale-95"
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
