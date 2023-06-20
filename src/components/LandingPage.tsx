import {
  faBeer,
  faHippo,
  faMapLocationDot,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <>
      <header>
        <div className="landing-header">
          <h1>bar hop uk</h1>
        </div>
      </header>
      <main>
        <div className="logo-container">
          <FontAwesomeIcon className="fa-icon fa-hippo" icon={faHippo} />{" "}
        </div>
        <div className="landing-text">
          <h2>What we do </h2>

          <p className="landing-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            est eos praesentium, asperiores cumque molestias voluptas rem
            quibusdam numquam temporibus hic delectus, ratione, error suscipit
            architecto! Corporis ratione voluptate laudantium!
          </p>
        </div>
      </main>
      <aside>
        <div className="landing-card-container">
          <div className="landing-card-col">
            <div className="landing-card">
              {" "}
              <div className="landing-card-image">
                <FontAwesomeIcon className="fa-icon  fa-beer" icon={faMapPin} />
              </div>
              <div className="landing-card-header">
                <a href="/map">
                  {" "}
                  <h3>Calorie Map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="landing-card-col">
            {" "}
            <div className="landing-card">
              {" "}
              <div className="landing-card-image">
                <FontAwesomeIcon
                  className="fa-icon  fa-beer"
                  icon={faMapLocationDot}
                />
              </div>
              <div className="landing-card-header">
                <a href="/waypointMap">
                  <h3>Way-point map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="landing-card-col">
            {" "}
            <div className="landing-card">
              {" "}
              <div className="landing-card-image">
                <FontAwesomeIcon className="fa-icon  fa-beer" icon={faBeer} />
              </div>
              <div className="landing-card-header">
                <a href="/geoMap">
                  <h3>Geo-location map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LandingPage;
