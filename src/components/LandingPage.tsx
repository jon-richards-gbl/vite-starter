import { faHippo } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon
            className="fa-icon fa-light fa-hippo"
            icon={faHippo}
          />{" "}
        </div>
        <div className="landing-text">
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
                <img src="images/hop-guy-walking.jpeg" alt="" />
              </div>
              <div className="landing-card-header">
                <h3>Calorie Map</h3>
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
                <img src="images/hop-guy.jpeg" alt="" />
              </div>
              <div className="landing-card-header">
                <h3>Calorie Map</h3>
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
                <img src="images/hop-guy-2beers.jpeg" alt="" />
              </div>
              <div className="landing-card-header">
                <h3>Calorie Map</h3>
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
