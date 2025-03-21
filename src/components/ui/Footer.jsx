export default function Footer() {
  return (
    <footer className="bg-[#704214] text-[#F5ECE0] py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-serif tracking-wide">
            ResortKeten
          </h2>
          <p className="text-lg font-light mt-2">
            Selamat Datang: Welcome to your home away
          </p>
        </div>

        <nav className="mb-6 lg:mb-0">
          <ul className="flex flex-col space-y-3 text-lg">
            <li>
              <a href="#villa" className="hover:text-[#EAD7BD] transition">
                Villas
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-[#EAD7BD] transition">
                Book Now
              </a>
            </li>
            <li>
              <a href="#local" className="hover:text-[#EAD7BD] transition">
                Local Life
              </a>
            </li>
            <li>
              <a href="#story" className="hover:text-[#EAD7BD] transition">
                Our Story
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#EAD7BD] transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="hover:text-[#EAD7BD] transition">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="hover:text-[#EAD7BD] transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      <div className="border-t border-[#F5ECE0] opacity-30 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} ResortKeten. All Rights Reserved.
      </div>
    </footer>
  );
}
