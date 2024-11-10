function Project() {
  const projects = [
    {
      id: 1,
      title: "Micro Finance App",
      description: "Microservices-based loan application for handset device financing. Contributed to developing key business features, including REST API creation and reporting via JASPER reports."
    },
    {
      id: 2,
      title: "Commodities based Fintech",
      description: "Worked on an application that provides end-to-end software to capture, analyze, and act upon voice and electronic transaction data in FICC markets."
    },
    {
      id: 3,
      title: "PINT",
      description: "Real-time pub-sub-based platform used to monitor jobs from diverse sources like Autosys and Oracle."
    },
    {
      id: 4,
      title: "PAYROLL",
      description: "Payroll management system for managing all finances of employees. Developed key business features, RESTful APIs, and covered Unit and Integration tests."
    },
    {
      id: 5,
      title: "JEWEL",
      description: "QA tool for creating, managing, and running test cases. Contributed to migration from Monolithic to Microservices Architecture."
    }

  ];

  return (
    <section className="text-gray-200 py-20 bg-gray-900" id="project">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
