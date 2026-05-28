"use client";

import { useState, useEffect, useRef } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "./AllData";
import Link from "next/link";

const colors = [
  {
    bg: "bg-violet-500",
    label: "Violet",
    values: ["hsl(252,35%,51%)", "hsl(252,25%,51%)", "hsl(252,100%,83%)"],
  },
  {
    bg: "bg-red-500",
    label: "Red",
    values: ["hsl(351,85%,51%)", "hsl(351,75%,71%)", "hsl(351,100%,83%)"],
  },
  {
    bg: "bg-purple-500",
    label: "Purple",
    values: ["hsl(271,76%,53%)", "hsl(271,60%,53%)", "hsl(271,100%,83%)"],
  },
  {
    bg: "bg-blue-500",
    label: "Blue",
    values: ["hsl(225,73%,57%)", "hsl(225,63%,57%)", "hsl(225,100%,83%)"],
  },
  {
    bg: "bg-yellow-500",
    label: "Gold",
    values: ["hsl(43,74%,49%)", "hsl(43,64%,49%)", "hsl(43,100%,83%)"],
  },
  {
    bg: "bg-pink-500",
    label: "Pink",
    values: ["hsl(339,81%,66%)", "hsl(339,71%,66%)", "hsl(339,100%,83%)"],
  },
  {
    bg: "bg-green-500",
    label: "Green",
    values: ["hsl(80,61%,50%)", "hsl(80,51%,50%)", "hsl(80,100%,83%)"],
  },
  {
    bg: "bg-orange-500",
    label: "Orange",
    values: ["hsl(19,96%,52%)", "hsl(19,86%,52%)", "hsl(19,100%,83%)"],
  },
  {
    bg: "bg-lime-600",
    label: "Lime",
    values: ["hsl(88,65%,43%)", "hsl(88,55%,43%)", "hsl(88,100%,83%)"],
  },
  {
    bg: "bg-amber-400",
    label: "Amber",
    values: ["hsl(42,100%,50%)", "hsl(42,85%,50%)", "hsl(42,100%,83%)"],
  },
];

const IconButton = ({ onClick, title, children, extraClass = "" }) => (
  <button
    onClick={onClick}
    title={title}
    aria-label={title}
    className={`
      w-10 h-10 sm:w-11 sm:h-11
      rounded-xl flex items-center justify-center
      bg-[var(--container-color)] border border-[var(--border-color)]
      text-[var(--title-color)] text-base sm:text-lg
      shadow-lg hover:text-[var(--first-color)]
      hover:border-[var(--first-color)]/40
      hover:shadow-[var(--first-color)]/20
      transition-all duration-300 shrink-0
      ${extraClass}
    `}
  >
    {children}
  </button>
);

const StyleSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const panelRef = useRef(null);

  const changeColor = (index, values) => {
    setActiveColor(index);
    document.documentElement.style.setProperty("--first-color", values[0]);
    document.documentElement.style.setProperty("--first-color-dark", values[1]);
    document.documentElement.style.setProperty(
      "--first-color-light",
      values[2],
    );
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  // Close panel on scroll
  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close panel on outside click
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed right-3 sm:right-5 top-1/3 z-50 flex flex-col items-end gap-3"
    >
      {/* Settings toggle */}
      <IconButton
        onClick={() => setOpen((v) => !v)}
        title="Theme settings"
        extraClass="hover:rotate-90"
      >
        <FaCog className={open ? "animate-spin" : ""} />
      </IconButton>

      {/* Dark / Light toggle */}
      <IconButton
        onClick={toggleTheme}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </IconButton>

      {/* WhatsApp */}
      <IconButton
        title="Chat on WhatsApp"
        extraClass="hover:text-green-500 hover:border-green-400/40"
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          <FaWhatsapp />
        </Link>
      </IconButton>

      {/* Color panel */}
      <div
        className={`
          transition-all duration-500 origin-top-right
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        <div
          className="
          p-4 rounded-2xl w-48 sm:w-52
          bg-[var(--container-color)] border border-[var(--border-color)]
          shadow-2xl shadow-black/10 backdrop-blur-xl
        "
        >
          <p
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest
                        text-[var(--text-color)] opacity-60 mb-3 text-center"
          >
            Choose Color
          </p>

          <div className="grid grid-cols-5 gap-2.5">
            {colors.map((color, i) => (
              <button
                key={i}
                onClick={() => changeColor(i, color.values)}
                aria-label={`${color.label} theme`}
                title={color.label}
                className={`
                  ${color.bg} w-7 h-7 sm:w-8 sm:h-8 rounded-full
                  transition-all duration-300
                  hover:scale-110 hover:shadow-md
                  ${
                    activeColor === i
                      ? "ring-2 ring-white ring-offset-2 ring-offset-[var(--container-color)] scale-110"
                      : "opacity-80 hover:opacity-100"
                  }
                `}
              />
            ))}
          </div>

          {/* Active color label */}
          {activeColor !== null && (
            <p className="text-center text-[10px] mt-3 text-[var(--first-color)] font-semibold tracking-wide">
              {colors[activeColor].label} selected
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
