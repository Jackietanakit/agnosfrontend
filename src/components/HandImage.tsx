import { useState, useRef } from "react";
import Image from "next/image";
import PainSelector from "./PainSelector";
import handData from "@/data/partsData";

const HandImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 828, height: 976 }
  );

  const handleSelectPart = (part: string) => {
    console.log(`Selected part: ${part}`);
  };

  return (
    <div className="relative max-w-md mx-auto" ref={containerRef}>
      <div className="relative w-full h-auto">
        <Image
          src="/images/default-finger.png"
          alt="Hand"
          layout="responsive"
          width={imageSize.width}
          height={imageSize.height}
          objectFit="contain"
          onLoadingComplete={(image) => {
            setImageSize({
              width: image.naturalWidth,
              height: image.naturalHeight,
            });
          }}
        />
        <PainSelector
          imageSize={imageSize}
          onSelectPart={handleSelectPart}
          data={handData}
        />
      </div>
    </div>
  );
};

export default HandImage;
