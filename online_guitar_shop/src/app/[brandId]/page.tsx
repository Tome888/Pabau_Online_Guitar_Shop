"use client";

import { Suspense } from "react";
import GuitarSelection from "../components/page_components/GuitarSelection";
import GuitarHero from "../components/page_components/GuitarHero";

export default function BrandPage() {
  return (
    <main>
      <GuitarHero />
      <Suspense fallback={<div className="spinner"></div>}>
        <GuitarSelection />
      </Suspense>
    </main>
  );
}
