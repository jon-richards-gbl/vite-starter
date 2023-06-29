import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;

type MapOptions = google.maps.MapOptions;

const GeoLocationMap = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  // const center = useMemo<LatLngLiteral>(
  //   () => ({ lat: 51.5072, lng: 0.1276 }),
  //   []
  // );
  const [center, setCenter] = useState<LatLngLiteral>({
    lat: 51.5072,
    lng: 0.1276,
  });

  // Map options // Use memo so options do not render unless changed
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "55ec9d32771d5e8c",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);
  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="map-container1"
      options={options}
      onLoad={onLoad}
    ></GoogleMap>
  );
};

export default GeoLocationMap;
