import { FC } from "react";
import OutdoorsEdition from "../OutdoorsEdition";
import AboveTheSea from "../AboveTheSea";
import MountainCollections from "../MountainCollections";
import SubscribeEmail from "../SubscribeEmail";

const MainSection: FC = () => {
  return (
    <main className="space-y-12 bg-stone-800">
      <OutdoorsEdition />
      <AboveTheSea />
      <MountainCollections />
      <SubscribeEmail />
    </main>
  );
};

export default MainSection;
