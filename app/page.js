import About from "./component/About";
import Contract from "./component/Contract";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Home";
import Qualification from "./component/Qualification";
import Services from "./component/Services";
import Skills from "./component/Skills";
import StyleSwitcher from "./component/StyleSwitcher";
import Testimonials from "./component/Testimonials";
import Work from "./component/Work";

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
