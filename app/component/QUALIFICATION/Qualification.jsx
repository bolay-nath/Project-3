const Qualification = () => {
    const qualifications = [
        {
            heading: "Education",
            items: [
                { subtitle: "Autodidact", icon: "+", title: "Website Development", date: "2022 - 2024", desc: "I learned website development through self-study, utilizing various online platforms such as YouTube, free resources, and diverse online tutorials." },
                { subtitle: "National University", icon: "-", title: "Bachelor of Arts", date: "2022 - 2025", desc: "I am currently pursuing a Bachelor of Arts (BA) degree. Through self-learning and practical experience, I have developed strong skills in web development." },
                { subtitle: "Autodidact", icon: "+", title: "SEO", date: "2024 - 2025", desc: "Along with my web development skills, I have also learned SEO techniques to help websites rank higher and perform better in search engines." }
            ]
        },
        {
            heading: "Experience",
            items: [
                { subtitle: "Autodidact", icon: "+", title: "Frontend Development", date: "2021 - 2022", desc: "I specialize in frontend development, creating responsive and user-friendly interfaces using modern web technologies." },
                { subtitle: "Autodidact", icon: "-", title: "Backend Programming", date: "2023 - 2024", desc: "I specialize in backend development, building robust and scalable server-side applications and APIs to power dynamic websites and applications." },
                { subtitle: "Autodidact", icon: "+", title: "Full Stack Developer", date: "2024 - Present", desc: "Working as a full stack developer, combining frontend and backend expertise to build complete web solutions." }
            ]
        }
    ];

    return (
        <section className='bg-[--container-color] section' id='experience'>
            <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
                <h2 className="section__title title-center" data-title="My Journey">Qualification</h2>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
                    {qualifications.map((qual, idx) => (
                        <div key={idx}>
                            <h3 className="text-center text-2xl md:text-xl font-semibold pb-8 md:pb-6 text-[--title-color] border-b-2 border-[--border-color]">{qual.heading}</h3>
                            <div className="space-y-6 md:space-y-4 mt-8 md:mt-6">
                                {qual.items.map((item, i) => (
                                    <div key={i} className="relative pb-6 md:pb-4 border-b md:border-0 last:border-0">
                                        <div className="flex justify-between items-start pb-4 md:pb-3">
                                            <h3 className="text-base md:text-sm font-semibold text-[--text-color]">{item.subtitle}</h3>
                                            <span className="absolute right-0 -bottom-2 w-10 h-10 md:w-8 md:h-8 bg-[--container-color] border-2 border-[--border-color] rounded-full flex items-center justify-center text-center text-xl md:text-lg text-[--title-color] font-bold">{item.icon}</span>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-start gap-4 mb-3">
                                                <h3 className="text-lg md:text-base font-semibold text-[--title-color]">{item.title}</h3>
                                                <span className="text-sm md:text-xs text-[--title-color] font-semibold whitespace-nowrap">{item.date}</span>
                                            </div>
                                            <p className="text-[--text-color] text-sm md:text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
                <div className="resume__group">
                    <h3 className="resume__heading">Education</h3>
                    <div className="resume__items">
                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">Autodidact</h3>
                                <span className="resume__icon">+</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">Website Development</h3>
                                    <span className="resume__data">2022 - 2024</span>
                                </div>
                                <div>
                                    <p className="resume__description">I learned website development through self-study, utilizing various online platforms such as YouTube, free resources, and diverse online tutorials. My learning journey involved exploring multiple sources, which allowed me to gain a well-rounded understanding of web development.</p>
                                </div>
                            </div>
                        </div>

                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">National University</h3>
                                <span className="resume__icon">-</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">Bachelor of Arts</h3>
                                    <span className="resume__data">2022 - 2025</span>
                                </div>
                                <div>
                                    <p className="resume__description">I am currently pursuing a Bachelor of Arts (BA) degree. Through self-learning and practical experience, I have developed strong skills in web development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">Autodidact</h3>
                                <span className="resume__icon">+</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">SEO</h3>
                                    <span className="resume__data">2024 - 2025</span>
                                </div>
                                <div>
                                    <p className="resume__description">Along with my web development skills, I have also learned SEO techniques to help websites rank higher and perform better in search engines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* experience section */}
                <div className="resume__group">
                    <h3 className="resume__heading">Experience</h3>
                    <div className="resume__items">
                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">Autodidact</h3>
                                <span className="resume__icon">+</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">Frontend Development</h3>
                                    <span className="resume__data">2021 - 2022</span>
                                </div>
                                <div>
                                    <p className="resume__description">I specialize in frontend development, creating responsive and user-friendly interfaces using modern web technologies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">Autodidact</h3>
                                <span className="resume__icon">-</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">Backend Programming</h3>
                                    <span className="resume__data">2023 - 2024</span>

                                </div>
                                <div>
                                    <p className="resume__description">I specialize in backend development, building robust and scalable server-side applications and APIs to power dynamic websites and applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="resume__item">
                            <div className="resume__header">
                                <h3 className="resume__subtitle">Autodidact</h3>
                                <span className="resume__icon">+</span>
                            </div>
                            <div className="resume__content">
                                <div className="resume__data-title">
                                    <h3 className="resume__title">SEO</h3>
                                    <span className="resume__data">2024 - 2025</span>
                                </div>
                                <div>
                                    <p className="resume__description">I am a full-stack web developer with expertise in frontend, backend, and SEO. I specialize in creating responsive, user-friendly websites optimized for search engines and performance.s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;