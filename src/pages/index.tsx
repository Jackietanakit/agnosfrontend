import { useState } from "react";
import Head from "next/head";
import PainImage from "../components/PainImage";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const PainSelector: React.FC = () => {
  const [painType, setPainType] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Pain Selector</title>
        <meta
          name="description"
          content="Select the type of pain you want to address"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="w-full flex justify-start px-4 py-2">
          {painType && (
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setPainType(null)}
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        <h1 className="text-4xl font-bold mb-8 font-prompt">เลือกส่วนที่ปวด</h1>
        {!painType ? (
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setPainType("Hand")}
            >
              ปวดบริเวณมือ
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={() => setPainType("Abs")}
            >
              ปวดบริเวณท้อง
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">ปวดบริเวณไหน กดเลย!</h2>
            <PainImage type={painType} />
          </div>
        )}
      </main>
    </div>
  );
};

export default PainSelector;
