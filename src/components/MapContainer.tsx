import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";

// type MapContainerProps = {
//   weight: string;

//   dropdown: string;
//   name: string;
// };
// const apiKey =
// const apiKey = "test";

const MapContainer: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map />;
};

export default MapContainer;
