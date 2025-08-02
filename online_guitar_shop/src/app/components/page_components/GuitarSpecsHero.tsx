"use client";

import ModelImage from "../micro_elements/ModelImage";

interface HeroProps {
  imgUrl: string;
  nameModle: string;
}

export default function GuitarSpecsHero({ imgUrl, nameModle }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full hero gap-2">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 text-center md:text-left pl-15">
        <h2 className="text-[40px] font-bold text-zinc-950 text-center">
          {nameModle}
        </h2>
      </div>

      <div className="logoGradiant flex items-center justify-center w-full md:w-2/3 h-[300px] relative">
        {/* again custom component to render fallback image */}
        <ModelImage customClass="specsHeroImage" src={imgUrl} alt={nameModle} />
      </div>
    </section>
  );
}
