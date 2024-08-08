import { useState, useEffect } from "react";
import { calculateVoronoiCells } from "../utils/calculateVoronoi";
import Image from "next/image";
import { PartData } from "@/data/partsData";

interface PainSelectorProps {
  imageSize: { width: number; height: number };
  data: PartData[];
  onSelectPart: (part: string) => void;
}

const PainSelector: React.FC<PainSelectorProps> = ({
  imageSize,
  onSelectPart,
  data,
}) => {
  const [cells, setCells] = useState<any[]>([]);
  const [selectedPart, setSelectedPart] = useState<string[] | null>(null);

  useEffect(() => {
    const { width, height } = imageSize;
    const scaleX = width / imageSize.width;
    const scaleY = height / imageSize.height;

    const scaledCells = calculateVoronoiCells(
      width,
      height,
      scaleX,
      scaleY,
      data
    );
    setCells(scaledCells);
    console.log(cells);
  }, [imageSize, data]);

  return (
    <>
      <svg className="absolute inset-0 w-full h-full z-10">
        {cells.map((cell) =>
          cell.polygons.map((polygon: string, index: number) => (
            <polygon
              key={`${cell.name}-${index}`}
              points={polygon}
              fill="transparent"
              stroke="black"
              strokeWidth="1"
              onMouseOver={() =>
                setSelectedPart([cell.name, cell.highlightName])
              }
              onClick={() => onSelectPart(cell.name)}
            />
          ))
        )}
      </svg>
      {selectedPart && selectedPart[0] != "LineSegments" && (
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          <Image
            src={`/images/${selectedPart[0]}.png`}
            alt={selectedPart[0]}
            layout="fill"
            className="image z-20"
            style={{ top: 0, left: 0 }}
          />
          <Image
            src={`/images/${selectedPart[1]}.png`}
            alt={selectedPart[1]}
            layout="fill"
            className="image z-20"
            style={{ top: 0, left: 0 }}
          />
        </div>
      )}
    </>
  );
};

export default PainSelector;
