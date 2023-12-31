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
        <br />
        หมายเหตุ - หากติดต่อผ่านทางโทรศัพท์ไม่ได้ ยินดีในการติดต่อผ่านทางไลน์ หรือ ส่งอีเมลล์เพื่อให้ผมตอบกลับได้ครับ
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
