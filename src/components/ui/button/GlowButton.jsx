import { useState } from "react";

export default function GlowButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      className="relative px-6 py-3 border-2 border-yellow-800 text-yellow-800 font-gara text-lg rounded-md bg-transparent transition-all duration-300 overflow-hidden group"
    >
      <span className="relative z-10">Book Your Stay</span>
      <span
        className="absolute w-32 h-32 bg-white/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 ease-out"
        style={{
          left: position.x - 64,
          top: position.y - 64,
        }}
      />
    </button>
  );
}
