"use client";

import { useState } from "react";
import MusicianCard from "../cards/MusicianCard";
import { Musician } from "../page_components/TabSection";

interface MusicianTabProps {
  musiciansArr: Musician[];
}

export default function MusicianTab({ musiciansArr }: MusicianTabProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(musiciansArr.length / itemsPerPage);

  const startIdx = currentPage * itemsPerPage;
  const visibleMusicians = musiciansArr.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  return (
    <div className="w-full flex flex-col items-center justify-start ">
      <div className="w-full flex items-center justify-center flex-wrap gap-6 py-6">
        {visibleMusicians.map((mus, idx) => (
          // added custom fallback image component for the same reason as the other images
          <MusicianCard
            key={idx}
            imgUrl={mus.musicianImage}
            nameMusician={mus.name}
          />
        ))}
      </div>

      <div className="flex items-end gap-3 pb-6 h-10">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`transition-all duration-300 cursor-pointer ease-in-out rounded-full bg-[#D9D9D9] ${
              currentPage === idx ? "w-6 h-6" : "w-3 h-3"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
