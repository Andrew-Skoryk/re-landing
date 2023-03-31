import { FC, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import SliderArrow from "../EditorsPick/SliderArrow";
import Bridge from "../../assets/editors-pick-bridge.jpg";
import Antelope from "../../assets/editors-pick-canyon.jpg";
import Ashinoko from "../../assets/editors-pick-lake.jpg";
import Flatiron from "../../assets/editors-pick-flatiron.jpg";
import Sedona from "../../assets/editors-pick-sedona.jpg";
import SlideArticle from "./SlideArticle";

const slideData = [
  {
    image: Flatiron,
    title: "Flatiron",
    country: "USA",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non repudiandae deleniti.",
  },
  {
    image: Ashinoko,
    title: "Lake Ashinoko",
    country: "Japan",
    description:
      "Beatae ex dolor, sit amet consectetur adipisicing elit. Vero, maiores nisi odit autem dolorem.",
  },
  {
    image: Bridge,
    title: "Golden Gate Bridge",
    country: "USA",
    description:
      "Molestiae qui necessitatibus magnam quidem amet, ipsum dolor sit amet.",
  },
  {
    image: Antelope,
    title: "Antelope Canyon",
    country: "USA",
    description: "Eum suscipit ab officia voluptas tempogni quam assunda quas.",
  },
  {
    image: Sedona,
    title: "Sedona",
    country: "USA",
    description:
      "Etur adipisicing elit. Nostrum minus vitae corporis reprehenderit consectetur ipsum deleniti.",
  },
];

const EditorsPick: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState("default");
  const sliderRef = useRef<Slider | null>(null);

  const handleBeforeChange = (_prevIndex: number, newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const sortedSlideData = useMemo(() => {
    switch (sortOrder) {
      case "alphabetical":
        return [...slideData].sort((a, b) => a.title.localeCompare(b.title));
      case "country":
        return [...slideData].sort((a, b) =>
          a.country.localeCompare(b.country)
        );
      default:
        return slideData;
    }
  }, [sortOrder]);

  const slideDataMuteted = useMemo(
    () => [sortedSlideData, sortedSlideData, sortedSlideData],
    [sortedSlideData]
  );

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: (
        <SliderArrow
          next={true}
          onClick={() => {
            sliderRef.current?.slickNext();
          }}
        />
      ),
      prevArrow: (
        <SliderArrow
          next={false}
          onClick={() => {
            sliderRef.current?.slickPrev();
          }}
        />
      ),
      beforeChange: handleBeforeChange,
    }),
    []
  );

  return (
    <section className="relative lg:grid lg:grid-cols-[270px,1fr] lg:px-0 px-5 md:px-16">
      <div className="flex flex-col items-start mt-2 mb-12 lg:text-right lg:mt-4 lg:items-end">
        <h2 className="mb-8 text-2xl font-bold lg:text-3xl w-min">
          Editor&apos;s Pick
        </h2>
        <p className="w-56 font-semibold">
          Our picks, just for you nam am vidisee admodum omittantur, nihil
          corrumpit
        </p>
      </div>

      <div
        className={
          "justify-between flex flex-col xl:max-w-[920px] 2xl:max-w-[1220px] mx-auto 2xl:px-32 max-w-xs md:max-w-2xl lg:max-w-xl"
        }
      >
        <div className="flex justify-between font-semibold lg:mb-16 lg:pl-24 md:mb-8">
          <div className="relative after:absolute after:h-[2px] after:bg-zinc-500 after:inset-x-0-0 after:top-3.5 pb-14 after:rounded-full after:w-full flex-grow" />

          <span className="lg:pl-8 pl-3 relative after:absolute after:w-1/4 after:h-[2px] after:bg-zinc-500 after:top-3.5 after:rounded-full lg:pr-16 after:right-0 pr-8">
            {currentIndex + 1} / {slideDataMuteted.length}
          </span>

          <div className="relative lg:pr-8 after:absolute after:w-1/4 after:h-[2px] after:bg-zinc-500 after:top-3.5 after:rounded-full after:right-0">
            <select
              className="pl-3 outline-none appearance-none cursor-pointer lg:pl-8 bg-stone-800"
              value={sortOrder}
              onChange={handleSortChange}
              placeholder="sort by"
            >
              <option disabled value="default">
                sort by
              </option>
              <option value="">Default</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="country">Country</option>
            </select>

            <div className="absolute pointer-events-none top-1 right-12">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.408-.418-.436-1.17 0-1.615z" />
              </svg>
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {slideDataMuteted.map(slideGroup => (
            <div key={currentIndex} className="w-full">
              <div className="grid grid-cols-3 grid-rows-[1fr_1fr_290px] gap-6 md:gap-8 xl:gap-12">
                <SlideArticle
                  editorsPickObject={slideGroup[0]}
                  gridPosition="col-start-1 col-end-3 row-start-1 row-end-3"
                />
                <SlideArticle
                  editorsPickObject={slideGroup[1]}
                  gridPosition="col-start-3 col-end-4 row-start-1 row-end-2"
                />
                <SlideArticle
                  editorsPickObject={slideGroup[2]}
                  gridPosition="col-start-3 col-end-4 row-start-2 row-end-3"
                />
                <SlideArticle
                  editorsPickObject={slideGroup[3]}
                  gridPosition="col-start-1 col-end-2 row-start-3 row-end-4"
                />
                <SlideArticle
                  editorsPickObject={slideGroup[4]}
                  gridPosition="col-start-2 col-end-4 row-start-3 row-end-4"
                  customClass="object-contain max-h-[290px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EditorsPick;
