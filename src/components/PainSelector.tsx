import HoverPart from "./HoverPart";
import handData, { PartData } from "@/data/partsData";

interface PainSelectorProps {
  onSelectPart: (part: string) => void;
}

const PainSelector: React.FC<PainSelectorProps> = ({ onSelectPart }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      {handData.map((part: PartData) => (
        <HoverPart
          key={part.partName}
          data={part}
          onSelectPart={onSelectPart}
        />
      ))}
    </div>
  );
};

export default PainSelector;
