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
          {/* <img src="/images/hop-guy.jpeg" alt="Hop" /> */}
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
          <div className="landing-card1">hello</div>
          <div className="landing-card2"></div>
          <div className="landing-card3"></div>
        </div>
      </aside>
    </>
  );
};

export default LandingPage;
