import { FC } from "react";
import MountainCard from "./MountainCard";
import South from "../../assets/mountain-1.jpg";
import North from "../../assets/mountain-2.jpg";
import East from "../../assets/mountain-3.jpg";

const MountainCollectionsContent = [
  { title: "Southern Mountain", country: "South", img: South },
  { title: "Northern Mountain", country: "North", img: North },
  { title: "Eastern Mountain", country: "East", img: East },
];

const MountainCollections: FC = () => {
  return (
    <section className="relative px-5 pt-12 lg:pr-32 lg:pl-64 md:px-16">
      <div className="absolute inset-0 w-full bg-bottom bg-cover bg-mountainCollections h-2/3" />
      <div className="absolute top-0 right-0 w-full h-1/6 bg-gradienToTransparent" />
      <div className="absolute right-0 w-full bottom-1/3 h-1/6 bg-gradienToBg" />
      <div className="relative mx-auto recontainer md:text-center">
        <h2 className="mb-10 text-4xl font-bold tracking-wide text-center md:text-6xl lg:text-start">
          Mountain Collections
        </h2>
        <p className="max-w-md m-auto text-sm font-medium text-justify lg:text-start mb-28 lg:ml-0">
          See our best mountain collections, explore and Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nostrum minus vitae corporis
          reprehenderit ipsum deleniti.
        </p>

        <div className="flex flex-col gap-14">
          {MountainCollectionsContent.map(({ title, country, img }, index) => (
            <MountainCard
              title={title}
              country={country}
              key={country}
              img={img}
              isLast={index === MountainCollectionsContent.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MountainCollections;
