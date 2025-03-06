import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import morningBeach from "@assets/local/morning_beach.jpg";
import townsPeople from "@assets/local/townspeople.jpg";
import lushWithWaterfalls from "@assets/local/lush_with_waterfall.jpg";
import mountRinjani from "@assets/local/rinjani_landscape.jpg";
import handlooms from "@assets/local/handlooms.jpg";
import sadeWeaving from "@assets/local/sade_weaving.png";
import giliIslands from "@assets/local/sunset_waves.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const parallaxEffect = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export default function Local() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const images = [
    {
      src: morningBeach,
      alt: "Lombok beach",
      text: "Lombok is a whisper of paradise, a place caught in the spell of its natural rhythm. Imagine an island where the ocean greets you with a turquoise lullaby, where each sunrise pulls itself over mountains wrapped in clouds.",
    },
    {
      src: townsPeople,
      alt: "Townspeople",
      text: "On the island’s beaches, the waves seem to laugh softly as they roll onto the shore, leaving behind hidden treasures of shells and smooth stones, gifts from the ocean herself.",
    },
    {
      src: lushWithWaterfalls,
      alt: "Lush greens",
      text: "The heart of Lombok isn’t merely in its beaches; it beats strongest in its lush jungles and the rugged rise of Mount Rinjani.",
    },
    {
      src: mountRinjani,
      alt: "Mount Rinjani",
      text: "Lombok’s soul is woven into the lives of the Sasak people, its native artisans and storytellers. Their villages are filled with the click and rhythm of handlooms, crafting textiles in colors as vibrant as a tropical sunrise.",
    },
    {
      src: handlooms,
      alt: "Sasak village",
      text: "In Lombok, every path seems to lead to discovery, whether it’s swimming among turtles in the clear waters around the Gili Islands or savoring the simple elegance of a sunset.",
    },
    {
      src: sadeWeaving,
      alt: "Sade village",
      text: "The threads of Lombok's culture and history intertwine in the hands of the Sasak people. In the village of Sade, traditional weaving is both craft and livelihood, each pattern echoing the island's long-held stories.",
    },
    {
      src: giliIslands,
      alt: "Gili Islands",
      text: "The Gili Islands sit just off Lombok's coast, a trio of idyllic islands known for serene beaches and crystal-clear waters. Here, moments stretch like an endless horizon.",
    },
  ];

  return (
    <div className="relative w-full text-gray-900">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${morningBeach})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.h1
          ref={titleRef}
          className={`absolute inset-0 flex items-center justify-center text-white text-5xl font-bold tracking-wide ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-out`}
        >
          Local Lombok
        </motion.h1>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-16">
        {images.map((image, index) => (
          <motion.section
            key={index}
            className={`grid md:grid-cols-2 items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <motion.h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                {image.alt}
              </motion.h2>
              <motion.p className="text-lg leading-relaxed text-gray-700">
                {image.text}
              </motion.p>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={parallaxEffect}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
