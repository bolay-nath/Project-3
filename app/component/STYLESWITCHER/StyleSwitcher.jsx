"use client";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const StyleSwitcher = () => {
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState(true);

  const handleChangeColor = (color, color2, color3) => {
    document.documentElement.style.setProperty("--first-color", color);
    document.documentElement.style.setProperty("--first-color-dark", color2);
    document.documentElement.style.setProperty("--first-color-light", color3);
  };

  const colors = [
    {
      className: "bg-blue-600",
      colors: [
        "hsl(252, 35%, 51%)",
        "hsl(252, 25%, 51%)",
        "hsl(252, 100%, 83%)",
      ],
    },
    {
      className: "bg-red-600",
      colors: [
        "hsl(351, 85%, 51%)",
        "hsl(351, 75%, 71%)",
        "hsl(351, 100%, 83%)",
      ],
    },
    {
      className: "bg-purple-600",
      colors: [
        "hsl(271, 76%, 53%)",
        "hsl(271, 60%, 53%)",
        "hsl(271, 100%, 83%)",
      ],
    },
    {
      className: "bg-cyan-500",
      colors: [
        "hsl(225, 73%, 57%)",
        "hsl(225, 63%, 57%)",
        "hsl(225, 100%, 83%)",
      ],
    },
    {
      className: "bg-yellow-500",
      colors: ["hsl(43, 74%, 49%)", "hsl(43, 64%, 49%)", "hsl(43, 100%, 83%)"],
    },
    {
      className: "bg-pink-400",
      colors: [
        "hsl(339, 81%, 66%)",
        "hsl(339, 71%, 66%)",
        "hsl(339, 100%, 83%)",
      ],
    },
    {
      className: "bg-green-500",
      colors: ["hsl(80, 61%, 50%)", "hsl(80, 51%, 50%)", "hsl(80, 100%, 83%)"],
    },
    {
      className: "bg-orange-500",
      colors: ["hsl(19, 96%, 52%)", "hsl(19, 86%, 52%)", "hsl(19, 100%, 83%)"],
    },
    {
      className: "bg-lime-600",
      colors: ["hsl(88, 65%, 43%)", "hsl(88, 55%, 43%)", "hsl(88, 100%, 83%)"],
    },
    {
      className: "bg-yellow-400",
      colors: ["hsl(42, 100%, 50%)", "hsl(42, 85%, 50%)", "hsl(42, 100%, 83%)"],
    },
  ];

  const handleScroll = () => {
    if (toggle === false) {
      setToggle(true);
    }
  };

  typeof window !== "undefined" &&
    window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`fixed right-0 w-32 sm:w-28 p-2 border border-[--border-color] bg-[--container-color] rounded-lg z-50 transition-transform duration-300 ${
        toggle ? "translate-x-full" : "translate-x-0"
      }`}
      style={{ bottom: "20%" }}
    >
      {/* Settings Icon */}
      <button
        onClick={() => setToggle(!toggle)}
        className="absolute right-full mr-4 w-12 h-12 sm:w-10 sm:h-10 bg-[--body-color] border border-[--border-color] rounded-full flex items-center justify-center text-[--title-color] text-xl sm:text-lg cursor-pointer hover:text-[--first-color] transition-colors"
      >
        <FaCog />
      </button>

      {/* Theme Toggle Icon */}
      <button
        onClick={() => {
          setTheme(!theme);
          document.body.classList.toggle("dark");
        }}
        className="absolute right-full mr-4 w-12 h-12 sm:w-10 sm:h-10 bg-[--body-color] border border-[--border-color] rounded-full flex items-center justify-center text-[--title-color] text-xl sm:text-lg cursor-pointer hover:text-[--first-color] transition-colors"
        style={{ top: "80px" }}
      >
        {theme ? <FaMoon /> : <FaSun />}
      </button>

      {/* Color Selector */}
      <h4 className="text-xs font-semibold text-[--text-color] mb-2 sm:mb-1">
        Theme Colors
      </h4>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-1.5 sm:gap-1">
        {colors.map((color, idx) => (
          <button
            key={idx}
            onClick={() => handleChangeColor(...color.colors)}
            className={`${color.className} w-5 h-5 sm:w-4 sm:h-4 rounded-full cursor-pointer hover:opacity-80 transition-opacity`}
            title="Change color"
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
