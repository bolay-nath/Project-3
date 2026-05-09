"use client";

import { useState, useEffect, useCallback } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      text: "This was such an amazing experience. He had my site up and running in no time and was exceptionally responsive throughout the process.",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744675/testimonial-1_rjrjse.jpg",
      name: "John Wilson",
      identity: "New York, USA",
    },
    {
      text: "Fantastic job! The freelancer delivered high-quality work and paid great attention to detail. I'm very satisfied with the final result.",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744682/testimonial-2_urfmza.jpg",
      name: "Samlinton",
      identity: "New York, USA",
    },
    {
      text: "Outstanding work! The design exceeded my expectations and the communication was excellent throughout the entire project.",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744675/testimonial-1_rjrjse.jpg",
      name: "Sarah Johnson",
      identity: "London, UK",
    },
    {
      text: "Professional, timely, and creative. My website now perfectly represents my brand. Highly recommended!",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744682/testimonial-2_urfmza.jpg",
      name: "Mike Chen",
      identity: "San Francisco, USA",
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

    const section = document.getElementById("testimonials");

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 lg:py-32 bg-[var(--body-color)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span
            className="inline-block px-6 py-3 text-[var(--first-color)]
            bg-[var(--container-color)] border border-[var(--border-color)]
            font-semibold text-lg sm:text-xl rounded-full mb-8 tracking-wide shadow-lg"
          >
            TESTIMONIALS
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-black text-[var(--title-color)] leading-tight"
          >
            What My Clients Say
          </h2>

          <div
            className="w-32 h-1 bg-[var(--first-color)]
            mx-auto mt-12 rounded-full"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <article
              key={idx}
              className={`group relative rounded-3xl p-8 sm:p-10 lg:p-12
              bg-[var(--container-color)] border border-[var(--border-color)]
              shadow-xl hover:shadow-2xl
              hover:border-[var(--first-color)]/40
              transition-all duration-700 hover:-translate-y-4 overflow-hidden
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Quote */}
              <div className="relative z-10">
                <div
                  className="text-6xl sm:text-7xl lg:text-8xl font-serif
                  text-[var(--first-color)]/20 mb-6"
                >
                  “
                </div>

                <blockquote
                  className="text-[var(--text-color)]
                  leading-relaxed text-lg sm:text-xl lg:text-2xl
                  font-medium mb-8"
                >
                  {testimonial.text}
                </blockquote>
              </div>

              {/* User Info */}
              <div
                className="relative z-10 flex items-center gap-6 pt-4
                border-t border-[var(--border-color)]"
              >
                <div className="relative">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                    rounded-2xl object-cover border-4
                    border-[var(--container-color)] shadow-2xl
                    transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <h4
                    className="text-xl sm:text-2xl lg:text-3xl
                    font-black text-[var(--title-color)] mb-1
                    group-hover:text-[var(--first-color)]
                    transition-colors duration-500"
                  >
                    {testimonial.name}
                  </h4>

                  <p
                    className="text-sm sm:text-base lg:text-lg
                    text-[var(--text-color)] tracking-wide"
                  >
                    {testimonial.identity}
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1
                bg-[var(--first-color)]
                transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-700 origin-left"
              />
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["50+", "Projects"],
            ["98%", "Satisfaction"],
            ["24h", "Response Time"],
            ["100+", "Happy Clients"],
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-center
              bg-[var(--container-color)]
              border border-[var(--border-color)]
              hover:border-[var(--first-color)]/40
              transition-all duration-500 hover:scale-105"
            >
              <div
                className="text-3xl sm:text-4xl font-black
                text-[var(--first-color)] mb-2"
              >
                {item[0]}
              </div>

              <div
                className="text-sm font-semibold
                text-[var(--text-color)]
                uppercase tracking-wide"
              >
                {item[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
