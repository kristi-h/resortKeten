import { useRef } from "react";
import PropTypes from "prop-types";

export default function RevealHover({ children }) {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = overlayRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    overlayRef.current.style.setProperty("--x", `${x}%`);
    overlayRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0 bg-rinjani_bg bg-cover bg-center" />
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: "white",
          WebkitMaskImage:
            "radial-gradient(circle 160px at var(--x, 50%) var(--y, 50%), transparent 0%, black 100%)",
          maskImage:
            "radial-gradient(circle 160px at var(--x, 50%) var(--y, 50%), transparent 0%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />

      <div className="relative z-20">{children}</div>
    </div>
  );
}

RevealHover.propTypes = {
  children: PropTypes.node,
};
