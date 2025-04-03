import MultiCarousel from "../MultiCarousel";
import { motion } from "framer-motion";
import image1 from "@assets/villa/image1.png";
import image2 from "@assets/villa/image2.png";
import image3 from "@assets/villa/image3.png";
import image4 from "@assets/villa/image4.png";
import image5 from "@assets/villa/image5.png";
import image6 from "@assets/villa/image6.png";
import image7 from "@assets/villa/image7.png";
import image8 from "@assets/villa/image8.png";
import image9 from "@assets/villa/image9.png";
import image10 from "@assets/villa/image10.png";
import image11 from "@assets/villa/image11.png";
import image12 from "@assets/villa/image12.png";
import image13 from "@assets/villa/image13.png";

const images = [
  {
    src: image1,
    alt: "Table and chairs",
    title: "Dining Area",
  },
  {
    src: image2,
    alt: "Sofa and Table",
    title: "Living Room",
  },
  {
    src: image3,
    alt: "Master bed",
    title: "Master Bedroom with Poolside Access",
  },
  {
    src: image4,
    alt: "Table and chairs",
    title: "Full Master Bedroom View",
  },
  {
    src: image5,
    alt: "Bedroom and Mirron",
    title: "Master Bedroom Sideview",
  },
  {
    src: image6,
    alt: "Samller Bedroom",
    title: "Bedroom 2",
  },
  {
    src: image7,
    alt: "Bathtub",
    title: "Open Bath",
  },
  {
    src: image8,
    alt: "Bathroom",
    title: "Bathroom",
  },
  {
    src: image9,
    alt: "Pool next to Villa",
    title: "Poolside",
  },
  {
    src: image10,
    alt: "Full view of Villa with Pool",
    title: "Full Pool View",
  },
  {
    src: image11,
    alt: "Entrance with grass lot",
    title: "Parking",
  },
  {
    src: image12,
    alt: "Garden with pathway",
    title: "Side Garden",
  },
  {
    src: image13,
    alt: "Big Green Door",
    title: "Entrance",
  },
];

export default function Villa() {
  return (
    <div className="relative w-full min-h-screen bg-primary text-secondary flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/villa_hero.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 w-full px-6 lg:px-20 py-32 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-serif text-yellow-800 font-bold tracking-wide"
        >
          Kala Senja Villa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-6 text-lg max-w-2xl text-yellow-800 mx-auto font-light leading-relaxed"
        >
          A secluded oasis where modern elegance meets tropical serenity. Unwind
          in a villa designed for absolute tranquility.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full bg-white/70 backdrop-blur-lg rounded-lg shadow-lg max-w-4xl p-8 text-center space-y-6"
      >
        <h2 className="text-3xl text-yellow-800 font-semibold text-stone-900">
          Indulgent Amenities
        </h2>
        <ul className="grid grid-cols-2 text-yellow-800 gap-y-3 text-lg text-stone-800">
          <li>✨ Rain shower</li>
          <li>🛁 Open-roof bathtub</li>
          <li>🏖️ Poolside lounge</li>
          <li>🌿 Garden oasis pool</li>
          <li>🍳 Fully equipped kitchen</li>
          <li>🏡 Panoramic glass sliding doors</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl text-lg leading-relaxed space-y-8 text-center mt-12 text-yellow-800"
      >
        <p>
          Nestled in the heart of Kuta, just five minutes from the town’s
          vibrant bars and eateries,
          <span className="italic"> Kala Senja Villa</span> is your private
          sanctuary of indulgence.
        </p>
        <p>
          With floor-to-ceiling glass doors, an infinity pool, and a lush
          courtyard, this villa was designed to immerse you in nature’s beauty.
        </p>
        <p>
          Whether you&apos;re traveling solo, as a couple, or with friends,
          <span className="italic"> Kala Senja Villa</span> offers effortless
          elegance in one of Lombok’s most enchanting settings.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-screen-lg mx-auto mt-16 shadow-xl rounded-lg overflow-hidden"
      >
        <MultiCarousel images={images} />
      </motion.div>
    </div>
  );
}
