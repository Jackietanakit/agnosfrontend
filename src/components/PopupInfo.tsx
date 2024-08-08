import { PartData } from "@/data/partsData";
import Image from "next/image";

interface PopupInfoProps {
  data: PartData;
  selectedParts: string[];
}

const PopupInfo: React.FC<PopupInfoProps> = ({ data, selectedParts }) => {
  return (
    <>
      {selectedParts && (
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          {selectedParts.map((part) => (
            <Image
              key={part}
              src={data[part].highlightSrc}
              alt={part}
              fill
              className="image"
              style={{ top: 0, left: 0 }}
            />
          ))}
        </div>
      )}
      {selectedParts && selectedParts.length != Object.keys(data).length && (
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          {selectedParts.map((part) => (
            <Image
              key={part}
              src={data[part].captionSrc}
              alt={part}
              fill
              className="image"
              style={{ top: 0, left: 0 }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PopupInfo;
