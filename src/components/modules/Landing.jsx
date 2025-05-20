import { Link } from "react-router-dom";
import hero from "../../assets/landing/seagreen.mp4";

export default function Landing() {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center">
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
        <Link to="/local">
          <h1 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-4xl font-bold sm:text-4xl md:text-6xl lg:text-6xl text-black mb-4 font-saol drop-shadow-lg hover:text-white transition-colors duration-300 cursor-pointer">
            Explore Lombok
          </h1>
        </Link>
      </div>
    </div>
  );
}
