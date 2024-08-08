import { useState } from "react";
import Image from "next/image";
import { PartData } from "@/data/partsData";

interface HoverPartProps {
  data: PartData;
  onSelectPart: (part: string) => void;
}

const HoverPart: React.FC<HoverPartProps> = ({ data, onSelectPart }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div>
      <div
        className="absolute selectable cursor-pointer"
        data-part={data.partName}
        style={data.style}
        onClick={() => onSelectPart(data.partName)}
        onMouseOver={() => setTooltipVisible(true)}
        onMouseOut={() => setTooltipVisible(false)}
      />
      {tooltipVisible && (
        <div>
          <Image
            src={`/images/${data.partName}.png`}
            alt={data.partName}
            layout="fill"
            className="image z-20"
            style={{ top: 0, left: 0, pointerEvents: "none" }}
          />
          <Image
            src={`/images/${data.partHighlightName}.png`}
            alt={data.partHighlightName}
            layout="fill"
            className="image z-20"
            style={{ top: 0, left: 0, pointerEvents: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default HoverPart;
