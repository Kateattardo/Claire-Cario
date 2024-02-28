import React from "react";

const Services = () => {
  return (
    <div name="services" className="w-full h-auto bg-[#0000ff] text-[#faebd7]">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl mx-auto px-4 w-full text-center pb-8">
          <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
            Services
          </p>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8">
          {/* In Home Rates Column */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl pb-4">
              In Home Initial Consultation (1 hour)
            </h1>
            <h2 className="text-l pb-4">
              Help figure out and address behavior concerns immediately in the
              home and out in public. Assess and tweak your current managment
              tools and protocols. Educate you and your dog on how to use
              reinforcement-based methods in an impactful way. Create a
              customized training plan to address your goals.
            </h2>
            <h1 className="text-2xl pb-4">Follow-up Sessions (1 hour)</h1>
            <h1 className="text-2xl pb-4">3 Package Sessions</h1>
            <h1 className="text-2xl">5 Package Sessions</h1>
          </div>

          {/* Virtual Rates Column */}
          <div className="text-center sm:text-right">
            <h1 className="text-2xl pb-4">
              Virtual Initial Consultation (1 hour)
            </h1>
            <h2 className="text-l pb-4">
              Virtual training can be scheduled during the day or evening. Great
              supplement to private lessons ect ect.
            </h2>
            <h1 className="text-2xl pb-4">Follow-up Sessions (1 hour)</h1>
            <h1 className="text-2xl pb-4">3 Package Sessions</h1>
            <h1 className="text-2xl">5 Package Sessions</h1>
          </div>

          <div className="max-w-4xl mx-auto px-4 w-full text-center pb-8">
            <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
              A follow up report is included with every session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
