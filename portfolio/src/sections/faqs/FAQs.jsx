import "./FAQs.css";
import faqslist from "./FAQslist";
import FAQ from "./FAQ";
const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions and answer that it think will be useful to get
        to know me better
      </p>
      <div className="container faqs__container">
        {faqslist.map((questionandanswer) => (
          <FAQ key={questionandanswer.id} eachfaq={questionandanswer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
