// "use client";

// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// export default function NavBar() {
//   const params = useParams();

//   const showBackToList = params.brandId && params.guitarId;
//   const showBackToHome = params.brandId && !params.guitarId;

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 frostedGlass shadow-md border-b border-gray-200">
//       <div className="flex items-start gap-4 flex-col">
//         {showBackToList && (
//           <Link href={`/${params.brandId}`}>
//             <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
//               <ChevronLeft />
//               Back to List
//             </button>
//           </Link>
//         )}

//         {showBackToHome && (
//           <Link href="/">
//             <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
//               <ChevronLeft />
//               Back to Home
//             </button>
//           </Link>
//         )}

//         <Link href="/">
//           <img src="/Logo.svg" alt="VibeStrings Logo" className="h-10 w-auto" />
//         </Link>
//       </div>
//     </nav>
//   );
// }

"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <-- import Image
import { useParams } from "next/navigation";

export default function NavBar() {
  const params = useParams();

  const showBackToList = params.brandId && params.guitarId;
  const showBackToHome = params.brandId && !params.guitarId;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 frostedGlass shadow-md border-b border-gray-200">
      <div className="flex items-start gap-4 flex-col">
        {showBackToList && (
          <Link href={`/${params.brandId}`}>
            <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
              <ChevronLeft />
              Back to List
            </button>
          </Link>
        )}

        {showBackToHome && (
          <Link href="/">
            <button className="text-sm px-4 py-2 hover:bg-gray-300 rounded-md flex justify-start items-center gap-4">
              <ChevronLeft />
              Back to Home
            </button>
          </Link>
        )}

        <Link href="/">
          <Image
            src="/Logo.png"
            alt="VibeStrings Logo"
            width={130}
            height={40}
            priority
            style={{ height: "auto", width: "auto" }}
            className="h-10"
          />
        </Link>
      </div>
    </nav>
  );
}
