const Home = () => {
  const homePhoto =
    "https://res.cloudinary.com/dbijpygjz/image/upload/v1758722676/samples/coffee.png";
  return (
    <div
      className="bg-[--container-color] pt-36 pb-12 md:pt-28 sm:pt-24"
      id="home"
    >
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 grid grid-cols-2 md:grid-cols-1 gap-6 items-center">
        <div className="flex flex-col">
          <span className="text-lg md:text-base sm:text-sm font-semibold tracking-widest">
            Hello
          </span>
          <h1 className="text-5xl md:text-4xl sm:text-3xl leading-tight">
            <span className="font-light">{`I'm`}</span> Bolay Nath a <br />
            <span className="font-light">Website Developer</span>
          </h1>
          <p className="my-6 md:my-4 sm:my-3 text-base md:text-sm sm:text-xs leading-relaxed">
            Hi there! I'm a passionate web developer with years of experience in
            crafting dynamic and user-friendly websites. Whether you're looking
            for a sleek React frontend, efficient MongoDB backend solutions, or
            seamless full-stack functionality, I've got you covered! Let's
            collaborate to bring your vision to life. Satisfaction guaranteed.
          </p>
          <div className="flex gap-4 md:gap-3 sm:gap-2 flex-wrap">
            <a href="#contact" className="btn">
              Hire Me
            </a>
            <a href="portfolio" className="btn btn--transparent">
              Portfolio
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={homePhoto}
              alt="Profile"
              className="w-56 md:w-48 sm:w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
