"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--body-color)]/90 backdrop-blur-xl shadow-xl border-b border-[var(--border-color)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container h-[calc(var(--header-height)+1rem)] flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl md:text-3xl font-black text-[var(--title-color)] relative group transition-all duration-300 hover:scale-105"
        >
          <span className="text-[var(--first-color)]">Bolay</span> Nath
          <span
            className="absolute left-0 -bottom-1 w-0 h-[3px] rounded-full
            bg-[var(--first-color)]
            group-hover:w-full transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-6">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                scroll={true}
                className="relative px-3 py-2 text-[var(--text-color)] font-medium text-base lg:text-lg transition-all duration-300 hover:text-[var(--first-color)]"
              >
                {item.label}

                {/* Hover Background */}
                <span
                  className="absolute inset-0 rounded-xl bg-[var(--first-color)]/10
                  scale-0 group-hover:scale-100 transition-all duration-300 -z-10"
                />

                {/* Bottom Border */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px]
                  bg-[var(--first-color)] rounded-full
                  group-hover:w-4/5 transition-all duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-2xl
          bg-[var(--first-color)]
          hover:bg-[var(--first-color-alt)]
          text-white font-semibold
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl"
        >
          Get In Touch
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setNavToggle(!navToggle)}
          className="md:hidden text-xl p-3 rounded-xl
          bg-[var(--container-color)]
          text-[var(--title-color)]
          border border-[var(--border-color)]
          hover:border-[var(--first-color)]/50
          hover:text-[var(--first-color)]
          transition-all duration-300 z-50"
          aria-label="Toggle Menu"
        >
          {navToggle ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full md:hidden overflow-hidden transition-all duration-500 ${
            navToggle
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <ul
            className="flex flex-col items-center gap-6 py-10
            bg-[var(--container-color)]/95 backdrop-blur-xl
            border-t border-[var(--border-color)]
            shadow-2xl"
          >
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  scroll={true}
                  onClick={() => setNavToggle(false)}
                  className="text-xl font-semibold text-[var(--text-color)]
                  hover:text-[var(--first-color)]
                  transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-4">
              <Link
                href="#contact"
                onClick={() => setNavToggle(false)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl
                bg-[var(--first-color)]
                hover:bg-[var(--first-color-alt)]
                text-white font-semibold text-lg
                transition-all duration-300 hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {navToggle && (
          <div
            onClick={() => setNavToggle(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden -z-10"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
