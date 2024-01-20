import React, { useEffect, useState } from "react";
import { Link, defer, useAsyncError } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../api.js";
import { useLoaderData } from "react-router-dom";

export function vansLoader() {
  return getVans();
}

const Vans = () => {
  const vanData = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    vanData ? setLoading(false) : setLoading(true);
  }, []);

  const [searchParam, setSearchParam] = useSearchParams();

  const typeFilter = searchParam.get("type");

  const displayedVans = vanData.filter((van) => {
    return typeFilter ? van.type.toLowerCase() == typeFilter : van;
  });

  return (
    <div className="flex flex-col gap-5 m-6 text-white">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Explore our van options</h1>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setSearchParam({ type: "simple" })}
              className={`px-4 py-1 text-sm hover:bg-red-950  transition-all duration-200  bg-gray-800 text-gray-300 rounded-md ${
                typeFilter == "simple" &&
                "bg-red-950 transition-all duration-100"
              }`}
            >
              Simple
            </button>

            <button
              onClick={() => setSearchParam({ type: "luxury" })}
              className={`px-4 py-1 text-sm hover:bg-red-950  transition-all duration-200  bg-gray-800 text-gray-300 rounded-md ${
                typeFilter == "luxury" &&
                "bg-red-950 transition-all duration-100"
              }`}
            >
              Luxury
            </button>

            <button
              onClick={() => setSearchParam({ type: "rugged" })}
              className={`px-4 py-1 text-sm hover:bg-red-950  transition-all duration-200   bg-gray-800 text-gray-300 rounded-md ${
                typeFilter == "rugged" &&
                "bg-red-950 transition-all duration-100"
              }`}
            >
              Rugged
            </button>
          </div>

          <div className="">
            {typeFilter && (
              <button
                onClick={() => setSearchParam({})}
                className="px-4 py-1  bg-gray-900  text-gray-300 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap gap-4  items-center ">
        {displayedVans.map((item) => {
          return (
            <Link
              key={item.id}
              state={{ search: searchParam.toString(), type: typeFilter }}
              to={`/vanInfo/${item.id}`}
            >
              <div className="flex flex-col text-[14px] font-bold gap-1 relative">
                <img
                  className="rounded-md w-[170px] hover:opacity-80 transition-all duration-400"
                  src={item.imageUrl}
                />

                <div className="flex justify-between">
                  <div className="">
                    <div>{item.name}</div>
                    {item.type == "Simple" && (
                      <button className="rounded-sm bg-orange-900 text-white text-sm px-1 py-0.5">
                        {item.type}
                      </button>
                    )}
                    {item.type == "Luxury" && (
                      <button className="rounded-sm bg-blue-900 text-white  text-black text-sm px-1 py-0.5">
                        {item.type}
                      </button>
                    )}
                    {item.type == "Rugged" && (
                      <button className="rounded-sm bg-green-900 text-white text-sm px-1 py-0.5">
                        {item.type}
                      </button>
                    )}
                  </div>
                  <div>{`$${item.price}`}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
