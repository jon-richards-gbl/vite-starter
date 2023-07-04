import { useCallback, useEffect, useState } from "react";

interface LatLng {
  lat: number;
  lng: number;
}

interface DirectionsRoute {
  bounds: google.maps.LatLngBounds;
  legs: google.maps.DirectionsLeg[];
  overview_path: google.maps.LatLng[];
  overview_polyline: google.maps.LatLng;
  warnings: string[];
  waypoint_order: number[];
}

interface DirectionsLeg {
  distance: Distance;
  duration: Duration;
  end_address: string;
  end_location: LatLng;
  start_address: string;
  start_location: LatLng;
  steps: DirectionsStep[];
}

// Define other necessary types, such as Distance, Duration, and DirectionsStep, if needed

const useFetchDirections = (
  userLocation: LatLng | null,
  clickedMarker: google.maps.places.PlaceResult | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): DirectionsResult | null => {
  const [directions, setDirections] = useState<
    DirectionsResult | DirectionsRoute | null
  >(null);

  const fetchDirections = useCallback(() => {
    if (userLocation && clickedMarker && clickedMarker.geometry?.location) {
      const origin: LatLng = { lat: userLocation.lat, lng: userLocation.lng };
      const destination: LatLng = {
        lat: clickedMarker.geometry.location.lat(),
        lng: clickedMarker.geometry.location.lng(),
      };

      const directionsService = new google.maps.DirectionsService();

      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            // Map the necessary properties to DirectionsRoute
            const directionsRoute: DirectionsRoute = {
              bounds: result.bounds,
              legs: result.legs,
              overview_path: result.overview_path,
              overview_polyline: result.overview_polyline,
              warnings: result.warnings,
              waypoint_order: result.waypoint_order,
            };

            setDirections(directionsRoute);
          } else {
            console.error("Failed to fetch directions:", status);
          }
          setLoading(false);
        }
      );
    }
  }, [userLocation, clickedMarker, setLoading]);

  useEffect(() => {
    fetchDirections();
  }, [fetchDirections]);

  return directions;
};

export default useFetchDirections;
