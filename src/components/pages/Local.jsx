import MultiCarousel from "../MultiCarousel";
import { images } from "../../data/localImages";

export default function Local() {
  return (
    <div className="w-full px-6 lg:px-20 py-16 bg-black">
      <h1 className="text-4xl lg:text-5xl font-saol font-semibold text-center text-secondary mb-12">
        Discover Lombok
      </h1>
      <MultiCarousel images={images} />
    </div>
  );
}
