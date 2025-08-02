"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

import TabSection from "@/app/components/page_components/TabSection";
import GuitarSpecsHero from "@/app/components/page_components/GuitarSpecsHero";
import Loading from "@/app/components/suspense/Loading";
import { useLanguage } from "@/app/providers/LanguageContext";

import specs from "../../../../translations/specs";
import ErrComponent from "@/app/components/suspense/ErrComponent";
import ItemNotFound from "@/app/components/suspense/ItemNotFound";

const GUITAR_SPECS = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export default function GuitarPage() {
  const params = useParams();
  const brandId = params?.brandId as string;
  const modelId = params?.guitarId as string;
  const { language } = useLanguage();
  const t = specs[language];

  const { data, loading, error } = useQuery(GUITAR_SPECS, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });

  if (loading) return <Loading msg={t.loadingMsg} />;

  if (error) return <ErrComponent errMsg={error.message} />;

  if (!data?.findUniqueModel)
    return <ItemNotFound msgOne={t.modelNotFound} msgTwo={t.badParams} />;
  const model = data.findUniqueModel;

  return (
    <main>
      <GuitarSpecsHero imgUrl={model.image} nameModle={model.name} />

      {data.findUniqueModel ? (
        <TabSection modelData={data.findUniqueModel} />
      ) : (
        <p className="spinner"></p>
      )}
    </main>
  );
}
