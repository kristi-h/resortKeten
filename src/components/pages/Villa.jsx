import MultiCarousel from "../MultiCarousel";

export default function Villa() {
  return (
    <div className="w-full min-h-screen text-stone-800 px-6 py-8 flex flex-col">
      <h1 className="text-4xl font-semibold text-center mb-6 font-libre md:text-3xl sm:text-2xl">
        Kala Senja Villa
      </h1>

      <div className="text-xl md:text-lg sm:text-base space-y-6 overflow-auto pb-8">
        <p>
          Located in Kuta within 5 mins ride to the town’s many bars and
          eateries, our luxury villa offers a tranquil respite to wind down and
          recharge from your day. Indulge yourself with lavish amenities:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Rain shower</li>
          <li>Open roof bath tub</li>
          <li>Pool side lounge</li>
          <li>Garden oasis pool</li>
          <li>Fully equipped kitchen</li>
          <li>Panoramic glass sliding doors</li>
        </ul>
        <p>
          Our rooms have been designed to give our guests optimal recharge by
          focusing on minimal distractions and clean functional space with
          quality furnishings for your comfort.
        </p>
        <p>
          Kala Senja Villa has a fully equipped kitchen for you to explore new
          culinary ingredients from our local markets and feast effortlessly in
          the light-filled living room. Panoramic glass sliding doors in the
          main room allow the indoor space to seamlessly flow through to the
          pool terrace for a post-meal lounge. When ready to turn in, our
          bedrooms provide plush pillowy serenity that feels like a home away
          from home. Ideal for solo trips, couples, and friends seeking a
          secluded getaway within the proximity of popular attractions.
        </p>
      </div>

      <div className="w-full h-auto min-h-[40vh] flex justify-center items-center">
        <MultiCarousel />
      </div>
    </div>
  );
}
