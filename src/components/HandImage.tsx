import { useState } from "react";
import PainSelector from "./PainSelector";
import Image from "next/image";

const HandImage: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleSelectPart = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative w-full h-120">
        <Image
          src="/images/default-finger.png"
          alt="Hand"
          layout="responsive"
          width={270}
          height={318}
          objectFit="contain"
        />
        <PainSelector onSelectPart={handleSelectPart} />
        {/* {selectedPart && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded">
            {selectedPart}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default HandImage;
