// "use client";

// import TabSection from "@/app/components/page_components/TabSection";
// import { gql } from "@apollo/client";
// import { useParams } from "next/navigation";

// export default function GuitarPage() {
//   const params = useParams();
//   return (
//     <main>
//       <h2>Guitar Page</h2>

//       <TabSection />
//     </main>
//   );
// }

"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import TabSection from "@/app/components/page_components/TabSection";

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
    skip: !brandId || !modelId, // ✅ fetch only when both exist
  });

  useEffect(() => {
    console.log("brandId:", brandId);
    console.log("modelId:", modelId);
    console.log("data:", data);
    console.log("error:", error);
  }, [brandId, modelId, data, error]);

  if (!brandId || !modelId) return <p>Missing URL parameters</p>;
  if (loading) return <p>Loading guitar data...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.findUniqueModel) return <p>Model not found.</p>;

  const model = data.findUniqueModel;

  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">{model.name}</h2>
      <img src={model.image} alt={model.name} className="w-64 rounded mb-4" />
      <p className="mb-4">{model.description}</p>
      <p className="font-semibold text-lg">Price: ${model.price}</p>

      <h3 className="mt-6 text-xl font-bold">Specifications</h3>
      <ul className="list-disc ml-6">
        <li>Body Wood: {model.specs.bodyWood}</li>
        <li>Neck Wood: {model.specs.neckWood}</li>
        <li>Fingerboard Wood: {model.specs.fingerboardWood}</li>
        <li>Pickups: {model.specs.pickups}</li>
        <li>Tuners: {model.specs.tuners}</li>
        <li>Scale Length: {model.specs.scaleLength}</li>
        <li>Bridge: {model.specs.bridge}</li>
      </ul>

      {model.musicians?.length > 0 && (
        <>
          <h3 className="mt-6 text-xl font-bold">Famous Musicians</h3>
          <ul className="list-disc ml-6">
            {model.musicians.map((m: any, i: any) => (
              <li key={i}>
                {m.name} – {m.bands?.join(", ")}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* <TabSection model={model} /> */}
    </main>
  );
}
