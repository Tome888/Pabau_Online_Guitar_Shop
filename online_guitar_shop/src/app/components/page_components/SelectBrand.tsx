// "use client";

// import { gql, useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const GET_BRANDS = gql`
//   query {
//     findAllBrands {
//       id
//       name
//       origin
//       image
//     }
//   }
// `;

// type Brand = {
//   id: string;
//   image: string;
//   name: string;
//   origin: string;
//   __typename: "Brand";
// };

// export default function SelectBrand() {
//   const { data, loading, error } = useQuery(GET_BRANDS);
//   const [brandsArr, setBrandArr] = useState<Brand[] | []>([]);
//   const router = useRouter();

//   useEffect(() => {
//     if (data) {
//       console.log(data);
//       setBrandArr(data.findAllBrands);
//     }
//   }, [data]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   return (
//     <section className=" w-[100%] flex-col justify-center items-center border border-amber-800">
//       <h2>
//         Featuring the <span>Best Brands</span>
//       </h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
//         nihil?
//       </p>

//       <div className="flex flex-wrap w-full">
//         {brandsArr &&
//           brandsArr.map((brand) => (
//             <div
//               className="relative w-[20%] h-[100px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               key={brand.id}
//               onClick={() => router.push(`/${brand.id}`)}
//             >
//               <Image
//                 src={brand.image}
//                 alt={brand.name}
//                 fill
//                 className="object-contain h-auto w-[150px] filter grayscale opacity-55"
//                 sizes="(max-width: 768px) 100vw, 150px"
//                 priority={true}
//               />
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// }

// components/SelectBrand.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useBrandContext } from "@/app/providers/BrandContext";

export default function SelectBrand() {
  const router = useRouter();
  const { brands, loading, error } = useBrandContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="w-full flex-col justify-center items-center border border-amber-800">
      <h2>
        Featuring the <span>Best Brands</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        nihil?
      </p>

      <div className="flex flex-wrap w-full">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => router.push(`/${brand.id}`)}
            className="relative w-[20%] h-[100px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-contain h-auto w-[150px] filter grayscale opacity-55"
              sizes="(max-width: 768px) 100vw, 150px"
              priority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
