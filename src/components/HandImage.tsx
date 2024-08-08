import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PainSelector from "./PainSelector";
import handData from "@/data/partsData";

const HandImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 828, height: 976 }
  );

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
