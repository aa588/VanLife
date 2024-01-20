import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getVans } from "../api.js";

export function vansInfoLoader() {
  return getVans();
}

export const Vaninfo = () => {
  const location = useLocation();

  const vanId = useParams().id;

  const data = useLoaderData();

  const search = location.state?.search || "";

  const displayedVan = data.find((item, id) => item.id == vanId);

  const type = location.state?.type || "all";

  let typeFixed;

  type === "all"
    ? (typeFixed = "all")
    : (typeFixed = type.charAt(0).toUpperCase() + type.slice(1));

  return (
    <div className="p-4 text-white">
      <Link to={`/vans/?${search}`}>
        <h1 className="flex items-center gap-3 underline">
          <FaArrowLeft />
          {` Back to ${typeFixed} vans`}
        </h1>
      </Link>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-[350px] gap-2">
          <img className="mb-3 rounded-md " src={displayedVan.imageUrl} />
          <h1 className="w-20 bg-orange-500 py-1 text-white text-center rounded-md ">
            {displayedVan.type}
          </h1>
          <h1 className="font-bold">
            {`$${displayedVan.price}`}
            <span className="font-normal">/day</span>
          </h1>
          <p className="text-3xl font-bold tracking-wide ">
            {displayedVan.name}
          </p>
          <p>{displayedVan.description}</p>
          <button className="bg-orange-700 py-2 font-bold text-white rounded-md font-white hover:bg-orange-400 transition-all active:bg-orange-700">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
};
