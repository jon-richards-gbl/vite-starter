import { Outlet } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined (in Header?) above. */}
      <Outlet />
    </>
  );
};

export default App;
