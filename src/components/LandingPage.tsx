import {
  faBeer,
  faHippo,
  faMapLocationDot,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// Import Axios from the 'axios' module
import { useEffect, useState } from "react";

interface UserData {
  f_name: string;
  l_name: string;
  pic: number[] | null;
  id: number;
}

const LandingPage = () => {
  const [userData, setUserData] = useState<UserData>({
    f_name: "",
    l_name: "",
    pic: null,
    id: 0,
  });

  //Stores JWT tokens so user data will p[ersist
  const getUserDataFromLocalStorage = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  const [userImagePath, setUserImagePath] = useState("");
  const fetchUserData = async (userId: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      const userImageData = response.data.user;
      console.log("userData yes", userImageData);
      console.log("userData.id", userId);
      console.log(userData.f_name);
      console.log("userImageData name", userImageData.f_name);
      console.log("pic", userData.pic);
      const imageResponse = await axios.get(
        `http://localhost:3000/images?user_id=${userImageData.id}`
      );

      const userImage = imageResponse.data[0]; // Assuming you get one image per user
      setUserImagePath(userImage.file_path); // Set user image path
      console.log("userImageData:", userImageData);
      console.log("userImageData.id:", userImageData.id);
      console.log("userImage.file_path", userImage.file_path);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    // Rest of your code to set user data and fetch image path
  };

  useEffect(() => {
    if (userData.id) {
      fetchUserData(userData.id);
    }
  }, [userData.id]);

  console.log(userData);

  return (
    <>
      <header>
        <div className="landing-header">
          <h1>bar hop uk</h1> <br />
        </div>
        <div className="name-header">
          {userData.f_name && userData.l_name ? (
            <p>
              {userData ? (
                <p>
                  Hello, {userData.f_name.trim()} {userData.l_name.trim()}!
                </p>
              ) : (
                <p>Loading...</p>
              )}
            </p>
          ) : null}
        </div>
      </header>
      <main>
        <div className="logo-container">
          <FontAwesomeIcon
            className="fa-icon fa-hippo landing-hippo"
            icon={faHippo}
          />{" "}
        </div>
        <div className="landing-text">
          <h2>What we do </h2>
          {userData && (
            // <img id="image" className="picP" src={picSrc} alt="noooo" />
            <img src={userData.pic} id="image" alt="" />
          )}

          <p className="landing-p">
            Hey, hello and welcome. Bar Hop UK is a unique way of combining
            craft drinking with a little bit of mindfullness to health. With our
            maps we can calculate your route, journey time with your the amount
            of calories you will loose on the journey. Just fill out out your
            own personal calorie form from our{" "}
            <a className="about-link" href="/about">
              about you page{" "}
            </a>{" "}
            you page then visit on our maps on of our maps.
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
                <a href="/FormMap">
                  {" "}
                  <h3>Calorie Map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>
                  {" "}
                  A map that will calculate the distance, time and calorie loss
                  across two seperate locations.
                </p>
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
                <a href="/waypointFormMap">
                  <h3>Bar HOP Map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>
                  A map to plot your route across Manchesters breweries and
                  craft beer bars.{" "}
                </p>
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
                <a href="/GeoLocationFormMap">
                  <h3>Geo-location map</h3>
                </a>
                <hr></hr>
              </div>
              <div className="landing-card-text">
                <p>
                  A map that displays the closest breweries and craft beer bars
                  to your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LandingPage;
