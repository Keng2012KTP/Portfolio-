import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Modal from "./components/Modal";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hiddenFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const FloatingNavToggleHandler = () => {
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hiddenFloatingNavHandler();
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };
  useEffect(() => {
    const checkYposition = setInterval(FloatingNavToggleHandler, 2000);
    return () => clearInterval(checkYposition);
  }, [FloatingNavToggleHandler, siteYPosition]);
  const { themeState } = useThemeContext();
  return (
    <main
      ref={mainRef}
      className={`${themeState.primary} ${themeState.background}`}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Modal />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
