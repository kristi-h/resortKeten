import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import bgImg from "@assets/local/rinjani_landscape.jpg";
import brushImg from "@assets/brush.png";
import sparkleImg from "@assets/sparkle.png";

export default function ScratchReveal({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const draw = (ctx, x, y, brush) => {
    ctx.globalCompositeOperation = "destination-out";
    ctx.drawImage(brush, x - 32, y - 32, 64, 64);
    setSparkles((prev) => [...prev, { x, y, id: Date.now() + Math.random() }]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = bgImg;
    img.onload = () => {
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles((prev) => prev.slice(-15));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const scratch = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const brush = new Image();
    brush.src = brushImg;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    brush.onload = () => draw(ctx, x, y, brush);
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setSparkles([]);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={scratch}
    >
      <img
        src={bgImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-auto"
      />
      {sparkles.map((s) => (
        <img
          key={s.id}
          src={sparkleImg}
          className="absolute z-20 pointer-events-none animate-ping"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: "16px",
            height: "16px",
          }}
        />
      ))}
      <button
        onClick={resetCanvas}
        className="absolute bottom-6 right-6 z-30 bg-yellow-700 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
      >
        Reset
      </button>
      <div className="relative z-30">{children}</div>
    </div>
  );
}

ScratchReveal.propTypes = {
  children: PropTypes.node,
};
