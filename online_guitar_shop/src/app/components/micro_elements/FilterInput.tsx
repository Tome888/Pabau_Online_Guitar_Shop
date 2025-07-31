// "use client";

// import { useState } from "react";

// interface FilterinputProps {
//   field: string;
//   setFiled: (str: string) => void;
//   arrTypes: string[] | [];
// }

// export default function FilterInput({
//   field,
//   setFiled,
//   arrTypes,
// }: FilterinputProps) {
//   const [openFilter, setOpenFilter] = useState(false);

//   return (
//     <>
//       <div
//         className="flex justify-evenly items-center w-[200px] border border-amber-50"
//         onClick={() => setOpenFilter(!openFilter)}
//       >
//         <p>⚙️</p>

//         <p>Filter by type: {field}</p>

//         <p>{openFilter ? "▼" : "▲"}</p>
//       </div>

//       {arrTypes[0] && openFilter && (
//         <div className=" flex flex-col w=[100px] border border-amber-950">
//           <div
//             className="text-3xl text-gray-950"
//             onClick={() => {
//               setFiled("");
//               setOpenFilter(!openFilter);
//             }}
//           >
//             None
//           </div>
//           {arrTypes.map((gType, idx) => {
//             return (
//               <div
//                 onClick={() => {
//                   setFiled(gType);
//                   setOpenFilter(!openFilter);
//                 }}
//                 key={idx}
//                 className="text-3xl text-gray-950"
//               >
//                 {gType}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState } from "react";

interface FilterInputProps {
  field: string;
  setFiled: (str: string) => void;
  arrTypes: string[] | [];
}

export default function FilterInput({
  field,
  setFiled,
  arrTypes,
}: FilterInputProps) {
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterSelect = (gType: string) => {
    setFiled(gType);
    setOpenFilter(false);
  };

  const handleClearFilter = () => {
    setFiled("");
    setOpenFilter(false);
  };

  return (
    <>
      <div
        className="flex justify-evenly items-center w-[200px] border border-amber-50 cursor-pointer"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <p>⚙️</p>

        <p>Filter by type: {field}</p>

        <p>{openFilter ? "▼" : "▲"}</p>
      </div>

      {arrTypes[0] && openFilter && (
        <div className="flex flex-col w-[100px] border border-amber-950 bg-white">
          <div
            className="text-3xl text-gray-950 cursor-pointer hover:bg-gray-100 p-2"
            onClick={handleClearFilter}
          >
            None
          </div>
          {arrTypes.map((gType, idx) => {
            return (
              <div
                onClick={() => handleFilterSelect(gType)}
                key={idx}
                className="text-3xl text-gray-950 cursor-pointer hover:bg-gray-100 p-2"
              >
                {gType}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
