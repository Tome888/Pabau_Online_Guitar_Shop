"use client";

import { useState, useEffect } from "react";

interface SearchInputProps {
  searchFilter: string;
  setSearch: (str: string) => void;
}

export default function SearchInput({
  searchFilter,
  setSearch,
}: SearchInputProps) {
  // Local state to handle input value for better UX
  const [_, setInputValue] = useState(searchFilter);

  // Update local state when searchFilter prop changes (from URL)
  useEffect(() => {
    setInputValue(searchFilter);
  }, [searchFilter]);

  // Handle input change with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Debounce the search update
    const timeoutId = setTimeout(() => {
      setSearch(value.trim().toLowerCase());
    }, 300);

    // Cleanup timeout on next change
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="w-[250px] flex justify-evenly items-center border border-gray-400">
      <p>🔎</p>

      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search by Name"
        // value={inputValue}
      />
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";

// interface SearchInputProps {
//   // searchFilter: string;
//   setSearch: (str: string) => void;
// }

// export default function SearchInput({
//   // searchFilter,
//   setSearch,
// }: SearchInputProps) {
//   const [inputValue, setInputValue] = useState("");

//   // Update search with debounce
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setSearch(inputValue.trim().toLowerCase());
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [inputValue, setSearch]);

//   return (
//     <div className="w-[250px] flex justify-evenly items-center border border-gray-400">
//       <p>🔎</p>
//       <input
//         onChange={(e) => setInputValue(e.target.value)}
//         type="text"
//         placeholder="Search by Name"
//       />
//     </div>
//   );
// }
