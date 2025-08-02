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
    <div className="flex flex-col items-center justify-center w-[500px] h-[500px] gap-2 p-2 bg-[#FFEFE8]">
      {/* custom component for image fallback  */}
      <MusicianImage src={imgUrl} alt={nameMusician} />
      <p className="text-[#666666] text-bigger">{nameMusician}</p>
    </div>
  );
}
