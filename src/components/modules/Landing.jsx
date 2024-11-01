import paddies from "../../assets/rice_paddies.jpg";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${paddies})` }}
    >
      <div className="text-center space-y-8 text-orange-200 bg-black bg-opacity-50 p-8 rounded-lg animate-fade-in">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white bg-opacity-20 backdrop-blur-sm">
          <span className="font-semibold text-yellow-300 transition ease-in-out duration-300 hover:text-orange-400">
            Explore local life{" "}
            <a href="../pages/local" className="font-semibold text-yellow-100">
              Read more &rarr;
            </a>
          </span>
        </div>
        <div className="animate-slide-up">
          <h1 className="text-4xl font-bold sm:text-6xl drop-shadow-lg shadow-black">
            Explore Lombok
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-md mx-auto text-orange-200 drop-shadow-lg shadow-black">
            UNEARTH UNPARALLELED LANDSCAPES IN ITS IDYLLIC AND NATURAL SERENITY
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <NavLink
              to="./villa"
              className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-brown-500 text-orange-900 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Your private villa awaits...
            </NavLink>
            <NavLink
              to="./pages/local"
              className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-brown-500 text-orange-900 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Local Life
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
