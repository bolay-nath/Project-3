"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Call Me",
      detail: "+880 18853-34295",
      href: "https://wa.me/8801885334295",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      detail: "bolaynath.82@gmail.com",
      href: "mailto:bolaynath.82@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      detail: "Sitakunda, Chattogram, Bangladesh",
      href: "https://maps.google.com/?q=Sitakunda,+Chattogram,+Bangladesh",
    },
  ];
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-[var(--body-color)] relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--first-color)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--first-color)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span
            className="inline-block px-6 py-3 rounded-full mb-8 tracking-wide font-semibold
            bg-[var(--container-color)] text-[var(--first-color)]
            border border-[var(--border-color)] shadow-lg"
          >
            GET IN TOUCH
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--title-color)] leading-tight">
            Contact Me
          </h2>

          <div className="w-32 h-1 bg-[var(--first-color)] mx-auto mt-10 rounded-full" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex items-start gap-5 p-6 sm:p-8 rounded-3xl
                  bg-[var(--container-color)]
                  border border-[var(--border-color)]
                  hover:border-[var(--first-color)]/50
                  transition-all duration-500 shadow-lg hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0
                    bg-[var(--first-color)]/10
                    border border-[var(--first-color)]/20
                    group-hover:bg-[var(--first-color)]/20
                    transition-all duration-500"
                  >
                    <Icon className="text-2xl sm:text-3xl text-[var(--first-color)]" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2
                      text-[var(--title-color)]
                      group-hover:text-[var(--first-color)]
                      transition-colors duration-300"
                    >
                      {item.title}
                    </h3>

                    <p className="text-[var(--text-color)] text-base sm:text-lg leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 sm:p-10 lg:p-12
              bg-[var(--container-color)]
              border border-[var(--border-color)]
              shadow-2xl"
            >
              {/* Success */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-2xl
                  bg-green-500/10 border border-green-500/20
                  text-green-500 text-center font-medium"
                >
                  🎉 Message sent successfully!
                </motion.div>
              )}

              {/* Error */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-2xl
                  bg-red-500/10 border border-red-500/20
                  text-red-500 text-center font-medium"
                >
                  ❌ Something went wrong.
                </motion.div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl
                  bg-[var(--body-color)]
                  text-[var(--title-color)]
                  border border-[var(--border-color)]
                  placeholder:text-[var(--text-color)]
                  focus:outline-none
                  focus:border-[var(--first-color)]
                  transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl
                  bg-[var(--body-color)]
                  text-[var(--title-color)]
                  border border-[var(--border-color)]
                  placeholder:text-[var(--text-color)]
                  focus:outline-none
                  focus:border-[var(--first-color)]
                  transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl mb-5
                bg-[var(--body-color)]
                text-[var(--title-color)]
                border border-[var(--border-color)]
                placeholder:text-[var(--text-color)]
                focus:outline-none
                focus:border-[var(--first-color)]
                transition-all duration-300"
              />

              {/* Message */}
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none px-5 py-4 rounded-2xl mb-8
                bg-[var(--body-color)]
                text-[var(--title-color)]
                border border-[var(--border-color)]
                placeholder:text-[var(--text-color)]
                focus:outline-none
                focus:border-[var(--first-color)]
                transition-all duration-300"
              />

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl
                bg-[var(--first-color)]
                hover:bg-[var(--first-color)]/90
                text-white font-bold text-lg
                transition-all duration-300
                shadow-lg hover:shadow-2xl
                disabled:opacity-60"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
