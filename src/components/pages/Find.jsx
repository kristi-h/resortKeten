import LocalMap from "../modules/LocalMap";

export default function Find() {
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

      <div className="flex items-center justify-center">
        <div className="w-full max-w-5xl h-[700px] rounded-2xl overflow-hidden border border-gray-300 shadow-2xl">
          <LocalMap />
        </div>
      </div>
    </div>
  );
}
