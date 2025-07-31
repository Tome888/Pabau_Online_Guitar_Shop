// "use client";

// import { gql, useQuery } from "@apollo/client";
// import { useParams } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// import GuitarCard from "../cards/GuitarCard";
// import FilterInput from "../micro_elements/FilterInput";
// import PaginationInfo from "../micro_elements/PaginationInfo";
// import PaginationControls from "../micro_elements/PaginationControls";
// import SearchInput from "../micro_elements/SearchInput";

// // const SEARCH_MODELS = gql`
// //   query SearchModels($brandId: String!, $name: String!) {
// //     searchModels(brandId: $brandId, name: $name) {
// //       id
// //       name
// //       type
// //       image
// //       description
// //       price
// //     }
// //   }
// // `;
// const SEARCH_MODELS = gql`
//   query SearchModels($brandId: String!, $name: String!) {
//     searchModels(brandId: $brandId, name: $name) {
//       id
//       name
//       type
//       image
//       description
//       price
//     }
//   }
// `;
// type GuitarModel = {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   type: string;
//   __typename: string;
// };

// export default function ModelsList() {
//   const params = useParams();
//   const brandId = params.brandId as string;

//   const [filterInput, setFilerInput] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [arrTypes, setArrTypes] = useState<string[]>([]);

//   const { data, loading, error } = useQuery(SEARCH_MODELS, {
//     variables: {
//       brandId,
//       name: "",
//     },
//     skip: !brandId,
//   });

//   const [page, setPage] = useState(1);
//   const itemsPerPage = 6;

//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const scrollCooldown = useRef(false);

//   useEffect(() => {
//     if (!data) return;

//     const uniqueTypes = [
//       ...new Set(
//         data.searchModels
//           .map((model: GuitarModel) => model.type)
//           .filter(Boolean)
//       ),
//     ];

//     setArrTypes(uniqueTypes as string[]);
//   }, [data]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const filteredModels =
//     data?.searchModels?.filter((model: GuitarModel) => {
//       const matchesType = filterInput === "" || model.type === filterInput;
//       const matchesSearch =
//         searchInput === "" ||
//         model.name.toLowerCase().includes(searchInput.toLowerCase());

//       return matchesType && matchesSearch;
//     }) || [];

//   const start = (page - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   const pagedModels = filteredModels.slice(start, end);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const onWheel = (e: WheelEvent) => {
//       if (scrollCooldown.current) return;

//       scrollCooldown.current = true;
//       setTimeout(() => (scrollCooldown.current = false), 300);

//       if (e.deltaY > 0) {
//         setPage((prev) => {
//           const maxPage = Math.ceil(filteredModels.length / itemsPerPage);
//           return prev < maxPage ? prev + 1 : prev;
//         });
//       } else {
//         setPage((prev) => (prev > 1 ? prev - 1 : prev));
//       }
//     };

//     container.addEventListener("wheel", onWheel);
//     return () => container.removeEventListener("wheel", onWheel);
//   }, [filteredModels.length]);

//   return (
//     <section className="bg-gray-500 p-4">
//       <h2 className="text-xl font-semibold mb-4">
//         Check out the <span>Selection</span>
//       </h2>

//       {arrTypes.length > 0 && (
//         <FilterInput
//           field={filterInput}
//           setFiled={setFilerInput}
//           arrTypes={arrTypes}
//         />
//       )}

//       <SearchInput searchFilter={searchInput} setSearch={setSearchInput} />

//       {pagedModels.length === 0 ? (
//         <p>No models found.</p>
//       ) : (
//         <div
//           ref={scrollContainerRef}
//           className="flex flex-wrap justify-start items-start p-3 w-full gap-4 overflow-y-auto max-h-[700px]"
//         >
//           {pagedModels.map((model: GuitarModel) => (
//             <GuitarCard
//               key={model.id}
//               modelId={model.id}
//               modelImg={model.image}
//               modelName={model.name}
//               modelPrice={model.price}
//             />
//           ))}
//         </div>
//       )}

//       <PaginationInfo
//         total={filteredModels.length}
//         start={start}
//         count={pagedModels.length}
//       />

//       <PaginationControls
//         currentPage={page}
//         totalItems={filteredModels.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={setPage}
//       />
//     </section>
//   );
// }
// =============WORKING ONE=================
// "use client";

// import { gql, useQuery } from "@apollo/client";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// import GuitarCard from "../cards/GuitarCard";
// import FilterInput from "../micro_elements/FilterInput";
// import PaginationInfo from "../micro_elements/PaginationInfo";
// import PaginationControls from "../micro_elements/PaginationControls";
// import SearchInput from "../micro_elements/SearchInput";

// const SEARCH_MODELS = gql`
//   query SearchModels($brandId: String!, $name: String!) {
//     searchModels(brandId: $brandId, name: $name) {
//       id
//       name
//       type
//       image
//       description
//       price
//     }
//   }
// `;
// type GuitarModel = {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   type: string;
//   __typename: string;
// };

// export default function ModelsList() {
//   const params = useParams();
//   const brandId = params.brandId as string;
//   const [filterInput, setFilerInput] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [arrTypes, setArrTypes] = useState<string[]>([]);

//   const { data, loading, error } = useQuery(SEARCH_MODELS, {
//     variables: {
//       brandId,
//       name: "",
//     },
//     skip: !brandId,
//   });

//   const [page, setPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     if (!data) return;

//     console.log(data);

//     const uniqueTypes = [
//       ...new Set(
//         data.searchModels
//           .map((model: GuitarModel) => model.type)
//           .filter(Boolean)
//       ),
//     ];

//     setArrTypes(uniqueTypes as string[]);
//   }, [data]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Combine type and search filtering
//   const filteredModels =
//     data?.searchModels?.filter((model: GuitarModel) => {
//       const matchesType = filterInput === "" || model.type === filterInput;
//       const matchesSearch =
//         searchInput === "" ||
//         model.name.toLocaleLowerCase().includes(searchInput);

//       return matchesType && matchesSearch;
//     }) || [];

//   const start = (page - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   const pagedModels = filteredModels.slice(start, end);

//   return (
//     <section className="bg-gray-500 p-4">
//       <h2 className="text-xl font-semibold mb-4">
//         Check out the <span>Selection</span>
//       </h2>

//       {/* Filter input for types (only if types exist) */}
//       {arrTypes.length > 0 && (
//         <FilterInput
//           field={filterInput}
//           setFiled={setFilerInput}
//           arrTypes={arrTypes}
//         />
//       )}

//       {/* Search input for name */}
//       <SearchInput searchFilter={searchInput} setSearch={setSearchInput} />

//       {pagedModels.length === 0 ? (
//         <p>No models found.</p>
//       ) : (
//         <div className="flex flex-wrap justify-start items-start p-3 w-full gap-4">
//           {pagedModels.map((model: GuitarModel) => (
//             <GuitarCard
//               key={model.id}
//               modelId={model.id}
//               modelImg={model.image}
//               modelName={model.name}
//               modelPrice={model.price}
//             />
//           ))}
//         </div>
//       )}

//       <PaginationInfo
//         total={filteredModels.length}
//         start={start}
//         count={pagedModels.length}
//       />

//       <PaginationControls
//         currentPage={page}
//         totalItems={filteredModels.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={setPage}
//       />
//     </section>
//   );
// }
// =============WORKING ONE=================

"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import GuitarCard from "../cards/GuitarCard";
import FilterInput from "../micro_elements/FilterInput";
import PaginationInfo from "../micro_elements/PaginationInfo";
import PaginationControls from "../micro_elements/PaginationControls";
import SearchInput from "../micro_elements/SearchInput";

const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      type
      image
      description
      price
    }
  }
`;

type GuitarModel = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  __typename: string;
};

export default function ModelsList() {
  const params = useParams();
  const brandId = params.brandId as string;

  // ALL STATE AND REFS FIRST
  const [filterInput, setFilerInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [arrTypes, setArrTypes] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollCooldown = useRef(false);

  const itemsPerPage = 6;

  // QUERY HOOK
  const { data, loading, error } = useQuery(SEARCH_MODELS, {
    variables: {
      brandId,
      name: "",
    },
    skip: !brandId,
  });

  // CALCULATE FILTERED MODELS BEFORE EFFECTS (to ensure stable dependency)
  const filteredModels =
    data?.searchModels?.filter((model: GuitarModel) => {
      const matchesType = filterInput === "" || model.type === filterInput;
      const matchesSearch =
        searchInput === "" ||
        model.name.toLowerCase().includes(searchInput.toLowerCase());

      return matchesType && matchesSearch;
    }) || [];

  // ALL EFFECTS TOGETHER
  useEffect(() => {
    if (!data) return;

    const uniqueTypes = [
      ...new Set(
        data.searchModels
          .map((model: GuitarModel) => model.type)
          .filter(Boolean)
      ),
    ];

    setArrTypes(uniqueTypes as string[]);
  }, [data]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (scrollCooldown.current) return;

      scrollCooldown.current = true;
      setTimeout(() => (scrollCooldown.current = false), 300);

      if (e.deltaY > 0) {
        setPage((prev) => {
          const maxPage = Math.ceil(filteredModels.length / itemsPerPage);
          return prev < maxPage ? prev + 1 : prev;
        });
      } else {
        setPage((prev) => (prev > 1 ? prev - 1 : prev));
      }
    };

    container.addEventListener("wheel", onWheel);
    return () => container.removeEventListener("wheel", onWheel);
  }, [filteredModels.length, itemsPerPage]); // Added itemsPerPage to dependencies

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [filterInput, searchInput]);

  // EARLY RETURNS AFTER ALL HOOKS
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // DERIVED VALUES
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pagedModels = filteredModels.slice(start, end);

  return (
    <section className="bg-gray-500 p-4">
      <h2 className="text-xl font-semibold mb-4">
        Check out the <span>Selection</span>
      </h2>

      {arrTypes.length > 0 && (
        <FilterInput
          field={filterInput}
          setFiled={setFilerInput}
          arrTypes={arrTypes}
        />
      )}

      <SearchInput searchFilter={searchInput} setSearch={setSearchInput} />

      {pagedModels.length === 0 ? (
        <p>No models found.</p>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex flex-wrap justify-start items-start p-3 w-full gap-4 overflow-y-auto max-h-[700px]"
        >
          {pagedModels.map((model: GuitarModel) => (
            <GuitarCard
              key={model.id}
              modelId={model.id}
              modelImg={model.image}
              modelName={model.name}
              modelPrice={model.price}
            />
          ))}
        </div>
      )}

      <PaginationInfo
        total={filteredModels.length}
        start={start}
        count={pagedModels.length}
      />

      <PaginationControls
        currentPage={page}
        totalItems={filteredModels.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
      />
    </section>
  );
}
