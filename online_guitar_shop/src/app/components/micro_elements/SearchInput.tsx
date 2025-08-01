"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchInputProps {
  searchFilter: string;
  setSearch: (str: string) => void;
}

export default function SearchInput({
  searchFilter,
  setSearch,
}: SearchInputProps) {
  const { language } = useLanguage();
  // Local state to handle input value for better UX
  const [_, setInputValue] = useState(searchFilter);

  // Update local state when searchFilter prop changes (from URL)
  useEffect(() => {
    setInputValue(searchFilter);
  }, [searchFilter]);

  // Handle input change with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Debounce the search update
    const timeoutId = setTimeout(() => {
      setSearch(value.trim().toLowerCase());
    }, 300);

    // Cleanup timeout on next change
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
