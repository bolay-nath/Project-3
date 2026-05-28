"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowDown, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { whatsappUrl } from "./AllData";

const STATS = [
  { value: "3+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Clients" },
];

const HOME_PHOTO =
  "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto,w_480/v1758722676/samples/coffee.png";

const Home = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[var(--container-color)]
        flex items-center
        pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24
      "
    >
      {/* Background decorations — CSS only, zero JS cost */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,var(--first-color)_0%,transparent_60%)]
          opacity-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40
          w-[500px] h-[500px] rounded-full
          bg-[var(--first-color)] opacity-[0.06] blur-[120px]"
      />
      {/* Grid dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--title-color) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Content ── */}
        <div className="order-2 lg:order-1 animate-fade-in-left">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full
                          bg-[var(--first-color)]/10 border border-[var(--first-color)]/20
                          text-[var(--first-color)] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--first-color)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--first-color)]" />
            </span>
            Available for work
          </div>

          {/* Heading */}
          <h1 className="mb-6 leading-[1.1] tracking-tight">
            <span className="block text-[var(--text-color)] opacity-70 text-lg sm:text-xl font-medium mb-1">
              👋 Hello, I'm
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--title-color)]">
              Bolay
              <span className="bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] bg-clip-text text-transparent">
                {" "}Nath
              </span>
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text-color)] opacity-80 mt-2">
              Full-Stack Web Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md text-[var(--text-color)] opacity-80">
            I craft{" "}
            <strong className="text-[var(--title-color)] font-semibold">dynamic</strong> and{" "}
            <strong className="text-[var(--title-color)] font-semibold">user-friendly</strong>{" "}
            web experiences — from sleek React frontends to scalable full-stack solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-10 max-w-sm sm:max-w-none">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center justify-center gap-2
                px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl
                bg-[var(--first-color)] text-white font-bold text-sm sm:text-base
                shadow-lg shadow-[var(--first-color)]/30
                hover:shadow-xl hover:shadow-[var(--first-color)]/40
                hover:-translate-y-0.5 transition-all duration-300 overflow-hidden
              "
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                           -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <FaWhatsapp className="text-base relative z-10" />
              <span className="relative z-10">Hire Me</span>
            </Link>

            <Link
              href="#work"
              className="
                group inline-flex items-center justify-center gap-2
                px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl
                border-2 border-[var(--first-color)]/30 text-[var(--title-color)]
                font-bold text-sm sm:text-base
                hover:border-[var(--first-color)] hover:bg-[var(--first-color)]/5
                hover:-translate-y-0.5 transition-all duration-300
              "
            >
              <FaBriefcase className="text-sm text-[var(--first-color)]" />
              View Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-10 pb-10 border-b border-[var(--border-color)]/30">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[var(--first-color)] leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-xs text-[var(--text-color)] opacity-60 mt-1 whitespace-nowrap">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <Link
            href="#about"
            scroll
            className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm
                       text-[var(--text-color)] opacity-50 hover:opacity-100
                       hover:text-[var(--first-color)] transition-all duration-300 group"
          >
            Scroll to explore
            <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </Link>
        </div>

        {/* ── Image ── */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up">
          <div className="home__img-wrapper">

            {/* Your existing blob ::before & ::after fire automatically */}

            <Image
              src={HOME_PHOTO}
              alt="Bolay Nath — Web Developer"
              width={420}
              height={480}
              priority
              fetchPriority="high"
              className="home__img drop-shadow-2xl
                         hover:scale-[1.03] hover:rotate-1
                         transition-all duration-700"
            />

            {/* Open to work badge */}
            <div className="absolute -top-4 -right-2 sm:-right-6 z-20
                            bg-[var(--container-color)] border border-[var(--border-color)]/40
                            rounded-2xl px-3 py-2 shadow-xl backdrop-blur-md
                            flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--title-color)] whitespace-nowrap">
                Open to work
              </span>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 -left-2 sm:-left-6 z-20
                            bg-[var(--container-color)] border border-[var(--border-color)]/40
                            rounded-2xl px-3 sm:px-4 py-2 shadow-xl backdrop-blur-md
                            flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <div className="leading-tight">
                <p className="text-[9px] sm:text-[10px] text-[var(--text-color)] opacity-60 whitespace-nowrap">
                  Experience
                </p>
                <p className="text-xs sm:text-sm font-bold text-[var(--title-color)] whitespace-nowrap">
                  3+ Years
                </p>
              </div>
            </div>

            {/* Spinning dashed ring — uses your .animate-spin-slow from globals.css */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 w-24 h-24
                         border-4 border-dashed border-[var(--first-color)]/20
                         rounded-full animate-spin-slow z-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;