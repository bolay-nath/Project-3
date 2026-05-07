"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [navToggle, setNavToggle] = useState(true);
  return (
    <div className="fixed top-0 left-0 w-full bg-[--body-color] shadow-md z-50">
      <nav className="h-14 flex justify-between items-center container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 relative">
        <a href="index.html" className="text-2xl md:text-xl font-semibold text-[--first-color]">
          Bolay Nath
        </a>
        <ul className={`${
          navToggle 
            ? "flex gap-6 md:hidden" 
            : "absolute left-0 top-full w-full bg-[--body-color] flex flex-col text-center gap-3 max-h-96 overflow-hidden transition-all duration-300 shadow-md py-7"
        }`}>
          <li>
            <a href="#home" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#services" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contract" className="text-[--title-color] hover:text-[--first-color] transition-colors">
              Contract
            </a>
          </li>
        </ul>

        <button 
          className="hidden md:flex items-center justify-center text-[--text-color] text-xl cursor-pointer"
          onClick={() => setNavToggle(!navToggle)}
        >
          <FaBars />
        </button>
      </nav>
    </div>
  );
};

export default Header;
          </i>
        </label>
      </nav>
    </div>
  );
};

export default Header;
