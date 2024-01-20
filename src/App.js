import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import { Vaninfo } from "./Components/VanInfo";
import Dashboard from "./Components/Host/Dashboard";
import { Income } from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";
import HostLayout from "./Components/Host/HostLayout";
import Layout from "./Components/Layout";
import HostVans from "./Components/Host/HostVans";
import HostVansDetails from "./Components/Host/HostVansDetails";
import Pricing from "./Components/Host/Pricing";
import Photos from "./Components/Host/Photos";
import HostVansDetailsLanding from "./Components/Host/HostVansDetailsLanding";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login, { action as loginAction } from "./Components/Login";
import { vansLoader } from "./Components/Vans";
import { vansInfoLoader } from "./Components/VanInfo";
import { hostVansLoader } from "./Components/Host/HostVans";
import { hostVansDetailsLoader } from "./Components/Host/HostVansDetails";
import { hostVansDetailsLandingLoader } from "./Components/Host/HostVansDetailsLanding";
import { requireAuth } from "./utils";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} action={loginAction} />

        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} loader={vansLoader} />
        <Route
          path="/vaninfo/:id"
          element={<Vaninfo />}
          loader={vansInfoLoader}
        />

        <Route
          path="/host"
          element={<HostLayout />}
          loader={async () => await requireAuth()}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await requireAuth()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVansDetailsLanding />}
            loader={hostVansDetailsLandingLoader}
          >
            <Route
              index
              element={<HostVansDetails />}
              loader={hostVansDetailsLoader}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async () => await requireAuth()}
            />
            <Route
              path="photos"
              element={<Photos />}
              loader={async () => await requireAuth()}
            />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
