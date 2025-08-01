import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import { Shapes, Truck, Wallet } from "lucide-react";

export default function BlackHeroSec() {
  const { language } = useLanguage();

  const t = home[language];
  return (
    <section className="w-full bg-[#121212] flex flex-col justify-center items-center border gap-20 pt-25  pb-25">
      <h2 className="text-[44px] text-amber-50">{t.blackSecTitle}</h2>
      <div className="w-full flex justify-evenly items-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex flex-col items-center justify-center">
            <Shapes color="#FFFFFF" />
          </div>
          <h4 className="text-[#FFFFFF] tracking-[0.08em] font-bold text-[18px] uppercase">
            {t.badges[0].title}
          </h4>
          <p className="text-[#666666] w-[300px] text-center text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex flex-col items-center justify-center">
            <Truck color="#FFFFFF" />
          </div>
          <h4 className="text-[#FFFFFF] tracking-[0.08em] font-bold text-[18px] uppercase">
            {t.badges[1].title}
          </h4>
          <p className="text-[#666666] w-[300px] text-center text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex flex-col items-center justify-center">
            <Wallet color="#FFFFFF" />
          </div>
          <h4 className="text-[#FFFFFF] tracking-[0.08em] font-bold text-[18px] uppercase">
            {t.badges[2].title}
          </h4>
          <p className="text-[#666666] w-[300px] text-center text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>
      </div>
    </section>
  );
}
