"use client";

import { useParams, useRouter } from "next/navigation";
import ModelImage from "../micro_elements/ModelImage";

interface GuitarCardProps {
  modelId: string;
  modelImg: string;
  modelName: string;
  modelPrice: number;
}

export default function GuitarCard({
  modelId,
  modelImg,
  modelName,
  modelPrice,
}: GuitarCardProps) {
  const router = useRouter();
  const { brandId } = useParams();
  return (
    <div
      onClick={() => router.push(`/${brandId}/${modelId}`)}
      className=" w-[30%] flex flex-col justify-start items-start cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      {/* i made a component if the url fails then use a placeholder image, thats why the image seems slow loading */}
      <ModelImage src={modelImg} alt={modelName} />
      <h3 className="font-bold text-3xl">{modelName}</h3>
      <p>${modelPrice}</p>
    </div>
  );
}
