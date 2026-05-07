import { FaWhatsapp, FaMailBulk, FaLocationArrow } from "react-icons/fa";

const Contract = () => {
  return (
    <section className="section" id="contract">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
        <h2 className="section__title title-center" data-title="GET IN TOUCH">
          Contact Me
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-8">
          <div className="space-y-8 md:space-y-6">
            <div className="flex items-start gap-5 md:gap-4">
              <i className="text-2xl md:text-xl text-[--first-color] mt-1">
                <FaWhatsapp />
              </i>
              <div>
                <h3 className="text-lg md:text-base font-semibold text-[--title-color]">
                  Call Us
                </h3>
                <span className="text-[--text-color] text-base md:text-sm">
                  +880 18853-34295
                </span>
              </div>
            </div>
            <div className="flex items-start gap-5 md:gap-4">
              <i className="text-2xl md:text-xl text-[--first-color] mt-1">
                <FaMailBulk />
              </i>
              <div>
                <h3 className="text-lg md:text-base font-semibold text-[--title-color]">
                  Email Us
                </h3>
                <span className="text-[--text-color] text-base md:text-sm">
                  bolaynath.82@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-start gap-5 md:gap-4">
              <i className="text-2xl md:text-xl text-[--first-color] mt-1">
                <FaLocationArrow />
              </i>
              <div>
                <h3 className="text-lg md:text-base font-semibold text-[--title-color]">
                  Address
                </h3>
                <span className="text-[--text-color] text-base md:text-sm">
                  Sitakunda, Chittagong, BD
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-4 md:space-y-3">
            <div className="grid grid-cols-2 gap-4 md:gap-3">
              <input
                type="text"
                placeholder="Name"
                className="text-[--title-color] bg-[--container-color] px-3 py-2 md:py-1.5 rounded-lg md:text-sm focus:outline-none focus:ring-2 focus:ring-[--first-color]"
              />
              <input
                type="email"
                placeholder="Email"
                className="text-[--title-color] bg-[--container-color] px-3 py-2 md:py-1.5 rounded-lg md:text-sm focus:outline-none focus:ring-2 focus:ring-[--first-color]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-[--title-color] bg-[--container-color] px-3 py-2 md:py-1.5 rounded-lg md:text-sm focus:outline-none focus:ring-2 focus:ring-[--first-color]"
            />
            <textarea
              cols={30}
              rows={5}
              placeholder="Message"
              className="w-full text-[--title-color] bg-[--container-color] px-3 py-2 md:py-1.5 rounded-lg md:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[--first-color]"
            />
            <button className="btn w-full md:w-auto">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contract;
