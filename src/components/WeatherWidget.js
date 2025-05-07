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

  if (!weather) return <div>Loading weather...</div>;

  const { temperature, weatherCode } = weather.data.values;

  return (
    <div
      style={{
        background: "#f0f4f8",
        padding: "1rem",
        borderRadius: "8px",
        fontFamily: "serif",
      }}
    >
      <h3>🌤️ Lombok Weather</h3>
      <p>
        <strong>Temperature:</strong> {temperature}°C
      </p>
      <p>
        <strong>Condition:</strong> {weatherCode}
      </p>
    </div>
  );
};

export default WeatherWidget;
