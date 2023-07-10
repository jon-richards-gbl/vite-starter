import { useEffect, useState } from "react";

import { useAppSelector } from "../../store";
import {
  selectUserDropdown,
  selectUserName,
  selectUserWeight,
} from "../../store/form/formSelectors";

type WaypointInformationProps = {
  legs: google.maps.DirectionsLeg[] | undefined;
};
const WaypointInformation: React.FC<WaypointInformationProps> = ({ legs }) => {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);
  const userDropdown = useAppSelector(selectUserDropdown);

  useEffect(() => {
    if (legs && legs.length > 0) {
      legs.forEach((leg) => {
        // Access and process each leg object here
        console.log("waypoint info leg", leg);
      });
    }
  }, [legs]);

  console.log("waypoint info");
  console.log("Legs:", legs);

  return (
    <>
      <div className="distance-container">
        <h1>Hello {userName}</h1>

        {legs && legs.length > 0 && (
          <div>
            <h2>Legs:</h2>
            <ul>
              {legs.map((leg, index) => (
                <li key={index}>
                  Start Address: {leg.start_address}
                  <br />
                  End Address: {leg.end_address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default WaypointInformation;
