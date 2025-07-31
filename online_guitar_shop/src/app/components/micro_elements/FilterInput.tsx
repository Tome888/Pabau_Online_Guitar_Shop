"use client";

import { useState } from "react";

interface FilterinputProps {
  field: string;
  setFiled: (str: string) => void;
  arrTypes: string[] | [];
}

export default function FilterInput({
  field,
  setFiled,
  arrTypes,
}: FilterinputProps) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <div
        className="flex justify-evenly items-center w-[200px] border border-amber-50"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <p>⚙️</p>

        <p>Filter by type: {field}</p>

        <p>{openFilter ? "▼" : "▲"}</p>
      </div>

      {arrTypes[0] && openFilter && (
        <div className=" flex flex-col w=[100px] border border-amber-950">
          <div
            className="text-3xl text-gray-950"
            onClick={() => {
              setFiled("");
              setOpenFilter(!openFilter);
            }}
          >
            None
          </div>
          {arrTypes.map((gType, idx) => {
            return (
              <div
                onClick={() => {
                  setFiled(gType);
                  setOpenFilter(!openFilter);
                }}
                key={idx}
                className="text-3xl text-gray-950"
              >
                {gType}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
