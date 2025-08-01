import { Specs } from "../page_components/TabSection";

interface SpecsData {
  dataSpecs: Specs;
  descModel: string;
}

export default function SpecsTab({ dataSpecs, descModel }: SpecsData) {
  return (
    <div className="w-[100%] flex flex-col items-start justify-start bg-gray-950">
      <p>{descModel}</p>

      <div>• Body Wood: {dataSpecs.bodyWood}</div>
      <div>• Neck Wood: {dataSpecs.neckWood}</div>
      <div>• Fingerboard: {dataSpecs.fingerboardWood}</div>
      <div>• Pickups: {dataSpecs.pickups}</div>
      <div>• Tunners: {dataSpecs.tuners}</div>
      <div>• Scale Lenght: {dataSpecs.scaleLength}</div>
      <div>• Bridge: {dataSpecs.bridge}</div>
    </div>
  );
}
