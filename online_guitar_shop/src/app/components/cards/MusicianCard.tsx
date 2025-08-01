"use client";

import MusicianImage from "../micro_elements/MusicianImage";

interface MusicianCardProps {
  imgUrl: string;
  nameMusician: string;
}

export default function MusicianCard({
  imgUrl,
  nameMusician,
}: MusicianCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[200px] h-[200px] gap-2 p-2 bg-amber-100">
      {/* <img src={imgUrl} alt={nameMusician} className="w-[90%] h-[90%]" /> */}
      <MusicianImage src={imgUrl} alt={nameMusician} />
      <p className="text-gray-500">{nameMusician}</p>
    </div>
  );
}
