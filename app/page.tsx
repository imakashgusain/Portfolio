"use client";

import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsInstagram,
  BsDownload,
} from "react-icons/bs";
import Typewriter from "typewriter-effect";
import About from "./about/about";
import Project from "./project/project";
import Contact from "./contact/contact";
import Blog from "./blog/blog";
import React, { useState, useEffect, useRef, useContext } from "react";
import IconButton from "./animation/animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "./components/Providers/ScrollProvider";
import { renderCanvas, resizeCanvas, onMousemove } from "./components/renderCanvas";

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > lastScrollY && window.scrollY > 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const { ref: refAbout, inView: inViewAbout } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: refProject, inView: inViewProject } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: refContact, inView: inViewContact } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: refBlog, inView: inViewBlog } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
    };
  }, []);

  return (
    <div className="relative bg-transparent text-slate-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),transparent_32%)]" />
      <div className="pointer-events-none fixed -right-24 top-56 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <motion.nav
        ref={navRef}
        className={`sticky top-0 z-50 mx-auto w-full border-b border-slate-700/40 bg-slate-950/80 backdrop-blur-xl transition-transform duration-300 ${
          scrolling ? "-translate-y-full" : "translate-y-0"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-200 sm:px-8">
          <a href="#home" className="font-semibold text-white tracking-tight">
            Akash<span className="ml-2 text-amber-400">.</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            <a href="#about" className="transition hover:text-amber-400">
              About
            </a>
            <a href="#project" className="transition hover:text-amber-400">
              Projects
            </a>
            <a href="#blog" className="transition hover:text-amber-400">
              Blog
            </a>
            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </div>
          <a href="/resume.pdf" download className="btn-secondary hidden sm:inline-flex">
            Resume
          </a>
        </div>
      </motion.nav>

      <main className="relative z-10">
        <section id="home" className="relative py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:px-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-200 ring-1 ring-violet-500/30">
                Backend engineer · Cloud-native systems · Microservices
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                  Crafting reliable backend systems for modern financial products.
                </h1>
                <p className="section-subtitle">
                  I’m Akash, a backend developer with a strong focus on Spring Boot, distributed systems,
                  APIs, and cloud-native architecture. I build clean, scalable services that empower teams
                  and elevate business outcomes.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="/resume.pdf" download className="btn-primary">
                  Download Resume
                </a>
                <a href="#project" className="btn-secondary">
                  See Projects
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Experience", value: "4+ years" },
                  { label: "Focus", value: "Backend & APIs" },
                  { label: "Location", value: "Dehradun, India" },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass-card border-slate-700/80 p-8 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured links</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Connect</h2>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-200 shadow-inner shadow-black/20">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Opportunities</p>
                  <p className="mt-2 text-xl font-semibold text-amber-400">Open</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <IconButton
                  text="GitHub"
                  color="bg-slate-800 hover:bg-slate-700 text-white"
                  href="https://github.com/imakashgusain"
                >
                  <BsGithub className="text-xl" />
                </IconButton>
                <IconButton
                  text="LinkedIn"
                  color="bg-blue-700 hover:bg-blue-600 text-white"
                  href="https://www.linkedin.com/in/akash-gusain-397821178/"
                >
                  <BsLinkedin className="text-xl" />
                </IconButton>
                <IconButton
                  text="StackOverflow"
                  color="bg-orange-600 hover:bg-orange-500 text-white"
                  href="https://stackoverflow.com/users/12929696/akash-gusain"
                >
                  <BsStackOverflow className="text-xl" />
                </IconButton>
                <IconButton
                  text="Resume"
                  color="bg-slate-800 hover:bg-slate-700 text-white"
                  href="/resume.pdf"
                >
                  <BsDownload className="text-xl" />
                </IconButton>
              </div>
            </aside>
          </div>
        </section>

        <div className="space-y-24 px-6 pb-24 sm:px-8 lg:px-0">
          <motion.section
            id="about"
            ref={refAbout}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inViewAbout ? 1 : 0, y: inViewAbout ? 0 : 32 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <About />
          </motion.section>

          <motion.section
            id="project"
            ref={refProject}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inViewProject ? 1 : 0, y: inViewProject ? 0 : 32 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Project />
          </motion.section>

          <motion.section
            id="blog"
            ref={refBlog}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inViewBlog ? 1 : 0, y: inViewBlog ? 0 : 32 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Blog />
          </motion.section>

          <motion.section
            id="contact"
            ref={refContact}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inViewContact ? 1 : 0, y: inViewContact ? 0 : 32 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Contact />
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
