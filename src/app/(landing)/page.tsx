import { Stars } from "@/components/canvas/Stars";
import Footer from "@/components/home/Footer";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-0 gap-0 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="star-component relative flex flex-col items-center">
          <Stars size={0.035} />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <h1 className="text-black text-2xl md:text-4xl home-text-gradient">
              Trackforce
            </h1>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/scheduling"
          >
            Get Started
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
