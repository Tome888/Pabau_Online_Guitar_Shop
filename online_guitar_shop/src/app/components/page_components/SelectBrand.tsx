"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useBrandContext } from "@/app/providers/BrandContext";
import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import Loading from "../suspense/Loading";
import ErrComponent from "../suspense/ErrComponent";

export default function SelectBrand() {
  const router = useRouter();
  //Im using context so i dont need to refetch the data if the user returns to the home page we have it cashed
  const { brands, loading, error } = useBrandContext();
  const { language } = useLanguage();
  const t = home[language];

  if (loading) return <Loading msg={"Loading..."} />;
  if (error) return <ErrComponent errMsg={error.message} />;

  return (
    <section className="w-full flex flex-col justify-center items-center gap-1 pt-25 pb-25">
      <h2 className="text-[44px] font-bold text-zinc-950 text-center">
        {t.brandSecTitle}
      </h2>
      <p className="text-lg text-[rgba(102, 102, 102, 1)] text-center mb-15">
        {t.smallBrandSecTitle}
      </p>

      <div className="flex flex-wrap items-center justify-center w-full gap-3">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => router.push(`/${brand.id}`)}
            className="relative w-[18%] h-[100px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-contain h-auto w-[150px] filter grayscale opacity-55"
              sizes="(max-width: 768px) 100vw, 150px"
              priority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
