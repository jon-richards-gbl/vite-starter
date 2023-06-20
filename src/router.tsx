import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import PageWrapper from "./components/common/PageWrapper";

const LandingPage = React.lazy(() => import("./components/LandingPage"));
const UserPage = React.lazy(() => import("./components/UserPage"));
const Form = React.lazy(() => import("./components/Form"));
const Map = React.lazy(() => import("./components/Map"));

export const enum PageRoutes {
  LandingPage = "/",
  Form = "/form",
  Map = "/form/map",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<PageWrapper page={<LandingPage />} />} />
      {/* <Route path={PageRoutes.Form} element={<PageWrapper page={<Form />} />}>
        <Route path={PageRoutes.Map} element={<Map />} />
      </Route> */}
      <Route
        path="/map"
        element={
          <>
            <Form />
            <Map />
          </>
        }
      ></Route>
    </Route>
  )
);

export default router;
