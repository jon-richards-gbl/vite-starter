import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef } from "react";

import WaypointInformation from "./WaypointInformation";
import GeoInformation from "./WaypointInformation";

type MapOptions = google.maps.MapOptions;

interface WaypointMapProps {
  legs: google.maps.DirectionsLeg[] | undefined;
}

const WaypointMap = ({ legs }: WaypointMapProps) => {
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "55ec9d32771d5e8c",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  function initMap(): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 14,
        center: { lat: 53.483959, lng: -2.244644 },
      }
    );

    directionsRenderer.setMap(map);

    (document.getElementById("submit") as HTMLElement).addEventListener(
      "click",
      () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      }
    );

    function calculateAndDisplayRoute(
      directionsService: google.maps.DirectionsService,
      directionsRenderer: google.maps.DirectionsRenderer
    ) {
      const waypts: google.maps.DirectionsWaypoint[] = [];
      const checkboxArray = document.getElementById(
        "waypoints"
      ) as HTMLSelectElement;

      for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
          waypts.push({
            location: (checkboxArray[i] as HTMLOptionElement).value,
            stopover: true,
          });
        }
      }

      directionsService
        .route({
          origin: (document.getElementById("start") as HTMLInputElement).value,
          destination: (document.getElementById("end") as HTMLInputElement)
            .value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
          console.log(response);

          const route = response.routes[0];
          const summaryPanel = document.getElementById(
            "directions-panel"
          ) as HTMLElement;

          summaryPanel.innerHTML = "";

          // For each route, display summary information.
          if (route && route.legs) {
            for (let i = 0; i < route.legs.length; i++) {
              const routeSegment = i + 1;
              console.log("i", i);
              summaryPanel.innerHTML +=
                "<b>Route Segment: " + routeSegment + "</b><br>";
              summaryPanel.innerHTML += route.legs[i].start_address + " to ";
              summaryPanel.innerHTML += route.legs[i].end_address + "<br>";

              const leg = route.legs[i];
              const distanceText = leg.distance?.text || "Unknown distance";
              console.log("distance", distanceText);
              summaryPanel.innerHTML += distanceText + "<br><br>";

              //   const leg1 = route.legs[i];
              //   if (leg1 !== undefined)
              //     for (let j = 0; j < leg1.steps.length; j++) {
              //       const step = leg1.steps[j];
              //       summaryPanel.innerHTML += step.distance?.text + "<br>";

              //       // console.log("leg staps", leg.steps[j]);
              //     }

              //   summaryPanel.innerHTML += "<br>";
            }
          }
        })
        .catch((e) => window.alert("Directions request failed due to " + e));
    }
  }

  useEffect(() => {
    initMap();
  }, []);

  // Rest of the code...

  return (
    <>
      <div className="map-container">
        <div className="controls-container">
          <div id="sidebar">
            <div>
              <b>Start:</b>
              <select id="start">
                <option value=" 66 N Western St, Manchester M12 6DD">
                  Manchester Brewing
                </option>
                <option value="99 N Western St, Manchester M12 6JL">
                  Alphabet Brewing
                </option>
                <option value="75 N Western St, Manchester M12 6DY">
                  Beer Nouveau
                </option>
                <option value="Unit 18, Piccadilly Trading Estate, Manchester M1 2NP">
                  Track Brewing Co - Brewery & Taproom
                </option>
                <option value="35 Peter St, Manchester M2 5BG">
                  BrewDog Manchester
                </option>
                <option value="5 Jack Rosenthal St, Manchester M15 4RA">
                  The Gas Works Brewbar
                </option>
                <option value="10 Tariff St, Manchester M1 2FF">
                  Northern Monk Refectory MCR
                </option>
              </select>
              <br />
              <b>Waypoints:</b> <br />
              <i>(Ctrl+Click or Cmd+Click for multiple selection)</i> <br />
              <select multiple id="waypoints">
                <option value="15 Red Bank, Cheetham Hill, Manchester M4 4HF">
                  Beatnikz Republic Brewing Co.
                </option>
                <option value="Empire St, Cheetham Hill, Manchester M3 1JD">
                  Joseph Holt Brewery
                </option>
                <option value=" 66 N Western St, Manchester M12 6DD">
                  Manchester Brewing
                </option>
                <option value="99 N Western St, Manchester M12 6JL">
                  Alphabet Brewing
                </option>
                <option value="75 N Western St, Manchester M12 6DY">
                  Beer Nouveau
                </option>
                <option value="Unit 18, Piccadilly Trading Estate, Manchester M1 2NP">
                  Track Brewing Co - Brewery & Taproom
                </option>
                <option value="35 Peter St, Manchester M2 5BG">
                  BrewDog Manchester
                </option>
                <option value="5 Jack Rosenthal St, Manchester M15 4RA">
                  The Gas Works Brewbar
                </option>
                <option value="10 Tariff St, Manchester M1 2FF">
                  Northern Monk Refectory MCR
                </option>
              </select>
              <br />
              <b>End:</b>
              <select id="end">
                <option value=" 66 N Western St, Manchester M12 6DD">
                  Manchester Brewing
                </option>
                <option value="99 N Western St, Manchester M12 6JL">
                  Alphabet Brewing
                </option>
                <option value="75 N Western St, Manchester M12 6DY">
                  Beer Nouveau
                </option>
                <option value="Unit 18, Piccadilly Trading Estate, Manchester M1 2NP">
                  Track Brewing Co - Brewery & Taproom
                </option>
                <option value="35 Peter St, Manchester M2 5BG">
                  BrewDog Manchester
                </option>
                <option value="5 Jack Rosenthal St, Manchester M15 4RA">
                  The Gas Works Brewbar
                </option>
                <option value="10 Tariff St, Manchester M1 2FF">
                  Northern Monk Refectory MCR
                </option>
              </select>
              <br />
              <input type="submit" id="submit" />
            </div>
            <div id="directions-panel"></div>
          </div>
          <div>
            <label htmlFor="origin">Where you at: </label>
          </div>
        </div>
        <GoogleMap
          id="map"
          mapContainerStyle={{ height: "400px", width: "100%" }}
          zoom={12}
          center={{ lat: 41.85, lng: -87.65 }}
          options={options}
        >
          {" "}
          {legs && legs.length > 0 && <WaypointInformation leg={legs[0]} />}
        </GoogleMap>
      </div>
    </>
  );
};

export default WaypointMap;
