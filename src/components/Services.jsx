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
            <ul className="list-disc text 1 pb-4 pl-5">
              <li>
                Discussion of your dog's history, behavior concerns and previous
                training
              </li>
              <li>
                Provide an educational foundation of what is moptivating your
                dog's behavior and how best to modify their behavior
              </li>
              <li>
                Prioritize a managment plan to prevent your dog from rehearsing
                the behavior further
              </li>
              <li>
                Build a training plan togethr for your family t ostart working
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
            <h1 className="text-2xl pb-4">3 Package Sessions</h1>
            <h1 className="text-2xl">5 Package Sessions</h1>
          </div>

          {/* Virtual Rates Column */}
          <div className="text-center sm:text-right">
            <h1 className="text-2xl pb-4">
              Virtual Initial Consultation (1 hour)
            </h1>
            <ul className="list-disc text 1 pb-4 pl-5">
              <li>
                Ideal for dogs who have displayed fear or aggression towards new
                people in the home
              </li>
              <lil>
                Ideal for pet parents who are adding or expecting new family
                memebers or are planning a move to a new home
              </lil>
              <li>
                All skills will be deomonstrated virtually with the consultant's
                own dog
              </li>
              <li>
                Discussion of your dog's history, behavior concerns and previous
                tranining
              </li>
              <li>
                Provide an educational foundation of what is motivating your
                dog's behavior and how best to modify their behavior
              </li>
              <lil>
                Prioritize a managment plan to prevent your dog from rehearsing
                the behavior further
              </lil>
              <li>
                Build a training plan together for your family to start working
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
                the consultation{" "}
              </li>
            </ul>
            <h1 className="text-2xl pb-4">3 Package Sessions</h1>
            <h1 className="text-2xl">5 Package Sessions</h1>
          </div>
        </div>
        {/* Centered H1 Tag at the Bottom */}
        <div className="w-full text-center pt-16 pb-8">
          <h1 className="text-2xl  sm:text-3xl font-bold inline border-b-4  border-white">
            Barnyard Behavior offers discounted follow-up packages for their
            clients. These will be discussed following the inital consultaion.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
