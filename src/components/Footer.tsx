import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faInstagram,
  faLinkedin,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <div className="outer-footer">
          {" "}
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>{" "}
        </div> */}
        <div className="inner-footer">
          <ul className="socialList">
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className=" fa socialIcon" icon={faGithub} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
            </li>
          </ul>
          <ul className="techList">
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faReact} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className="socialIcon" icon={faSquareJs} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className="socialIcon" icon={faHtml5} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className="socialIcon" icon={faCss3Alt} />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
