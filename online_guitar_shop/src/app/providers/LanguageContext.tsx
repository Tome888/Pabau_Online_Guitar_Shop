"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useMemo } from "react";

type Language = "mk" | "en" | "al";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = useMemo(() => {
    const lang = pathname?.split("/")[1];
    return lang === "mk" || lang === "al" || lang === "en" ? lang : "en";
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/") || "/");
  };

  return (
    <LanguageContext.Provider value={{ language: currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
