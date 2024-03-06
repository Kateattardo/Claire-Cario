import React from "react";

const PackageSession = ({ title }) => (
  <div>
    <h2 className="text-2xl pb-4">{title}</h2>
  </div>
);

const Services = () => {
  const packageSessions = [
    "3 Package Sessions Available For both ",
    "5 Package Sessions Available For both",
  ];

  return (
    <div name="services" className="w-full h-auto bg-[#4682B4] text-[#faebd7]">
      <div className="flex flex-col justify-center items-center w-full ">
        {/* Other content */}

        {/* Dynamically render package sessions */}
        <div className="max-w-4xl mx-auto px-4 w-full grid md:grid-cols-2  gap-8">
          {packageSessions.map((session) => (
            <PackageSession key={session} title={session} />
          ))}
        </div>

        {/* Centered Note at the Bottom  */}
        <div className="w-full text-center pt-16 pb-8">
          <p className="text-lg sm:text-xl">
            Barnyard Behavior offers discounted follow-up packages for their
            clients. These will be discussed following the inital consultaion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
