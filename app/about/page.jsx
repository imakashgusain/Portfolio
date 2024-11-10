import React from "react";
import { BsFiletypeJava, BsFillCloudFill, BsGit, BsGithub } from "react-icons/bs";
import { SiSpringboot, SiMongodb, SiDocker, SiJavascript, SiReact, SiLinux, SiPostman, SiIntellijidea, SiVisualstudio } from "react-icons/si";

function About() {
  return (
    <>
      <div id="about" className="flex flex-col items-center justify-center min-h-screen text-gray-100 bg-gray-900 p-8">
        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl gap-8">
          <img
            src="/akash.jpg"
            alt="Akash Singh Gusain"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-white transition-transform transform hover:scale-105"
          />
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 text-yellow-400">About Me</h1>
            <p className="text-lg leading-relaxed mb-4">
              I'm Akash, a software developer with nearly 3 years of experience in Java, Spring Boot, and databases. Skilled in backend systems, RESTful services, DevOps, and cloud technologies, I enjoy problem-solving, gaming, and staying on top of industry trends.
            </p>
            <a href="#contact" className="text-lg bg-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full max-w-5xl mt-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Education</h2>
          <ul className="text-gray-300 space-y-2">
            <li>B.Tech in Computer Science, Dev Bhoomi Institute of Technology (2018-2022)</li>
            <li>HSC (12th), Kendriya Vidhyalaya Upper Camp (2018)</li>
            <li>SSC (10th), Kendriya Vidhyalaya Upper Camp (2016)</li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="w-full max-w-5xl mt-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Work Experience</h2>
          <ul className="text-gray-300 space-y-2">
            <li><b>Software Developer at Gemini Solutions</b> (2021 - Present)</li>
            <li>Developed core features using Java, Spring Boot, and collaborated with teams to deliver solutions.</li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="w-full max-w-5xl mt-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400 text-center">Technologies I Use</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {[
              { name: "Java", icon: <BsFiletypeJava className="text-orange-400" /> },
              { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
              { name: "SQL", icon: <BsFillCloudFill className="text-blue-400" /> },
              { name: "NoSQL", icon: <SiMongodb className="text-green-600" /> },
              { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
              { name: "React", icon: <SiReact className="text-blue-600" /> },
              { name: "Git", icon: <BsGit className="text-orange-500" /> },
              { name: "GitHub", icon: <BsGithub className="text-black" /> },
              { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
              { name: "IntelliJ", icon: <SiIntellijidea className="text-black" /> },
              { name: "VSCode", icon: <SiVisualstudio className="text-blue-500" /> },
              { name: "Linux", icon: <SiLinux className="text-black" /> },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center transform hover:scale-110 transition-transform">
                <div className="text-5xl mb-2">{tech.icon}</div>
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
