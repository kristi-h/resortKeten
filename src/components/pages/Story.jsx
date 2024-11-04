export default function Story() {
  return (
    <div className="relative bg-slideshow text-stone-900">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Story content with responsive layout */}
      <div className="relative p-4 sm:p-8 md:p-12 lg:p-16 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
          Our Story
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
          Our story started with an unexpected adventure to Lombok that brought
          together two friends with a shared love for discovery: Rodrigo, a
          curious and adventurous Spaniard, and Desi, an Indonesian with an
          abiding love for her country’s landscapes and people. Rodrigo was a
          seasoned traveler who had already seen some of the world’s most
          beautiful places; yet was captivated by Lombok’s rugged coastline,
          lush greenery, and sense of quiet mystery. It felt like he’d stumbled
          upon a hidden sanctuary, where turquoise waves met untouched beaches
          and the rhythm of local life moved peacefully alongside nature.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
          Desi was reminded of how truly unique Lombok is—a place where nature
          still feels raw and inviting, where culture is vibrant and welcoming.
          Together, they started to dream of creating a space here, one that
          would feel like a home for anyone who visited, just as Lombok had
          become a second home for them.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
          Rodrigo saw Lombok as discovering a secret.. an untouched corner where
          nature’s raw beauty meets an authentic way of life. There was
          something here, in these secluded shores and age-old traditions, that
          felt like the world stood still. Together, they found “the perfect
          spot,” a place where the hills meet the ocean, a place where life
          feels genuine and unhurried.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          We imagined a villa that could mirror Lombok’s essence—a sanctuary
          rooted in the heart of the community, inviting visitors to pause,
          breathe, and connect with nature and locals. Here, each sunrise over
          the sea, each gentle hum from the village, and each winding path
          through rice paddies feels like a part of Lombok’s timeless charm. For
          us, this villa isn’t just a destination; it’s an invitation to
          experience this land’s serene beauty, the warmth of its people, and
          the gentle rhythm of island life. We welcome you to uncover Lombok’s
          magic just as we did, one step and one sunset at a time.
        </p>
      </div>
    </div>
  );
}
