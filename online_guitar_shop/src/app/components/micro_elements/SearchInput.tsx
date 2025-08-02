"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import { Search } from "lucide-react";

interface SearchInputProps {
  setSearch: (str: string) => void;
}

export default function SearchInput({ setSearch }: SearchInputProps) {
  const { language } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Added debounce so the search is not imidiet
    const timeoutId = setTimeout(() => {
      setSearch(value.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="flex gap-2 justify-between items-center w-[350px] border cursor-pointer p-2 transition-colors duration-200 border-gray-200">
      <Search />

      <input
        className="w-[90%]"
        onChange={handleInputChange}
        type="text"
        placeholder={
          language === "mk"
            ? "Пребарај по име"
            : language === "al"
            ? "Kërko sipas emrit"
            : "Search by Name"
        }
      />
    </div>
  );
}
