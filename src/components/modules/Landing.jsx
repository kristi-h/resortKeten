import { Link } from "react-router-dom";
import hero from "../../assets/landing/seagreen.mp4";
import GlowButton from "../ui/button/GlowButton";

export default function Landing() {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-10 text-center space-y-6">
        <Link to="/local">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-saol text-black hover:text-yellow-700 transition duration-300 cursor-pointer">
            Explore Lombok
          </h1>
        </Link>

        <Link to="/book">
          <GlowButton />
        </Link>
      </div>
    </div>
  );
}
