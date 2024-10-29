import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageSrc } from "./carousel-images";
import Img from "./Img";

export default function MultiCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-full h-auto">
      <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        transitionDuration={500}
        containerClass="carousel-container w-full"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="mt-4"
        itemClass="p-4"
      >
        {imageSrc.map((src) => (
          <div key={src} className="flex justify-center items-center">
            <Img
              src={src}
              alt="carousel image"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
