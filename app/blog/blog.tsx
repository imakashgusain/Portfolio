import React from "react";
import { BsMedium } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Blog = () => {
  const blogs = [
    {
      title: "From RestTemplate to WebClient: My Journey to Faster Microservices",
      description:
        "How I migrated service communication in Spring Boot to WebClient and gained better throughput, backpressure handling, and cleaner reactive flows.",
      link: "https://medium.com/@akashgusain57/from-resttemplate-to-webclient-my-journey-to-faster-microservices-3189e7b08439",
      category: "Architecture",
      date: "May 2024",
      readTime: "7 min read",
      tags: ["Spring Boot", "WebClient", "Microservices"],
    },
    {
      title: "Effortless Migration to Spring Boot 3.2 with OpenRewrite",
      description:
        "A guided migration path for Spring Boot 3.2 using OpenRewrite recipes, with best practices for safe refactoring and dependency modernization.",
      link: "https://medium.com/@akashgusain57/effortless-migration-to-spring-boot-3-2-with-openrewrite-a504c9c9a798",
      category: "Migration",
      date: "Feb 2024",
      readTime: "5 min read",
      tags: ["Spring Boot", "OpenRewrite", "Upgrade"],
    },
    {
      title: "From Backend to Frontend: How I Built My Portfolio as a Backend Developer (Thanks to GPT!)",
      description:
        "The lessons learned while designing a portfolio site as a backend engineer, including UI decisions, content strategy, and the AI tools that helped me finish faster.",
      link: "https://medium.com/@akashgusain57/from-backend-to-frontend-how-i-built-my-portfolio-as-a-backend-developer-thanks-to-gpt-abc94e88c772",
      category: "Personal Growth",
      date: "Jan 2024",
      readTime: "6 min read",
      tags: ["Portfolio", "Frontend", "AI"],
    },
  ];

  const [featuredBlog, ...recentBlogs] = blogs;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="space-y-4 text-center">
        <div className="card-accent mx-auto" />
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Blog</p>
        <h2 className="section-heading">Insights on systems, migration, and backend growth.</h2>
        <p className="section-subtitle mx-auto max-w-3xl">
          Curated articles that share practical engineering decisions, migration best practices, and the path from backend systems to polished developer experiences.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="glass-card border-slate-700/80 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="skill-pill bg-slate-900/90 text-slate-200">{featuredBlog.category}</span>
            <div className="text-right text-sm text-slate-500">
              <p>{featuredBlog.date}</p>
              <p>{featuredBlog.readTime}</p>
            </div>
          </div>

          <h3 className="mt-8 text-3xl font-semibold text-white leading-tight">{featuredBlog.title}</h3>
          <p className="mt-6 text-slate-300 leading-8">{featuredBlog.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {featuredBlog.tags.map((tag) => (
              <span key={tag} className="skill-pill bg-slate-900/90 text-slate-200">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={featuredBlog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            Read featured story
            <FiArrowUpRight className="text-lg" />
          </a>
        </article>

        <div className="grid gap-6">
          {recentBlogs.map((blog, index) => (
            <article
              key={index}
              className="glass-card border-slate-700/80 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="skill-pill bg-slate-900/90 text-slate-200">{blog.category}</span>
                <div className="text-right text-sm text-slate-500">
                  <p>{blog.date}</p>
                  <p>{blog.readTime}</p>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white leading-snug">{blog.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{blog.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="skill-pill bg-slate-900/90 text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 inline-flex items-center gap-2"
              >
                Read article
                <FiArrowUpRight className="text-lg" />
              </a>
            </article>
          ))}

          <a
            href="https://medium.com/@akashgusain57"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold"
          >
            View all posts on Medium
            <BsMedium className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
