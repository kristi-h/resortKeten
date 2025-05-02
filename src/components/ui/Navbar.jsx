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
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex items-center justify-between px-6 py-2 lg:px-8">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center text-black hover:text-white transition-all duration-200 focus:outline-none"
        >
          <MenuIcon style={{ fontSize: 32 }} />
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-72 bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <MenuOpenIcon style={{ fontSize: 30 }} />
          </button>
        </div>
        <div className="flex flex-col px-6 py-6 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
