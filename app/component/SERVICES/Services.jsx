import { FaRegChartBar , FaChartLine, FaCogs , FaLaptop, FaMobile, FaPenSquare } from 'react-icons/fa';
import { FaShieldVirus, FaServer  } from "react-icons/fa6";

const Services = () => {
    const services = [
        { icon: <FaPenSquare />, title: "UI/UX Design", desc: "Services with more than 3 years of experience. Providing quality work to clients and companies.", no: "01" },
        { icon: <FaMobile />, title: "Responsive Website", desc: "I built website using React and Bootstrap, ensuring it was fully responsive and visually appealing.", no: "02" },
        { icon: <FaRegChartBar />, title: "Research & Analysis", desc: "Optimized website performance and structure to improve SEO rankings and user experience.", no: "03" },
        { icon: <FaCogs />, title: "API Development", desc: "Creating and managing APIs to enable communication between the frontend and backend.", no: "04" },
        { icon: <FaServer />, title: "Hosting & Deployment", desc: "Experience with hosting and deployment on AWS, Heroku, or similar platforms.", no: "05" },
        { icon: <FaShieldVirus />, title: "Security", desc: "Protecting data through encryption, secure authentication, and safeguarding against attacks like SQL injection.", no: "06" }
    ];

    return (
        <section className='bg-[--container-color] section' id='services'>
            <div className="container max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4">
                <h2 className="section__title title-center" data-title="Services">
                    What I do for you?
                </h2>
                <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
                    {services.map((service) => (
                        <div key={service.no} className="bg-[--container-color] border border-[--container-color] p-10 md:p-8 sm:p-6 rounded-lg relative hover:bg-[--body-color] hover:border-[--border-color] transition-all">
                            <i className="text-[--first-color] text-3xl md:text-2xl block mb-6"><{service.icon} /></i>
                            <h3 className="text-2xl md:text-xl sm:text-lg mb-4 text-[--title-color] font-semibold">{service.title}</h3>
                            <p className="text-[--text-color] text-base md:text-sm mb-4">{service.desc}</p>
                            <span className="absolute right-6 top-4 text-[--title-color] text-7xl md:text-6xl sm:text-5xl opacity-5 font-bold">{service.no}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
};

export default Services;