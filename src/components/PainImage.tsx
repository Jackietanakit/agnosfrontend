import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PainSelector from "./PainSelector";
import {
  absPartData,
  absPointData,
  handPointData,
  handPartData,
  PartData,
  PartPoint,
} from "@/data/partsData";
import PopupInfo from "./PopupInfo";

interface PainImageProps {
  type: string;
}

const PainImage: React.FC<PainImageProps> = ({ type }) => {
  const data: PartData = type == "Hand" ? handPartData : absPartData;
  const point: PartPoint[] = type == "Hand" ? handPointData : absPointData;

  const baseImgSrc: string =
    type == "Hand" ? "/images/default-finger.png" : "/images/default-abs.png";

  const otherImgSrc: string =
    type == "Hand"
      ? "/images/others-highlight.png"
      : "/images/all-over-highlight.png";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedParts, setSelectedParts] = useState<string[]>([]); // State to store selected parts
  const [isOtherShow, setIsOtherShow] = useState<boolean>(false);

  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 828, height: 976 }
  );

  const allAbsButton = () => {
    if (type === "Hand") {
      setSelectedParts([]);
      setIsOtherShow(!isOtherShow);
    }
    if (type === "Abs") {
      if (selectedParts.length === 7) {
        setIsOtherShow(!isOtherShow);
        setSelectedParts([]);
      } else {
        setIsOtherShow(!isOtherShow);
        setSelectedParts(Object.keys(absPartData));
      }
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect) {
          const { width, height } = entry.contentRect;
          setImageSize({ width, height });
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSelectPart = (part: string) => {
    setSelectedParts((prev) => {
      if (prev.includes(part)) {
        return prev.filter((p) => p !== part);
      }
      return [...prev, part];
    });
    if (selectedParts.length === 7) {
      setIsOtherShow(true);
    }
  };

  return (
    <div className="relative max-w-md mx-auto" ref={containerRef}>
      <div className="relative w-auto h-auto">
        <Image
          src={baseImgSrc}
          alt="Hand"
          layout="responsive"
          width={imageSize.width}
          height={imageSize.height}
          style={{ objectFit: "contain" }}
        />
        <PainSelector
          imageSize={imageSize}
          onSelectPart={handleSelectPart}
          data={point}
        />
        <PopupInfo data={data} selectedParts={selectedParts} />
      </div>
      {type === "Hand" && (
        <div
          className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[70%] h-[10%] z-20 flex items-center justify-center cursor-pointer"
          onClick={allAbsButton}
        ></div>
      )}
      {isOtherShow ? <Image src={otherImgSrc} alt="All" layout="fill" /> : null}
      {type === "Abs" && (
        <div
          className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 w-[35%] h-[10%] z-20 flex items-center justify-center cursor-pointer"
          onClick={allAbsButton}
        />
      )}
    </div>
  );
};

export default PainImage;
