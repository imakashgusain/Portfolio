import Link from "next/link";
import { BsFiletypeJava, BsFillCloudFill, BsGit, BsGithub } from "react-icons/bs";
import { SiSpringboot, SiMongodb, SiDocker, SiJavascript, SiReact, SiLinux, SiPostman, SiIntellijidea, SiVisualstudio } from "react-icons/si";

function About() {
  return (
    <>
      <div className="flex flex-row items-center justify-center h-screen text-black shadow-lg">
        {/* Image on the left */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/akash.jpg"
            alt="About Me"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        {/* Content on the right */}
        <div className="w-2/3 px-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-widest uppercase hover:text-yellow-400 transition-colors duration-300">
            About Me
          </h1>
          <p className="text-lg leading-relaxed select-none mb-4">
            Software developer with nearly 3 years of experience in Java, Spring Boot, and databases. Skilled in building scalable backend systems and RESTful services. Passionate about DevOps, cloud technologies, and continuous learning. Enjoys gaming, sports, and problem-solving through analytical thinking.
          </p>
          <p className="mt-4 text-sm">
            Let's connect and collaborate on exciting projects!
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className=" py-10 shadow-lg">
        <h2 className="text-4xl font-bold text-left text-black mb-6 ml-10 hover:text-yellow-400 transition-colors duration-300">Education</h2>
        <div className="max-w-4xl mx-auto text-left text-black px-10">
          <p className="text-lg ">Bachelor of Technology in Computer Science Engineering</p>
          <p className="text-lg ">Dev Bhoomi Institution of Technology, 2018-2022</p>
          <p className="text-lg ">Higher Secondary Certificate (12th)</p>
          <p className="text-lg">Kendriya Vidhyalaya Upper Camp, 2018</p>
          <p className="text-lg">Secondary School Certificate (10th)</p>
          <p className="text-lg">Kendriya Vidhyalaya Upper Camp, 2016</p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className=" py-10 shadow-lg">
        <h2 className="text-4xl font-bold text-left text-black mb-6 ml-10 hover:text-yellow-400 transition-colors duration-300">Work Experience</h2>
        <div className="max-w-4xl mx-auto text-left px-10">
          <p className="text-lg">Software Developer at Gemini Solutions Private Limited</p>
          <p className="text-lg">2021 - Present</p>
          <p className=">- Developed key features for various applications using Java and Spring Boot.</p>
          <p className=">- Collaborated with cross-functional teams to define, design, and ship new features.</p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className=" py-14 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10 hover:text-yellow-400 transition-colors duration-300">Technologies I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 px-10">
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
            <div key={index} className="flex flex-col items-center justify-center rounded-lg p-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-4">{tech.icon}</div>
              <span className="  font-semibold text-lg text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
