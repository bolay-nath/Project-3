import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaXTwitter />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <FaLinkedin />,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[var(--container-color)] border-t border-[var(--border-color)] py-8 sm:py-10">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm sm:text-base text-[var(--text-color)] opacity-80">
          © 2026{" "}
          <span className="font-semibold text-[var(--title-color)]">
            Bolay Nath
          </span>
          . All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                w-11 h-11 sm:w-12 sm:h-12
                rounded-full
                border border-[var(--border-color)]
                flex items-center justify-center
                text-[var(--text-color)]
                bg-[var(--body-color)]
                hover:bg-[var(--first-color)]
                hover:text-white
                hover:border-[var(--first-color)]
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-[var(--first-color)]/30
                transition-all duration-300
              "
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
