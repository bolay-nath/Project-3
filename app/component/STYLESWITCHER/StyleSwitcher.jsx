"use client";

import { useState, useEffect } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";

const StyleSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Theme Colors
  const colors = [
    {
      bg: "bg-violet-500",
      values: [
        "hsl(252, 35%, 51%)",
        "hsl(252, 25%, 51%)",
        "hsl(252, 100%, 83%)",
      ],
    },
    {
      bg: "bg-red-500",
      values: [
        "hsl(351, 85%, 51%)",
        "hsl(351, 75%, 71%)",
        "hsl(351, 100%, 83%)",
      ],
    },
    {
      bg: "bg-purple-500",
      values: [
        "hsl(271, 76%, 53%)",
        "hsl(271, 60%, 53%)",
        "hsl(271, 100%, 83%)",
      ],
    },
    {
      bg: "bg-blue-500",
      values: [
        "hsl(225, 73%, 57%)",
        "hsl(225, 63%, 57%)",
        "hsl(225, 100%, 83%)",
      ],
    },
    {
      bg: "bg-yellow-500",
      values: ["hsl(43, 74%, 49%)", "hsl(43, 64%, 49%)", "hsl(43, 100%, 83%)"],
    },
    {
      bg: "bg-pink-500",
      values: [
        "hsl(339, 81%, 66%)",
        "hsl(339, 71%, 66%)",
        "hsl(339, 100%, 83%)",
      ],
    },
    {
      bg: "bg-green-500",
      values: ["hsl(80, 61%, 50%)", "hsl(80, 51%, 50%)", "hsl(80, 100%, 83%)"],
    },
    {
      bg: "bg-orange-500",
      values: ["hsl(19, 96%, 52%)", "hsl(19, 86%, 52%)", "hsl(19, 100%, 83%)"],
    },
    {
      bg: "bg-lime-600",
      values: ["hsl(88, 65%, 43%)", "hsl(88, 55%, 43%)", "hsl(88, 100%, 83%)"],
    },
    {
      bg: "bg-amber-400",
      values: ["hsl(42, 100%, 50%)", "hsl(42, 85%, 50%)", "hsl(42, 100%, 83%)"],
    },
  ];

  // Change Theme Color
  const changeColor = (c1, c2, c3) => {
    document.documentElement.style.setProperty("--first-color", c1);
    document.documentElement.style.setProperty("--first-color-dark", c2);
    document.documentElement.style.setProperty("--first-color-light", c3);
  };

  // Dark Mode Toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  // Close Panel on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className="fixed right-5 top-1/3 z-50 flex flex-col items-end gap-4">
      {/* Settings Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-12 h-12 rounded-2xl
          bg-[var(--container-color)]
          border border-[var(--border-color)]
          shadow-xl
          flex items-center justify-center
          text-[var(--title-color)]
          hover:text-[var(--first-color)]
          hover:rotate-90
          transition-all duration-500
        "
      >
        <FaCog className={`${open ? "animate-spin" : ""}`} />
      </button>

      {/* Dark / Light Mode */}
      <button
        onClick={toggleTheme}
        className="
          w-12 h-12 rounded-2xl
          bg-[var(--container-color)]
          border border-[var(--border-color)]
          shadow-xl
          flex items-center justify-center
          text-[var(--title-color)]
          hover:text-[var(--first-color)]
          transition-all duration-300
        "
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Color Panel */}
      <div
        className={`
          overflow-hidden transition-all duration-500
          ${open ? "w-52 opacity-100 scale-100" : "w-0 opacity-0 scale-95"}
        `}
      >
        <div
          className="
            p-5 rounded-3xl
            bg-[var(--container-color)]
            border border-[var(--border-color)]
            shadow-2xl backdrop-blur-xl
          "
        >
          <h4 className="text-sm font-semibold text-[var(--title-color)] mb-4 text-center">
            Theme Colors
          </h4>

          <div className="grid grid-cols-5 gap-3">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => changeColor(...color.values)}
                className={`
                  ${color.bg}
                  w-8 h-8 rounded-full
                  border-2 border-white/30
                  hover:scale-110
                  hover:shadow-lg
                  transition-all duration-300
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
