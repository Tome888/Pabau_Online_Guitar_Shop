"use client";

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
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="mt-6 flex gap-2 flex-wrap justify-center items-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-3 py-1 rounded ${
              isActive
                ? "bg-white text-gray-800 font-bold"
                : "bg-gray-600 text-white hover:bg-gray-500"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
