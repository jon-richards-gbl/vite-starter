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
const FormMap = React.lazy(() => import("./components/FormMap"));
const GeoLocationMap = React.lazy(
  () => import("./components/GeoLocation-map/GeoLocationMap")
);
const WaypointMap = React.lazy(
  () => import("./components/waypointMap/WaypointMap")
);

export const enum PageRoutes {
  LandingPage = "/",
  About = "/about",
  Form = "/form",
  FormMap = "/formMap",
  GeoLocationMap = "/geoMap",
  WaypointMap = "/waypointMap",

  // Map = "/form/map",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<PageWrapper page={<LandingPage />} />} />
      <Route
        path={PageRoutes.About}
        element={<PageWrapper page={<About />} />}
      />
      <Route
        path={PageRoutes.FormMap}
        element={<PageWrapper page={<FormMap />} />}
      />
      {/* <Route
        path="/map"
        element={
          <>
            <Form />
            <Map />
          </>
        }
      /> */}
      <Route
        path={PageRoutes.GeoLocationMap}
        element={<PageWrapper page={<GeoLocationMap />} />}
      />
      <Route
        path={PageRoutes.WaypointMap}
        element={<PageWrapper page={<WaypointMap />} />}
      />
    </Route>
  )
);

export default router;
