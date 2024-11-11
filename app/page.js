"use client";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsInstagram,
  BsDownload,
} from "react-icons/bs";
import Typewriter from "typewriter-effect";
import About from "./about/page";
import Project from "./project/page";
import Contact from "./contact/page";
import React, { useState, useEffect } from "react";
import IconButton from "./animation/page";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > lastScrollY && window.scrollY > 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`sticky top-0 w-full bg-gray-800 text-white shadow-lg z-50 transition-transform duration-300 ${
          scrolling ? "translate-y-[-100%]" : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Akash Singh Gusain</h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#project" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 ">
        <h1 className="text-5xl font-bold mb-4 ">
          <p className="text-white">Hello, I&apos;m </p>
          <span className="text-yellow-400">
            <Typewriter
              options={{
                strings: [
                  "Akash Singh Gusain",
                  "Full-Stack Developer",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h1>

        <div className="flex gap-6 mb-6">
          <IconButton
            text="Github"
            color="bg-gray-800 hover:bg-gray text-white"
            href="https://github.com/imakashgusain"
          >
            <BsGithub className="text-3xl" />
          </IconButton>

          <IconButton
            text="Linkedin"
            color="bg-blue-700 hover:bg-blue-500 text-white"
            href="https://www.linkedin.com/in/akash-gusain-397821178/"
          >
            <BsLinkedin className="text-3xl" />
          </IconButton>

          <IconButton
            text="StackOverflow"
            color="bg-orange-600 hover:bg-orange-500 text-white"
            href="https://stackoverflow.com/users/12929696/akash-gusain"
          >
            <BsStackOverflow className="text-3xl" />
          </IconButton>

          <IconButton
            text="Instagram"
            color="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white"
            href="https://www.instagram.com/imakashgusain/"
          >
            <BsInstagram className="text-3xl" />
          </IconButton>
        </div>

        <a
          href="/resume.pdf"
          download
          className="bg-white text-black font-bold mb-4 px-6 py-2 rounded-full hover:bg-gray-400 flex items-center gap-2"
        >
          Resume <BsDownload />
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
