import "./FAQs.css";
import faqslist from "./FAQslist";
import FAQ from "./FAQ";
const FAQs = () => {
  return (
    <section id="faqs">
      <h2 data-aos="fade-left" data-aos-duration="1000">
        Frequently Asked Questions
      </h2>
      <p data-aos="fade-left" data-aos-duration="1000">
        Here are some questions and answer that it think will be useful to get
        to know me better
      </p>
      <div
        className="container faqs__container"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {faqslist.map((questionandanswer) => (
          <FAQ key={questionandanswer.id} eachfaq={questionandanswer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
