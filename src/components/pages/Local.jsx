import { images } from "../../data/localImages";

export default function Local() {
  return (
    <div className="w-full px-6 lg:px-20 py-16 bg-black">
      <h1 className="text-4xl lg:text-5xl font-saol font-semibold text-center text-secondary mb-24">
        Discover Lombok
      </h1>
      <div className="flex flex-col gap-32">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-80"
              />
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-xl lg:text-xl font-thin font-helv text-secondary mb-4">
                {item.title}
              </h2>
              <p className="text-lg leading-relaxed font-thin font-gara">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
