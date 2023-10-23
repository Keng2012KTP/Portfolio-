import "./Services.css";
import services_skills_data from "./skillandservices";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h2 data-aos="fade-right" data-aos-duration="1000">
        My Skills and Services
      </h2>
      <p data-aos="fade-right" data-aos-duration="1000">
        I give u the best in all the Skills and Services below
      </p>
      <div
        className="container services__container "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {services_skills_data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__detail">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
