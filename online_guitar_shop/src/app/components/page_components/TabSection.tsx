// "use client";

// import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";

// const GUITAR_SPECS = gql`
//   query {
//     findUniqueModel(brandId: "1", modelId: "f1") {
//       id
//       name
//       type
//       image
//       description
//       price
//       specs {
//         bodyWood
//         neckWood
//         fingerboardWood
//         pickups
//         tuners
//         scaleLength
//         bridge
//       }
//       musicians {
//         name
//         musicianImage
//         bands
//       }
//     }
//   }
// `;
// export default function TabSection() {

//   const { data, loading, error } = useQuery(GUITAR_SPECS);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return (
//     <section className="p-4 bg-gray-700">
//       <h3 className="text-xl font-bold mb-4 text-amber-900">Guitar Specs</h3>

//     </section>
//   );
// }
"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import React from "react";

const GUITAR_SPECS = gql`
  query FindUniqueModel($brandId: String!, $modelId: String!) {
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

export default function TabSection() {
  const params = useParams();
  console.log("Params:", params); // 👈 DEBUG

  const hasParams =
    typeof params?.brandId === "string" && typeof params?.modelId === "string";

  const { data, loading, error } = useQuery(GUITAR_SPECS, {
    variables: {
      brandId: params.brandId as string,
      modelId: params.modelId as string,
    },
    skip: !hasParams,
  });

  if (!hasParams) return <p>Waiting for route params...</p>;
  if (loading) return <p>Loading specs...</p>;
  if (error) return <p>Error loading specs: {error.message}</p>;
  if (!data?.findUniqueModel?.specs) return <p>No specs available.</p>;

  const specs = data.findUniqueModel.specs;

  return (
    <section>
      <h3>Specs</h3>
      <ul>
        <li>Body Wood: {specs.bodyWood}</li>
        <li>Neck Wood: {specs.neckWood}</li>
        <li>Fingerboard: {specs.fingerboardWood}</li>
      </ul>
    </section>
  );
}
