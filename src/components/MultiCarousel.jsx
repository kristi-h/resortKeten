import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageSrc } from "./carousel-images";
import Img from "./Img";
import { motion } from "framer-motion";

export default function MultiCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const openLightbox = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    carouselRef.current.goToSlide(index);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto relative">
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        ssr={true}
        infinite={true}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="p-4"
        beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
        showDots={false}
        ref={carouselRef}
        rtl={undefined}
        customLeftArrow={<button className="custom-arrow left-arrow">❮</button>}
        customRightArrow={
          <button className="custom-arrow right-arrow">❯</button>
        }
      >
        {imageSrc.map((src) => (
          <div
            key={src}
            className="flex justify-center items-center cursor-pointer"
            onClick={() => openLightbox(src)}
          >
            <Img
              src={src}
              alt="carousel image"
              className="w-full h-80 md:h-96 lg:h-[32rem] object-contain rounded-md"
            />
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center space-x-4 mt-4">
        {imageSrc.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-8 h-8 rounded-full ${
              currentSlide === index
                ? "bg-stone-700 text-white"
                : "bg-stone-300 text-stone-700"
            } flex items-center justify-center font-semibold transition-all duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </motion.div>
      )}
    </div>
  );
}
