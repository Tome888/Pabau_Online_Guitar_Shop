"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import TabSection from "@/app/components/page_components/TabSection";
import GuitarSpecsHero from "@/app/components/page_components/GuitarSpecsHero";

const GUITAR_SPECS = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export default function GuitarPage() {
  const params = useParams();
  const brandId = params?.brandId as string;
  const modelId = params?.guitarId as string; // ✅ FIXED

  const { data, loading, error } = useQuery(GUITAR_SPECS, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });

  useEffect(() => {
    console.log("brandId:", brandId);
    console.log("modelId:", modelId);
    console.log("data:", data);
    console.log("error:", error);
  }, [brandId, modelId, data, error]);

  // if (!brandId || !modelId)
  //   return <p className="text-amber-500">Missing URL parameters</p>;
  // if (loading) return <p className="text-blue-500">Loading guitar data...</p>;
  // if (error) return <p className="text-green-500">Error: {error.message}</p>;
  // if (!data?.findUniqueModel)
  //   return (
  //     <div className="flex flex-col items-center justify-center w-full p-8 text-gray-600 border border-dashed border-red-300 rounded-lg bg-red-50">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="w-16 h-16 mb-4 text-red-400"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //         strokeWidth={1.5}
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //         />
  //       </svg>
  //       <p className="text-xl font-semibold text-red-600">Model not found</p>
  //       <p className="text-sm text-gray-500">
  //         Please check the URL or try searching again.
  //       </p>
  //     </div>
  //   );

  if (!brandId || !modelId)
    return (
      <div className="flex flex-col items-center justify-center w-full p-20 text-amber-500">
        <div className="spinner mb-4" />
        <p className="text-xl font-semibold">Missing URL parameters</p>
      </div>
    );

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center w-full p-20 text-blue-500">
        <div className="spinner mb-4" />
        <p className="text-xl font-semibold">Loading guitar data...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center w-full p-20 text-green-500">
        <div className="spinner mb-4" />
        <p className="text-xl font-semibold">Error: {error.message}</p>
      </div>
    );

  if (!data?.findUniqueModel)
    return (
      <div className="flex flex-col items-center justify-center w-full p-20 text-gray-600 border border-dashed border-red-300 rounded-lg bg-red-50">
        <div className="spinner mb-4" />
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
        <p className="text-xl font-semibold text-red-600">Model not found</p>
        <p className="text-sm text-gray-500">
          Please check the URL or try searching again.
        </p>
      </div>
    );
  const model = data.findUniqueModel;

  return (
    <main>
      <GuitarSpecsHero imgUrl={model.image} nameModle={model.name} />

      {data.findUniqueModel ? (
        <TabSection modelData={data.findUniqueModel} />
      ) : (
        <p className="spinner"></p>
      )}
    </main>
  );
}
