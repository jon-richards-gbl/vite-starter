import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";

const MapContainer = ({ weight, dropdown, name }) => {
  console.log("weight:", weight);
  console.log("dropdown:", dropdown);
  console.log("name:", name);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map weight={weight} dropdown={dropdown} name={name} />;
};

export default MapContainer;
