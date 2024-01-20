import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVansLoader() {
  await requireAuth();
  return getVans();
}

const HostVans = () => {
  const data = useLoaderData();

  const id = useParams().id;

  const [currentVan, setCurrentVan] = React.useState(data[id]);

  return (
    <>
      <div className="flex flex-col items-left justify-start p-6 gap-4 text-white">
        <h1 className="text-2xl  font-bold">Your listed vans</h1>
        <div className="flex flex-col  gap-5">
          {data.map((item) => {
            return (
              <Link to={`/host/vans/${item.id - 1}`}>
                <div className="flex flex-row items-center h-[90px] gap-3  bg-white/10 text-white rounded-md p-5  text-black ">
                  <div>
                    <img className="w-[70px] rounded-md" src={item.imageUrl} />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">{item.name}</div>
                    <div className="">{`$${item.price}/day`}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HostVans;
