import rinja from "../../assets/mt-rinja.jpg";
// import "../../Landing.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="body border-opacity-100"
      style={{ backgroundImage: `url(${rinja})` }}
    >
      <div className="img-blurb">
        <div
          alt="landing"
          className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
        >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Explore local life{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold font-libre tracking-tight text-gray-900 sm:text-6xl">
              Explore Lombok
            </h1>
            <p className="mt-6 text-lg leading-8 text-black-200 font-libre">
              UNEARTH UNPARALLELED LANDSCAPES IN ITS IDYLLIC AND NATURAL
              SERENITY
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink to="./villa">Your private villa awaits...</NavLink>

              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Local Life <span aria-hidden="true">→</span>
              </a> */}

              <NavLink to="./pages/local">Local Life</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
