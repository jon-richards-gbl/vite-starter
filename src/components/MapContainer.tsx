import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";
import WaypointMap from "./WaypointMap";

const MapContainer: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    libraries: ["places", "geometry"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <>
      {" "}
      <Map />
      <WaypointMap />
    </>
  );
};

export default MapContainer;
