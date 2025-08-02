"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

import GuitarCard from "../cards/GuitarCard";
import FilterInput from "../micro_elements/FilterInput";
import PaginationInfo from "../micro_elements/PaginationInfo";
import PaginationControls from "../micro_elements/PaginationControls";
import SearchInput from "../micro_elements/SearchInput";
import { useLanguage } from "@/app/providers/LanguageContext";
import shop from "../../../../translations/shop";
import Loading from "../suspense/Loading";
import ErrComponent from "../suspense/ErrComponent";
import ItemNotFound from "../suspense/ItemNotFound";

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
  const { language } = useLanguage();
  const t = shop[language];

  // Getting the url params
  const filterInput = searchParams?.get("filter") || "";
  const searchInput = searchParams?.get("search") || "";
  const page = parseInt(searchParams?.get("page") || "1", 10);

  // Just keeping track of the types and some refs
  const [arrTypes, setArrTypes] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollCooldown = useRef(false);

  const itemsPerPage = 6;

  // updates the url params
  const updateSearchParams = useCallback(
    (updates: { filter?: string; search?: string; page?: number }) => {
      const current = new URLSearchParams(searchParams.toString());

      // update or remove paarm
      Object.entries(updates).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) {
          current.delete(key);
        } else {
          current.set(key, value.toString());
        }
      });

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

  // getting the models if we have
  const { data, loading, error } = useQuery(SEARCH_MODELS, {
    variables: {
      brandId,
      name: "",
    },
    skip: !brandId,
  });

  // calc the models filtered
  const filteredModels =
    data?.searchModels?.filter((model: GuitarModel) => {
      const matchesType = filterInput === "" || model.type === filterInput;
      const matchesSearch =
        searchInput === "" ||
        model.name.toLowerCase().includes(searchInput.toLowerCase());

      return matchesType && matchesSearch;
    }) || [];

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

  // BONUS TASK: SCROLL ITEMS
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

  if (loading) return <Loading msg={"Loading..."} />;
  if (error) return <ErrComponent errMsg={error.message} />;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pagedModels = filteredModels.slice(start, end);

  return (
    <section className="flex flex-col justify-center items-center pb-20 pt-20">
      <h2 className="text-xl text-[44px] font-bold text-zinc-950 mb-4">
        {t.selectSectionTitle}
      </h2>

      <div className="flex justify-end items-end w-full gap-4">
        <FilterInput
          field={filterInput}
          setFiled={handleFilterChange}
          arrTypes={arrTypes}
        />

        <SearchInput setSearch={handleSearchChange} />
      </div>
      {pagedModels.length === 0 ? (
        <ItemNotFound msgOne={t.notFound} msgTwo={t.adjust} />
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex flex-wrap justify-start pl-20 items-start p-3 w-full gap-6 overflow-y-auto max-h-[700px] min-h-[500px] mt-10"
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

      <div className="w-full flex justify-between items-center">
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
      </div>
    </section>
  );
}
