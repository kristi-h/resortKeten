// import paddies from "../../assets/rice_paddies.jpg";
import hero from "../../assets/landing/seagreen.mp4";

export default function Landing() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center"
      // style={{ backgroundImage: `url(${paddies})` }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-center space-y-8 text-orange-200 bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold sm:text-2xl lg:text-8xl text-black mb-4 font-saol drop-shadow-lg">
          Explore Lombok
        </h1>
        <p className="text-lg leading-8 max-w-md mx-auto text-orange-200">
          UNEARTH UNPARALLELED LANDSCAPES IN ITS IDYLLIC AND NATURAL SERENITY
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="#villa"
            className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-brown-500 text-orange-900 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            Your private villa awaits...
          </a>
          <a
            href="#local"
            className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-brown-500 text-orange-900 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            Local Life
          </a>
        </div>
      </div>
    </div>
  );
}
