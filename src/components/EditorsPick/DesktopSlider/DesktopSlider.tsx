import { FC, useMemo, MutableRefObject, useEffect } from "react";
import Slider from "react-slick";
import SlideArticle from "../SlideArticle";
import SliderArrow from "../SliderArrow";

type Props = {
  slideDataMuteted: EditorsPickObject[][];
  handleBeforeChange: (currentSlide: number, nextSlide: number) => void;
  sliderRef: MutableRefObject<Slider | null>;
  setSlidesNumber: (slidesNumber: number) => void;
};

const DesktopSlider: FC<Props> = ({
  slideDataMuteted,
  handleBeforeChange,
  sliderRef,
  setSlidesNumber,
}) => {
  useEffect(() => {
    setSlidesNumber(slideDataMuteted.length);
  }, [slideDataMuteted.length, setSlidesNumber]);

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
    [handleBeforeChange, sliderRef]
  );

  return (
    <Slider ref={sliderRef} {...settings}>
      {slideDataMuteted.map((slideGroup, index) => (
        <div key={index} className="w-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-6 md:gap-8 xl:gap-12">
            <SlideArticle
              editorsPickObject={slideGroup[0]}
              gridPosition="col-start-1 col-end-3 row-start-1 row-end-3"
            />
            <SlideArticle
              editorsPickObject={slideGroup[1]}
              gridPosition="col-start-3 col-end-4 row-start-1 row-end-2"
              customClass="object-bottom"
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
              customClass="object-contain 2xl:max-h-[290px] xl:max-h-[275px] lg:max-h-[170px]"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DesktopSlider;
