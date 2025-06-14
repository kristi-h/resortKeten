import { useMemo } from "react";
import { pointsOfInterest } from "../data/mapMarkers";

const useFilteredPoints = ({ selectedRegion, selectedType }) => {
  const allPoints = useMemo(() => {
    const data = pointsOfInterest();
    return Object.values(data).flat();
  }, []);

  const filteredPoints = useMemo(() => {
    return allPoints.filter((point) => {
      const matchRegion = selectedRegion
        ? point.region === selectedRegion
        : true;
      const matchType = selectedType ? point.type === selectedType : true;
      return matchRegion && matchType;
    });
  }, [allPoints, selectedRegion, selectedType]);

  console.log("Filtered points:", filteredPoints);
  return filteredPoints;
};

export default useFilteredPoints;
