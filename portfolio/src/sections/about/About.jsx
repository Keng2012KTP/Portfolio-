import "./About.css";
import aboutimg from "../../assets/aboutimg.jpg";
import cv from "../../assets/cv.pdf";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Card from "../../components/Card";
import aboutcarddata from "./aboutcarddata";
const About = () => {
  return (
    <section id="about">
      <div
        className="container about__container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutimg} alt="img-about left" />
          </div>
          <div className="about__tools">
            <h6 className="about__tools-header">
              I'm using tools as below-WIP
            </h6>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {aboutcarddata.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p className="about__p1">
            I have completed a Full Stack Bootcamp with expertise in the MERN
            stack. The comprehensive training has equipped me with a strong
            foundation in web development.
          </p>
          <p className="about__p2">
            On the front-end, I am capable in building interactive and
            responsive user interfaces using React, while on the back-end, I
            have experience using Node.js and Express.js, also focusing on API
            development and data management with MongoDB/PostgreSQL. I am
            well-versed in version control, deployment, security, and API
            integration.
          </p>
          <a href={cv} download className="btn primary">
            Download CV <PiDownloadSimpleBold />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
