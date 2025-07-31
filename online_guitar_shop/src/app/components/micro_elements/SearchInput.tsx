"use client";

interface SearchInputProps {
  searchFilter: string;
  setSearch: (str: string) => void;
}

export default function SearchInput({
  searchFilter,
  setSearch,
}: SearchInputProps) {
  return (
    <div className="w-[250px] flex justify-evenly items-center border border-gray-400">
      <p>🔎</p>

      <input
        onChange={(e) => {
          setSearch(e.target.value.trim().toLocaleLowerCase());
        }}
        type="text"
        placeholder="Search by Name"
        value={searchFilter}
      />
    </div>
  );
}
