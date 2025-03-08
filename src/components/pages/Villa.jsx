import MultiCarousel from "../MultiCarousel";
import { motion } from "framer-motion";

export default function Villa() {
  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 px-8 py-16 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-serif font-semibold text-center mb-12 tracking-wide"
      >
        Kala Senja Villa
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl text-lg leading-relaxed space-y-8 text-center"
      >
        <p>
          Nestled in the heart of Kuta, just five minutes from the town’s
          vibrant bars and eateries,
          <span className="italic"> Kala Senja Villa</span> is your private
          oasis of tranquility. Immerse yourself in an atmosphere of refined
          luxury, designed to help you unwind and rejuvenate.
        </p>

        <div className="text-left bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Indulgent Amenities
          </h2>
          <ul className="grid grid-cols-2 gap-y-2 text-lg">
            <li>✨ Rain shower</li>
            <li>🛁 Open-roof bathtub</li>
            <li>🏖️ Poolside lounge</li>
            <li>🌿 Garden oasis pool</li>
            <li>🍳 Fully equipped kitchen</li>
            <li>🏡 Panoramic glass sliding doors</li>
          </ul>
        </div>

        <p>
          Designed with a seamless blend of{" "}
          <span className="italic">modern elegance and tropical serenity</span>,
          our villa ensures optimal rest with minimal distractions. Every corner
          is thoughtfully curated to exude comfort and sophistication.
        </p>

        <p>
          Enjoy a <span className="italic">fully equipped kitchen</span>, where
          you can experiment with fresh local ingredients. Dine in a luminous,
          airy living space with
          <span className="italic"> floor-to-ceiling glass doors</span>,
          offering breathtaking views of your private pool. After a day of
          exploration, retreat to a{" "}
          <span className="italic">plush sanctuary</span>, designed to feel like
          home.
        </p>

        <p>
          Whether you&apos;re traveling solo, as a couple, or with friends,{" "}
          <span className="italic">Kala Senja Villa</span> is the perfect
          secluded escape, with easy access to Lombok’s most sought-after
          attractions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-screen-lg mx-auto mt-16 shadow-xl rounded-lg overflow-hidden"
      >
        <MultiCarousel />
      </motion.div>
    </div>
  );
}
