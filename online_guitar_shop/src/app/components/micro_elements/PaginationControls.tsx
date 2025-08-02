"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type PaginationControlsProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationControlsProps) {
  //calc the number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="mt-6 flex gap-2 flex-wrap justify-center items-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 p-1 border border-[#E8E8E8] text-zinc-400 rounded disabled:opacity-50"
      >
        <ChevronLeft />
      </button>

      {/* make a array to render pages */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-3 py-1 bg-white rounded ${
              isActive
                ? "font-bold border text-[#FF6428] border-[#FF6428]"
                : " text-zinc-400 border border-[#E8E8E8] hover:text-[#FF6428] hover:border-[#FF6428]"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 p-1 border border-[#E8E8E8] text-zinc-400 rounded disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
