import Head from "next/head";
import AbsImage from "../components/AbsImage";

const AbsPain: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Abs Pain Selector</title>
        <meta
          name="description"
          content="Select the part of the abs where you feel pain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Abs Pain Selector</h1>
        <AbsImage />
      </main>
    </div>
  );
};

export default AbsPain;
