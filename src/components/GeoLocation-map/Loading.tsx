import { faBeer, faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <div className="header-row">
          <div className="beer">
            {" "}
            <FontAwesomeIcon className="fa-icon  fa-beer" icon={faBeer} />
          </div>

          <h1 className="loading-header">Bar Hop Uk</h1>
          <div className="beer">
            {" "}
            <FontAwesomeIcon className="fa-icon  fa-beer" icon={faBeer} />
          </div>
        </div>
        <h2 className="loading-subHeader">Getting your location</h2>
        <div className="loading-row">
          <FontAwesomeIcon className=" loading-hippo" icon={faHippo} />{" "}
        </div>
      </div>
    </>
  );
};

export default Loading;
