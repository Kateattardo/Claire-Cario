import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#4682B4] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/zazookmb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#faebd7]">
            Contact
          </p>
          <p className="text-black py-4">
            Submit the form below to get info about training.
          </p>
        </div>

        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black  border-2 hover:bg-[#85aeae] hover:border-[#00ffff] px-4 py-3 my-8 mx-auto flex items-center">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Contact;
