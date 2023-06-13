import { Outlet } from "react-router-dom";

import Form from "./components/Form";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./css/Form.css";
import "./css/Nav.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Form />
      <Outlet />
    </>
  );
};

export default App;
