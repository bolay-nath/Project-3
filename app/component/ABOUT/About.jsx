"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutImage = "https://res.cloudinary.com/dbijpygjz/image/upload/v1758723152/samples/chair.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = document.getElementById("about");
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, []);

  const infoItems = [
    { label: "Name", value: "Bolay Nath" },
    { label: "Age", value: "24 Years" },
    { label: "From", value: "Chittagong, Bangladesh" },
    { 
      label: "Email", 
      value: "bolaynath.82@gmail.com",
      isLink: true,
      href: "mailto:bolaynath.82@gmail.com"
    }
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaLinkedin, href: "#" }
  ];

  return (
    <section id="about" className="section">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Image */}
        <div className={`flex justify-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          <div className="relative group/image w-[340px] lg:w-[380px] xl:w-[420px] md:w-[300px] sm:w-[280px]">
            
            {/* Multi-layered glow effects */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--first-color)]/10 to-[var(--first-color-dark)]/10 blur-3xl -z-10 group-hover/image:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 rounded-3xl bg-[var(--first-color-light)] blur-2xl opacity-30 group-hover/image:opacity-50 group-hover/image:scale-105 transition-all duration-500" />
            
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--first-color)] via-[var(--first-color-light)] to-[var(--first-color)] p-[3px] group-hover/image:p-[4px] transition-all duration-500">
              <div className="w-full h-full rounded-3xl bg-[var(--body-color)]" />
            </div>
            
            {/* Image */}
            <img
              src={aboutImage}
              alt="Bolay Nath - About"
              className="relative z-20 w-full h-[380px] lg:h-[420px] md:h-[340px] sm:h-[300px] object-cover rounded-3xl shadow-2xl group-hover/image:shadow-3xl group-hover/image:shadow-[var(--first-color)]/25 transition-all duration-700 cursor-pointer hover:-rotate-3 hover:scale-105"
              loading="lazy"
            />
            
            {/* Floating particles */}
            <div className="absolute top-4 -right-4 w-16 h-16 bg-[var(--first-color)]/20 rounded-2xl blur-sm animate-float" />
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-[var(--first-color-light)]/30 rounded-xl animate-float delay-300" />
          </div>
        </div>

        {/* Content */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          
          <h2
            className="section__title mb-10 max-w-lg leading-tight"
            data-title="Who Am I?"
          >
            I'm Bolay Nath <br className="hidden lg:inline" />
            <span className="block bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-dark)] bg-clip-text text-transparent font-semibold">
              a Web Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-12 pb-8 border-b border-[var(--border-color)]/50 opacity-90 max-w-xl">
            Hi there! I'm a passionate web developer with years of experience crafting 
            <span className="font-semibold text-[var(--title-color)]">modern</span> and 
            <span className="font-semibold text-[var(--title-color)]">user-friendly</span> websites.
            Whether you need a sleek React frontend, scalable backend, or full-stack web application, 
            I can help bring your ideas to life.
          </p>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
            {infoItems.map((item, index) => (
              <div 
                key={index}
                className="group p-4 rounded-2xl hover:bg-[var(--container-color)] hover:shadow-lg hover:shadow-[var(--first-color)]/10 transition-all duration-300 border border-[var(--border-color)]/30 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <h3 className="font-semibold text-[var(--title-color)] min-w-[80px] group-hover:text-[var(--first-color)] transition-colors duration-300">
                    {item.label}:
                  </h3>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-[var(--text-color)] hover:text-[var(--first-color)] hover:underline font-medium transition-all duration-300 group-hover:translate-x-1"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[var(--text-color)] font-medium group-hover:text-[var(--title-color)] transition-colors duration-300">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Social */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            
            {/* Download CV */}
            <Link
              href="https://res.cloudinary.com/dbijpygjz/image/upload/v1758742160/Bolay_Nath_CV_kdu0zc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[var(--first-color)]/30 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 w-fit px-10 py-4 text-lg font-semibold"
            >
              <span className="relative z-10">📄 Download CV</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--first-color-dark)] to-[var(--first-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
              
              <div className="flex items-center gap-4 p-4 bg-[var(--container-color)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/30 shadow-sm">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-xl text-[var(--text-color)] 
                               hover:text-[var(--first-color)] hover:bg-[var(--first-color)]/10 
                               hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[var(--first-color)]/20
                               transition-all duration-400 rounded-xl group/social"
                    aria-label={`Follow on ${social.icon.name}`}
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