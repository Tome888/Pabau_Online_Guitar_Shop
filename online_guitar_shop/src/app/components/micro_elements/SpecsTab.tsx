import { Specs } from "../page_components/TabSection";

interface SpecsData {
  dataSpecs: Specs;
  descModel: string;
}

export default function SpecsTab({ dataSpecs, descModel }: SpecsData) {
  return (
    <div className="w-[100%] gap-4 flex flex-col items-start justify-start pt-10 pb-40 pl-24 pr-24">
      <p className="text-bigger">{descModel}</p>

      <div className="text-bigger">
        <div>• Body Wood: {dataSpecs.bodyWood}</div>
        <div>• Neck Wood: {dataSpecs.neckWood}</div>
        <div>• Fingerboard: {dataSpecs.fingerboardWood}</div>
        <div>• Pickups: {dataSpecs.pickups}</div>
        <div>• Tunners: {dataSpecs.tuners}</div>
        <div>• Scale Lenght: {dataSpecs.scaleLength}</div>
        <div>• Bridge: {dataSpecs.bridge}</div>
      </div>
    </div>
  );
}
