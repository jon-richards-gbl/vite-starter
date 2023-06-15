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
        <div className="outer-footer">
          {" "}
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>{" "}
        </div>
        <div className="inner-footer">
          <ul className="socialList">
            <li>
              <a
                href="https://uk.linkedin.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon className=" fa socialIcon" icon={faGithub} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
              </a>
            </li>
          </ul>
          <ul className="techList">
            <li>
              <a
                href="https://react.dev/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon className="socialIcon" icon={faReact} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.javascript.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon className="socialIcon" icon={faSquareJs} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://en.wikipedia.org/wiki/HTML5"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon className="socialIcon" icon={faHtml5} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.w3schools.com/css"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon className="socialIcon" icon={faCss3Alt} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
