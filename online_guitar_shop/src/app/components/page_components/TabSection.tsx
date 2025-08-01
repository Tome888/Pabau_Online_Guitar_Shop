"use client";

import { useEffect, useState } from "react";
import SpecsTab from "../micro_elements/SpecsTab";
import MusicianTab from "../micro_elements/MusicianTab";
export interface Specs {
  __typename: string;
  bodyWood: string;
  neckWood: string;
  fingerboardWood: string;
  pickups: string;
  scaleLength: string;
  tuners: string;
  bridge: string;
}
export interface Musician {
  __typename: string;
  name: string;
  musicianImage: string;
  bands: string[];
}
interface ModelObjProps {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  specs: Specs;
  musicians: Musician[];
  __typename: string;
}

interface ModelProps {
  modelData: ModelObjProps;
}

export default function TabSection({ modelData }: ModelProps) {
  const [toggleTab, setToggleTab] = useState(true);

  useEffect(() => {
    console.log(modelData, "HELLO FROM TAB SECTION");
  }, [modelData]);

  return (
    <div className="w-[100%] bg-gray-400">
      <div className="flex items-center justify-center">
        <button
          onClick={() => setToggleTab(true)}
          className={`w-[50%] ${toggleTab && "border border-b-amber-500"}`}
        >
          Specifications
        </button>
        <button
          onClick={() => setToggleTab(false)}
          className={`w-[50%] ${!toggleTab && "border border-b-amber-500"}`}
        >
          Who plays it?
        </button>
      </div>
      {toggleTab && (
        <SpecsTab
          dataSpecs={modelData.specs}
          descModel={modelData.description}
        />
      )}
      {!toggleTab && <MusicianTab musiciansArr={modelData.musicians} />}
    </div>
  );
}
