import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#faebd7]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#556b2f]">
          Claire F. Cairo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#006400]">
          MA, CPDT-KA, FFCT
        </h2>
      </div>
    </div>
  );
};

export default Home;
