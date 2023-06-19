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

  // const parsedDropdown = parseInt(userDropdown);
  const parsedWeight = parseFloat(userWeight);
  console.log("UserDropsown:", userDropdown);
  // console.log("ParsedDropsown:", parsedDropdown);
  const mins = () => {
    if (leg.duration?.value === undefined) return "no";
    else return (leg.duration?.value / 60).toString();
  };

  const parsedMins = parseFloat(mins() || "0");

  const calsLost = ((userDropdown * 3.5 * parsedWeight) / 200) * parsedMins;

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
          <strong>Duration in minutes:</strong> {mins()}
        </div>
        <strong>Dropdown:</strong> {userDropdown}
      </div>
      <div>
        <strong>cals lost :</strong> {calsLost}
      </div>

      <div>
        <strong>Name:</strong> {userName}
      </div>
    </div>
  );
};

export default Distance;
