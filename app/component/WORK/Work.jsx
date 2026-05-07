const Work = () => {
  const projects = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744635/project-img-1_gjx1bs.jpg",
      title: "Web Design",
      desc: "This is a short description",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744640/project-img-2_fzmqc3.jpg",
      title: "Android App",
      desc: "This is a short description",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744647/project-img-3_dgnqyy.jpg",
      title: "Photo Shop",
      desc: "This is a short description",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744654/project-img-4_qkpt3j.jpg",
      title: "UI/UX Design",
      desc: "This is a short description",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744661/project-img-5_k5dmow.jpg",
      title: "Web Design",
      desc: "This is a short description",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dbijpygjz/image/upload/v1758744668/project-img-6_lrsn3a.jpg",
      title: "Web Design",
      desc: "This is a short description",
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
        <h2 className="section__title title-center" data-title="My Portfolio">
          Recent Work
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer group rounded-lg overflow-hidden h-64 md:h-48"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl md:text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <span className="text-white text-base md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
