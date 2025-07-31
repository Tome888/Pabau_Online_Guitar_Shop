// "use client";
// import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// const GET_COUNTRIES = gql`
//   query {
//     countries {
//       code
//       name
//       emoji
//     }
//   }
// `;
// export default function Home() {
//   const { data, loading, error } = useQuery(GET_COUNTRIES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
//   );
// }

"use client";

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

export default function Home() {
  // Always call hooks first, no conditionals
  const { data, loading, error } = useQuery(GET_BRANDS);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{/* render data */}</div>;
}
