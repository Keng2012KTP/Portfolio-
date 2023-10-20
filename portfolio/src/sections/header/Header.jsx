import "./Header.css";
import headerimg from "../../assets/headerimg.jpg";
import headerSNS from "./headerSNS";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={headerimg} alt="img-headerimg" />
        </div>
        <h3>Kantaphong Kanyaruean</h3>
        <p>
          "An Online Showcase of My Creative Journey, Projects, and
          Achievements"
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__social">
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
