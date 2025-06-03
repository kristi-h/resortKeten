import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import bgImage from "@assets/local/rinjani_landscape.jpg";

export default function ScratchReveal({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    const handleMouseDown = () => {
      isDrawingRef.current = true;
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };

    const handleMouseLeave = () => {
      isDrawingRef.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDrawingRef.current) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 140, 0, Math.PI * 2, false);
      ctx.fill();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleReset = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (ctx && canvas) {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

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
        style={{ touchAction: "none", cursor: "crosshair" }}
      />
      <div className="relative z-20 pointer-events-none">{children}</div>
      <button
        onClick={handleReset}
        className="absolute bottom-6 right-6 z-30 px-4 py-2 bg-black bg-opacity-80 text-white rounded shadow hover:bg-opacity-100 transition pointer-events-auto"
      >
        Reset
      </button>
    </div>
  );
}

ScratchReveal.propTypes = {
  children: PropTypes.node,
};
