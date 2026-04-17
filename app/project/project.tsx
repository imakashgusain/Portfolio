import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Micro Finance App",
      description:
        "Microservices-based loan application for handset device financing. Contributed to REST API creation, reporting workflows, and secure transaction handling.",
      techStack: ["Spring Boot", "Java", "Thymeleaf"],
      role: "API design",
      link: "#",
    },
    {
      id: 2,
      title: "Commodities Fintech",
      description:
        "End-to-end system for capturing and analyzing FICC market data with low-latency processing and modern service orchestration.",
      techStack: ["Spring Boot", "gRPC"],
      role: "Data pipeline",
      link: "#",
    },
    {
      id: 3,
      title: "PINT Monitoring Platform",
      description:
        "A real-time pub/sub platform for monitoring job status across enterprise schedulers and databases.",
      techStack: ["Spring Boot", "AMPS", "Oracle", "Autosys"],
      role: "Monitoring",
      link: "#",
    },
    {
      id: 4,
      title: "Payroll Management System",
      description:
        "Payroll automation platform built with RESTful services, authentication, and robust accounting workflows.",
      techStack: ["Spring Boot", "REST"],
      role: "Automation",
      link: "#",
    },
    {
      id: 5,
      title: "JEWEL QA Tool",
      description:
        "Test management and migration support system for QA teams moving from monoliths to distributed services.",
      techStack: ["Spring Boot", "Microservices"],
      role: "QA tooling",
      link: "#",
    },
  ];

  return (
    <section id="project" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="card-accent mb-4" />
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Projects</p>
          <h2 className="section-heading">Projects that emphasize stability, clarity, and impact.</h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            A selection of work that highlights backend architecture, integration reliability, and scalable delivery for enterprise systems.
          </p>
        </div>
        <span className="skill-pill">5+ professional projects</span>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="glass-card overflow-hidden border-slate-700/80 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{project.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <span className="skill-pill bg-slate-900/90 text-slate-200">Key work</span>
            </div>

            <p className="mt-6 text-slate-300 leading-7">{project.description}</p>

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
              View project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
