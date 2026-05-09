"use client";

import { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const qualifications = [
    {
      heading: "Education",
      icon: FaGraduationCap,
      items: [
        {
          subtitle: "Self-Taught",
          title: "Website Development",
          date: "2022 - 2024",
          desc: "Mastered modern web development through intensive self-study, YouTube tutorials, and hands-on projects.",
        },
        {
          subtitle: "National University",
          title: "Bachelor of Arts",
          date: "2022 - 2025",
          desc: "Currently pursuing a Bachelor of Arts degree while continuously enhancing web development skills.",
        },
        {
          subtitle: "Self-Taught",
          title: "SEO Mastery",
          date: "2024 - 2025",
          desc: "Advanced SEO techniques to optimize website performance, ranking, and search visibility.",
        },
        {
          subtitle: "Self-Taught",
          title: "UI/UX Design",
          date: "2023 - 2024",
          desc: "Learned modern UI/UX principles to create intuitive and visually appealing user interfaces.",
        },
      ],
    },

    {
      heading: "Experience",
      icon: FaBriefcase,
      items: [
        {
          subtitle: "Self-Taught",
          title: "Frontend Development",
          date: "2021 - 2022",
          desc: "Crafted responsive, pixel-perfect interfaces using modern frontend technologies.",
        },
        {
          subtitle: "Self-Taught",
          title: "Backend Development",
          date: "2023 - 2024",
          desc: "Built scalable backend systems, RESTful APIs, and robust database solutions.",
        },
        {
          subtitle: "Self-Taught",
          title: "Full Stack Development",
          date: "2024 - Present",
          desc: "Full stack developer delivering complete web solutions from frontend to backend.",
        },
        {
          subtitle: "Freelance",
          title: "Client Projects",
          date: "2024 - Present",
          desc: "Delivered 10+ client projects with 100% satisfaction, from concept to deployment.",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    const section = document.getElementById("experience");

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-[var(--container-color)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-3xl font-bold text-[var(--title-color)]"
            data-title="Qualification"
          >
            My Professional Journey
          </h2>

          <p className="text-[var(--text-color)] mt-4 max-w-2xl mx-auto">
            Education and experience that shaped my development journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {qualifications.map((qual, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center justify-center gap-3 border
              
              ${
                activeTab === index
                  ? "bg-[var(--first-color)] text-white border-[var(--first-color)] shadow-lg shadow-[var(--first-color)]/30 scale-105"
                  : "bg-[var(--container-color)]/80 text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)]"
              }`}
            >
              <qual.icon className="text-lg" />
              <span>{qual.heading}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {qualifications[activeTab].items.map((item, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className={`group relative overflow-hidden rounded-3xl p-8
              border border-[var(--border-color)]/50
              bg-[var(--container-color)]/80
              backdrop-blur-xl
              shadow-lg
              hover:border-[var(--first-color)]/60
              hover:shadow-2xl
              hover:shadow-[var(--first-color)]/20
              hover:-translate-y-3
              transition-all duration-700

              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl
                bg-gradient-to-r
                from-[var(--first-color)]/10
                to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700 -z-10"
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-[var(--border-color)]/30">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-[var(--first-color)]/10
                    border border-[var(--first-color)]/20
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform duration-500"
                  >
                    <FaLaptopCode className="text-2xl text-[var(--first-color)]" />
                  </div>

                  {/* Subtitle */}
                  <div>
                    <h4
                      className="text-sm uppercase tracking-wider
                      font-semibold text-[var(--first-color)]"
                    >
                      {item.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Date */}
                <span
                  className="text-xs md:text-sm
                  px-4 py-2 rounded-xl
                  bg-[var(--first-color)]/10
                  text-[var(--first-color)]
                  border border-[var(--first-color)]/20
                  whitespace-nowrap"
                >
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-2xl md:text-xl
                  font-bold text-[var(--title-color)]
                  mb-4 leading-tight
                  group-hover:text-[var(--first-color)]
                  transition-colors duration-500"
                >
                  {item.title}
                </h3>

                <p
                  className="text-[var(--text-color)]
                  leading-relaxed text-base md:text-sm"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
