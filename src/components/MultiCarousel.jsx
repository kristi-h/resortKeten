import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const textAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

MultiCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default function MultiCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  return (
    <div className="w-full max-w-screen-lg mx-auto relative pb-6">
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay
        autoPlaySpeed={5000}
        transitionDuration={600}
        containerClass="carousel-container"
        itemClass="p-4"
        beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
        ref={carouselRef}
        arrows
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[80vh] flex items-center justify-center"
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0.6, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="absolute bottom-0 left-0 w-full  text-white text-center p-3 lg:p-4"
            >
              <h2 className="text-lg lg:text-2xl font-helv font-thin mb-2">
                {image.title}
              </h2>
              <p className="text-sm lg:text-lg font-light font-gara leading-relaxed">
                {image.text}
              </p>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => carouselRef.current.goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-stone-700" : "bg-stone-300"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
