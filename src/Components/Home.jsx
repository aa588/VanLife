import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center text-center relative h-full w-full ">
      <img
        className="absolute top-0 left-0 w-full h-full hover:bg-contain filter blur-[3px] z-0 object-cover "
        src={home}
      />

      <div className="flex justify-center text-left -mt-20">
        <div className="my-10 mx-4 flex flex-col self-center max-w-[350px]  gap-5 absolute ">
          <p className="text-3xl font-bold text-white">
            You got the travel plans, we got the travel vans
          </p>

          <p className="text-md text-gray-200">
            Add adventure to your life by joining the #vanlife movement.
            <br></br>Rent the perfect van to make your perfect road trip.
          </p>

          <Link to={"/vans"}>
            <button className="w-full font-bold bg-orange-800 hover:bg-orange-600 active:bg-orange-800 transition-all text-white text-md cursor-pointer rounded-md py-2">
              Find your van
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
