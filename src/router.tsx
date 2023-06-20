import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import PageWrapper from "./components/common/PageWrapper";

const LandingPage = React.lazy(() => import("./components/LandingPage"));
const About = React.lazy(() => import("./components/About"));
const Form = React.lazy(() => import("./components/Form"));
const Map = React.lazy(() => import("./components/Map"));

export const enum PageRoutes {
  LandingPage = "/",
  About = "/about",
  Form = "/form",
  // Map = "/form/map",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<PageWrapper page={<LandingPage />} />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/map"
        element={
          <>
            <Form />
            <Map />
          </>
        }
      />
    </Route>
  )
);

export default router;
