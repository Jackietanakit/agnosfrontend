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
        data-part={data.name}
        onClick={() => onSelectPart(data.name)}
        onMouseOver={() => setTooltipVisible(true)}
        onMouseOut={() => setTooltipVisible(false)}
      />
      {tooltipVisible && (
        <div>
          <Image
            src={`/images/${data.name}.png`}
            alt={data.name}
            layout="fill"
            className="image z-20"
            style={{ top: 0, left: 0, pointerEvents: "none" }}
          />
          <Image
            src={`/images/${data.highlightName}.png`}
            alt={data.highlightName}
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
