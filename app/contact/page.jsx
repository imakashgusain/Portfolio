import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-8 py-1">
      <div className="flex-grow flex flex-col justify-center items-center space-y-8">
        <h1 className="text-5xl font-bold text-yellow-400">Contact Me</h1>

        <p className="text-lg text-center leading-relaxed max-w-lg">
          I&apos;m open to freelance projects, collaboration, and exciting opportunities. Feel free to reach out!
        </p>

        <div className="w-full max-w-xl bg-gray-800 p-10 rounded-lg shadow-lg space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-yellow-400 w-6 h-6" />
            <span>Email: <a href="mailto:akashgusain57@gmail.com" className="underline hover:text-yellow-400">akashgusain57@gmail.com</a></span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-yellow-400 w-6 h-6" />
            <span>Phone: <span className="underline hover:text-yellow-400">7906685542</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-yellow-400 w-6 h-6" />
            <span>Location: Dehradun, Uttarakhand, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
