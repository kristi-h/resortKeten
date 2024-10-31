import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import morningBeach from "@assets/local/morning_beach.jpg";
import townsPeople from "@assets/local/townspeople.jpg";
import lushWithWaterfalls from "@assets/local/lush_with_waterfall.jpg";
import mountRinjani from "@assets/local/rinjani_landscape.jpg";
import handlooms from "@assets/local/handlooms.jpg";
import sadeWeaving from "@assets/local/sade_weaving.png";
import giliIslands from "@assets/local/sunset_waves.jpg";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Local() {
  const images = [
    {
      src: morningBeach,
      alt: "Lombok beach",
      text: "Lombok is a whisper of paradise, a place caught in the spell of its natural rhythm. Imagine an island where the ocean greets you with a turquoise lullaby, where each sunrise pulls itself over mountains wrapped in clouds, and the air hums with tales of ancient culture and kindness. Lombok is like Bali’s quieter, soulful sibling—reserved yet full of life and vibrant landscapes.",
    },
    {
      src: townsPeople,
      alt: "Townspeople",
      text: "On the island’s beaches, the waves seem to laugh softly as they roll onto the shore, leaving behind hidden treasures of shells and smooth stones, gifts from the ocean herself. Kuta Lombok’s sands stretch out in a vast, curving arc, perfect for long, unhurried walks or catching waves that dance in under the bright island sun.",
    },
    {
      src: lushWithWaterfalls,
      alt: "Lush greens",
      text: "But the heart of Lombok isn’t merely in its beaches; it beats strongest in its lush jungles and the rugged rise of Mount Rinjani. Climbing Rinjani is a journey into the heavens, where the stars look down in wonder as you reach the crater lake at dawn, its waters holding the dreams of the island in still reflection.",
    },
    {
      src: mountRinjani,
      alt: "Mount Rinjani",
      text: "Lombok’s soul is woven into the lives of the Sasak people, its native artisans and storytellers. Their villages, Sade and Sukarara, are filled with the click and rhythm of handlooms, crafting textiles in colors as vibrant as a tropical sunrise.",
    },
    {
      src: handlooms,
      alt: "Sasak village",
      text: "In Lombok, every path seems to lead to discovery, whether it’s swimming among turtles in the clear waters around the Gili Islands or savoring the simple elegance of a sunset that stretches endlessly over the horizon.",
    },
    {
      src: sadeWeaving,
      alt: "Sade village",
      text: "The threads of Lombok's culture and history intertwine in the hands of the Sasak people. In the village of Sade, traditional weaving is both craft and livelihood, each pattern echoing the island's long-held stories and vibrant spirit.",
    },
    {
      src: giliIslands,
      alt: "Gili Islands",
      text: "The Gili Islands sit just off Lombok's coast, a trio of idyllic islands known for serene beaches and crystal-clear waters. Here, moments stretch like an endless horizon, perfect for the simple elegance of a sunset and the quiet dance of waves.",
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const sectionRefs = images.map(() =>
    useInView({ triggerOnce: true, threshold: 0.3 })
  );

  const fadeInClass = (inView) =>
    `${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } transition-opacity duration-1000 transform ease-out`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 space-y-10">
      <h1
        ref={titleRef}
        className={`text-3xl font-bold text-gray-900 text-center ${fadeInClass(
          titleInView
        )}`}
      >
        Local Lombok
      </h1>

      {images.map((image, index) => (
        <section
          key={index}
          ref={sectionRefs[index].ref}
          className={fadeInClass(sectionRefs[index].inView)}
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            className="leading-relaxed"
          >
            {image.text}
          </motion.p>
          <br></br>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </section>
      ))}
    </div>
  );
}
