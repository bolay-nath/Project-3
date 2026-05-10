"use client";

import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      percent: 85,
      desc: "Modern ES6+ JavaScript, DOM manipulation, APIs, async/await, and functional programming patterns.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      percent: 90,
      desc: "Rapid, responsive UI development with Tailwind CSS utility-first framework and custom designs.",
    },
    {
      name: "React",
      icon: SiReact,
      percent: 89,
      desc: "Building scalable SPAs with React Hooks, Context API, Next.js, and component architecture.",
    },
    {
      name: "Next.js",
      icon: SiReact,
      percent: 88,
      desc: "Full-stack React framework with SSR, API routes, and production-ready optimization.",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      percent: 75,
      desc: "Backend development with Node.js, Express.js REST APIs, and server-side logic.",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      percent: 72,
      desc: "NoSQL database design, Mongoose ODM, aggregation pipelines, and scalable data modeling.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );

    const section = document.getElementById("skills");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section py-24 bg-[var(--container-color)]">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Title */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2
            className="section__title title-center max-w-2xl mx-auto"
            data-title="Skills"
          >
            Technical Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden rounded-3xl p-8 lg:p-10
              border border-[var(--border-color)]/40
              bg-[var(--body-color)]/60
              backdrop-blur-xl
              shadow-lg
              hover:shadow-2xl
              hover:shadow-[var(--first-color)]/20
              hover:border-[var(--first-color)]/50
              hover:bg-[var(--container-color)]
              transition-all duration-500
              hover:-translate-y-3
              ${isVisible ? `animate-fade-in-up delay-${index * 100}ms` : ""}`}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--border-color)]/30">
                <div
                  className="w-16 h-16 rounded-2xl
                  bg-[var(--container-color)]
                  border border-[var(--first-color)]/20
                  flex items-center justify-center shrink-0
                  group-hover:scale-110
                  group-hover:border-[var(--first-color)]/50
                  transition-all duration-500"
                >
                  <skill.icon
                    className="w-8 h-8 text-[var(--first-color)]
                    group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3
                    className="text-xl lg:text-2xl font-bold
                    text-[var(--title-color)]
                    group-hover:text-[var(--first-color)]
                    transition-colors duration-500"
                  >
                    {skill.name}
                  </h3>

                  <span
                    className="text-sm font-semibold
                    text-[var(--first-color)]
                    bg-[var(--first-color)]/10
                    px-3 py-1 rounded-full mt-2 inline-block"
                  >
                    {skill.percent}%
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-[var(--text-color)]
                leading-relaxed
                opacity-90
                group-hover:opacity-100
                transition-opacity duration-500"
              >
                {skill.desc}
              </p>

              {/* Progress Bar */}
              <div className="mt-8 w-full bg-[var(--border-color)]/40 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full
                  bg-gradient-to-r
                  from-[var(--first-color)]
                  to-[var(--first-color-dark)]
                  transition-all duration-1000"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>

              {/* Hover Glow */}
              <div
                className="absolute inset-0
                bg-[var(--first-color)]/5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                rounded-3xl -z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
