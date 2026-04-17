import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "From RestTemplate to WebClient: My Journey to Faster Microservices",
      description:
        "When I started building microservices, I learned how to streamline service communication and improve performance. In this post, I share why WebClient became a more scalable choice for my architecture.",
      link: "https://medium.com/@akashgusain57/from-resttemplate-to-webclient-my-journey-to-faster-microservices-3189e7b08439",
    },
    {
      title: "Effortless Migration to Spring Boot 3.2 with OpenRewrite",
      description:
        "Upgrading frameworks can be challenging, but OpenRewrite simplifies the process. This guide covers how to migrate to Spring Boot 3.2 using recipes that automate much of the work.",
      link: "https://medium.com/@akashgusain57/effortless-migration-to-spring-boot-3-2-with-openrewrite-a504c9c9a798",
    },
    {
      title: "From Backend to Frontend: How I Built My Portfolio as a Backend Developer (Thanks to GPT!)",
      description:
        "Creating my portfolio felt like a new frontier. I share the experience of moving from backend systems to frontend design—and the productivity boost I gained from AI tools like ChatGPT.",
      link: "https://medium.com/@akashgusain57/from-backend-to-frontend-how-i-built-my-portfolio-as-a-backend-developer-thanks-to-gpt-abc94e88c772",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="space-y-4 text-center">
        <div className="card-accent mx-auto" />
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Blog</p>
        <h2 className="section-heading">Stories from architecture, migration, and backend craft.</h2>
      </div>

      <div className="mt-12 grid gap-6">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="glass-card border-slate-700/80 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
            <p className="mt-4 text-slate-300 leading-8">{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-amber-400 hover:text-amber-300"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
