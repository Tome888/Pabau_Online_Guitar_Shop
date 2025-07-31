// "use client";

// import GuitarSelection from "../components/page_components/GuitarSelection";

// export default function BrandPage() {
//   return (
//     <main>
//       <h2>BRAND PAGE</h2>

//       <GuitarSelection />
//     </main>
//   );
// }

"use client";

import { Suspense } from "react";
import GuitarSelection from "../components/page_components/GuitarSelection";

export default function BrandPage() {
  return (
    <main>
      <h2>BRAND PAGE</h2>

      <Suspense fallback={<div className="p-4">Loading guitars...</div>}>
        <GuitarSelection />
      </Suspense>
    </main>
  );
}
