import React from "react";
import Image from "next/image";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaGamepad, FaPenFancy, FaCode, FaFilm } from "react-icons/fa";
import { BsFiletypeJava, BsFillCloudFill, BsGit, BsGithub } from "react-icons/bs";
import {
  SiSpringboot,
  SiMongodb,
  SiDocker,
  SiJavascript,
  SiReact,
  SiLinux,
  SiPostman,
  SiIntellijidea,
  SiVisualstudio,
} from "react-icons/si";

function About() {
  const experienceData = [
    {
      company: "Gemini Solutions Pvt Ltd",
      positions: [
        {
          role: "Senior Software Engineer L1",
          duration: "Apr 2024 - Present",
          location: "Gurugram, Haryana, India · Hybrid",
          skills: ["Aws SES", "Amazon S3", "Aws KMS", "Linux"],
        },
        {
          role: "Software Engineer L2",
          duration: "Apr 2023 - Mar 2024",
          location: "India · Hybrid",
          skills: ["Microservices", "MongoDB", "Spring Security", "Spring Boot"],
        },
        {
          role: "Software Engineer L1",
          duration: "Sep 2022 - Mar 2023",
          location: "India · Hybrid",
          skills: ["AMPS", "Autosys", "Linux", "Maven", "PAS", "Gitlab"],
        },
        {
          role: "Technical Trainee",
          duration: "Nov 2021 - Sep 2022",
          location: "India · Remote",
          skills: ["Multithreading", "SQL", "Spring Boot", "Core Java", "OOP"],
        },
      ],
    },
  ];

  const hobbies = [
    { name: "Gaming", icon: <FaGamepad className="text-amber-400 text-4xl" /> },
    { name: "Writing Blogs", icon: <FaPenFancy className="text-amber-400 text-4xl" /> },
    { name: "Coding", icon: <FaCode className="text-amber-400 text-4xl" /> },
    { name: "Watching Anime", icon: <FaFilm className="text-amber-400 text-4xl" /> },
  ];

  const techSkills = [
    { name: "Java", icon: <BsFiletypeJava className="text-orange-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-400" /> },
    { name: "SQL", icon: <BsFillCloudFill className="text-sky-400" /> },
    { name: "NoSQL", icon: <SiMongodb className="text-emerald-500" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-amber-400" /> },
    { name: "React", icon: <SiReact className="text-sky-500" /> },
    { name: "Git", icon: <BsGit className="text-orange-500" /> },
    { name: "GitHub", icon: <BsGithub className="text-slate-50" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "IntelliJ", icon: <SiIntellijidea className="text-slate-100" /> },
    { name: "VSCode", icon: <SiVisualstudio className="text-sky-500" /> },
    { name: "Linux", icon: <SiLinux className="text-slate-200" /> },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="space-y-8 lg:w-5/12">
          <div className="space-y-4">
            <div className="card-accent" />
            <p className="text-sm uppercase tracking-[0.35em] text-violet-300">About me</p>
            <h2 className="section-heading">Built for backend scale, reliability, and clear execution.</h2>
            <p className="section-subtitle">
              I’m Akash, a backend developer with over three years of experience in Java, Spring Boot, microservices, and cloud platforms.
              I enjoy translating complex business requirements into maintainable, high-performing services with clean architecture and strong observability.
            </p>
          </div>

          <div className="glass-card overflow-hidden p-6">
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 shadow-2xl shadow-black/20">
              <Image
                src="/akash.jpg"
                alt="Akash Singh Gusain"
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-slate-300 leading-8">
                Beyond engineering, I love solving problems, writing about technical journeys, and creating software that feels effortless to maintain.
              </p>
              <a href="#contact" className="btn-primary inline-flex">
                Connect with me
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12 lg:w-7/12">
          <div className="glass-card p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Professional journey</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Gemini Solutions Pvt Ltd</h3>
              </div>
              <span className="skill-pill">Backend Systems</span>
            </div>

            <div className="relative mt-10 space-y-10 pl-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-slate-700/70">
              {experienceData[0].positions.map((position, index) => (
                <div key={index} className="relative">
                  <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-amber-400 ring-4 ring-slate-950" />
                  <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 shadow-xl shadow-black/10">
                    <h4 className="text-xl font-semibold text-white">{position.role}</h4>
                    <p className="mt-2 text-sm text-slate-400">{position.duration}</p>
                    <p className="text-sm text-slate-500">{position.location}</p>
                    <p className="mt-4 text-sm text-slate-300">
                      <span className="font-semibold text-white">Skills:</span> {position.skills.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Preferred stack</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Technologies I trust</h3>
              </div>
              <div className="skill-pill">Production-ready</div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {techSkills.map((tech, index) => (
                <div
                  key={index}
                  className="glass-card flex flex-col items-center justify-center gap-3 rounded-3xl border-slate-700/70 bg-slate-900/85 p-5 text-center"
                >
                  <div>{tech.icon}</div>
                  <span className="text-sm font-medium text-slate-100">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-3xl font-semibold text-white">Hobbies & interests</h3>
            <p className="mt-3 text-slate-400">
              I enjoy gaming, writing technical blogs, exploring new frameworks, and watching anime during downtime.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-4 rounded-3xl border border-slate-700/70 bg-slate-900/85 p-5">
                  {hobby.icon}
                  <span className="font-medium text-slate-100">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
