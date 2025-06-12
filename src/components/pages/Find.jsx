import { useState } from "react";
import LocalMap from "../modules/LocalMap";
import { pointsOfInterest } from "../../data/mapMarkers";

const categories = ["Beaches", "Waterfalls", "Markets", "Restaurants"];

export default function Find() {
  const [selectedType, setSelectedType] = useState(null);
  const data = pointsOfInterest;
  const allPOIs = Object.values(data).flat();

  const filtered = selectedType
    ? allPOIs.filter((poi) => poi.type === selectedType)
    : allPOIs;

  return (
    <div className="px-4 py-12 bg-primary min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-6xl font-bold text-yellow-700 font-saol mb-3 tracking-tight leading-tight mx-auto">
          Discover Local Gems
        </h2>
        <p className="text-lg text-yellow-600 font-saol leading-relaxed">
          Explore restaurants, beaches, cultural sites, and unforgettable
          experiences near our villa.
        </p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="w-full max-w-5xl h-[700px] rounded-2xl overflow-hidden border border-gray-300 shadow-2xl mb-6">
          <LocalMap points={filtered} />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {categories.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded text-primary ${
                selectedType === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
          <button
            onClick={() => setSelectedType(null)}
            className="px-4 py-2 bg-gray-300 text-primary rounded"
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
}
