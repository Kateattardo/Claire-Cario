import React from "react";

const Rates = () => {
  return (
    <div name="rates" className="w-full h-auto bg-[#faebd7] text-[#556b2f]">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto px-4 w-full text-center pb-8">
          <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
            Rates
          </p>
        </div>

        {/* Rates Section */}
        <div className="max-w-4xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8">
          {/* New York Rates Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">New York Rates</h3>
            {/* Add the rates information here */}
            <p>Rate 1: $XXX</p>
            <p>Rate 2: $XXX</p>
            {/* ...more rates */}
          </div>

          {/* Delaware Rates Column */}
          <div className="text-center sm:text-right">
            <h3 className="text-xl font-bold mb-4">Delaware Rates</h3>
            {/* Add the rates information here */}
            <p>Rate 1: $XXX</p>
            <p>Rate 2: $XXX</p>
            {/* ...more rates */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
