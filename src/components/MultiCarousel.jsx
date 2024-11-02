import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageSrc } from "./carousel-images";
import Img from "./Img";
import { motion } from "framer-motion";

export default function MultiCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openLightbox = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-auto relative">
      <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="mt-4"
        itemClass="p-4"
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
              className="w-screen h-80 md:h-96 lg:h-[32rem] object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>

      {/* Lightbox overlay */}
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
