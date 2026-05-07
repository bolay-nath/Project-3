import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[--container-color] py-8 md:py-6">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
        <p className="text-[--text-color] text-sm md:text-base">
          &copy; 2024 Bolay Nath. All Rights Reserved
        </p>
        <div className="flex gap-5 md:gap-4 text-[--text-color] text-lg md:text-base">
          <a href="#" className="hover:text-[--first-color] transition-colors">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-[--first-color] transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[--first-color] transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[--first-color] transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
