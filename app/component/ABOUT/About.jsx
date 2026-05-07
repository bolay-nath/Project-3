import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  const aboutImage =
    "https://res.cloudinary.com/dbijpygjz/image/upload/v1758723152/samples/chair.png";
  return (
    <section className="section pt-24 md:pt-16 sm:pt-12" id="about">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 grid grid-cols-2 md:grid-cols-1 gap-8 items-center">
        <div className="relative w-full h-96 md:h-72 sm:h-64 rounded-lg overflow-hidden">
          <img src={aboutImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="section__title" data-title="who am i?">
            {`I'm`} Bolay Nath a Web Developer
          </h2>
          <p className="border-b border-[--border-color] pb-6 mb-8 text-base md:text-sm">
            Hi there! I'm a passionate web developer with years of experience in
            crafting dynamic and user-friendly websites. Whether you're looking
            for a sleek React frontend, efficient MongoDB backend solutions, or
            seamless full-stack functionality, I've got you covered! Let's
            collaborate to bring your vision to life. Satisfaction guaranteed.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-6 mb-8">
            <li className="flex gap-3">
              <h3 className="font-semibold text-[--title-color]">Name:</h3>
              <span className="text-[--text-color]">Bolay Nath</span>
            </li>
            <li className="flex gap-3">
              <h3 className="font-semibold text-[--title-color]">Age:</h3>
              <span className="text-[--text-color]">24 Years</span>
            </li>
            <li className="flex gap-3">
              <h3 className="font-semibold text-[--title-color]">From:</h3>
              <span className="text-[--text-color]">Chittagong, BD</span>
            </li>
            <li className="flex gap-3">
              <h3 className="font-semibold text-[--title-color]">Email:</h3>
              <a
                href="mailto:bolaynath.82@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                bolaynath.82@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
            <a
              href="https://res.cloudinary.com/dbijpygjz/image/upload/v1758742160/Bolay_Nath_CV_kdu0zc.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <div className="flex gap-5 items-center">
              <div className="w-16 h-0.5 bg-[--text-color]"></div>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="text-[--text-color] hover:text-[--first-color] text-xl transition-colors"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="text-[--text-color] hover:text-[--first-color] text-xl transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-[--text-color] hover:text-[--first-color] text-xl transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-[--text-color] hover:text-[--first-color] text-xl transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
