import Head from "next/head";
import HandImage from "../components/HandImage";

const HandPain: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Hand Pain Selector</title>
        <meta
          name="description"
          content="Select the part of the hand where you feel pain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Hand Pain Selector</h1>
        <HandImage />
      </main>
    </div>
  );
};

export default HandPain;
