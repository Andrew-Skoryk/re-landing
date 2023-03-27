import { FC } from "react";
import AboveTheSea from "../AboveTheSea/AboveTheSea";
import MountainCollections from "../MountainCollections";
import SubscribeEmail from "../SubscribeEmail";

const MainSection: FC = () => {
  return (
    <main className="space-y-20 bg-stone-800">
      <section className="relative flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
            Welcome to <span className="text-yellow-300">trppd_</span>
          </h1>
          <p className="text-center text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quidem
            exercitationem voluptatum quibusdam quos quas. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
        </div>
      </section>
      <AboveTheSea />
      <MountainCollections />
      <SubscribeEmail />
    </main>
  );
};

export default MainSection;
