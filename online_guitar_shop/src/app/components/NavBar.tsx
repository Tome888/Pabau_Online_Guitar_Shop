"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-[100%] flex justify-between items-center pl-25 pr-25 pt-10">
      <Link href={"/"}>
        <img src="Logo.svg" alt="vibe strings" />
      </Link>
    </nav>
  );
}
