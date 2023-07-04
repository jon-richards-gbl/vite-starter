import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
} from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type DirectionsResult = google.maps.DirectionsResult;
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const GeoLocationMap = () => {
  const [clickedMarker, setClickedMarker] = useState<
    | google.maps.places.PlaceResult
    | { formatted_address?: string }
    | null
    | undefined
  >(null);
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [stepDisplay, setStepDisplay] = useState<google.maps.InfoWindow | null>(
    null
  );

  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(
    null
  );
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );

  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState<LatLngLiteral>({
    lat: 51.5072,
    lng: 0.1276,
  });
  const [loading, setLoading] = useState(true);

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
          setUserLocation({ lat: latitude, lng: longitude });
          setLoading(false); // Set loading to false once geolocation is fetched
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLoading(false); // Set loading to false even if geolocation fails
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false); // Set loading to false if geolocation is not supported
    }
  }, []);

  const getDistance = (
    userLocation: unknown,
    clickedMarker:
      | google.maps.places.PlaceResult
      | { formatted_address?: string | undefined }
      | null
      | undefined
  ) => {
    if (!userLocation || !clickedMarker || !clickedMarker.formatted_address) {
      return;
    }

    const origin = userLocation;
    const destination = clickedMarker.formatted_address;
    setDestination(destination);

    const fetchDirections = () => {
      if (!origin || !destination) return;

      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            setDirections(result);
            console.log("result ", result);
          }
        }
      );

      const service = new google.maps.DistanceMatrixService();
      const distanceRequest = {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.WALKING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      };

      service.getDistanceMatrix(distanceRequest, (response, status) => {
        if (status === google.maps.DistanceMatrixStatus.OK) {
          if (
            response &&
            response.rows.length > 0 &&
            response.rows[0].elements.length > 0
          ) {
            const distance = response.rows[0].elements[0].distance;
            console.log("Distance:", distance.text);
          } else {
            console.error("No distance information available.");
          }
        } else {
          console.error("Failed to get distance:", status);
        }
      });
    };

    fetchDirections(); // Call the fetchDirections function to execute the logic
  };

  // Rest of the code...

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;
      directionsRendererRef.current = new google.maps.DirectionsRenderer({
        map: mapRef.current,
      });

      // Only execute the rest of the code if geolocation has been fetched
      if (!loading) {
        const service = new google.maps.places.PlacesService(map);
        const infowindow = new google.maps.InfoWindow();

        const createMarker = (place: google.maps.places.PlaceResult) => {
          if (!place.geometry || !place.geometry.location) return;

          const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
          });
          console.log("marker", place.geometry.location.lat);

          google.maps.event.addListener(marker, "click", () => {
            const content = document.createElement("div");
            const nameElement = document.createElement("h2");

            nameElement.textContent = place.name ?? "";
            content.appendChild(nameElement);

            const placeAddressElement = document.createElement("p");

            placeAddressElement.textContent = place.formatted_address ?? "";
            content.appendChild(placeAddressElement);

            infowindow.setContent(content);
            infowindow.open(map, marker);
            console.log("Place:", place.formatted_address);
            // Set clicked marker to Place so it can be referenced outside of the callback
            setClickedMarker(place);
            getDistance(userLocation, place);
            if (directionsServiceRef.current && stepDisplay && mapRef.current) {
              // calculateAndDisplayRoute(
              //   directionsRendererRef.current,
              //   directionsServiceRef.current,
              //   [],
              //   stepDisplay,
              //   mapRef.current
              // );
            }
          });
        };
        setStepDisplay(new google.maps.InfoWindow());
        const request = {
          location: map.getCenter(),
          radius: 5000,
          query: "brewery",
          fields: [
            "name",
            "geometry",
            "place_id",
            "formatted_address",
            "formatted_phone_number",
            "website",
            "rating",
            "opening_hours",
            "photos",
            "vicinity",
          ],
        };

        service.textSearch(
          request,
          (
            results: google.maps.places.PlaceResult[] | null,
            status: google.maps.places.PlacesServiceStatus
          ) => {
            if (
              status === google.maps.places.PlacesServiceStatus.OK &&
              results
            ) {
              for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
              }
            }
          }
        );
      }
    },
    [clickedMarker, loading, userLocation]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const getCoordinatesFromAddress = (
    address: string
  ): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (
          status === google.maps.GeocoderStatus.OK &&
          results &&
          results.length > 0
        ) {
          const { lat, lng } = results[0].geometry.location;
          resolve({ lat: lat(), lng: lng() });
        } else {
          reject(new Error("Geocode request failed"));
        }
      });
    });
  };

  // const calculateAndDisplayRoute = async (
  //   directionsRenderer: google.maps.DirectionsRenderer,
  //   directionsService: google.maps.DirectionsService,
  //   markerArray: google.maps.Marker[],
  //   stepDisplay: google.maps.InfoWindow,
  //   map: google.maps.Map
  // ) => {
  //   const origin = userLocation;
  //   const destination = clickedMarker?.formatted_address;

  //   if (destination) {
  //     try {
  //       const coordinates = await getCoordinatesFromAddress(destination);
  //       const directionsRequest: google.maps.DirectionsRequest = {
  //         origin: origin,
  //         destination: coordinates,
  //         travelMode: google.maps.TravelMode.WALKING,
  //       };

  //       directionsService.route(directionsRequest, (response, status) => {
  //         if (status === google.maps.DirectionsStatus.OK && response !== null) {
  //           directionsRenderer.setDirections(response);
  //           const myRoute = response.routes[0].legs[0];
  //           console.log("myRoute:", myRoute);
  //           showSteps(myRoute, markerArray, stepDisplay, map);
  //         } else {
  //           window.alert("Failed to get directions. Status: " + status);
  //         }
  //       });
  //     } catch (error) {
  //       window.alert("Failed to get coordinates: " + error);
  //     }
  //   }
  // };

  // const showSteps = (
  //   myRoute: google.maps.DirectionsLeg,
  //   markerArray: google.maps.Marker[],
  //   stepDisplay: google.maps.InfoWindow,
  //   map: google.maps.Map
  // ) => {
  //   for (let i = 0; i < myRoute.steps.length; i++) {
  //     const marker = markerArray[i] || new google.maps.Marker();

  //     marker.setMap(map);
  //     marker.setPosition(myRoute.steps[i].start_location);
  //     attachInstructionText(
  //       stepDisplay,
  //       marker,
  //       myRoute.steps[i].instructions,
  //       map
  //     );
  //   }
  // };

  // const attachInstructionText = (
  //   stepDisplay: google.maps.InfoWindow,
  //   marker: google.maps.Marker,
  //   text: string,
  //   map: google.maps.Map
  // ) => {
  //   google.maps.event.addListener(marker, "click", () => {
  //     stepDisplay.setContent(text);
  //     stepDisplay.open(map, marker);
  //   });
  // };

  // const fetchDirections = () => {
  //   if (!origin || !destination) return;

  //   const service = new google.maps.DirectionsService();
  //   service.route(
  //     {
  //       origin,
  //       destination,
  //       travelMode: google.maps.TravelMode.WALKING,
  //     },
  //     (result, status) => {
  //       if (status === "OK" && result) {
  //         setDirections(result);
  //       }
  //     }
  //   );

  //   const service = new google.maps.DistanceMatrixService();
  //   const distanceRequest = {
  //     origins: [origin],
  //     destinations: [destination],
  //     travelMode: google.maps.TravelMode.WALKING,
  //     unitSystem: google.maps.UnitSystem.METRIC,
  //     avoidHighways: false,
  //     avoidTolls: false,
  //   };

  //   service.getDistanceMatrix(distanceRequest, (response, status) => {
  //     if (status === google.maps.DistanceMatrixStatus.OK) {
  //       if (
  //         response &&
  //         response.rows.length > 0 &&
  //         response.rows[0].elements.length > 0
  //       ) {
  //         const distance = response.rows[0].elements[0].distance;
  //         console.log("Distance:", distance.text);
  //       } else {
  //         console.error("No distance information available.");
  //       }
  //     } else {
  //       console.error("Failed to get distance:", status);
  //     }
  //   });
  // };

  return (
    <>
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container1"
        options={options}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: "#1976D2",
                strokeWeight: 5,
              },
            }}
          />
        )}
      </GoogleMap>
    </>
  );
};

export default GeoLocationMap;
