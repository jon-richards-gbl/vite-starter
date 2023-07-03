import { DirectionsRenderer, GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type DirectionsResult = google.maps.DirectionsResult;
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const GeoLocationMap = () => {
  const [myVariable, setMyVariable] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [clickedMarker, setClickedMarker] =
    useState<google.maps.places.PlaceResult | null>(null);

  const [directions, setDirections] = useState<DirectionsResult | undefined>(
    undefined
  );

  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

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

  // console.log("User location:", userLocation);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

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
          // console.log("vicinity", place);
          // setMyVariable(place);
          // setClickedMarker(place);
          // const myV = setMyVariable;
          // console.log("this guy", myV);
          google.maps.event.addListener(marker, "click", () => {
            const content = document.createElement("div");
            const nameElement = document.createElement("h2");

            nameElement.textContent = place.name!;
            content.appendChild(nameElement);

            const placeAddressElement = document.createElement("p");

            placeAddressElement.textContent = place.formatted_address!;
            content.appendChild(placeAddressElement);

            infowindow.setContent(content);
            infowindow.open(map, marker);
            console.log("Place:", place.formatted_address);
            //Set clicked marker to Place so it can be referenced outside of call back
            setClickedMarker(place);
          });
        };

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
    [loading]
  );
  // useEffect(() => {
  //   if (clickedMarker) {
  //     console.log("Clicked marker:", clickedMarker);
  //     // Perform actions with the clicked marker
  //   }
  // }, [clickedMarker]);
  // console.log("variable R", myVariable?.formatted_address);
  // console.log("user", setUserLocation.toString);

  if (loading) {
    return <div>Loading...</div>;
  }

  //Function using google.maps.geocoder to get lat and lng from an adress formatted to a string
  function getCoordinatesFromAddress(
    address: string
  ): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        console.log("address", address);
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
  }

  getCoordinatesFromAddress(clickedMarker?.formatted_address || "")
    .then((coordinates) => {
      console.log("formatted Address ", clickedMarker?.formatted_address);
      console.log("Latitude:", coordinates.lat);
      console.log("Longitude:", coordinates.lng);
    })
    .catch((error) => {
      console.error("Geocode request failed:", error);
    });

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
      {/* <button onClick={fetchDirections}>Get Directions</button> */}
    </>
  );
};

export default GeoLocationMap;
