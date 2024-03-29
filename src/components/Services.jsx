import React from "react";

const Services = () => {
  return (
    <div name="services" className="w-full h-auto bg-[#4682B4] text-[#faebd7]">
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
              In Home Initial Consultation (1.5 hours)
            </h1>
            <ul className="list-disc text 1 pb-4 pl-5">
              <li className="pb-4">
                Discussion of your dog's history, behavior concerns and previous
                training
              </li>
              <li className="pb-4">
                Provide an educational foundation of what is motivating your
                dog's behavior and how best to modify their behavior
              </li>
              <li className="pb-4">
                Prioritize a management plan to prevent your dog from rehearsing
                the behavior further
              </li>
              <li className="pb-4">
                Build a training plan together for your family t ostart working
                on it immediately
              </li>
              <li>
                Introduce essential action items for your family to work on with
                your dog
              </li>
            </ul>
            <h1 className="text-2xl pb-4">Follow-up Sessions (1 hour)</h1>
            <ul className="list-disc text 1 pb-4 pl-5">
              <li>
                Follow-Up Sessions will build on the training plan discussed in
                the consultation
              </li>
            </ul>
          </div>

          {/* Virtual Rates Column */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl pb-4">
              Virtual Initial Consultation (1.5 hours)
            </h1>
            <ul className="list-disc text 1 pb-4 pl-5">
              <li>
                Ideal for dogs who have displayed fear or aggression towards new
                people in the home
              </li>
              <li className="pb-4">
                Ideal for pet parents who are adding or expecting new family
                members or are planning a move to a new home
              </li>
              <li className="pb-4">
                All skills will be demonstrated virtually with the consultant's
                own dog
              </li>
              <li className="pb-4">
                Discussion of your dog's history, behavior concerns and previous
                training
              </li>
              <li className="pb-4">
                Provide an educational foundation of what is motivating your
                dog's behavior and how best to modify their behavior
              </li>
              <li className="pb-4">
                Prioritize a managment plan to prevent your dog from rehearsing
                the behavior further
              </li>
              <li className="pb-4">
                Build a training plan together for your family to start working
                on it immediately
              </li>
              <li className="pb-4">
                Introduce essential action items for your family to work on with
                your dog
              </li>
            </ul>
            <h1 className="text-2xl pb-4">Follow-up Sessions (1 hour)</h1>
            <ul className="list-disc text 1 pb-20 pl-5">
              <li>
                Follow-Up Sessions will build on the training plan discussed in
                the consultation{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* Centered H1 Tag at the Bottom */}
        {/* <div className="w-full text-center pt-16 pb-8">
          <h1 className="text-2xl  sm:text-3xl font-bold inline border-b-4  border-white">
            Barnyard Behavior offers discounted follow-up packages for their
            clients. These will be discussed following the inital consultaion.
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
