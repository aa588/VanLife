import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <div>
      <nav className="p-4 flex gap-10 text-white">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to={"/host"}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/host/income"}
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to={"vans"}
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/host/reviews"}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
