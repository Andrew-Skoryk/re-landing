import { FC } from "react";
import MountainCard from "./MountainCard";

const MountainCollectionsContent = [
  { title: "Southern Mountain", country: "South" },
  { title: "Northern Mountain", country: "North" },
  { title: "Eastern Mountain", country: "East" },
];

const MountainCollections: FC = () => {
  return (
    <section className="relative pt-12 lg:pl-56 md:pl-40">
      <div className="absolute inset-0 w-full bg-bottom bg-cover bg-mountainCollections h-2/3" />
      <div className="absolute top-0 right-0 w-full h-1/6 bg-gradienToTransparent" />
      <div className="absolute right-0 w-full bottom-1/3 h-1/6 bg-gradienToBg" />
      <h2 className="relative mb-8 text-4xl font-bold tracking-wide md:text-6xl">
        Mountain Collections
      </h2>
      <p className="relative max-w-md mb-20 font-semibold">
        See our best mountain collections, explore and Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nostrum minus vitae corporis
        reprehenderit ipsum deleniti.
      </p>

      <div className="flex flex-col gap-14">
        {MountainCollectionsContent.map(({ title, country }) =>
          MountainCard({ title, country })
        )}
      </div>
    </section>
  );
};

export default MountainCollections;
