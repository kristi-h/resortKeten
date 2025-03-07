import { motion } from "framer-motion";
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

export default function Local() {
  return (
    <div className="w-full px-6 lg:px-20 py-16 bg-gray-50 text-gray-800">
      <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-center text-gray-900 mb-12">
        Discover Lombok
      </h1>

      {images.map((image, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-center my-16 ${
              isEven ? "lg:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <p className="text-center text-lg font-serif italic text-gray-700 mt-4">
                {image.title}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textAnimation}
              className="w-full lg:w-1/2 p-6 lg:p-12"
            >
              <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-800 bg-white bg-opacity-75 p-6 rounded-md shadow-md">
                {image.text}
              </p>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
