import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import bgImage from "@assets/local/rinjani_landscape.jpg";

export default function ScratchReveal({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2, false);
      ctx.fill();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ touchAction: "none" }}
      />
      <div className="relative z-20 pointer-events-none">{children}</div>
    </div>
  );
}

ScratchReveal.propTypes = {
  children: PropTypes.node,
};
