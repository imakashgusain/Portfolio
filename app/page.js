import React from 'react';
import { BsGithub, BsLinkedin, BsStackOverflow, BsInstagram, BsDownload } from 'react-icons/bs'; // Importing icons from react-icons
import About from './about/page';
import Project from './project/page';
import Contact from './contact/page';
const Navbar = ({ params }) => {
  return (
    
    < div >
     <nav className=" sticky top-5 w-11/12 mx-auto bg-white/30 backdrop-blur-lg shadow-lg rounded-full z-50 border border-black-500 ">
          <div className="flex items-center justify-between">
            {/* Left side with logo and links */}
            <div className="flex items-center space-x-6">
              {/* Links */}
              <div className="hidden md:flex text-gray-600 ml-10 space-x-3">
                <a href="#" className="hover:bg-gray-300 px-2 py-1 m-2 rounded-lg">Home</a>
                <a href="#about" className="hover:bg-gray-300 px-2 py-1 m-2 rounded-lg">About</a>
                <a href="#project" className="hover:bg-gray-300 px-2 py-1 m-2 rounded-lg">Project</a>
                <a href="#contact" className="hover:bg-gray-300 px-2 py-1 m-2 rounded-lg">Contact</a>
              </div>
            </div>
          </div>
        </nav>
    <div className="bg-gradient-to-b from-sky-100 to-white via-sky-100/30 fixed inset-0 -z-10"></div>
      <div className=" h-screen pb-2 ">
        {/* Fixed Navbar */}
       


        <div className="flex flex-col items-center justify-center h-screen text-black shadow-lg">
          <div className='text-6xl font-bold mb-8'>
          <span className=" text-black">I'm </span>
          <span className=" text-blue-600"> Akash Singh Gusain.</span>
          </div>
     
      <div className="flex gap-8">
        <a href="https://github.com/imakashgusain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <BsGithub className="text-5xl hover:text-black transition duration-300 ease-in-out" />
        </a>
        <a href="https://www.linkedin.com/in/akash-gusain-397821178/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <BsLinkedin className="text-5xl hover:text-blue-500 transition duration-300 ease-in-out" />
        </a>
        <a href="https://stackoverflow.com/users/12929696/akash-gusain" target="_blank" rel="noopener noreferrer" aria-label="StackOverflow">
          <BsStackOverflow className="text-5xl hover:text-orange-400 transition duration-300 ease-in-out" />
        </a>
        <a href="https://www.instagram.com/imakashgusain/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <BsInstagram className="text-5xl hover:text-pink-600 transition duration-300 ease-in-out" />
        </a>
      </div>
      
      {/* Updated Resume Button with white background and black text on hover */}
      <div className="flex text-3xl font-bold gap-8 py-5 ">
        <a 
          href="/resume.pdf" // The path to your resume in the public folder
          download
          className="bg-slate-500 text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black  font-black transition duration-300 ease-in-out"
        >
          Resume
          <BsDownload className="text-xl" />
        </a>  
      </div>
      </div>
     
      </div>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default Navbar;
