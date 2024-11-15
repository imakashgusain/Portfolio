import React from "react";
import Image from "next/image";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaGamepad, FaPenFancy, FaCode, FaFilm } from "react-icons/fa";
import {
  BsFiletypeJava,
  BsFillCloudFill,
  BsGit,
  BsGithub,
} from "react-icons/bs";
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
          skills: [
            "Microservices",
            "MongoDB",
            "Spring Security",
            "Spring Boot",
          ],
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

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-gray-100 bg-gray-900 max-w-6xl mx-auto px-8 space-y-12"
    >
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center w-full gap-8">
        <Image
          src="/akash.jpg"
          alt="Akash Singh Gusain"
          width={192}
          height={192}
          className="rounded-full object-cover shadow-lg border-4 border-white transition-transform transform hover:scale-105"
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
            I&apos;m Akash, a passionate software developer with 3 years of
            experience working with Java, Spring Boot, and databases. My
            expertise lies in backend systems, RESTful services, and cloud
            technologies. I take pride in delivering high-quality work and
            continuously improving my skills. Outside of coding, I&apos;m an
            avid problem-solver, enjoy gaming, writing blogs, and immersing
            myself in anime.
          </p>
          <a
            href="#contact"
            className="text-lg bg-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="w-full py-3">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400 text-center">
          Hobbies & Interests
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            {
              name: "Gaming",
              icon: <FaGamepad className="text-yellow-400 text-5xl" />,
            },
            {
              name: "Writing Blogs",
              icon: <FaPenFancy className="text-yellow-400 text-5xl" />,
            },
            {
              name: "Coding",
              icon: <FaCode className="text-yellow-400 text-5xl" />,
            },
            {
              name: "Watching Anime",
              icon: <FaFilm className="text-yellow-400 text-5xl" />,
            },
          ].map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform hover:scale-110"
            >
              {hobby.icon}
              <span className="mt-2 text-lg font-semibold">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Work Experience and Technologies */}
      <div className="flex flex-col md:flex-row gap-12 w-full py-20">
        {/* Work Experience Timeline */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">
            Work Experience
          </h2>
          <div className="relative">
            <div className="border-l-2 border-yellow-400 relative pl-8">
              {/* Display Company Name and Logo */}
              <div className="mb-4 gap-4">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  {experienceData[0].company}
                </h3>
              </div>
              {experienceData[0].positions.map((position, index) => (
                <div key={index} className="relative mb-12">
                  <HiOutlineBriefcase className="absolute -left-5 top-1 text-yellow-400 text-xl" />
                  <h4 className="text-xl font-semibold text-yellow-400">
                    {position.role}
                  </h4>
                  <p className="text-gray-300">{position.duration}</p>
                  <p className="text-sm text-gray-400 mb-2">
                    {position.location}
                  </p>
                  <p className="text-sm text-gray-100">
                    <b>Skills:</b> {position.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400 text-center">
            Technologies I Use
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
            {[
              {
                name: "Java",
                icon: <BsFiletypeJava className="text-orange-400" />,
              },
              {
                name: "Spring Boot",
                icon: <SiSpringboot className="text-green-600" />,
              },
              {
                name: "SQL",
                icon: <BsFillCloudFill className="text-blue-400" />,
              },
              { name: "NoSQL", icon: <SiMongodb className="text-green-600" /> },
              { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400" />,
              },
              { name: "React", icon: <SiReact className="text-blue-600" /> },
              { name: "Git", icon: <BsGit className="text-orange-500" /> },
              { name: "GitHub", icon: <BsGithub className="text-black" /> },
              {
                name: "Postman",
                icon: <SiPostman className="text-orange-500" />,
              },
              {
                name: "IntelliJ",
                icon: <SiIntellijidea className="text-black" />,
              },
              {
                name: "VSCode",
                icon: <SiVisualstudio className="text-blue-500" />,
              },
              { name: "Linux", icon: <SiLinux className="text-black" /> },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center transform transition-all hover:scale-105 hover:rotate-3 duration-150 ease-in-out"
              >
                <div className="text-5xl mb-2">{tech.icon}</div>
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
