import "./Header.css";
import headerimg from "../../assets/headerimg.jpg";
import headerSNS from "./headerSNS";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div
          className="header__profile"
          data-aos="fade-in"
          data-aos-duration="5000"
        >
          <img src={headerimg} alt="img-headerimg" />
        </div>
        <h3 data-aos="fade-up">Kantaphong Kanyaruean</h3>
        <p data-aos="fade-up">
          "An Online Showcase of My Creative Journey, Projects, and
          Achievements"
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Works
          </a>
        </div>
        <div className="header__social" data-aos="fade-right">
          {headerSNS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
