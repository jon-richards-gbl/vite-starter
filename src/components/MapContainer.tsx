import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";

type MapContainerProps = {
  weight: string;

  dropdown: string;
  name: string;
};
const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

const MapContainer: React.FC<MapContainerProps> = ({
  weight,
  dropdown,
  name,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map weight={weight} dropdown={dropdown} name={name} />;
};

export default MapContainer;
