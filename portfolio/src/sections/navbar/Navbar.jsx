import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoColorPalette } from "react-icons/io5";
import Arr from "./NavbarArr";
import { useModalContext } from "../../context/modal-context";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="jpg-logo" />
        </a>
        <ul className="nav__menu">
          {Arr.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
