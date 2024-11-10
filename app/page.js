"use client";
import { BsGithub, BsLinkedin, BsStackOverflow, BsInstagram, BsDownload } from 'react-icons/bs';
import About from './about/page';
import Project from './project/page';
import Contact from './contact/page';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        setScrolling(true);
      } else {
        // Scrolling up
        setScrolling(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Navbar */}
     {/* <nav className="sticky top-0 w-full bg-gray-800 text-white shadow-lg z-50">  */}
        {/* <nav className={`sticky top-0 w-full bg-white/30 backdrop-blur-lg shadow-lg rounded-full z-50 transition-all duration-300 ${scrolling ? 'translate-y-[-100%]' : ''}`}> */}
        <nav className={`sticky top-0 w-full bg-gray-800 text-white shadow-lg z-50 transition-all duration-300 ${scrolling ? 'translate-y-[-100%]' : ''}`}>
        <div className="flex justify-between items-center px-10 py-4">
          <h1 className="text-2xl font-bold">Akash Singh Gusain</h1>
          <div className="space-x-8">
          <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#project" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Akash Singh Gusain</h1>
        <p className="text-lg mb-6">Full-Stack Developer and Tech Enthusiast</p>
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/imakashgusain" target="_blank" aria-label="GitHub">
            <BsGithub className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/akash-gusain-397821178/" target="_blank" aria-label="LinkedIn">
            <BsLinkedin className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://stackoverflow.com/users/12929696/akash-gusain" target="_blank" aria-label="StackOverflow">
            <BsStackOverflow className="text-3xl hover:text-orange-400" />
          </a>
          <a href="https://www.instagram.com/imakashgusain/" target="_blank" aria-label="Instagram">
            <BsInstagram className="text-3xl hover:text-pink-600" />
          </a>
        </div>
        <a href="/resume.pdf" download className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-400">
          Download Resume <BsDownload />
        </a>
      </section>

      {/* Sections */}
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Navbar;
