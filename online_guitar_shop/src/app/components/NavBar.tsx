"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NavBar() {
  const params = useParams();

  const showBackToList = params.brandId && params.guitarId;
  const showBackToHome = params.brandId && !params.guitarId;

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#f8f8f8] shadow">
      <div className="flex items-start gap-4 flex-col">
        {showBackToList && (
          <Link href={`/${params.brandId}`}>
            <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
              <ChevronLeft />
              Back to List
            </button>
          </Link>
        )}

        {showBackToHome && (
          <Link href="/">
            <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
              <ChevronLeft />
              Back to Home
            </button>
          </Link>
        )}

        <Link href="/">
          <img src="/Logo.svg" alt="VibeStrings Logo" className="h-10 w-auto" />
        </Link>
      </div>
    </nav>
  );
}
