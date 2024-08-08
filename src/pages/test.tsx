import Image from "next/image";

const Test: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Image
        src={`/images/dip-active.png`}
        alt={"dip-active"}
        width={500}
        height={500}
        className="absolute object-contain z-20"
        style={{ top: 0, left: 0, pointerEvents: "none" }}
      />
    </div>
  );
};

export default Test;
