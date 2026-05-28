"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const aboutImage =
    "https://res.cloudinary.com/dbijpygjz/image/upload/f_auto,q_auto/v1758723152/samples/chair.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const infoItems = [
    { label: "Name", value: "Bolay Nath", icon: "👤" },
    { label: "Age", value: "24 Years", icon: "🎂" },
    { label: "From", value: "Chittagong, Bangladesh", icon: "📍" },
    {
      label: "Email",
      value: "bolaynath.82@gmail.com",
      icon: "✉️",
      isLink: true,
      href: "mailto:bolaynath.82@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "X (Twitter)", color: "#000" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--first-color)]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[var(--first-color-dark)]/10 blur-[100px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center max-w-7xl">
        {/* ── Image Column ── */}
        <div
          className={`flex justify-center transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
        >
          <div className="relative group/img w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]">
            {/* Outer ambient glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--first-color)]/20 blur-3xl scale-110 group-hover/img:scale-125 transition-transform duration-700 -z-10" />

            {/* Animated gradient border */}
            <div
              className="absolute inset-0 rounded-[2rem] p-[3px] bg-gradient-to-br from-[var(--first-color)] via-[var(--first-color-light)] to-[var(--first-color-dark)]"
              style={{ borderRadius: "2rem" }}
            >
              <div className="w-full h-full rounded-[calc(2rem-3px)] bg-[var(--body-color)]" />
            </div>

            {/* Image */}
            <img
              src={aboutImage}
              alt="Bolay Nath — About"
              loading="lazy"
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-[2rem]
                         shadow-2xl shadow-[var(--first-color)]/20
                         group-hover/img:shadow-[var(--first-color)]/40
                         group-hover/img:-rotate-2 group-hover/img:scale-[1.03]
                         transition-all duration-700 cursor-pointer"
            />

            {/* Floating accent squares */}
            <span
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                         bg-gradient-to-br from-[var(--first-color)] to-[var(--first-color-dark)]
                         opacity-60 blur-[2px] animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl
                         bg-[var(--first-color-light)] opacity-50 blur-[2px] animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "0.6s" }}
            />

            {/* Experience badge */}
            <div
              className="absolute -bottom-5 right-4 sm:right-6
                         bg-[var(--container-color)] border border-[var(--border-color)]/40
                         rounded-2xl px-4 py-2 shadow-xl shadow-[var(--first-color)]/10
                         flex items-center gap-2 backdrop-blur-md z-20"
            >
              <span className="text-xl">💻</span>
              <div className="leading-tight">
                <p className="text-[10px] sm:text-xs text-[var(--text-color)] opacity-70 whitespace-nowrap">
                  Experience
                </p>
                <p className="text-xs sm:text-sm font-bold text-[var(--title-color)] whitespace-nowrap">
                  3+ Years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content Column ── */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {/* Sub-heading tag */}
          <span
            className="inline-block mb-4 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest uppercase
                           bg-[var(--first-color)]/10 text-[var(--first-color)] rounded-full border border-[var(--first-color)]/20"
          >
            Who Am I?
          </span>

          {/* Main heading */}
          <h2 className="section__title mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-lg">
            I'm Bolay Nath
            <span className="block mt-1 bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] bg-clip-text text-transparent">
              Web Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 pb-8 border-b border-[var(--border-color)]/40 text-[var(--text-color)] opacity-90 max-w-xl">
            Hi there! I'm a passionate web developer with years of experience
            crafting{" "}
            <strong className="text-[var(--title-color)] font-semibold">
              modern
            </strong>{" "}
            and{" "}
            <strong className="text-[var(--title-color)] font-semibold">
              user-friendly
            </strong>{" "}
            websites. Whether you need a sleek React frontend, scalable backend,
            or a full-stack web application, I can help bring your ideas to
            life.
          </p>

          {/* Info Grid — 2 cols on sm+, 1 col on xs */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
            {infoItems.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 p-3 sm:p-4 rounded-2xl
                           border border-[var(--border-color)]/30
                           hover:border-[var(--first-color)]/40
                           hover:bg-[var(--container-color)]
                           hover:shadow-lg hover:shadow-[var(--first-color)]/10
                           transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-lg sm:text-xl mt-0.5 shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[var(--text-color)] opacity-60 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm font-semibold text-[var(--title-color)]
                                 hover:text-[var(--first-color)] transition-colors duration-300
                                 truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-semibold text-[var(--title-color)] block truncate">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Social row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            {/* Download CV button */}
            <Link
              href="https://res.cloudinary.com/dbijpygjz/image/upload/v1758742160/Bolay_Nath_CV_kdu0zc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn group relative overflow-hidden inline-flex items-center gap-2
                         px-7 py-3.5 sm:px-8 sm:py-4
                         text-sm sm:text-base font-bold rounded-2xl
                         bg-[var(--first-color)] text-white
                         shadow-lg shadow-[var(--first-color)]/30
                         hover:shadow-xl hover:shadow-[var(--first-color)]/40
                         hover:-translate-y-1 hover:scale-[1.02]
                         transition-all duration-500 w-fit"
            >
              {/* Shimmer overlay */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                           -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative z-10 text-base">📄</span>
              <span className="relative z-10">Download CV</span>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-[var(--border-color)]/40" />

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[var(--text-color)] opacity-50 uppercase tracking-widest hidden sm:block">
                Follow
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                               text-sm sm:text-base rounded-xl
                               text-[var(--text-color)] bg-[var(--container-color)]
                               border border-[var(--border-color)]/30
                               hover:text-white hover:border-transparent
                               hover:scale-110 hover:-translate-y-0.5
                               hover:shadow-lg
                               transition-all duration-300"
                    style={{
                      "--hover-bg": social.color,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = social.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "")
                    }
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
