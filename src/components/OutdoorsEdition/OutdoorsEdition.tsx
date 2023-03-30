import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import Peru from "../../assets/outdoors-peru.jpg";
import USA from "../../assets/outdoors-usa.jpg";
import Canada from "../../assets/outdoors-canada.jpg";
import SliderArrow from "../SliderArrow";

const slideData = [
  {
    image: Peru,
    title: "Ollantaytambo",
    country: "Peru",
    description:
      "Molestiae qui necessitatibus magnam quidem amet, accusamus quas volatem? Lorem ipsum dolor sit amet.",
  },
  {
    image: USA,
    title: "Antelope Canyon",
    country: "USA",
    description:
      "Eum suscipit ab officia voluptas temporibus! Magni id iure quam odio assumenda quas.",
  },
  {
    image: Canada,
    title: "Lake louise",
    country: "Canada",
    description:
      "Beatae ex dolor, sit amet consectetur adipisicing elit. Vero, maiores nisi odit autem dolorem.",
  },
];

const slideDataMuteted = [...slideData, ...slideData, ...slideData.slice(-2)];

const OutdoorsEdition: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const handleBeforeChange = (_prevIndex: number, newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative lg:grid lg:grid-cols-[270px,1fr] lg:pt-0.5 lg:px-0 px-5 md:px-16">
      <div className="flex flex-col items-end mt-20 mb-12 text-right lg:mt-28">
        <h2 className="mb-8 text-3xl font-bold w-min">Featured Spots</h2>
        <p className="w-48 font-semibold mb-14 lg:mb-28 md:mb-16">
          Some of featured spot that you might want visit before you die
        </p>
        <button className="relative py-2 pl-5 text-white group">
          <span className="relative font-semibold">View All</span>
          <span className="absolute w-0 h-0.5 transition-all duration-300 ease-in-out bg-white right-full rounded-2xl bottom-3.5 group-hover:w-32 before:inset-y-1/2"></span>
        </button>
      </div>

      <div
        className={
          "justify-between flex flex-col xl:max-w-[920px] 2xl:max-w-[1220px] mx-auto 2xl:px-32 max-w-xs md:max-w-2xl lg:max-w-xl"
        }
      >
        <div className="flex justify-between font-semibold lg:mb-36 lg:pl-24 md:mb-12">
          <span className="relative after:absolute 2xl:after:w-9/12 after:h-[2px] after:bg-zinc-500 after:right-0 after:top-3.5 pb-14 after:rounded-full flex-grow after:w-5/12 md:after:w-3/4 xs:after:w-2/3 lg:after:w-3/5 xl:after:w-4/5">
            Outdoors Edition
          </span>
          <span className="lg:pl-8 pl-3 relative after:absolute after:w-1/4 after:h-[2px] after:bg-zinc-500 after:top-3.5 after:rounded-full lg:pr-16 after:right-0 pr-8">
            {currentIndex + 1} / {slideDataMuteted.length}
          </span>
        </div>

        <div className="md:-mr-16 ">
          <Slider ref={sliderRef} {...settings}>
            {slideDataMuteted.map((slide, index) => (
              <article
                key={index}
                className="flex mb-12 text-center md:pr-16 lg:text-start"
              >
                <div className="mx-auto mb-12 text-center md:w-2/3 lg:w-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}, ${slide.title}`}
                    className={
                      "object-cover w-full h-auto aspect-square m-auto "
                    }
                  />
                </div>
                <h3 className="mb-1 text-3xl font-bold">{slide.title}</h3>
                <h4 className="mb-6 text-xl font-bold opacity-50">
                  {slide.country}
                </h4>
                <p className="mb-12 text-justify text-gray-300 lg:text-start">
                  {slide.description}
                </p>
                <button className="font-semibold text-yellow-300 transition-colors duration-300 justify-self-start hover:text-yellow-400 active:text-yellow-500">
                  read more
                </button>
              </article>
            ))}
          </Slider>
        </div>

        <div className="flex justify-between font-semibold md:pt-12">
          <span className="relative after:absolute 2xl:after:w-10/12 after:h-[2px] after:bg-zinc-500 after:right-0 after:top-3.5 pb-14 after:rounded-full flex-grow pr-4 after:w-5/12 md:after:w-3/4 lg:after:w-2/3 xl:after:w-10/12">
            Outdoors Edition
          </span>
          <span className="lg:pl-8 pl-3 relative after:absolute after:w-1/4 after:h-[2px] after:bg-zinc-500 after:top-3.5 after:rounded-full lg:pr-16 after:right-0 pr-8">
            {currentIndex + 1} / {slideDataMuteted.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OutdoorsEdition;
