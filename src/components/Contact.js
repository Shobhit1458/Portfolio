import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from bg-gray-800 to-black text-white">
      <div className="flex flex-col justify-center h-full max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>
        <div className="flex justify-center" > 
          <form action="https://getform.io/f/3910ca20-b9e5-4ccc-8c4c-2152d01827f1" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="text-white rounded-md p-2 border-2 bg-transparent focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail"
              className="text-white rounded-md my-4 p-2 border-2 bg-transparent focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="text-white rounded-md p-2 border-2 bg-transparent focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from from-cyan-500 to to-blue-500 px-6 py-3 rounded-md mx-auto flex justify-center items-center my-8 hover:scale-110 duration-300">
                Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
