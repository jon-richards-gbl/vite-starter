import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import PageWrapper from "./components/common/PageWrapper";

const LandingPage = React.lazy(() => import("./components/LandingPage"));
const LogInPage = React.lazy(() => import("./components/LogInPage"));
const SignUpPage = React.lazy(() => import("./components/SignUpPage"));

export const enum PageRoutes {
  LandingPage = "/",
  LogInPage = "/log-in",
  SignUpPage = "/sign-up",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.LandingPage} element={<App />}>
      <Route index element={<PageWrapper page={<LandingPage />} />} />
      <Route
        path={PageRoutes.LogInPage}
        element={<PageWrapper page={<LogInPage />} />}
      />
    </Route>
  )
);

export default router;
