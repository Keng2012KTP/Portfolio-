import "./Contact.css";
import Contactdata from "./Contactdata";
const Contact = () => {
  return (
    <section id="contact">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Get In Touch
      </h2>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Here is the ways you can reach me!
      </p>
      <div
        className="container contact__container"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {Contactdata.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
