"use client";

import BlackHeroSec from "./components/page_components/BlackHeroSec";
import HeroSection from "./components/page_components/HeroSection";
import PhonesSection from "./components/page_components/PhonesSection";
import SelectBrand from "./components/page_components/SelectBrand";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectBrand />
      <BlackHeroSec />
      <PhonesSection />
    </main>
  );
}
