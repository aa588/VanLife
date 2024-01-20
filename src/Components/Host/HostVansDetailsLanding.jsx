import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVansDetailsLandingLoader() {
  await requireAuth();
  return getVans();
}

const HostVansDetailsLanding = () => {
  const data = useLoaderData();
  const id = useParams().id;
  const [currentVan, setCurrentVan] = React.useState(data[id]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <div className="flex flex-col gap-10 mt-10 ml-10 text-white  ">
        <Link relative="path" to={".."}>
          <h1 className="flex items-center gap-3 underline">
            <FaArrowLeft />
            Back to all vans
          </h1>
        </Link>

        <div className="flex flex-col  bg-white/10 rounded-md rounded-md">
          <div className="flex gap-4 items-center ">
            <img className="w-[150px] rounded-md" src={currentVan.imageUrl} />
            <div>
              <h1 className="bg-orange-400 rounded-md text-center w-[75px] text-sm p-1  text-white">
                {currentVan.type}
              </h1>
              <h1 className="text-2xl font-bold">{currentVan.name}</h1>
              <h1 className="font-bold">
                {`$${currentVan.price}`}
                <span className="font-normal">/day</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex gap-10  ">
          <NavLink
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to={"."}
            className="bg-gray-600 rounded-md px-2"
          >
            Details
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to={"pricing"}
            className="bg-gray-600 rounded-md px-2"
          >
            Pricing
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to={"photos"}
            className="bg-gray-600 rounded-md px-2"
          >
            Photos
          </NavLink>
        </div>
      </div>

      <Outlet context={[currentVan]} />
    </>
  );
};

export default HostVansDetailsLanding;
