import About from "./component/ABOUT/About";
import Contract from "./component/CONTRACT/Contract";
import Footer from "./component/FOOTER/Footer";
import Header from "./component/HEADER/Header";
import Hero from "./component/HOME/Home";
import Qualification from "./component/QUALIFICATION/Qualification";
import Services from "./component/SERVICES/Services";
import Skills from "./component/SKILLS/Skills";
import StyleSwitcher from "./component/STYLESWITCHER/StyleSwitcher";
import Testimonials from "./component/TESTIMONIALS/Testimonials";
import Work from "./component/WORK/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Qualification />
      <Services />
      <Skills />
      <Work />
      <Testimonials />
      <Contract />
      <Footer />
      <StyleSwitcher />
    </>
  );
}
