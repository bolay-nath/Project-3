const Skills = () => {
  const skills = [
    {
      name: "JAVASCRIPT",
      percent: 85,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
    {
      name: "CSS",
      percent: 80,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
    {
      name: "REACT",
      percent: 89,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
    {
      name: "BOOTSTRAP",
      percent: 90,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
    {
      name: "NODE.JS",
      percent: 70,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
    {
      name: "SOCKET.IO",
      percent: 65,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda provident illum reiciendis dolor quam. A.",
    },
  ];

  return (
    <section className="bg-[--container-color] section">
      <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
        <h2 className="section__title title-center" data-title="My Talent">
          Professional Skills
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="px-6 md:px-4 sm:px-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-[--title-color]">
                  {skill.name}
                </h3>
                <span className="text-[--title-color] font-semibold">
                  {skill.percent}%
                </span>
              </div>
              <p className="text-[--text-color] text-sm mb-4">{skill.desc}</p>
              <div className="h-0.5 bg-[--border-color] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[--first-color] relative rounded-full transition-all"
                  style={{ width: `${skill.percent}%` }}
                >
                  <span className="absolute right-0 top-1/2 transform translate-y-1/2 translate-x-1/2 w-6 h-6 bg-[--container-color] border-2 border-[--border-color] rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
