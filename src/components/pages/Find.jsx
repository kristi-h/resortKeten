import LocalMap from "../modules/LocalMap";

export default function Find() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary to-sky-100 px-4 py-8">
      <div className="w-full max-w-4xl h-[650px] rounded-2xl overflow-hidden border border-gray-300 shadow-xl">
        <LocalMap />
      </div>
    </div>
  );
}
