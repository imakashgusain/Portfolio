import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Micro Finance App",
      description:
        "Microservices-based loan application for handset device financing. Contributed to building REST APIs, reporting workflows, and secure transaction flows.",
      techStack: ["Spring Boot", "Java", "Thymeleaf"],
      link: "#",
    },
    {
      id: 2,
      title: "Commodities Fintech",
      description:
        "End-to-end software for capture, analysis, and execution of electronic transaction data in FICC markets.",
      techStack: ["Spring Boot", "gRPC"],
      link: "#",
    },
    {
      id: 3,
      title: "PINT Monitoring Platform",
      description:
        "Real-time pub/sub platform for tracking jobs across Autosys, Oracle, and enterprise workflows.",
      techStack: ["Spring Boot", "AMPS", "Oracle", "Autosys"],
      link: "#",
    },
    {
      id: 4,
      title: "Payroll Management System",
      description:
        "Employee finance automation with robust REST APIs and extensive unit and integration coverage.",
      techStack: ["Spring Boot", "REST"],
      link: "#",
    },
    {
      id: 5,
      title: "JEWEL QA Tool",
      description:
        "Quality assurance platform for test management and microservice migration support.",
      techStack: ["Spring Boot", "Microservices"],
      link: "#",
    },
  ];

  return (
    <section id="project" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="card-accent mb-4" />
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Projects</p>
          <h2 className="section-heading">Selected work with scale, reliability, and strong delivery.</h2>
        </div>
        <span className="skill-pill">5+ professional projects</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="glass-card overflow-hidden border-slate-700/80 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Project</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <span className="skill-pill">Case study</span>
            </div>

            <p className="mt-6 text-slate-300">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="btn-secondary mt-8 inline-flex"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
