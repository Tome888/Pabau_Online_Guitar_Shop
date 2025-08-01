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
    <div className="w-full flex flex-col items-center justify-start bg-gray-950">
      {/* Musicians display */}
      <div className="w-full flex items-center justify-center flex-wrap gap-6 py-6">
        {visibleMusicians.map((mus, idx) => (
          <MusicianCard
            key={idx}
            imgUrl={mus.musicianImage}
            nameMusician={mus.name}
          />
        ))}
      </div>

      {/* Pagination circles */}
      <div className="flex gap-3 pb-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-3 h-3 rounded-full ${
              currentPage === idx ? "bg-white" : "bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
