import { useEffect, useState } from "react";
import giliVideo from "../../assets/story/gili_islands.mp4";

const paragraphs = [
  `We imagined a villa that could mirror Lombok’s essence—a sanctuary rooted in the heart of the community, inviting visitors to pause, breathe, and connect with nature and locals.`,
  `Here, each sunrise over the sea, each gentle hum from the village, and each winding path through rice paddies feels like a part of Lombok’s timeless charm.`,
  `Our villas aren't just a destination; they're an invitation to experience this land’s serene beauty, the warmth of its people, and the gentle rhythm of island life. We welcome you to uncover Lombok’s magic just as we did, one step and one sunset at a time.`,
];

export default function About() {
  const [visibleParagraphs, setVisibleParagraphs] = useState([0]);

  useEffect(() => {
    if (visibleParagraphs.length < paragraphs.length) {
      const timeout = setTimeout(() => {
        setVisibleParagraphs((prev) => [...prev, prev.length]);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [visibleParagraphs]);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-stone-900 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={giliVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div className="relative text-medium italic font-light font-saol z-20 p-4 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-slate-200 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-semibold mb-10">
          About Us
        </h1>

        <div className="flex flex-col gap-10">
          {visibleParagraphs.map((paraIdx) => {
            const sentences = paragraphs[paraIdx]
              .split(". ")
              .filter(Boolean)
              .map((s, i, arr) => (i < arr.length - 1 ? s + "." : s));

            return (
              <div key={paraIdx} className="flex flex-col gap-4">
                {sentences.map((sentence, idx) => (
                  <p
                    key={idx}
                    className="opacity-0 animate-fade-slide text-sm sm:text-base md:text-lg lg:text-4xl leading-relaxed"
                    style={{ animationDelay: `${idx * 300}ms` }}
                  >
                    {sentence.trim()}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
