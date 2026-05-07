const Testimonials = () => {
  const testimonials = [
    {
      text: "This was such an amazing experience. he had my site up and running in no time and was exceptionally responsive through the entire process. I am glad I chose to go with him and I will most likely reach out to him again as soon as I need more help.",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744675/testimonial-1_rjrjse.jpg",
      name: "John Wilson",
      identity: "New York, USA",
    },
    {
      text: "Fantastic job! The freelancer delivered high-quality work and paid great attention to every detail. He was quick to respond to messages and revisions were handled professionally. I'm very satisfied with the end result",
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744682/testimonial-2_urfmza.jpg",
      name: "Samlinton",
      identity: "New York, USA",
    },
  ];

  return (
    <section className="bg-[--container-color] section">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
        <h2 className="section__title title-center" data-title="Testimonials">
          What My Clients Say
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col">
              <p className="text-[--text-color] text-base md:text-sm mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-14 md:h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[--title-color] font-semibold text-sm md:text-xs">
                    {testimonial.name}
                  </h3>
                  <span className="text-[--text-color] text-xs">
                    {testimonial.identity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
