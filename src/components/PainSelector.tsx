import { useState, useEffect } from "react";
import { calculateVoronoiCells } from "../utils/calculateVoronoi";
import Image from "next/image";
import { PartPoint } from "@/data/partsData";

interface PainSelectorProps {
  imageSize: { width: number; height: number };
  data: PartPoint[];
  onSelectPart: (part: string) => void;
}

const PainSelector: React.FC<PainSelectorProps> = ({
  imageSize,
  onSelectPart,
  data,
}) => {
  const [cells, setCells] = useState<any[]>([]);

  useEffect(() => {
    const { width, height } = imageSize;

    const scaledX = imageSize.width / 828;
    const scaledY = imageSize.height / 976;

    const scaledCells = calculateVoronoiCells(
      width,
      height,
      scaledX, // Scaling is handled inside the calculateVoronoiCells function
      scaledY,
      data
    );
    setCells(scaledCells);
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
              onClick={() => {
                if (!cell.name.includes("Outline")) {
                  onSelectPart(cell.name);
                }
              }}
            />
          ))
        )}
      </svg>
    </>
  );
};

export default PainSelector;
