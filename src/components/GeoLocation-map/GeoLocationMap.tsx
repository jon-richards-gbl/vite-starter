import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const GeoLocationMap = () => {
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
            console.log("Place:", place);
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
                // console.log("results:", results);
                // console.log("results:", results[i]);
              }

              const firstResult = results[0];
              if (
                firstResult &&
                firstResult.geometry &&
                firstResult.geometry.location
              ) {
                map.panTo(firstResult.geometry.location);
              }
            }
          }
        );
      }
    },
    [loading]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="map-container1"
      options={options}
      onLoad={onLoad}
    />
  );
};

export default GeoLocationMap;
