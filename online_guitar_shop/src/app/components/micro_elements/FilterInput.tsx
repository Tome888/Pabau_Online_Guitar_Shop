"use client";

import { useState } from "react";

export default function FilterInput() {
  const [typeGuitar, setTypeGuitar] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <div
        className="flex justify-evenly items-center w-[200px] border border-amber-50"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <p>⚙️</p>

        <p>Filter by type</p>

        <p>{openFilter ? "▼" : "▲"}</p>
      </div>
    </>
  );
}
