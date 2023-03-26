import { FC } from "react";

const MainSection: FC = () => {
  return (
    <main className="bg-stone-800">
      <section className="relative flex flex-col items-center justify-center h-screen">
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
            Welcome to <span className="text-yellow-300">trppd_</span>
          </h1>
          <p className="text-center text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quidem
            exercitationem voluptatum quibusdam quos quas. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
          <button className="px-10 py-2 font-extrabold bg-yellow-300 text-slate-800 rounded-3xl">
            Read more
          </button>
        </div>
      </section>

      <section>
        <img src="" alt="" />
        <h2>Above the Sea</h2>
      </section>
    </main>
  );
};

export default MainSection;
