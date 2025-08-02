"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import { useState } from "react";
import shop from "../../../../translations/shop";
import { ChevronDown, ChevronUp, FunnelPlus } from "lucide-react";

interface FilterInputProps {
  field: string;
  setFiled: (str: string) => void;
  arrTypes: string[] | [];
}

export default function FilterInput({
  field,
  setFiled,
  arrTypes,
}: FilterInputProps) {
  const [openFilter, setOpenFilter] = useState(false);
  const { language } = useLanguage();
  const t = shop[language];

  // setting the filter
  const handleFilterSelect = (gType: string) => {
    setFiled(gType);
    setOpenFilter(false);
  };
  // clearing the filter

  const handleClearFilter = () => {
    setFiled("");
    setOpenFilter(false);
  };

  const isActive = field !== "";

  return (
    <div className="relative w-fit">
      <div
        className={`flex gap-2 justify-evenly items-center w-[350px] border cursor-pointer p-2 transition-colors duration-200
          ${isActive ? "border-orange-200 text-[#FF8C60]" : "border-gray-200"}
          hover:border-orange-500 hover:text-[#FF8C60]`}
        onClick={() => setOpenFilter(!openFilter)}
      >
        <FunnelPlus />
        <p>
          {t.filter}: {field || t.none}
        </p>
        {openFilter ? <ChevronUp /> : <ChevronDown />}
      </div>

      {arrTypes[0] && openFilter && (
        <div className="absolute top-full left-0 z-50 flex flex-col w-full border hover:text-[#FF8C60] bg-white shadow-md mt-1 rounded-lg border-gray-200">
          <div
            className="text-xl text-gray-950 cursor-pointer hover:bg-orange-100 hover:text-[#FF8C60] p-2 transition-colors duration-150"
            onClick={handleClearFilter}
          >
            {t.none}
          </div>
          {arrTypes.map((gType, idx) => {
            return (
              <div
                onClick={() => handleFilterSelect(gType)}
                key={idx}
                className="text-xl rounded-lg text-gray-950 cursor-pointer hover:bg-orange-100 hover:text-[#FF8C60] p-2 transition-colors duration-150"
              >
                {gType}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
