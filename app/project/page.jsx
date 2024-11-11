import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Micro Finance App",
      description:
        "Microservices-based loan application for handset device financing. Contributed to developing key business features, including REST API creation and reporting via JASPER reports.",
      techStack: ["Spring-Boot", "Java", "Thymeleaf"],
      link: "#",
    },
    {
      id: 2,
      title: "Commodities based Fintech",
      description:
        "Worked on an application that provides end-to-end software to capture, analyze, and act upon voice and electronic transaction data in FICC markets.",
      techStack: ["Spring-Boot", "gRPC"],
      link: "#",
    },
    {
      id: 3,
      title: "PINT",
      description:
        "Real-time pub-sub-based platform used to monitor jobs from diverse sources like Autosys and Oracle.",
      techStack: ["Spring-Boot", "AMPS", "Oracle", "Autosys"],
      link: "#",
    },
    {
      id: 4,
      title: "PAYROLL",
      description:
        "Payroll management system for managing all finances of employees. Developed key business features, RESTful APIs, and covered Unit and Integration tests.",
      techStack: ["Spring-Boot", "REST"],
      link: "#",
    },
    {
      id: 5,
      title: "JEWEL",
      description:
        "QA tool for creating, managing, and running test cases. Contributed to migration from Monolithic to Microservices Architecture.",
      techStack: ["Spring-Boot", "MicroService"],
      link: "#",
    },
  ];

  return (
    <div
      id="project"
      className="min-h-screen text-gray-100 bg-gray-900 max-w-6xl mx-auto px-8 space-y-12"
    >
      <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-yellow-400 font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
