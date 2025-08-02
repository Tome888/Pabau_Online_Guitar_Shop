"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import shop from "../../../../translations/shop";
import { useParams } from "next/navigation";
import { useBrandContext } from "@/app/providers/BrandContext";

export default function GuitarHero() {
  const { language } = useLanguage();
  const t = shop[language];
  const { brandId } = useParams();
  const { brands, loading } = useBrandContext();

  const selectedBrand = brands.find((brand) => brand.id === brandId);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full hero gap-2">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 text-center md:text-left pl-15">
        <h2 className="text-[40px] font-bold text-zinc-950 text-center">
          {t.titleHero}
        </h2>
        <p className="text-lg text-[rgba(102, 102, 102, 1)] w-full text-center">
          {t.underTitle}
        </p>
      </div>

      <div className="logoGradiant flex items-center justify-center w-full md:w-2/3 h-[300px] relative">
        {loading && <div className="spinner"></div>}

        {!loading && selectedBrand && (
          <img
            src={selectedBrand.image}
            alt={`${selectedBrand.name} logo`}
            className="max-h-[60%] max-w-[60%] object-contain filter grayscale opacity-55"
          />
        )}
      </div>
    </section>
  );
}
