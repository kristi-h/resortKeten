import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

export default function LocalMap({ points }) {
  const villaCoords = [-8.891, 116.277];
  const lombokCoords = [-8.651, 116.324];

  const markerIcon = new L.Icon({
    iconUrl: "/assets/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -30],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  return (
    <MapContainer
      center={lombokCoords}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={villaCoords} icon={markerIcon}>
        <Popup>Welcome to Lombok!</Popup>
      </Marker>

      {points.map((poi) => (
        <Marker key={poi.name} position={poi.coords} icon={markerIcon}>
          <Popup>
            <div>
              <h3 className="font-bold">{poi.name}</h3>
              <p className="text-sm text-gray-600">{poi.region}</p>
              <p className="text-sm">{poi.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

LocalMap.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      region: PropTypes.string,
      description: PropTypes.string,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
};
