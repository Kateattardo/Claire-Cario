import React from "react";

const Services = () => {
  return (
    <div name="services" className="w-full h-auto bg-[#faebd7] text-[#556b2f]">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto px-4 w-full text-center pb-8">
          <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
            Services
          </p>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8">
          <div className="text-center sm:text-left">
            {/* Add the Home rate information here */}
            <h1>In Home Initial Consultation (1 hour)</h1>
            <h1>Follow-up Sessions (1hour)</h1>
            <h1>3 Package Sessions</h1>
            <h1>5 Package Sessions</h1>
            {/* Virtual Rates Column */}
            <div className="text-center sm:text-right">
              {/* Add the rates information here */}
              <h1>Virtual Initial Consultation (1 hour)</h1>
              <h1>Follow-up Sessions (1 hour)</h1>
              <h1>3 Package Sessions</h1>
              <h1>5 Package Sessions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;