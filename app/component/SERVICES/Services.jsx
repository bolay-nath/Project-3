"use client";

import { useState, useEffect } from "react";
import { FaShieldVirus, FaServer } from "react-icons/fa6";
import { FaPenSquare, FaMobile, FaRegChartBar, FaCogs } from "react-icons/fa";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: FaPenSquare,
      title: "UI/UX Design",
      desc: "Modern, user-friendly UI/UX designs with clean layouts, smooth interactions, and pixel-perfect visuals.",
    },
    {
      icon: FaMobile,
      title: "Responsive Websites",
      desc: "Fully responsive websites that deliver flawless performance across all devices.",
    },
    {
      icon: FaRegChartBar,
      title: "SEO & Analysis",
      desc: "Data-driven research and optimization to boost ranking, traffic, and conversions.",
    },
    {
      icon: FaCogs,
      title: "API Development",
      desc: "Robust APIs and backend systems connecting frontend with databases and services.",
    },
    {
      icon: FaServer,
      title: "Hosting & Deployment",
      desc: "Seamless deployment with performance optimization and 99.9% uptime guarantee.",
    },
    {
      icon: FaShieldVirus,
      title: "Security",
      desc: "Enterprise-grade security with authentication, encryption, and threat protection.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );

    const section = document.getElementById("services");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="section py-24 bg-[var(--container-color)]"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Title */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="section__title title-center" data-title="Services">
            Professional Web Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl p-8 lg:p-10
              border border-[var(--border-color)]/40
              bg-[var(--body-color)]/60
              backdrop-blur-xl
              shadow-md
              hover:shadow-2xl
              hover:shadow-[var(--first-color)]/20
              hover:border-[var(--first-color)]/60
              hover:bg-[var(--container-color)]
              transition-all duration-500
              cursor-pointer
              hover:-translate-y-3
              ${isVisible ? `animate-fade-in-up delay-${index * 100}ms` : ""}`}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center
                w-20 h-20 mx-auto mb-8 rounded-2xl
                bg-[var(--container-color)]
                border border-[var(--first-color)]/20
                group-hover:border-[var(--first-color)]/50
                group-hover:bg-[var(--first-color)]/10
                transition-all duration-500"
              >
                <service.icon
                  className="w-10 h-10 text-[var(--first-color)]
                  group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3
                  className="text-2xl lg:text-xl font-bold
                  text-[var(--title-color)]
                  mb-6
                  group-hover:text-[var(--first-color)]
                  transition-colors duration-500"
                >
                  {service.title}
                </h3>

                <p
                  className="text-[var(--text-color)]
                  leading-relaxed
                  opacity-90
                  group-hover:opacity-100
                  transition-all duration-500
                  text-base"
                >
                  {service.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0
                w-full h-1
                bg-gradient-to-r
                from-transparent
                via-[var(--first-color)]
                to-transparent
                scale-x-0
                group-hover:scale-x-100
                transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
