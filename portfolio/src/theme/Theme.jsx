import Modal from "../components/Modal";
import { primaryColors, backgroundColors } from "./themedata";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./theme.css";

const Theme = () => {
  return (
    <Modal clasName="theme__modal">
      <h3 id="">Customize theme that You Like</h3>
      <small id="">
        Change the color theme and background color to your preference.
      </small>
      <div className="theme__primary-wrapper">
        <h5 id="">Primary Color</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((primary) => (
            <PrimaryColor
              key={primary.className}
              className={primary.className}
            />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5 id="">Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((primary) => (
            <BackgroundColor
              key={primary.className}
              className={primary.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
