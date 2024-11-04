import MultiCarousel from "../MultiCarousel";

export default function Villa() {
  return (
    <div className="w-screen text-stone-800 px-4 py-8">
      <h1 className="text-8xl font-semibold text-center mb-12 font-libre lg:text-9xl">
        Kala Senja Villa
      </h1>
      <div alt="text_body" className="text-3xl lg:text-6xl pb-12 space-y-12">
        <p>
          Located in Kuta within 5 mins ride to the town’s many bars and
          eateries, our luxury villa offers a tranquil respite to wind down and
          recharge from your day. Indulge yourself with lavish amenities:
        </p>
        <ul className="list-disc ml-8 space-y-2">
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
          the light filled living room. Panoramic glass sliding doors in the
          main room allows the indoor space to seamlessly flow through to the
          pool terrace for a post meal lounge. When ready to turn in, our
          bedrooms provide plush pillowy serenity that feels like a home away
          from home. Ideal for solo trips, couples, friends to have a secluded
          getaway within the proximity of popular attractions.
        </p>
      </div>
      <MultiCarousel />
    </div>
  );
}
