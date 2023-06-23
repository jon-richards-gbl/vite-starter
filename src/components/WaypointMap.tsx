import { GoogleMap } from "@react-google-maps/api";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function WaypointMap() {
  const [start, setStart] = useState("chicago, il");
  const [end, setEnd] = useState("chicago, il");
  const [mode, setMode] =
    useState<keyof typeof google.maps.TravelMode>("DRIVING");
  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsRenderer = useMemo(
    () => new google.maps.DirectionsRenderer(),
    []
  );

  const center = useMemo(() => ({ lat: 53.483959, lng: -2.244644 }), []);

  const options = useMemo(
    () => ({
      mapId: "55ec9d32771d5e8c",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => {
    mapRef.current = map;

    if (mapRef.current) {
      directionsRenderer.setMap(mapRef.current);
      directionsRenderer.setPanel(document.getElementById("sidebar"));

      const control = document.getElementById("floating-panel");
      mapRef.current.controls[google.maps.ControlPosition.TOP_CENTER].push(
        control
      );

      calculateAndDisplayRoute();
    }
  }, []);

  const calculateAndDisplayRoute = useCallback(() => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode[mode],
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }, [start, end, mode, directionsRenderer]);

  useEffect(() => {
    calculateAndDisplayRoute();
  }, [calculateAndDisplayRoute]);

  return (
    <>
      <h1>New Map</h1>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container1"
        options={options}
        onLoad={onLoad}
      ></GoogleMap>
      <div>
        <div id="floating-panel">
          <strong>Start:</strong>
          <select value={start} onChange={(e) => setStart(e.target.value)}>
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
          <br />
          <strong>End:</strong>
          <select value={end} onChange={(e) => setEnd(e.target.value)}>
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
          <br />
          <b>Mode of Travel: </b>
          <select
            id="mode"
            value={mode}
            onChange={(e) =>
              setMode(e.target.value as keyof typeof google.maps.TravelMode)
            }
          >
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
        </div>
      </div>
      <div id="container">
        {/* <div id="map"></div> */}
        <div id="sidebar"></div>
      </div>
    </>
  );
}

export default WaypointMap;
