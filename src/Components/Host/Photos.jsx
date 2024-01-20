import React from "react";
import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const [currentVan] = useOutletContext();
  return (
    <div className=" m-10 text-white">
      {<img className="rounded-md w-[100px]" src={currentVan.imageUrl} />}
    </div>
  );
};

export default Photos;
