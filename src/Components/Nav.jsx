import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center text-center p-4 w-full h-[70px] text-white">
      <Link to="/vanlife">
        <h1 className="text-2xl font-bold">#VANLIVE</h1>
      </Link>

      <div className="flex gap-3 p-2">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          <h1>Host</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          <h1>About</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/vans"}
        >
          <h1>Vans</h1>
        </NavLink>{" "}
        <NavLink className="mt-1" to={"/login"}>
          <h1>
            <AiOutlineUser />
          </h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
