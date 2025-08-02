"use client";

import Link from "next/link";

interface ItemNotFoundProps {
  msgOne: string;
  msgTwo: string;
}

export default function ItemNotFound({ msgOne, msgTwo }: ItemNotFoundProps) {
  return (
    <div className="flex mt-50 mb-50 flex-col items-center justify-center w-full p-20 text-gray-600 border border-dashed border-red-300 rounded-lg bg-red-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mb-4 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-xl font-semibold text-red-600">{msgOne}</p>
      <p className="text-sm text-gray-500">{msgTwo}</p>

      <Link href={"/"}>Home</Link>
    </div>
  );
}
