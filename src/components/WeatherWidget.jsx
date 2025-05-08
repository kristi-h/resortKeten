import { useEffect, useState } from "react";
import axios from "axios";

const lat = -8.65;
const lon = 116.33;
const API_KEY = import.meta.env.VITE_WEATHER_API;

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `https://api.tomorrow.io/v4/weather/realtime?location=${lat},${lon}&apikey=${API_KEY}`
        );
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return null;

  const { temperature, weatherCode } = weather.data.values;

  return (
    <div className="w-full max-w-sm mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-md p-6 text-gray-800 font-light">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-900 tracking-tight">
          🌤 Lombok Weather
        </h3>
        <span className="text-sm text-gray-500">Live</span>
      </div>
      <div className="flex items-baseline space-x-3">
        <span className="text-4xl font-light">{temperature}°C</span>
        <span className="text-md text-gray-600">
          {translateCode(weatherCode)}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;

function translateCode(code) {
  const map = {
    1000: "Clear",
    1001: "Cloudy",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    3000: "Light Wind",
    3001: "Windy",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5100: "Light Snow",
    5101: "Heavy Snow",
    8000: "Thunderstorm",
  };
  return map[code] || "Unknown";
}
