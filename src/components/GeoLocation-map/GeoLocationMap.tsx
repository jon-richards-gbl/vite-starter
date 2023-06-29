import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useMemo, useRef } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const GeoLocationMap = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 53.483959, lng: -2.244644 }),
    []
  );

  // Map options // Use memo so options do not render unless changed
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "55ec9d32771d5e8c",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container1"
      options={options}
      onLoad={onLoad}
    ></GoogleMap>
  );
};

export default GeoLocationMap;
