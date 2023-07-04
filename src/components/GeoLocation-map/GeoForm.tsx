import {
  faClock,
  faPersonWalking,
  faScaleBalanced,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import { parse, icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppSelector } from "../../store";
import {
  selectUserDropdown,
  selectUserName,
  selectUserWeight,
} from "../../store/form/formSelectors";

const GeoForm = () => {
  const userName = useAppSelector(selectUserName);
  const userWeight = useAppSelector(selectUserWeight);
  const userDropdown = useAppSelector(selectUserDropdown);
  return (
    <>
      <form>
        <div className="grid-container">
          <div className="grid-even-columns">
            <div className="icon">
              <FontAwesomeIcon className="fa-icon" icon={faUser} />{" "}
              <p>{userName}</p>
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon
                className="fa-icon"
                icon={faScaleBalanced}
              />{" "}
              <p>{userWeight}</p>
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon className="fa-icon" icon={faClock} />
              <p>{}</p>
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon
                className="fa-icon"
                icon={faPersonWalking}
              />{" "}
              <p>{userDropdown}</p>
            </div>
            <div className="row">
              <input
                className="submitBtn"
                // onClick={handleGetSpeed}
                type="submit"
              />
            </div>
          </div>

          <div className="grid-one-columns">
            <div className="column col1">
              <div className="card">
                <div className="card-container">
                  <h4>{/* <b className="name">{name}</b> */}</h4>
                  <p>
                    {/* You burn {calsBun} calories on a {time} minute walk */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default GeoForm;
