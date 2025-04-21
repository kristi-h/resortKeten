import { useState } from "react";
import logo from "../../assets/app/sasak_icon.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "The Villa", href: "/villa" },
    { name: "Book Us", href: "/book" },
    { name: "Local Life", href: "/local" },
    { name: "Our Story", href: "/story" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative flex items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-[96px] h-[96px]" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center text-black hover:text-white transition-all duration-200 focus:outline-none"
        >
          {isOpen ? (
            <MenuOpenIcon style={{ fontSize: 36 }} />
          ) : (
            <MenuIcon style={{ fontSize: 36 }} />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full right-6 mt-2 w-48 bg-black text-white shadow-lg rounded-lg py-3 px-4 z-50 transition-all duration-300">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium hover:text-yellow-400 transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
