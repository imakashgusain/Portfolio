import React from "react";

const Blog = () => {
  const blogs = [
    {
      title:
        "From RestTemplate to WebClient: My Journey to Faster Microservices",
      description:
        "When I started out building microservices, I encountered several challenges. One of my early lessons was learning how to handle communication between services efficiently. Today, I want to share my journey from using RestTemplate to WebClient—both valuable tools in their own right—and explain why I eventually found WebClient to be a better fit for my needs.",
      link: "https://medium.com/@akashgusain57/from-resttemplate-to-webclient-my-journey-to-faster-microservices-3189e7b08439",
    },

    {
      title: "Effortless Migration to Spring Boot 3.2 with OpenRewrite",
      description:
        "Upgrading to new versions of frameworks like Spring Boot can be challenging, but OpenRewrite makes it easier. In this guide, we’ll go over how you can migrate to Spring Boot 3.2 using OpenRewrite recipes — ready-made tools that handle most of the heavy lifting for you.",
      link: "https://medium.com/@akashgusain57/effortless-migration-to-spring-boot-3-2-with-openrewrite-a504c9c9a798",
    },

    {
      title:
        "From Backend to Frontend: How I Built My Portfolio as a Backend Developer (Thanks to GPT!)",
      description:
        "As a backend developer, building a portfolio website felt like stepping into unfamiliar waters. I’ve always been more comfortable with APIs and servers than designing user interfaces, but I wanted to take on the challenge—not just to showcase my skills but to learn something new. With AI tools like ChatGPT, that leap felt less daunting and a lot more exciting.",
      link: "https://medium.com/@akashgusain57/from-backend-to-frontend-how-i-built-my-portfolio-as-a-backend-developer-thanks-to-gpt-abc94e88c772",
    },
  ];

  return (
    <>
      <section className="py-16  text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            My Blogs
          </h2>
          <div className="flex flex-col gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                  {blog.title}
                </h3>{" "}
                {/* Title color */}
                <p className="text-gray-300 mb-6">{blog.description}</p>{" "}
                {/* Description color */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
