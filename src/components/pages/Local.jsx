import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import morningBeach from "@assets/local/morning_beach.jpg";
import townsPeople from "@assets/local/townspeople.jpg";
import lushWithWaterfalls from "@assets/local/lush_with_waterfall.jpg";
import mountRinjani from "@assets/local/rinjani_landscape.jpg";
import handlooms from "@assets/local/handlooms.jpg";
import sadeWeaving from "@assets/local/sade_weaving.png";
import giliIslands from "@assets/local/sunset_waves.jpg";

const textAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const images = [
  {
    src: morningBeach,
    alt: "Lombok beach",
    title: "Morning Serenity on Lombok’s Shores",
    text: "Lombok is a whisper of paradise, an island where the ocean greets you with a turquoise lullaby...",
  },
  {
    src: townsPeople,
    alt: "Townspeople",
    title: "Lively Markets & Timeless Traditions",
    text: "The heartbeat of Lombok thrives in its people, their warmth echoing in the lively markets and sunlit streets...",
  },
  {
    src: lushWithWaterfalls,
    alt: "Lush greens",
    title: "Verdant Jungles & Hidden Waterfalls",
    text: "Beyond the coastline, Lombok’s verdant jungles hum with the sound of cascading waterfalls...",
  },
  {
    src: mountRinjani,
    alt: "Mount Rinjani",
    title: "The Majesty of Mount Rinjani",
    text: "A sacred peak piercing the sky, Rinjani’s trails lead to a crater lake where the heavens meet the earth...",
  },
  {
    src: handlooms,
    alt: "Sasak village",
    title: "Handwoven Elegance: Sasak Artistry",
    text: "In Lombok’s traditional villages, weaving is more than craft—it’s a language of heritage and beauty...",
  },
  {
    src: sadeWeaving,
    alt: "Sade village",
    title: "Stories Woven in Time: The Village of Sade",
    text: "Each thread tells a story, interlacing past and present in the intricate weavings of Sade’s artisans...",
  },
  {
    src: giliIslands,
    alt: "Gili Islands",
    title: "Gili Islands: A World of Tranquility",
    text: "Just offshore, the Gili Islands are a sanctuary where the sea whispers secrets beneath golden sunsets...",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function Local() {
  return (
    <div className="w-full px-6 lg:px-20 py-16 bg-gray-50 text-gray-800">
      <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-center text-gray-900 mb-12">
        Discover Lombok
      </h1>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows
        className="relative"
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
              className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center p-6 lg:p-10"
            >
              <h2 className="text-lg lg:text-2xl font-semibold mb-2">
                {image.title}
              </h2>
              <p className="text-sm lg:text-lg font-light leading-relaxed">
                {image.text}
              </p>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
