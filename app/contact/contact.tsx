import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div className="card-accent mb-4" />
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Contact</p>
          <h2 className="section-heading">Let’s build dependable systems together.</h2>
          <p className="section-subtitle">
            I’m available for backend engineering, microservice architecture, and cloud-native consulting.
            Reach out to discuss collaboration, projects, or technical leadership opportunities.
          </p>
          <a
            href="mailto:akashgusain57@gmail.com"
            className="btn-primary inline-flex"
          >
            Send an email
          </a>
        </div>

        <div className="glass-card p-8">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-6 shadow-inner shadow-black/20">
              <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Contact details</p>
              <div className="mt-6 space-y-4 text-slate-200">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-amber-400" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:akashgusain57@gmail.com"
                      className="font-medium text-white hover:text-amber-400"
                    >
                      akashgusain57@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-amber-400" />
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-medium text-white">+91 79066 85542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-amber-400" />
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium text-white">Dehradun, Uttarakhand, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Expertise", value: "Backend Architecture" },
                { label: "Focus", value: "APIs & Microservices" },
                { label: "Availability", value: "Open for work" },
                { label: "Interest", value: "Enterprise systems" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-700/70 bg-slate-900/85 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
