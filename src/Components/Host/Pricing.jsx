import React from "react";
import data from "../../server";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const [currentVan] = useOutletContext();

  return (
    <div className="m-10 font-bold text-white">
      {`$${currentVan.price}`}
      <span className="font-normal">/day</span>
    </div>
  );
};

export default Pricing;
