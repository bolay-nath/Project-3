"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744635/project-img-1_gjx1bs.jpg",
      title: "Web Design",
      desc: "Modern responsive website design with pixel-perfect layouts.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744640/project-img-2_fzmqc3.jpg",
      title: "Android App",
      desc: "Native mobile application with smooth animations & performance.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744647/project-img-3_dgnqyy.jpg",
      title: "Photoshop Design",
      desc: "Creative graphic design & complete branding solutions.",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744654/project-img-4_qkpt3j.jpg",
      title: "UI/UX Design",
      desc: "User-centered interface design with intuitive interactions.",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744661/project-img-5_k5dmow.jpg",
      title: "Web Development",
      desc: "Full-stack development with modern frameworks & APIs.",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758744668/project-img-6_lrsn3a.jpg",
      title: "Portfolio Website",
      desc: "Professional portfolio with advanced animations & features.",
    },
  ];

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    const section = document.getElementById("work");

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 bg-[var(--container-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span
            className="inline-block px-4 py-2
            bg-[var(--first-color)]/10
            text-[var(--first-color)]
            text-sm font-semibold rounded-full
            mb-6 tracking-wider"
          >
            PORTFOLIO
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-black
            text-[var(--title-color)]
            leading-tight"
          >
            Recent Projects
          </h2>

          <div
            className="w-24 h-1
            bg-gradient-to-r
            from-[var(--first-color)]
            to-[var(--first-color-dark)]
            mx-auto mt-8 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl
              bg-[var(--body-color)]/60
              backdrop-blur-xl
              border border-[var(--border-color)]/40
              shadow-xl
              hover:shadow-2xl
              hover:shadow-[var(--first-color)]/20
              hover:border-[var(--first-color)]/50
              transition-all duration-700
              hover:-translate-y-4
              ${
                isVisible
                  ? `translate-y-0 opacity-100 delay-${index * 100}`
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={project.img}
                  alt={`${project.title} - ${project.desc}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3"
                  priority={index < 3}
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0
                  bg-black/70
                  opacity-0 group-hover:opacity-100
                  transition-all duration-700
                  flex flex-col justify-end
                  p-6 sm:p-8"
                >
                  <h3
                    className="text-white text-xl sm:text-2xl lg:text-3xl
                    font-black mb-3
                    translate-y-6 group-hover:translate-y-0
                    transition-all duration-700"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-white/90
                    text-sm sm:text-base lg:text-lg
                    leading-relaxed
                    translate-y-4 group-hover:translate-y-0
                    transition-all duration-1000
                    line-clamp-2"
                  >
                    {project.desc}
                  </p>
                </div>

                {/* Accent Badge */}
                <div
                  className="absolute top-4 right-4
                  w-6 h-6 sm:w-8 sm:h-8
                  bg-[var(--first-color)]
                  rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  scale-0 group-hover:scale-100"
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute -bottom-1 left-0 right-0 h-2
                bg-gradient-to-r
                from-[var(--first-color)]
                via-[var(--first-color-dark)]
                to-[var(--first-color)]
                opacity-0 group-hover:opacity-100
                transition-all duration-700"
              />

              {/* Project Counter */}
              <div
                className="absolute top-4 left-4
                bg-[var(--container-color)]/90
                backdrop-blur-xl
                px-4 py-2 rounded-2xl
                border border-[var(--border-color)]/50
                font-mono text-xs font-bold
                text-[var(--title-color)]"
              >
                0{project.id}
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3
            px-8 sm:px-12 py-4 sm:py-5
            bg-[var(--first-color)]
            hover:bg-[var(--first-color-dark)]
            text-white
            font-bold text-lg sm:text-xl
            rounded-3xl
            transition-all duration-500
            hover:scale-105
            hover:shadow-2xl
            hover:shadow-[var(--first-color)]/30"
          >
            View All Projects
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
