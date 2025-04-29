import { useState } from "react";
import MultiCarousel from "../MultiCarousel";
import { motion } from "framer-motion";
import { images } from "../../data/villaImages";

export default function Villa() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-primary font-saol text-white flex flex-col items-center justify-center overflow-hidden">
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

      <div className="relative z-10 w-full px-6 lg:px-20 pt-24 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-saol text-yellow-800 font-bold tracking-wide"
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
          in a villa designed for absolute tranquility.{" "}
        </motion.p>
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-4 text-yellow-800 underline font-semibold hover:text-yellow-700 transition duration-300"
          >
            Learn More
          </button>
        )}
      </div>

      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-3xl text-lg leading-relaxed space-y-8 text-center mt-6 text-yellow-800"
        >
          <p>
            Nestled in the heart of Kuta, just five minutes from the town’s
            vibrant bars and eateries,
            <span className="italic"> Kala Senja Villa</span> is your private
            sanctuary of indulgence.
          </p>
          <p>
            Our villa was designed to give you optimal comfort in luxury. With
            floor-to-ceiling glass sliding doors with a panoramic view, an
            infinity pool with poolside lounge, rain shower & open-roof bathtub,
            and a lush garden courtyard, this villa was designed to immerse you
            in nature’s beauty. Our villa also comes with a fully equipped
            kitchen, including services like laundry, cleaning, recommendations
            by locals to make you feel more at home.
          </p>
          <p>
            Whether you&apos;re traveling solo, as a couple, or with friends,
            <span className="italic"> Kala Senja Villa</span> offers effortless
            elegance in one of Lombok’s most enchanting settings.
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-screen-lg mx-auto mt-16 shadow-xl rounded-lg overflow-hidden"
      >
        <MultiCarousel images={images} className="text-black" />
      </motion.div>
    </div>
  );
}
