import { useState } from "react";
import PainSelector from "./PainSelector";
import Image from "next/image";

const AbsImage: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleSelectPart = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <Image src="/images/default-abs.png" alt="Abs" className="w-full" />
      <PainSelector onSelectPart={handleSelectPart} />
      {selectedPart && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded">
          {selectedPart}
        </div>
      )}
    </div>
  );
};

export default AbsImage;
