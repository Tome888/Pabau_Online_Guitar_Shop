"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

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

export default function GuitarSelection() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandId = params.brandId as string;

  // Get URL parameters safely
  const filterInput = searchParams?.get("filter") || "";
  const searchInput = searchParams?.get("search") || "";
  const page = parseInt(searchParams?.get("page") || "1", 10);

  // Internal state for types and refs
  const [arrTypes, setArrTypes] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollCooldown = useRef(false);

  const itemsPerPage = 6;

  // Function to update URL parameters
  const updateSearchParams = useCallback(
    (updates: { filter?: string; search?: string; page?: number }) => {
      const current = new URLSearchParams(searchParams.toString());

      // Update or remove parameters
      Object.entries(updates).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) {
          current.delete(key);
        } else {
          current.set(key, value.toString());
        }
      });

      // Always reset page to 1 when filter or search changes (unless page is explicitly set)
      if (
        ("filter" in updates || "search" in updates) &&
        !("page" in updates)
      ) {
        current.delete("page");
      }

      const newUrl = `${window.location.pathname}${
        current.toString() ? `?${current.toString()}` : ""
      }`;
      router.replace(newUrl, { scroll: false });
    },
    [searchParams, router]
  );

  // Handler functions
  const handleFilterChange = useCallback(
    (newFilter: string) => {
      updateSearchParams({ filter: newFilter });
    },
    [updateSearchParams]
  );

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      updateSearchParams({ search: newSearch });
    },
    [updateSearchParams]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      updateSearchParams({ page: newPage });
    },
    [updateSearchParams]
  );

  // QUERY HOOK
  const { data, loading, error } = useQuery(SEARCH_MODELS, {
    variables: {
      brandId,
      name: "",
    },
    skip: !brandId,
  });

  // CALCULATE FILTERED MODELS
  const filteredModels =
    data?.searchModels?.filter((model: GuitarModel) => {
      const matchesType = filterInput === "" || model.type === filterInput;
      const matchesSearch =
        searchInput === "" ||
        model.name.toLowerCase().includes(searchInput.toLowerCase());

      return matchesType && matchesSearch;
    }) || [];

  // Effect to set available types
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

  // Wheel scroll pagination effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (scrollCooldown.current) return;

      scrollCooldown.current = true;
      setTimeout(() => (scrollCooldown.current = false), 300);

      const maxPage = Math.ceil(filteredModels.length / itemsPerPage);

      if (e.deltaY > 0) {
        if (page < maxPage) {
          handlePageChange(page + 1);
        }
      } else {
        if (page > 1) {
          handlePageChange(page - 1);
        }
      }
    };

    container.addEventListener("wheel", onWheel);
    return () => container.removeEventListener("wheel", onWheel);
  }, [filteredModels.length, itemsPerPage, page, handlePageChange]);

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
          setFiled={handleFilterChange}
          arrTypes={arrTypes}
        />
      )}

      <SearchInput searchFilter={searchInput} setSearch={handleSearchChange} />

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
        onPageChange={handlePageChange}
      />
    </section>
  );
}
