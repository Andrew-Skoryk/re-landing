import { FC } from "react";
import OutdoorsEdition from "../OutdoorsEdition";
import AboveTheSea from "../AboveTheSea";
import MountainCollections from "../MountainCollections";
import SubscribeEmail from "../SubscribeEmail";
import EditorsPick from "../EditorsPick";

const MainSection: FC = () => {
  return (
    <main className="space-y-24 bg-stone-800">
      <OutdoorsEdition />
      <AboveTheSea />
      <EditorsPick />
      <MountainCollections />
      <SubscribeEmail />
    </main>
  );
};

export default MainSection;
