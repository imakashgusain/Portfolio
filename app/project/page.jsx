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
    },
  ];


  return (
    <>
      {/* Add padding-top to prevent overlap with navbar */}
      <div className="pt-16 flex flex-col items-center justify-center min-h-screen  text-black">
        {/* Title and Description */}
        <div className="w-full text-center px-10 mb-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-widest uppercase hover:text-yellow-400 transition-colors duration-300">
            My Projects
          </h1>
          <p className="text-lg leading-relaxed select-none">
            Below are some of the key projects I’ve worked on. Hover over the boxes to see more details about each project.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group  rounded-lg shadow-lg p-8 h-60  hover:bg-white/10 transition-transform transform hover:scale-105 duration-300 overflow-hidden"
            >
              {/* Project Title */}
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center ">
                {project.title}
              </h2>

              {/* Project Description (Initially hidden, fully visible on hover) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0  bg-opacity-80 flex justify-center items-center rounded-lg p-6">
                <p className="text-gray text-lg font-medium px-6 text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
