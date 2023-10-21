import "./Contact.css";
import Contactdata from "./Contactdata";
const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Here is the ways you can reach me!</p>
      <div className="container contact__container">
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
