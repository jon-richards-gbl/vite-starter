// const commutesPerYear = 260 * 2;
// const litresPerKM = 10 / 100;
// const gasLitreCost = 1.5;
// const litreCostKM = litresPerKM * gasLitreCost;
// const secondsPerDay = 60 * 60 * 24;
import { useAppSelector } from "../store";
import {
  selectUserDropdown,
  selectUserName,
  selectUserWeight,
} from "../store/form/formSelectors";

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

const Distance: React.FC<DistanceProps> = ({ leg }) => {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);
  const userDropdown = useAppSelector(selectUserDropdown);
  if (!leg) {
    return <div>No distance information available</div>;
  }

  const parsedDropdown = parseFloat(userDropdown);
  const parsedWeight = parseFloat(userWeight);

  const mins = () => {
    if (leg.duration?.value === undefined) return "no duration";
    else return (leg.duration?.value / 60).toString();
  };
  const miles = () => {
    if (leg.distance?.value === undefined) return "no distance";
    else return Math.floor((leg.distance?.value / 1000) * 0.621371);
  };

  const parsedMins = Math.floor(parseFloat(mins() || "0"));

  const calsLost = Math.floor(
    ((parsedDropdown * 3.5 * parsedWeight) / 200) * parsedMins
  );

  // If calsLost returns NaN it will return an empty string
  const formattedCalsLost = Number.isNaN(calsLost) ? "" : calsLost;

  console.log(calsLost);

  return (
    <div className="distance-container">
      <h2>Distance Information</h2>

      <div>
        <strong>Start Address:</strong> {leg.start_address}
      </div>
      <div>
        <strong>End Address:</strong> {leg.end_address}
      </div>
      <div>
        <hr />
        <div className="info">
          <p>
            {userName === undefined
              ? ""
              : `${userName} your journey will take `}
          </p>
          <p>
            <strong>{leg.duration?.text} </strong>
          </p>
          you will cover <strong>{leg.distance?.text} </strong> or{" "}
          <strong>{miles()} Miles</strong>{" "}
          <strong>
            <strong>
              {formattedCalsLost === ""
                ? ""
                : `you will lose ${formattedCalsLost} calories`}
            </strong>
          </strong>
        </div>
        <strong>Distance:</strong> {leg.distance?.text}
      </div>
      <div>
        <strong>Duration:</strong> {leg.duration?.text}
      </div>
      <div>
        <strong>Duration in Seconds:</strong> {leg.duration?.value}
      </div>
      <div>
        <div>
          <strong>Duration in minutes:</strong> {parsedMins}
        </div>
      </div>
    </div>
  );
};

export default Distance;
