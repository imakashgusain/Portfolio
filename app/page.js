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
import { motion } from "framer-motion"; // Import motion only (no need for useInView here)
import { useInView } from "react-intersection-observer"; // Import the correct hook

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

  // Correct use of useInView for each section
  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: refProject, inView: inViewProject } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: refContact, inView: inViewContact } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      {/* Navbar with Scroll Animation */}
      <motion.nav
        className={`sticky top-0 w-full bg-gray-800 text-white shadow-lg z-50 transition-transform duration-300 ${
          scrolling ? "translate-y-[-100%]" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
      </motion.nav>

      {/* Hero Section with Typewriter and Scroll Animations */}
      <motion.section
        className="flex flex-col items-center justify-center h-screen text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4">
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
      </motion.section>

      {/* About Section with Scroll Animation */}
      <motion.section
        id="about"
        ref={refAbout} // Attach the ref to the section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewAbout ? 1 : 0, y: inViewAbout ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <About />
      </motion.section>

      {/* Project Section with Scroll Animation */}
      <motion.section
        id="project"
        ref={refProject} // Attach the ref to the section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewProject ? 1 : 0, y: inViewProject ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Project />
      </motion.section>

      {/* Contact Section with Scroll Animation */}
      <motion.section
        id="contact"
        ref={refContact} // Attach the ref to the section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewContact ? 1 : 0, y: inViewContact ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default Navbar;
