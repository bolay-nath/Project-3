"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homePhoto =
    "https://res.cloudinary.com/dbijpygjz/image/upload/v1758722676/samples/coffee.png";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[var(--container-color)] pt-36 pb-20 md:pt-28 md:pb-16 sm:pt-24 sm:pb-12 flex items-center"
    >
      <div className="container grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center gap-12 lg:gap-20">
        {/* Content */}
        <div
          className={`order-2 lg:order-1 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"}`}
        >
          {/* Greeting */}
          <span className="inline-block text-lg sm:text-xl font-semibold tracking-widest uppercase mb-4 bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] bg-clip-text text-transparent animate-pulse">
            👋 Hello, I'm
          </span>

          {/* Main Title */}
          <h1
            className="section__title mb-8 max-w-lg leading-tight"
            data-title="Website Developer"
          >
            <span className="font-light block text-6xl lg:text-5xl md:text-4xl sm:text-3xl">
              Bolay Nath
            </span>
            <span className="block text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] bg-clip-text text-transparent">
              Website Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-10 max-w-md text-[var(--text-color)] opacity-90">
            Hi there! I'm a passionate web developer with years of experience in
            crafting
            <span className="font-semibold text-[var(--title-color)]">
              dynamic
            </span>{" "}
            and
            <span className="font-semibold text-[var(--title-color)]">
              user-friendly
            </span>{" "}
            websites. From sleek React frontends to efficient full-stack
            solutions, I've got you covered!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md">
            <Link
              href="#contact"
              className="btn group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[var(--first-color)]/30 transform hover:-translate-y-1 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me
                <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--first-color-dark)] to-[var(--first-color)] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
            </Link>

            <Link
              href="#work"
              className="btn btn--transparent group shadow-lg hover:shadow-xl hover:shadow-[var(--first-color)]/20 transform hover:-translate-y-1 transition-all duration-500"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Link
              href="#about"
              scroll={true}
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] hover:text-[var(--first-color)] group"
            >
              <span>Scroll to explore</span>
              <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300 animate-bounce [animation-delay:0.6s]" />
            </Link>
          </div>
        </div>

        {/* Image - CLEAN VERSION */}
        <div
          className={`flex justify-center order-1 lg:order-2 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}
        >
          <div className="home__img-wrapper w-[340px] lg:w-[380px] xl:w-[420px] md:w-[300px] sm:w-[260px] relative group/image">
            {/* Enhanced layered effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--first-color)]/5 to-[var(--first-color-dark)]/5 rounded-3xl blur-xl -z-10 group-hover/image:scale-105 transition-all duration-500" />
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--first-color)] via-[var(--first-color-light)] to-[var(--first-color)] rounded-3xl blur-xl opacity-20 animate-pulse group-hover/image:opacity-30 transition-opacity duration-500" />

            <img
              src={homePhoto}
              alt="Bolay Nath - Website Developer"
              className="home__img relative z-20 w-full h-[380px] lg:h-[420px] md:h-[340px] sm:h-[300px] object-contain drop-shadow-2xl group-hover/image:rotate-3 group-hover/image:scale-105 transition-all duration-700"
              loading="eager"
            />

            {/* Spinning accent ring */}
            <div className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-[var(--first-color)]/30 rounded-2xl flex items-center justify-center animate-spin-slow">
              <div className="w-12 h-12 bg-gradient-to-r from-[var(--first-color)]/20 to-[var(--first-color-dark)]/20 rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
