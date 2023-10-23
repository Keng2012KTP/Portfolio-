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
          <p>
            " I have completed a Full Stack Bootcamp with expertise in the MERNs
            stack. This comprehensive training has equipped me with a strong
            foundation in web development. On the front-end, I am skilled in
            building interactive and responsive user interfaces using React,
            while on the back-end, I have experience in creating server-side
            applications using Node.js and Express.js, focusing on API
            development and data management with MongoDB. I am well-versed in
            version control, deployment, security, and API integration."
          </p>
          <p>
            "My name is Keng, promise to apply these skills to make a positive
            impact in the world of web development and to remain dedicated to
            continuous growth and learning in this ever-evolving field."
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
