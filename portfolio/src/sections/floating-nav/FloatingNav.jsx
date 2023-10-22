import "./FloatingNav.css";
import Fnavdata from "./fnavdata";
import Scrollspy from "react-scrollspy";
import SmNav from "./SmNav";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-500}
        className="scrollspy"
        items={["header", "about", "services", "portfolio", "contact"]}
        currentClassName="active"
      >
        {Fnavdata.map((item) => (
          <SmNav key={item.id} eachitem={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
