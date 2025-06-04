import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import bgImage from "@assets/local/rinjani_landscape.jpg";
import icon from "@assets/app/sasak_icon2.png";

export default function ScratchReveal({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(true);

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
      setShowSparkle(false);
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
      setShowSparkle(true);
    };

    const handleMouseLeave = () => {
      isDrawingRef.current = false;
      setShowSparkle(false);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setCursorPos({ x, y });

      if (!isDrawingRef.current) return;

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
        style={{ touchAction: "none" }}
      />

      {showSparkle && (
        <div
          className="absolute z-30 pointer-events-none transition-opacity duration-200"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={icon}
            alt="sparkle cursor"
            className="w-12 h-12 drop-shadow-md animate-pulse"
          />
          <div className="text-white text-sm mt-1 text-center bg-black bg-opacity-40 px-2 py-1 rounded">
            Reveal: click & drag
          </div>
        </div>
      )}

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
