import React from "react";
import Otis from "../assets/Otis.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0000ff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Headings */}
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              Claire F. Cario
            </h1>
            <h2 className="text-4xl sm:text-4xl font-bold text-white">
              MA, CPDT-KA, FFCT
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
