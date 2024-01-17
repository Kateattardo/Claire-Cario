import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#faebd7] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#556b2f]">
            Contact
          </p>
          <p className="text-[#556b2f] py-4">
            Submit the form below to get info about training.
          </p>
        </div>
        <input
          className="bg-[#f0ffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#f0fff0]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#90ee90] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#556b2f]  border-2 hover:bg-[#fff0f5] hover:border-[#556b2f] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
