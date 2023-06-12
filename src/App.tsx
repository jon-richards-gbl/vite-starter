import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import "./css/Nav.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
