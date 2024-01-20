import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVansDetailsLoader() {
  await requireAuth();
  return getVans();
}

const HostVansDetails = () => {
  const data = useLoaderData();
  const id = useParams().id;
  const [currentVan, setCurrentVan] = React.useState(data[id]);
  return (
    <div className="flex flex-col gap-5 mt-4 m-10 text-white">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">
          Name:
          <span className="font-normal"> {currentVan.name}</span>
        </h1>
        <h1 className="font-bold">
          Category:
          <span className="font-normal"> {currentVan.type}</span>
        </h1>
        <h1 className="font-bold">
          {" "}
          Description:
          <span className="font-normal"> {currentVan.description}</span>
        </h1>
        <h1 className="font-bold">
          Visibility:
          <span className="font-normal"> Public</span>
        </h1>
      </div>
    </div>
  );
};

export default HostVansDetails;
