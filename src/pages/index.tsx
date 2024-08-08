import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-8">Pain Selector</h1>
        <div className="flex space-x-4">
          <Link href="/hand-pain" passHref>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Hand Pain
            </button>
          </Link>
          <Link href="/abs-pain" passHref>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Abs Pain
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
