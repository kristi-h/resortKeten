import morningBeach from "@assets/local/morning_beach.jpg";
import townsPeople from "@assets/local/townspeople.jpg";
import lushWithWaterfalls from "@assets/local/lush_with_waterfall.jpg";
import mountRinjani from "@assets/local/rinjani_landscape.jpg";
import handlooms from "@assets/local/handlooms.jpg";
import sadeWeaving from "@assets/local/sade_weaving.png";
import giliIslands from "@assets/local/sunset_waves.jpg";

export default function Local() {
  const images = [
    morningBeach,
    townsPeople,
    lushWithWaterfalls,
    mountRinjani,
    handlooms,
    sadeWeaving,
    giliIslands,
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 space-y-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Local Lombok
      </h1>

      <p className="leading-relaxed">
        Lombok is a whisper of paradise, a place caught in the spell of its
        natural rhythm. Imagine an island where the ocean greets you with a
        turquoise lullaby, where each sunrise pulls itself over mountains
        wrapped in clouds, and the air hums with tales of ancient culture and
        kindness. Lombok is like Bali’s quieter, soulful sibling—reserved yet
        full of life and vibrant landscapes.
      </p>

      <img
        src={morningBeach}
        alt="Lombok beach"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      <p className="leading-relaxed">
        On the island’s beaches, the waves seem to laugh softly as they roll
        onto the shore, leaving behind hidden treasures of shells and smooth
        stones, gifts from the ocean herself. Kuta Lombok’s sands stretch out in
        a vast, curving arc, perfect for long, unhurried walks or catching waves
        that dance in under the bright island sun.
      </p>

      <img
        src={images[1]}
        alt="townspeople"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      <p className="leading-relaxed">
        But the heart of Lombok isn’t merely in its beaches; it beats strongest
        in its lush jungles and the rugged rise of Mount Rinjani. Climbing
        Rinjani is a journey into the heavens, where the stars look down in
        wonder as you reach the crater lake at dawn, its waters holding the
        dreams of the island in still reflection.
      </p>
      <img
        src={images[2]}
        alt="lush greens"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src={images[3]}
        alt="Mount Rinjani"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      <p className="leading-relaxed">
        Lombok’s soul is woven into the lives of the Sasak people, its native
        artisans and storytellers. Their villages, Sade and Sukarara, are filled
        with the click and rhythm of handlooms, crafting textiles in colors as
        vibrant as a tropical sunrise.
      </p>

      <img
        src={images[4]}
        alt="Sasak village"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src={images[5]}
        alt="Sade village"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      <p className="leading-relaxed">
        In Lombok, every path seems to lead to discovery, whether it’s swimming
        among turtles in the clear waters around the Gili Islands or savoring
        the simple elegance of a sunset that stretches endlessly over the
        horizon.
      </p>

      <img
        src={images[6]}
        alt="Gili Islands"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}
