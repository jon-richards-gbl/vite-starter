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

export const enum PageRoutes {
  LandingPage = "/",
  UserPage = "/user",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<PageWrapper page={<LandingPage />} />} />
      <Route
        path={PageRoutes.UserPage}
        element={<PageWrapper page={<UserPage />} />}
      />
    </Route>
  )
);

export default router;
