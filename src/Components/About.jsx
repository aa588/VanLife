import React from "react";
import about from "../images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-5 text-white w-full h-full items-center">
      <div className="bg-black/40 w-full h-[300px]">
        <img className="w-full rounded-md h-full object-cover" src={about} />
      </div>
      <div className="flex flex-col px-5 gap-10">
        <div className="mx-4 flex flex-col gap-5 mb-5">
          <h1 className="text-3xl font-bold">
            Don't Squeeze in a sedan when you could relax in van
          </h1>
          <h1>
            Our mission is to enliven your road trip with the perfect trael van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch (Hitch costs extra)
          </h1>
          <h1>
            Our team is a full of vanlife enthusiasts who know firsthand the
            magic of touring the world on 4 wheels.
          </h1>
        </div>
        <div className="mx-4 flex flex-col justify-between p-4 h-[150px] bg-orange-900 rounded-md">
          <div className="text-lg font-bold">
            <p>Your destination is waiting.</p>
            <p>Your van is ready.</p>
          </div>
          <Link to={"/vans"}>
            <button className="bg-black text-white p-2 w-[150px] rounded-md hover:bg-black/90">
              Explore ur vans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
