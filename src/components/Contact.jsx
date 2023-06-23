import React from "react";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
    <div
      name="Contact Me"
      className="w-full h-screen bg-gradient-to-r from-orange-600 to-yellow-400 p-4 text-black mt-11"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Contact Me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c915a893-226d-4b9d-9dfd-f5b0d52df43b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black placeholder-black border-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black placeholder-black border-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black border-black placeholder-black focus:outline-none"
            ></textarea>

            <button className="text-black bg-gradient-to-r from-yellow-400 to-orange-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
      
    </div>
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-orange-600 to-yellow-400 w-full">
        <a href="https://github.com/deepakyadav-02" className="px-4 ms-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-black rounded-md hover:scale-110 duration-300 mb-3">Github<FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/deepak-yadav-032b2b247/" className="px-4 ms-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-black rounded-md hover:scale-110 duration-300 mb-3">Linkedin<FaLinkedin size={30} /></a>
        <a href="mailto:deepakyadav101002@gmail.com" className="px-4 ms-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-black rounded-md hover:scale-110 duration-300 mb-3">Gmail<HiOutlineMail size={30} /></a>
        <a href="/Resume.pdf" download={true} className="px-4 ms-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-black rounded-md hover:scale-110 duration-300 mb-3">Resume<BsFillPersonLinesFill size={30} /></a>
      </div>
    </>
  );
};

export default Contact;
