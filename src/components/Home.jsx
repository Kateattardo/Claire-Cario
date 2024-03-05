import React from "react";
import Otis from "../assets/Otis.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#4682B4]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Headings */}
          <div>
            <h1 className="text-4xl sm:text-7xl pb-10 font-bold text-black">
              Barnyard Behavior
            </h1>
            <h2 className="text-4xl sm:text-4xl pb-5 font-bold text-white">
              Claire F. Cario
            </h2>
            <h2 className="text-4xl sm:text-2xl font-bold text-white">
              MA | CPDT-KA | FFCT
            </h2>
          </div>
          {/* Circular Image */}
          <img
            src={Otis}
            alt="Home"
            className="rounded-full ml-4 object-cover"
            style={{ width: "650px", height: "650px" }} //
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
