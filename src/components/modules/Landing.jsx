import { Link } from "react-router-dom";
import hero from "../../assets/landing/seagreen.mp4";

export default function Landing() {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden">
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

      <div className="relative z-10 text-center space-y-6 text-orange-200 bg-black bg-opacity-50 p-8 rounded-lg">
        <Link to="/local">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-saol text-black hover:text-white transition duration-300 cursor-pointer">
            Explore Lombok
          </h1>
        </Link>

        <Link to="/book">
          <button className="mt-2 px-6 py-3 bg-yellow-800 text-white font-gara text-lg rounded-md hover:bg-yellow-700 transition">
            Book Your Stay
          </button>
        </Link>
      </div>
    </div>
  );
}
